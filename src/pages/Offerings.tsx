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

  const offerings = [
    {
      id: 1,
      title: "Organizational Transformation",
      badge: "Signature Program",
      duration: "Long-Term Partnership",
      timeframe: "6-18 months",
      description: "Holistic restructuring of systems, culture, and leadership — aligned with your organization's purpose, people, and performance. We build systems that scale and last.",
      keyAreas: [
        "Strategic Alignment",
        "Conscious Leadership", 
        "Culture Architecture",
        "Change Implementation"
      ],
      icon: "OT"
    },
    {
      id: 2,
      title: "Team Retreats & Workshops",
      badge: "Immersive Experiences",
      duration: "2-5 days",
      timeframe: "",
      description: "Transformative gatherings designed to awaken clarity, cohesion, and collaborative intelligence.",
      keyAreas: [
        "Team Bonding",
        "Vision Activation",
        "Conflict Healing", 
        "Creative Co-Creation Tools"
      ],
      icon: "TR"
    },
    {
      id: 3,
      title: "Leadership Coaching",
      badge: "1:1 Guidance", 
      duration: "3-12 months",
      timeframe: "",
      description: "Deep inner work for executives & emerging leaders ready to lead with authenticity, alignment, and regenerative presence.",
      keyAreas: [
        "Executive Presence",
        "Conscious Decision-Making",
        "Embodied Communication",
        "Inner Alignment"
      ],
      icon: "LC"
    },
    {
      id: 4,
      title: "Regenerative Strategy Consulting",
      badge: "Project-Based Engagement",
      duration: "Duration flexible",
      timeframe: "",
      description: "Strategy rooted in soul and sustainability — integrating values, purpose, performance, and well-being into long-term business design.",
      keyAreas: [
        "Purpose Integration",
        "Future Planning",
        "Performance Systems", 
        "Regenerative Metrics"
      ],
      icon: "RS"
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
        {/* Individual Offerings Section */}
        <section className="py-20 px-6 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-12">
              {/* First Offering - Signature Program */}
              <div className="relative">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                      <span className="text-2xl font-display font-bold text-primary">OT</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <h3 className="text-3xl md:text-4xl font-display font-bold text-primary">
                            Organizational Transformation
                          </h3>
                          <span className="bg-copper/20 text-copper px-4 py-2 rounded-full text-sm font-medium border border-copper/30">
                            Signature Program
                          </span>
                        </div>
                        <div className="flex items-center gap-6 text-lg text-muted-foreground font-body mb-6">
                          <span className="text-copper font-semibold">Long-Term Partnership</span>
                          <span>6-18 months</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8 max-w-4xl">
                      Holistic restructuring of systems, culture, and leadership — aligned with your organization's purpose, people, and 
                      performance. We build systems that scale and last.
                    </p>
                    
                    <div>
                      <h4 className="text-lg font-display font-semibold text-primary mb-4">KEY AREAS</h4>
                      <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
                        {offerings[0].keyAreas.map((area, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-copper rounded-full"></div>
                            <span className="text-muted-foreground font-body">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Remaining Offerings Grid */}
              <div className="grid md:grid-cols-3 gap-8">
                {offerings.slice(1).map((offering, index) => (
                  <div key={offering.id} className="bg-background border border-primary/10 rounded-2xl p-8 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                        <span className="text-xl font-display font-bold text-primary">{offering.icon}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-display font-bold text-primary mb-4 leading-tight">
                      {offering.title}
                    </h3>
                    
                    <div className="mb-4">
                      <span className="bg-sage/20 text-sage px-3 py-1 rounded-full text-sm font-medium border border-sage/30">
                        {offering.badge}
                      </span>
                    </div>
                    
                    <div className="text-muted-foreground font-body mb-6">
                      <span className="font-semibold">{offering.duration}</span>
                    </div>
                    
                    <p className="text-muted-foreground font-body leading-relaxed mb-8">
                      {offering.description}
                    </p>
                    
                    <div>
                      <h4 className="text-base font-display font-semibold text-primary mb-4">KEY AREAS</h4>
                      <div className="space-y-3">
                        {offering.keyAreas.map((area, areaIndex) => (
                          <div key={areaIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground font-body leading-relaxed">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Message */}
        <section className="py-16 px-6" style={{ backgroundColor: '#F0E6D6' }}>
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-lg md:text-xl text-primary/80 font-body leading-relaxed mb-6">
              All offerings are co-created based on your organization's needs and stage of evolution.
            </p>
            <p className="text-lg text-primary font-body font-medium">
              Share your context and let's explore how we can support your next phase.
            </p>
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