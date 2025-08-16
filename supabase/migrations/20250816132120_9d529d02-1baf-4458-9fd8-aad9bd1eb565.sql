-- Add missing RLS policy to prevent non-admin users from viewing journey submissions
-- This fixes the critical security vulnerability where any authenticated user could view customer data

-- Remove the overly permissive policy that allows anyone to view journey submissions
DROP POLICY IF EXISTS "Anyone can view journey submissions" ON public.journey_submissions;

-- Create a secure policy that only allows admins to view journey submissions
CREATE POLICY "Only admins can view journey submissions" 
ON public.journey_submissions 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));