import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalizedLink from "@/components/LocalizedLink";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, Building2, Rocket, Leaf, Network, Sparkles, 
  Target, Shield, Users, Heart, Compass, AlertTriangle, 
  Lightbulb, Eye, Zap, CircleDot, Layers, EyeOff,
  Activity, BarChart3, ClipboardCheck
} from "lucide-react";

const Purpose = () => {
  const { t } = useTranslation('purpose');

  const orgIcons = [Building2, Rocket, Leaf, Network, Sparkles];
  const challengeIcons = [Layers, Zap, Compass, EyeOff];
  const solutionIcons = [Target, AlertTriangle, Shield, Heart];

  const orgItems = t('orgTypes.items', { returnObjects: true });
  const challengeItems = t('challenge.items', { returnObjects: true });
  const solutionItems = t('solution.items', { returnObjects: true });
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

        {/* SECTION 4 — SOLUTION (Vertical centered) */}
        <section className="py-24 bg-background">
          <div className="container px-6 max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-[hsl(var(--warm-beige))] text-sm font-medium text-secondary mx-auto mb-6">
                <Sparkles className="w-4 h-4" />
                {t('solution.badge', 'COIREA Response')}
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                {t('solution.title')}{' '}
                <span className="text-primary">{t('solution.titleEmphasis')}</span>
              </h2>
              <div className="w-12 h-0.5 bg-secondary/40 mx-auto mb-8" />
              <p className="text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
                {t('solution.description')}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
              {Array.isArray(solutionItems) && solutionItems.map((item: any, i: number) => {
                const Icon = solutionIcons[i] || Target;
                return (
                  <div key={i} className="group p-6 rounded-2xl bg-[hsl(var(--warm-beige))] border border-border hover:border-secondary/40 hover:shadow-md transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/15 transition-colors">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>
                    <h4 className="text-base font-display font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="max-w-xl mx-auto py-6 px-8 rounded-2xl bg-[hsl(var(--warm-beige))] border border-border text-center">
              <p className="text-foreground/80 font-body italic">
                {t('solution.closing')}{' '}
                <span className="font-semibold text-foreground not-italic">{t('solution.closingEmphasis')}</span>
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5 — ORGANIZATIONAL HEALTH */}
        <section className="py-24 bg-[hsl(var(--warm-beige))]">
          <div className="container px-6 max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
              {/* Left: Narrative */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background text-sm font-medium text-secondary">
                  <Activity className="w-4 h-4" />
                  {t('health.badge', 'Start Here')}
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
                  {t('health.title', 'How Healthy Is')}{' '}
                  <span className="text-primary">{t('health.titleEmphasis', 'Your Organization?')}</span>
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {t('health.description', 'Before you can transform your organization, you need to understand where it stands. Our free tools give you immediate clarity on your organizational health and structural coherence.')}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <LocalizedLink to="/tools">
                    <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                      {t('health.ctaPrimary', 'Take the Free Assessment')} <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </LocalizedLink>
                </div>
              </div>

              {/* Right: Tool cards */}
              <div className="bg-background rounded-2xl p-8 shadow-sm border border-border/50">
                <h3 className="text-lg font-display font-bold text-foreground mb-6">
                  {t('health.cardTitle', 'Free Diagnostic Tools')}
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-base font-display font-bold text-foreground mb-1">
                        {t('health.tools.ovi.title', 'Organizational Health Score')}
                      </h4>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed">
                        {t('health.tools.ovi.description', 'Measure your organization across 5 systemic dimensions and receive an overall vitality score with actionable insights.')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <ClipboardCheck className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-base font-display font-bold text-foreground mb-1">
                        {t('health.tools.leadership.title', 'Conscious Leadership Assessment')}
                      </h4>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed">
                        {t('health.tools.leadership.description', 'Evaluate leadership coherence, presence, and alignment — the foundation of any healthy organization.')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Activity className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-base font-display font-bold text-foreground mb-1">
                        {t('health.tools.scanner.title', 'Organizational Health Scanner')}
                      </h4>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed">
                        {t('health.tools.scanner.description', 'A quick diagnostic to identify structural tensions and areas requiring immediate attention.')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION — VISION (Inspiration) */}
        <section className="relative py-24 overflow-hidden bg-[hsl(40,20%,96%)]">
          <div className="container relative z-10 px-6 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary/70 text-sm font-medium mx-auto mb-8">
              <Leaf className="w-4 h-4" />
              Vision
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              {t('planetary.title')}{' '}
              <span className="text-primary">{t('planetary.titleEmphasis')}</span>
            </h2>
            <div className="w-12 h-0.5 bg-primary/20 mx-auto mb-10" />

            <p className="text-lg font-body text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t('planetary.description')}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Purpose;
