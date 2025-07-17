import frameworkImage from "/lovable-uploads/d1c36842-f054-4e55-99c1-3123f6306fe5.png";
import { ChevronDown } from "lucide-react";

const FivePillarFrameworkSection = () => {
  return (
    <section className="py-24" style={{ backgroundColor: '#F5F3F0' }}>
      <div className="container mx-auto px-6">
        {/* Decorative chevrons */}
        <div className="text-center mb-12">
          <div className="flex justify-center space-y-2 flex-col items-center mb-8">
            <ChevronDown className="w-6 h-6" style={{ color: '#1C4D4F' }} />
            <ChevronDown className="w-6 h-6 -mt-3" style={{ color: '#1C4D4F' }} />
            <ChevronDown className="w-6 h-6 -mt-3" style={{ color: '#1C4D4F' }} />
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-8 leading-tight" style={{ color: '#1C4D4F' }}>
            Sustainable growth rooted in the 5 Pillars of Regenerative Transformation.
          </h2>
        </div>

        {/* Supporting Text */}
        <div className="max-w-5xl mx-auto mb-16 space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: '#1C4D4F' }}>
            Every offering is anchored in COIREA's 5-Pillar Framework — <strong>Purpose, Leadership, Collaboration, Culture, and Well-Being</strong> — activating organizational transformation from the inside out.
          </p>
          
          <p className="text-lg leading-relaxed" style={{ color: '#1C4D4F' }}>
            Each pillar is assessed through <strong>customized measurement systems</strong> — including qualitative insights, performance metrics, and well-being indicators — to ensure a data-informed, system-wide transformation journey.
          </p>
          
          <p className="text-lg leading-relaxed" style={{ color: '#1C4D4F' }}>
            Trusted by visionary CEOs and HR leaders seeking to align high performance with human-centered, systemic evolution.
          </p>
        </div>

        {/* Framework Image */}
        <div className="flex justify-center">
          <img 
            src={frameworkImage}
            alt="5 Pillars Framework - Purpose, Leadership, Collaboration, Culture, Well-Being"
            className="w-full max-w-4xl rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default FivePillarFrameworkSection;