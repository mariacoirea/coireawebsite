import { Sprout, TrendingUp, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";

const phaseKeys = ["soil", "grow", "flourish"] as const;
const phaseIcons = [Sprout, TrendingUp, Sun];
const phaseColors = [
  "bg-primary/10 text-primary ring-primary/20",
  "bg-secondary/10 text-secondary ring-secondary/20",
  "bg-accent/20 text-accent-foreground ring-accent/30",
];

const HowItWorksSection = () => {
  const { t } = useTranslation('home');

  return (
    <section className="py-24 bg-[hsl(var(--warm-beige))]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary font-medium text-sm uppercase tracking-wider mb-2">
            {t('howItWorks.badge')}
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight">
            {t('howItWorks.title')}
          </h2>
        </div>

        {/* Three Phase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {phaseKeys.map((key, index) => {
            const Icon = phaseIcons[index];
            const rawOutputs = t(`howItWorks.phases.${key}.outputs`, { returnObjects: true });
            const outputs = Array.isArray(rawOutputs) ? rawOutputs : [];

            return (
              <div
                key={key}
                className="group relative bg-card/60 backdrop-blur border border-border/50 rounded-2xl p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {/* Phase number */}
                <div className="absolute -top-3 left-6">
                  <Badge variant="secondary" className="text-xs font-mono">
                    {String(index + 1).padStart(2, '0')}
                  </Badge>
                </div>

                {/* Icon */}
                <div className={`h-14 w-14 rounded-full ${phaseColors[index]} ring-1 flex items-center justify-center mb-5`}>
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>

                {/* Title — uppercase bold like the sketch */}
                <h3 className="text-2xl md:text-3xl font-display font-bold text-primary uppercase tracking-widest">
                  {t(`howItWorks.phases.${key}.title`)}
                </h3>
                {/* Handwritten subtitle */}
                <p className="text-sm text-secondary font-medium mt-1 mb-4">
                  {t(`howItWorks.phases.${key}.subtitle`)}
                </p>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {t(`howItWorks.phases.${key}.description`)}
                </p>

                {/* Outputs */}
                <ul className="space-y-2">
                  {outputs.map((output, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {output}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom quote — handwritten style */}
        <p className="text-center text-lg md:text-xl text-foreground/70 font-body italic max-w-3xl mx-auto">
          {t('howItWorks.quote')}
        </p>
      </div>
    </section>
  );
};

export default HowItWorksSection;
