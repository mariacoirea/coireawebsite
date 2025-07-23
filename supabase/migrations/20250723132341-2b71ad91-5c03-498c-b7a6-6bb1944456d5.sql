
-- Create table to store journey form submissions
CREATE TABLE public.journey_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT NOT NULL,
  role TEXT NOT NULL,
  team_size TEXT,
  challenges TEXT[],
  custom_challenge TEXT,
  goals TEXT NOT NULL,
  timeline TEXT,
  budget TEXT,
  found_us TEXT,
  additional_context TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.journey_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for public insert (anyone can submit the form)
CREATE POLICY "Anyone can submit journey form" 
ON public.journey_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy for authenticated users to view submissions (for admin purposes)
CREATE POLICY "Authenticated users can view submissions" 
ON public.journey_submissions 
FOR SELECT 
USING (auth.role() = 'authenticated');
