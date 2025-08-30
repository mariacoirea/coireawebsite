import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import { RelatedContent } from "@/components/InternalLinkingStrategy";
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
      duration: "3–12 months",
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
    <>
      <SEOHead
        title="Organizational Transformation Services - COIREA Business Evolution Programs"
        description="Comprehensive organizational transformation services including leadership coaching, culture development, and regenerative business programs. Transform your company with COIREA's proven 5-pillar framework."
        keywords="organizational transformation services, leadership coaching programs, business culture development, regenerative business consulting, corporate transformation, team development programs"
        url="/offerings"
      />
      <StructuredData type="service" />
      
      {/* Critical rendering optimization added via CSS performance utilities */}
      
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-nature will-change-transform contain-layout"
          style={{
            /* Optimize critical rendering path */
            contentVisibility: 'auto',
            containIntrinsicSize: '100vw 600px'
          }}
        >
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
              <h3 className="text-2xl md:text-4xl font-display font-bold text-primary mb-6">
                The COIREA Core Framework™
              </h3>
              <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto">
                As organizations grow, complexity rises — priorities compete, alignment slips, and momentum is lost. The COIREA Core Framework™ addresses these challenges by focusing on five forces that define a thriving company: purpose-led culture, values-driven leadership, high-trust collaboration, human-centered well-being, and adaptive strategy. Through Structural Foundations, these forces are transformed into practical systems that keep your business aligned, resilient, and positioned to grow with integrity.
              </p>
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

            {/* Dashboard Mockup with Left Sidebar - Performance optimized */}
            <div 
              className="bg-white border border-primary/10 rounded-2xl shadow-2xl overflow-hidden max-w-6xl mx-auto will-change-transform contain-layout"
              style={{
                contentVisibility: 'auto',
                containIntrinsicSize: '100% 600px'
              }}
            >
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

          {/* Harvard Quote */}
          <div className="text-center mt-16">
            <div className="max-w-4xl mx-auto">
              {/* Simple border accent */}
              <div className="w-24 h-0.5 bg-gradient-to-r from-sage to-primary mx-auto mb-8"></div>
              
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-primary leading-tight mb-6 italic">
                "Companies that prioritize employee well-being outperform the stock market by 2 to 3 times over 25 years."
              </blockquote>
              
              <cite className="text-base md:text-lg font-body text-primary/70 not-italic font-medium">
                — Harvard Business Review
              </cite>
              
              {/* Simple border accent */}
              <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-sage mx-auto mt-8"></div>
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
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16">
              
              {/* Culture & Leadership Reset */}
              <Card className="p-6 md:p-8 hover:shadow-elegant transition-all duration-300 group border-0 bg-white/90 backdrop-blur-sm hover:scale-[1.01] relative overflow-hidden">
                {/* Header Section */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-sage/10 to-sage/20 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform duration-300 border border-sage/20">
                    <Heart className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-primary mb-3">
                    Collaboration & Leadership Reset
                  </h3>
                  <p className="text-base text-copper font-medium mb-4">
                    When your team feels disconnected, performance slips.
                  </p>
                  <div className="flex items-center justify-center gap-3 mb-5">
                    <div className="bg-sage/10 text-sage px-3 py-1.5 rounded-full text-xs font-semibold border border-sage/20">
                      90 Days
                    </div>
                    <div className="bg-copper/10 text-copper px-3 py-1.5 rounded-full text-xs font-semibold border border-copper/20">
                      3 Phases
                    </div>
                  </div>
                </div>

                {/* Ideal For Section */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-sage mb-3 uppercase tracking-wider">Ideal For</h4>
                  <p className="text-muted-foreground font-body text-sm mb-4">
                    Founders/CEOs who sense their team is losing trust, collaboration is weak, or leadership isn't aligned — and it's starting to cost results.
                  </p>
                  
                  {/* Pain Points */}
                  <div className="mt-4">
                    <h5 className="text-xs font-semibold text-primary/70 mb-2 uppercase tracking-wider">Pain Points</h5>
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-sage/60 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-xs">Silent tension in meetings or lack of open dialogue</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-sage/60 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-xs">New hires not fully integrating into the culture</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-sage/60 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-xs">Roles and responsibilities unclear → accountability gaps</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-sage/60 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-xs">Leadership sending mixed signals, slowing decisions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-sage/60 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-xs">Performance reviews inconsistent or missing</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Outcomes Section */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">Key Outcomes</h4>
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Rebuild trust and collaboration across the team</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Clarify leadership roles and decision-making authority</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Establish cultural practices and habits that scale</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Design a performance system that drives growth</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Measurable before/after shift in collaboration & leadership alignment</span>
                    </div>
                  </div>
                </div>

                {/* Core Elements as Tags */}
                <div className="mt-auto">
                  <h4 className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">Core Elements</h4>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="bg-primary/10 text-primary px-2.5 py-1.5 rounded-lg text-xs font-medium border border-primary/20">Culture & Leadership Assessment</span>
                    <span className="bg-primary/10 text-primary px-2.5 py-1.5 rounded-lg text-xs font-medium border border-primary/20">Role & Responsibility Mapping</span>
                    <span className="bg-primary/10 text-primary px-2.5 py-1.5 rounded-lg text-xs font-medium border border-primary/20">Leadership Mentoring</span>
                    <span className="bg-primary/10 text-primary px-2.5 py-1.5 rounded-lg text-xs font-medium border border-primary/20">Team Collaboration Workshops</span>
                    <span className="bg-primary/10 text-primary px-2.5 py-1.5 rounded-lg text-xs font-medium border border-primary/20">Performance Review Framework</span>
                  </div>
                </div>

              </Card>

              {/* Scale with Purpose */}
              <Card className="p-6 md:p-8 hover:shadow-elegant transition-all duration-300 group border-0 bg-white/90 backdrop-blur-sm hover:scale-[1.01] relative overflow-hidden">
                {/* Header Section */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform duration-300 border border-primary/20">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-primary mb-3">
                    Scale with Purpose
                  </h3>
                  <p className="text-base text-copper font-medium mb-4">
                    When structure and purpose don't align, scaling turns to chaos.
                  </p>
                  <div className="flex items-center justify-center gap-3 mb-5">
                    <div className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-semibold border border-primary/20">
                      90 Days
                    </div>
                    <div className="bg-copper/10 text-copper px-3 py-1.5 rounded-full text-xs font-semibold border border-copper/20">
                      3 Phases
                    </div>
                  </div>
                </div>

                {/* Ideal For Section */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">Ideal For</h4>
                  <p className="text-muted-foreground font-body text-sm mb-4">
                    Founders/CEOs whose company is growing fast but struggling with messy operations, unclear priorities, or a vision that feels diluted.
                  </p>
                  
                  {/* Pain Points */}
                  <div className="mt-4">
                    <h5 className="text-xs font-semibold text-primary/70 mb-2 uppercase tracking-wider">Pain Points</h5>
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-primary/60 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-xs">Leadership team not aligned on purpose or direction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-primary/60 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-xs">Priorities keep shifting, goals rarely hit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-primary/60 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-xs">No clear meeting cadence → slow decisions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-primary/60 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-xs">Everyone is busy, but execution feels scattered</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-primary/60 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-xs">Scaling fast but losing the company's original DNA</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Outcomes Section */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">Key Outcomes</h4>
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Define or refine company purpose, vision, and strategic priorities</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Align leadership on one clear playbook</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Redesign org structure & workflows to support growth</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Set and track EOS-style quarterly Rocks with accountability</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Measurable efficiency gains in decision-making and execution</span>
                    </div>
                  </div>
                </div>

                {/* Core Elements as Tags */}
                <div className="mt-auto">
                  <h4 className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">Core Elements</h4>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="bg-primary/10 text-primary px-2.5 py-1.5 rounded-lg text-xs font-medium border border-primary/20">Purpose & Vision Workshop</span>
                    <span className="bg-primary/10 text-primary px-2.5 py-1.5 rounded-lg text-xs font-medium border border-primary/20">Operational & Bottleneck Audit</span>
                    <span className="bg-primary/10 text-primary px-2.5 py-1.5 rounded-lg text-xs font-medium border border-primary/20">Structure & Workflow Design</span>
                    <span className="bg-primary/10 text-primary px-2.5 py-1.5 rounded-lg text-xs font-medium border border-primary/20">Quarterly Projects</span>
                    <span className="bg-primary/10 text-primary px-2.5 py-1.5 rounded-lg text-xs font-medium border border-primary/20">Efficiency & Execution Benchmarks</span>
                  </div>
                </div>

              </Card>
            </div>

            {/* Closing CTA */}
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

            {/* Partnership Programs - 3 Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
              {longTermOfferings.map((offering, index) => {
                const IconComponent = offering.icon;
                const accentColor = offering.accent === 'primary' ? 'primary' : offering.accent === 'copper' ? 'copper' : 'sage';
                const isSignature = offering.badge === 'Signature Program';
                
                return (
                  <Card key={offering.id} className={`p-8 bg-white/90 backdrop-blur-sm border hover:border-sage/30 shadow-lg hover:shadow-xl transition-all duration-500 group relative overflow-hidden h-full ${
                    isSignature ? 'border-sage/20 shadow-2xl' : 'border-primary/10'
                  }`}>
                    {/* Subtle Background Pattern */}
                    <div className={`absolute inset-0 bg-gradient-to-br opacity-50 ${
                      isSignature ? 'from-sage/5 via-transparent to-copper/5' : 'from-primary/3 to-sage/3'
                    }`}></div>
                    
                    {/* Signature Badge */}
                    {isSignature && (
                      <div className="absolute top-4 right-4 z-10">
                        <div className="flex items-center space-x-2 bg-gradient-to-r from-sage to-sage/80 px-3 py-1.5 rounded-full shadow-lg">
                          <Star className="w-3 h-3 text-white" />
                          <span className="text-xs font-semibold text-white">Signature</span>
                        </div>
                      </div>
                    )}
                    
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Header */}
                      <div className="mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br from-${accentColor}/20 to-${accentColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 mb-4`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-display font-bold text-primary mb-3">
                          {offering.title}
                        </h3>
                        <div className="flex flex-col space-y-2">
                          <span className={`text-sm font-semibold text-${accentColor} bg-${accentColor}/10 px-3 py-1.5 rounded-full w-fit`}>
                            {offering.duration}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {offering.badge}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground font-body leading-relaxed mb-6 flex-grow text-sm">
                        {offering.description}
                      </p>

                      {/* Key Areas */}
                      <div className="mt-auto">
                        <h4 className="text-primary font-semibold mb-4 uppercase tracking-wider text-xs">
                          Key Areas
                        </h4>
                        <div className="space-y-2">
                          {offering.keyAreas.map((area, idx) => (
                            <div key={idx} className="flex items-center space-x-3 p-2 bg-primary/5 rounded-lg">
                              <div className={`w-2 h-2 bg-${accentColor} rounded-full flex-shrink-0`}></div>
                              <span className="text-foreground font-medium text-xs">{area}</span>
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
            <div className="max-w-4xl mx-auto mt-16">
              <div className="border-l-4 border-gradient-to-b border-copper pl-8">
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

        {/* Related Content for Internal Linking */}
        <RelatedContent currentPage="offerings" />

      </main>
      <Footer />
    </div>
    </>
  );
};

export default Offerings;
