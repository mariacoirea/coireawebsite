import { ChevronDown } from "lucide-react";

const pillarsData = [
  { name: "Purpose", color: "#6B8D6B", shape: "rounded-t-full" },
  { name: "Leadership", color: "#D4A574", shape: "rounded-full" },
  { name: "Collaboration", color: "#C9A876", shape: "oval" },
  { name: "Culture", color: "#4A7C7A", shape: "rounded-t-full" },
  { name: "Well-Being", color: "#D4A574", shape: "lotus" }
];

const FivePillarFrameworkSection = () => {
  return (
    <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#F5F3F0' }}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Decorative chevrons - enhanced */}
        <div className="text-center mb-16">
          <div className="flex justify-center space-y-1 flex-col items-center mb-12">
            <ChevronDown className="w-5 h-5 opacity-40" style={{ color: '#1C4D4F' }} />
            <ChevronDown className="w-6 h-6 opacity-60 -mt-2" style={{ color: '#1C4D4F' }} />
            <ChevronDown className="w-5 h-5 opacity-40 -mt-2" style={{ color: '#1C4D4F' }} />
          </div>
        </div>

        {/* Main Content - enhanced typography */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold mb-12 leading-[1.1] tracking-tight" style={{ color: '#1C4D4F' }}>
            Sustainable growth rooted in the{' '}
            <span className="italic relative">
              5 Pillars of Regenerative
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-20"></div>
            </span>{' '}
            Transformation.
          </h2>
        </div>

        {/* Supporting Text - enhanced layout */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center lg:text-left">
            <div className="space-y-2">
              <p className="text-lg leading-relaxed font-body" style={{ color: '#1C4D4F' }}>
                Every offering is anchored in COIREA's 5-Pillar Framework — <strong className="font-semibold">Purpose, Leadership, Collaboration, Culture, and Well-Being</strong> — activating organizational transformation from the inside out.
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-lg leading-relaxed font-body" style={{ color: '#1C4D4F' }}>
                Each pillar is assessed through <strong className="font-semibold">customized measurement systems</strong> — including qualitative insights, performance metrics, and well-being indicators — to ensure a data-informed, system-wide transformation journey.
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-lg leading-relaxed font-body" style={{ color: '#1C4D4F' }}>
                Trusted by visionary CEOs and HR leaders seeking to align high performance with human-centered, systemic evolution.
              </p>
            </div>
          </div>
        </div>

        {/* Integrated 5 Pillars Visual */}
        <div className="relative bg-white/40 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #1C4D4F 2px, transparent 2px), radial-gradient(circle at 80% 50%, #1C4D4F 2px, transparent 2px)', backgroundSize: '50px 50px' }}></div>
          
          <div className="relative z-10">
            {/* Pillars Visualization */}
            <div className="flex justify-center items-end space-x-8 mb-16 overflow-x-auto">
              {pillarsData.map((pillar, index) => (
                <div key={pillar.name} className="flex flex-col items-center min-w-[120px]">
                  {/* Pillar Shape */}
                  <div className="relative mb-8 group">
                    {pillar.name === "Purpose" && (
                      <div 
                        className="w-20 h-32 rounded-t-full transition-all duration-500 group-hover:scale-105 shadow-lg"
                        style={{ backgroundColor: pillar.color }}
                      />
                    )}
                    {pillar.name === "Leadership" && (
                      <div className="relative">
                        <div 
                          className="w-20 h-32 rounded-full transition-all duration-500 group-hover:scale-105 shadow-lg"
                          style={{ backgroundColor: pillar.color }}
                        />
                        <div 
                          className="absolute inset-4 rounded-full bg-white/30"
                        />
                      </div>
                    )}
                    {pillar.name === "Collaboration" && (
                      <div 
                        className="w-20 h-32 transition-all duration-500 group-hover:scale-105 shadow-lg"
                        style={{ 
                          backgroundColor: pillar.color,
                          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
                        }}
                      />
                    )}
                    {pillar.name === "Culture" && (
                      <div 
                        className="w-20 h-32 rounded-t-full transition-all duration-500 group-hover:scale-105 shadow-lg"
                        style={{ backgroundColor: pillar.color }}
                      />
                    )}
                    {pillar.name === "Well-Being" && (
                      <div className="relative">
                        <div 
                          className="w-20 h-24 transition-all duration-500 group-hover:scale-105 shadow-lg"
                          style={{ 
                            backgroundColor: pillar.color,
                            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
                          }}
                        />
                        <div 
                          className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-12"
                          style={{ 
                            backgroundColor: pillar.color,
                            borderRadius: '50% 50% 50% 50% / 80% 80% 20% 20%'
                          }}
                        />
                        <div 
                          className="absolute -top-4 left-1/4 w-8 h-8 rounded-full"
                          style={{ backgroundColor: pillar.color }}
                        />
                        <div 
                          className="absolute -top-4 right-1/4 w-8 h-8 rounded-full"
                          style={{ backgroundColor: pillar.color }}
                        />
                      </div>
                    )}
                  </div>
                  
                  {/* Pillar Label */}
                  <h3 className="text-xl font-display font-semibold text-center" style={{ color: '#1C4D4F' }}>
                    {pillar.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FivePillarFrameworkSection;