
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
        {/* Refined decorative chevrons */}
        <div className="text-center mb-24">
          <div className="flex justify-center space-y-1 flex-col items-center mb-20">
            <ChevronDown className="w-3 h-3 text-primary/30 animate-pulse" />
            <ChevronDown className="w-4 h-4 text-primary/50 -mt-1" />
            <ChevronDown className="w-5 h-5 text-primary/70 -mt-1" />
            <ChevronDown className="w-4 h-4 text-primary/50 -mt-1" />
            <ChevronDown className="w-3 h-3 text-primary/30 animate-pulse" />
          </div>
        </div>

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

        {/* Framework Image with Enhanced Design - Now Wider */}
        <div className="flex justify-center mb-16">
          <div className="relative group max-w-7xl w-full">
            {/* Enhanced shadow and glow effects */}
            <div className="absolute -inset-12 bg-gradient-to-r from-primary/5 via-accent/10 to-secondary/5 rounded-3xl blur-3xl opacity-60 group-hover:opacity-80 transition-all duration-700"></div>
            <div className="absolute -inset-6 bg-gradient-to-br from-background/60 via-neutral-warm/30 to-background/60 rounded-2xl blur-xl"></div>
            
            {/* Main image container - made wider */}
            <div className="relative bg-gradient-to-br from-background/95 via-background/98 to-background/95 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-primary/15 shadow-elegant group-hover:shadow-warm transition-all duration-700">
              <img 
                src="/lovable-uploads/b65d766a-b93c-4b24-9673-05dcba542f19.png" 
                alt="COIREA 5-Pillar Framework" 
                className="w-full h-auto rounded-xl shadow-soft group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Pillar Definitions - Aligned with Image Pillars */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-6">
            
            {/* Purpose - Left-most pillar */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-background/95 via-background/98 to-background/95 backdrop-blur-sm rounded-xl p-6 border border-primary/10 shadow-soft group-hover:shadow-warm transition-all duration-300 group-hover:scale-[1.02]">
                <h3 className="font-display font-semibold text-primary text-xl mb-3 group-hover:text-primary-light transition-colors">Purpose</h3>
                <p className="text-sm text-primary/70 font-body leading-relaxed">Strategic Clarity & Narrative Alignment</p>
              </div>
            </div>

            {/* Leadership - Second pillar */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-background/95 via-background/98 to-background/95 backdrop-blur-sm rounded-xl p-6 border border-primary/10 shadow-soft group-hover:shadow-warm transition-all duration-300 group-hover:scale-[1.02]">
                <h3 className="font-display font-semibold text-primary text-xl mb-3 group-hover:text-primary-light transition-colors">Leadership</h3>
                <p className="text-sm text-primary/70 font-body leading-relaxed">Conscious accountability & presence</p>
              </div>
            </div>

            {/* Collaboration - Center pillar */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-background/95 via-background/98 to-background/95 backdrop-blur-sm rounded-xl p-6 border border-primary/10 shadow-soft group-hover:shadow-warm transition-all duration-300 group-hover:scale-[1.02]">
                <h3 className="font-display font-semibold text-primary text-xl mb-3 group-hover:text-primary-light transition-colors">Collaboration</h3>
                <p className="text-sm text-primary/70 font-body leading-relaxed">Trust, flow & co-creation</p>
              </div>
            </div>

            {/* Culture - Fourth pillar */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-background/95 via-background/98 to-background/95 backdrop-blur-sm rounded-xl p-6 border border-primary/10 shadow-soft group-hover:shadow-warm transition-all duration-300 group-hover:scale-[1.02]">
                <h3 className="font-display font-semibold text-primary text-xl mb-3 group-hover:text-primary-light transition-colors">Culture</h3>
                <p className="text-sm text-primary/70 font-body leading-relaxed">Values activated in behavior</p>
              </div>
            </div>

            {/* Well-Being - Right-most pillar */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-background/95 via-background/98 to-background/95 backdrop-blur-sm rounded-xl p-6 border border-primary/10 shadow-soft group-hover:shadow-warm transition-all duration-300 group-hover:scale-[1.02]">
                <h3 className="font-display font-semibold text-primary text-xl mb-3 group-hover:text-primary-light transition-colors">Well-Being</h3>
                <p className="text-sm text-primary/70 font-body leading-relaxed">Regenerating the Human Core</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FivePillarFrameworkSection;
