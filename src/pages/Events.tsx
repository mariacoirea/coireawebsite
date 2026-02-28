import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";

const Events = () => {
  const { t } = useTranslation('events');
  const { currentLanguage } = useLanguage();
  
  return (
    <>
      <SEOHead
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        url={currentLanguage === 'es' ? '/es/events' : '/events'}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <main id="main-content" className="pt-20">
          {/* Hero Section */}
          <section 
            className="relative py-16 md:py-24 px-6 min-h-[70vh] flex items-center justify-center overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(210, 195, 175, 0.3) 0%, rgba(225, 215, 200, 0.2) 100%), url('/lovable-uploads/e1245c87-e916-4502-8adf-fb8970e5bb4c.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Content */}
            <div className="container mx-auto max-w-4xl text-center relative z-10">
              <header>
                <h1 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-6 leading-tight">
                  {t('hero.title')}
                </h1>
                <p className="text-xl md:text-2xl text-primary/80 font-body leading-relaxed">
                  {t('hero.subtitle')}
                </p>
              </header>
            </div>
          </section>

          {/* Intro Section */}
          <section className="py-16 md:py-20 px-6">
            <div className="container mx-auto max-w-4xl">
              <div className="prose prose-lg max-w-none text-center">
                {(t('intro', { returnObjects: true }) as string[]).map((paragraph: string, idx: number) => (
                  <p key={idx} className="text-lg md:text-xl text-foreground font-body leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced Luma Calendar Section */}
          <section className="py-16 md:py-20 px-6">
            <div className="container mx-auto max-w-6xl">
              {/* Section Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-4">
                  {t('calendar.title')}
                </h2>
                <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
                  {t('calendar.description')}
                </p>
              </div>
              
              {/* Enhanced Calendar Container */}
              <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Loading State */}
                <div className="relative w-full bg-gradient-to-br from-muted/30 to-muted/10">
                  <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10 transition-opacity duration-500" id="calendar-loading">
                    <div className="text-center">
                      <div className="animate-pulse flex space-x-2 justify-center mb-4">
                        <div className="w-3 h-3 bg-primary/60 rounded-full animate-bounce"></div>
                        <div className="w-3 h-3 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-3 h-3 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <p className="text-sm text-muted-foreground">Loading events...</p>
                    </div>
                  </div>
                  
                  {/* Enhanced Calendar Embed */}
                  <iframe
                    src="https://lu.ma/embed/calendar/cal-LBFjaY9cu5vzxD9/events?show=all"
                    className="w-full border-none rounded-t-xl"
                    style={{ 
                      height: '600px',
                      minHeight: '400px',
                      maxHeight: '800px'
                    }}
                    frameBorder="0"
                    allowFullScreen
                    aria-label="COIREA Events Calendar - Past and Upcoming Events"
                    title="COIREA Community Events Calendar"
                    onLoad={() => {
                      const loadingElement = document.getElementById('calendar-loading');
                      if (loadingElement) {
                        loadingElement.style.opacity = '0';
                        setTimeout(() => loadingElement.style.display = 'none', 500);
                      }
                    }}
                  />
                </div>
                
                {/* Enhanced Action Footer */}
                <div className="p-8 border-t border-border bg-gradient-to-r from-accent/5 to-accent/10">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left">
                      <h3 className="font-display font-semibold text-primary mb-2">
                        {t('calendarFooter.title')}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t('calendarFooter.description')}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300"
                        asChild
                      >
                        <a 
                          href="https://lu.ma/coirea" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          {t('calendarFooter.viewAll')}
                          <ExternalLink size={16} />
                        </a>
                      </Button>
                      <Button 
                        variant="default" 
                        size="lg" 
                        className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
                        asChild
                      >
                        <a 
                          href="https://lu.ma/coirea?k=c" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          {t('calendarFooter.subscribe')}
                          <ExternalLink size={16} />
                        </a>
                      </Button>
                    </div>
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

export default Events;