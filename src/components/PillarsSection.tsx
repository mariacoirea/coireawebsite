import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import OptimizedImage from "@/components/OptimizedImage";
import { Brain, Leaf, Target, Heart, Compass } from "lucide-react";
import frameworkImage from "@/assets/5-pillar-framework.png";

const pillars = [
  {
    icon: Brain,
    title: "Conscious Leadership",
    description: "Empowering leaders with courage, clarity, and embodied authenticity.",
    badge: "Leadership"
  },
  {
    icon: Leaf,
    title: "Regenerative Intelligence", 
    description: "Rooted growth guided by the wisdom of nature and systems.",
    badge: "Growth"
  },
  {
    icon: Target,
    title: "Coherence",
    description: "Long-term clarity aligned with your organization's soul and strategy.",
    badge: "Alignment"
  },
  {
    icon: Heart,
    title: "Integrating Well-Being",
    description: "Workplace wellness as the foundation of regenerative success.",
    badge: "Wellness"
  },
  {
    icon: Compass,
    title: "Inner Wisdom",
    description: "Intuition and presence woven into culture and collaboration.",
    badge: "Wisdom"
  }
];

const PillarsSection = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          
          <h2 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-6 leading-tight">
            The Structural Foundations of
            <span className="block italic">Regenerative Business</span>
          </h2>
          
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto mb-8">
            Leadership, Culture & Coherence
          </p>
          
          <div className="w-24 h-0.5 bg-gradient-warm mx-auto mb-8"></div>
          
          <p className="text-lg text-foreground/80 font-body max-w-2xl mx-auto">
            These five systems restore coherence in organization evolution.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto auto-rows-fr">
          {pillars.map((pillar, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-elegant transition-all duration-300 group border-0 bg-card/80 backdrop-blur-sm hover:scale-[1.02] h-full flex flex-col"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-0 font-medium">
                  {pillar.badge}
                </Badge>
              </div>
              
              <h3 className="text-xl font-display font-semibold text-primary mb-4 group-hover:text-primary-light transition-colors">
                {pillar.title}
              </h3>
              
              <p className="text-muted-foreground font-body leading-relaxed">
                {pillar.description}
              </p>
            </Card>
          ))}

          {/* Feature Card - 5-Pillar Framework */}
          <Card className="md:col-span-2 lg:col-span-1 p-8 bg-gradient-to-br from-[#6B8D6B] to-[#4A7C7A] text-white border-0 hover:shadow-warm hover:scale-[1.02] transition-all duration-300 h-full flex flex-col">
            <div className="text-center flex-1 flex flex-col">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <div className="text-2xl font-display font-bold text-white">5</div>
              </div>
              
              <h3 className="text-2xl font-display font-semibold mb-4 text-white">
                5-Pillar Framework
              </h3>
              
              <p className="text-white/90 font-body mb-6 leading-relaxed">
                These five systems form the backbone of our integrated approach to organizational transformation.
              </p>
              
              <div className="w-16 h-0.5 bg-white/60 mx-auto mb-6"></div>
              
              {/* Framework Image */}
              <div className="flex-1 flex items-center justify-center">
                <OptimizedImage 
                  src={frameworkImage}
                  alt="COIREA 5 Pillar Framework for Organizational Transformation - Purpose, Leadership, Collaboration, Culture, Well-Being"
                  className="w-full max-w-md rounded-lg"
                  width={384}
                  height={288}
                  priority={false}
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;