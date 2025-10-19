import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/hooks/useLanguage";
import LocalizedLink from "./LocalizedLink";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  cluster: string;
  created_at: string;
  title_es?: string;
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
  const { currentLanguage } = useLanguage();

  // Helper function to get translated field
  const getTranslatedField = (post: BlogPost, field: 'title') => {
    if (currentLanguage === 'es' && post.title_es) {
      return post.title_es;
    }
    return post.title;
  };

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
        .select('id, title, slug, cluster, created_at, title_es')
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
          .select('id, title, slug, cluster, created_at, title_es')
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
    <section className="mt-12 pt-8 border-t border-border mb-16">
      <div className="bg-accent/5 rounded-lg p-6 border border-border/50">
        <h2 className="text-xl font-display font-semibold text-primary mb-4">
          Related Insights
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {relatedPosts.map((post, index) => (
            <LocalizedLink 
              key={post.id}
              to={`/insights/${post.slug}`}
              className="group"
            >
              <div className="p-4 bg-background rounded-md border border-border/30 hover:border-primary/30 hover:shadow-soft transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-accent/10 text-accent rounded text-xs font-medium">
                    {post.cluster}
                  </span>
                </div>
                <h3 className="text-sm font-display font-medium text-primary group-hover:text-primary/80 transition-colors leading-tight line-clamp-3">
                  {getTranslatedField(post, 'title')}
                </h3>
              </div>
            </LocalizedLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;