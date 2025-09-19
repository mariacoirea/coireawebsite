import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Heart, Zap, Check } from "lucide-react";
import { Link } from "react-router-dom";

// 90-Day Transformational Programs
const transformationalPrograms = [
  {
    icon: Heart,
    title: "Collaboration & Leadership Reset",
    subtitle: "When your team feels disconnected, performance slips.",
    idealFor: "Founders/CEOs who sense their team is losing trust, collaboration is weak, or leadership isn't aligned — and it's starting to cost results.",
    painPoints: [
      "Silent tension in meetings or lack of open dialogue",
      "New hires not fully integrating into the culture",
      "Roles and responsibilities unclear → accountability gaps",
      "Leadership sending mixed signals, slowing decisions",
      "Performance reviews inconsistent or missing"
    ],
    outcomes: [
      "Rebuild trust and collaboration across the team",
      "Clarify leadership roles and decision-making authority",
      "Establish cultural practices and habits that scale",
      "Design a performance system that drives growth",
      "Measurable before/after shift in collaboration & leadership alignment"
    ],
    coreElements: [
      "Culture & Leadership Assessment", 
      "Role & Responsibility Mapping", 
      "Leadership Mentoring", 
      "Team Collaboration Workshops", 
      "Performance Review Framework"
    ],
    iconColor: "sage",
    badgeColor: "sage"
  },
  {
    icon: Zap,
    title: "Scale with Purpose",
    subtitle: "When structure and purpose don't align, scaling turns to chaos.",
    idealFor: "Founders/CEOs whose company is growing fast but struggling with messy operations, unclear priorities, or a vision that feels diluted.",
    painPoints: [
      "Leadership team not aligned on purpose or direction",
      "Priorities keep shifting, goals rarely hit",
      "No clear meeting cadence → slow decisions",
      "Everyone is busy, but execution feels scattered",
      "Scaling fast but losing the company's original DNA"
    ],
    outcomes: [
      "Define or refine company purpose, vision, and strategic priorities",
      "Align leadership on one clear playbook",
      "Redesign org structure & workflows to support growth",
      "Set and track quarterly Projects with accountability",
      "Measurable efficiency gains in decision-making and execution"
    ],
    coreElements: [
      "Purpose & Vision Workshop", 
      "Operational & Bottleneck Audit", 
      "Structure & Workflow Design", 
      "Quarterly Projects", 
      "Efficiency & Execution Benchmarks"
    ],
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

                {/* Ideal For Section */}
                <div className="mb-6">
                  <h4 className={`text-xs font-semibold text-${program.iconColor} mb-3 uppercase tracking-wider`}>Ideal For</h4>
                  <p className="text-muted-foreground font-body text-sm mb-4">
                    {program.idealFor}
                  </p>
                  
                  {/* Pain Points */}
                  <div className="mt-4">
                    <h5 className="text-xs font-semibold text-primary/70 mb-2 uppercase tracking-wider">Pain Points</h5>
                    <ul className="space-y-1.5">
                      {program.painPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-primary/60 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-xs">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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

                {/* Core Elements as Tags */}
                <div className="mt-auto">
                  <h4 className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">Core Elements</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {program.coreElements.map((element, idx) => (
                      <span key={idx} className="bg-primary/10 text-primary px-2.5 py-1.5 rounded-lg text-xs font-medium border border-primary/20">
                        {element}
                      </span>
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
