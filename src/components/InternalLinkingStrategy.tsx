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

// Navigation link keys
const navigationKeys = ["home", "about", "offerings", "insights", "tools", "journey", "events"] as const;
type NavigationKey = typeof navigationKeys[number];

// Component for related content recommendations
interface RelatedContentProps {
  currentPage: NavigationKey;
  suggestions?: Array<NavigationKey>;
}

export const RelatedContent = ({ 
  currentPage, 
  suggestions = [] 
}: RelatedContentProps) => {
  const { t } = useTranslation('common');
  const { getLocalizedPath } = useLanguage();

  const defaultSuggestions: Record<NavigationKey, Array<NavigationKey>> = {
    home: ["offerings", "journey", "tools"],
    about: ["offerings", "journey", "insights"],
    offerings: ["journey", "tools", "about"],
    journey: ["offerings", "tools", "insights"],
    tools: ["journey", "offerings", "insights"],
    insights: ["offerings", "journey", "about"],
    events: ["journey", "insights", "about"]
  };

  const linksToShow = suggestions.length > 0 ? suggestions : defaultSuggestions[currentPage] || [];

  const getNavigationLink = (key: NavigationKey) => {
    const paths: Record<NavigationKey, string> = {
      home: "/",
      about: "/about",
      offerings: "/offerings",
      insights: "/insights",
      tools: "/tools",
      journey: "/journey",
      events: "/events",
    };
    return getLocalizedPath(paths[key]);
  };

  return (
    <section className="py-12 px-6 bg-warm-beige/50">
      <div className="container mx-auto max-w-4xl">
        <h3 className="text-2xl font-display font-semibold text-primary mb-8 text-center">
          {t('relatedContent.title')}
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {linksToShow.map((linkKey) => {
            return (
              <InternalLink key={linkKey} to={getNavigationLink(linkKey)} variant="card">
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