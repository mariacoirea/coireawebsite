
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/OptimizedImage";
import { Mail, MapPin, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import LocalizedLink from "@/components/LocalizedLink";

const Footer = () => {
  const { t } = useTranslation('common');
  
  return (
    <footer className="bg-primary/95 text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <OptimizedImage 
                src="/lovable-uploads/e067195f-6380-4731-875b-50e5cf44f94b.png" 
                alt="COIREA Logo - Organizational Intelligence Platform" 
                className="w-12 h-12"
                width={48}
                height={48}
                priority={true}
              />
              <span className="text-3xl font-display font-semibold">COIREA</span>
            </div>
            
            <p className="text-primary-foreground/80 font-body leading-relaxed mb-6 max-w-md">
              {t('footer.tagline')}
            </p>
            
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-primary-foreground/10"
                asChild
              >
                <a href="https://www.linkedin.com/company/coirea" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">{t('footer.platformFeatures.title')}</h3>
            <ul className="space-y-3 font-body">
              <li>
                <LocalizedLink to="/platform" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t('footer.platformFeatures.health')}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink to="/platform" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t('footer.platformFeatures.insights')}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink to="/platform" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t('footer.platformFeatures.leadership')}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink to="/platform" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t('footer.platformFeatures.impact')}
                </LocalizedLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">{t('footer.contact.title')}</h3>
            <div className="space-y-4 font-body">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">{t('footer.contact.email')}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-primary-foreground/80">
                  Organizational Intelligence Platform<br />
                  Serving organizations worldwide
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-6 py-6">
          <div className="text-center">
            <div className="text-sm text-primary-foreground/60 font-body">
              {t('footer.copyright')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
