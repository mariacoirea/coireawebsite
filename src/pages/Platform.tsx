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
            {/* Soft gradient background like 90days */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-[hsl(82,25%,45%/0.08)] to-[hsl(183,48%,21%/0.12)]" />
            
            <div className="container relative z-10 px-4 py-20 text-center">
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/20 border border-background/30 text-background text-sm font-medium backdrop-blur-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>AI-Powered Organizational Intelligence</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                  <span className="bg-gradient-to-b from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                    {t('hero.title')}
                  </span>
                  <span className="block bg-gradient-to-b from-primary/80 to-primary/60 bg-clip-text text-transparent mt-2">{t('hero.subtitle')}</span>
                </h1>
                
                <p className="text-lg md:text-xl text-primary/70 font-body max-w-2xl mx-auto leading-relaxed">
                  {t('hero.description')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <LocalizedLink to="/journey">
                    <Button size="lg" className="text-lg px-8 py-6 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                      {t('hero.cta.primary')}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </LocalizedLink>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10" 
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

          {/* Dashboard Preview & HBR Quote Section */}
          <section className="py-20 bg-background">
            <div className="container px-4">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  How Do We Track It in Real Time?
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Welcome to the COIREA Evolution Dashboard — where AI meets Human Intelligence, and insight becomes action. 
                  Track how your organization evolves across the five core pillars of regenerative business.
                </p>
              </div>

              {/* Dashboard Preview */}
              <div className="max-w-4xl mx-auto mb-16 p-6 bg-background rounded-2xl border border-border shadow-lg">
                <div className="flex items-start gap-6">
                  {/* Sidebar */}
                  <div className="hidden md:block w-48 space-y-1 border-r border-border pr-4">
                    <div className="text-lg font-display font-bold text-primary mb-1">COIREA</div>
                    <div className="text-sm text-muted-foreground mb-4">Evolution Dashboard</div>
                    <div className="space-y-1">
                      {['Overview', '5 Pillars', 'Team Insights', 'Leadership', 'Culture Metrics', 'Well-being', 'Reports'].map((item, i) => (
                        <div key={item} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${i === 0 ? 'bg-secondary/10 text-secondary font-medium' : 'text-muted-foreground'}`}>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Main Content */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-xl font-display font-bold text-secondary">Overview</h3>
                        <p className="text-sm text-muted-foreground">Real-time pulse of organizational health</p>
                      </div>
                      <span className="flex items-center gap-1.5 text-sm text-secondary">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        Vitality: High
                      </span>
                    </div>
                    
                    {/* Vitality Index */}
                    <div className="p-4 bg-[hsl(var(--warm-beige))] rounded-xl mb-4">
                      <h4 className="text-lg font-display font-semibold text-foreground mb-1">Organizational Vitality Index (OVI)</h4>
                      <p className="text-sm text-muted-foreground mb-4">Real-time pulse of organizational health</p>
                      
                      <div className="flex items-center justify-center mb-6">
                        <div className="relative w-32 h-32">
                          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--border))" strokeWidth="8" />
                            <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--secondary))" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="119" strokeLinecap="round" />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-2xl font-display font-bold text-secondary">52.6</span>
                            <span className="text-xs text-muted-foreground">Vitality Score</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Pillar Scores */}
                      <div className="grid grid-cols-5 gap-2 text-center">
                        {[
                          { score: 46, label: 'Purpose', sub: 'Clarity & storytelling' },
                          { score: 52, label: 'Leadership', sub: 'Presence & feedback' },
                          { score: 50, label: 'Collaboration', sub: 'Trust & flow' },
                          { score: 54, label: 'Culture', sub: 'Values alignment' },
                          { score: 59, label: 'Well-Being', sub: 'Energy & resilience' }
                        ].map(({ score, label, sub }) => (
                          <div key={label}>
                            <div className="inline-block px-2 py-1 border border-border rounded text-sm font-medium text-foreground mb-1">{score}</div>
                            <div className="text-xs font-medium text-secondary">{label}</div>
                            <div className="text-[10px] text-muted-foreground">{sub}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* HBR Quote */}
              <div className="max-w-3xl mx-auto text-center">
                <blockquote className="text-xl md:text-2xl font-display italic text-primary leading-relaxed mb-4">
                  "Companies that prioritize employee well-being outperform the stock market by 2 to 3 times over 25 years."
                </blockquote>
                <cite className="text-muted-foreground font-body not-italic">— Harvard Business Review</cite>
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
