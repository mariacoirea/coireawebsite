import frameworkImage from "/lovable-uploads/d1c36842-f054-4e55-99c1-3123f6306fe5.png";
import { ChevronDown } from "lucide-react";

const FivePillarFrameworkSection = () => {
  return (
    <section className="py-40 relative overflow-hidden bg-gradient-to-b from-neutral-warm/20 via-background/95 to-background">
      {/* Organic mountain landscape background */}
      <div className="absolute inset-0">
        {/* Layered mountain silhouettes with organic curves - more visible */}
        <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-primary/20 via-primary/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-4/5 h-1/3 bg-gradient-to-t from-secondary/15 via-secondary/8 to-transparent rounded-tl-[120px]"></div>
        <div className="absolute bottom-0 left-1/4 w-3/5 h-1/4 bg-gradient-to-t from-accent/12 via-accent/6 to-transparent rounded-tr-[100px]"></div>
        <div className="absolute bottom-0 right-1/3 w-2/5 h-1/5 bg-gradient-to-t from-neutral-warm/18 via-neutral-warm/9 to-transparent rounded-tl-[80px]"></div>
        
        {/* Flowing organic shapes that blend with mountains - enhanced */}
        <div className="absolute top-1/3 left-0 w-2/3 h-1/2 bg-[radial-gradient(ellipse_90%_60%_at_30%_70%,hsl(var(--primary))_0%,transparent_70%)] opacity-25 blur-3xl transform rotate-12"></div>
        <div className="absolute top-1/4 right-0 w-1/2 h-2/5 bg-[radial-gradient(ellipse_80%_50%_at_70%_60%,hsl(var(--secondary))_0%,transparent_65%)] opacity-20 blur-2xl transform -rotate-6"></div>
        
        {/* Soft flowing mist/cloud effects - more visible */}
        <div className="absolute top-2/5 left-1/3 w-1/2 h-1/4 bg-[radial-gradient(ellipse_70%_40%_at_50%_80%,hsl(var(--neutral-warm))_0%,transparent_60%)] opacity-15 blur-xl"></div>
        <div className="absolute top-1/2 right-1/4 w-1/3 h-1/5 bg-[radial-gradient(ellipse_60%_30%_at_40%_70%,hsl(var(--accent))_0%,transparent_50%)] opacity-12 blur-xl"></div>
        
        {/* Subtle horizon lines with organic curves - enhanced */}
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent transform rotate-1"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Decorative chevrons - refined */}
        <div className="text-center mb-20">
          <div className="flex justify-center space-y-1 flex-col items-center mb-16">
            <ChevronDown className="w-4 h-4 text-primary/40" />
            <ChevronDown className="w-5 h-5 text-primary/60 -mt-2" />
            <ChevronDown className="w-4 h-4 text-primary/40 -mt-2" />
          </div>
        </div>

        {/* Merged Headline and Framework Introduction */}
        <div className="text-center mb-20">
          

          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 text-primary">
            Our proprietary{' '}
            <span className="italic text-accent">5-Pillar Framework</span>{' '}
            combines systems diagnostics, Organic Intelligence, and data-backed insights to drive 
            structural renewal and measurable transformation.
          </h2>
          
          <div className="max-w-4xl mx-auto mt-12">
            <p className="text-lg leading-[1.7] font-body text-primary/80 mb-8">
              At the heart of every transformation lies this 5-dimensional approach. 
              COIREA's 5-Pillar Framework merges the foundational elements that enable leadership teams to:
            </p>
            
            {/* What the Framework Enables */}
            <div className="text-left max-w-3xl mx-auto space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></div>
                <p className="text-lg font-body text-primary/90">Cultivate purpose-driven clarity and renewed focus</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></div>
                <p className="text-lg font-body text-primary/90">Strengthen leadership accountability across levels</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></div>
                <p className="text-lg font-body text-primary/90">Build adaptive, high-performing, and connected teams</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></div>
                <p className="text-lg font-body text-primary/90">Unlock culture as a strategic asset</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></div>
                <p className="text-lg font-body text-primary/90">Integrate well-being into the core business rhythm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Soft divider */}
        <div className="flex justify-center mb-16">
          <div className="flex space-x-2 items-center">
            <div className="w-2 h-2 rounded-full bg-primary/30"></div>
            <div className="w-2 h-2 rounded-full bg-primary/50"></div>
            <div className="w-2 h-2 rounded-full bg-primary/30"></div>
          </div>
        </div>

        {/* Framework Image - enhanced with transparent background and brand colors */}
        <div className="flex justify-center">
          <div className="relative group">
            {/* Soft shadow beneath */}
            <div className="absolute -inset-8 bg-gradient-to-r from-transparent via-primary/10 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-700"></div>
            
            {/* Framework container */}
            <div className="relative bg-gradient-to-br from-background/80 via-background/90 to-background/80 backdrop-blur-sm rounded-3xl p-12 border border-primary/10 shadow-elegant">
              {/* Custom 5-Pillar Framework Design */}
              <div className="grid grid-cols-5 gap-8 max-w-4xl mx-auto">
                
                {/* Purpose Pillar */}
                <div className="flex flex-col items-center space-y-4 group/pillar cursor-pointer transition-all duration-300 hover:-translate-y-2">
                  <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center border-2 border-secondary/30 group-hover/pillar:border-secondary group-hover/pillar:shadow-lg group-hover/pillar:shadow-secondary/25 transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-secondary"></div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-display font-semibold text-secondary text-lg mb-1">Purpose</h3>
                    <p className="text-xs text-secondary/70 font-body">Vision & Evolution</p>
                  </div>
                </div>

                {/* Leadership Pillar */}
                <div className="flex flex-col items-center space-y-4 group/pillar cursor-pointer transition-all duration-300 hover:-translate-y-2">
                  <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center border-2 border-accent/30 group-hover/pillar:border-accent group-hover/pillar:shadow-lg group-hover/pillar:shadow-accent/25 transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-accent"></div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-display font-semibold text-accent text-lg mb-1">Leadership</h3>
                    <p className="text-xs text-accent/70 font-body">Brave Embodiment</p>
                  </div>
                </div>

                {/* Collaboration Pillar */}
                <div className="flex flex-col items-center space-y-4 group/pillar cursor-pointer transition-all duration-300 hover:-translate-y-2">
                  <div className="w-20 h-20 rounded-full bg-neutral-warm/40 flex items-center justify-center border-2 border-neutral-warm/50 group-hover/pillar:border-neutral-warm group-hover/pillar:shadow-lg group-hover/pillar:shadow-neutral-warm/25 transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-neutral-warm"></div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-display font-semibold text-neutral-warm text-lg mb-1" style={{ color: 'hsl(33, 35%, 60%)' }}>Collaboration</h3>
                    <p className="text-xs font-body" style={{ color: 'hsl(33, 35%, 50%)' }}>Aligned Teams</p>
                  </div>
                </div>

                {/* Culture Pillar */}
                <div className="flex flex-col items-center space-y-4 group/pillar cursor-pointer transition-all duration-300 hover:-translate-y-2">
                  <div className="w-20 h-20 rounded-full bg-secondary/25 flex items-center justify-center border-2 border-secondary/35 group-hover/pillar:border-secondary group-hover/pillar:shadow-lg group-hover/pillar:shadow-secondary/25 transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-secondary/80"></div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-display font-semibold text-secondary/90 text-lg mb-1">Culture</h3>
                    <p className="text-xs text-secondary/60 font-body">Living Systems</p>
                  </div>
                </div>

                {/* Well-Being Pillar */}
                <div className="flex flex-col items-center space-y-4 group/pillar cursor-pointer transition-all duration-300 hover:-translate-y-2">
                  <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center border-2 border-accent/30 group-hover/pillar:border-accent group-hover/pillar:shadow-lg group-hover/pillar:shadow-accent/25 transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-accent/90"></div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-display font-semibold text-accent/90 text-lg mb-1">Well-Being</h3>
                    <p className="text-xs text-accent/60 font-body">Holistic Thriving</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FivePillarFrameworkSection;