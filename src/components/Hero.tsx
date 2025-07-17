import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "/lovable-uploads/9bef76c3-5f6e-42a0-831c-3a54ef706f9b.png";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(210, 195, 175, 0.4) 0%, rgba(225, 215, 200, 0.3) 100%), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >

      <div className="container mx-auto px-6 text-center relative z-10">

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-primary mb-6 leading-tight">
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
            <Button variant="default" size="xl" className="group bg-[#4A7C7A]/90 hover:bg-[#4A7C7A] text-white border-none rounded-full px-12 py-4 transition-all duration-300 shadow-lg">
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