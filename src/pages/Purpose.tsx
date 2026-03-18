import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalizedLink from "@/components/LocalizedLink";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Rocket, Leaf, Network, Sparkles, Target, Shield, Users, Heart, Compass, AlertTriangle, Lightbulb, Eye } from "lucide-react";

const Purpose = () => {
  const { t } = useTranslation('purpose');

  const orgIcons = [Building2, Rocket, Leaf, Network, Sparkles];

  const solutionIcons = [Target, AlertTriangle, Shield, Heart];

  const giaStates = [
    { icon: AlertTriangle, color: "text-accent" },
    { icon: Eye, color: "text-accent" },
    { icon: Compass, color: "text-accent" },
    { icon: Lightbulb, color: "text-primary" },
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
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-warm-beige/60 to-background">
          <div className="container px-6 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              {t('hero.title')}{' '}
              <span className="text-primary">{t('hero.titleEmphasis')}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-6 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <p className="text-base text-muted-foreground/80 font-body leading-relaxed mb-10 max-w-2xl mx-auto">
              {t('hero.supporting')}
            </p>
            <LocalizedLink to="/platform">
              <Button variant="hero" size="lg" className="rounded-full">
                {t('hero.cta')} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </LocalizedLink>
          </div>
        </section>

        {/* SECTION 2 — ORGANIZATION TYPES */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-6 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-14">
              {t('orgTypes.title')}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.isArray(orgItems) && orgItems.map((item: any, i: number) => {
                const Icon = orgIcons[i] || Sparkles;
                return (
                  <div
                    key={i}
                    className="group p-7 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
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
        <section className="py-20 md:py-28 bg-warm-beige/40">
          <div className="container px-6 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              {t('challenge.title')}{' '}
              <span className="text-primary">{t('challenge.titleEmphasis')}</span>
            </h2>
            <p className="text-muted-foreground font-body mb-10">{t('challenge.intro')}</p>
            <ul className="space-y-4 text-left max-w-xl mx-auto mb-12">
              {Array.isArray(challengeItems) && challengeItems.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-foreground/85 font-body leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-1">
              <p className="text-lg font-display font-semibold text-foreground">{t('challenge.closing')}</p>
              <p className="text-lg font-display font-bold text-primary">{t('challenge.closingEmphasis')}</p>
            </div>
          </div>
        </section>

        {/* SECTION 4 — SOLUTION */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-6 max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                {t('solution.title')}{' '}
                <span className="text-primary">{t('solution.titleEmphasis')}</span>
              </h2>
              <p className="text-muted-foreground font-body">{t('solution.intro')}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
              {Array.isArray(solutionItems) && solutionItems.map((item: any, i: number) => {
                const Icon = solutionIcons[i] || Target;
                return (
                  <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center space-y-1">
              <p className="text-foreground/80 font-body italic">{t('solution.closing')}</p>
              <p className="text-foreground font-display font-semibold">{t('solution.closingEmphasis')}</p>
            </div>
          </div>
        </section>

        {/* SECTION 5 — GiA */}
        <section className="py-20 md:py-28 bg-warm-beige/40">
          <div className="container px-6 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              {t('gia.title')}{' '}
              <span className="text-primary">{t('gia.titleEmphasis')}</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              {t('gia.description')}
            </p>
            <p className="text-foreground/80 font-body mb-6">{t('gia.intro')}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10">
              {Array.isArray(giaItems) && giaItems.map((item: string, i: number) => {
                const state = giaStates[i];
                const Icon = state?.icon || Compass;
                return (
                  <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border">
                    <Icon className={`w-6 h-6 ${state?.color || 'text-primary'}`} />
                    <span className="text-sm font-body font-medium text-foreground">{item}</span>
                  </div>
                );
              })}
            </div>
            <div className="space-y-1">
              <p className="text-foreground font-display font-semibold">{t('gia.closing')}</p>
              <p className="text-primary font-display font-bold">{t('gia.closingEmphasis')}</p>
            </div>
          </div>
        </section>

        {/* SECTION 6 — PLANETARY LAYER */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-6 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
              {t('planetary.title')}{' '}
              <span className="text-primary">{t('planetary.titleEmphasis')}</span>
            </h2>
            <div className="space-y-2 mb-8">
              {Array.isArray(planetaryLines) && planetaryLines.map((line: string, i: number) => (
                <p key={i} className="text-lg font-display font-medium text-foreground/80 italic">{line}</p>
              ))}
            </div>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">{t('planetary.description')}</p>
            <p className="text-foreground font-display font-semibold">{t('planetary.closing')}</p>
          </div>
        </section>

        {/* SECTION 7 — CTA */}
        <section className="py-20 md:py-28 bg-warm-beige/40">
          <div className="container px-6 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10">
              {t('cta.title')}
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <LocalizedLink to="/journey">
                <Button variant="hero" size="lg" className="rounded-full">
                  {t('cta.primary')} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </LocalizedLink>
              <LocalizedLink to="/platform">
                <Button variant="outline" size="lg" className="rounded-full">
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
