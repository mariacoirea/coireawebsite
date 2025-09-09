import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  cluster: string;
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
    if (currentPostId && currentCluster) {
      fetchRelatedPosts();
    }
  }, [currentPostId, currentCluster]);

  const fetchRelatedPosts = async () => {
    try {
      // First try to find posts in the same cluster
      let { data: clusterPosts, error: clusterError } = await supabase
        .from('posts')
        .select('id, title, slug, cluster, created_at')
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
          .select('id, title, slug, cluster, created_at')
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

  if (loading || relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-12 border-t border-border mb-16">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-display font-bold text-primary mb-4">
          Related Insights
        </h2>
        <p className="text-muted-foreground mb-8 text-lg">
          More insights on organizational transformation and leadership
        </p>
        
        <div className="space-y-6">
          {relatedPosts.map((post, index) => (
            <article key={post.id} className="group">
              <Link 
                to={`/insights/${post.slug}`}
                className="block"
              >
                <div className="flex items-start gap-4 p-6 rounded-lg border border-border/50 hover:border-primary/20 hover:bg-accent/5 transition-all duration-300 hover:shadow-soft">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <span className="text-sm font-bold text-primary">{index + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-display font-semibold text-primary group-hover:text-primary/80 transition-colors leading-tight mb-2 pr-4">
                      {post.title}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                        {post.cluster}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;