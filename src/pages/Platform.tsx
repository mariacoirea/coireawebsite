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
  Loader2,
  Eye,
  Wrench,
  Radio,
  Leaf,
  Sprout,
  TrendingUp,
  Sun
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

import platformDashboardPreview from "@/assets/platform-dashboard-preview.png";
import coireaCycleBg from "@/assets/coirea-cycle-bg.png";

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
            <div
              className="absolute inset-0 bg-cover bg-center mix-blend-soft-light opacity-60"
              style={{ backgroundImage: `url(${coireaCycleBg})` }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--warm-beige))]/40 via-transparent to-[hsl(var(--warm-beige))]/70" aria-hidden="true" />
            
            <div className="container relative z-10 px-4 py-20 text-center">
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/20 border border-background/30 text-primary text-sm font-medium backdrop-blur-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>{currentLanguage === 'es' ? 'El Sistema Operativo Organizacional Regenerativo' : 'The Regenerative Organizational OS'}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                  <span className="bg-gradient-to-b from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                    {currentLanguage === 'es'
                      ? 'Tu Organización Ya Sabe Lo Que Necesita Cambiar. COIREA Te Ayuda a Verlo.'
                      : 'Your Organization Already Knows What Needs to Change. COIREA Helps You See It.'}
                  </span>
                </h1>
                
                <div className="text-lg md:text-xl text-primary/70 font-body max-w-5xl mx-auto leading-relaxed">
                  <p>
                    {currentLanguage === 'es'
                      ? 'A la mayoría de las organizaciones no les falta propósito ni intención. Les falta un sistema que pueda sostener ambos, y traducirlos en cómo realmente operan, día a día. COIREA es ese sistema.'
                      : "Most organizations don't lack purpose or intention. They lack a system that can hold both, and translate them into how they actually operate, day to day. COIREA is that system."}
                  </p>
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
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[hsl(var(--warm-beige))] to-transparent" />
          </section>

          {/* The Regenerative Execution Cycle */}
          <section className="relative py-24 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${coireaCycleBg})`, opacity: 0.18 }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--warm-beige))]/85 via-[hsl(var(--warm-beige))]/70 to-[hsl(var(--warm-beige))]/90" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-[hsl(77,18%,55%)]/15" aria-hidden="true" />

            <div className="container relative z-10 px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="text-secondary font-medium text-sm tracking-[0.2em] uppercase mb-4">
                  {currentLanguage === 'es' ? 'El Ciclo de Ejecución Regenerativa' : 'The Regenerative Execution Cycle'}
                </p>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
                  {currentLanguage === 'es' ? 'Cómo Funciona COIREA' : 'How COIREA Works'}
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {[
                  {
                    num: '01',
                    title: 'SOIL',
                    subtitle: currentLanguage === 'es' ? 'Sentir el Sistema' : 'Sense the System',
                    icon: Sprout,
                    iconBg: 'bg-sage/30',
                    iconColor: 'text-secondary',
                    desc: currentLanguage === 'es'
                      ? 'COIREA comienza con reflexión estructurada. La plataforma mide la salud organizacional en cinco pilares y revela tensiones ocultas usando reconocimiento de patrones con IA entrenada.'
                      : 'COIREA begins with structured reflection. The platform measures organizational health across five pillars and surfaces hidden tensions using trained AI pattern recognition.',
                    bullets: currentLanguage === 'es'
                      ? ['Índice de Vitalidad Organizacional', 'Señales entre pilares', 'Indicadores tempranos de riesgo']
                      : ['Organizational Vitality Index', 'Cross-pillar signals', 'Early risk indicators'],
                    closing: currentLanguage === 'es'
                      ? 'Aquí es donde la organización pausa lo suficiente para verse con claridad.'
                      : 'This is where the organization pauses long enough to see itself clearly.'
                  },
                  {
                    num: '02',
                    title: 'GROW',
                    subtitle: currentLanguage === 'es' ? 'Alinear y Ejecutar' : 'Align & Execute',
                    icon: TrendingUp,
                    iconBg: 'bg-[hsl(var(--warm-beige))]',
                    iconColor: 'text-secondary',
                    desc: currentLanguage === 'es'
                      ? 'Los insights se convierten en gobernanza y ejecución estructurada. La ejecución se vuelve alineada, no reactiva.'
                      : 'Insights convert into structured governance and execution. Execution becomes aligned, not reactive.',
                    bullets: currentLanguage === 'es'
                      ? ['Propiedad clara (roles y círculos)', 'Prioridades trimestrales', 'Detección de deriva estratégica', 'Responsabilidad de liderazgo']
                      : ['Clear ownership (roles & circles)', 'Quarterly priorities', 'Strategic drift detection', 'Leadership accountability'],
                    closing: currentLanguage === 'es'
                      ? 'Aquí es donde la claridad se vuelve estructura.'
                      : 'This is where clarity becomes structure.'
                  },
                  {
                    num: '03',
                    title: 'FLOURISH',
                    subtitle: currentLanguage === 'es' ? 'Aprender y Regenerar' : 'Learn & Regenerate',
                    icon: Sun,
                    iconBg: 'bg-[hsl(20,40%,88%)]',
                    iconColor: 'text-copper',
                    desc: currentLanguage === 'es'
                      ? 'El sistema integra retroalimentación y fortalece la capacidad con el tiempo. El crecimiento construye resiliencia en lugar de agotamiento.'
                      : 'The system integrates feedback and strengthens capacity over time. Growth builds resilience instead of depletion.',
                    bullets: currentLanguage === 'es'
                      ? ['Pulsos de bienestar', 'Mapa de innovación', 'Bucles de aprendizaje', 'Señales de Capacidad Regenerativa']
                      : ['Well-being pulses', 'Innovation map', 'Learning loops', 'Regenerative Capacity signals'],
                    closing: currentLanguage === 'es'
                      ? 'Este es crecimiento evolutivo y regenerativo.'
                      : 'This is evolutionary and regenerative growth.'
                  }
                ].map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.num}
                      className="relative p-8 rounded-2xl bg-[hsl(var(--warm-beige))]/85 backdrop-blur-md border border-border/60 shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                      <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-mono tracking-wider">
                        {step.num}
                      </div>
                      <div className={`w-14 h-14 rounded-full ${step.iconBg} flex items-center justify-center mb-6 ring-1 ring-border/50`}>
                        <Icon className={`w-6 h-6 ${step.iconColor}`} />
                      </div>
                      <h3 className="text-3xl font-display font-bold text-primary tracking-[0.15em] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-foreground/80 font-body mb-5">
                        {step.subtitle}
                      </p>
                      <p className="text-muted-foreground font-body leading-relaxed mb-6">
                        {step.desc}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {step.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-foreground/85 font-body">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm italic text-muted-foreground/80 font-body pt-4 border-t border-border/40">
                        {step.closing}
                      </p>
                    </div>
                  );
                })}
              </div>

              <p className="text-center text-muted-foreground font-body italic max-w-3xl mx-auto mt-16 text-lg">
                {currentLanguage === 'es'
                  ? 'COIREA ayuda a las organizaciones a alcanzar metas estratégicas mientras aumenta la coherencia sistémica y la capacidad a largo plazo.'
                  : 'COIREA helps organizations achieve strategic goals while increasing systemic coherence and long-term capacity.'}
              </p>
            </div>
          </section>


          <section id="pillars" className="py-24 bg-background">
            <div className="container px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="text-secondary font-medium mb-2">The COIREA Operating System</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  {t('pillars.title')}
                </h2>
              </div>

              <TooltipProvider delayDuration={150}>
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-8">
                  {pillars.map(({ key, icon: Icon }) => (
                    <Tooltip key={key}>
                      <TooltipTrigger asChild>
                        <div
                          className="group p-6 rounded-2xl bg-[hsl(var(--warm-beige))] border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300 text-center cursor-help"
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
                          <p className="text-sm text-muted-foreground font-body leading-relaxed text-left line-clamp-2">
                            {t(`pillars.items.${key}.description`)}
                          </p>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" className="max-w-xs">
                        <p className="text-xs font-semibold text-secondary mb-1">
                          {currentLanguage === 'es' ? 'Impulsa' : 'Drives'}
                        </p>
                        <p className="text-xs">{t(`pillars.items.${key}.drives`)}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </TooltipProvider>

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

          {/* Meet GiA */}
          <section className="py-24 bg-background">
            <div className="container px-4">
              <div className="text-center max-w-5xl mx-auto mb-6">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
                  {t('aiAgent.title')}
                </h2>
                <p className="text-xl text-secondary font-medium mb-6">
                  {t('aiAgent.subtitle')}
                </p>
              </div>

              <div className="max-w-6xl mx-auto mb-14 space-y-4">
                <p className="text-muted-foreground font-body leading-relaxed text-center">
                  {t('aiAgent.description')}
                </p>
                <p className="text-muted-foreground font-body leading-relaxed text-center">
                  {t('aiAgent.description2')}
                </p>
                <div className="text-center pt-2 space-y-1">
                  <p className="text-foreground font-semibold italic">
                    {t('aiAgent.closingNote1')}
                  </p>
                  <p className="text-foreground font-semibold italic">
                    {t('aiAgent.closingNote2')}
                  </p>
                </div>
              </div>

              <div className="max-w-6xl mx-auto">
                <h3 className="text-2xl font-display font-bold text-foreground text-center mb-3">
                  {t('aiAgent.nodes.title')}
                </h3>
                <p className="text-muted-foreground text-center font-body mb-10 max-w-3xl mx-auto">
                  {t('aiAgent.nodes.subtitle')}
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {giaNodes.map(({ key, icon: Icon }) => (
                    <div 
                      key={key}
                      className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-lg font-display font-semibold text-foreground">
                            {t(`aiAgent.nodes.items.${key}.title`)}
                          </h4>
                          <p className="text-sm text-foreground/80 font-body italic leading-relaxed">
                            {t(`aiAgent.nodes.items.${key}.question`)}
                          </p>
                          <p className="text-xs text-muted-foreground font-body leading-relaxed">
                            {t(`aiAgent.nodes.items.${key}.clarification`)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* The System Today & Its Evolution */}
          <section className="py-24 bg-[hsl(var(--warm-beige))]">
            <div className="container px-4">
              {/* Section Header */}
              <div className="text-center max-w-4xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  {currentLanguage === 'es' ? 'El Sistema Hoy y Su Evolución' : 'The System Today & Its Evolution'}
                </h2>
                <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
                  {currentLanguage === 'es' 
                    ? 'Un sistema vivo que brinda claridad inmediata y evoluciona con tu organización a lo largo del tiempo.'
                    : 'A living system that delivers immediate clarity, and evolves with your organization over time.'}
                </p>
              </div>

              {/* TODAY — Core System Intelligence */}
              <div className="max-w-6xl mx-auto mb-20">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                  <h3 className="text-2xl font-display font-bold text-foreground">
                    {currentLanguage === 'es' ? 'Hoy — Inteligencia Sistémica Central' : 'Today — Core System Intelligence'}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {features.map(({ key, icon: Icon, title, titleEs, desc, descEs }) => (
                    <div 
                      key={key}
                      className="group p-6 rounded-2xl bg-background border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                        <Icon className="w-6 h-6 text-secondary" />
                      </div>
                      <h4 className="text-lg font-display font-semibold text-foreground mb-2">
                        {currentLanguage === 'es' ? titleEs : title}
                      </h4>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed">
                        {currentLanguage === 'es' ? descEs : desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* EVOLVING — Expanding System Intelligence */}
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <h3 className="text-2xl font-display font-bold text-foreground">
                    {currentLanguage === 'es' ? 'En Evolución — Inteligencia Sistémica Expandida' : 'Evolving — Expanding System Intelligence'}
                  </h3>
                </div>
                <p className="text-muted-foreground font-body mb-8 max-w-4xl">
                  {currentLanguage === 'es'
                    ? 'A medida que el sistema evoluciona, COIREA se extiende de la visibilidad hacia una inteligencia más profunda e impacto medible:'
                    : 'As the system evolves, COIREA extends from visibility into deeper intelligence and measurable impact:'}
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[
                    {
                      icon: Activity,
                      title: 'Regenerative Capacity Index (RCI)',
                      titleEs: 'Índice de Capacidad Regenerativa (RCI)',
                      desc: "Measure your organization's ability to grow without depleting people, culture, or long-term capacity.",
                      descEs: 'Mide la capacidad de tu organización para crecer sin agotar personas, cultura o capacidad a largo plazo.',
                    },
                    {
                      icon: Eye,
                      title: 'Deeper Organizational Insight Layer',
                      titleEs: 'Capa de Insight Organizacional Profundo',
                      desc: 'Identify structural patterns across governance, collaboration, and execution — revealing where the system is limiting performance.',
                      descEs: 'Identifica patrones estructurales a través de gobernanza, colaboración y ejecución — revelando dónde el sistema está limitando el rendimiento.',
                    },
                    {
                      icon: Wrench,
                      title: 'Infrastructure Improvement Guidance',
                      titleEs: 'Guía de Mejora de Infraestructura',
                      desc: 'Translate system signals into concrete changes in roles, processes, and decision-making structures.',
                      descEs: 'Traduce señales del sistema en cambios concretos en roles, procesos y estructuras de toma de decisiones.',
                    },
                    {
                      icon: Radio,
                      title: 'Advanced Real-Time Monitoring',
                      titleEs: 'Monitoreo Avanzado en Tiempo Real',
                      desc: 'Continuous tracking of trends, risks, and system evolution — beyond static snapshots.',
                      descEs: 'Seguimiento continuo de tendencias, riesgos y evolución del sistema — más allá de capturas estáticas.',
                    },
                    {
                      icon: Leaf,
                      title: 'Impact & Regenerative Measurement',
                      titleEs: 'Medición de Impacto Regenerativo',
                      desc: 'Extend organizational progress into measurable regenerative impact and structured reporting (e.g. SDGs).',
                      descEs: 'Extiende el progreso organizacional en impacto regenerativo medible y reportes estructurados (ej. ODS).',
                    },
                  ].map(({ icon: Icon, title, titleEs, desc, descEs }, idx) => (
                    <div 
                      key={idx}
                      className="group p-6 rounded-2xl bg-background/60 border border-dashed border-border hover:border-primary/30 hover:bg-background transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-primary/12 transition-colors">
                        <Icon className="w-6 h-6 text-primary/70" />
                      </div>
                      <h4 className="text-lg font-display font-semibold text-foreground mb-2">
                        {currentLanguage === 'es' ? titleEs : title}
                      </h4>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed">
                        {currentLanguage === 'es' ? descEs : desc}
                      </p>
                    </div>
                  ))}
                </div>
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
