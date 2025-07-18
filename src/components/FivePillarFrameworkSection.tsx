import frameworkImage from "/lovable-uploads/d1c36842-f054-4e55-99c1-3123f6306fe5.png";
import { ChevronDown } from "lucide-react";

const FivePillarFrameworkSection = () => {
  return (
    <section className="py-40 relative overflow-hidden bg-gradient-to-b from-neutral-warm/30 to-background">
      {/* Subtle sacred geometry background pattern - softened */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent))_0%,transparent_50%)] opacity-20 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary))_0%,transparent_50%)] opacity-20 blur-3xl"></div>
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