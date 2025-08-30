
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrganizationalHealthScanner from "@/components/OrganizationalHealthScanner";
import SEOHead from "@/components/SEOHead";
import { useTranslation } from "react-i18next";

const Tools = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <SEOHead
        title={t('tools.title')}
        description={t('tools.description')}
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
                  {t('tools.title')}
                </h1>
                <p className="text-xl text-muted-foreground font-body leading-relaxed mb-8">
                  {t('tools.description')}
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
