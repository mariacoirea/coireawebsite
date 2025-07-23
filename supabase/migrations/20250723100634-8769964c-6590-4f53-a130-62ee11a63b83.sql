-- Step 1: Drop the existing constraint that prevents the update
ALTER TABLE public.posts 
DROP CONSTRAINT posts_cluster_check;

-- Step 2: Update all posts with 'Energy & Intelligence' cluster to 'Inner Work'
UPDATE public.posts 
SET cluster = 'Inner Work' 
WHERE cluster = 'Energy & Intelligence';

-- Step 3: Add the updated constraint with the correct cluster names
ALTER TABLE public.posts 
ADD CONSTRAINT posts_cluster_check 
CHECK (cluster IN ('Transformational Business Pillars', 'Organizational Evolution', 'Inner Work', 'COIREA Stories'));