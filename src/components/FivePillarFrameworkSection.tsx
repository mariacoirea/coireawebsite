
import { ChevronDown } from "lucide-react";

const FivePillarFrameworkSection = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-neutral-warm/20 via-background to-neutral-warm/10">
      {/* Enhanced sacred geometry background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/8 via-transparent to-accent/8"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,hsl(var(--secondary))_0%,transparent_50%)] opacity-30 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,hsl(var(--accent))_0%,transparent_50%)] opacity-30 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary))_0%,transparent_70%)] opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Streamlined Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-8 text-primary leading-tight">
            Our proprietary{' '}
            <span className="italic text-accent bg-gradient-to-r from-accent to-accent-warm bg-clip-text text-transparent">
              5-Pillar Framework
            </span>
          </h2>
          
          {/* Framework Introduction */}
          <div className="max-w-4xl mx-auto mt-12 space-y-6">
            <p className="text-xl md:text-2xl font-display text-primary/90 leading-relaxed italic">
              A strategic system to grow aligned, resilient organizations — from the inside out.
            </p>
            
            <p className="text-lg md:text-xl font-body text-primary/80 leading-relaxed">
              COIREA's proprietary 5-Pillar Framework supports CEOs and leadership teams in evolving their company's operating model — integrating systems diagnostics, human-centered insight, and regenerative wisdom.
            </p>
            
            <p className="text-lg md:text-xl font-body text-primary/75 leading-relaxed">
              Rather than fixing surface-level issues, this framework reveals the core of what drives scalable, regenerative success — helping leaders move from reactive fire-fighting to coherent, purpose-led execution.
            </p>
          </div>
        </div>

        {/* Framework Image with Optimized Design - Larger and Clearer */}
        <div className="flex justify-center mb-16">
          <div className="relative group max-w-5xl w-full">
            {/* Reduced shadow effects */}
            <div className="absolute -inset-8 bg-gradient-to-r from-primary/5 via-accent/10 to-secondary/5 rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-all duration-700"></div>
            
            {/* Main image container - reduced padding and border radius */}
            <div className="relative bg-gradient-to-br from-background/95 via-background/98 to-background/95 backdrop-blur-sm rounded-xl p-2 md:p-4 border border-primary/15 shadow-soft group-hover:shadow-elegant transition-all duration-700">
              <img 
                src="/lovable-uploads/ca4817cc-5cf5-4d9a-bee8-380ad36d9386.png?v=5" 
                alt="COIREA 5-Pillar Framework" 
                className="w-full h-auto rounded-lg shadow-soft group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FivePillarFrameworkSection;
