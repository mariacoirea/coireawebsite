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
        <section className="py-32 px-6" style={{ backgroundColor: '#F0E6D6' }}>
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary mb-12 leading-[1.1]">
                We Don't Offer Quick Fixes —<br />
                <span className="italic text-primary/80">We lead Systemic Transformation</span>
              </h1>
              
              <div className="max-w-5xl mx-auto space-y-8">
                <p className="text-lg md:text-xl text-primary/70 font-body leading-relaxed">
                  Rooted in Regenerative Intelligence and Conscious Leadership, COIREA equips organizations to 
                  evolve from the inside out — rebuilding their internal systems with clarity, cultural integrity, and long-term vision.
                </p>
                <p className="text-lg md:text-xl text-primary font-body font-medium leading-relaxed">
                  Our proprietary <span className="font-semibold">5-Pillar Framework</span> combines purpose-driven leadership, organizational diagnostics, 
                  Organic Intelligence, and data-backed strategy — guiding companies through deep structural renewal 
                  and measurable cultural transformation.
                </p>
              </div>
              
              <div className="w-32 h-1 bg-copper mx-auto rounded-full mt-12"></div>
            </div>
          </div>
        </section>

        {/* Framework Section */}
        <section className="py-24 px-6 bg-background">
          <div className="container mx-auto max-w-6xl">
            {/* 5 Pillars Visual */}
            <div className="flex justify-center items-end gap-6 md:gap-8 mb-20">
              {pillars.map((pillar, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-12 h-24 md:w-16 md:h-32 ${pillar.color === 'text-sage' ? 'bg-sage' : pillar.color === 'text-copper' ? 'bg-copper' : 'bg-primary'} rounded-t-full mb-4 group-hover:scale-105 transition-transform duration-300 shadow-lg`}></div>
                  <p className="text-xs md:text-sm font-display font-semibold text-primary">{pillar.title}</p>
                </div>
              ))}
            </div>

            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-4xl font-display font-bold text-primary mb-12">
                The COIREA 5-Pillar Framework:<br />
                <span className="text-primary/80">Real Strategy, Human Depth.</span>
              </h3>
              
              <div className="text-left max-w-4xl mx-auto space-y-8">
                <p className="text-lg text-muted-foreground font-body leading-relaxed">
                  <span className="font-semibold text-primary">At the heart of every transformation lies this 5-dimensional framework.</span><br />
                  COIREA's 5-Pillar Framework merges the foundational systems of any organization — enabling executive teams to:
                </p>
                
                <ul className="space-y-4 text-muted-foreground font-body">
                  <li className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="text-lg">Cultivate purpose-driven clarity and renewed focus</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-sage rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="text-lg">Strengthen leadership accountability across levels</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-copper rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="text-lg">Build adaptive, high-performing, and connected teams</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="text-lg">Unlock culture as a strategic asset</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-sage rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="text-lg">Integrate well-being into the core business rhythm for long-term impact</span>
                  </li>
                </ul>

                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mt-12">
                  <div className="grid md:grid-cols-2 gap-6 text-primary font-body leading-relaxed">
                    <div>
                      <p className="mb-3"><span className="font-semibold">Tailored KPIs:</span> Measure progress and ROI</p>
                      <p className="mb-3"><span className="font-semibold">Team Performance Data:</span> Productivity, cohesion, and outcomes</p>
                      <p><span className="font-semibold">Retention & Renewal Risk:</span> Proactive employment indicators</p>
                    </div>
                    <div>
                      <p className="mb-3"><span className="font-semibold">Leadership Maturity Index:</span> Decision-making growth tracking</p>
                      <p className="mb-3"><span className="font-semibold">Long-Term Evolution Maps:</span> Structural and cultural milestones</p>
                      <p><span className="font-semibold">Strategic Investment:</span> People initiatives to business outcomes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Dashboard Insights Section */}
        <section className="py-24 px-6" style={{ backgroundColor: '#F6F0E9' }}>
          <div className="container mx-auto max-w-7xl">
            <div className="flex gap-12">
              {/* Left Navigation Sidebar */}
              <div className="hidden lg:block w-64 flex-shrink-0">
                <div className="bg-white border border-primary/10 rounded-2xl shadow-lg overflow-hidden sticky top-8">
                  <div className="p-6 border-b border-primary/10" style={{ backgroundColor: '#FAF8F6' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-md">
                        <span className="text-white font-bold">C</span>
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-primary text-sm">COIREA</h4>
                        <p className="text-xs text-primary/60">Regenerative Consultancy</p>
                      </div>
                    </div>
                  </div>
                  
                  <nav className="p-4">
                    <div className="space-y-2">
                      {[
                        { 
                          icon: <div className="w-4 h-4 bg-sage rounded-full flex items-center justify-center"><div className="w-2 h-2 bg-white rounded-full"></div></div>, 
                          label: "Health Overview", 
                          active: true 
                        },
                        { 
                          icon: <div className="w-4 h-4 bg-primary/20 rounded flex items-center justify-center"><div className="w-2 h-2 bg-primary/60 rounded"></div></div>, 
                          label: "KPI Tracking" 
                        },
                        { 
                          icon: <div className="w-4 h-4 bg-copper/20 rounded flex items-center justify-center"><div className="w-2 h-2 bg-copper rounded"></div></div>, 
                          label: "Survey Insights" 
                        },
                        { 
                          icon: <div className="w-4 h-4 bg-sage/20 rounded flex items-center justify-center"><div className="w-2 h-2 bg-sage rounded"></div></div>, 
                          label: "Check-Ins & Pulse" 
                        },
                        { 
                          icon: <div className="w-4 h-4 bg-primary/20 rounded flex items-center justify-center"><div className="w-2 h-2 bg-primary rounded"></div></div>, 
                          label: "1:1 & Coaching" 
                        },
                        { 
                          icon: <div className="w-4 h-4 bg-copper/20 rounded flex items-center justify-center"><div className="w-2 h-2 bg-copper rounded"></div></div>, 
                          label: "Meeting Insights" 
                        },
                        { 
                          icon: <div className="w-4 h-4 bg-sage/20 rounded flex items-center justify-center"><div className="w-2 h-2 bg-sage rounded"></div></div>, 
                          label: "Evolution Journal" 
                        },
                        { 
                          icon: <div className="w-4 h-4 bg-primary/20 rounded flex items-center justify-center"><div className="w-2 h-2 bg-primary rounded"></div></div>, 
                          label: "Strategic Planning" 
                        }
                      ].map((item, index) => (
                        <div key={index} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all duration-200 ${
                          item.active 
                            ? 'bg-primary text-white shadow-md' 
                            : 'text-primary/70 hover:bg-primary/5 hover:text-primary'
                        }`}>
                          {item.icon}
                          <span className="text-sm font-medium">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </nav>
                  
                  <div className="p-4 border-t border-primary/10" style={{ backgroundColor: '#FAF8F6' }}>
                    <div className="flex items-center gap-3 px-3 py-2">
                      <div className="w-4 h-4 bg-primary/20 rounded flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary rounded"></div>
                      </div>
                      <span className="text-sm font-medium text-primary/60">Platform v1.0</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Dashboard Content */}
              <div className="flex-1">
                <div className="grid lg:grid-cols-3 gap-12 items-start">
                  {/* Dashboard Visual */}
                  <div className="lg:col-span-2">
                    <div className="bg-white border border-primary/10 rounded-2xl shadow-2xl overflow-hidden">
                      {/* Dashboard Header */}
                      <div className="p-6 border-b border-primary/10" style={{ backgroundColor: '#FAF8F6' }}>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-2xl font-display font-bold text-primary">COIREA Evolution Dashboard</h3>
                            <p className="text-primary/70">Elevating business through human-centered transformation</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <input 
                              type="text" 
                              placeholder="Search insights..." 
                              className="bg-white border border-primary/20 rounded-lg px-4 py-2 text-sm w-48 focus:border-primary focus:outline-none"
                            />
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-sage rounded-full animate-pulse"></div>
                              <span className="text-sm text-primary/60">Vitality: High</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Dashboard Content */}
                      <div className="p-8">
                        <div className="mb-8">
                          <h4 className="text-xl font-display font-semibold text-primary mb-2">Organizational Vitality Index (OVI)</h4>
                          <p className="text-primary/60 mb-6">Real-time pulse of organizational health</p>
                          
                          {/* Main Score Circle */}
                          <div className="flex justify-center mb-8">
                            <div className="relative w-40 h-40">
                              <div className="absolute inset-0 bg-gradient-to-br from-sage/10 to-primary/5 rounded-full"></div>
                              <svg className="w-40 h-40 transform -rotate-90 relative z-10" viewBox="0 0 36 36">
                                <path className="text-primary/10" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path className="text-sage" strokeWidth="3" strokeDasharray="52.6, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                              </svg>
                              <div className="absolute inset-0 flex items-center justify-center z-20">
                                <div className="text-center">
                                  <div className="text-3xl font-bold text-primary">52.6</div>
                                  <div className="text-sm text-primary/60">Vitality Score</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* 5 Pillars Metrics */}
                        <div className="grid grid-cols-5 gap-6">
                          {[
                            { name: "Purpose", score: 46, color: "#D2691E", bgColor: "bg-copper/10", description: "Clarity and storytelling coherence" },
                            { name: "Leadership", score: 52, color: "#8FBC8F", bgColor: "bg-sage/10", description: "Presence and compassionate feedback" },
                            { name: "Collaboration", score: 50, color: "#CD853F", bgColor: "bg-copper/10", description: "Energy, trust, and communication flow" },
                            { name: "Culture", score: 54, color: "#2F4F4F", bgColor: "bg-primary/10", description: "Values alignment and team energy" },
                            { name: "Well-Being", score: 61, color: "#5F8A5F", bgColor: "bg-sage/10", description: "Energy levels and mindfulness adoption" }
                          ].map((pillar, index) => (
                            <div key={index} className="text-center">
                              <div className={`relative w-20 h-20 mx-auto mb-3 rounded-full ${pillar.bgColor} p-2`}>
                                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                  <path className="text-primary/10" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                  <path style={{ color: pillar.color }} strokeWidth="3" strokeDasharray={`${pillar.score}, 100`} strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <span className="text-lg font-bold text-primary">{pillar.score}</span>
                                </div>
                              </div>
                              <div className="text-sm font-semibold text-primary mb-1">{pillar.name}</div>
                              <div className="text-xs text-primary/60 leading-tight">{pillar.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center mt-6">
                      <p className="text-sm text-primary/60 font-body">
                        COIREA Evolution Dashboard | Organizational Vitality in Real-Time
                      </p>
                    </div>
                  </div>

                  {/* Messaging Content */}
                  <div className="lg:col-span-1">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6 leading-tight">
                      A Living System,<br />
                      <span className="text-primary/80 italic">Not a Static Report</span>
                    </h2>
                    
                    <div className="space-y-6 text-base text-primary/70 font-body leading-relaxed">
                      <p className="text-lg font-medium text-primary">
                        We combine <span className="font-bold">Organic and Artificial Intelligence</span> to track your company's evolution in real time — blending data with intuition, metrics with meaning.
                      </p>
                      
                      <p>
                        All our programs are designed as <span className="font-semibold text-primary">living systems</span> — continuously tracked through our proprietary dashboard.
                      </p>
                      <p>
                        We don't just deliver experiences; we deliver <span className="font-semibold text-primary">measurable evolution</span>.
                      </p>
                      
                      <div className="my-6">
                        <p className="text-primary font-semibold mb-4">You'll gain real-time insight into your organization's vitality through key indicators:</p>
                        
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0"></div>
                            <span><span className="font-semibold text-primary">Organizational Vitality Index (OVI)</span></span>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-copper rounded-full mt-2 flex-shrink-0"></div>
                            <span><span className="font-semibold text-primary">Purpose, Leadership, Collaboration, Culture, and Well-Being</span> metrics</span>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span><span className="font-semibold text-primary">Check-ins, pulse data, and team sentiment</span></span>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0"></div>
                            <span><span className="font-semibold text-primary">Strategic evolution maps</span> for long-term growth</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/60 border-l-4 border-copper p-4 rounded-r-lg shadow-sm">
                        <p className="text-primary italic text-sm font-medium">
                          Each transformation is tracked so we can adjust interventions, surface blind spots, and amplify breakthroughs — with data-backed precision.
                        </p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-8 bg-white/80 border border-primary/20 rounded-xl p-6 shadow-lg">
                      <h3 className="text-lg font-display font-bold text-primary mb-3">
                        Want to see your organization's evolution in real-time?
                      </h3>
                      <p className="text-sm text-primary/70 font-body mb-4">
                        All offerings are tailored and tracked through our Regenerative Evolution System.
                      </p>
                      <Button className="bg-primary hover:bg-primary/90 text-white w-full shadow-md hover:shadow-lg transition-all duration-200">
                        Begin Your Journey <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
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