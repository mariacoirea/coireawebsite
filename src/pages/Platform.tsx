import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import LocalizedLink from "@/components/LocalizedLink";
import { 
  Brain, 
  Users, 
  Shield, 
  Activity,
  Network,
  Heart,
  Target,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight,
  AlertTriangle,
  Compass,
  Globe,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import mayanPatternsBg from "@/assets/mayan-patterns-bg.png";

const Platform = () => {
  const { t } = useTranslation('platform');
  const { currentLanguage } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) {
      toast({
        title: "Please fill all fields",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('send-journey-form', {
        body: {
          firstName: formData.name.split(' ')[0],
          lastName: formData.name.split(' ').slice(1).join(' ') || '',
          email: formData.email,
          company: formData.company,
          role: 'Early Access Interest',
          goals: 'Platform Early Access Request',
          source: 'platform-page'
        }
      });
      
      if (error) throw error;
      
      setSubmitted(true);
      toast({
        title: t('cta.successTitle') || "Thank you!",
        description: t('cta.successMessage') || "We'll be in touch soon."
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const pillars = [
    { key: 'purpose', icon: Compass },
    { key: 'collaboration', icon: Network },
    { key: 'leadership', icon: Users },
    { key: 'wellbeing', icon: Heart },
    { key: 'strategy', icon: Target },
  ];

  const aiCapabilities = [
    { key: 'analyze', icon: Activity },
    { key: 'detect', icon: AlertTriangle },
    { key: 'learn', icon: Brain },
    { key: 'generate', icon: Sparkles },
    { key: 'support', icon: Shield },
  ];

  const features = [
    { key: 'health', icon: Activity },
    { key: 'insights', icon: Brain },
    { key: 'leadership', icon: Users },
    { key: 'wellbeing', icon: Heart },
    { key: 'collaboration', icon: Network },
    { key: 'regenerative', icon: Globe },
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
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--warm-beige))] via-[hsl(77,15%,75%)] to-[hsl(77,18%,60%)]" />
            
            <div className="container relative z-10 px-4 py-20 text-center">
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/20 border border-background/30 text-primary text-sm font-medium backdrop-blur-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>The Regenerative Organizational OS</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                  <span className="bg-gradient-to-b from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                    {t('hero.title')}
                  </span>
                </h1>
                
                <div className="text-lg md:text-xl text-primary/70 font-body max-w-5xl mx-auto leading-relaxed space-y-4">
                  <p>COIREA replaces fragmented management tools with one integrated system for execution clarity.</p>
                  <p>It measures organizational health across five pillars, detects misalignment before it becomes costly, and translates data into clear ownership and strategic focus.</p>
                  <p>Its trained Organizational AI works within your system (not on generic benchmarks) ensuring growth builds capacity instead of draining it.</p>
                </div>
                
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
                      document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {t('hero.cta.secondary')}
                  </Button>
                </div>

                <p className="text-sm text-primary/50 font-body">
                  {t('hero.note')}
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[hsl(var(--warm-beige))] to-transparent" />
          </section>

          {/* 5 Pillars */}
          <section id="pillars" className="py-24 bg-background">
            <div className="container px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="text-secondary font-medium mb-2">The COIREA Operating System</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  {t('pillars.title')}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-8">
                {pillars.map(({ key, icon: Icon }) => (
                  <div 
                    key={key}
                    className="group p-6 rounded-2xl bg-[hsl(var(--warm-beige))] border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-secondary/20 transition-colors">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                      {t(`pillars.items.${key}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body">
                      {t(`pillars.items.${key}.description`)}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-center text-secondary font-medium font-body">
                {t('pillars.footer')}
              </p>
            </div>
          </section>

          {/* Dashboard Preview */}
          <section className="py-20 bg-[hsl(var(--warm-beige))]">
            <div className="container px-4">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <p className="text-secondary font-medium mb-2">{t('dashboard.subtitle')}</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  {t('dashboard.title')}
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {t('dashboard.description')}
                </p>
              </div>

              <div className="max-w-4xl mx-auto p-6 bg-background rounded-2xl border border-border shadow-lg">
                <div className="flex items-start gap-6">
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
                      
                      <div className="grid grid-cols-5 gap-2 text-center">
                        {[
                          { score: 46, label: 'Purpose', sub: 'Culture health' },
                          { score: 52, label: 'Collaboration', sub: 'Trust & flow' },
                          { score: 50, label: 'Leadership', sub: 'Effectiveness' },
                          { score: 54, label: 'Well-Being', sub: 'Resilience' },
                          { score: 59, label: 'Strategy', sub: 'Execution' }
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
            </div>
          </section>

          {/* Meet the AI Agent */}
          <section className="py-24 bg-background">
            <div className="container px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="text-secondary font-medium mb-2">{t('aiAgent.subtitle')}</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  {t('aiAgent.title')}
                </h2>
                <p className="text-muted-foreground font-body">
                  {t('aiAgent.description')}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto mb-16">
                {aiCapabilities.map(({ key, icon: Icon }) => (
                  <div 
                    key={key}
                    className="flex items-center gap-3 p-4 rounded-xl bg-[hsl(var(--warm-beige))] border border-border"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-foreground font-body text-sm font-medium">
                      {t(`aiAgent.capabilities.${key}`)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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

          {/* Regenerative Impact Layer */}
          <section className="py-24 relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url(${mayanPatternsBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--warm-beige))]/90 to-[hsl(var(--warm-beige))]/80" />
            <div className="container px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-secondary font-medium mb-2">{t('impact.subtitle')}</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  {t('impact.title')}
                </h2>
                <p className="text-lg text-muted-foreground font-body mb-4 leading-relaxed max-w-2xl mx-auto">
                  {t('impact.description')}
                </p>
                <p className="text-muted-foreground font-body mb-8 leading-relaxed max-w-2xl mx-auto">
                  {t('impact.note')}
                </p>
                <LocalizedLink to="/raices-latinas">
                  <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary/10">
                    {t('impact.cta')}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </LocalizedLink>
              </div>
            </div>
          </section>

          {/* Early Access CTA */}
          <section className="py-24 bg-[hsl(var(--warm-beige))]">
            <div className="container px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  {t('cta.title')}
                </h2>
                <p className="text-lg text-muted-foreground font-body mb-8 leading-relaxed">
                  {t('cta.description')}
                </p>
                
                {submitted ? (
                  <div className="p-8 rounded-2xl bg-background border border-secondary/30">
                    <CheckCircle2 className="w-12 h-12 text-secondary mx-auto mb-4" />
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                      {t('cta.successTitle') || "Thank you for your interest!"}
                    </h3>
                    <p className="text-muted-foreground font-body">
                      {t('cta.successMessage') || "We'll be in touch soon with next steps."}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                    <Input
                      type="text"
                      placeholder={t('cta.form.name', 'Full Name')}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background border-border h-12"
                      required
                    />
                    <Input
                      type="email"
                      placeholder={t('cta.form.email', 'Work Email')}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background border-border h-12"
                      required
                    />
                    <Input
                      type="text"
                      placeholder={t('cta.form.company', 'Company Name')}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-background border-border h-12"
                      required
                    />
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full text-lg py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          {t('cta.button')}
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
                
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
