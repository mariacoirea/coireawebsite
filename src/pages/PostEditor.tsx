import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Save, Eye, X, Upload, Image, Copy } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import DOMPurify from 'dompurify';

const CLUSTERS = [
  "Transformational Business Pillars",
  "Organizational Evolution", 
  "Consciousness",
  "COIREA Stories"
];

const AVAILABLE_TAGS = [
  "Leadership", "Burnout", "Teal", "Light Codes", "Collaboration", 
  "Reiki", "Vision", "Culture", "Transformation", "Regenerative", 
  "Consciousness", "Well-being", "Innovation", "Strategy"
];

interface BlogPost {
  id?: string;
  title: string;
  title_es?: string;
  slug: string;
  cluster: string;
  tags: string[];
  featured_image?: string;
  preview_snippet: string;
  preview_snippet_es?: string;
  body_content: string;
  body_content_es?: string;
  seo_title?: string;
  seo_title_es?: string;
  meta_description?: string;
  meta_description_es?: string;
  seo_keywords_es?: string[];
  author: string;
  featured: boolean;
  published: boolean;
}

const PostEditor = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [newTag, setNewTag] = useState("");
  const [uploading, setUploading] = useState(false);
  const [editingLanguage, setEditingLanguage] = useState<'en' | 'es'>('en');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  const [post, setPost] = useState<BlogPost>({
    title: "",
    title_es: "",
    slug: "",
    cluster: "",
    tags: [],
    featured_image: "",
    preview_snippet: "",
    preview_snippet_es: "",
    body_content: "",
    body_content_es: "",
    seo_title: "",
    seo_title_es: "",
    meta_description: "",
    meta_description_es: "",
    seo_keywords_es: [],
    author: "María José Figueroa",
    featured: false,
    published: false
  });

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (id && id !== 'new') {
      fetchPost(id);
    } else {
      setLoading(false);
    }
  }, [id]);

  // Auto-generate slug from title
  useEffect(() => {
    if (post.title && (!id || id === 'new')) {
      const slug = post.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      setPost(prev => ({ ...prev, slug }));
    }
  }, [post.title, id]);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session?.user) {
      navigate('/auth');
      return;
    }
    
    setUser(session.user);
  };

  const fetchPost = async (postId: string) => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*, title_es, preview_snippet_es, body_content_es, seo_title_es, meta_description_es, seo_keywords_es')
        .eq('id', postId)
        .single();
      
      if (error) throw error;
      
      setPost({
        ...data,
        tags: data.tags || [],
        title_es: data.title_es || "",
        preview_snippet_es: data.preview_snippet_es || "",
        body_content_es: data.body_content_es || "",
        seo_title_es: data.seo_title_es || "",
        meta_description_es: data.meta_description_es || "",
        seo_keywords_es: data.seo_keywords_es || []
      });
    } catch (error) {
      console.error('Error fetching post:', error);
      setError('Failed to load post');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (publishNow: boolean = false) => {
    if (!post.title || !post.cluster || !post.preview_snippet || !post.body_content) {
      setError('Please fill in all required fields');
      return;
    }

    setSaving(true);
    setError("");

    try {
      const sanitizedBody = DOMPurify.sanitize(post.body_content, { USE_PROFILES: { html: true } });
      const postData = {
        ...post,
        body_content: sanitizedBody,
        published: publishNow || post.published,
        tags: post.tags.length > 0 ? post.tags : null
      };

      if (id && id !== 'new') {
        // Update existing post
        const { error } = await supabase
          .from('posts')
          .update(postData)
          .eq('id', id);
        
        if (error) throw error;
      } else {
        // Create new post
        const { error } = await supabase
          .from('posts')
          .insert([postData]);
        
        if (error) throw error;
      }

      setSuccess(true);
      setTimeout(() => {
        navigate('/admin');
      }, 1500);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setSaving(false);
    }
  };

  const addTag = () => {
    if (newTag && !post.tags.includes(newTag)) {
      setPost(prev => ({
        ...prev,
        tags: [...prev.tags, newTag]
      }));
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setPost(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const addAvailableTag = (tag: string) => {
    if (!post.tags.includes(tag)) {
      setPost(prev => ({
        ...prev,
        tags: [...prev.tags, tag]
      }));
    }
  };

  const handleImageUpload = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file');
      return;
    }

    setUploading(true);
    setError('');

    try {
      // Create unique filename
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `blog-posts/${fileName}`;

      // Upload to Supabase storage
      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      // Insert image tag at cursor position
      const textarea = textareaRef.current;
      if (textarea) {
        const cursorPosition = textarea.selectionStart;
        const imageTag = `\n\n<img src="${data.publicUrl}" alt="Blog post image" class="w-full max-w-2xl mx-auto rounded-lg shadow-lg my-6" />\n\n`;
        
        const newContent = 
          post.body_content.slice(0, cursorPosition) + 
          imageTag + 
          post.body_content.slice(cursorPosition);

        setPost(prev => ({ ...prev, body_content: newContent }));
        
        // Focus back to textarea and set cursor after the image tag
        setTimeout(() => {
          textarea.focus();
          textarea.setSelectionRange(
            cursorPosition + imageTag.length,
            cursorPosition + imageTag.length
          );
        }, 100);
      }
    } catch (error: any) {
      setError(`Upload failed: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const copyFromEnglish = () => {
    setPost(prev => ({
      ...prev,
      title_es: prev.title,
      preview_snippet_es: prev.preview_snippet,
      body_content_es: prev.body_content,
      seo_title_es: prev.seo_title || "",
      meta_description_es: prev.meta_description || ""
    }));
  };

  const getTranslationProgress = () => {
    const fields = [post.title_es, post.preview_snippet_es, post.body_content_es];
    const filled = fields.filter(f => f && f.trim().length > 0).length;
    return `${filled}/${fields.length}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate('/admin')}
                className="h-8 w-8 p-0"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <h1 className="text-xl font-display font-semibold text-primary">
                  {id && id !== 'new' ? 'Edit Post' : 'New Post'}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {user?.email}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                onClick={() => handleSave(false)}
                disabled={saving}
                variant="outline"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
              <Button
                onClick={() => handleSave(true)}
                disabled={saving}
              >
                {post.published ? 'Update & Publish' : 'Publish'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 max-w-4xl">
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert className="mb-6">
            <AlertDescription>Post saved successfully! Redirecting...</AlertDescription>
          </Alert>
        )}

        <Tabs value={editingLanguage} onValueChange={(v) => setEditingLanguage(v as 'en' | 'es')} className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <TabsList>
              <TabsTrigger value="en">🇺🇸 English</TabsTrigger>
              <TabsTrigger value="es">
                🇪🇸 Español
                {editingLanguage === 'en' && (
                  <Badge variant="outline" className="ml-2 text-xs">
                    {getTranslationProgress()}
                  </Badge>
                )}
              </TabsTrigger>
            </TabsList>
            {editingLanguage === 'es' && (
              <Button
                variant="outline"
                size="sm"
                onClick={copyFromEnglish}
                className="gap-2"
              >
                <Copy className="w-3 h-3" />
                Copy from English
              </Button>
            )}
          </div>

          <TabsContent value="en" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content - English */}
              <div className="lg:col-span-2 space-y-6">
                {/* Title */}
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={post.title}
                    onChange={(e) => setPost(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Enter post title"
                    className="text-lg"
                  />
                </div>

                {/* Slug */}
                <div className="space-y-2">
                  <Label htmlFor="slug">URL Slug *</Label>
                  <Input
                    id="slug"
                    value={post.slug}
                    onChange={(e) => setPost(prev => ({ ...prev, slug: e.target.value }))}
                    placeholder="url-friendly-slug"
                  />
                  <p className="text-xs text-muted-foreground">
                    URL: /insights/{post.slug}
                  </p>
                </div>

                {/* Preview Snippet */}
                <div className="space-y-2">
                  <Label htmlFor="preview">Preview Snippet *</Label>
                  <Textarea
                    id="preview"
                    value={post.preview_snippet}
                    onChange={(e) => setPost(prev => ({ ...prev, preview_snippet: e.target.value }))}
                    placeholder="Brief description for the post preview"
                    rows={3}
                  />
                  <p className="text-xs text-muted-foreground">
                    {post.preview_snippet.length} characters
                  </p>
                </div>

                {/* Body Content */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="content">Body Content *</Label>
                    <div className="flex gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploading}
                        className="h-8"
                      >
                        {uploading ? (
                          <>
                            <Upload className="w-3 h-3 mr-2 animate-spin" />
                            Uploading...
                          </>
                        ) : (
                          <>
                            <Image className="w-3 h-3 mr-2" />
                            Add Image
                          </>
                        )}
                      </Button>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileSelect}
                        className="hidden"
                      />
                    </div>
                  </div>
                  <Textarea
                    ref={textareaRef}
                    id="content"
                    value={post.body_content}
                    onChange={(e) => setPost(prev => ({ ...prev, body_content: e.target.value }))}
                    placeholder="Write your post content here. You can use HTML tags for formatting. Click 'Add Image' to upload and insert images."
                    rows={15}
                    className="font-mono text-sm"
                  />
                  <p className="text-xs text-muted-foreground">
                    Supports HTML formatting (p, h2, h3, strong, em, ul, ol, li, a, blockquote, img). Images are automatically inserted with responsive styling.
                  </p>
                </div>
              </div>

              {/* Sidebar - English */}
              <div className="space-y-6">
            {/* Publishing Options */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Publishing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="featured">Featured Post</Label>
                  <Switch
                    id="featured"
                    checked={post.featured}
                    onCheckedChange={(checked) => setPost(prev => ({ ...prev, featured: checked }))}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="published">Published</Label>
                  <Switch
                    id="published"
                    checked={post.published}
                    onCheckedChange={(checked) => setPost(prev => ({ ...prev, published: checked }))}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Post Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Post Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cluster">Cluster *</Label>
                  <Select value={post.cluster} onValueChange={(value) => setPost(prev => ({ ...prev, cluster: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select cluster" />
                    </SelectTrigger>
                    <SelectContent>
                      {CLUSTERS.map((cluster) => (
                        <SelectItem key={cluster} value={cluster}>
                          {cluster}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    value={post.author}
                    onChange={(e) => setPost(prev => ({ ...prev, author: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="featured_image">Featured Image URL</Label>
                  <Input
                    id="featured_image"
                    value={post.featured_image || ""}
                    onChange={(e) => setPost(prev => ({ ...prev, featured_image: e.target.value }))}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tags</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="gap-1">
                      {tag}
                      <button
                        onClick={() => removeTag(tag)}
                        className="hover:text-destructive"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add custom tag"
                    onKeyPress={(e) => e.key === 'Enter' && addTag()}
                  />
                  <Button onClick={addTag} size="sm">Add</Button>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Quick add:</p>
                  <div className="flex flex-wrap gap-1">
                    {AVAILABLE_TAGS.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => addAvailableTag(tag)}
                        className="text-xs bg-muted hover:bg-muted/80 px-2 py-1 rounded"
                        disabled={post.tags.includes(tag)}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

                {/* SEO */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">SEO</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="seo_title">SEO Title</Label>
                      <Input
                        id="seo_title"
                        value={post.seo_title || ""}
                        onChange={(e) => setPost(prev => ({ ...prev, seo_title: e.target.value }))}
                        placeholder="Leave empty to use post title"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="meta_description">Meta Description</Label>
                      <Textarea
                        id="meta_description"
                        value={post.meta_description || ""}
                        onChange={(e) => setPost(prev => ({ ...prev, meta_description: e.target.value }))}
                        placeholder="Brief description for search engines"
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="es" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content - Spanish */}
              <div className="lg:col-span-2 space-y-6">
                {/* Title Spanish */}
                <div className="space-y-2">
                  <Label htmlFor="title_es">Título (Spanish)</Label>
                  <Input
                    id="title_es"
                    value={post.title_es || ""}
                    onChange={(e) => setPost(prev => ({ ...prev, title_es: e.target.value }))}
                    placeholder="Enter Spanish title"
                    className="text-lg"
                  />
                </div>

                {/* Preview Snippet Spanish */}
                <div className="space-y-2">
                  <Label htmlFor="preview_es">Preview Snippet (Spanish)</Label>
                  <Textarea
                    id="preview_es"
                    value={post.preview_snippet_es || ""}
                    onChange={(e) => setPost(prev => ({ ...prev, preview_snippet_es: e.target.value }))}
                    placeholder="Breve descripción para la vista previa"
                    rows={3}
                  />
                  <p className="text-xs text-muted-foreground">
                    {(post.preview_snippet_es || "").length} characters
                  </p>
                </div>

                {/* Body Content Spanish */}
                <div className="space-y-2">
                  <Label htmlFor="content_es">Body Content (Spanish)</Label>
                  <Textarea
                    id="content_es"
                    value={post.body_content_es || ""}
                    onChange={(e) => setPost(prev => ({ ...prev, body_content_es: e.target.value }))}
                    placeholder="Escribe el contenido del artículo en español. Puedes usar etiquetas HTML para formato."
                    rows={15}
                    className="font-mono text-sm"
                  />
                  <p className="text-xs text-muted-foreground">
                    Soporta formato HTML (p, h2, h3, strong, em, ul, ol, li, a, blockquote, img).
                  </p>
                </div>
              </div>

              {/* Sidebar - Spanish */}
              <div className="space-y-6">
                {/* Info Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Translation Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Spanish translations are optional. If not provided, the English version will be displayed.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Progress: <Badge variant="secondary">{getTranslationProgress()}</Badge>
                    </p>
                  </CardContent>
                </Card>

                {/* SEO Spanish */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">SEO (Spanish)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="seo_title_es">SEO Title (Spanish)</Label>
                      <Input
                        id="seo_title_es"
                        value={post.seo_title_es || ""}
                        onChange={(e) => setPost(prev => ({ ...prev, seo_title_es: e.target.value }))}
                        placeholder="Dejar vacío para usar el título del artículo"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="meta_description_es">Meta Description (Spanish)</Label>
                      <Textarea
                        id="meta_description_es"
                        value={post.meta_description_es || ""}
                        onChange={(e) => setPost(prev => ({ ...prev, meta_description_es: e.target.value }))}
                        placeholder="Breve descripción para motores de búsqueda"
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default PostEditor;