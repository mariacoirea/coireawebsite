import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Leaf, Target, Heart, Compass } from "lucide-react";

const systems = [
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

const StructuralFoundationsSection = () => {
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

        {/* Systems Grid - Reduced size (80% of original) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {systems.map((system, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-elegant transition-all duration-300 group border-0 bg-card/80 backdrop-blur-sm hover:scale-[1.02] h-full flex flex-col"
            >
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-11 h-11 bg-gradient-hero rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <system.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-0 font-medium text-sm">
                  {system.badge}
                </Badge>
              </div>
              
              <h3 className="text-lg font-display font-semibold text-primary mb-3 group-hover:text-primary-light transition-colors">
                {system.title}
              </h3>
              
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {system.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StructuralFoundationsSection;