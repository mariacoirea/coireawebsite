-- Add admin role to maria@coirea.com user
INSERT INTO public.user_roles (user_id, role) 
VALUES ('5697cc1f-aec7-431b-84c7-f9f184e604eb', 'admin')
ON CONFLICT (user_id, role) DO NOTHING;