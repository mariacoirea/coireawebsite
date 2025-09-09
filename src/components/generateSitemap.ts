// Sitemap generation utility for COIREA website
import { supabase } from "@/integrations/supabase/client";

export const generateSitemap = async () => {
  const baseUrl = 'https://coirea.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urls = [
    {
      loc: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '1.0',
    },
    {
      loc: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      loc: `${baseUrl}/offerings`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9',
    },
    {
      loc: `${baseUrl}/journey`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9',
    },
    {
      loc: `${baseUrl}/tools`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.7',
    },
    {
      loc: `${baseUrl}/events`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.6',
    },
    {
      loc: `${baseUrl}/insights`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8',
    },
  ];

  // Fetch published blog posts and add them to sitemap
  try {
    const { data: posts, error } = await supabase
      .from('posts')
      .select('slug, updated_at')
      .eq('published', true)
      .order('created_at', { ascending: false });
    
    if (!error && posts) {
      posts.forEach(post => {
        urls.push({
          loc: `${baseUrl}/insights/${post.slug}`,
          lastmod: new Date(post.updated_at).toISOString().split('T')[0],
          changefreq: 'monthly',
          priority: '0.7',
        });
      });
    }
  } catch (error) {
    console.error('Error fetching posts for sitemap:', error);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};