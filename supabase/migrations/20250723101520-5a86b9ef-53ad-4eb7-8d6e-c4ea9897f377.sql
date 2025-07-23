-- Update all posts with 'Inner Work' cluster to 'Consciousness'
UPDATE public.posts 
SET cluster = 'Consciousness' 
WHERE cluster = 'Inner Work';

-- Drop the existing constraint
ALTER TABLE public.posts 
DROP CONSTRAINT IF EXISTS posts_cluster_check;

-- Add the updated constraint with the correct cluster names
ALTER TABLE public.posts 
ADD CONSTRAINT posts_cluster_check 
CHECK (cluster IN ('Transformational Business Pillars', 'Organizational Evolution', 'Consciousness', 'COIREA Stories'));