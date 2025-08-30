
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReflectionCheckpoint from "@/components/ReflectionCheckpoint";
import { useTranslation } from "react-i18next";

import FivePillarFrameworkSection from "@/components/FivePillarFrameworkSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";

const Index = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <SEOHead
        title={t('hero.title') + " - " + t('hero.subtitle')}
        description={t('hero.description')}
        keywords="organizational transformation, regenerative business, conscious leadership, team retreats, organizational development, purpose-driven companies, structural transformation, human transformation, business evolution, workplace culture"
        url="/"
      />
      <StructuredData type="organization" />
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <ReflectionCheckpoint />
          <FivePillarFrameworkSection />
          <ServicesSection />
          <TestimonialsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
