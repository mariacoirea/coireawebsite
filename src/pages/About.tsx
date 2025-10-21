import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import OptimizedImage from "@/components/OptimizedImage";
import SEOFAQSection from "@/components/SEOFAQSection";
import { RelatedContent } from "@/components/InternalLinkingStrategy";
import { aboutFAQs } from "@/data/faqData";
import { Leaf, Users, Zap, Heart, Eye, TreePine, Compass, Lightbulb, Target, Star, ArrowRight, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import LocalizedLink from "@/components/LocalizedLink";

const About = () => {
  const { t } = useTranslation('about');
  const { currentLanguage } = useLanguage();
  
  return (
    <>
      <SEOHead
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        url={currentLanguage === 'es' ? '/es/about' : '/about'}
      />
      <StructuredData type="organization" />
      
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Enhanced Hero Section with New Landscape Background */}
        <section 
          className="min-h-[80vh] flex items-center justify-center relative overflow-hidden py-20"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(250, 248, 246, 0.7) 0%, rgba(246, 240, 233, 0.6) 30%, rgba(91, 108, 73, 0.15) 70%, rgba(74, 124, 122, 0.2) 100%), url(/lovable-uploads/8143fc2b-3b48-4a24-9ace-393341a0f118.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-aura-pearl/20 via-transparent to-primary/10"></div>
          
          {/* Subtle decorative elements for visual consistency */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-sage/10 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
          
          <div className="container mx-auto px-6 text-center relative z-10 max-w-6xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold text-primary mb-8 leading-tight drop-shadow-sm">
              {t('hero.title')} <span className="italic">{t('hero.titleEmphasis')}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary/90 font-body font-light max-w-4xl mx-auto leading-relaxed drop-shadow-sm">
              {t('hero.subtitle')}
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 px-6 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full border border-primary/20 shadow-sm mb-8">
                <Mountain className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium">{t('mission.badge')}</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-8 leading-tight">
                {t('mission.title')} <span className="text-sage">{t('mission.titleEmphasis')}</span>
              </h2>
              
              <div className="w-24 h-0.5 bg-gradient-to-r from-sage to-primary mx-auto mb-8"></div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-elegant border border-primary/10">
              <p className="text-xl text-foreground/80 font-body leading-relaxed mb-8 max-w-4xl mx-auto text-center">
                {t('mission.description')}
              </p>
              <div className="text-center">
                <p className="text-2xl text-primary font-body font-medium italic">
                  {t('mission.quote')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-24 px-6 bg-warm-beige">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/10 shadow-sm mb-8">
                <Heart className="w-4 h-4 text-sage" />
                <span className="text-primary font-medium">{t('values.badge')}</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-8 leading-tight">
                {t('values.title')} <span className="text-sage">{t('values.titleEmphasis')}</span>
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-sage to-primary mx-auto"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {(t('values.items', { returnObjects: true }) as any[] || []).map((value: any, index: number) => {
                const icons = [Eye, Target, Lightbulb, Users, Compass, Zap];
                const colors = [
                  { from: 'sage/20', to: 'sage', text: 'sage' },
                  { from: 'primary/20', to: 'primary', text: 'primary' },
                  { from: 'copper/20', to: 'copper', text: 'copper' },
                  { from: 'olive-green/20', to: 'olive-green', text: 'olive-green' },
                  { from: 'sage/20', to: 'sage', text: 'sage' },
                  { from: 'copper/20', to: 'copper', text: 'copper' }
                ];
                const Icon = icons[index];
                const color = colors[index];
                
                return (
                  <div key={index} className="bg-background/60 backdrop-blur-sm rounded-2xl p-4 shadow-soft group hover:scale-[1.02] transition-all duration-500 border border-primary/10">
                    <div className="flex items-start space-x-6 mb-3">
                      <div className={`w-16 h-16 bg-gradient-to-br from-${color.from} to-${color.to} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-8 h-8 text-${color.text}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                          {value.title}
                          {value.subtitle && (
                            <span className="block text-lg font-body font-normal text-primary/70 mt-1">{value.subtitle}</span>
                          )}
                        </h3>
                        <p className="text-foreground/70 font-body leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Future of Work Section */}
        <section className="py-24 px-6 bg-background">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full border border-primary/20 shadow-sm mb-8">
                  <Star className="w-4 h-4 text-primary" />
                  <span className="text-primary font-medium">{t('partnership.badge')}</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-display font-semibold text-primary mb-8 leading-tight">
                  {t('partnership.title')} <span className="text-copper">{t('partnership.titleEmphasis')}</span>
                </h2>
                
                <p className="text-xl text-foreground/80 font-body leading-relaxed mb-8">
                  {t('partnership.intro')}
                </p>
                
                <div className="space-y-4 mb-8">
                  {(t('partnership.allies', { returnObjects: true }) as string[] || []).map((ally: string, index: number) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-sage to-primary rounded-full"></div>
                      <span className="text-foreground/70 font-body text-lg">{ally}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-elegant border border-primary/10">
                <h3 className="text-3xl font-display font-semibold text-primary mb-8">
                  {t('partnership.helpTitle')}
                </h3>
                <div className="space-y-8">
                  {(t('partnership.helpItems', { returnObjects: true }) as any[] || []).map((item: any, index: number) => {
                    const icons = [Zap, Target, Heart];
                    const colors = ['sage', 'primary', 'copper'];
                    const Icon = icons[index];
                    const color = colors[index];
                    
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-${color}/10 rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-6 h-6 text-${color}`} />
                        </div>
                        <div>
                          <h4 className="font-body font-semibold text-foreground mb-2 text-lg">{item.title}</h4>
                          <p className="text-foreground/70 font-body">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="mt-10 pt-8 border-t border-primary/10">
                  <p className="text-primary font-body font-medium text-xl text-center">
                    {t('partnership.commitment')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* From the Founder Section */}
        <section className="py-24 px-6 bg-warm-beige">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/10 shadow-sm mb-8">
                <Mountain className="w-4 h-4 text-sage" />
                <span className="text-primary font-medium">{t('founder.badge')}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-primary mb-8 leading-tight">
                {t('founder.name')} <span className="text-sage">— {t('founder.role')}</span>
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-start max-w-6xl mx-auto">
              {/* Founder Image - aligned with first 3 paragraphs */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white/60 shadow-elegant">
                    <OptimizedImage 
                      src="/lovable-uploads/2627835c-d411-47f1-abb6-99b92bd30341.png" 
                      alt="Maria Jose Figueroa - Founder and Conscious Leadership Catalyst of COIREA - Expert in regenerative business transformation and organizational development"
                      className="w-full h-full object-cover"
                      width={256}
                      height={256}
                      priority={false}
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-sage/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
                </div>
              </div>
              
              {/* Founder Content */}
              <div>
                <div className="space-y-6 text-lg text-foreground/80 font-body leading-relaxed">
                  {(t('founder.bio', { returnObjects: true }) as string[] || []).slice(0, 3).map((paragraph: string, index: number) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Last 3 paragraphs - horizontal */}
            <div className="mt-16 max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-12">
                {(t('founder.bio', { returnObjects: true }) as string[] || []).slice(3).map((paragraph: string, index: number) => (
                  <div key={index}>
                    <p className="text-base text-foreground/80 font-body leading-relaxed text-left">{paragraph}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section for SEO */}
        <section className="py-24 px-6 bg-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-4">
                {t('faq.title')}
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-sage to-primary mx-auto"></div>
            </div>

            <div className="space-y-8">
              {(t('faq.items', { returnObjects: true }) as any[] || []).map((faq: any, index: number) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-primary/10">
                  <h3 className="text-xl font-display font-semibold text-primary mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-foreground/80 font-body leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-aura-pearl to-warm-beige">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sage/5 via-transparent to-primary/10 rounded-3xl blur-3xl"></div>
              <div className="relative p-12">
                <h2 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-8 leading-tight">
                  {t('cta.title')}
                </h2>
                
                <p className="text-xl text-primary/80 font-body mb-12 max-w-3xl mx-auto">
                  {t('cta.subtitle')}
                </p>
                
                <LocalizedLink to="/journey#journey-start">
                  <Button className="bg-primary text-white hover:bg-primary/90 px-12 py-6 rounded-full font-body font-semibold text-xl shadow-elegant transition-all duration-300 hover:scale-105 group">
                    {t('cta.button')}
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </LocalizedLink>
              </div>
            </div>
          </div>
        </section>

        {/* Stress Statistics Section */}
        <section className="py-16 px-6 bg-background border-t border-primary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <blockquote className="text-lg md:text-xl text-foreground/70 font-body italic leading-relaxed">
              "{t('statistics.quote')}"
            </blockquote>
            <cite className="block mt-4 text-primary font-medium">
              – {t('statistics.source')}
            </cite>
          </div>
        </section>

        {/* Related Content for Internal Linking */}
        <RelatedContent currentPage="about" />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
