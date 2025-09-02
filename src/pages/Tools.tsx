
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrganizationalHealthScanner from "@/components/OrganizationalHealthScanner";

import SEOHead from "@/components/SEOHead";

const Tools = () => {
  return (
    <>
      <SEOHead
        title="COIREA Organizational Health Scanner"
        description="Comprehensive organizational health assessment with leadership insights. Diagnose your organization across 5 pillars and leadership effectiveness in one integrated tool."
        keywords="organizational health assessment, organizational scanner, organizational transformation, leadership assessment, business health scanner, diagnostic tool"
        url="/tools"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-6 bg-gradient-subtle">
            <div className="container mx-auto max-w-6xl text-center">
              <header>
                <h1 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-8 leading-tight">
                  Organizational Health Scanner
                </h1>
                <p className="text-xl text-muted-foreground font-body leading-relaxed mb-12">
                  Transform your organization with our comprehensive assessment tool. 
                  Diagnose your organizational health and leadership effectiveness in one integrated diagnostic.
                </p>
              </header>
            </div>
          </section>

          {/* Organizational Health Scanner */}
          <OrganizationalHealthScanner />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Tools;
