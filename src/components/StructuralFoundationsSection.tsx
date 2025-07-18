
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
    <section className="py-24 bg-gradient-to-br from-aura-pearl to-warm-beige">
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

        {/* Systems Grid - Professional elevated design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {systems.map((system, index) => (
            <Card 
              key={index} 
              className="group relative p-8 hover:shadow-xl transition-all duration-500 border border-border/50 bg-card/90 backdrop-blur-sm hover:scale-[1.03] h-full flex flex-col overflow-hidden hover:border-primary/20"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-hero rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <system.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-0 font-medium text-xs px-3 py-1 rounded-full">
                    {system.badge}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-display font-semibold text-primary mb-4 group-hover:text-primary-light transition-colors leading-tight">
                  {system.title}
                </h3>
                
                <p className="text-muted-foreground font-body leading-relaxed text-sm">
                  {system.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StructuralFoundationsSection;
