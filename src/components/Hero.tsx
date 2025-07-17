import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TreePine, Leaf, Flower } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "/lovable-uploads/9bef76c3-5f6e-42a0-831c-3a54ef706f9b.png";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
      style={{
        background: `linear-gradient(135deg, 
          rgba(28, 77, 79, 0.05) 0%, 
          rgba(91, 108, 73, 0.08) 30%, 
          rgba(181, 109, 78, 0.06) 60%, 
          rgba(233, 212, 192, 0.1) 100%), 
          url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Sacred geometry background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 opacity-10">
          <TreePine className="w-16 h-16 text-primary animate-pulse" style={{ animationDuration: '4s' }} />
        </div>
        <div className="absolute top-40 right-20 opacity-15">
          <Leaf className="w-12 h-12 text-accent animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }} />
        </div>
        <div className="absolute bottom-40 left-20 opacity-12">
          <Flower className="w-14 h-14 text-primary-light animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
        </div>
        <div className="absolute bottom-60 right-10 opacity-10">
          <Sparkles className="w-10 h-10 text-accent animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold text-primary mb-6 mt-12 leading-tight">
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
            src="/lovable-uploads/5555f545-a4bb-46b7-9145-b8ae36a5d882.png" 
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

        <div className="flex justify-center items-center mb-16">
          <Link to="/offerings">
            <Button variant="default" size="xl" className="group bg-[#4A7C7A]/90 hover:bg-[#4A7C7A] text-white border-none rounded-full px-8 py-4 transition-all duration-300 shadow-lg">
              Discover Our Approach
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-2" />
            </Button>
          </Link>
        </div>
      </div>

    </section>
  );
};

export default Hero;