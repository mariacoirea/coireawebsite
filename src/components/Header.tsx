
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
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/ea999de3-6404-4e30-b9e9-4f78f806f6dd.png" 
              alt="COIREA Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors font-body font-medium">
              HOME
            </a>
            <a href="/offerings" className="text-foreground hover:text-primary transition-colors font-body font-medium">
              OFFERINGS
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors font-body font-medium">
              ABOUT
            </a>
            <a href="/insights" className="text-foreground hover:text-primary transition-colors font-body font-medium">
              INSIGHTS
            </a>
            <a href="/tools" className="text-foreground hover:text-primary transition-colors font-body font-medium">
              TOOLS
            </a>
            <Button variant="outline" size="default" className="border-[#5B6C49]/30 text-[#5B6C49] hover:bg-[#5B6C49]/10 transition-all duration-300 rounded-full px-8">
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
            <a href="/" className="block text-foreground hover:text-primary transition-colors font-body font-medium py-2">
              HOME
            </a>
            <a href="/offerings" className="block text-foreground hover:text-primary transition-colors font-body font-medium py-2">
              OFFERINGS
            </a>
            <a href="/about" className="block text-foreground hover:text-primary transition-colors font-body font-medium py-2">
              ABOUT
            </a>
            <a href="/insights" className="block text-foreground hover:text-primary transition-colors font-body font-medium py-2">
              INSIGHTS
            </a>
            <a href="/tools" className="block text-foreground hover:text-primary transition-colors font-body font-medium py-2">
              TOOLS
            </a>
            <Button variant="outline" size="lg" className="w-full mt-4 border-[#5B6C49]/30 text-[#5B6C49] hover:bg-[#5B6C49]/10 transition-all duration-300 rounded-full">
              Begin the Journey
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
