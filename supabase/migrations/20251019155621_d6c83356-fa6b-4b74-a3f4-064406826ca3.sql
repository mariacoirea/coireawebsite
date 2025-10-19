-- Add multilingual support to posts table
-- This enables Spanish translations and language management

-- Add language column (default to 'en' for existing posts)
ALTER TABLE public.posts 
ADD COLUMN IF NOT EXISTS language text DEFAULT 'en' CHECK (language IN ('en', 'es'));

-- Add translation_group column to link translated versions together
ALTER TABLE public.posts 
ADD COLUMN IF NOT EXISTS translation_group uuid;

-- Add Spanish content columns
ALTER TABLE public.posts 
ADD COLUMN IF NOT EXISTS title_es text,
ADD COLUMN IF NOT EXISTS body_content_es text,
ADD COLUMN IF NOT EXISTS preview_snippet_es text,
ADD COLUMN IF NOT EXISTS meta_description_es text,
ADD COLUMN IF NOT EXISTS seo_title_es text,
ADD COLUMN IF NOT EXISTS seo_keywords_es text[];

-- Create index on language for faster queries
CREATE INDEX IF NOT EXISTS idx_posts_language ON public.posts(language);

-- Create index on translation_group for linking translations
CREATE INDEX IF NOT EXISTS idx_posts_translation_group ON public.posts(translation_group);

-- Add foreign key constraint for translation_group (self-referencing)
ALTER TABLE public.posts
ADD CONSTRAINT fk_posts_translation_group 
FOREIGN KEY (translation_group) REFERENCES public.posts(id) ON DELETE SET NULL;

-- Update existing posts to set their own ID as translation_group
UPDATE public.posts 
SET translation_group = id 
WHERE translation_group IS NULL;

-- Comment on columns for documentation
COMMENT ON COLUMN public.posts.language IS 'Content language: en (English) or es (Spanish)';
COMMENT ON COLUMN public.posts.translation_group IS 'UUID linking translated versions of the same post';
COMMENT ON COLUMN public.posts.title_es IS 'Spanish translation of title';
COMMENT ON COLUMN public.posts.body_content_es IS 'Spanish translation of body content';
COMMENT ON COLUMN public.posts.preview_snippet_es IS 'Spanish translation of preview snippet';
COMMENT ON COLUMN public.posts.meta_description_es IS 'Spanish translation of meta description';
COMMENT ON COLUMN public.posts.seo_title_es IS 'Spanish translation of SEO title';
COMMENT ON COLUMN public.posts.seo_keywords_es IS 'Spanish keywords array for SEO';