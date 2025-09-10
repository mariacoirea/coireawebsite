
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReflectionCheckpoint from "@/components/ReflectionCheckpoint";
import FivePillarFrameworkSection from "@/components/FivePillarFrameworkSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import SEOFAQSection from "@/components/SEOFAQSection";
import { RelatedContent } from "@/components/InternalLinkingStrategy";
import { homepageFAQs } from "@/data/faqData";

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
      <StructuredData type="faq" data={{ questions: homepageFAQs }} />
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <ReflectionCheckpoint />
          <FivePillarFrameworkSection />
          <ServicesSection />
          <TestimonialsSection />
          
          {/* FAQ Section for Homepage */}
          <SEOFAQSection 
            title="Frequently Asked Questions About Organizational Transformation"
            faqs={homepageFAQs}
            className="bg-gradient-subtle"
          />
          
          {/* Related Content */}
          <RelatedContent 
            currentPage="home" 
            suggestions={["offerings", "tools", "about"]}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
