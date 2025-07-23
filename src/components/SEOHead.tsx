
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEOHead = ({
  title = "COIREA - Regenerative Organizational Transformation",
  description = "Transform your organization from the inside out. COIREA is a regenerative consultancy helping purpose-driven companies through structural and human transformation.",
  keywords = "organizational transformation, regenerative business, conscious leadership, team retreats, organizational development, purpose-driven companies, structural transformation, human transformation",
  image = "/lovable-uploads/5555f545-a4bb-46b7-9145-b8ae36a5d882.png",
  url = "https://coirea.com",
  type = "website",
  author = "COIREA",
  publishedTime,
  modifiedTime
}: SEOHeadProps) => {
  const fullTitle = title.includes("COIREA") ? title : `${title} | COIREA`;
  const fullUrl = url.startsWith('http') ? url : `https://coirea.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://coirea.com${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:alt" content="COIREA Logo" />
      <meta property="og:site_name" content="COIREA" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:image:alt" content="COIREA Logo" />
      
      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      
      {/* Robots Meta */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Viewport and Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Preload Critical Resources */}
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;600;700&display=swap" as="style" />
      <link rel="preload" href="/lovable-uploads/9bef76c3-5f6e-42a0-831c-3a54ef706f9b.png" as="image" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
    </Helmet>
  );
};

export default SEOHead;
