
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
            <div className="container mx-auto max-w-4xl text-center">
              <header>
                <h1 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-8 leading-tight">
                  Free Diagnostic Tools
                </h1>
                <p className="text-xl text-muted-foreground font-body leading-relaxed mb-8">
                  Discover where your organization stands and identify key areas for 
                  conscious transformation.
                </p>
              </header>
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
