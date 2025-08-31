
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrganizationalHealthScanner from "@/components/OrganizationalHealthScanner";
import ConsciousLeadershipAssessment from "@/components/ConsciousLeadershipAssessment";
import SEOHead from "@/components/SEOHead";

const Tools = () => {
  return (
    <>
      <SEOHead
        title="Free Organizational Health Diagnostic Tools"
        description="Discover where your organization stands with our free diagnostic tools. Identify key areas for conscious transformation and organizational development."
        keywords="organizational health assessment, diagnostic tools, organizational transformation, team assessment, business health scanner, organizational development tools"
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
                  Free Diagnostic Tools
                </h1>
                <p className="text-xl text-muted-foreground font-body leading-relaxed mb-12">
                  Transform your organization with our comprehensive assessment suite. 
                  Two powerful tools to unlock conscious leadership and organizational health.
                </p>
              </header>

              {/* Tools Overview Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-card border border-primary/20 rounded-xl p-8 shadow-elegant hover:shadow-warm transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                    Organizational Health Scanner
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive assessment across 5 pillars to diagnose your organization's health, 
                    pain points, and growth opportunities.
                  </p>
                  <div className="text-sm text-accent font-medium">
                    ⏱️ 8-10 minutes • 42 questions • Instant results
                  </div>
                </div>

                <div className="bg-card border border-sage/20 rounded-xl p-8 shadow-elegant hover:shadow-warm transition-all duration-300">
                  <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-sage mb-4">
                    Conscious Leadership Assessment
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Discover whether you're leading from above or below the line with insights 
                    into your emotional and regenerative intelligence.
                  </p>
                  <div className="text-sm text-sage font-medium">
                    ⏱️ 12-15 minutes • 84 questions • Personal evolution map
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Organizational Health Scanner */}
          <OrganizationalHealthScanner />
          
          {/* Conscious Leadership Assessment */}
          <ConsciousLeadershipAssessment />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Tools;
