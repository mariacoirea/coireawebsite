
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import OptimizedImage from "./OptimizedImage";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(210, 195, 175, 0.4) 0%, rgba(225, 215, 200, 0.3) 100%), url(/lovable-uploads/9bef76c3-5f6e-42a0-831c-3a54ef706f9b.png)`,
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <header>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold text-primary mb-6 mt-12 leading-tight">
            <span className="italic block mb-2">Transform Your</span>
            <span className="block">Organization from</span>
            <span className="block">the Inside Out</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary/80 font-body font-light max-w-3xl mx-auto mb-8 leading-relaxed">
            Where Purpose Meets Performance, Organizations Evolve
          </p>
        </header>

        {/* Enhanced decorative logo */}
        <div className="flex items-center justify-center mb-12">
          <OptimizedImage
            src="/lovable-uploads/5555f545-a4bb-46b7-9145-b8ae36a5d882.png"
            alt="COIREA Logo - Regenerative Organizational Transformation"
            className="h-20 w-auto"
            width={80}
            height={80}
            priority={true}
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

        <div className="flex justify-center items-center mb-16">
          <Link to="/journey" aria-label="Begin your organizational transformation journey">
            <Button variant="default" size="xl" className="group bg-[#4A7C7A]/90 hover:bg-[#4A7C7A] text-white border-none rounded-full px-8 py-4 transition-all duration-300 shadow-lg">
              Begin Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-2" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
