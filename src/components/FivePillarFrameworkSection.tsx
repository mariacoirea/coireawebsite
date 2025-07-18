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

        {/* Section Title */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-display font-semibold mb-6 text-primary">
            We Don't Build Static Structures —{' '}
            <span className="block mt-2">We Design Living Frameworks for Regenerative Business</span>
          </h1>
          
          <div className="max-w-4xl mx-auto mt-8">
            <p className="text-xl leading-[1.8] font-body text-primary/80">
              At the core of COIREA's work lies a dynamic framework that evolves with your company. 
              Our 5-Pillar System restores clarity, coherence, and long-term vitality from the inside out.
            </p>
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
                    <p className="text-xs text-secondary/70 font-body">Strategic clarity & narrative alignment</p>
                  </div>
                </div>

                {/* Leadership Pillar */}
                <div className="flex flex-col items-center space-y-4 group/pillar cursor-pointer transition-all duration-300 hover:-translate-y-2">
                  <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center border-2 border-accent/30 group-hover/pillar:border-accent group-hover/pillar:shadow-lg group-hover/pillar:shadow-accent/25 transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-accent"></div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-display font-semibold text-accent text-lg mb-1">Leadership</h3>
                    <p className="text-xs text-accent/70 font-body">Conscious accountability & presence</p>
                  </div>
                </div>

                {/* Collaboration Pillar */}
                <div className="flex flex-col items-center space-y-4 group/pillar cursor-pointer transition-all duration-300 hover:-translate-y-2">
                  <div className="w-20 h-20 rounded-full bg-neutral-warm/40 flex items-center justify-center border-2 border-neutral-warm/50 group-hover/pillar:border-neutral-warm group-hover/pillar:shadow-lg group-hover/pillar:shadow-neutral-warm/25 transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-neutral-warm"></div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-display font-semibold text-neutral-warm text-lg mb-1" style={{ color: 'hsl(33, 35%, 60%)' }}>Collaboration</h3>
                    <p className="text-xs font-body" style={{ color: 'hsl(33, 35%, 50%)' }}>Trust, flow & co-creation</p>
                  </div>
                </div>

                {/* Culture Pillar */}
                <div className="flex flex-col items-center space-y-4 group/pillar cursor-pointer transition-all duration-300 hover:-translate-y-2">
                  <div className="w-20 h-20 rounded-full bg-secondary/25 flex items-center justify-center border-2 border-secondary/35 group-hover/pillar:border-secondary group-hover/pillar:shadow-lg group-hover/pillar:shadow-secondary/25 transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-secondary/80"></div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-display font-semibold text-secondary/90 text-lg mb-1">Culture</h3>
                    <p className="text-xs text-secondary/60 font-body">Values activated in behavior</p>
                  </div>
                </div>

                {/* Well-Being Pillar */}
                <div className="flex flex-col items-center space-y-4 group/pillar cursor-pointer transition-all duration-300 hover:-translate-y-2">
                  <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center border-2 border-accent/30 group-hover/pillar:border-accent group-hover/pillar:shadow-lg group-hover/pillar:shadow-accent/25 transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-accent/90"></div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-display font-semibold text-accent/90 text-lg mb-1">Well-Being</h3>
                    <p className="text-xs text-accent/60 font-body">Energy, resilience & sustainability</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* What the Framework Enables */}
        <div className="text-center mt-24 mb-20">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-12 text-primary">
            This framework empowers leadership teams to:
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <p className="text-lg font-body text-primary/90 text-left">Align company purpose with everyday decisions</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <p className="text-lg font-body text-primary/90 text-left">Develop accountable, values-driven leadership</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <p className="text-lg font-body text-primary/90 text-left">Build resilient, collaborative, high-performing teams</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <p className="text-lg font-body text-primary/90 text-left">Activate culture as a strategic growth driver</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <p className="text-lg font-body text-primary/90 text-left">Integrate well-being into long-term operational rhythm</p>
            </div>
          </div>
        </div>

        {/* KPI and Measurement Section */}
        <div className="max-w-5xl mx-auto mt-24 mb-20">
          <div className="bg-gradient-to-br from-background/90 via-background/95 to-background/90 backdrop-blur-sm rounded-2xl p-8 border border-primary/10">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Left Column */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm">🧠</span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-primary mb-1">Tailored KPIs</h3>
                    <p className="text-sm text-primary/70 font-body">Custom metrics for each pillar</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm">📊</span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-primary mb-1">Team Performance Insights</h3>
                    <p className="text-sm text-primary/70 font-body">Productivity, cohesion, outcomes</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-neutral-warm/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm">🔄</span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-primary mb-1">Leadership Maturity Index</h3>
                    <p className="text-sm text-primary/70 font-body">Decision-making growth tracking</p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/25 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm">🧭</span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-primary mb-1">Long-Term Evolution Maps</h3>
                    <p className="text-sm text-primary/70 font-body">Structural & cultural milestones</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-accent/25 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm">🧘</span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-primary mb-1">Well-being & Retention Risk</h3>
                    <p className="text-sm text-primary/70 font-body">Proactive burnout signals</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-neutral-warm/35 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm">💼</span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-primary mb-1">Strategic Investment in People</h3>
                    <p className="text-sm text-primary/70 font-body">Linking human capital to outcomes</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="flex justify-center items-center space-x-4">
            <span className="text-lg font-body text-primary/80">→ How do we track it in real time?</span>
            <span className="text-lg font-display font-semibold text-accent">→ See the COIREA Evolution Dashboard →</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FivePillarFrameworkSection;