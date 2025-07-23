
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StructuralFoundationsSection from "@/components/StructuralFoundationsSection";
import FivePillarFrameworkSection from "@/components/FivePillarFrameworkSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";

const Index = () => {
  return (
    <>
      <SEOHead
        title="COIREA - Transform Your Organization from the Inside Out"
        description="Regenerative consultancy helping purpose-driven organizations through structural and human transformation. From team retreats to long-term programs, we support evolution toward resilient, future-ready organizations."
        keywords="organizational transformation, regenerative business, conscious leadership, team retreats, organizational development, purpose-driven companies, structural transformation, human transformation, business evolution, workplace culture"
        url="/"
      />
      <StructuredData type="organization" />
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <StructuralFoundationsSection />
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
