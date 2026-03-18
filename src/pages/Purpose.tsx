import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalizedLink from "@/components/LocalizedLink";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, Building2, Rocket, Leaf, Network, Sparkles, 
  Target, Shield, Users, Heart, Compass, AlertTriangle, 
  Lightbulb, Eye, CheckCircle2 
} from "lucide-react";

const Purpose = () => {
  const { t } = useTranslation('purpose');

  const orgIcons = [Building2, Rocket, Leaf, Network, Sparkles];
  const solutionIcons = [Target, AlertTriangle, Shield, Heart];

  const giaStates = [
    { icon: AlertTriangle, color: "text-accent" },
    { icon: Eye, color: "text-accent" },
    { icon: Compass, color: "text-accent" },
    { icon: Lightbulb, color: "text-secondary" },
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
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--warm-beige))] via-[hsl(77,15%,75%)] to-[hsl(77,18%,60%)]" />
          
          <div className="container relative z-10 px-6 py-20 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/20 border border-background/30 text-primary text-sm font-medium backdrop-blur-sm">
                <Leaf className="w-4 h-4" />
                <span>{t('hero.title', 'Built for Organizations')}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                <span className="bg-gradient-to-b from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                  {t('hero.title')} {t('hero.titleEmphasis')}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-primary/70 font-body max-w-3xl mx-auto leading-relaxed">
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
              <p className="text-secondary font-medium mb-2 text-sm tracking-wide uppercase">
                {t('orgTypes.title')}
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                {t('orgTypes.title')}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.isArray(orgItems) && orgItems.map((item: any, i: number) => {
                const Icon = orgIcons[i] || Sparkles;
                return (
                  <div
                    key={i}
                    className="group p-7 rounded-2xl bg-[hsl(var(--warm-beige))] border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors ring-1 ring-secondary/20">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 3 — SHARED CHALLENGE */}
        <section className="py-24 bg-[hsl(var(--warm-beige))]">
          <div className="container px-6 max-w-3xl mx-auto text-center">
            <p className="text-secondary font-medium mb-2 text-sm tracking-wide uppercase">
              {t('challenge.title')}
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              {t('challenge.title')}{' '}
              <span className="text-primary">{t('challenge.titleEmphasis')}</span>
            </h2>
            <p className="text-muted-foreground font-body mb-10">{t('challenge.intro')}</p>
            <ul className="space-y-3 text-left max-w-xl mx-auto mb-12">
              {Array.isArray(challengeItems) && challengeItems.map((item: string, i: number) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                  </div>
                  <span className="text-foreground/85 font-body leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="border-l-2 border-secondary/30 pl-6 py-2 max-w-lg mx-auto text-left">
              <p className="text-lg font-display font-semibold text-foreground">{t('challenge.closing')}</p>
              <p className="text-lg font-display font-bold text-primary">{t('challenge.closingEmphasis')}</p>
            </div>
          </div>
        </section>

        {/* SECTION 4 — SOLUTION */}
        <section className="py-24 bg-background">
          <div className="container px-6 max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-secondary font-medium mb-2 text-sm tracking-wide uppercase">
                {t('solution.intro')}
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                {t('solution.title')}{' '}
                <span className="text-primary">{t('solution.titleEmphasis')}</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-14">
              {Array.isArray(solutionItems) && solutionItems.map((item: any, i: number) => {
                const Icon = solutionIcons[i] || Target;
                return (
                  <div key={i} className="group flex items-start gap-4 p-6 rounded-2xl bg-[hsl(var(--warm-beige))] border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors ring-1 ring-secondary/20">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center border-l-2 border-secondary/30 pl-6 py-2 max-w-lg mx-auto text-left">
              <p className="text-foreground/80 font-body italic">{t('solution.closing')}</p>
              <p className="text-foreground font-display font-semibold">{t('solution.closingEmphasis')}</p>
            </div>
          </div>
        </section>

        {/* SECTION 5 — GiA */}
        <section className="py-24 bg-[hsl(var(--warm-beige))]">
          <div className="container px-6 max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-secondary font-medium mb-2 text-sm tracking-wide uppercase">GiA</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                {t('gia.title')}{' '}
                <span className="text-primary">{t('gia.titleEmphasis')}</span>
              </h2>
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
                  <div key={i} className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-background border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors ring-1 ring-secondary/20">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-sm font-body font-medium text-foreground text-center">{item}</span>
                  </div>
                );
              })}
            </div>
            <div className="text-center border-l-2 border-secondary/30 pl-6 py-2 max-w-md mx-auto text-left">
              <p className="text-foreground font-display font-semibold">{t('gia.closing')}</p>
              <p className="text-primary font-display font-bold">{t('gia.closingEmphasis')}</p>
            </div>
          </div>
        </section>

        {/* SECTION 6 — PLANETARY LAYER */}
        <section className="py-24 bg-background">
          <div className="container px-6 max-w-3xl mx-auto text-center">
            <p className="text-secondary font-medium mb-2 text-sm tracking-wide uppercase">Vision</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10">
              {t('planetary.title')}{' '}
              <span className="text-primary">{t('planetary.titleEmphasis')}</span>
            </h2>
            <div className="space-y-3 mb-10">
              {Array.isArray(planetaryLines) && planetaryLines.map((line: string, i: number) => (
                <p key={i} className="text-xl font-display font-medium text-foreground/70 italic">{line}</p>
              ))}
            </div>
            <p className="text-muted-foreground font-body leading-relaxed mb-8 max-w-2xl mx-auto">{t('planetary.description')}</p>
            <p className="text-foreground font-display font-semibold italic border-l-2 border-secondary/30 pl-6 py-2 max-w-md mx-auto text-left">
              {t('planetary.closing')}
            </p>
          </div>
        </section>

        {/* SECTION 7 — CTA */}
        <section className="py-24 bg-[hsl(var(--warm-beige))]">
          <div className="container px-6 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10">
              {t('cta.title')}
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <LocalizedLink to="/journey">
                <Button size="lg" className="text-lg px-8 py-6 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  {t('cta.primary')} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </LocalizedLink>
              <LocalizedLink to="/platform">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10">
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
