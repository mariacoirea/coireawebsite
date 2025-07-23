import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { Search } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  cluster: string;
  preview_snippet: string;
  featured_image?: string;
  author: string;
  featured: boolean;
  created_at: string;
}

const CLUSTERS = [
  "All",
  "Transformational Business Pillars",
  "Organizational Evolution", 
  "Inner Work",
  "COIREA Stories"
];

// Helper function to get shorter display names for mobile
const getDisplayName = (cluster: string) => {
  switch (cluster) {
    case "Transformational Business Pillars":
      return { full: cluster, short: "Business" };
    case "Organizational Evolution":
      return { full: cluster, short: "Evolution" };
    case "Inner Work":
      return { full: cluster, short: "Inner Work" };
    case "COIREA Stories":
      return { full: cluster, short: "Stories" };
    default:
      return { full: cluster, short: cluster };
  }
};

const Insights = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [activeCluster, setActiveCluster] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    filterPosts();
  }, [posts, activeCluster, searchTerm]);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('published', true)
        .order('featured', { ascending: false })
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterPosts = () => {
    let filtered = posts;
    
    if (activeCluster !== "All") {
      filtered = filtered.filter(post => post.cluster === activeCluster);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.preview_snippet.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredPosts(filtered);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-8 leading-tight">
              Insights
            </h1>
            <p className="text-xl text-muted-foreground font-body leading-relaxed">
              Thoughts, frameworks, and discoveries from our work in regenerative 
              organizational transformation.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search insights..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Tabs value={activeCluster} onValueChange={setActiveCluster} className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8">
                {CLUSTERS.map((cluster) => {
                  const displayName = getDisplayName(cluster);
                  return (
                    <TabsTrigger key={cluster} value={cluster} className="text-xs sm:text-sm">
                      <span className="hidden sm:inline">{displayName.full}</span>
                      <span className="sm:hidden">{displayName.short}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </Tabs>
          </div>
        </section>

        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <section className="py-8 px-6">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-2xl font-display font-semibold text-primary mb-6">Featured</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <Link key={post.id} to={`/insights/${post.slug}`}>
                    <Card className="bg-card shadow-soft hover:shadow-elegant transition-shadow cursor-pointer group">
                      {post.featured_image && (
                        <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                          <img 
                            src={post.featured_image} 
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <div className="flex items-center justify-between mb-3">
                          <Badge variant="secondary" className="bg-accent/10 text-accent">
                            {post.cluster}
                          </Badge>
                          <span className="text-sm font-body text-muted-foreground">
                            {formatDate(post.created_at)}
                          </span>
                        </div>
                        <CardTitle className="text-2xl font-display text-primary group-hover:text-primary/80 transition-colors">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80 font-body leading-relaxed mb-4">
                          {post.preview_snippet}
                        </p>
                        <div className="flex items-center justify-end">
                          <Badge className="bg-accent/20 text-accent border-accent/30">
                            Featured
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Posts Grid */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            {loading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Loading insights...</p>
              </div>
            ) : regularPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No insights found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <Link key={post.id} to={`/insights/${post.slug}`}>
                    <Card className="bg-card shadow-soft hover:shadow-elegant transition-shadow cursor-pointer group h-full">
                      {post.featured_image && (
                        <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                          <img 
                            src={post.featured_image} 
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <div className="flex items-center justify-between mb-3">
                          <Badge variant="secondary" className="bg-accent/10 text-accent">
                            {post.cluster}
                          </Badge>
                          <span className="text-sm font-body text-muted-foreground">
                            {formatDate(post.created_at)}
                          </span>
                        </div>
                        <CardTitle className="text-xl font-display text-primary group-hover:text-primary/80 transition-colors">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80 font-body leading-relaxed text-sm">
                          {post.preview_snippet}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Insights;
