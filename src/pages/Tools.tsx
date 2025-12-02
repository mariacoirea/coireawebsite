
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrganizationalHealthScanner from "@/components/OrganizationalHealthScanner";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import SEOFAQSection from "@/components/SEOFAQSection";
import { RelatedContent } from "@/components/InternalLinkingStrategy";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";

const Tools = () => {
  const { t } = useTranslation('tools');
  const { currentLanguage } = useLanguage();
  
  const faqs = t('faqs', { returnObjects: true }) as Array<{ question: string; answer: string }>;
  return (
    <>
      <SEOHead
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        url={currentLanguage === 'es' ? '/es/tools' : '/tools'}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-6 bg-gradient-subtle">
            <div className="container mx-auto max-w-6xl text-center">
              <header>
                <h1 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-8 leading-tight">
                  {t('hero.title')}
                </h1>
                <p className="text-xl text-muted-foreground font-body leading-relaxed mb-12">
                  {t('hero.description')}
                </p>
              </header>
            </div>
          </section>

          {/* Organizational Health Scanner */}
          <OrganizationalHealthScanner />
          
          {/* FAQ Section */}
          <SEOFAQSection 
            title={t('faqTitle')}
            faqs={faqs}
            className="bg-warm-beige"
          />
          
          {/* Related Content */}
          <RelatedContent 
            currentPage="tools" 
            suggestions={["platform", "about", "insights"]}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Tools;
