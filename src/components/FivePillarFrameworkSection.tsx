
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
            The{' '}
            <span className="italic text-accent bg-gradient-to-r from-accent to-accent-warm bg-clip-text text-transparent">
              5 Pillars of Organizational Well-Being
            </span>
          </h2>
          
          {/* Framework Introduction */}
          <div className="max-w-4xl mx-auto mt-12 space-y-6">
            <p className="text-xl md:text-2xl font-display text-primary/90 leading-relaxed italic">
              Reveal what's alive, what's blocked, and what's ready to evolve.
            </p>
            
            <p className="text-lg md:text-xl font-body text-primary/80 leading-relaxed">
              Before building structures, we tune into the inner state of your organization—its people, energy, and culture. The 5 Pillars help us sense where disconnection may live.
            </p>
            
            {/* 5 Pillars List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
              <div className="text-center p-6 bg-background/50 rounded-lg border border-primary/10 hover:border-primary/20 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/0d457cbb-8503-4597-930d-dd4961a39829.png" 
                    alt="Culture pillar icon" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-display font-semibold text-primary mb-2">Culture</h3>
                <p className="text-sm text-primary/70 font-body">Values in action</p>
              </div>
              <div className="text-center p-6 bg-background/50 rounded-lg border border-primary/10 hover:border-primary/20 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/188d727f-2381-424b-b769-afa51a6f1137.png" 
                    alt="Leadership pillar icon" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-display font-semibold text-primary mb-2">Leadership</h3>
                <p className="text-sm text-primary/70 font-body">Presence + accountability</p>
              </div>
              <div className="text-center p-6 bg-background/50 rounded-lg border border-primary/10 hover:border-primary/20 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/2627835c-d411-47f1-abb6-99b92bd30341.png" 
                    alt="Collaboration pillar icon" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-display font-semibold text-primary mb-2">Collaboration</h3>
                <p className="text-sm text-primary/70 font-body">Trust + co-creation</p>
              </div>
              <div className="text-center p-6 bg-background/50 rounded-lg border border-primary/10 hover:border-primary/20 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/35080dca-964c-49c9-b4f3-7d3461223a1e.png" 
                    alt="Well-Being pillar icon" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-display font-semibold text-primary mb-2">Well-Being</h3>
                <p className="text-sm text-primary/70 font-body">The resourced human core</p>
              </div>
              <div className="text-center p-6 bg-background/50 rounded-lg border border-primary/10 hover:border-primary/20 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/48bc734b-38e8-4e99-8c8c-816a8195bdb8.png" 
                    alt="Purpose pillar icon" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-display font-semibold text-primary mb-2">Purpose</h3>
                <p className="text-sm text-primary/70 font-body">The felt sense of why</p>
              </div>
            </div>
            
            <p className="text-lg md:text-xl font-body text-primary/75 leading-relaxed mt-8">
              Together, these frameworks guide transformation: The Pillars reveal where energy is leaking. The Foundations rebuild systems that support what matters most.
            </p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default FivePillarFrameworkSection;
