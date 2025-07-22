import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Leaf, Users, Zap, Heart, Eye, TreePine, Compass, Lightbulb, Target, Star, ArrowRight, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-warm-beige via-aura-pearl/80 to-background overflow-hidden">
        {/* Enhanced Background Layers */}
        <div className="absolute inset-0">
          {/* Organic flowing shapes */}
          <div className="absolute top-16 left-8 w-80 h-80 rounded-full bg-gradient-to-br from-primary/[0.03] via-accent/[0.02] to-transparent blur-3xl"></div>
          <div className="absolute bottom-20 right-12 w-96 h-96 rounded-full bg-gradient-to-br from-secondary/[0.02] via-sage/[0.03] to-transparent blur-3xl"></div>
          
          {/* Subtle mesh gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,hsl(var(--sage))_0%,transparent_60%)] opacity-[0.03]"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Section Header */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-semibold text-primary mb-6 leading-tight">
              Our Purpose: <span className="block italic">Regenerate Organizations</span>
            </h1>
            
            <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto mb-8">
              We help purpose-driven companies realign their systems, culture, and leadership.
            </p>

            <p className="text-lg text-muted-foreground/80 font-body max-w-4xl mx-auto mb-8">
              From team retreats to long-term programs, we support the evolution toward resilient, future-ready organizations.
            </p>
            
            <div className="w-24 h-0.5 bg-gradient-warm mx-auto"></div>
          </div>
        </div>

        {/* Top wave separator */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".3" fill="hsl(var(--aura-pearl))"></path>
          </svg>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-primary mb-6 leading-tight">
              Our Core Values
            </h2>
            
            <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto mb-8">
              These principles guide our work and relationships.
            </p>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1: Regeneration */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-sage/20 to-warm-beige/20 mb-6">
                <Leaf className="w-8 h-8 text-sage" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-primary mb-3">
                Regeneration
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                We design for continuous renewal and growth, mirroring nature's cycles.
              </p>
            </div>

            {/* Value 2: Coherence */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-aura-pearl/20 mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-primary mb-3">
                Coherence
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                We align purpose, people, and performance for synergistic impact.
              </p>
            </div>

            {/* Value 3: Well-being */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-warm-beige/20 mb-6">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-primary mb-3">
                Well-being
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                We prioritize holistic health as the foundation for sustainable success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gradient-to-br from-aura-pearl/30 via-warm-beige/10 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-primary mb-6 leading-tight">
              Our Regenerative Approach
            </h2>
            
            <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto mb-8">
              We integrate time-tested wisdom with modern science to unlock potential.
            </p>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Systems Thinking */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-warm-beige/20 mb-6">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-primary mb-3">
                Systems Thinking
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                We see the interconnectedness of all parts, optimizing the whole.
              </p>
            </div>

            {/* Pillar 2: Cultural Architecture */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-sage/20 to-aura-pearl/20 mb-6">
                <TreePine className="w-8 h-8 text-sage" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-primary mb-3">
                Cultural Architecture
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                We design environments that foster trust, creativity, and purpose.
              </p>
            </div>

            {/* Pillar 3: Conscious Leadership */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-warm-beige/20 mb-6">
                <Compass className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-primary mb-3">
                Conscious Leadership
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                We cultivate leaders who inspire, empower, and serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-primary mb-6 leading-tight">
              Meet Our Team
            </h2>
            
            <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto mb-8">
              We are a diverse group of consultants, coaches, and creatives.
            </p>
          </div>

          {/* Team Member Grid (Example - Replace with actual team members) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1573496864061-c801f532e7fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-display font-semibold text-primary mb-2">
                Jane Doe
              </h3>
              <p className="text-muted-foreground font-body">
                Lead Consultant
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d674x?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-display font-semibold text-primary mb-2">
                Alex Smith
              </h3>
              <p className="text-muted-foreground font-body">
                Culture Architect
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1544006652-940e2aa74c58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-display font-semibold text-primary mb-2">
                Chris Johnson
              </h3>
              <p className="text-muted-foreground font-body">
                Leadership Coach
              </p>
            </div>
          </div>
        </div>
      </section>

          {/* Call to Action Section */}
          <div className="bg-gradient-to-br from-warm-beige/60 via-aura-pearl/40 to-background py-32">
            <div className="container mx-auto px-6 text-center">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-display font-semibold text-primary mb-8 leading-tight">
                  Ready to Transform Your Organization?
                </h2>
                
                <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto mb-12 leading-relaxed">
                  Begin your transformation journey with COIREA's regenerative approach to organizational evolution.
                </p>
                
                <Link to="/journey">
                  <Button className="bg-primary text-white hover:bg-primary/90 px-12 py-6 rounded-full font-body font-semibold text-xl shadow-elegant transition-all duration-300 hover:scale-105 group">
                    Begin the Journey
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

      <Footer />
    </div>
  );
};

export default About;
