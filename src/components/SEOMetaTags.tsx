import { Helmet } from 'react-helmet-async';

interface SEOMetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOMetaTags = ({ 
  title = "COIREA - Regenerative Business Transformation",
  description = "Transform your organization with conscious leadership and regenerative business practices. Strategic consulting for purpose-driven companies.",
  keywords = "organizational transformation, conscious leadership, regenerative business, business consulting",
  image = "https://coirea.com/lovable-uploads/5555f545-a4bb-46b7-9145-b8ae36a5d882.png",
  url = "/",
  type = "website"
}: SEOMetaTagsProps) => {
  const fullUrl = `https://coirea.com${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `https://coirea.com${image}`;

  return (
    <Helmet>
      {/* Essential Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="COIREA" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="COIREA" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
      {/* Performance Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://coirea.com" />
      
      {/* Theme Colors */}
      <meta name="theme-color" content="#5B6C49" />
      <meta name="msapplication-TileColor" content="#5B6C49" />
    </Helmet>
  );
};

export default SEOMetaTags;