
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/hooks/useLanguage';

interface StructuredDataProps {
  type?: 'organization' | 'article' | 'service' | 'faq';
  data?: any;
}

const StructuredData = ({ type = 'organization', data }: StructuredDataProps) => {
  const { currentLanguage } = useLanguage();
  
  const getStructuredData = () => {
    const baseOrganization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "COIREA",
      "description": "Regenerative consultancy helping purpose-driven organizations through structural and human transformation.",
      "url": "https://coirea.com",
      "logo": "https://coirea.com/lovable-uploads/5555f545-a4bb-46b7-9145-b8ae36a5d882.png",
      "image": "https://coirea.com/lovable-uploads/9bef76c3-5f6e-42a0-831c-3a54ef706f9b.png",
      "foundingDate": "2023",
      "founder": {
        "@type": "Person",
        "name": "Maria Jose Figueroa",
        "jobTitle": "Founder & Conscious Leadership Catalyst"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "url": "https://coirea.com/journey",
        "availableLanguage": ["English", "Spanish"]
      },
      "sameAs": [
        "https://linkedin.com/company/coirea"
      ],
      "industry": "Management Consulting",
      "keywords": "organizational transformation, regenerative business, conscious leadership, team retreats, organizational development, purpose-driven companies",
      "services": [
        "Organizational Transformation",
        "Leadership Coaching", 
        "Culture Development",
        "Regenerative Business Consulting",
        "Team Retreats",
        "Fractional Operations"
      ]
    };

    switch (type) {
      case 'organization':
        return baseOrganization;
      
      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Organizational Transformation Consulting",
          "provider": baseOrganization,
          "description": "Comprehensive organizational transformation services including leadership coaching, culture development, and regenerative business programs.",
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "COIREA Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Organizational Transformation",
                  "description": "6-18 month comprehensive partnership for holistic restructuring"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Leadership Coaching",
                  "description": "1:1 guidance for conscious leadership development"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Fractional Operations",
                  "description": "Embedded strategic support for growing organizations"
                }
              }
            ]
          }
        };

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": data?.title || "COIREA Insights",
          "description": data?.description || "Expert insights on organizational transformation",
          "image": data?.image || "https://coirea.com/lovable-uploads/5555f545-a4bb-46b7-9145-b8ae36a5d882.png",
          "datePublished": data?.publishedTime,
          "dateModified": data?.modifiedTime,
          "author": {
            "@type": "Person",
            "name": "María José Figueroa",
            "url": "https://coirea.com/about"
          },
          "publisher": {
            "@type": "Organization",
            "name": "COIREA",
            "logo": {
              "@type": "ImageObject",
              "url": "https://coirea.com/lovable-uploads/9bef76c3-5f6e-42a0-831c-3a54ef706f9b.png",
              "width": "600",
              "height": "60"
            },
            "url": "https://coirea.com"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data?.url || "https://coirea.com"
          },
          "articleBody": data?.bodyContent?.substring(0, 500) || data?.description,
          "inLanguage": currentLanguage === 'es' ? 'es-ES' : 'en-US',
          "isAccessibleForFree": "True"
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data?.questions?.map((q: any) => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer
            }
          })) || []
        };
      
      default:
        return baseOrganization;
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
