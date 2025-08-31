
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import { RelatedContent } from "@/components/InternalLinkingStrategy";
import { Leaf, Users, Zap, Heart, Eye, TreePine, Compass, Lightbulb, Target, Star, ArrowRight, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <SEOHead
        title="About COIREA - Conscious Leadership & Regenerative Business Transformation"
        description="Meet the team behind COIREA's regenerative organizational transformation. Learn about our mission, values, and approach to conscious leadership and purpose-driven business evolution."
        keywords="conscious leadership, regenerative business, organizational transformation team, purpose-driven leadership, business transformation consultants, sustainable business practices"
        url="/about"
      />
      <StructuredData type="organization" />
      
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Enhanced Hero Section with New Landscape Background */}
        <section 
          className="min-h-[80vh] flex items-center justify-center relative overflow-hidden py-20"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(250, 248, 246, 0.7) 0%, rgba(246, 240, 233, 0.6) 30%, rgba(91, 108, 73, 0.15) 70%, rgba(74, 124, 122, 0.2) 100%), url(/lovable-uploads/8143fc2b-3b48-4a24-9ace-393341a0f118.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-aura-pearl/20 via-transparent to-primary/10"></div>
          
          {/* Subtle decorative elements for visual consistency */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-sage/10 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
          
          <div className="container mx-auto px-6 text-center relative z-10 max-w-6xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold text-primary mb-8 leading-tight drop-shadow-sm">
              The Future of Work Isn't a Trend — <span className="italic">It's a Transformation</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary/90 font-body font-light max-w-4xl mx-auto leading-relaxed drop-shadow-sm">
              We founded COIREA to challenge outdated systems and lead the shift toward human-centered, high-performing organizations built on coherence, clarity, and well-being.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 px-6 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full border border-primary/20 shadow-sm mb-8">
                <Mountain className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium">Our Mission</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-8 leading-tight">
                Purpose. People. <span className="text-sage">Performance.</span>
              </h2>
              
              <div className="w-24 h-0.5 bg-gradient-to-r from-sage to-primary mx-auto mb-8"></div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-elegant border border-primary/10">
              <p className="text-xl text-foreground/80 font-body leading-relaxed mb-8 max-w-4xl mx-auto text-center">
                Our mission is to guide organizations through deep structural and human transformation. We align purpose, people, and performance so that companies can evolve with integrity, strategic direction, and long-term success.
              </p>
              <div className="text-center">
                <p className="text-2xl text-primary font-body font-medium italic">
                  When purpose and leadership are in coherence, companies not only grow — they regenerate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-24 px-6 bg-warm-beige">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/10 shadow-sm mb-8">
                <Heart className="w-4 h-4 text-sage" />
                <span className="text-primary font-medium">Our Values</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-8 leading-tight">
                What We <span className="text-sage">Stand For</span>
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-sage to-primary mx-auto"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Value 1 */}
              <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-4 shadow-soft group hover:scale-[1.02] transition-all duration-500 border border-primary/10">
                <div className="flex items-start space-x-6 mb-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-sage/20 to-sage rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-8 h-8 text-sage" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                      Clarity of Purpose
                    </h3>
                    <p className="text-foreground/70 font-body leading-relaxed">
                      We design from the inside out — anchored in strategic vision, soul truth, and long-term direction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Value 2 */}
              <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-4 shadow-soft group hover:scale-[1.02] transition-all duration-500 border border-primary/10">
                <div className="flex items-start space-x-6 mb-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                      Coherence at Every Level
                    </h3>
                    <p className="text-foreground/70 font-body leading-relaxed">
                      Transformation lasts when purpose, leadership, and culture are aligned across systems, teams, and decisions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Value 3 */}
              <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-4 shadow-soft group hover:scale-[1.02] transition-all duration-500 border border-primary/10">
                <div className="flex items-start space-x-6 mb-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-copper/20 to-copper rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-8 h-8 text-copper" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                      Leadership with Integrity
                    </h3>
                    <p className="text-foreground/70 font-body leading-relaxed">
                      We support bold, conscious leadership that prioritizes presence, responsibility, and aligned action.
                    </p>
                  </div>
                </div>
              </div>

              {/* Value 4 */}
              <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-4 shadow-soft group hover:scale-[1.02] transition-all duration-500 border border-primary/10">
                <div className="flex items-start space-x-6 mb-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-olive-green/20 to-olive-green rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-olive-green" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                      Human-Centered Systems
                    </h3>
                    <p className="text-foreground/70 font-body leading-relaxed">
                      People are not separate from performance — they are the system. We design structures that support both.
                    </p>
                  </div>
                </div>
              </div>

              {/* Value 5 */}
              <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-4 shadow-soft group hover:scale-[1.02] transition-all duration-500 border border-primary/10">
                <div className="flex items-start space-x-6 mb-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-sage/20 to-sage rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Compass className="w-8 h-8 text-sage" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                      Reciprocity as Strategy
                      <span className="block text-lg font-body font-normal text-primary/70 mt-1">(Inspired by Ayni)</span>
                    </h3>
                    <p className="text-foreground/70 font-body leading-relaxed">
                      We honor the natural flow of giving and receiving. Regeneration begins with how we relate — to ourselves, to others, to the system.
                    </p>
                  </div>
                </div>
              </div>

              {/* Value 6 */}
              <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-4 shadow-soft group hover:scale-[1.02] transition-all duration-500 border border-primary/10">
                <div className="flex items-start space-x-6 mb-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-copper/20 to-copper rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-copper" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                      Brave Evolution
                    </h3>
                    <p className="text-foreground/70 font-body leading-relaxed">
                      We invite companies to lead change from a place of courage — daring to disrupt, experiment, and evolve from truth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future of Work Section */}
        <section className="py-24 px-6 bg-background">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full border border-primary/20 shadow-sm mb-8">
                  <Star className="w-4 h-4 text-primary" />
                  <span className="text-primary font-medium">Real Partnership</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-display font-semibold text-primary mb-8 leading-tight">
                  Real change requires <span className="text-copper">real partnership.</span>
                </h2>
                
                <p className="text-xl text-foreground/80 font-body leading-relaxed mb-8">
                  At COIREA, you don't just work with a consulting firm. You enter a living ecosystem of transformational allies:
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    "Executive coaches",
                    "Culture strategists", 
                    "Regenerative business mentors",
                    "Well-being and somatic practitioners",
                    "Systems change facilitators"
                  ].map((ally, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-sage to-primary rounded-full"></div>
                      <span className="text-foreground/70 font-body text-lg">{ally}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-elegant border border-primary/10">
                <h3 className="text-3xl font-display font-semibold text-primary mb-8">
                  Together, we help you:
                </h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-sage" />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-foreground mb-2 text-lg">Rebuild internal systems</h4>
                      <p className="text-foreground/70 font-body">with integrity and depth</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-foreground mb-2 text-lg">Align leadership and strategy</h4>
                      <p className="text-foreground/70 font-body">through every layer</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-copper/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-copper" />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-foreground mb-2 text-lg">Measure what matters</h4>
                      <p className="text-foreground/70 font-body">purpose, culture, collaboration, and energy</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 pt-8 border-t border-primary/10">
                  <p className="text-primary font-body font-medium text-xl text-center">
                    We help you create the company your future needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* From the Founder Section */}
        <section className="py-24 px-6 bg-warm-beige">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-light text-primary mb-16 leading-tight">
                From The Founder<span className="text-sage">...</span>
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              {/* Founder Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white/60 shadow-elegant">
                    <img 
                      src="/lovable-uploads/2627835c-d411-47f1-abb6-99b92bd30341.png" 
                      alt="Maria Jose Figueroa - Founder of COIREA"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-sage/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
                </div>
              </div>
              
              {/* Founder Content */}
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-6">
                  Maria Jose Figueroa - <span className="text-sage">Conscious Leadership Catalyst</span>
                </h3>
                
                <div className="space-y-6 text-lg text-foreground/80 font-body leading-relaxed">
                  <p>
                    With a background in business and a calling rooted in soul, I created COIREA to help teams lead with clarity, coherence, and deeper purpose.
                  </p>
                  
                  <p>
                    My journey weaves together strategic leadership, regenerative wisdom, and intuitive intelligence — all in service of evolving the way we work.
                  </p>
                  
                  <p className="text-xl font-medium text-primary italic">
                    I believe transformation begins when we remember who we are — and choose to lead from that place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section for SEO */}
        <section className="py-24 px-6 bg-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-4">
                About COIREA - Frequently Asked Questions
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-sage to-primary mx-auto"></div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-primary/10">
                <h3 className="text-xl font-display font-semibold text-primary mb-4">
                  What makes COIREA different from other organizational consultancies?
                </h3>
                <p className="text-foreground/80 font-body leading-relaxed">
                  COIREA integrates regenerative business principles with practical systems design. We don't just consult, we embed as partners to co-create sustainable transformation. Guided by our 5-Pillar Framework — purpose, leadership, collaboration, culture, well-being, and organizational strategy — we help organizations evolve into resilient, purpose-driven, self-managing systems.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-primary/10">
                <h3 className="text-xl font-display font-semibold text-primary mb-4">
                  How long does organizational transformation typically take?
                </h3>
                <p className="text-foreground/80 font-body leading-relaxed">
                  Our transformation programs range from 90-day intensive resets to 6-18 month comprehensive partnerships. The timeline depends on your organization's size, complexity, and transformation goals. We also offer ongoing fractional support for sustained evolution.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-primary/10">
                <h3 className="text-xl font-display font-semibold text-primary mb-4">
                  What is regenerative business and how does it apply to my organization?
                </h3>
                <p className="text-foreground/80 font-body leading-relaxed">
                  Regenerative business goes beyond sustainability to create systems that actively restore and revitalize. For organizations, this means building cultures and practices that strengthen both people and performance, creating positive impact while achieving business results.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-primary/10">
                <h3 className="text-xl font-display font-semibold text-primary mb-4">
                  How do you measure the success of organizational transformation?
                </h3>
                <p className="text-foreground/80 font-body leading-relaxed">
                  We use our COIREA Evolution Dashboard to track both quantitative metrics (productivity, retention, engagement) and qualitative indicators (leadership maturity, cultural coherence, well-being) across our 5-Pillar Framework, providing real-time insights into your organization's transformation progress.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-aura-pearl to-warm-beige">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sage/5 via-transparent to-primary/10 rounded-3xl blur-3xl"></div>
              <div className="relative bg-background/40 backdrop-blur-sm rounded-3xl p-12 border border-primary/20 shadow-elegant">
                <h2 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-8 leading-tight">
                  Ready to evolve your <span className="italic text-sage">organization?</span>
                </h2>
                
                <p className="text-xl text-primary/80 font-body mb-12 max-w-3xl mx-auto">
                  Begin your transformation journey with COIREA's regenerative approach to organizational evolution.
                </p>
                
                <Link to="/journey#journey-start">
                  <Button className="bg-primary text-white hover:bg-primary/90 px-12 py-6 rounded-full font-body font-semibold text-xl shadow-elegant transition-all duration-300 hover:scale-105 group">
                    Begin the Journey
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stress Statistics Section */}
        <section className="py-16 px-6 bg-background border-t border-primary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <blockquote className="text-lg md:text-xl text-foreground/70 font-body italic leading-relaxed">
              "76% of employees report experiencing moderate to high levels of stress at work — and 1 in 3 say it affects their performance."
            </blockquote>
            <cite className="block mt-4 text-primary font-medium">
              – American Institute of Stress
            </cite>
          </div>
        </section>

        {/* Related Content for Internal Linking */}
        <RelatedContent currentPage="about" />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
