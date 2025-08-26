import { Helmet } from "react-helmet-async";

interface OptimizedSEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  canonicalUrl?: string;
}

const OptimizedSEOHead = ({
  title,
  description,
  keywords,
  url = "/",
  image = "/lovable-uploads/5555f545-a4bb-46b7-9145-b8ae36a5d882.png",
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  canonicalUrl
}: OptimizedSEOHeadProps) => {
  const fullUrl = `https://coirea.com${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `https://coirea.com${image}`;
  const canonical = canonicalUrl || fullUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author || "COIREA Team"} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="COIREA - Regenerative Organizational Transformation" />
      <meta property="og:site_name" content="COIREA" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content="COIREA - Regenerative Organizational Transformation" />
      <meta name="twitter:site" content="@coirea" />
      <meta name="twitter:creator" content="@coirea" />

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

      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#5B6C49" />
      <meta name="msapplication-TileColor" content="#5B6C49" />

      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Schema.org for rich snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": title,
          "description": description,
          "url": fullUrl,
          "isPartOf": {
            "@type": "WebSite",
            "name": "COIREA",
            "url": "https://coirea.com"
          },
          "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": fullImageUrl
          },
          "datePublished": publishedTime,
          "dateModified": modifiedTime || new Date().toISOString(),
          "author": {
            "@type": "Organization",
            "name": "COIREA"
          }
        })}
      </script>
    </Helmet>
  );
};

export default OptimizedSEOHead;