import { Users, Activity, Heart, Workflow } from "lucide-react";
import { useTranslation } from "react-i18next";

const questionIcons = [Workflow, Activity, Users, Heart];

const ReflectionCheckpoint = () => {
  const { t } = useTranslation('home');
  return (
    <section
      id="reflection-checkpoint"
      aria-labelledby="reflection-heading"
      className="relative bg-aura-pearl py-16 md:py-20 overflow-hidden"
    >
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div className="absolute -top-10 right-10 w-72 h-72 rounded-full bg-gradient-to-br from-primary/[0.06] to-accent/[0.06] blur-2xl"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-gradient-to-tr from-secondary/[0.06] to-primary/[0.06] blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <header className="text-center mb-8 md:mb-12">
          <h2
            id="reflection-heading"
            className="text-4xl md:text-5xl font-display font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-br from-primary to-accent tracking-tight"
          >
            {t('reflection.heading')}
          </h2>
          <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-6xl mx-auto leading-relaxed">
            {t('reflection.intro')}
          </p>
        </header>

        {/* Questions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
          {(t('reflection.questions', { returnObjects: true }) as string[]).map((text: string, idx: number) => {
            const Icon = questionIcons[idx];
            return (
              <div
                key={idx}
                className="flex items-start gap-3 animate-fade-in"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary/80">
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-body">
                  {text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Data Section with Horizontal Layout */}
        <div className="mb-8 md:mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-4">
              {t('reflection.dataTitle')}
            </h3>
          </div>
          
          <div className="space-y-6 max-w-6xl mx-auto">
            {/* First Row - 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(t('reflection.dataPoints', { returnObjects: true }) as any[]).slice(0, 3).map((point: any, idx: number) => (
                <div key={idx} className="text-center p-6 rounded-xl bg-card/40 backdrop-blur-sm border border-border/50">
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-primary">{point.highlight}</span>, {point.description}
                    <span className="text-sm block mt-2 italic">{point.source}</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Second Row - 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(t('reflection.dataPoints', { returnObjects: true }) as any[]).slice(3, 6).map((point: any, idx: number) => {
                const isLastCard = idx === 2;
                return (
                  <div key={idx} className={`text-center p-6 rounded-xl backdrop-blur-sm ${isLastCard ? 'bg-copper/5 border-copper/20' : 'bg-card/40 border-border/50'} border`}>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      <span className={`font-semibold ${isLastCard ? 'text-copper' : 'text-primary'}`}>{point.highlight}</span>, {point.description}
                      <span className="text-sm block mt-2 italic">{point.source}</span>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Transition text */}
        <p className="text-center text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
          {t('reflection.conclusion')}
        </p>
      </div>

      {/* Bottom fading gradient to lead into the framework section */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-muted/50" aria-hidden="true" />
    </section>
  );
};

export default ReflectionCheckpoint;