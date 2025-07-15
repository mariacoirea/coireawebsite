import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-8 leading-tight">
              About COIREA
            </h1>
            <p className="text-xl text-muted-foreground font-body leading-relaxed">
              We are pioneers in regenerative organizational transformation, 
              dedicated to helping purpose-driven companies evolve from the inside out.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-6 bg-gradient-subtle">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-foreground/80 font-body leading-relaxed mb-6">
                  To guide organizations through deep structural and human transformation, 
                  restoring coherence between purpose and performance while integrating 
                  well-being as a foundation for sustainable success.
                </p>
                <p className="text-lg text-foreground/80 font-body leading-relaxed">
                  We believe that when organizations align with their authentic purpose 
                  and honor the wisdom of both human potential and natural systems, 
                  they become powerful forces for positive change in the world.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                  Our Approach
                </h3>
                <ul className="space-y-4 text-foreground/70">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                    <span>Regenerative business practices rooted in natural wisdom</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                    <span>Conscious leadership development and embodied authenticity</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                    <span>Systemic coherence alignment with organizational soul</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                    <span>Well-being integration as a performance foundation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;