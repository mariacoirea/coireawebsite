// Sitemap generation utility for COIREA website
import { supabase } from "@/integrations/supabase/client";

export const generateSitemap = async () => {
  const baseUrl = 'https://coirea.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urls = [
    {
      loc: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'weekly',
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
      changefreq: 'daily',
      priority: '0.8',
    },
  ];

  // Fetch all published blog posts with accurate dates
  try {
    const { data: posts, error } = await supabase
      .from('posts')
      .select('slug, updated_at, created_at')
      .eq('published', true)
      .order('updated_at', { ascending: false });
    
    if (!error && posts) {
      posts.forEach(post => {
        // Use updated_at if available, fallback to created_at
        const lastModified = post.updated_at || post.created_at;
        urls.push({
          loc: `${baseUrl}/insights/${post.slug}`,
          lastmod: new Date(lastModified).toISOString().split('T')[0],
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