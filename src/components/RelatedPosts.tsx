import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  cluster: string;
  preview_snippet: string;
  featured_image?: string;
  created_at: string;
}

interface RelatedPostsProps {
  currentPostId: string;
  currentCluster: string;
  currentTags?: string[];
  limit?: number;
}

const RelatedPosts = ({ currentPostId, currentCluster, currentTags = [], limit = 3 }: RelatedPostsProps) => {
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRelatedPosts();
  }, [currentPostId, currentCluster]);

  const fetchRelatedPosts = async () => {
    try {
      // First try to find posts in the same cluster
      let { data: clusterPosts, error: clusterError } = await supabase
        .from('posts')
        .select('id, title, slug, cluster, preview_snippet, featured_image, created_at')
        .eq('published', true)
        .eq('cluster', currentCluster)
        .neq('id', currentPostId)
        .order('created_at', { ascending: false })
        .limit(limit);

      if (clusterError) throw clusterError;

      let posts = clusterPosts || [];

      // If we don't have enough posts from the same cluster, get more from other clusters
      if (posts.length < limit) {
        const remainingLimit = limit - posts.length;
        
        let { data: otherPosts, error: otherError } = await supabase
          .from('posts')
          .select('id, title, slug, cluster, preview_snippet, featured_image, created_at')
          .eq('published', true)
          .neq('cluster', currentCluster)
          .neq('id', currentPostId)
          .order('created_at', { ascending: false })
          .limit(remainingLimit);

        if (otherError) throw otherError;
        
        posts = [...posts, ...(otherPosts || [])];
      }

      setRelatedPosts(posts);
    } catch (error) {
      console.error('Error fetching related posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  if (loading || relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-12 border-t border-border">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
          Related Insights
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          More insights on organizational transformation and leadership development
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {relatedPosts.map((post, index) => (
          <Link key={post.id} to={`/insights/${post.slug}`} className="group">
            <Card className="bg-card shadow-soft hover:shadow-elegant transition-all duration-300 cursor-pointer h-full border-0 overflow-hidden group-hover:-translate-y-1">
              {post.featured_image ? (
                <div className="aspect-[16/9] bg-muted overflow-hidden relative">
                  <img 
                    src={post.featured_image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ) : (
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <div className="w-6 h-6 bg-primary/20 rounded-full" />
                    </div>
                    <p className="text-xs text-muted-foreground font-medium">Insight</p>
                  </div>
                </div>
              )}
              
              <CardHeader className="pb-4 pt-6 px-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge 
                    variant="secondary" 
                    className="bg-primary/8 text-primary border-primary/20 text-xs font-medium px-2 py-1"
                  >
                    {post.cluster}
                  </Badge>
                  <time className="text-xs text-muted-foreground font-medium" dateTime={post.created_at}>
                    {formatDate(post.created_at)}
                  </time>
                </div>
                <CardTitle className="text-xl font-display font-semibold text-primary group-hover:text-primary/90 transition-colors line-height-tight leading-tight mb-3">
                  {truncateText(post.title, 60)}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="px-6 pb-6 pt-0">
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {truncateText(post.preview_snippet, 120)}
                </p>
                
                <div className="mt-4 pt-4 border-t border-border/50">
                  <span className="inline-flex items-center text-xs font-medium text-primary group-hover:text-primary/80 transition-colors">
                    Read more
                    <svg className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;