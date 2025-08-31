import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Heart, Zap, Check } from "lucide-react";
import { Link } from "react-router-dom";

// 90-Day Transformational Programs
const transformationalPrograms = [
  {
    icon: Heart,
    title: "Team Collaboration & Leadership Reset",
    subtitle: "When collaboration breaks down, performance slips.",
    painToOutcome: [
      {
        pain: "Silent tension in meetings",
        outcome: "Trust rebuilt and psychological safety restored"
      },
      {
        pain: "Roles unclear",
        outcome: "Clear responsibilities and accountability across the team"
      },
      {
        pain: "Leadership sending mixed signals",
        outcome: "Aligned leadership making faster, more confident decisions"
      },
      {
        pain: "Culture slipping under growth pressure",
        outcome: "Habits and practices embedded that sustain scale-up stress"
      },
      {
        pain: "Inconsistent or missing performance reviews",
        outcome: "Upgraded system that drives growth and fairness"
      }
    ],
    strategicImpact: [
      "Reduce wasted time in miscommunication and role confusion",
      "Retain talent by creating a culture people want to stay in",
      "Leadership becomes a source of clarity, not friction"
    ],
    withoutThis: "you spend far more time in conflict, misunderstandings, and repeated mistakes — energy that could be fueling growth",
    iconColor: "sage",
    badgeColor: "sage"
  },
  {
    icon: Zap,
    title: "Scale with Purpose (Strategic Ops & Leadership Partnership)",
    subtitle: "When structure and purpose don't align, scaling turns to chaos.",
    painToOutcome: [
      {
        pain: "Leadership not aligned on direction",
        outcome: "Purpose & vision defined/refined into one clear playbook"
      },
      {
        pain: "Priorities shifting, goals rarely hit",
        outcome: "Quarterly Rocks set, tracked, and consistently achieved"
      },
      {
        pain: "No clear meeting cadence",
        outcome: "Leadership rhythm established for faster decisions and less drag"
      },
      {
        pain: "Execution scattered across teams",
        outcome: "Workflows and structure redesigned for smoother execution"
      },
      {
        pain: "Scaling fast but losing company DNA",
        outcome: "Purpose embedded directly into strategy and operations"
      }
    ],
    strategicImpact: [
      "Leaders stop losing time searching for data and chasing scattered tasks",
      "Projects complete faster with clearer ownership",
      "Scale with purpose — growth that strengthens, not dilutes, the company's DNA"
    ],
    withoutThis: "leadership spends countless hours in confusion and firefighting, slowing growth and burning out key talent",
    iconColor: "primary",
    badgeColor: "primary"
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
            90-Day Transformational Programs
          </h2>
          
          <p className="text-xl text-muted-foreground font-body max-w-4xl mx-auto mb-8">
            Two focused, founder-ready pathways to reset and realign your organization in one quarter — with every shift tracked in real time.
          </p>

          <p className="text-lg text-muted-foreground/80 font-body max-w-4xl mx-auto mb-8">
            Scaling shouldn't mean chaos. Our 90-day programs are designed for founders and CEOs who need fast, measurable change in leadership, culture, and operations. In just one quarter, we help you reset your organization's core dynamics and prove impact through our COIREA Dashboard, so you know exactly what's working, and where to focus next.
          </p>
          
          <div className="w-24 h-0.5 bg-gradient-warm mx-auto"></div>
        </div>

        {/* Two 90-Day Programs */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16">
          {transformationalPrograms.map((program, index) => {
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
                    <div className={`bg-${program.badgeColor}/10 text-${program.badgeColor} px-3 py-1.5 rounded-full text-xs font-semibold border border-${program.badgeColor}/20`}>
                      90 Days
                    </div>
                    <div className="bg-copper/10 text-copper px-3 py-1.5 rounded-full text-xs font-semibold border border-copper/20">
                      3 Phases
                    </div>
                  </div>
                </div>

                {/* Pain → Outcome Section */}
                <div className="mb-6">
                  <h4 className={`text-xs font-semibold text-${program.iconColor} mb-4 uppercase tracking-wider`}>Pain → Outcome</h4>
                  <div className="space-y-3">
                    {program.painToOutcome.map((item, idx) => (
                      <div key={idx} className="bg-background/30 rounded-lg p-3 border border-primary/10">
                        <div className="text-xs text-muted-foreground mb-1 font-medium">
                          {item.pain}
                        </div>
                        <ArrowRight className="w-3 h-3 text-primary/60 mx-auto my-1" />
                        <div className="text-xs text-primary font-medium">
                          {item.outcome}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strategic Impact Section */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">Strategic Impact</h4>
                  <div className="space-y-2">
                    {program.strategicImpact.map((impact, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className={`w-3 h-3 text-${program.iconColor} mt-0.5 flex-shrink-0`} />
                        <span className="text-muted-foreground text-xs">{impact}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 p-3 bg-destructive/5 rounded-lg border border-destructive/10">
                    <p className="text-xs text-destructive/80 font-medium">
                      <span className="font-semibold">Without this:</span> {program.withoutThis}
                    </p>
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
