
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-accent/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="w-7 h-7 rounded-full border-2 border-primary-foreground/40 flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                </div>
              </div>
              <span className="text-3xl font-display font-semibold">COIREA</span>
            </div>
            
            <p className="text-primary-foreground/80 font-body leading-relaxed mb-6 max-w-md">
              Regenerative consultancy helping organizations realign their systems, culture, and leadership 
              for conscious evolution and sustainable growth.
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

          {/* Services */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Services</h3>
            <ul className="space-y-3 font-body">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Organizational Transformation</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Team Retreats</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Leadership Coaching</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Strategic Consulting</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">5-Pillar Framework</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Contact</h3>
            <div className="space-y-4 font-body">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">hello@coirea.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-primary-foreground/80">
                  Global consultancy<br />
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
              © 2024 COIREA. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
