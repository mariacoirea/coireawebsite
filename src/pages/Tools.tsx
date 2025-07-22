
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrganizationalHealthScanner from "@/components/OrganizationalHealthScanner";

const Tools = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-subtle">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-8 leading-tight">
              Free Diagnostic Tools
            </h1>
            <p className="text-xl text-muted-foreground font-body leading-relaxed mb-8">
              Discover where your organization stands and identify key areas for 
              conscious transformation.
            </p>
          </div>
        </section>

        {/* Organizational Health Scanner */}
        <OrganizationalHealthScanner />
      </main>
      <Footer />
    </div>
  );
};

export default Tools;
