
-- Update the cluster name from "Energy & Intelligence" to "Inner Work" in existing posts
UPDATE public.posts 
SET cluster = 'Inner Work' 
WHERE cluster = 'Energy & Intelligence';

-- Update the check constraint to include the new cluster name
ALTER TABLE public.posts 
DROP CONSTRAINT IF EXISTS posts_cluster_check;

ALTER TABLE public.posts 
ADD CONSTRAINT posts_cluster_check 
CHECK (cluster IN ('Transformational Business Pillars', 'Organizational Evolution', 'Inner Work', 'COIREA Stories'));
