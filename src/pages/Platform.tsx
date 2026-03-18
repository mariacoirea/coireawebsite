import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import LocalizedLink from "@/components/LocalizedLink";
import DashboardZoom from "@/components/DashboardZoom";
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
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

import platformDashboardPreview from "@/assets/platform-dashboard-preview.png";

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
    { key: 'leadership', icon: Users },
    { key: 'collaboration', icon: Network },
    { key: 'wellbeing', icon: Heart },
    { key: 'strategy', icon: Target },
  ];

  const giaNodes = [
    { key: 'directionCoherence', icon: Compass },
    { key: 'systemCapacity', icon: Activity },
    { key: 'roleClarity', icon: Users },
    { key: 'projectContribution', icon: Target },
    { key: 'systemTensions', icon: AlertTriangle },
    { key: 'nextEvolution', icon: Sparkles },
  ];

  const features = [
    { 
      key: 'alignment', 
      icon: Target,
      title: 'Strategic Alignment Engine',
      titleEs: 'Motor de Alineación Estratégica',
      desc: 'Connect long-term vision to quarterly execution. COIREA detects where priorities drift from strategic intent and keeps goals anchored in clear ownership and measurable progress.',
      descEs: 'Conecta la visión a largo plazo con la ejecución trimestral. COIREA detecta dónde las prioridades se desvían de la intención estratégica y mantiene los objetivos anclados en propiedad clara y progreso medible.'
    },
    { 
      key: 'gia', 
      icon: Brain,
      title: 'Trained Organizational AI (GiA)',
      titleEs: 'IA Organizacional Entrenada (GiA)',
      desc: 'GiA interprets cross-pillar signals within your own system — across leadership, culture, collaboration, well-being, and strategy. It surfaces structural tensions, execution blockers, and early risk indicators before they impact results.',
      descEs: 'GiA interpreta señales entre pilares dentro de tu propio sistema — a través de liderazgo, cultura, colaboración, bienestar y estrategia. Identifica tensiones estructurales, bloqueadores de ejecución e indicadores de riesgo temprano antes de que impacten los resultados.'
    },
    { 
      key: 'governance', 
      icon: Shield,
      title: 'Governance & Ownership Architecture',
      titleEs: 'Arquitectura de Gobernanza y Propiedad',
      desc: 'Define clear roles, decision rights, and accountability pathways. Eliminate bottlenecks, reduce decision friction, and distribute authority with clarity.',
      descEs: 'Define roles claros, derechos de decisión y rutas de responsabilidad. Elimina cuellos de botella, reduce la fricción de decisiones y distribuye la autoridad con claridad.'
    },
    { 
      key: 'ovi', 
      icon: Activity,
      title: 'Organizational Vitality Index (OVI)',
      titleEs: 'Índice de Vitalidad Organizacional (OVI)',
      desc: 'Aggregate systemic health into one executive score, with detailed pillar breakdowns and trend visibility. Track how organizational coherence directly affects execution and goal achievement.',
      descEs: 'Agrega la salud sistémica en un puntaje ejecutivo, con desgloses detallados por pilar y visibilidad de tendencias. Rastrea cómo la coherencia organizacional afecta directamente la ejecución y el logro de objetivos.'
    },
    { 
      key: 'capacity', 
      icon: Heart,
      title: 'System Capacity Signals',
      titleEs: 'Señales de Capacidad del Sistema',
      desc: 'Monitor well-being, collaboration strain, and energy trends in real time. Detect burnout risk and capacity depletion early — protecting performance as you scale.',
      descEs: 'Monitorea bienestar, tensión de colaboración y tendencias de energía en tiempo real. Detecta riesgo de burnout y agotamiento de capacidad temprano — protegiendo el rendimiento mientras escalas.'
    },
    { 
      key: 'flow', 
      icon: Network,
      title: 'Collaboration & Flow Intelligence',
      titleEs: 'Inteligencia de Colaboración y Flujo',
      desc: 'Visualize how teams coordinate across priorities and projects. Identify friction points slowing execution and strengthen cross-functional alignment.',
      descEs: 'Visualiza cómo los equipos coordinan a través de prioridades y proyectos. Identifica puntos de fricción que ralentizan la ejecución y fortalece la alineación interfuncional.'
    },
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
        
        <main id="main-content">
          {/* Hero Section */}
          <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--warm-beige))] via-[hsl(77,15%,75%)] to-[hsl(77,18%,60%)]" />
            
            <div className="container relative z-10 px-4 py-20 text-center">
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/20 border border-background/30 text-primary text-sm font-medium backdrop-blur-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>{t('hero.badge')}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                  <span className="bg-gradient-to-b from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                    {t('hero.title')}
                  </span>
                </h1>
                
                <div className="text-lg md:text-xl text-primary/70 font-body max-w-5xl mx-auto leading-relaxed space-y-4">
                  <p>{t('hero.descLine1')}</p>
                  <p>{t('hero.descLine2')}</p>
                  <p>{t('hero.descLine3')}</p>
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
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-secondary/20 transition-colors ring-1 ring-secondary/20">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-1">
                      {t(`pillars.items.${key}.title`)}
                    </h3>
                    <p className="text-sm text-secondary font-medium mb-3">
                      {t(`pillars.items.${key}.subtitle`)}
                    </p>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4 text-left">
                      {t(`pillars.items.${key}.description`)}
                    </p>
                    <div className="flex items-start gap-2 text-left">
                      <span className="shrink-0 px-2.5 py-1 rounded-full bg-secondary/15 text-secondary text-xs font-semibold">Drives</span>
                      <span className="text-xs text-muted-foreground">{t(`pillars.items.${key}.drives`)}</span>
                    </div>
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
              <div className="max-w-[1700px] mx-auto grid lg:grid-cols-[0.78fr_1.62fr] gap-8 items-center">
                <div className="space-y-5">
                  <p className="text-secondary font-medium text-sm tracking-wide uppercase">{t('dashboard.subtitle')}</p>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
                    {t('dashboard.title')}
                  </h2>
                  <p className="text-lg text-muted-foreground font-body leading-relaxed">
                    {t('dashboard.description')}
                  </p>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {t('dashboard.description2')}
                  </p>
                  <p className="text-sm text-secondary font-medium font-body">
                    {t('dashboard.signalsIntro') || (currentLanguage === 'es' ? 'En lugar de reaccionar a indicadores tardíos, ves:' : 'Instead of reacting to lagging indicators, you see:')}
                  </p>
                  <ul className="space-y-2.5 pl-1">
                    {['drift', 'ownership', 'capacity', 'alignment'].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-foreground font-body">
                        <div className="w-5 h-5 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                        </div>
                        {t(`dashboard.signals.${item}`)}
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground font-body leading-relaxed border-l-2 border-secondary/30 pl-4 italic">
                    {t('dashboard.result')}
                  </p>
                </div>
                <div className="lg:-mr-24 xl:-mr-32 lg:pl-2">
                  <DashboardZoom src={platformDashboardPreview} />
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

          {/* Execution Intelligence Infrastructure */}
          <section className="py-24 bg-[hsl(var(--warm-beige))]">
            <div className="container px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  {currentLanguage === 'es' ? 'Infraestructura de Inteligencia de Ejecución' : 'Execution Intelligence Infrastructure'}
                </h2>
                <p className="text-lg text-muted-foreground font-body">
                  {currentLanguage === 'es' 
                    ? 'Todo lo que necesitas para alinear tu organización, proteger capacidad y ejecutar objetivos estratégicos sin volverse extractiva.'
                    : 'Everything you need to align your organization, protect capacity, and execute strategic goals without becoming extractive.'}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {features.map(({ key, icon: Icon, title, titleEs, desc, descEs }) => (
                  <div 
                    key={key}
                    className="group p-6 rounded-2xl bg-background border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                      <Icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                      {currentLanguage === 'es' ? titleEs : title}
                    </h3>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      {currentLanguage === 'es' ? descEs : desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* Early Access CTA */}
          <section className="py-24 bg-background">
            <div className="container px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  {t('cta.title')}
                </h2>
                <p className="text-lg text-muted-foreground font-body mb-8 leading-relaxed">
                  {t('cta.description')}
                </p>
                
                <LocalizedLink to="/journey">
                  <Button 
                    size="lg" 
                    className="text-lg px-10 py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  >
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
