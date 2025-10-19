import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import LocalizedLink from "@/components/LocalizedLink";
import { 
  Brain, 
  Leaf, 
  Target, 
  Heart, 
  Compass, 
  ArrowRight, 
  Building, 
  Users, 
  Lightbulb, 
  Star,
  BarChart3,
  Eye,
  Activity,
  Settings,
  TrendingUp,
  Shield,
  Zap,
  Send,
  Check,
  MessageCircle,
  Calendar,
  Crown,
  Layers
} from "lucide-react";

const Offerings = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(['offerings', 'home']);
  const { currentLanguage } = useLanguage();
  const { getLocalizedPath } = useLanguage();

  return (
    <>
      <SEOHead
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        url={currentLanguage === 'es' ? '/es/offerings' : '/offerings'}
      />
      <StructuredData type="service" />
      
      {/* Critical rendering optimization added via CSS performance utilities */}
      
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-white via-sage/5 to-primary/10 will-change-transform contain-layout"
          style={{
            /* Optimize critical rendering path */
            contentVisibility: 'auto',
            containIntrinsicSize: '100vw 600px'
          }}
        >
          <div className="container mx-auto px-6 text-center max-w-6xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary mb-8 leading-tight">
              {t('hero.title')}
              <br />
              <span className="text-olive-green">{t('hero.titleEmphasis')}</span>
            </h1>
            {(t('hero.intro', { returnObjects: true }) as string[] || []).map((paragraph: string, index: number) => (
              <p key={index} className="text-lg md:text-xl text-primary/70 font-body leading-relaxed max-w-4xl mx-auto mb-8">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-col items-center gap-8 pt-4">
              {/* Enhanced CTA Button */}
              <Button 
                size="lg" 
                onClick={() => navigate(getLocalizedPath('/journey'))}
                className="group relative bg-gradient-to-r from-olive-green to-sage hover:from-olive-green/90 hover:to-sage/90 text-white px-12 py-6 text-xl font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[280px]"
              >
                <span className="flex items-center gap-3 relative z-10">
                  {t('hero.cta')}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-olive-green/20 to-sage/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </Button>

              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row gap-6 items-center text-center">
                <div className="flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-primary/10">
                  <div className="w-8 h-8 bg-gradient-to-br from-sage/20 to-sage/10 rounded-lg flex items-center justify-center">
                    <Check className="w-4 h-4 text-sage" />
                  </div>
                  <span className="text-sm font-medium text-primary">{t('hero.badges.programs')}</span>
                </div>
                
                <div className="flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-primary/10">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-primary">{t('hero.badges.results')}</span>
                </div>
                
                <div className="flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-primary/10">
                  <div className="w-8 h-8 bg-gradient-to-br from-copper/20 to-copper/10 rounded-lg flex items-center justify-center">
                    <Heart className="w-4 h-4 text-copper" />
                  </div>
                  <span className="text-sm font-medium text-primary">{t('hero.badges.humanCentered')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 90-Day Reset Programs Section */}
        <section className="py-24 bg-[#f8f8f8]">
          <div className="container mx-auto px-6 max-w-6xl">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
                {t('services.heading', { ns: 'home' })}
              </h2>
              {(t('services.intro', { returnObjects: true, ns: 'home' }) as string[] || []).map((paragraph: string, index: number) => (
                <p key={index} className="text-xl text-muted-foreground font-body max-w-6xl mx-auto mb-8">
                  {paragraph}
                </p>
              ))}
              <div className="w-24 h-0.5 bg-gradient-to-r from-sage to-primary mx-auto mt-8"></div>
            </div>

            {/* 3-Phase Cycle */}
            <div className="max-w-5xl mx-auto mb-20">
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-primary text-center mb-12">
                {t('services.phaseTitle', { ns: 'home' })}
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                {(t('services.phases', { returnObjects: true, ns: 'home' }) as any[] || []).map((phase: any, index: number) => {
                  const colors = ['sage', 'primary', 'copper'];
                  return (
                    <div key={index} className="text-center group">
                      <div className={`w-12 h-12 bg-gradient-to-br from-${colors[index]}/10 to-${colors[index]}/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-${colors[index]}/20`}>
                        <span className={`text-${colors[index]} font-bold text-lg`}>{phase.number}</span>
                      </div>
                      <h4 className="text-lg font-display font-semibold text-primary mb-3">{phase.title}</h4>
                      <p className="text-muted-foreground text-sm">{phase.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Three Program Cards - Clean Structure */}
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
              {(t('services.programs', { returnObjects: true, ns: 'home' }) as any[] || []).map((program: any, programIndex: number) => {
                const icons = [Heart, Zap, Heart];
                const colors = ['sage', 'primary', 'copper'];
                const Icon = icons[programIndex];
                const color = colors[programIndex];
                
                return (
                  <Card key={programIndex} className="p-8 hover:shadow-elegant transition-all duration-300 group border-0 bg-white/90 backdrop-blur-sm">
                    {/* Header Section */}
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 bg-${color}/10 rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                        <Icon className={`w-8 h-8 text-${color}`} />
                      </div>
                      <h3 className="text-xl font-display font-bold text-primary mb-3">
                        {program.title}
                      </h3>
                      <p className="text-base text-copper font-medium mb-4">
                        {program.subtitle}
                      </p>
                      <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="bg-copper/10 text-copper px-3 py-1.5 rounded-full text-xs font-semibold">
                          {t('services.badges.duration', { ns: 'home' })}
                        </div>
                        <div className="bg-copper/10 text-copper px-3 py-1.5 rounded-full text-xs font-semibold">
                          {t('services.badges.phases', { ns: 'home' })}
                        </div>
                      </div>
                    </div>

                    {/* Ideal For Section */}
                    <div className="mb-6">
                      <h4 className={`text-xs font-semibold text-${color} mb-3 uppercase tracking-wider`}>
                        {program.idealForLabel || t('services.programs.0.idealForLabel', { ns: 'home' })}
                      </h4>
                      <p className="text-muted-foreground font-body text-sm">
                        {program.idealFor}
                      </p>
                    </div>

                    {/* Key Outcomes Section */}
                    <div>
                      <h4 className={`text-xs font-semibold text-${color} mb-3 uppercase tracking-wider`}>
                        {program.outcomesLabel || t('services.programs.0.outcomesLabel', { ns: 'home' })}
                      </h4>
                      <div className="space-y-2.5">
                        {(program.outcomes || []).map((outcome: string, outcomeIndex: number) => (
                          <div key={outcomeIndex} className="flex items-start gap-2.5">
                            <Check className={`w-4 h-4 text-${color} mt-0.5 flex-shrink-0`} />
                            <span className="text-muted-foreground text-sm">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Closing CTA */}
          </div>
        </section>

        {/* Long-Term Partnership Section */}
        <section className="py-24 bg-gradient-to-br from-sage/5 to-primary/5">
          <div className="container mx-auto px-6 max-w-6xl">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-primary mb-6 leading-tight">
                {t('longTermPartnership.title')}
              </h2>
              
              <p className="text-xl text-muted-foreground font-body max-w-5xl mx-auto mb-8">
                {t('longTermPartnership.subtitle')}
              </p>
              
              <div className="max-w-5xl mx-auto mb-8">
                {(t('longTermPartnership.intro', { returnObjects: true }) as string[] || []).map((paragraph: string, index: number) => (
                  <p key={index} className="text-lg text-muted-foreground font-body mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="w-32 h-0.5 bg-gradient-to-r from-sage to-copper mx-auto"></div>
            </div>

            {/* 5-Pillar Framework Integration */}
            <div className="mb-20">

              {/* Framework Pillars Grid */}
              <div className="mb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                  {(t('framework.pillars', { returnObjects: true, ns: 'home' }) as any[]).map((pillar: any, i: number) => {
                    const pillarIcons = [Target, Crown, Users, Heart, Layers];
                    const Icon = pillarIcons[i];
                    return (
                      <Card
                        key={i}
                        className="h-full bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-background/40 border-border/50 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5"
                      >
                        <CardHeader className="pb-4">
                          <div className="flex items-center justify-center">
                            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary ring-1 ring-primary/20 flex items-center justify-center">
                              <Icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                          </div>
                          <CardTitle className="mt-4 text-center text-lg text-foreground">{pillar.title}</CardTitle>
                        <p className="text-center text-sm text-muted-foreground">{pillar.subtitle}</p>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                      </CardContent>
                    </Card>
                  );
                  })}
                </div>
              </div>

              {/* KPI Measurement Section */}
              <div className="text-center">
                <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 shadow-lg max-w-6xl mx-auto">
                  <h4 className="text-xl font-display font-semibold text-primary mb-6">
                    {t('kpiMetrics.title')}
                  </h4>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(t('kpiMetrics.items', { returnObjects: true }) as any[] || []).map((metric: any, index: number) => {
                      const icons = [BarChart3, Eye, TrendingUp, Compass, Activity, Zap];
                      const IconComponent = icons[index];
                      return (
                        <div key={index} className="flex items-start gap-4 p-4 bg-background/50 rounded-xl border border-primary/5 hover:border-primary/20 transition-all duration-300">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h5 className="font-semibold text-primary text-sm mb-1">{metric.title}</h5>
                            <p className="text-xs text-muted-foreground">{metric.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Dashboard Introduction Section */}
        <section className="py-24 bg-warm-beige">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-12">
                {t('dashboard.title')}
              </h2>
              <div className="max-w-6xl mx-auto mb-12">
                {(t('dashboard.intro', { returnObjects: true }) as string[] || []).map((paragraph: string, index: number) => (
                  <p key={index} className="text-lg text-muted-foreground font-body mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="w-24 h-0.5 bg-gradient-to-r from-sage to-primary mx-auto"></div>
            </div>

            {/* Dashboard Mockup with Left Sidebar */}
            <div className="bg-white border border-primary/10 rounded-2xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
              <div className="flex">
                {/* Left Sidebar */}
                <div className="w-64 bg-aura-pearl border-r border-primary/10 p-6">
                  <div className="mb-8">
                    <h3 className="text-lg font-display font-bold text-primary mb-2">{t('dashboard.brand')}</h3>
                    <p className="text-sm text-primary/60">{t('dashboard.subtitle')}</p>
                  </div>
                  
                  <nav className="space-y-2">
                    {[
                      { name: t('dashboard.navigation.overview'), active: true, icon: BarChart3 },
                      { name: t('dashboard.navigation.pillars'), active: false, icon: Target },
                      { name: t('dashboard.navigation.teamInsights'), active: false, icon: Users },
                      { name: t('dashboard.navigation.leadership'), active: false, icon: Brain },
                      { name: t('dashboard.navigation.cultureMetrics'), active: false, icon: Heart },
                      { name: t('dashboard.navigation.wellbeing'), active: false, icon: Shield },
                      { name: t('dashboard.navigation.reports'), active: false, icon: TrendingUp }
                    ].map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={index} className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                          item.active 
                            ? 'bg-sage/10 text-sage border border-sage/20' 
                            : 'text-primary/60 hover:bg-primary/5'
                        }`}>
                          <IconComponent className="w-4 h-4" />
                          <span className="text-sm font-medium">{item.name}</span>
                        </div>
                      );
                    })}
                  </nav>
                </div>

                {/* Main Dashboard Content */}
                <div className="flex-1">
                  {/* Dashboard Header */}
                  <div className="p-6 border-b border-primary/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-display font-bold text-primary">{t('dashboard.navigation.overview')}</h3>
                        <p className="text-primary/70">{t('dashboard.ovi.subtitle')}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-sage rounded-full animate-pulse"></div>
                          <span className="text-sm text-primary/60">{t('dashboard.vitalityStatus')}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-8">
                    <div className="mb-8">
                      <h4 className="text-xl font-display font-semibold text-primary mb-2">{t('dashboard.ovi.title')}</h4>
                      <p className="text-primary/60 mb-6">{t('dashboard.ovi.subtitle')}</p>
                      
                      {/* Main Score Circle */}
                      <div className="flex justify-center mb-8">
                        <div className="relative w-32 h-32">
                          <div className="absolute inset-0 bg-gradient-to-br from-sage/10 to-primary/5 rounded-full"></div>
                          <svg className="w-32 h-32 transform -rotate-90 relative z-10" viewBox="0 0 36 36">
                            <path className="text-primary/10" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path className="text-sage" strokeWidth="3" strokeDasharray="52.6, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary">52.6</div>
                              <div className="text-xs text-primary/60">{t('dashboard.ovi.scoreLabel')}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 5 Pillars Metrics */}
                    <div className="grid grid-cols-5 gap-3">
                      {(t('dashboard.pillarsMetrics', { returnObjects: true }) as any[] || []).map((pillar: any, index: number) => {
                        const scores = [46, 52, 50, 54, 59];
                        const colors = ['olive-green', 'sage', 'copper', 'primary', 'olive-green'];
                        return (
                          <div key={index} className="text-center">
                            <div className={`w-10 h-10 bg-${colors[index]}/10 rounded-lg mx-auto mb-2 flex items-center justify-center border border-${colors[index]}/20`}>
                              <span className={`text-${colors[index]} font-bold text-sm`}>{scores[index]}</span>
                            </div>
                            <h5 className="font-semibold text-primary text-xs mb-1">{pillar.name}</h5>
                            <p className="text-xs text-muted-foreground leading-tight">{pillar.description}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="text-center mt-16">
            <div className="max-w-4xl mx-auto">
              <div className="w-24 h-0.5 bg-gradient-to-r from-sage to-primary mx-auto mb-8"></div>
              
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-primary leading-tight mb-6 italic">
                "{t('quote.text')}"
              </blockquote>
              
              <cite className="text-base md:text-lg font-body text-primary/70 not-italic font-medium">
                — {t('quote.source')}
              </cite>
              
              <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-sage mx-auto mt-8"></div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-warm-beige via-aura-pearl to-warm-beige/80">
          {/* Background with gradient and pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-sage/5 via-primary/3 to-copper/5"></div>
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" 
                 style={{
                   backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--sage)) 2px, transparent 2px),
                                     radial-gradient(circle at 75% 75%, hsl(var(--primary)) 1px, transparent 1px)`,
                   backgroundSize: '60px 60px, 40px 40px'
                 }}>
            </div>
          </div>
          
          {/* Floating decorative elements */}
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-sage/10 to-transparent blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-xl"></div>
          
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="text-center space-y-12">
              {/* Header with enhanced typography */}
              <div className="space-y-8">
                <div className="inline-flex items-center justify-center p-3 bg-sage/10 rounded-full mb-6">
                  <div className="w-2 h-2 bg-sage rounded-full animate-pulse"></div>
                  <span className="text-sage text-sm font-semibold ml-3 uppercase tracking-wider">{t('cta.badge')}</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary leading-tight">
                  {t('cta.title')} 
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage to-primary">{t('cta.titleEmphasis')}</span>
                </h2>
                
                <p className="text-xl md:text-2xl text-primary/70 font-body leading-relaxed max-w-4xl mx-auto">
                  {t('cta.subtitle')}
                  <span className="text-sage font-semibold"> {t('cta.subtitleEmphasis')}</span>.
                </p>
              </div>

              {/* Enhanced Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                <Button 
                  size="lg" 
                  onClick={() => navigate(getLocalizedPath('/journey'))}
                  className="group bg-gradient-to-r from-sage to-sage hover:from-sage/90 hover:to-sage/90 text-white px-10 py-6 text-xl font-semibold min-w-[250px] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center gap-3">
                    {t('cta.primaryButton')}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate(getLocalizedPath('/tools'))}
                  className="group border-2 border-primary/30 text-primary hover:bg-primary hover:text-white px-10 py-6 text-xl font-semibold min-w-[250px] rounded-2xl bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center gap-3">
                    {t('cta.secondaryButton')}
                    <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </span>
                </Button>
              </div>

              {/* Enhanced Supporting Features */}
              <div className="pt-12">
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                  {(t('cta.features', { returnObjects: true }) as any[] || []).map((feature: any, index: number) => {
                    const icons = [MessageCircle, Calendar, Shield];
                    const colors = ['sage', 'copper', 'primary'];
                    const Icon = icons[index];
                    return (
                      <div key={index} className={`flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-primary/10 hover:border-${colors[index]}/30 transition-all duration-300`}>
                        <div className={`w-12 h-12 bg-gradient-to-br from-${colors[index]}/20 to-${colors[index]}/10 rounded-xl flex items-center justify-center`}>
                          <Icon className={`w-6 h-6 text-${colors[index]}`} />
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-primary">{feature.title}</div>
                          <div className="text-sm text-primary/60">{feature.description}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
    </>
  );
};

export default Offerings;
