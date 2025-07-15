import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-mountain.jpg";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, hsl(var(--neutral-warm) / 0.9) 0%, hsl(var(--background) / 0.8) 100%), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent-warm/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-accent/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Decorative element */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent/30">
            <Sparkles className="w-8 h-8 text-accent" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold text-primary mb-6 leading-tight">
          <span className="italic block mb-2">Transform Your</span>
          <span className="block">Organization from</span>
          <span className="block">the Inside Out</span>
        </h1>

        <p className="text-xl md:text-2xl text-primary/80 font-body font-light max-w-3xl mx-auto mb-8 leading-relaxed">
          Where Purpose Meets Performance, Organizations Evolve
        </p>

        {/* Enhanced decorative logo */}
        <div className="flex items-center justify-center mb-12">
          <img 
            src="/lovable-uploads/ea999de3-6404-4e30-b9e9-4f78f806f6dd.png" 
            alt="COIREA Logo" 
            className="h-20 w-auto"
          />
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-primary/70 font-body leading-relaxed mb-8">
            COIREA is a regenerative consultancy helping organizations realign their systems, culture, and leadership. 
            We guide purpose-driven companies through structural and human transformation—restoring coherence, 
            improving performance, and integrating well-being.
          </p>
          
          <p className="text-lg text-primary/60 font-body">
            From team retreats to long-term programs, we support the evolution toward resilient, future-ready organizations.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="default" size="xl" className="group bg-primary hover:bg-primary/90">
            Discover Our Approach
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="xl" className="text-primary border-primary/30 hover:bg-primary/10">
            Begin the Journey
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;