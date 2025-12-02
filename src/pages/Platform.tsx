import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import LocalizedLink from "@/components/LocalizedLink";
import { 
  BarChart3, 
  Brain, 
  Users, 
  TrendingUp, 
  Shield, 
  Lightbulb,
  Activity,
  Network,
  Heart,
  Target,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Platform = () => {
  const { t } = useTranslation('platform');
  const { currentLanguage } = useLanguage();

  const capabilities = [
    { key: 'measure', icon: BarChart3 },
    { key: 'unify', icon: Network },
    { key: 'predict', icon: Shield },
    { key: 'recommend', icon: Lightbulb },
  ];

  const aiCapabilities = [
    { key: 'analyze', icon: Activity },
    { key: 'identify', icon: Target },
    { key: 'generate', icon: Sparkles },
    { key: 'track', icon: TrendingUp },
    { key: 'alert', icon: Shield },
    { key: 'learn', icon: Brain },
  ];

  const features = [
    { key: 'health', icon: Activity },
    { key: 'insights', icon: Brain },
    { key: 'leadership', icon: Users },
    { key: 'wellbeing', icon: Heart },
    { key: 'collaboration', icon: Network },
    { key: 'impact', icon: Target },
  ];

  return (
    <>
      <SEOHead
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        url={currentLanguage === 'es' ? '/es/platform' : '/platform'}
      />

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Nature-inspired green background */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/95 to-secondary/85" />
            
            {/* Organic leaf patterns */}
            <div className="absolute inset-0 opacity-10">
              <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <pattern id="leaf-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                    <path d="M60 10 Q80 30 60 60 Q40 30 60 10" fill="currentColor" className="text-background" opacity="0.6"/>
                    <path d="M20 70 Q40 90 20 120 Q0 90 20 70" fill="currentColor" className="text-background" opacity="0.4"/>
                    <path d="M100 80 Q120 100 100 130 Q80 100 100 80" fill="currentColor" className="text-background" opacity="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
              </svg>
            </div>
            
            {/* Radial light overlays */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--sage)/0.3),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--primary)/0.2),transparent_60%)]" />
            
            {/* Subtle organic curves */}
            <svg className="absolute bottom-0 left-0 w-full h-48 opacity-20" viewBox="0 0 1440 200" preserveAspectRatio="none">
              <path d="M0,100 C360,150 720,50 1080,100 C1260,125 1380,90 1440,100 L1440,200 L0,200 Z" fill="hsl(var(--background))" />
            </svg>
            
            <div className="container relative z-10 px-4 py-20 text-center">
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/20 border border-background/30 text-background text-sm font-medium backdrop-blur-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>AI-Powered Organizational Intelligence</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-foreground leading-tight">
                  {t('hero.title')}
                  <span className="block text-background/90 mt-2">{t('hero.subtitle')}</span>
                </h1>
                
                <p className="text-lg md:text-xl text-background/80 font-body max-w-2xl mx-auto leading-relaxed">
                  {t('hero.description')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <LocalizedLink to="/journey">
                    <Button size="lg" className="text-lg px-8 py-6 bg-background text-secondary hover:bg-background/90">
                      {t('hero.cta.primary')}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </LocalizedLink>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-lg px-8 py-6 border-background/40 text-background hover:bg-background/10" 
                    onClick={() => {
                      document.getElementById('what-we-do')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {t('hero.cta.secondary')}
                  </Button>
                </div>
              </div>
            </div>

            {/* Bottom fade to content */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[hsl(var(--warm-beige))] to-transparent" />
          </section>

          {/* What COIREA Does */}
          <section id="what-we-do" className="py-24 bg-[hsl(var(--warm-beige))]">
            <div className="container px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  {t('whatWeDo.title')}
                </h2>
                <p className="text-lg text-muted-foreground font-body">
                  {t('whatWeDo.subtitle')}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {capabilities.map(({ key, icon: Icon }) => (
                  <div 
                    key={key}
                    className="group p-6 rounded-2xl bg-background border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                      {t(`whatWeDo.capabilities.${key}.title`)}
                    </h3>
                    <p className="text-muted-foreground font-body">
                      {t(`whatWeDo.capabilities.${key}.description`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Meet the AI Agent */}
          <section className="py-24 bg-background">
            <div className="container px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  {t('aiAgent.title')}
                </h2>
                <p className="text-lg text-muted-foreground font-body mb-2">
                  {t('aiAgent.subtitle')}
                </p>
                <p className="text-muted-foreground font-body">
                  {t('aiAgent.description')}
                </p>
              </div>

              {/* AI Capabilities Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16">
                {aiCapabilities.map(({ key, icon: Icon }) => (
                  <div 
                    key={key}
                    className="flex items-center gap-3 p-4 rounded-xl bg-[hsl(var(--warm-beige))] border border-border"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-foreground font-body font-medium">
                      {t(`aiAgent.capabilities.${key}`)}
                    </span>
                  </div>
                ))}
              </div>

              {/* MVP vs Future */}
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* MVP Today */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                      {t('aiAgent.mvp.badge')}
                    </span>
                    <h3 className="text-xl font-display font-bold text-foreground">
                      {t('aiAgent.mvp.title')}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {['scanner', 'insights', 'indicators', 'burnout'].map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground font-body">
                          {t(`aiAgent.mvp.features.${feature}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Future Roadmap */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                      {t('aiAgent.future.badge')}
                    </span>
                    <h3 className="text-xl font-display font-bold text-foreground">
                      {t('aiAgent.future.title')}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {['predictive', 'automation', 'api', 'realtime'].map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground font-body">
                          {t(`aiAgent.future.features.${feature}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Platform Features */}
          <section className="py-24 bg-[hsl(var(--warm-beige))]">
            <div className="container px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  {t('features.title')}
                </h2>
                <p className="text-lg text-muted-foreground font-body">
                  {t('features.subtitle')}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {features.map(({ key, icon: Icon }) => (
                  <div 
                    key={key}
                    className="group p-6 rounded-2xl bg-background border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                      <Icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                      {t(`features.items.${key}.title`)}
                    </h3>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      {t(`features.items.${key}.description`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Early Access CTA */}
          <section className="py-24 bg-gradient-to-br from-secondary/5 via-background to-accent/5">
            <div className="container px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  {t('cta.title')}
                </h2>
                <p className="text-lg text-muted-foreground font-body mb-8 leading-relaxed">
                  {t('cta.description')}
                </p>
                <LocalizedLink to="/journey">
                  <Button size="lg" className="text-lg px-10 py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    {t('cta.button')}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </LocalizedLink>
                <p className="text-sm text-muted-foreground font-body mt-4">
                  {t('cta.note')}
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Platform;
