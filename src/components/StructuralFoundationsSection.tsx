import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Leaf, Target, Heart, Compass, TreePine, Sprout, Mountain, Waves, Sun } from "lucide-react";

const systems = [
  {
    icon: Brain,
    bgIcon: Sun,
    title: "Conscious Leadership",
    description: "Empowering leaders with courage, clarity, and embodied authenticity.",
    badge: "Leadership",
    gradient: "from-primary/20 to-accent/10"
  },
  {
    icon: Leaf,
    bgIcon: TreePine,
    title: "Regenerative Intelligence", 
    description: "Rooted growth guided by the wisdom of nature and systems.",
    badge: "Growth",
    gradient: "from-primary-light/20 to-primary/10"
  },
  {
    icon: Target,
    bgIcon: Mountain,
    title: "Coherence",
    description: "Long-term clarity aligned with your organization's soul and strategy.",
    badge: "Alignment",
    gradient: "from-accent/20 to-secondary/15"
  },
  {
    icon: Heart,
    bgIcon: Sprout,
    title: "Integrating Well-Being",
    description: "Workplace wellness as the foundation of regenerative success.",
    badge: "Wellness",
    gradient: "from-secondary/25 to-muted/20"
  },
  {
    icon: Compass,
    bgIcon: Waves,
    title: "Inner Wisdom",
    description: "Intuition and presence woven into culture and collaboration.",
    badge: "Wisdom",
    gradient: "from-primary/15 to-primary-light/10"
  }
];

const StructuralFoundationsSection = () => {
  return (
    <section className="py-24 bg-gradient-sanctuary relative overflow-hidden">
      {/* Floating nature elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <TreePine className="absolute top-20 left-5 w-8 h-8 text-primary/10 animate-pulse" style={{ animationDuration: '6s' }} />
        <Leaf className="absolute top-32 right-10 w-6 h-6 text-accent/15 animate-pulse" style={{ animationDuration: '4s', animationDelay: '2s' }} />
        <Sprout className="absolute bottom-40 left-10 w-7 h-7 text-primary-light/12 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <Mountain className="absolute bottom-20 right-5 w-9 h-9 text-primary/8 animate-pulse" style={{ animationDuration: '7s', animationDelay: '3s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
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
            className={`group relative p-8 hover:shadow-sanctuary transition-all duration-700 border border-border/30 bg-gradient-to-br ${system.gradient} backdrop-blur-sm hover:scale-[1.05] h-full flex flex-col overflow-hidden hover:border-primary/30 hover:shadow-xl`}
          >
            {/* Large background icon */}
            <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <system.bgIcon className="w-16 h-16 text-primary" />
            </div>
            
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-nature opacity-0 group-hover:opacity-5 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-hero rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg">
                  <system.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <Badge variant="secondary" className="bg-background/80 text-primary border border-primary/20 font-medium text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                  {system.badge}
                </Badge>
              </div>
              
              <h3 className="text-xl font-display font-semibold text-primary mb-4 group-hover:text-primary transition-colors leading-tight">
                {system.title}
              </h3>
              
              <p className="text-muted-foreground font-body leading-relaxed text-sm group-hover:text-foreground/80 transition-colors">
                {system.description}
              </p>
            </div>

            {/* Enhanced bottom accent line with gradient */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-nature transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StructuralFoundationsSection;