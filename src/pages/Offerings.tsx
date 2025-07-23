import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
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
  Check,
  MessageCircle,
  Calendar
} from "lucide-react";

const Offerings = () => {
  const navigate = useNavigate();

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
            <p className="text-lg md:text-xl text-primary/70 font-body leading-relaxed max-w-4xl mx-auto mb-8">
              Systems are misaligned. People are burned out. Leadership is ready to evolve.
              This framework was designed to regenerate the heart of organizations by bridging purpose, culture, and human vitality — all while tracking what truly moves the needle.
            </p>
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

            {/* Framework Description - Moved before image */}
            <div className="text-center mb-16">
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

            {/* KPI Measurement Section */}
            <div className="text-center">
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
                See the COIREA Evolution Dashboard — where insight meets action.
                Track how your organization evolves in real time across the five core pillars of regenerative business. Using a blend of methodologies—including surveys, interviews, behavioral metrics, and well-being diagnostics—the dashboard translates qualitative and quantitative data into clear, actionable insights. It's more than a snapshot—it's a compass for sustainable, people-centered growth.
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

            {/* Signature Program - Mobile Optimized */}
            <div className="mb-16 max-w-6xl mx-auto">
              <Card className="p-6 md:p-10 hover:shadow-elegant transition-all duration-500 group border-0 bg-card/60 backdrop-blur-sm hover:scale-[1.01] relative overflow-hidden">
                {/* Signature Badge - Mobile Optimized */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6">
                  <div className="flex items-center space-x-2 bg-sage/15 px-3 py-1.5 md:px-4 md:py-2 rounded-full">
                    <Star className="w-3 h-3 md:w-4 md:h-4 text-sage" />
                    <span className="text-xs md:text-sm font-medium text-sage">Signature Program</span>
                  </div>
                </div>

                {/* Mobile-First Stacked Layout */}
                <div className="space-y-6 md:grid md:grid-cols-2 md:gap-8 md:items-center md:space-y-0">
                  <div className="space-y-4 md:space-y-6">
                    {/* Header - Mobile Optimized */}
                    <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-sage/20 to-sage rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto md:mx-0">
                        <Building className="w-8 h-8 md:w-10 md:h-10 text-sage" />
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-display font-semibold text-primary group-hover:text-primary-light transition-colors">
                          Organizational Transformation
                        </h3>
                        {/* Mobile-Optimized Badge Layout */}
                        <div className="flex flex-col space-y-2 md:flex-row md:items-center md:space-y-0 md:space-x-2 mt-3">
                          <span className="text-sm text-sage font-medium bg-sage/10 px-3 py-1 rounded-full w-fit mx-auto md:mx-0">
                            Long-Term Partnership
                          </span>
                          <span className="text-sm text-muted-foreground text-center md:text-left">
                            6–18 months
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground font-body leading-relaxed text-base md:text-lg text-center md:text-left">
                      Holistic restructuring of systems, culture, and leadership — aligned with your organization's purpose, people, and performance. We build systems that scale and last.
                    </p>
                  </div>

                  <div>
                    {/* Features - Mobile Optimized */}
                    <div>
                      <h4 className="text-sm font-body font-semibold text-primary mb-4 uppercase tracking-wide text-center md:text-left">
                        Key Areas
                      </h4>
                      {/* Single Column on Mobile, Two Columns on Desktop */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                        {["Strategic Alignment", "Culture Architecture", "Conscious Leadership", "Change Implementation"].map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3 justify-center md:justify-start">
                            <div className="w-2 h-2 bg-sage rounded-full flex-shrink-0"></div>
                            <span className="text-foreground/80 font-body text-sm md:text-base">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Other Offerings Grid - Mobile Optimized */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {offerings.slice(1).map((offering, index) => {
                const IconComponent = offering.icon;
                return (
                  <Card key={offering.id} className="p-6 md:p-8 hover:shadow-elegant transition-all duration-500 group border-0 bg-card/60 backdrop-blur-sm hover:scale-[1.02] relative overflow-hidden h-full flex flex-col">
                    {/* Badge - Mobile Optimized */}
                    <div className="absolute top-4 right-4">
                      <span className={`text-xs font-medium bg-${offering.accent}/10 text-${offering.accent} px-2 py-1 md:px-3 md:py-1.5 rounded-full whitespace-nowrap`}>
                        {offering.badge}
                      </span>
                    </div>

                    {/* Header - Mobile Optimized */}
                    <div className="mb-6 mt-8">
                      <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
                        <IconComponent className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-display font-semibold text-primary group-hover:text-primary-light transition-colors mb-3">
                        {offering.title}
                      </h3>
                      <div className="flex flex-col space-y-2">
                        <span className="text-sm text-accent font-medium bg-accent/10 px-3 py-1 rounded-full w-fit">
                          {offering.badge}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {offering.duration}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground font-body leading-relaxed mb-6 flex-grow">
                      {offering.description}
                    </p>

                    {/* Features */}
                    <div className="mt-auto">
                      <h4 className="text-sm font-body font-semibold text-primary mb-3 uppercase tracking-wide">
                        Key Areas
                      </h4>
                      <div className="space-y-2">
                        {offering.keyAreas.map((area, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-foreground/80 font-body">{area}</span>
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

        {/* Quote Section */}
        <section className="py-16 px-6 bg-gradient-to-br from-aura-pearl to-warm-beige">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center">
              <div className="relative max-w-5xl mx-auto">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-primary/5 to-sage/5 rounded-2xl blur-xl transform scale-110"></div>
                
                <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary/10 shadow-elegant">
                  <blockquote className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-primary leading-tight mb-6">
                    "Companies that prioritize employee well-being outperform the stock market by 2 to 3 times over 25 years."
                  </blockquote>
                  
                  <cite className="text-base md:text-lg font-body text-primary/70 not-italic">
                    — Harvard Business Review
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New CTA Section */}
        <section className="py-24 px-6 bg-warm-beige">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center space-y-8">
              {/* Header */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-primary leading-tight">
                  Ready to Transform Your Organization?
                </h2>
                
                <p className="text-lg md:text-xl text-primary/80 font-body leading-relaxed max-w-3xl mx-auto">
                  Let's explore how COIREA can support your organization's unique journey toward regenerative success.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/journey')}
                  className="bg-sage hover:bg-sage/90 text-white px-8 py-4 text-lg font-semibold min-w-[200px]"
                >
                  Begin Your Journey
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/tools')}
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold min-w-[200px]"
                >
                  Try Our Tools
                </Button>
              </div>

              {/* Supporting Text */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 text-primary/70">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Free consultation available</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm font-medium">Flexible scheduling</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Offerings;
