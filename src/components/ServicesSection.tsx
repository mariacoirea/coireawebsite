import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Heart, Zap, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import LocalizedLink from "./LocalizedLink";

const programIcons = [Heart, Zap, Heart];
const programColors = ["sage", "primary", "copper"];

const ServicesSection = () => {
  const { t } = useTranslation('home');
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
          <h2 className="text-4xl md:text-6xl font-display font-bold text-primary mb-6 leading-tight tracking-tight">
            {t('services.heading')}
          </h2>
          
          {(t('services.intro', { returnObjects: true }) as string[]).map((paragraph: string, idx: number) => (
            <p key={idx} className={idx === 0 ? "text-xl text-muted-foreground font-body max-w-6xl mx-auto mb-8" : "text-lg text-muted-foreground/80 font-body max-w-6xl mx-auto mb-8"}>
              {paragraph}
            </p>
          ))}
          
          <div className="w-24 h-0.5 bg-gradient-warm mx-auto"></div>
        </div>

        {/* 3-Phase Cycle */}
        <div className="max-w-5xl mx-auto mb-20">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-primary text-center mb-12">
            {t('services.phaseTitle')}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {(t('services.phases', { returnObjects: true }) as any[]).map((phase: any, idx: number) => {
              const colors = ['sage', 'primary', 'copper'];
              const color = colors[idx];
              return (
                <div key={idx} className="text-center group">
                  <div className={`w-12 h-12 bg-gradient-to-br from-${color}/10 to-${color}/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-${color}/20`}>
                    <span className={`text-${color} font-bold text-lg`}>{phase.number}</span>
                  </div>
                  <h4 className="text-lg font-display font-semibold text-primary mb-3">{phase.title}</h4>
                  <p className="text-muted-foreground text-sm">{phase.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Three 90-Day Programs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {(t('services.programs', { returnObjects: true }) as any[]).map((program: any, index: number) => {
            const IconComponent = programIcons[index];
            const color = programColors[index];
            return (
              <Card key={index} className="p-6 md:p-8 hover:shadow-elegant transition-all duration-300 group border-0 bg-card/60 backdrop-blur-sm hover:scale-[1.01] relative overflow-hidden">
                {/* Header Section */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${color}/10 to-${color}/20 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform duration-300 border border-${color}/20`}>
                    <IconComponent className={`w-8 h-8 text-${color}`} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-primary mb-3">
                    {program.title}
                  </h3>
                  <p className="text-base text-copper font-medium mb-4">
                    {program.subtitle}
                  </p>
                   <div className="flex items-center justify-center gap-3 mb-5">
                     <div className="bg-copper/10 text-copper px-3 py-1.5 rounded-full text-xs font-semibold border border-copper/20">
                       {t('services.badges.duration')}
                     </div>
                     <div className="bg-copper/10 text-copper px-3 py-1.5 rounded-full text-xs font-semibold border border-copper/20">
                       {t('services.badges.phases')}
                     </div>
                   </div>
                </div>

                {/* Ideal For Section */}
                <div className="mb-6">
                  <h4 className={`text-xs font-semibold text-${color} mb-3 uppercase tracking-wider`}>{program.idealForLabel}</h4>
                  <p className="text-muted-foreground font-body text-sm">
                    {program.idealFor}
                  </p>
                </div>

                {/* Outcomes Section */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">{program.outcomesLabel}</h4>
                  <div className="space-y-2.5">
                    {program.outcomes.map((outcome: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <Check className={`w-4 h-4 text-${color} mt-0.5 flex-shrink-0`} />
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
              {t('services.ctaText')}
            </p>
          </div>
          
          <LocalizedLink to="/journey">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group px-6 py-3 md:px-8 md:py-4 text-base md:text-lg">
              {t('services.ctaButton')}
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </LocalizedLink>
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
