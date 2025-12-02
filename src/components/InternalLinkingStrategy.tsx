import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";

interface InternalLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  variant?: "inline" | "button" | "card";
}

const InternalLink = ({ 
  to, 
  children, 
  className = "", 
  variant = "inline" 
}: InternalLinkProps) => {
  const baseClasses = "transition-colors duration-300 hover:text-primary/80";
  
  switch (variant) {
    case "button":
      return (
        <Link to={to} className={className}>
          <Button variant="outline" className="group">
            {children}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      );
    
    case "card":
      return (
        <Link 
          to={to} 
          className={`block p-6 bg-card/60 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-primary/20 hover:shadow-lg transition-all duration-300 ${className}`}
        >
          {children}
        </Link>
      );
    
    default:
      return (
        <Link 
          to={to} 
          className={`${baseClasses} text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary/60 ${className}`}
        >
          {children}
        </Link>
      );
  }
};

// Pre-defined internal navigation links for consistent SEO
export const SEONavigationLinks = {
  home: { to: "/", text: "Transform Your Organization", keywords: "organizational transformation" },
  about: { to: "/about", text: "About COIREA", keywords: "conscious leadership team" },
  platform: { to: "/platform", text: "Our Platform", keywords: "organizational intelligence platform" },
  journey: { to: "/journey", text: "Start Your Journey", keywords: "free consultation" },
  tools: { to: "/tools", text: "Assessment Tools", keywords: "organizational health assessment" },
  insights: { to: "/insights", text: "Insights & Articles", keywords: "business transformation insights" },
  events: { to: "/events", text: "Community Events", keywords: "leadership events" }
};

// Component for related content recommendations
interface RelatedContentProps {
  currentPage: keyof typeof SEONavigationLinks;
  suggestions?: Array<keyof typeof SEONavigationLinks>;
}

export const RelatedContent = ({ 
  currentPage, 
  suggestions = [] 
}: RelatedContentProps) => {
  const { t } = useTranslation('common');
  const { getLocalizedPath } = useLanguage();
  
  const defaultSuggestions: Record<keyof typeof SEONavigationLinks, Array<keyof typeof SEONavigationLinks>> = {
    home: ["platform", "tools", "about"],
    about: ["platform", "journey", "insights"],
    platform: ["journey", "tools", "about"],
    journey: ["platform", "tools", "insights"],
    tools: ["journey", "platform", "insights"],
    insights: ["platform", "journey", "about"],
    events: ["journey", "insights", "about"]
  };

  const linksToShow = suggestions.length > 0 ? suggestions : defaultSuggestions[currentPage] || [];

  return (
    <section className="py-12 px-6 bg-warm-beige/50">
      <div className="container mx-auto max-w-4xl">
        <h3 className="text-2xl font-display font-semibold text-primary mb-8 text-center">
          {t('relatedContent.title')}
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {linksToShow.map((linkKey) => {
            const link = SEONavigationLinks[linkKey];
            return (
              <InternalLink key={linkKey} to={getLocalizedPath(link.to)} variant="card">
                <h4 className="font-display font-semibold text-primary mb-2">
                  {t(`relatedContent.links.${linkKey}.text`)}
                </h4>
                <p className="text-sm text-foreground/70 mb-3">
                  {t('relatedContent.explore')} {t(`relatedContent.links.${linkKey}.keywords`)}
                </p>
                <div className="flex items-center text-primary text-sm">
                  <span>{t('relatedContent.learnMore')}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </InternalLink>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InternalLink;