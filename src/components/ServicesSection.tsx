import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Heart, Zap, Check } from "lucide-react";
import { Link } from "react-router-dom";

// 90-Day Reset Programs
const resetPrograms = [
  {
    icon: Heart,
    title: "Collaboration Reset",
    subtitle: "When teams lose connection, performance suffers.",
    idealFor: "Founders/CEOs sensing their team is misaligned, collaboration feels heavy, roles and responsibilities are not clear.",
    outcomes: [
      "Rebuild trust and collaboration across teams",
      "Clarify leadership roles and decision-making authority",
      "Establish cultural practices and habits that scale",
      "Design a performance system that drives growth",
      "Measure shifts in collaboration and leadership alignment before/after"
    ],
    iconColor: "sage",
    badgeColor: "sage"
  },
  {
    icon: Zap,
    title: "Scale with Purpose",
    subtitle: "When structure and purpose don't align, growth turns chaotic.",
    idealFor: "Founders/CEOs whose company is scaling fast but struggling with messy operations, unclear priorities, or a diluted vision.",
    outcomes: [
      "Define or refine company purpose, vision, and strategic priorities",
      "Align leadership on one clear playbook",
      "Redesign org structure & workflows to support growth",
      "Set and track quarterly projects with accountability",
      "Gain measurable efficiency in decision-making and execution"
    ],
    iconColor: "primary",
    badgeColor: "primary"
  },
  {
    icon: Heart,
    title: "Leadership Reset",
    subtitle: "When leaders aren't supportive, teams lose direction.",
    idealFor: "Founders/CEOs who see their leaders struggling with clarity, confidence, or consistency and want to cultivate a culture of conscious and supportive leadership.",
    outcomes: [
      "Build executive presence rooted in authenticity and trust",
      "Strengthen conscious decision-making under pressure",
      "Develop embodied communication that inspires alignment",
      "Reconnect leaders with inner clarity to lead with confidence",
      "Measurable shifts in leadership trust and effectiveness tracked over 90 days"
    ],
    iconColor: "copper",
    badgeColor: "copper"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-br from-warm-beige to-aura-pearl overflow-hidden">
      {/* Enhanced Background Layers */}
      <div className="absolute inset-0">
        {/* Organic pattern overlay */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: `radial-gradient(circle at 20% 30%, hsl(var(--primary)) 2px, transparent 2px),
                                   radial-gradient(circle at 80% 70%, hsl(var(--accent)) 1px, transparent 1px)`,
                 backgroundSize: '60px 60px, 40px 40px'
               }}>
          </div>
        </div>

        {/* Floating geometric elements */}
        <div className="absolute top-20 right-1/4 w-72 h-72 rounded-full bg-gradient-to-br from-primary/[0.02] to-accent/[0.02] blur-2xl"></div>
        <div className="absolute bottom-32 left-1/3 w-96 h-96 rounded-full bg-gradient-to-br from-secondary/[0.02] to-primary/[0.02] blur-3xl"></div>
        
        {/* Subtle mesh gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,hsl(var(--sage))_0%,transparent_60%)] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-6 leading-tight">
            90-Day Reset Programs
          </h2>
          
          <p className="text-xl text-muted-foreground font-body max-w-6xl mx-auto mb-8">
            Three founder-ready pathways to realign your organization in one quarter, with every shift measured in real time.
          </p>

          <p className="text-lg text-muted-foreground/80 font-body max-w-6xl mx-auto mb-8">
            Scaling doesn't have to mean losing clarity or culture. Our 90-day resets are designed for founders and CEOs who need fast but meaningful change in leadership, collaboration, and strategy. In just one quarter, we help you reset your organization's core dynamics and track progress through the COIREA Dashboard, so you see exactly what's shifting, and where to focus next.
          </p>
          
          <div className="w-24 h-0.5 bg-gradient-warm mx-auto"></div>
        </div>

        {/* 3-Phase Cycle */}
        <div className="max-w-5xl mx-auto mb-20">
          <h3 className="text-2xl md:text-3xl font-display font-semibold text-primary text-center mb-12">
            Every Reset Follows Our 3-Phase Cycle
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-sage/10 to-sage/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-sage/20">
                <span className="text-sage font-bold text-lg">1</span>
              </div>
              <h4 className="text-lg font-display font-semibold text-primary mb-3">Phase 1: Reflect & Attune</h4>
              <p className="text-muted-foreground text-sm">Listen deeply. Surface truths. Sense where the organization is stuck or flowing.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-primary/20">
                <span className="text-primary font-bold text-lg">2</span>
              </div>
              <h4 className="text-lg font-display font-semibold text-primary mb-3">Phase 2: Seed & Design</h4>
              <p className="text-muted-foreground text-sm">Plant new practices, roles, and structures aligned with your chosen Reset.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-copper/10 to-copper/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-copper/20">
                <span className="text-copper font-bold text-lg">3</span>
              </div>
              <h4 className="text-lg font-display font-semibold text-primary mb-3">Phase 3: Integrate & Grow</h4>
              <p className="text-muted-foreground text-sm">Embed the changes into daily rhythms. Track COIREA KPIs as the system adapts.</p>
            </div>
          </div>
        </div>

        {/* Three 90-Day Programs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {resetPrograms.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card key={index} className="p-6 md:p-8 hover:shadow-elegant transition-all duration-300 group border-0 bg-card/60 backdrop-blur-sm hover:scale-[1.01] relative overflow-hidden">
                {/* Header Section */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${program.iconColor}/10 to-${program.iconColor}/20 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform duration-300 border border-${program.iconColor}/20`}>
                    <IconComponent className={`w-8 h-8 text-${program.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-primary mb-3">
                    {program.title}
                  </h3>
                  <p className="text-base text-copper font-medium mb-4">
                    {program.subtitle}
                  </p>
                   <div className="flex items-center justify-center gap-3 mb-5">
                     <div className="bg-copper/10 text-copper px-3 py-1.5 rounded-full text-xs font-semibold border border-copper/20">
                       90 Days
                     </div>
                     <div className="bg-copper/10 text-copper px-3 py-1.5 rounded-full text-xs font-semibold border border-copper/20">
                       3 Phases
                     </div>
                   </div>
                </div>

                {/* Ideal For Section */}
                <div className="mb-6">
                  <h4 className={`text-xs font-semibold text-${program.iconColor} mb-3 uppercase tracking-wider`}>Ideal For</h4>
                  <p className="text-muted-foreground font-body text-sm">
                    {program.idealFor}
                  </p>
                </div>

                {/* Outcomes Section */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">Key Outcomes</h4>
                  <div className="space-y-2.5">
                    {program.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <Check className={`w-4 h-4 text-${program.iconColor} mt-0.5 flex-shrink-0`} />
                        <span className="text-muted-foreground text-sm">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Central Call to Action */}
        <div className="text-center mb-16">
          <div className="max-w-3xl mx-auto mb-8 px-4">
            <p className="text-base md:text-lg text-muted-foreground font-body leading-relaxed mb-4">
              Ready to reset, realign, and prove measurable transformation in just 90 days?
            </p>
          </div>
          
          <Link to="/journey">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group px-6 py-3 md:px-8 md:py-4 text-base md:text-lg">
              Begin Your Journey
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".3" fill="hsl(var(--aura-pearl))"></path>
        </svg>
      </div>
    </section>
  );
};

export default ServicesSection;
