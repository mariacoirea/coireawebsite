-- Create posts table for the blog CMS
CREATE TABLE public.posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  cluster TEXT NOT NULL CHECK (cluster IN ('Transformational Business Pillars', 'Organizational Evolution', 'Energy & Intelligence', 'COIREA Stories')),
  tags TEXT[],
  featured_image TEXT,
  preview_snippet TEXT NOT NULL,
  body_content TEXT NOT NULL,
  seo_title TEXT,
  meta_description TEXT,
  seo_keywords TEXT[],
  author TEXT DEFAULT 'María José Figueroa',
  featured BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (published posts only)
CREATE POLICY "Anyone can view published posts" 
ON public.posts 
FOR SELECT 
USING (published = true);

-- Create policies for admin access (all operations)
CREATE POLICY "Authenticated users can manage all posts" 
ON public.posts 
FOR ALL 
USING (auth.role() = 'authenticated');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_posts_updated_at
  BEFORE UPDATE ON public.posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for blog images
INSERT INTO storage.buckets (id, name, public) VALUES ('blog-images', 'blog-images', true);

-- Create policies for blog image uploads
CREATE POLICY "Anyone can view blog images" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'blog-images');

CREATE POLICY "Authenticated users can upload blog images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'blog-images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update blog images" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'blog-images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete blog images" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'blog-images' AND auth.role() = 'authenticated');

-- Insert sample blog posts from the existing Insights page
INSERT INTO public.posts (title, slug, cluster, preview_snippet, body_content, published, featured) VALUES
(
  'The Five Pillars of Regenerative Business',
  'five-pillars-regenerative-business',
  'Transformational Business Pillars',
  'Exploring the structural foundations that enable organizations to thrive while contributing positively to their ecosystems.',
  '<p>Exploring the structural foundations that enable organizations to thrive while contributing positively to their ecosystems. This comprehensive framework provides a roadmap for businesses seeking to create lasting positive impact.</p>',
  true,
  true
),
(
  'Conscious Leadership in Practice',
  'conscious-leadership-practice',
  'Organizational Evolution',
  'How embodied authenticity and presence transform decision-making and organizational culture.',
  '<p>How embodied authenticity and presence transform decision-making and organizational culture. Discover practical approaches to leadership that honor both individual authenticity and collective wisdom.</p>',
  true,
  false
),
(
  'Integrating Well-being as Performance Foundation',
  'wellbeing-performance-foundation',
  'Energy & Intelligence',
  'Why workplace wellness isn''t just a benefit—it''s essential infrastructure for sustainable success.',
  '<p>Why workplace wellness isn''t just a benefit—it''s essential infrastructure for sustainable success. Learn how to create organizations where well-being and performance naturally support each other.</p>',
  true,
  false
),
(
  'From Linear to Regenerative: A Business Evolution',
  'linear-regenerative-business-evolution',
  'COIREA Stories',
  'Understanding the shift from extractive to regenerative business models and what it means for the future.',
  '<p>Understanding the shift from extractive to regenerative business models and what it means for the future. Real-world examples and practical steps for organizational transformation.</p>',
  true,
  false
);