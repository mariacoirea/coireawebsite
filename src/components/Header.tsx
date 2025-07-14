import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
              <div className="w-6 h-6 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center">
                <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              </div>
            </div>
            <span className="text-2xl font-display font-semibold text-primary">COIREA</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-body font-medium">
              HOME
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-body font-medium">
              OFFERINGS
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-body font-medium">
              ABOUT
            </a>
            <a href="#insights" className="text-foreground hover:text-primary transition-colors font-body font-medium">
              INSIGHTS
            </a>
            <Button variant="hero" size="default">
              Begin the Journey
            </Button>
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
            <a href="#home" className="block text-foreground hover:text-primary transition-colors font-body font-medium py-2">
              HOME
            </a>
            <a href="#services" className="block text-foreground hover:text-primary transition-colors font-body font-medium py-2">
              OFFERINGS
            </a>
            <a href="#about" className="block text-foreground hover:text-primary transition-colors font-body font-medium py-2">
              ABOUT
            </a>
            <a href="#insights" className="block text-foreground hover:text-primary transition-colors font-body font-medium py-2">
              INSIGHTS
            </a>
            <Button variant="hero" size="lg" className="w-full mt-4">
              Begin the Journey
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;