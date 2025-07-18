
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Leaf, Users, Zap, Heart, Eye, TreePine, Compass, Lightbulb, Target, Star, ArrowRight, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Enhanced Hero Section with Landscape Background */}
        <section 
          className="min-h-[80vh] flex items-center justify-center relative overflow-hidden py-20"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(250, 248, 246, 0.85) 0%, rgba(246, 240, 233, 0.8) 30%, rgba(255, 255, 255, 0.6) 70%, rgba(250, 248, 246, 0.7) 100%), url(/lovable-uploads/bd62b4e8-0d29-4274-a885-907109af76d8.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-aura-pearl/40 to-warm-beige/30"></div>
          
          {/* Subtle decorative elements for visual consistency */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-sage/10 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
          
          <div className="container mx-auto px-6 text-center relative z-10 max-w-6xl">
            <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 shadow-sm mb-8">
              <div className="w-2 h-2 bg-sage rounded-full animate-ping"></div>
              <span className="text-primary font-medium">About COIREA</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold text-foreground mb-8 leading-tight drop-shadow-md">
              We partner with <span className="italic">forward-thinking leaders</span> to redesign how companies grow — 
              <span className="block mt-4">from the inside out.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/90 font-body font-light max-w-4xl mx-auto mb-12 leading-relaxed drop-shadow-md">
              COIREA equips purpose-driven organizations with the frameworks, tools, and insight to build regenerative, high-performing systems that thrive in complexity.
            </p>

            {/* Logo with enhanced backdrop */}
            <div className="flex items-center justify-center mb-12">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-soft border border-primary/10">
                <img 
                  src="/lovable-uploads/5555f545-a4bb-46b7-9145-b8ae36a5d882.png" 
                  alt="COIREA Logo" 
                  className="h-16 w-auto opacity-95"
                />
              </div>
            </div>
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
                Clarity. Coherence. <span className="text-sage">Regeneration.</span>
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
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-soft group hover:scale-[1.02] transition-all duration-500 border border-primary/10">
                <div className="flex items-start space-x-6 mb-6">
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
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-soft group hover:scale-[1.02] transition-all duration-500 border border-primary/10">
                <div className="flex items-start space-x-6 mb-6">
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
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-soft group hover:scale-[1.02] transition-all duration-500 border border-primary/10">
                <div className="flex items-start space-x-6 mb-6">
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
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-soft group hover:scale-[1.02] transition-all duration-500 border border-primary/10">
                <div className="flex items-start space-x-6 mb-6">
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
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-soft group hover:scale-[1.02] transition-all duration-500 border border-primary/10">
                <div className="flex items-start space-x-6 mb-6">
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
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-soft group hover:scale-[1.02] transition-all duration-500 border border-primary/10">
                <div className="flex items-start space-x-6 mb-6">
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

        {/* Enhanced CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-aura-pearl to-warm-beige">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sage/5 via-transparent to-primary/10 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/40 backdrop-blur-sm rounded-3xl p-12 border border-primary/20 shadow-elegant">
                <h2 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-8 leading-tight">
                  Ready to evolve your <span className="italic text-sage">organization?</span>
                </h2>
                
                <p className="text-xl text-primary/80 font-body mb-12 max-w-3xl mx-auto">
                  Begin your transformation journey with COIREA's regenerative approach to organizational evolution.
                </p>
                
                <Button className="bg-primary text-white hover:bg-primary/90 px-12 py-6 rounded-full font-body font-semibold text-xl shadow-elegant transition-all duration-300 hover:scale-105 group">
                  Begin the Journey
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
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
