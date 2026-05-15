
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/OptimizedImage";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LocalizedLink from "@/components/LocalizedLink";
import LanguageSwitch from "@/components/LanguageSwitch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const { t } = useTranslation('common');

  const closeMenu = () => setIsMenuOpen(false);

  const resourcesLabel = t('header.nav.resources', 'RESOURCES').toUpperCase();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <LocalizedLink to="/">
              <OptimizedImage 
                src="/lovable-uploads/ea999de3-6404-4e30-b9e9-4f78f806f6dd.png" 
                alt="COIREA - Conscious Leadership & Regenerative Business Transformation Logo" 
                className="h-12 w-auto"
                width={180}
                height={48}
                priority={true}
              />
            </LocalizedLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <LocalizedLink to="/platform" className="text-foreground hover:text-primary transition-colors font-body font-medium">
              {t('header.nav.platform').toUpperCase()}
            </LocalizedLink>
            <LocalizedLink to="/purpose" className="text-foreground hover:text-primary transition-colors font-body font-medium">
              {t('header.nav.purpose', 'PURPOSE').toUpperCase()}
            </LocalizedLink>
            <LocalizedLink to="/guardians" className="text-foreground hover:text-primary transition-colors font-body font-medium">
              {t('header.nav.guardians', 'GUARDIANS').toUpperCase()}
            </LocalizedLink>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-body font-medium outline-none">
                {resourcesLabel}
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-background border border-border z-50">
                <DropdownMenuItem asChild>
                  <LocalizedLink to="/insights" className="cursor-pointer font-body">
                    {t('header.nav.insights').toUpperCase()}
                  </LocalizedLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <LocalizedLink to="/tools" className="cursor-pointer font-body">
                    {t('header.nav.tools').toUpperCase()}
                  </LocalizedLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <LocalizedLink to="/about" className="text-foreground hover:text-primary transition-colors font-body font-medium">
              {t('header.nav.about').toUpperCase()}
            </LocalizedLink>
            <LanguageSwitch />
            <LocalizedLink to="/journey">
              <Button variant="outline" size="default" className="border-[#5B6C49]/30 text-[#5B6C49] hover:bg-[#5B6C49]/10 transition-all duration-300 rounded-full px-8">
                {t('header.cta').toUpperCase()}
              </Button>
            </LocalizedLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary/5 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 border-t border-border pt-6 space-y-4">
            <LocalizedLink to="/platform" onClick={closeMenu} className="block text-foreground hover:text-primary transition-colors font-body font-medium py-2">
              {t('header.nav.platform').toUpperCase()}
            </LocalizedLink>
            <LocalizedLink to="/purpose" onClick={closeMenu} className="block text-foreground hover:text-primary transition-colors font-body font-medium py-2">
              {t('header.nav.purpose', 'PURPOSE').toUpperCase()}
            </LocalizedLink>

            <div>
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="flex items-center justify-between w-full text-foreground hover:text-primary transition-colors font-body font-medium py-2"
              >
                <span>{resourcesLabel}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isResourcesOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l border-border">
                  <LocalizedLink to="/insights" onClick={closeMenu} className="block text-foreground hover:text-primary transition-colors font-body py-2">
                    {t('header.nav.insights').toUpperCase()}
                  </LocalizedLink>
                  <LocalizedLink to="/tools" onClick={closeMenu} className="block text-foreground hover:text-primary transition-colors font-body py-2">
                    {t('header.nav.tools').toUpperCase()}
                  </LocalizedLink>
                </div>
              )}
            </div>

            <LocalizedLink to="/about" onClick={closeMenu} className="block text-foreground hover:text-primary transition-colors font-body font-medium py-2">
              {t('header.nav.about').toUpperCase()}
            </LocalizedLink>
            <div className="py-2">
              <LanguageSwitch />
            </div>
            <LocalizedLink to="/journey" onClick={closeMenu}>
              <Button variant="outline" size="lg" className="w-full mt-4 border-[#5B6C49]/30 text-[#5B6C49] hover:bg-[#5B6C49]/10 transition-all duration-300 rounded-full">
                {t('header.cta').toUpperCase()}
              </Button>
            </LocalizedLink>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
