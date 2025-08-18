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
  Settings,
  TrendingUp,
  Shield,
  Zap,
  Send,
  Check,
  MessageCircle,
  Calendar
} from "lucide-react";

import { pillars as corePillars } from "@/components/FivePillarFrameworkSection";

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

  const longTermOfferings = [
    {
      id: 1,
      title: "Organizational Transformation",
      badge: "Signature Program",
      duration: "6–18 months",
      timeframe: "",
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
      title: "Leadership Coaching",
      badge: "1:1 Guidance", 
      duration: "3–12 months",
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
      id: 3,
      title: "Fractional Operations",
      badge: "Embedded Partnership",
      duration: "1–6 months",
      timeframe: "",
      description: "Hands-on strategic support. We embed as fractional leaders to co-design and implement systems that align your culture, purpose, and performance. Ideal for startups and organizations in moments of growth, transition, or complexity.",
      keyAreas: [
        "Operational Architecture",
        "Team & Rhythm Design",
        "Strategic Execution", 
        "Regenerative KPIs & Accountability"
      ],
      icon: Settings,
      accent: "copper"
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
                The COIREA Core Framework™
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

            {/* Framework Pillars Grid (replaces image) */}
            <div className="mb-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {corePillars.map(({ title, subtitle, description, Icon }, i) => (
                  <Card
                    key={title}
                    className="h-full bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-background/40 border-border/50 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-center">
                        <div className="h-12 w-12 rounded-full bg-primary/10 text-primary ring-1 ring-primary/20 flex items-center justify-center">
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                      </div>
                      <CardTitle className="mt-4 text-center text-lg text-foreground">{title}</CardTitle>
                      <p className="text-center text-sm text-muted-foreground">{subtitle}</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                    </CardContent>
                  </Card>
                ))}
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
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-12">
                How Do We Track It in Real Time?
              </h2>
              <div className="max-w-6xl mx-auto mb-12">
                <p className="text-lg text-muted-foreground font-body mb-6">
                  Welcome to the COIREA Evolution Dashboard — where AI meets Human Intelligence, and insight becomes action.
                  Track how your organization evolves across the five core pillars of regenerative business. Blending methodologies like surveys, interviews, behavioral metrics, and well-being diagnostics, this dashboard turns qualitative and quantitative data into clear, strategic guidance.
                </p>
                <p className="text-lg text-muted-foreground font-body">
                  It's more than a snapshot — it's a living compass for sustainable, people-centered growth.
                </p>
              </div>
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
                        { name: "Well-Being", score: 59, color: "olive-green", description: "Energy & resilience" }
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

        {/* 90-Day Transformational Programs Section */}
        <section className="py-24 bg-[#f8f8f8]">
          <div className="container mx-auto px-6 max-w-6xl">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
                90-Day Transformational Programs
              </h2>
              <p className="text-xl text-muted-foreground font-body max-w-4xl mx-auto mb-8">
                Two focused, founder-ready pathways to reset and realign your organization in one quarter — with every shift tracked in real time.
              </p>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-muted-foreground font-body mb-4">
                  Scaling shouldn't mean chaos. Our 90-day programs are designed for founders and CEOs who need fast, measurable change in leadership, culture, and operations. In just one quarter, we help you reset your organization's core dynamics and prove impact through our COIREA Dashboard, so you know exactly what's working, and where to focus next.
                </p>
              </div>
              <div className="w-24 h-0.5 bg-gradient-to-r from-sage to-primary mx-auto mt-8"></div>
            </div>

            {/* Two Program Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              
              {/* Culture & Leadership Reset */}
              <Card className="p-8 hover:shadow-elegant transition-all duration-500 group border-0 bg-card/60 backdrop-blur-sm hover:scale-[1.02] relative overflow-hidden">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-sage/20 to-sage rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-sage" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-2">
                      Culture & Leadership Reset
                    </h3>
                    <p className="text-lg text-copper font-medium">
                      Reset your culture. Upgrade your leadership.
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground font-body mb-6">
                  Ideal for: CEOs/Founders whose teams feel disconnected, trust is slipping, or leadership isn't fully aligned.
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-display font-semibold text-primary mb-4">Outcomes:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Reset team trust and collaboration.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Upgrade leadership decision-making and communication.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Embed culture habits that survive scale-up stress.</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-display font-semibold text-primary mb-4">Core Elements:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Culture & leadership workshops and assessment</li>
                    <li>• Executive mentoring for the leadership team</li>
                    <li>• Pre/post culture health score + leadership alignment index</li>
                  </ul>
                </div>

              </Card>

              {/* Strategic Ops & Leadership Partnership */}
              <Card className="p-8 hover:shadow-elegant transition-all duration-500 group border-0 bg-card/60 backdrop-blur-sm hover:scale-[1.02] relative overflow-hidden">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-2">
                      Strategic Ops & Leadership Partnership
                    </h3>
                    <p className="text-lg text-copper font-medium">
                      Fix the bottlenecks. Scale with clarity.
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground font-body mb-6">
                  Ideal for: CEOs/Founders whose operations are messy, priorities compete, and execution lags behind vision.
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-display font-semibold text-primary mb-4">Outcomes:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Align leadership priorities with operational reality.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Implement high-leverage operational systems.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Strengthen execution and accountability culture.</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-display font-semibold text-primary mb-4">Core Elements:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Organizational & operational bottleneck audit</li>
                    <li>• Fractional COO-style implementation support</li>
                    <li>• Pre/post operational efficiency benchmarks</li>
                  </ul>
                </div>

              </Card>
            </div>

            {/* How it Works Section */}
            <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 mb-16 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">
                  How it Works: 3 Phases, 12 Weeks
                </h3>
                <p className="text-muted-foreground font-body">Simple flow → Seed → Reflect → Align</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Phase 1: Seed */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-sage/20 to-sage rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-sage" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-primary mb-3">Weeks 1–2: Seed</h4>
                  <p className="text-muted-foreground">Deep-dive assessment + alignment workshops.</p>
                </div>

                {/* Phase 2: Reflect */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-copper/20 to-copper rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-copper" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-primary mb-3">Weeks 3–8: Reflect</h4>
                  <p className="text-muted-foreground">Implement leadership/ops upgrades + mentoring.</p>
                </div>

                {/* Phase 3: Align */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Compass className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-primary mb-3">Weeks 9–12: Align</h4>
                  <p className="text-muted-foreground">Measurable change report + 6–12 month roadmap.</p>
                </div>
              </div>

              {/* Arrow flow visual */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <div className="w-3 h-3 bg-sage rounded-full"></div>
                <ArrowRight className="w-4 h-4 text-sage" />
                <div className="w-3 h-3 bg-copper rounded-full"></div>
                <ArrowRight className="w-4 h-4 text-copper" />
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
            </div>

            {/* Measurement & Proof Section */}
            <div className="text-center mb-16">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-6">
                Every shift is measurable.
              </h3>
              <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto mb-8">
                From day one, we establish clear baselines. At the end of 90 days, you'll see exactly<br />
                how your organization has shifted — across culture, leadership, and operations — all tracked through the COIREA Dashboard.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Heart, title: "Culture Health Score", color: "sage" },
                  { icon: Brain, title: "Leadership Alignment Index", color: "primary" },
                  { icon: Settings, title: "Operational Efficiency Benchmarks", color: "copper" },
                  { icon: TrendingUp, title: "Decision-making Speed & Accountability", color: "olive-green" }
                ].map((metric, index) => {
                  const IconComponent = metric.icon;
                  return (
                    <div key={index} className="p-6 bg-card/60 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300">
                      <div className={`w-12 h-12 bg-${metric.color}/10 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                        <IconComponent className={`w-6 h-6 text-${metric.color}`} />
                      </div>
                      <h4 className="font-display font-semibold text-primary text-lg mb-2">{metric.title}</h4>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Closing CTA */}
            <div className="text-center bg-gradient-to-br from-primary/5 to-sage/5 rounded-2xl p-12">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                One quarter from now, your business could feel completely different.
              </h3>
              <p className="text-xl text-muted-foreground font-body mb-8 max-w-2xl mx-auto">
                Ready to reset, realign, and prove measurable transformation in just 90 days?
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
                onClick={() => navigate('/journey')}
              >
                Book a 30-Min Alignment Call
              </Button>
            </div>
          </div>
        </section>

        {/* Long-Term Partnerships Section */}
        <section className="py-24 bg-gradient-to-br from-sage/5 to-primary/5">
          <div className="container mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-primary mb-6 leading-tight">
                Long-Term Partnerships
              </h2>
              
              <p className="text-xl text-muted-foreground font-body max-w-4xl mx-auto mb-8">
                Holistic restructuring of systems, culture, and leadership — aligned with your organization's purpose, people, and performance.
              </p>
              
              <div className="w-32 h-0.5 bg-gradient-to-r from-sage to-copper mx-auto"></div>
            </div>

            {/* Signature Program - Premium Design */}
            <div className="mb-20 max-w-6xl mx-auto">
              <Card className="p-8 md:p-12 bg-white/80 backdrop-blur-sm border border-sage/20 shadow-2xl hover:shadow-sage/20 transition-all duration-700 group relative overflow-hidden">
                {/* Premium Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-sage/5 via-transparent to-copper/5 opacity-50"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-sage/10 to-transparent rounded-bl-3xl"></div>
                
                {/* Signature Badge */}
                <div className="absolute top-6 right-6 z-10">
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-sage to-sage/80 px-4 py-2 rounded-full shadow-lg">
                    <Star className="w-4 h-4 text-white" />
                    <span className="text-sm font-semibold text-white">Signature Partnership</span>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="mb-8">
                    {/* Icon & Header */}
                    <div className="flex items-start space-x-6 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-sage to-sage/80 rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                        <Building className="w-10 h-10 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-3">
                          Organizational Transformation
                        </h3>
                        <div className="flex items-center space-x-3">
                          <span className="text-sage font-semibold bg-sage/15 px-4 py-1.5 rounded-full">
                            6–18 months
                          </span>
                          <span className="text-muted-foreground">
                            Deep Partnership
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
                      Holistic restructuring of systems, culture, and leadership — aligned with your organization's purpose, people, and performance. We build systems that scale and last.
                    </p>

                    {/* Key Areas - Elegant Grid */}
                    <div>
                      <h4 className="text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
                        Partnership Focus Areas
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        {["Strategic Alignment", "Conscious Leadership", "Culture Architecture", "Change Implementation"].map((area, idx) => (
                          <div key={idx} className="flex items-center space-x-3 p-3 bg-sage/5 rounded-xl border border-sage/10">
                            <div className="w-3 h-3 bg-gradient-to-r from-sage to-copper rounded-full flex-shrink-0"></div>
                            <span className="text-foreground font-medium">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Partnership Programs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
              {longTermOfferings.slice(1).map((offering, index) => {
                const IconComponent = offering.icon;
                const accentColor = offering.accent === 'primary' ? 'primary' : offering.accent === 'copper' ? 'copper' : 'sage';
                return (
                  <Card key={offering.id} className="p-8 bg-white/90 backdrop-blur-sm border border-primary/10 hover:border-sage/30 shadow-lg hover:shadow-xl transition-all duration-500 group relative overflow-hidden h-full">
                    {/* Subtle Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-sage/3 opacity-50"></div>
                    
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Header */}
                      <div className="mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br from-${accentColor}/20 to-${accentColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 mb-4`}>
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-display font-bold text-primary mb-3">
                          {offering.title}
                        </h3>
                        <div className="flex items-center space-x-3">
                          <span className={`text-sm font-semibold text-${accentColor} bg-${accentColor}/10 px-3 py-1.5 rounded-full`}>
                            {offering.duration}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {offering.badge}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground font-body leading-relaxed mb-6 flex-grow">
                        {offering.description}
                      </p>

                      {/* Key Areas */}
                      <div className="mt-auto">
                        <h4 className="text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
                          Key Areas
                        </h4>
                        <div className="space-y-3">
                          {offering.keyAreas.map((area, idx) => (
                            <div key={idx} className="flex items-center space-x-3 p-2 bg-primary/5 rounded-lg">
                              <div className={`w-2 h-2 bg-${accentColor} rounded-full flex-shrink-0`}></div>
                              <span className="text-foreground font-medium text-sm">{area}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Add-ons Section */}
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 bg-gradient-to-r from-copper/5 to-sage/5 border border-copper/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-copper to-sage"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-display font-bold text-primary mb-4">
                    Add-ons available upon request
                  </h3>
                  <p className="text-lg text-muted-foreground font-body leading-relaxed">
                    Team retreats, workshops, and team-building experiences can be designed and tailored to your organization's needs. 
                    These can also be integrated into any of our 90-Day Programs or Long-Term Partnerships.
                  </p>
                  <div className="flex items-center space-x-2 mt-4">
                    <Users className="w-5 h-5 text-copper" />
                    <MessageCircle className="w-5 h-5 text-sage" />
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </Card>
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
