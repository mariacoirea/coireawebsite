import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StructuralFoundationsSection from "@/components/StructuralFoundationsSection";
import FivePillarFrameworkSection from "@/components/FivePillarFrameworkSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
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
  );
};

export default Index;
