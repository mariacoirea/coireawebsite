
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OptimizedImage from "@/components/OptimizedImage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Linkedin, Mail, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import DOMPurify from 'dompurify';
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedPosts from "@/components/RelatedPosts";
import { calculateReadingTime, formatReadingTime } from "@/lib/readingTime";
import { useLanguage } from "@/hooks/useLanguage";
import LocalizedLink from "@/components/LocalizedLink";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  cluster: string;
  tags?: string[];
  featured_image?: string;
  preview_snippet: string;
  body_content: string;
  seo_title?: string;
  meta_description?: string;
  author: string;
  created_at: string;
  updated_at: string;
  title_es?: string;
  body_content_es?: string;
  preview_snippet_es?: string;
  meta_description_es?: string;
  seo_title_es?: string;
  seo_keywords_es?: string[];
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [readingTime, setReadingTime] = useState<number>(0);
  const { currentLanguage, getLocalizedPath } = useLanguage();

  useEffect(() => {
    if (slug) {
      fetchPost(slug);
    }
  }, [slug]);

  const fetchPost = async (postSlug: string) => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', postSlug)
        .eq('published', true)
        .maybeSingle();
      
      if (error) throw error;
      
      if (data) {
        setPost(data);
        // Calculate reading time using the appropriate language
        const bodyContent = currentLanguage === 'es' && data.body_content_es ? data.body_content_es : data.body_content;
        const estimatedTime = calculateReadingTime(bodyContent);
        setReadingTime(estimatedTime);
        
        // Update document title and meta description
        const title = currentLanguage === 'es' && data.title_es ? data.title_es : data.title;
        const seoTitle = currentLanguage === 'es' && data.seo_title_es ? data.seo_title_es : data.seo_title;
        const metaDesc = currentLanguage === 'es' && data.meta_description_es ? data.meta_description_es : data.meta_description;
        
        document.title = seoTitle || `${title} | COIREA Insights`;
        
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription && metaDesc) {
          metaDescription.setAttribute('content', metaDesc);
        }
      } else {
        setNotFound(true);
      }
    } catch (error) {
      console.error('Error fetching post:', error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const sharePost = (platform: string) => {
    const url = window.location.href;
    const title = post?.title || '';
    
    switch (platform) {
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'email':
        window.open(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`, '_blank');
        break;
      default:
        navigator.clipboard.writeText(url);
        break;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto max-w-4xl px-6 py-20">
            <div className="text-center">
              <p className="text-muted-foreground">Loading...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto max-w-4xl px-6 py-20">
            <div className="text-center">
              <h1 className="text-4xl font-display font-semibold text-primary mb-4">Post Not Found</h1>
              <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
              <LocalizedLink to="/insights">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Insights
                </Button>
              </LocalizedLink>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={(currentLanguage === 'es' && post.seo_title_es) || post.seo_title || `${(currentLanguage === 'es' && post.title_es) || post.title} | Expert Business Insights | COIREA`}
        description={(currentLanguage === 'es' && post.meta_description_es) || post.meta_description || `${((currentLanguage === 'es' && post.preview_snippet_es) || post.preview_snippet).substring(0, 140)}... | ${formatReadingTime(readingTime)} | Expert insights on ${post.cluster.toLowerCase()}`}
        keywords={`business insights, ${post.cluster.toLowerCase()}, conscious leadership, organizational transformation, leadership development, business strategy, ${post.tags?.join(', ') || ''}`}
        url={`${getLocalizedPath('/insights')}/${post.slug}`}
        image={post.featured_image || "/lovable-uploads/5555f545-a4bb-46b7-9145-b8ae36a5d882.png"}
        type="article"
        publishedTime={post.created_at}
        modifiedTime={post.updated_at}
        author="COIREA"
      />
      <StructuredData 
        type="article"
        data={{
          title: post.title,
          description: post.preview_snippet,
          image: post.featured_image,
          url: `https://coirea.com/insights/${post.slug}`,
          publishedTime: post.created_at,
          modifiedTime: post.updated_at
        }}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
      <main className="pt-20">
        {/* Breadcrumbs */}
        <section className="py-8 px-6">
          <div className="container mx-auto max-w-4xl">
            <Breadcrumbs 
              items={[
                { label: "Business Insights", href: "/insights" },
                { label: post.title }
              ]} 
            />
          </div>
        </section>

        {/* Article Header */}
        <article className="px-6">
          <div className="container mx-auto max-w-4xl">
            {/* Cluster Badge */}
            <Badge variant="secondary" className="bg-accent/10 text-accent mb-6">
              {post.cluster}
            </Badge>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-primary mb-6 leading-tight">
              {(currentLanguage === 'es' && post.title_es) || post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-4 mb-4 sm:mb-0">
                <span className="text-muted-foreground font-body">{formatDate(post.created_at)}</span>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-body">{formatReadingTime(readingTime)}</span>
                </div>
              </div>
              
              {/* Share Buttons */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground mr-2">Share:</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => sharePost('linkedin')}
                  className="h-8 w-8 p-0"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => sharePost('email')}
                  className="h-8 w-8 p-0"
                >
                  <Mail className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => sharePost('copy')}
                  className="h-8 w-8 p-0"
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Featured Image */}
            {post.featured_image && (
              <div className="mb-12">
                <OptimizedImage
                  src={post.featured_image}
                  alt={`${post.title} - COIREA business insights on organizational transformation and conscious leadership`}
                  className="w-full rounded-lg shadow-soft"
                  width={800}
                  height={400}
                  priority={true}
                />
              </div>
            )}

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none font-body 
                prose-headings:font-display prose-headings:text-primary prose-headings:leading-tight
                prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-6 prose-h1:mt-8
                prose-h2:text-3xl prose-h2:font-semibold prose-h2:mb-4 prose-h2:mt-8 prose-h2:border-b prose-h2:border-border prose-h2:pb-2
                prose-h3:text-2xl prose-h3:font-semibold prose-h3:mb-3 prose-h3:mt-6
                prose-h4:text-xl prose-h4:font-semibold prose-h4:mb-3 prose-h4:mt-6
                prose-h5:text-lg prose-h5:font-semibold prose-h5:mb-2 prose-h5:mt-4
                prose-h6:text-base prose-h6:font-semibold prose-h6:mb-2 prose-h6:mt-4
                prose-p:text-foreground/90 prose-p:mb-4 prose-p:leading-relaxed
                prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                prose-strong:text-foreground prose-strong:font-semibold
                prose-em:text-foreground prose-em:italic
                prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-foreground/80 prose-blockquote:bg-accent/5 prose-blockquote:py-2 prose-blockquote:my-6 prose-blockquote:rounded-r-lg
                prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
                prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
                prose-li:my-1 prose-li:text-foreground/90
                prose-code:bg-muted prose-code:text-foreground prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
                prose-pre:bg-muted prose-pre:text-foreground prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:my-6
                prose-img:rounded-lg prose-img:shadow-soft prose-img:my-8 prose-img:mx-auto prose-img:max-w-full prose-img:h-auto
                prose-hr:border-border prose-hr:my-8
                prose-table:w-full prose-table:border-collapse prose-table:my-6
                prose-th:border prose-th:border-border prose-th:bg-muted prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:font-semibold
                prose-td:border prose-td:border-border prose-td:px-4 prose-td:py-2"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize((currentLanguage === 'es' && post.body_content_es) || post.body_content, { USE_PROFILES: { html: true } }) }}
            />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-sm font-body font-semibold text-muted-foreground mb-6 uppercase tracking-wide">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Related Posts */}
            <RelatedPosts 
              currentPostId={post.id}
              currentCluster={post.cluster}
              currentTags={post.tags}
            />

          </div>
        </article>
      </main>
      <Footer />
      </div>
    </>
  );
};

export default BlogPost;
