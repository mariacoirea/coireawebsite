import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReflectionCheckpoint from "@/components/ReflectionCheckpoint";
import FivePillarFrameworkSection from "@/components/FivePillarFrameworkSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AIAgentSection from "@/components/AIAgentSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import { RelatedContent } from "@/components/InternalLinkingStrategy";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";

const HomePage = () => {
  const { t } = useTranslation('home');
  const { currentLanguage } = useLanguage();
  
  return (
    <>
      <SEOHead
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        url={currentLanguage === 'es' ? '/es' : '/'}
      />
      <StructuredData type="organization" />
      
      <div className="min-h-screen bg-background">
        <Header />
        <main id="main-content">
          <Hero />
          <ReflectionCheckpoint />
          <HowItWorksSection />
          <FivePillarFrameworkSection />
          <AIAgentSection />
          

          
          {/* Related Content */}
          <RelatedContent 
            currentPage="home" 
            suggestions={["platform", "tools", "about"]}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;