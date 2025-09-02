
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrganizationalHealthScanner from "@/components/OrganizationalHealthScanner";

import SEOHead from "@/components/SEOHead";

const Tools = () => {
  return (
    <>
      <SEOHead
        title="COIREA Integrated Organizational & Leadership Diagnostic"
        description="Comprehensive assessment combining organizational health with conscious leadership insights. Diagnose your organization across 5 pillars and leadership effectiveness in one integrated tool."
        keywords="organizational health assessment, conscious leadership diagnostic, organizational transformation, leadership assessment, business health scanner, integrated diagnostic tool"
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
                  Integrated Diagnostic Tool
                </h1>
                <p className="text-xl text-muted-foreground font-body leading-relaxed mb-12">
                  Transform your organization with our comprehensive COIREA Integrated Organizational & Leadership Diagnostic. 
                  One powerful assessment combining organizational health with conscious leadership insights.
                </p>
              </header>

              {/* Single Tool Overview */}
              <div className="max-w-4xl mx-auto mb-16">
                <div className="bg-card border border-primary/20 rounded-xl p-8 shadow-elegant hover:shadow-warm transition-all duration-300">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-display font-semibold text-primary mb-6">
                    COIREA Integrated Organizational & Leadership Diagnostic
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    A comprehensive assessment combining organizational health evaluation with conscious leadership insights. 
                    Diagnose your organization across 5 regenerative pillars plus interconnectivity, while evaluating 
                    leadership effectiveness and consciousness.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="text-accent font-medium">
                      ⏱️ 12-15 minutes
                    </div>
                    <div className="text-accent font-medium">
                      📊 55 questions total
                    </div>
                    <div className="text-accent font-medium">
                      🎯 Instant comprehensive results
                    </div>
                  </div>
                  
                  <div className="bg-gradient-warm/10 rounded-xl p-6 mt-8">
                    <h4 className="font-display font-semibold text-primary mb-4">Assessment Covers:</h4>
                    <div className="grid md:grid-cols-2 gap-3 text-sm text-foreground/80">
                      <div>• Purpose & Culture (7 questions)</div>
                      <div>• Collaboration (7 questions)</div>
                      <div>• Leadership & Conscious Leadership (14 questions)</div>
                      <div>• Well-Being (7 questions)</div>
                      <div>• Organizational Strategy (7 questions)</div>
                      <div>• Interconnectivity (7 questions)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* COIREA Integrated Diagnostic */}
          <OrganizationalHealthScanner />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Tools;
