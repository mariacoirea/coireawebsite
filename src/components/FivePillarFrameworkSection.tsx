import { Compass, Crown, Users, Heart, Layers } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

const pillarIcons = [Compass, Crown, Users, Heart, Layers];

const FivePillarFrameworkSection = () => {
  const { t } = useTranslation('home');

  const rawIntro = t('framework.intro', { returnObjects: true });
  const intro = Array.isArray(rawIntro) ? rawIntro : [];

  const rawPillars = t('framework.pillars', { returnObjects: true });
  const pillars = Array.isArray(rawPillars) ? rawPillars : [];

  return (
    <section className="relative overflow-hidden py-24" style={{backgroundImage: "url('/lovable-uploads/a2132690-3657-43fd-9280-c318fd590fa4.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
      {/* subtle background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_10%,hsl(var(--primary)/0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_80%_90%,hsl(var(--accent)/0.10)_0%,transparent_60%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <header className="mx-auto max-w-4xl text-center animate-fade-in">
          <Badge variant="secondary" className="mb-4 text-sm">
            {t('framework.badge')}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-primary">
            {t('framework.heading')}
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            {intro.map((paragraph: string, idx: number) => (
              <p key={idx} className={idx === 0 ? "text-lg md:text-xl leading-relaxed" : "text-base md:text-lg leading-relaxed"}>
                {paragraph}
              </p>
            ))}
          </div>
        </header>

        {/* Pillars Heading */}
        <h3 className="mt-16 mb-10 text-center text-2xl md:text-3xl font-semibold text-foreground animate-fade-in">
          {t('framework.pillarsHeading')}
        </h3>

        {/* Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map((pillar: any, i: number) => {
            const Icon = pillarIcons[i] || Compass;
            return (
              <Card
                key={i}
                className="group h-full bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-background/40 border-border/50 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 animate-fade-in"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 text-primary ring-1 ring-primary/20 group-hover:ring-primary/30 transition-all flex items-center justify-center">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <CardTitle className="mt-4 text-center text-lg text-foreground">{pillar.title}</CardTitle>
                  <CardDescription className="text-center text-sm">{pillar.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                  <div className="mt-4">
                    <div className="flex items-start gap-2">
                      <Badge variant="secondary" className="shrink-0">Drives</Badge>
                      <span className="text-xs text-muted-foreground">{pillar.drives}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* AI Note + Closing */}
        <div className="mt-14 mx-auto max-w-3xl text-center space-y-4 animate-fade-in">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic">
            {t('framework.aiNote')}
          </p>
          <p className="text-lg md:text-xl font-semibold text-primary">
            {t('framework.closingLine')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FivePillarFrameworkSection;
