import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalizedLink from "@/components/LocalizedLink";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, Building2, Rocket, Leaf, Network, Sparkles, 
  Target, Shield, Users, Heart, Compass, AlertTriangle, 
  Lightbulb, Eye, Zap, CircleDot, Layers, EyeOff
} from "lucide-react";

const Purpose = () => {
  const { t } = useTranslation('purpose');

  const orgIcons = [Building2, Rocket, Leaf, Network, Sparkles];
  const challengeIcons = [Layers, Zap, Compass, EyeOff];
  const solutionIcons = [Target, AlertTriangle, Shield, Heart];

  const giaStates = [
    { icon: AlertTriangle },
    { icon: Eye },
    { icon: Compass },
    { icon: Lightbulb },
  ];

  const orgItems = t('orgTypes.items', { returnObjects: true });
  const challengeItems = t('challenge.items', { returnObjects: true });
  const solutionItems = t('solution.items', { returnObjects: true });
  const giaItems = t('gia.items', { returnObjects: true });
  const planetaryLines = t('planetary.lines', { returnObjects: true });

  return (
    <>
      <Helmet>
        <title>{t('seo.title')}</title>
        <meta name="description" content={t('seo.description')} />
        <meta name="keywords" content={t('seo.keywords')} />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* SECTION 1 — HERO */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(38,30%,88%)] via-[hsl(32,25%,78%)] to-[hsl(45,18%,65%)]" />
          
          <div className="container relative z-10 px-6 py-20 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/25 border border-background/30 text-primary text-sm font-medium backdrop-blur-sm">
                <Leaf className="w-4 h-4" />
                <span>{t('hero.title', 'Built for Organizations')}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                <span className="bg-gradient-to-b from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                  {t('hero.title')} {t('hero.titleEmphasis')}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-primary/75 font-body max-w-3xl mx-auto leading-relaxed">
                {t('hero.subtitle')}
              </p>
              
              <p className="text-base text-primary/50 font-body leading-relaxed max-w-2xl mx-auto">
                {t('hero.supporting')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <LocalizedLink to="/platform">
                  <Button size="lg" className="text-lg px-8 py-6 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    {t('hero.cta')} <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </LocalizedLink>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* SECTION 2 — ORGANIZATION TYPES */}
        <section className="py-24 bg-background">
          <div className="container px-6 max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                {t('orgTypes.title')}
              </h2>
              <div className="w-12 h-0.5 bg-secondary/40 mx-auto mt-5" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.isArray(orgItems) && orgItems.map((item: any, i: number) => {
                const Icon = orgIcons[i] || Sparkles;
                return (
                  <div
                    key={i}
                    className="group p-7 rounded-2xl bg-[hsl(var(--warm-beige))] border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 3 — CHALLENGE (Two-Column) */}
        <section className="py-24 bg-[hsl(var(--warm-beige))]">
          <div className="container px-6 max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
              {/* Left: Challenge narrative */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background text-sm font-medium text-secondary">
                  <CircleDot className="w-4 h-4" />
                  {t('challenge.badge', 'The Real Problem')}
                </div>
                
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
                  {t('challenge.title')}{' '}
                  <span className="text-primary">{t('challenge.titleEmphasis')}</span>
                </h2>
                
                <p className="text-muted-foreground font-body leading-relaxed">
                  {t('challenge.description')}
                </p>
              </div>

              {/* Right: Challenge cards */}
              <div className="bg-background rounded-2xl p-8 shadow-sm border border-border/50">
                <div className="space-y-6">
                  {Array.isArray(challengeItems) && challengeItems.map((item: any, i: number) => {
                    const Icon = challengeIcons[i] || AlertTriangle;
                    return (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="text-base font-display font-bold text-foreground mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-center font-display text-foreground/90 leading-relaxed">
                    {t('challenge.closing')}{' '}
                    <span className="font-bold text-primary">{t('challenge.closingEmphasis')}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — GiA (between challenge and solution) */}
        <section className="py-24 bg-background">
          <div className="container px-6 max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-[hsl(var(--warm-beige))] text-sm font-medium text-secondary mx-auto mb-6">
                <Lightbulb className="w-4 h-4" />
                GiA
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                {t('gia.title')}{' '}
                <span className="text-primary">{t('gia.titleEmphasis')}</span>
              </h2>
              <div className="w-12 h-0.5 bg-secondary/40 mx-auto mb-8" />
              <p className="text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto mb-4">
                {t('gia.description')}
              </p>
              <p className="text-foreground/80 font-body">{t('gia.intro')}</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-3xl mx-auto mb-14">
              {Array.isArray(giaItems) && giaItems.map((item: string, i: number) => {
                const state = giaStates[i];
                const Icon = state?.icon || Compass;
                return (
                  <div key={i} className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-[hsl(var(--warm-beige))] border border-border hover:border-secondary/40 hover:shadow-md transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/15 transition-colors">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-sm font-display font-semibold text-foreground text-center">{item}</span>
                  </div>
                );
              })}
            </div>
            <div className="max-w-xl mx-auto py-6 px-8 rounded-2xl bg-[hsl(var(--warm-beige))] border border-border text-center">
              <p className="text-foreground font-display leading-relaxed">
                {t('gia.closing')}{' '}
                <span className="text-primary font-bold">{t('gia.closingEmphasis')}</span>
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5 — SOLUTION (Two-Column: cards left, narrative right) */}
        <section className="py-24 bg-[hsl(var(--warm-beige))]">
          <div className="container px-6 max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
              {/* Left: Solution cards in 2x2 grid */}
              <div className="grid sm:grid-cols-2 gap-5 order-2 lg:order-1">
                {Array.isArray(solutionItems) && solutionItems.map((item: any, i: number) => {
                  const Icon = solutionIcons[i] || Target;
                  return (
                    <div key={i} className="group p-6 rounded-2xl bg-background border border-border hover:border-secondary/40 hover:shadow-md transition-all duration-300">
                      <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/15 transition-colors">
                        <Icon className="w-5 h-5 text-secondary" />
                      </div>
                      <h4 className="text-base font-display font-bold text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.description}</p>
                    </div>
                  );
                })}
              </div>

              {/* Right: Solution narrative */}
              <div className="space-y-6 lg:pt-4 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background text-sm font-medium text-secondary">
                  <Sparkles className="w-4 h-4" />
                  {t('solution.badge', 'COIREA Response')}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground leading-tight">
                  {t('solution.title')}{' '}
                  <span className="text-primary">{t('solution.titleEmphasis')}</span>
                </h3>
                
                <p className="text-muted-foreground font-body leading-relaxed">
                  {t('solution.description')}
                </p>

                <div className="pt-2">
                  <p className="text-foreground/80 font-body italic">
                    {t('solution.closing')}{' '}
                    <span className="font-semibold text-foreground not-italic">{t('solution.closingEmphasis')}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION — VISION + CTA */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(40,25%,88%)] via-[hsl(60,15%,78%)] to-[hsl(90,18%,65%)]" />
          
          <div className="container relative z-10 px-6 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/25 border border-background/30 text-primary text-sm font-medium backdrop-blur-sm mx-auto mb-8">
              <Leaf className="w-4 h-4" />
              Vision
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              {t('planetary.title')}{' '}
              <span className="text-primary/80">{t('planetary.titleEmphasis')}</span>
            </h2>
            <div className="w-12 h-0.5 bg-primary/30 mx-auto mb-10" />

            <div className="space-y-3 mb-10">
              {Array.isArray(planetaryLines) && planetaryLines.map((line: string, i: number) => (
                <p key={i} className="text-xl font-display font-medium text-primary/60 italic">{line}</p>
              ))}
            </div>

            <p className="text-primary/70 font-body leading-relaxed mb-14 max-w-2xl mx-auto">
              {t('planetary.description')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <LocalizedLink to="/journey">
                <Button size="lg" className="text-lg px-8 py-6 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  {t('cta.primary')} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </LocalizedLink>
              <LocalizedLink to="/platform">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10 backdrop-blur-sm">
                  {t('cta.secondary')}
                </Button>
              </LocalizedLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Purpose;
