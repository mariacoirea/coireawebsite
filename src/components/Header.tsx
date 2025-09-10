
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/OptimizedImage";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <OptimizedImage 
                src="/lovable-uploads/ea999de3-6404-4e30-b9e9-4f78f806f6dd.png" 
                alt="COIREA - Conscious Leadership & Regenerative Business Transformation Logo" 
                className="h-12 w-auto"
                width={150}
                height={48}
                priority={true}
                sizes="150px"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-body font-medium">
              HOME
            </Link>
            <Link to="/offerings" className="text-foreground hover:text-primary transition-colors font-body font-medium">
              OFFERINGS
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-body font-medium">
              ABOUT
            </Link>
            <Link to="/insights" className="text-foreground hover:text-primary transition-colors font-body font-medium">
              INSIGHTS
            </Link>
            <Link to="/events" className="text-foreground hover:text-primary transition-colors font-body font-medium">
              EVENTS
            </Link>
            <Link to="/tools" className="text-foreground hover:text-primary transition-colors font-body font-medium">
              TOOLS
            </Link>
            <Link to="/journey">
              <Button variant="outline" size="default" className="border-[#5B6C49]/30 text-[#5B6C49] hover:bg-[#5B6C49]/10 transition-all duration-300 rounded-full px-8">
                BEGIN JOURNEY
              </Button>
            </Link>
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
            <Link to="/" onClick={closeMenu} className="block text-foreground hover:text-primary transition-colors font-body font-medium py-2">
              HOME
            </Link>
            <Link to="/offerings" onClick={closeMenu} className="block text-foreground hover:text-primary transition-colors font-body font-medium py-2">
              OFFERINGS
            </Link>
            <Link to="/about" onClick={closeMenu} className="block text-foreground hover:text-primary transition-colors font-body font-medium py-2">
              ABOUT
            </Link>
            <Link to="/insights" onClick={closeMenu} className="block text-foreground hover:text-primary transition-colors font-body font-medium py-2">
              INSIGHTS
            </Link>
            <Link to="/events" onClick={closeMenu} className="block text-foreground hover:text-primary transition-colors font-body font-medium py-2">
              EVENTS
            </Link>
            <Link to="/tools" onClick={closeMenu} className="block text-foreground hover:text-primary transition-colors font-body font-medium py-2">
              TOOLS
            </Link>
            <Link to="/journey" onClick={closeMenu}>
              <Button variant="outline" size="lg" className="w-full mt-4 border-[#5B6C49]/30 text-[#5B6C49] hover:bg-[#5B6C49]/10 transition-all duration-300 rounded-full">
                BEGIN JOURNEY
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
