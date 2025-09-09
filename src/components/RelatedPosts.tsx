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

const RelatedPosts = ({ currentPostId, currentCluster, currentTags = [], limit = 5 }: RelatedPostsProps) => {
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
    <section className="mt-12 pt-8 border-t border-border mb-16">
      <h2 className="text-2xl font-display font-semibold text-primary mb-6">
        Related Insights
      </h2>
      
      <div className="space-y-3">
        {relatedPosts.map((post) => (
          <Link 
            key={post.id} 
            to={`/insights/${post.slug}`}
            className="block hover:text-primary/80 transition-colors group"
          >
            <h3 className="text-lg font-display font-medium text-primary group-hover:underline leading-relaxed">
              {post.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;