
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type?: 'organization' | 'article' | 'service';
  data?: any;
}

const StructuredData = ({ type = 'organization', data }: StructuredDataProps) => {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "COIREA",
          "description": "Regenerative consultancy helping organizations realign their systems, culture, and leadership through structural and human transformation.",
          "url": "https://coirea.com",
          "logo": "https://coirea.com/lovable-uploads/5555f545-a4bb-46b7-9145-b8ae36a5d882.png",
          "image": "https://coirea.com/lovable-uploads/9bef76c3-5f6e-42a0-831c-3a54ef706f9b.png",
          "sameAs": [
            "https://www.linkedin.com/company/coirea"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": "English"
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          },
          "foundingDate": "2024",
          "numberOfEmployees": "1-10",
          "industry": "Management Consulting",
          "keywords": "organizational transformation, regenerative business, conscious leadership, team retreats, organizational development",
          "services": [
            {
              "@type": "Service",
              "name": "Organizational Transformation",
              "description": "Comprehensive organizational transformation programs focusing on structural and human elements."
            },
            {
              "@type": "Service", 
              "name": "Team Retreats",
              "description": "Transformative team retreats designed to enhance collaboration and purpose alignment."
            },
            {
              "@type": "Service",
              "name": "Leadership Development",
              "description": "Conscious leadership development programs for purpose-driven organizations."
            }
          ]
        };
      
      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data?.title,
          "description": data?.description,
          "image": data?.image,
          "author": {
            "@type": "Organization",
            "name": "COIREA"
          },
          "publisher": {
            "@type": "Organization",
            "name": "COIREA",
            "logo": {
              "@type": "ImageObject",
              "url": "https://coirea.com/lovable-uploads/5555f545-a4bb-46b7-9145-b8ae36a5d882.png"
            }
          },
          "datePublished": data?.publishedTime,
          "dateModified": data?.modifiedTime,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data?.url
          }
        };
      
      default:
        return {};
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};

export default StructuredData;
