import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Brain, 
  Leaf, 
  Target, 
  Heart, 
  Compass, 
  ArrowRight, 
  Building, 
  Users, 
  Lightbulb, 
  Star,
  BarChart3,
  Eye,
  Activity,
  TrendingUp,
  Shield,
  Zap,
  Send,
  Check
} from "lucide-react";

const Offerings = () => {
  const pillars = [
    {
      icon: Target,
      title: "Purpose",
      description: "Strategic clarity & narrative alignment",
      color: "text-olive-green"
    },
    {
      icon: Brain,
      title: "Leadership", 
      description: "Conscious accountability & presence",
      color: "text-primary"
    },
    {
      icon: Compass,
      title: "Collaboration",
      description: "Trust, flow & co-creation",
      color: "text-copper"
    },
    {
      icon: Heart,
      title: "Culture",
      description: "Values activated in behavior",
      color: "text-sage"
    },
    {
      icon: Shield,
      title: "Well-Being",
      description: "Energy, resilience & sustainability",
      color: "text-olive-green"
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
      icon: Building,
      accent: "sage"
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
      icon: Users,
      accent: "copper"
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
      icon: Lightbulb,
      accent: "primary"
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
      icon: TrendingUp,
      accent: "olive-green"
    }
  ];

  const kpiMetrics = [
    {
      icon: BarChart3,
      title: "Tailored KPIs",
      description: "Custom metrics for each pillar"
    },
    {
      icon: Eye,
      title: "Team Performance Insights",
      description: "Productivity, cohesion, outcomes"
    },
    {
      icon: TrendingUp,
      title: "Leadership Maturity Index",
      description: "Decision-making growth tracking"
    },
    {
      icon: Compass,
      title: "Long-Term Evolution Maps",
      description: "Structural & cultural milestones"
    },
    {
      icon: Activity,
      title: "Well-being & Retention Risk",
      description: "Proactive burnout signals"
    },
    {
      icon: Zap,
      title: "Strategic Investment in People",
      description: "Linking human capital to outcomes"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-aura-pearl to-warm-beige">
          <div className="container mx-auto px-6 text-center max-w-6xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary mb-8 leading-tight">
              We Don't Offer Quick Fixes —
              <br />
              <span className="text-olive-green">We Rewire Organizations</span>
            </h1>
            <p className="text-lg md:text-xl text-primary/70 font-body leading-relaxed max-w-4xl mx-auto mb-12">
              At the core of COIREA's work lies a dynamic framework that evolves with your company. 
              Our 5-Pillar System restores clarity, coherence, and long-term vitality from the inside out.
            </p>
            <Button size="lg" className="bg-olive-green hover:bg-olive-green/90 text-white px-8 py-4 text-lg">
              Discover Your Path Forward
            </Button>
          </div>
        </section>

        {/* 5-Pillar Framework Section */}
        <section className="py-24 px-6 bg-background">
          <div className="container mx-auto max-w-6xl">
            {/* Framework Header */}
            <div className="text-center mb-16">
              <h3 className="text-2xl md:text-4xl font-display font-bold text-primary mb-12">
                The COIREA 5-Pillar Framework
              </h3>
            </div>

            {/* Framework Image */}
            <div className="flex justify-center mb-16">
              <div className="relative group max-w-6xl w-full">
                {/* Enhanced shadow and glow effects */}
                <div className="absolute -inset-12 bg-gradient-to-r from-primary/5 via-accent/10 to-secondary/5 rounded-3xl blur-3xl opacity-60 group-hover:opacity-80 transition-all duration-700"></div>
                <div className="absolute -inset-6 bg-gradient-to-br from-background/60 via-neutral-warm/30 to-background/60 rounded-2xl blur-xl"></div>
                
                {/* Main image container */}
                <div className="relative bg-gradient-to-br from-background/95 via-background/98 to-background/95 backdrop-blur-sm rounded-2xl p-2 md:p-4 border border-primary/15 shadow-elegant group-hover:shadow-warm transition-all duration-700">
                  <img 
                    src="/lovable-uploads/ca4817cc-5cf5-4d9a-bee8-380ad36d9386.png" 
                    alt="COIREA 5-Pillar Framework" 
                    className="w-full h-auto rounded-xl shadow-soft group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Framework Description */}
            <div className="text-center mb-12">
              <div className="text-left max-w-4xl mx-auto mb-12">
                <h4 className="text-xl font-display font-semibold text-primary mb-6">
                  This framework empowers leadership teams to:
                </h4>
                
                <ul className="space-y-4 text-muted-foreground font-body">
                  <li className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-sage mt-1 flex-shrink-0" />
                    <span className="text-lg">Align company purpose with everyday decisions</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-copper mt-1 flex-shrink-0" />
                    <span className="text-lg">Develop accountable, values-driven leadership</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-lg">Build resilient, collaborative, high-performing teams</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-olive-green mt-1 flex-shrink-0" />
                    <span className="text-lg">Activate culture as a strategic growth driver</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-sage mt-1 flex-shrink-0" />
                    <span className="text-lg">Integrate well-being into long-term operational rhythm</span>
                  </li>
                </ul>
              </div>

              {/* KPI Measurement Grid */}
              <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 shadow-lg max-w-6xl mx-auto">
                <h4 className="text-xl font-display font-semibold text-primary mb-6">
                  Measurement + KPI Tracking
                </h4>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {kpiMetrics.map((metric, index) => {
                    const IconComponent = metric.icon;
                    return (
                      <div key={index} className="flex items-start gap-4 p-4 bg-background/50 rounded-xl border border-primary/5 hover:border-primary/20 transition-all duration-300">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-primary text-sm mb-1">{metric.title}</h5>
                          <p className="text-xs text-muted-foreground">{metric.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Dashboard Introduction Section */}
        <section className="py-24 px-6 bg-warm-beige">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
                How Do We Track It in Real Time?
              </h2>
              <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto mb-8">
                See the COIREA Evolution Dashboard — where data meets wisdom for sustainable growth. 
                Track your transformation through real-time organizational intelligence.
              </p>
              <div className="w-24 h-0.5 bg-gradient-to-r from-sage to-primary mx-auto"></div>
            </div>

            {/* Dashboard Mockup with Left Sidebar */}
            <div className="bg-white border border-primary/10 rounded-2xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
              <div className="flex">
                {/* Left Sidebar */}
                <div className="w-64 bg-aura-pearl border-r border-primary/10 p-6">
                  <div className="mb-8">
                    <h3 className="text-lg font-display font-bold text-primary mb-2">COIREA</h3>
                    <p className="text-sm text-primary/60">Evolution Dashboard</p>
                  </div>
                  
                  <nav className="space-y-2">
                    {[
                      { name: "Overview", active: true, icon: BarChart3 },
                      { name: "5 Pillars", active: false, icon: Target },
                      { name: "Team Insights", active: false, icon: Users },
                      { name: "Leadership", active: false, icon: Brain },
                      { name: "Culture Metrics", active: false, icon: Heart },
                      { name: "Well-being", active: false, icon: Shield },
                      { name: "Reports", active: false, icon: TrendingUp }
                    ].map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={index} className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                          item.active 
                            ? 'bg-sage/10 text-sage border border-sage/20' 
                            : 'text-primary/60 hover:bg-primary/5'
                        }`}>
                          <IconComponent className="w-4 h-4" />
                          <span className="text-sm font-medium">{item.name}</span>
                        </div>
                      );
                    })}
                  </nav>
                </div>

                {/* Main Dashboard Content */}
                <div className="flex-1">
                  {/* Dashboard Header */}
                  <div className="p-6 border-b border-primary/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-display font-bold text-primary">Overview</h3>
                        <p className="text-primary/70">Real-time organizational health metrics</p>
                      </div>
                      <div className="flex items-center gap-4">
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
                        <div className="relative w-32 h-32">
                          <div className="absolute inset-0 bg-gradient-to-br from-sage/10 to-primary/5 rounded-full"></div>
                          <svg className="w-32 h-32 transform -rotate-90 relative z-10" viewBox="0 0 36 36">
                            <path className="text-primary/10" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path className="text-sage" strokeWidth="3" strokeDasharray="52.6, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary">52.6</div>
                              <div className="text-xs text-primary/60">Vitality Score</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 5 Pillars Metrics */}
                    <div className="grid grid-cols-5 gap-3">
                      {[
                        { name: "Purpose", score: 46, color: "olive-green", description: "Clarity & storytelling" },
                        { name: "Leadership", score: 52, color: "sage", description: "Presence & feedback" },
                        { name: "Collaboration", score: 50, color: "copper", description: "Trust & flow" },
                        { name: "Culture", score: 54, color: "primary", description: "Values alignment" },
                        { name: "Well-Being", score: 61, color: "sage", description: "Energy & mindfulness" }
                      ].map((pillar, index) => (
                        <div key={index} className="text-center">
                          <div className={`w-10 h-10 bg-${pillar.color}/10 rounded-lg mx-auto mb-2 flex items-center justify-center border border-${pillar.color}/20`}>
                            <span className={`text-${pillar.color} font-bold text-sm`}>{pillar.score}</span>
                          </div>
                          <h5 className="font-semibold text-primary text-xs mb-1">{pillar.name}</h5>
                          <p className="text-xs text-muted-foreground leading-tight">{pillar.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transformational Offerings Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-6 leading-tight">
                Transformational Offerings for Regenerative Growth
              </h2>
              
              <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto mb-8">
                We co-create regenerative pathways tailored to your organization's unique rhythm and evolution.
              </p>
              
              <div className="w-24 h-0.5 bg-gradient-warm mx-auto"></div>
            </div>

            {/* Signature Program - Full Width */}
            <div className="mb-16 max-w-6xl mx-auto">
              <Card className="p-10 hover:shadow-elegant transition-all duration-500 group border-0 bg-card/60 backdrop-blur-sm hover:scale-[1.01] relative overflow-hidden">
                {/* Signature Badge */}
                <div className="absolute top-6 right-6">
                  <div className="flex items-center space-x-2 bg-sage/15 px-4 py-2 rounded-full">
                    <Star className="w-4 h-4 text-sage" />
                    <span className="text-sm font-medium text-sage">Signature Program</span>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    {/* Header */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-sage/20 to-sage rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Building className="w-10 h-10 text-sage" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-display font-semibold text-primary group-hover:text-primary-light transition-colors">
                          Organizational Transformation
                        </h3>
                        <div className="flex items-center space-x-2 mt-3">
                          <span className="text-sm text-sage font-medium bg-sage/10 px-3 py-1 rounded-full">
                            Long-Term Partnership
                          </span>
                          <span className="text-sm text-muted-foreground">
                            6–18 months
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground font-body leading-relaxed mb-6 text-lg">
                      Holistic restructuring of systems, culture, and leadership — aligned with your organization's purpose, people, and performance. We build systems that scale and last.
                    </p>
                  </div>

                  <div>
                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-body font-semibold text-primary mb-4 uppercase tracking-wide">
                        Key Areas
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {["Strategic Alignment", "Culture Architecture", "Conscious Leadership", "Change Implementation"].map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-sage rounded-full"></div>
                            <span className="text-foreground/80 font-body">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Other Offerings Grid - Fixed Alignment */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {offerings.slice(1).map((offering, index) => {
                const IconComponent = offering.icon;
                return (
                  <Card key={offering.id} className="p-6 hover:shadow-elegant transition-all duration-500 group border-0 bg-card/60 backdrop-blur-sm hover:scale-[1.02] relative overflow-hidden h-full flex flex-col">
                    {/* Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`text-xs font-medium bg-${offering.accent}/10 text-${offering.accent} px-2 py-1 rounded-full whitespace-nowrap`}>
                        {offering.badge}
                      </span>
                    </div>

                    {/* Header */}
                    <div className="flex items-start space-x-3 mb-4 pr-20 mt-8">
                      <div className={`w-12 h-12 bg-${offering.accent}/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <IconComponent className={`w-6 h-6 text-${offering.accent}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-display font-semibold text-primary group-hover:text-primary-light transition-colors leading-tight mb-1">
                          {offering.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{offering.duration}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground font-body leading-relaxed mb-6 text-sm flex-grow">
                      {offering.description}
                    </p>

                    {/* Features */}
                    <div className="mt-auto">
                      <h4 className="text-xs font-body font-semibold text-primary mb-3 uppercase tracking-wide">
                        Key Areas
                      </h4>
                      <div className="space-y-2">
                        {offering.keyAreas.map((area, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className={`w-1.5 h-1.5 bg-${offering.accent} rounded-full flex-shrink-0`}></div>
                            <span className="text-xs text-foreground/80 font-body">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Combined CTA and Contact Form Section */}
        <section className="py-24 px-6 bg-warm-beige">
          <div className="container mx-auto max-w-4xl">
            {/* Enhanced CTA Header */}
            <div className="text-center mb-16">
              <div className="relative max-w-4xl mx-auto py-8 px-8">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-sage/5 to-primary/5 rounded-3xl blur-3xl transform scale-110"></div>
                
                <div className="relative space-y-6">
                  <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/10 shadow-sm">
                    <div className="w-2 h-2 bg-sage rounded-full animate-ping"></div>
                    <span className="text-primary font-medium">Ready to Transform?</span>
                    <div className="w-2 h-2 bg-primary rounded-full animate-ping animation-delay-200"></div>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-primary leading-tight">
                    Let's Explore Your<br />
                    <span className="bg-gradient-to-r from-sage to-primary bg-clip-text text-transparent">
                      Transformation Journey
                    </span>
                  </h2>
                  
                  <p className="text-lg text-primary/80 font-body leading-relaxed max-w-2xl mx-auto">
                    Ready to begin? Share your vision and challenges with us, and we'll craft a path forward that honors your organization's unique evolution. All offerings are tailored and tracked through our 
                    <span className="font-semibold text-primary"> Regenerative Evolution System</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Name *</label>
                    <Input 
                      placeholder="Your full name" 
                      className="border-primary/20 focus:border-sage transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Email *</label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="border-primary/20 focus:border-sage transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Organization</label>
                    <Input 
                      placeholder="Company/Organization name" 
                      className="border-primary/20 focus:border-sage transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Role/Title</label>
                    <Input 
                      placeholder="Your role or title" 
                      className="border-primary/20 focus:border-sage transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Areas of Interest</label>
                  <div className="grid md:grid-cols-2 gap-4 mt-3">
                    {[
                      "Organizational Transformation",
                      "Team Retreats & Workshops", 
                      "Leadership Coaching",
                      "Regenerative Strategy Consulting",
                      "5-Pillar Framework Assessment",
                      "COIREA Evolution Dashboard"
                    ].map((interest, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox id={`interest-${index}`} className="border-primary/30" />
                        <label htmlFor={`interest-${index}`} className="text-sm text-muted-foreground">
                          {interest}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Tell us about your transformation vision
                  </label>
                  <Textarea 
                    placeholder="What challenges are you facing? What transformation are you envisioning? What drew you to COIREA's approach?"
                    rows={6}
                    className="border-primary/20 focus:border-sage transition-colors"
                  />
                </div>

                <div className="text-center pt-4">
                  <div className="relative inline-block group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-sage to-primary rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                    
                    <Button className="relative bg-gradient-to-r from-primary to-sage hover:from-sage hover:to-primary text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border-0">
                      <span className="flex items-center gap-3">
                        <Send className="w-5 h-5" />
                        Begin Your Journey
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-4">
                    We'll respond within 24 hours to begin our conversation.
                  </p>
                  
                  <p className="text-sm text-primary/50 font-body mt-2">
                    Join organizations already transforming with data-driven precision
                  </p>
                </div>
              </form>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Offerings;
