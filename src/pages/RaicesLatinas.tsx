import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { 
  TrendingUp, 
  Heart, 
  Target, 
  Users, 
  Building, 
  Briefcase,
  HandHeart,
  Coins,
  BarChart3,
  Clock,
  MapPin,
  BookOpen,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

import mayanPatternsBg from '@/assets/mayan-patterns-bg.png';
import andeanPeopleBg from '@/assets/andean-people-bg.jpg';
const raicesCulturalHero = "/lovable-uploads/raices-cultural-hero-new.png";

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  company: z.string().min(2, 'Organization is required'),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const RaicesLatinas = () => {
  const { t } = useTranslation('raices');
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
  });

  const handleSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('send-raices-form', {
        body: data,
      });

      if (error) throw error;

      toast({
        title: t('cta.success.title'),
        description: t('cta.success.message'),
      });
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: t('cta.error.title'),
        description: t('cta.error.message'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById('impact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const whyImpactPointsRaw = t('whyImpactMatters.points', { returnObjects: true });
  const whyImpactPoints = Array.isArray(whyImpactPointsRaw) ? whyImpactPointsRaw : [];
  
  const impactStepsRaw = t('impactModel.steps', { returnObjects: true });
  const impactSteps = Array.isArray(impactStepsRaw) ? impactStepsRaw : [];
  
  const sdgListRaw = t('impactModel.sdgs.list', { returnObjects: true });
  const sdgList = Array.isArray(sdgListRaw) ? sdgListRaw : [];
  
  const impactPillarsRaw = t('impactAreas.pillars', { returnObjects: true });
  const impactPillars = Array.isArray(impactPillarsRaw) ? impactPillarsRaw : [];
  
  const pathwaysRaw = t('howToParticipate.pathways', { returnObjects: true });
  const pathways = Array.isArray(pathwaysRaw) ? pathwaysRaw : [];
  
  const dashboardFeaturesRaw = t('dashboard.features', { returnObjects: true });
  const dashboardFeatures = Array.isArray(dashboardFeaturesRaw) ? dashboardFeaturesRaw : [];

  const whyImpactIcons = [Building, Users, Briefcase, Heart];
  const stepIcons = [TrendingUp, Heart, Target];
  const pillarIcons = [MapPin, Heart, Building];
  const pathwayIcons = [Briefcase, HandHeart, Coins];

  return (
    <>
      <SEOHead
        title="COIREA Social Impact | Raíces Latinas"
        description="Transform organizational health into social impact. A regenerative model where stronger companies directly support stronger communities across Latin America."
        keywords="social impact, SDG, Latin America, regenerative, CSR, community development"
        url="/raices-latinas"
      />
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 px-6">
          {/* Background image */}
          <div className="absolute inset-0 -left-px -right-px">
            <img 
              src={raicesCulturalHero} 
              alt="Traditional Latin American cultural collage with Andean heritage" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--raices-sandstone))]/65 to-[hsl(var(--raices-sandstone))]/45" />
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center space-y-8">
              <span className="inline-block px-4 py-2 mb-2 text-sm font-medium tracking-wider text-[hsl(var(--raices-earth-brown))] uppercase bg-[hsl(var(--raices-earth-brown))]/10 rounded-full border border-[hsl(var(--raices-earth-brown))]/20">
                COIREA Social
              </span>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-semibold text-[hsl(var(--raices-sage-green))] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                {t('hero.title')}
              </h1>
              
              <p className="text-xl md:text-2xl text-[hsl(var(--raices-charcoal-earth))] font-body font-normal max-w-4xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
                {t('hero.subtitle')}
              </p>

              <Button 
                onClick={scrollToForm}
                size="lg"
                className="bg-[hsl(var(--raices-earth-brown))] hover:bg-[hsl(var(--raices-earth-brown))]/90 text-[hsl(var(--raices-sandstone))] px-8 py-6 text-lg font-medium rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Why Impact Matters Section */}
        <section className="py-24 bg-gradient-to-b from-[hsl(var(--raices-sandstone))] to-[hsl(var(--raices-sandstone))]/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-[hsl(var(--raices-sage-green))] mb-4">
                {t('whyImpactMatters.title')}
              </h2>
              <p className="text-lg text-[hsl(var(--raices-charcoal-earth))] max-w-2xl mx-auto">
                {t('whyImpactMatters.subtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyImpactPoints.map((point, index) => {
                const Icon = whyImpactIcons[index];
                return (
                  <div 
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[hsl(var(--raices-earth-brown))]/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-full bg-[hsl(var(--raices-sage-green))]/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[hsl(var(--raices-sage-green))]" />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-[hsl(var(--raices-sage-green))] mb-2">
                      {point.title}
                    </h3>
                    <p className="text-[hsl(var(--raices-charcoal-earth))] text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Introducing COIREA Social Section */}
        <section className="py-24 bg-[hsl(var(--raices-earth-brown))]/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wider text-[hsl(var(--raices-sage-green))] uppercase bg-[hsl(var(--raices-sage-green))]/15 rounded-full border border-[hsl(var(--raices-sage-green))]/20">
                {t('coireaSocial.tagline')}
              </span>
              
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-[hsl(var(--raices-earth-brown))] mb-2">
                {t('coireaSocial.title')}
              </h2>
              <p className="text-2xl font-display text-[hsl(var(--raices-sage-green))] mb-8">
                {t('coireaSocial.subtitle')}
              </p>
              
              <p className="text-lg text-[hsl(var(--raices-charcoal))]/85 leading-relaxed font-body">
                {t('coireaSocial.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Regenerative Impact Model Section */}
        <section className="py-24 bg-gradient-to-b from-[hsl(var(--raices-sandstone))]/30 to-[hsl(var(--raices-sandstone))]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-[hsl(var(--raices-sage-green))] mb-4">
                {t('impactModel.title')}
              </h2>
              <p className="text-lg text-[hsl(var(--raices-charcoal-earth))] max-w-2xl mx-auto">
                {t('impactModel.subtitle')}
              </p>
            </div>
            
            {/* 3-Step Process */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {impactSteps.map((step, index) => {
                const Icon = stepIcons[index];
                return (
                  <div 
                    key={index}
                    className="relative bg-white rounded-2xl p-8 shadow-lg border border-[hsl(var(--raices-earth-brown))]/10 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="absolute -top-4 left-8 bg-[hsl(var(--raices-earth-brown))] text-[hsl(var(--raices-sandstone))] text-sm font-bold px-3 py-1 rounded-full">
                      {step.number}
                    </div>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--raices-sage-green))]/20 to-[hsl(var(--raices-sage-green))]/10 flex items-center justify-center mb-6 mt-2">
                      <Icon className="w-8 h-8 text-[hsl(var(--raices-sage-green))]" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-[hsl(var(--raices-sage-green))] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[hsl(var(--raices-charcoal-earth))] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
            
            {/* SDGs Grid */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(var(--raices-earth-brown))]/10">
              <h3 className="text-xl font-display font-semibold text-[hsl(var(--raices-sage-green))] mb-6 text-center">
                {t('impactModel.sdgs.title')}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                {sdgList.map((sdg, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center p-3 rounded-lg bg-[hsl(var(--raices-sage-green))]/10 hover:bg-[hsl(var(--raices-sage-green))]/20 transition-colors"
                  >
                    <span className="text-2xl font-bold text-[hsl(var(--raices-sage-green))] mb-1">
                      {sdg.number}
                    </span>
                    <span className="text-xs text-[hsl(var(--raices-charcoal-earth))] text-center">
                      {sdg.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact Areas Section */}
        <section className="py-24 bg-[hsl(var(--raices-earth-brown))]/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-[hsl(var(--raices-earth-brown))] mb-4">
                {t('impactAreas.title')}
              </h2>
              <p className="text-lg text-[hsl(var(--raices-charcoal))]/80 max-w-2xl mx-auto">
                {t('impactAreas.subtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {impactPillars.map((pillar, index) => {
                const Icon = pillarIcons[index];
                return (
                  <div 
                    key={index}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(var(--raices-earth-brown))]/15 hover:bg-white/80 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-full bg-[hsl(var(--raices-sage-green))]/20 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-[hsl(var(--raices-sage-green))]" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-[hsl(var(--raices-earth-brown))] mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-[hsl(var(--raices-charcoal))]/80 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How Companies Participate Section */}
        <section className="py-24 bg-gradient-to-b from-[hsl(var(--raices-sandstone))] to-[hsl(var(--raices-sandstone))]/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-[hsl(var(--raices-sage-green))] mb-4">
                {t('howToParticipate.title')}
              </h2>
              <p className="text-lg text-[hsl(var(--raices-charcoal-earth))] max-w-2xl mx-auto">
                {t('howToParticipate.subtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pathways.map((pathway, index) => {
                const Icon = pathwayIcons[index];
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-[hsl(var(--raices-earth-brown))]/10 hover:shadow-xl transition-all duration-300 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--raices-earth-brown))]/20 to-[hsl(var(--raices-earth-brown))]/10 flex items-center justify-center mb-6 mx-auto">
                      <Icon className="w-8 h-8 text-[hsl(var(--raices-earth-brown))]" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-[hsl(var(--raices-sage-green))] mb-3">
                      {pathway.title}
                    </h3>
                    <p className="text-[hsl(var(--raices-charcoal-earth))] leading-relaxed">
                      {pathway.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Impact Dashboard Preview Section */}
        <section className="py-24 bg-[hsl(var(--raices-sandstone))]/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-[hsl(var(--raices-earth-brown))] mb-4">
                {t('dashboard.title')}
              </h2>
              <p className="text-lg text-[hsl(var(--raices-charcoal))]/80 max-w-2xl mx-auto">
                {t('dashboard.subtitle')}
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(var(--raices-earth-brown))]/15">
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {dashboardFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(var(--raices-sage-green))] flex-shrink-0" />
                      <span className="text-[hsl(var(--raices-charcoal))]/85">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Dashboard Mockup Placeholder */}
                <div className="bg-[hsl(var(--raices-earth-brown))]/10 rounded-xl p-8 border border-[hsl(var(--raices-earth-brown))]/20">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <BarChart3 className="w-8 h-8 text-[hsl(var(--raices-sage-green))]" />
                    <Clock className="w-8 h-8 text-[hsl(var(--raices-earth-brown))]" />
                    <BookOpen className="w-8 h-8 text-[hsl(var(--raices-sage-green))]" />
                  </div>
                  <p className="text-[hsl(var(--raices-charcoal))]/70 text-center text-lg font-medium">
                    {t('dashboard.comingSoon')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section with Form */}
        <section 
          id="impact-form"
          className="py-24 relative overflow-hidden"
          style={{
            backgroundImage: `url(${mayanPatternsBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--raices-sandstone))]/90 to-[hsl(var(--raices-sandstone))]/85" />
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-[hsl(var(--raices-earth-brown))] mb-4">
                {t('cta.title')}
              </h2>
              <p className="text-lg text-[hsl(var(--raices-charcoal))]/80">
                {t('cta.subtitle')}
              </p>
            </div>
            
            <div className="max-w-xl mx-auto">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[hsl(var(--raices-earth-brown))]">{t('cta.form.name')}</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="bg-white/60 border-[hsl(var(--raices-earth-brown))]/30 text-[hsl(var(--raices-charcoal))] placeholder:text-[hsl(var(--raices-charcoal))]/50 focus:border-[hsl(var(--raices-sage-green))]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[hsl(var(--raices-earth-brown))]">{t('cta.form.email')}</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email"
                            className="bg-white/60 border-[hsl(var(--raices-earth-brown))]/30 text-[hsl(var(--raices-charcoal))] placeholder:text-[hsl(var(--raices-charcoal))]/50 focus:border-[hsl(var(--raices-sage-green))]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[hsl(var(--raices-earth-brown))]">{t('cta.form.company')}</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="bg-white/60 border-[hsl(var(--raices-earth-brown))]/30 text-[hsl(var(--raices-charcoal))] placeholder:text-[hsl(var(--raices-charcoal))]/50 focus:border-[hsl(var(--raices-sage-green))]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[hsl(var(--raices-earth-brown))]">{t('cta.form.message')}</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={4}
                            className="bg-white/60 border-[hsl(var(--raices-earth-brown))]/30 text-[hsl(var(--raices-charcoal))] placeholder:text-[hsl(var(--raices-charcoal))]/50 focus:border-[hsl(var(--raices-sage-green))] resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[hsl(var(--raices-sage-green))] hover:bg-[hsl(var(--raices-sage-green))]/90 text-white py-6 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    {isSubmitting ? t('cta.form.submitting') : t('cta.form.submit')}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default RaicesLatinas;
