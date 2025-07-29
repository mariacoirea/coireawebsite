
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Leaf, Target, Heart, Cog } from "lucide-react";

const systems = [
  {
    icon: Brain,
    title: "Conscious Leadership",
    description: "Empowering leaders with clarity, courage, and presence to guide transformation.",
    badge: "Leadership"
  },
  {
    icon: Leaf,
    title: "Regenerative Systems", 
    description: "Designing adaptive structures rooted in nature's logic — to grow with resilience.",
    badge: "Systems"
  },
  {
    icon: Target,
    title: "Strategic Alignment",
    description: "Bridging vision, operations, and people to ensure clarity of direction and execution.",
    badge: "Alignment"
  },
  {
    icon: Cog,
    title: "Automated Operations",
    description: "Implementing smart, self-sustaining processes that free your team to focus on what matters.",
    badge: "Efficiency"
  },
  {
    icon: Heart,
    title: "Embodied Strategy",
    description: "Where intuition meets performance — transforming values into consistent action.",
    badge: "Execution"
  }
];

const StructuralFoundationsSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-aura-pearl to-warm-beige overflow-hidden">
      {/* Layered Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle geometric patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]">
          <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-primary blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-accent blur-3xl"></div>
        </div>
        
        {/* Radial gradient overlays */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,hsl(var(--primary))_0%,transparent_50%)] opacity-[0.02]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_25%,hsl(var(--accent))_0%,transparent_50%)] opacity-[0.02]"></div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-16 left-8 w-2 h-2 rounded-full bg-primary/10 animate-pulse"></div>
        <div className="absolute top-32 right-12 w-1 h-1 rounded-full bg-accent/20"></div>
        <div className="absolute bottom-24 left-16 w-3 h-3 rounded-full bg-secondary/5"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-6 leading-tight">
            The Structural Foundations of
            <span className="block italic">Regenerative Business</span>
          </h2>
          
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto mb-8">
            Leadership, Culture & Strategic Execution
          </p>
          
          <div className="w-24 h-0.5 bg-gradient-warm mx-auto mb-8"></div>
          
          <p className="text-lg text-foreground/80 font-body max-w-2xl mx-auto">
            These five systems activate intelligent growth across your organization — restoring integrity, adaptability, and purpose at every level.
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

      {/* Section separator - wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="hsl(var(--warm-beige))"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="hsl(var(--warm-beige))"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="hsl(var(--warm-beige))"></path>
        </svg>
      </div>
    </section>
  );
};

export default StructuralFoundationsSection;
