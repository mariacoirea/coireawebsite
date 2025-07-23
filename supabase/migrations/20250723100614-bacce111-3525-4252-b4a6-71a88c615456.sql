-- Update all posts with 'Energy & Intelligence' cluster to 'Inner Work'
UPDATE public.posts 
SET cluster = 'Inner Work' 
WHERE cluster = 'Energy & Intelligence';

-- Drop the existing constraint
ALTER TABLE public.posts 
DROP CONSTRAINT IF EXISTS posts_cluster_check;

-- Add the updated constraint with the correct cluster names
ALTER TABLE public.posts 
ADD CONSTRAINT posts_cluster_check 
CHECK (cluster IN ('Transformational Business Pillars', 'Organizational Evolution', 'Inner Work', 'COIREA Stories'));