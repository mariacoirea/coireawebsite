import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-5xl text-center">
            <h1 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-8 leading-tight">
              We partner with forward-thinking leaders to redesign how companies grow — from the inside out.
            </h1>
            <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-4xl mx-auto">
              COIREA equips purpose-driven organizations with the frameworks, tools, and insight to build regenerative, high-performing systems that thrive in complexity.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-6 bg-gradient-subtle">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-primary mb-8">
              Clarity. Coherence. Regeneration.
            </h2>
            <p className="text-lg text-foreground/80 font-body leading-relaxed mb-8 max-w-3xl mx-auto">
              Our mission is to guide organizations through deep structural and human transformation. We align purpose, people, and performance so that companies can evolve with integrity, strategic direction, and long-term success.
            </p>
            <p className="text-xl text-primary font-body font-medium">
              When purpose and leadership are in coherence, companies not only grow — they regenerate.
            </p>
          </div>
        </section>

        {/* Strategic Approach Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-semibold text-primary mb-6">
                We bring structure to transformation.
              </h2>
              <p className="text-lg text-foreground/80 font-body leading-relaxed max-w-3xl mx-auto mb-8">
                We don't offer quick fixes. We offer a strategic journey to full-system alignment. Our proprietary methodology integrates:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h3 className="text-xl font-display font-semibold text-primary mb-4">
                  Regenerative business strategy
                </h3>
                <p className="text-foreground/70 font-body">rooted in natural intelligence</p>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h3 className="text-xl font-display font-semibold text-primary mb-4">
                  Conscious leadership capacity
                </h3>
                <p className="text-foreground/70 font-body">embedded across all layers</p>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h3 className="text-xl font-display font-semibold text-primary mb-4">
                  Organizational coherence
                </h3>
                <p className="text-foreground/70 font-body">of purpose, systems, and structure</p>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h3 className="text-xl font-display font-semibold text-primary mb-4">
                  Well-being as a foundational pillar
                </h3>
                <p className="text-foreground/70 font-body">for sustainable performance</p>
              </div>
            </div>
            
            <p className="text-lg text-center text-foreground/80 font-body italic">
              Every engagement is tailored to meet the realities of your leadership and company lifecycle.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6 bg-gradient-subtle">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-semibold text-primary mb-6">
                Our Core Principles
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h3 className="text-xl font-display font-semibold text-primary mb-4">
                  Clarity of Purpose
                </h3>
                <p className="text-foreground/70 font-body">Design begins with strategic intention.</p>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h3 className="text-xl font-display font-semibold text-primary mb-4">
                  Human-Centered Systems
                </h3>
                <p className="text-foreground/70 font-body">People shape performance.</p>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h3 className="text-xl font-display font-semibold text-primary mb-4">
                  Reciprocity as Strategy
                </h3>
                <p className="text-foreground/70 font-body">Regenerative rhythms build sustainable value.</p>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h3 className="text-xl font-display font-semibold text-primary mb-4">
                  Leadership with Integrity
                </h3>
                <p className="text-foreground/70 font-body">Authentic leadership drives real results.</p>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-soft md:col-span-2 lg:col-span-1">
                <h3 className="text-xl font-display font-semibold text-primary mb-4">
                  Coherence at Every Level
                </h3>
                <p className="text-foreground/70 font-body">When the inner aligns with the outer, transformation lasts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Future of Work Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-display font-semibold text-primary mb-8">
                  Real change requires real partnership.
                </h2>
                <p className="text-lg text-foreground/80 font-body leading-relaxed mb-8">
                  At COIREA, you don't just work with a consulting firm. You enter a living ecosystem of transformational allies:
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-foreground/70 font-body">Executive coaches</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-foreground/70 font-body">Culture strategists</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-foreground/70 font-body">Regenerative business mentors</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-foreground/70 font-body">Well-being and somatic practitioners</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-foreground/70 font-body">Systems change facilitators</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h3 className="text-2xl font-display font-semibold text-primary mb-6">
                  Together, we help you:
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-body font-semibold text-foreground mb-2">Rebuild internal systems</h4>
                    <p className="text-foreground/70 font-body">with integrity and depth</p>
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-foreground mb-2">Align leadership and strategy</h4>
                    <p className="text-foreground/70 font-body">through every layer</p>
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-foreground mb-2">Measure what matters</h4>
                    <p className="text-foreground/70 font-body">purpose, culture, collaboration, and energy</p>
                  </div>
                </div>
                <p className="text-primary font-body font-medium mt-8 text-lg">
                  We help you create the company your future needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-primary">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-white mb-8">
              Ready to evolve your organization?
            </h2>
            <button className="bg-white text-primary px-12 py-4 rounded-full font-body font-semibold text-lg hover:bg-white/90 transition-all duration-300 shadow-elegant">
              Begin the Journey
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;