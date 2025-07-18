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
        {/* Hero Section with Nature-Inspired Background */}
        <section className="relative py-32 px-6 overflow-hidden bg-gradient-nature">
          {/* Nature-Inspired Background Elements */}
          <div className="absolute inset-0">
            {/* Mountain Silhouettes */}
            <div className="absolute bottom-0 left-0 w-full h-64">
              <svg viewBox="0 0 1200 400" className="absolute bottom-0 w-full h-full">
                {/* Back Mountains */}
                <path 
                  d="M0,400 L0,300 Q150,200 300,250 Q450,300 600,220 Q750,140 900,180 Q1050,220 1200,160 L1200,400 Z" 
                  fill="hsl(var(--olive-green) / 0.15)"
                />
                {/* Middle Mountains */}
                <path 
                  d="M0,400 L0,350 Q200,280 400,320 Q600,360 800,300 Q1000,240 1200,280 L1200,400 Z" 
                  fill="hsl(var(--olive-green) / 0.25)"
                />
                {/* Front Mountains */}
                <path 
                  d="M0,400 L0,380 Q300,340 600,370 Q900,400 1200,350 L1200,400 Z" 
                  fill="hsl(var(--olive-green) / 0.35)"
                />
              </svg>
            </div>

            {/* Organic Flowing Shapes */}
            <div className="absolute top-20 right-10 w-96 h-96 opacity-10">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <path 
                  d="M50,100 C50,50 70,30 100,50 C130,30 150,50 150,100 C150,150 130,170 100,150 C70,170 50,150 50,100 Z" 
                  fill="hsl(var(--sage))"
                  className="animate-pulse"
                />
              </svg>
            </div>

            <div className="absolute top-40 left-20 w-64 h-64 opacity-10">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <path 
                  d="M100,20 C140,40 160,80 140,120 C120,160 80,180 40,160 C20,140 20,100 40,80 C60,40 80,20 100,20 Z" 
                  fill="hsl(var(--copper))"
                  className="animate-pulse"
                  style={{ animationDelay: '1s' }}
                />
              </svg>
            </div>

            {/* Leaf-like Patterns */}
            <div className="absolute top-32 right-32 opacity-20">
              <svg width="60" height="80" viewBox="0 0 60 80">
                <path 
                  d="M30,5 C45,15 55,35 50,55 C45,75 30,80 30,80 C30,80 15,75 10,55 C5,35 15,15 30,5 Z" 
                  fill="hsl(var(--olive-green))"
                />
                <path 
                  d="M30,10 L30,75" 
                  stroke="hsl(var(--olive-green) / 0.5)" 
                  strokeWidth="1"
                />
              </svg>
            </div>

            <div className="absolute bottom-32 left-32 opacity-20 transform rotate-45">
              <svg width="40" height="60" viewBox="0 0 40 60">
                <path 
                  d="M20,5 C30,10 35,25 32,40 C29,55 20,60 20,60 C20,60 11,55 8,40 C5,25 10,10 20,5 Z" 
                  fill="hsl(var(--sage))"
                />
              </svg>
            </div>

            {/* Soft Horizon Line */}
            <div className="absolute bottom-16 left-0 w-full h-px bg-gradient-to-r from-transparent via-olive-green/30 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-20">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary mb-12 leading-[1.1]">
                We Don't Build Static Structures —<br />
                <span className="italic text-olive-green/80">We Design Living Frameworks for Regenerative Business</span>
              </h1>
              
              <div className="max-w-5xl mx-auto space-y-8">
                <p className="text-lg md:text-xl text-primary/70 font-body leading-relaxed">
                  At the core of COIREA's work lies a dynamic framework that evolves with your company. 
                  Our 5-Pillar System restores clarity, coherence, and long-term vitality from the inside out.
                </p>
              </div>
              
              <div className="w-32 h-1 bg-copper mx-auto rounded-full mt-12"></div>
            </div>
          </div>
        </section>

        {/* 5-Pillar Framework Section */}
        <section className="py-24 px-6 bg-background">
          <div className="container mx-auto max-w-6xl">
            {/* Pillar Icons Horizontal Display */}
            <div className="flex justify-center items-end gap-6 md:gap-8 mb-20">
              {pillars.map((pillar, index) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className={`w-12 h-24 md:w-16 md:h-32 bg-gradient-to-t ${
                      pillar.color === 'text-olive-green' ? 'from-olive-green/20 to-olive-green' : 
                      pillar.color === 'text-sage' ? 'from-sage/20 to-sage' :
                      pillar.color === 'text-copper' ? 'from-copper/20 to-copper' :
                      'from-primary/20 to-primary'
                    } rounded-t-full mb-4 group-hover:scale-105 transition-all duration-300 shadow-lg relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10"></div>
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                        <IconComponent className="w-4 h-4 md:w-6 md:h-6 text-white" />
                      </div>
                    </div>
                    <p className="text-xs md:text-sm font-display font-semibold text-primary mb-2">{pillar.title}</p>
                    <p className="text-xs text-muted-foreground font-body max-w-20 mx-auto leading-tight">{pillar.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Framework Description */}
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-4xl font-display font-bold text-primary mb-12">
                The COIREA 5-Pillar Framework
              </h3>
              
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
              <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 shadow-lg">
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

            {/* CTA */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-3 bg-olive-green/10 px-6 py-3 rounded-full border border-olive-green/20">
                <ArrowRight className="w-4 h-4 text-olive-green" />
                <span className="text-primary font-medium">How do we track it in real time?</span>
                <ArrowRight className="w-4 h-4 text-olive-green" />
              </div>
              <p className="text-sage font-semibold mt-2">See the COIREA Evolution Dashboard →</p>
            </div>
          </div>
        </section>

        {/* Dashboard Preview Section */}
        <section className="py-24 px-6 bg-warm-beige">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
                Real-Time Organizational Intelligence
              </h2>
              <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
                Track your transformation through our proprietary COIREA Evolution Dashboard — 
                where data meets wisdom for sustainable growth.
              </p>
            </div>

            {/* Dashboard Mockup */}
            <div className="bg-white border border-primary/10 rounded-2xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
              {/* Dashboard Header */}
              <div className="p-6 border-b border-primary/10 bg-aura-pearl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary">COIREA Evolution Dashboard</h3>
                    <p className="text-primary/70">Elevating business through human-centered transformation</p>
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
                <div className="grid grid-cols-5 gap-4">
                  {[
                    { name: "Purpose", score: 46, color: "olive-green", description: "Clarity and storytelling coherence" },
                    { name: "Leadership", score: 52, color: "sage", description: "Presence and compassionate feedback" },
                    { name: "Collaboration", score: 50, color: "copper", description: "Energy, trust, and communication flow" },
                    { name: "Culture", score: 54, color: "primary", description: "Values alignment and team energy" },
                    { name: "Well-Being", score: 61, color: "sage", description: "Energy levels and mindfulness adoption" }
                  ].map((pillar, index) => (
                    <div key={index} className="text-center">
                      <div className={`w-12 h-12 bg-${pillar.color}/10 rounded-lg mx-auto mb-3 flex items-center justify-center border border-${pillar.color}/20`}>
                        <span className={`text-${pillar.color} font-bold text-lg`}>{pillar.score}</span>
                      </div>
                      <h5 className="font-semibold text-primary text-sm mb-1">{pillar.name}</h5>
                      <p className="text-xs text-muted-foreground leading-tight">{pillar.description}</p>
                    </div>
                  ))}
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

            {/* Other Offerings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {offerings.slice(1).map((offering, index) => {
                const IconComponent = offering.icon;
                return (
                  <Card key={offering.id} className="p-6 hover:shadow-elegant transition-all duration-500 group border-0 bg-card/60 backdrop-blur-sm hover:scale-[1.02] relative overflow-hidden">
                    {/* Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`text-xs font-medium bg-${offering.accent}/10 text-${offering.accent} px-2 py-1 rounded-full`}>
                        {offering.badge}
                      </span>
                    </div>

                    {/* Header */}
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 bg-${offering.accent}/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-6 h-6 text-${offering.accent}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-display font-semibold text-primary group-hover:text-primary-light transition-colors">
                          {offering.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{offering.duration}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground font-body leading-relaxed mb-4 text-sm">
                      {offering.description}
                    </p>

                    {/* Features */}
                    <div>
                      <h4 className="text-xs font-body font-semibold text-primary mb-3 uppercase tracking-wide">
                        Key Areas
                      </h4>
                      <div className="space-y-2">
                        {offering.keyAreas.map((area, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className={`w-1.5 h-1.5 bg-${offering.accent} rounded-full`}></div>
                            <span className="text-xs text-foreground/80 font-body">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Enhanced CTA Section */}
            <div className="mt-20 text-center">
              <div className="relative max-w-4xl mx-auto py-16 px-8">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-sage/5 to-primary/5 rounded-3xl blur-3xl transform scale-110"></div>
                
                <div className="relative space-y-8">
                  <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/10 shadow-sm">
                    <div className="w-2 h-2 bg-sage rounded-full animate-ping"></div>
                    <span className="text-primary font-medium">Ready to Transform?</span>
                    <div className="w-2 h-2 bg-primary rounded-full animate-ping animation-delay-200"></div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-primary leading-tight">
                    Want to see your organization's<br />
                    <span className="bg-gradient-to-r from-sage to-primary bg-clip-text text-transparent">
                      evolution in real-time?
                    </span>
                  </h3>
                  
                  <p className="text-lg text-primary/80 font-body leading-relaxed max-w-2xl mx-auto">
                    All offerings are tailored and tracked through our 
                    <span className="font-semibold text-primary"> Regenerative Evolution System</span>.
                  </p>
                  
                  {/* CTA Button */}
                  <div className="relative inline-block group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-sage to-primary rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                    
                    <Button className="relative bg-gradient-to-r from-primary to-sage hover:from-sage hover:to-primary text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border-0">
                      <span className="flex items-center gap-3">
                        Begin Your Journey
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </div>
                  
                  <p className="text-sm text-primary/50 font-body">
                    Join organizations already transforming with data-driven precision
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 px-6 bg-warm-beige">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
                Let's Explore Your Transformation Journey
              </h2>
              <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
                Ready to begin? Share your vision and challenges with us, and we'll craft a path forward that honors your organization's unique evolution.
              </p>
            </div>

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
                  <Button className="bg-gradient-to-r from-primary to-sage hover:from-sage hover:to-primary text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border-0">
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </span>
                  </Button>
                  
                  <p className="text-sm text-muted-foreground mt-4">
                    We'll respond within 24 hours to begin our conversation.
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
