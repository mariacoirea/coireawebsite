import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

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
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Instagram className="w-5 h-5" />
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
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
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

        {/* Newsletter Signup */}
        <div className="border-t border-primary-foreground/20 mt-16 pt-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-display font-semibold mb-4">
              Stay Connected to the Evolution
            </h3>
            <p className="text-primary-foreground/80 font-body mb-8">
              Receive insights, frameworks, and updates on regenerative organizational practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <Button variant="accent" size="default" className="px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60 font-body">
              © 2024 COIREA. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-primary-foreground/60 font-body">
              <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;