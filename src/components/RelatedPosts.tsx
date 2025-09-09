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
  }, [currentPostId, currentCluster, currentTags]);

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

  if (loading || relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-8 border-t border-border">
      <div className="mb-8">
        <h2 className="text-2xl font-display font-semibold text-primary mb-2">
          Related Insights
        </h2>
        <p className="text-muted-foreground">
          More insights on organizational transformation and leadership
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
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
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-accent/10 text-accent text-xs">
                    {post.cluster}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {formatDate(post.created_at)}
                  </span>
                </div>
                <CardTitle className="text-lg font-display text-primary group-hover:text-primary/80 transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80 font-body leading-relaxed line-clamp-3">
                  {post.preview_snippet}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;