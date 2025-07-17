import frameworkImage from "/lovable-uploads/d1c36842-f054-4e55-99c1-3123f6306fe5.png";
import { ChevronDown } from "lucide-react";

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

        {/* Framework Image - with background removed effect */}
        <div className="flex justify-center">
          <div className="relative group">
            <img 
              src={frameworkImage}
              alt="5 Pillars Framework - Purpose, Leadership, Collaboration, Culture, Well-Being"
              className="relative w-full max-w-5xl transition-all duration-500 mix-blend-multiply opacity-95"
              style={{
                filter: 'brightness(1.1) contrast(1.05)',
                background: 'transparent'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FivePillarFrameworkSection;