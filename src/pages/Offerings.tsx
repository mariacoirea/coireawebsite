import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Brain, Leaf, Target, Heart, Compass, ArrowRight } from "lucide-react";

const Offerings = () => {
  const pillars = [
    {
      icon: Target,
      title: "Purpose",
      description: "Clarity-driven leadership that embodies your organization's deepest calling.",
      color: "text-sage"
    },
    {
      icon: Brain,
      title: "Leadership", 
      description: "Conscious leaders who inspire through authentic presence and wisdom.",
      color: "text-primary"
    },
    {
      icon: Compass,
      title: "Collaboration",
      description: "Synergistic teamwork that amplifies collective intelligence and creativity.",
      color: "text-copper"
    },
    {
      icon: Target,
      title: "Culture",
      description: "Regenerative organizational culture that nurtures growth and innovation.",
      color: "text-sage"
    },
    {
      icon: Heart,
      title: "Well-Being",
      description: "Holistic wellness as the foundation for sustainable high performance.",
      color: "text-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6" style={{ backgroundColor: '#F0E6D6' }}>
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-primary mb-8 leading-tight">
              Transformational Offerings for Regenerative Growth
            </h1>
            <p className="text-xl md:text-2xl text-primary/80 font-body leading-relaxed max-w-5xl mx-auto mb-8">
              We co-create regenerative pathways tailored to your organization's unique rhythm and evolution.
            </p>
            <div className="w-32 h-1 bg-copper mx-auto rounded-full"></div>
          </div>
        </section>

        {/* Secondary Message */}
        <section className="py-16 px-6 bg-background">
          <div className="container mx-auto max-w-5xl text-center">
            <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed">
              Whether you're redesigning your entire organizational architecture or starting with a team-building retreat, our 
              offerings are intentionally crafted to restore coherence, vitality, and purpose in your company.
            </p>
          </div>
        </section>

        {/* Framework Section */}
        <section className="py-20 px-6" style={{ backgroundColor: '#F0E6D6' }}>
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-8">
                We Don't Offer Quick Fixes —<br />
                <span className="italic">We lead Systemic Transformation</span>
              </h2>
              
              <div className="max-w-4xl mx-auto mb-12">
                <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
                  Rooted in Regenerative Intelligence and Conscious Leadership, COIREA equips organizations to 
                  evolve from the inside out — rebuilding their internal systems with clarity, cultural integrity, and long-term vision.
                </p>
                <p className="text-lg text-primary font-body font-semibold">
                  Our proprietary 5-Pillar Framework combines purpose-driven leadership, organizational diagnostics, 
                  organic intelligence and data-backed strategy — guiding companies through deep structural renewal 
                  and measurable cultural transformation.
                </p>
              </div>
            </div>

            {/* 5 Pillars Visual */}
            <div className="flex justify-center items-end gap-8 mb-16">
              {pillars.map((pillar, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-16 h-32 ${pillar.color === 'text-sage' ? 'bg-sage' : pillar.color === 'text-copper' ? 'bg-copper' : 'bg-primary'} rounded-t-full mb-4 group-hover:scale-105 transition-transform duration-300`}></div>
                  <p className="text-sm font-display font-semibold text-primary">{pillar.title}</p>
                </div>
              ))}
            </div>

            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-8">
                The COIREA 5-Pillar Framework: Real Strategy, Human Depth.
              </h3>
              
              <div className="text-left max-w-4xl mx-auto space-y-6">
                <p className="text-muted-foreground font-body leading-relaxed">
                  <span className="font-semibold">At the heart of every transformation lies this 5-dimensional framework.</span><br />
                  COIREA's 5-Pillar Framework merges the foundational systems of any organization — enabling executive teams to:
                </p>
                
                <ul className="space-y-3 text-muted-foreground font-body">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Cultivate purpose-driven clarity and renewed focus</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sage rounded-full mt-2"></div>
                    <span>Strengthen leadership accountability across levels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-copper rounded-full mt-2"></div>
                    <span>Build adaptive, high-performing, and connected teams</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Unlock culture into cultural as a strategic asset</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sage rounded-full mt-2"></div>
                    <span>Integrate well-being into the core business rhythm for long-term impact</span>
                  </li>
                </ul>

                <div className="bg-background/60 border border-primary/20 rounded-xl p-6 mt-8">
                  <p className="text-primary font-body leading-relaxed">
                    <span className="font-semibold">Last pillar includes:</span> Tailored KPIs to measure progress and ROI<br />
                    <span className="font-semibold">Team Performance Data:</span> Identify the productivity, cohesion, and outcomes<br />
                    <span className="font-semibold">Retention & Renewal Risk:</span> Proactive indicators for employment sustainability<br />
                    <span className="font-semibold">Leadership Maturity Index:</span> Gracing growth on decision making and ownership<br />
                    <span className="font-semibold">Long-Term Evolution Maps:</span> Value trajectories for structural and cultural milestones<br />
                    <span className="font-semibold">Strategic Investment in Human Capital:</span> connecting people initiatives to business outcomes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-6 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                  Ready to explore what's possible for your team?
                </h2>
                <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
                  Whether you're just beginning or already deep in your journey, we'd love to connect 
                  and co-create what comes next.
                </p>
                <p className="text-primary font-body">
                  Let's start with a <span className="font-semibold underline">simple conversation</span>.
                </p>
              </div>
              
              <div className="bg-background border border-primary/20 rounded-2xl p-8 shadow-lg">
                <form className="space-y-6">
                  <div>
                    <label className="text-sm text-copper font-body font-medium mb-2 block">
                      Name <span className="text-copper/60">(Required)</span>
                    </label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-muted-foreground font-body mb-1 block">First Name</label>
                        <Input className="border-primary/20 focus:border-primary" />
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground font-body mb-1 block">Last Name</label>
                        <Input className="border-primary/20 focus:border-primary" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-copper font-body font-medium mb-2 block">
                      Email <span className="text-copper/60">(Required)</span>
                    </label>
                    <Input type="email" className="border-primary/20 focus:border-primary" />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <label htmlFor="newsletter" className="text-sm text-muted-foreground font-body">
                      Sign up for news and updates
                    </label>
                  </div>
                  
                  <div>
                    <label className="text-sm text-copper font-body font-medium mb-2 block">Company Name</label>
                    <Input className="border-primary/20 focus:border-primary" />
                  </div>
                  
                  <div>
                    <label className="text-sm text-copper font-body font-medium mb-2 block">
                      What are you exploring right now? <span className="text-copper/60">(Required)</span>
                    </label>
                    <Textarea 
                      className="border-primary/20 focus:border-primary min-h-[120px]" 
                      placeholder="Tell us about your current challenges, goals, or what brought you here..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group py-3"
                  >
                    Let's start with a conversation!
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Quote */}
        <section className="py-16 px-6" style={{ backgroundColor: '#F0E6D6' }}>
          <div className="container mx-auto max-w-4xl text-center">
            <blockquote className="text-xl md:text-2xl font-body italic text-primary leading-relaxed mb-6">
              "Companies that prioritize employee well-being outperform the stock market by 2 to 3 times over 25 years."
            </blockquote>
            <cite className="text-lg font-display font-semibold text-primary">— Harvard Business Review</cite>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Offerings;