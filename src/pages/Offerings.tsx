import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
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
      title: "Regenerative Operating System (ROS) Integration",
      badge: "Signature Program",
      duration: "6–18 months",
      timeframe: "",
      description: "A complete upgrade for your organization. We embed the ROS across all five core functions, transforming complexity into coherence so your business can thrive, scale, and grow without extraction.\n\nWe offer strategic support by stepping in as fractional leaders to co-design and implement systems that lasts.",
      keyAreas: [
        "Purpose & Culture Integration",
        "Conscious & Values-Driven Leadership", 
        "Collaboration Flow Design",
        "Well-Being as Strategy",
        "Adaptive Organizational Backbone"
      ],
      icon: Building,
      accent: "sage"
    },
    {
      id: 2,
      title: "Supportive Leadership Coaching",
      badge: "1:1 Guidance", 
      duration: "3–12 months",
      timeframe: "",
      description: "Deep leadership begins within. This coaching journey supports executives and emerging leaders in cultivating the inner clarity, presence, and resilience needed to lead with authenticity.",
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

        {/* 90-Day Reset Programs Section */}
        <section className="py-24 bg-[#f8f8f8]">
          <div className="container mx-auto px-6 max-w-6xl">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
                90-Day Reset Programs
              </h2>
              <p className="text-xl text-muted-foreground font-body max-w-4xl mx-auto mb-8">
                Three founder-ready pathways to realign your organization in one quarter, with every shift measured in real time.
              </p>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-muted-foreground font-body mb-4">
                  Scaling doesn't have to mean losing clarity or culture. Our 90-day resets are designed for founders and CEOs who need fast but meaningful change in leadership, collaboration, and strategy. In just one quarter, we help you reset your organization's core dynamics and track progress through the COIREA Dashboard, so you see exactly what's shifting, and where to focus next.
                </p>
              </div>
              <div className="w-24 h-0.5 bg-gradient-to-r from-sage to-primary mx-auto mt-8"></div>
            </div>

            {/* Three Program Cards - Clean Structure */}
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
              
              {/* Collaboration Reset */}
              <Card className="p-8 hover:shadow-elegant transition-all duration-300 group border-0 bg-white/90 backdrop-blur-sm">
                {/* Header Section */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-sage/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Heart className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-primary mb-3">
                    Collaboration Reset
                  </h3>
                  <p className="text-base text-copper font-medium mb-4">
                    When teams lose connection, performance suffers.
                  </p>
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="bg-sage/10 text-sage px-3 py-1.5 rounded-full text-xs font-semibold">
                      90 Days
                    </div>
                    <div className="bg-copper/10 text-copper px-3 py-1.5 rounded-full text-xs font-semibold">
                      3 Phases
                    </div>
                  </div>
                </div>

                {/* Ideal For Section */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-sage mb-3 uppercase tracking-wider">Ideal For</h4>
                  <p className="text-muted-foreground font-body text-sm">
                    Founders/CEOs sensing their team is misaligned, collaboration feels heavy, roles and responsibilities are not clear.
                  </p>
                </div>

                {/* Key Outcomes Section */}
                <div>
                  <h4 className="text-xs font-semibold text-sage mb-3 uppercase tracking-wider">Key Outcomes</h4>
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Rebuild trust and collaboration across teams</span>
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
                      <span className="text-muted-foreground text-sm">Measure shifts in collaboration and leadership alignment before/after</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Scale with Purpose */}
              <Card className="p-8 hover:shadow-elegant transition-all duration-300 group border-0 bg-white/90 backdrop-blur-sm">
                {/* Header Section */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-primary mb-3">
                    Scale with Purpose
                  </h3>
                  <p className="text-base text-copper font-medium mb-4">
                    When structure and purpose don't align, growth turns chaotic.
                  </p>
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-semibold">
                      90 Days
                    </div>
                    <div className="bg-copper/10 text-copper px-3 py-1.5 rounded-full text-xs font-semibold">
                      3 Phases
                    </div>
                  </div>
                </div>

                {/* Ideal For Section */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">Ideal For</h4>
                  <p className="text-muted-foreground font-body text-sm">
                    Founders/CEOs whose company is scaling fast but struggling with messy operations, unclear priorities, or a diluted vision.
                  </p>
                </div>

                {/* Key Outcomes Section */}
                <div>
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
                      <span className="text-muted-foreground text-sm">Set and track quarterly projects with accountability</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Gain measurable efficiency in decision-making and execution</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Leadership Reset */}
              <Card className="p-8 hover:shadow-elegant transition-all duration-300 group border-0 bg-white/90 backdrop-blur-sm">
                {/* Header Section */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-copper/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Heart className="w-8 h-8 text-copper" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-primary mb-3">
                    Leadership Reset
                  </h3>
                  <p className="text-base text-copper font-medium mb-4">
                    When leaders aren't supportive, teams lose direction.
                  </p>
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="bg-copper/10 text-copper px-3 py-1.5 rounded-full text-xs font-semibold">
                      90 Days
                    </div>
                    <div className="bg-copper/10 text-copper px-3 py-1.5 rounded-full text-xs font-semibold">
                      3 Phases
                    </div>
                  </div>
                </div>

                {/* Ideal For Section */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-copper mb-3 uppercase tracking-wider">Ideal For</h4>
                  <p className="text-muted-foreground font-body text-sm">
                    Founders/CEOs who see their leaders struggling with clarity, confidence, or consistency and want to cultivate a culture of conscious and supportive leadership.
                  </p>
                </div>

                {/* Key Outcomes Section */}
                <div>
                  <h4 className="text-xs font-semibold text-copper mb-3 uppercase tracking-wider">Key Outcomes</h4>
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-copper mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Build executive presence rooted in authenticity and trust</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-copper mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Strengthen conscious decision-making under pressure</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-copper mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Develop embodied communication that inspires alignment</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-copper mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Reconnect leaders with inner clarity to lead with confidence</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-copper mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Measurable shifts in leadership trust and effectiveness tracked over 90 days</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Closing CTA */}
          </div>
        </section>

        {/* Long-Term Partnership Section */}
        <section className="py-24 bg-gradient-to-br from-sage/5 to-primary/5">
          <div className="container mx-auto px-6 max-w-6xl">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-primary mb-6 leading-tight">
                Long-Term Partnership
              </h2>
              
              <p className="text-xl text-muted-foreground font-body max-w-4xl mx-auto mb-8">
                For organizations ready to embed lasting transformation.
              </p>
              
              <div className="max-w-4xl mx-auto mb-8">
                <p className="text-lg text-muted-foreground font-body mb-6">
                  The Regenerative Operating System (ROS) Integration is our signature long-term program. Over 6–18 months, we embed the ROS across all five core functions — Purpose & Culture, Leadership, Collaboration, Well-Being, and Strategy — creating a living architecture that turns complexity into coherence.
                </p>
                <p className="text-lg text-muted-foreground font-body">
                  This is where short-term resets evolve into full-system transformation. Together, we co-design structures, metrics, and practices that ensure your organization not only scales, but does so regeneratively — aligned, resilient, and built to last.
                </p>
              </div>
              
              <div className="w-32 h-0.5 bg-gradient-to-r from-sage to-copper mx-auto"></div>
            </div>

            {/* 5-Pillar Framework Integration */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h3 className="text-2xl md:text-4xl font-display font-bold text-primary mb-6">
                   The Regenerative Operating System (ROS)
                </h3>
                <div className="space-y-4 text-muted-foreground max-w-4xl mx-auto">
                  <p className="text-lg md:text-xl leading-relaxed">
                    Growth brings complexity — competing priorities, misaligned teams, and stalled momentum. The Regenerative Operating System transforms these challenges into coherence.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    Built on five core functions: Purpose & Culture, Leadership, Collaboration, Well-Being, and Organizational Strategy. The ROS is a living architecture that aligns Purpose, People, and Performance into one holistic system.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    Unlike static frameworks, the ROS integrates structure with soul: decision-making that flows, metrics that measure meaning as well as results, and practices that sustain human vitality. The result: organizations that are aligned, adaptive, and resilient — designed to grow with integrity.
                  </p>
                </div>
              </div>

              {/* Framework Pillars Grid */}
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

          </div>
        </section>

        {/* Dashboard Introduction Section */}
        <section className="py-24 bg-warm-beige">
          <div className="container mx-auto px-6 max-w-6xl">
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

          {/* Harvard Quote */}
          <div className="text-center mt-16">
            <div className="max-w-4xl mx-auto">
              <div className="w-24 h-0.5 bg-gradient-to-r from-sage to-primary mx-auto mb-8"></div>
              
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-primary leading-tight mb-6 italic">
                "Companies that prioritize employee well-being outperform the stock market by 2 to 3 times over 25 years."
              </blockquote>
              
              <cite className="text-base md:text-lg font-body text-primary/70 not-italic font-medium">
                — Harvard Business Review
              </cite>
              
              <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-sage mx-auto mt-8"></div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-32 px-6 relative overflow-hidden">
          {/* Background with gradient and pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-sage/5 via-primary/3 to-copper/5"></div>
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" 
                 style={{
                   backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--sage)) 2px, transparent 2px),
                                     radial-gradient(circle at 75% 75%, hsl(var(--primary)) 1px, transparent 1px)`,
                   backgroundSize: '60px 60px, 40px 40px'
                 }}>
            </div>
          </div>
          
          {/* Floating decorative elements */}
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-sage/10 to-transparent blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-xl"></div>
          
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="text-center space-y-12">
              {/* Header with enhanced typography */}
              <div className="space-y-8">
                <div className="inline-flex items-center justify-center p-3 bg-sage/10 rounded-full mb-6">
                  <div className="w-2 h-2 bg-sage rounded-full animate-pulse"></div>
                  <span className="text-sage text-sm font-semibold ml-3 uppercase tracking-wider">Transform Your Organization</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary leading-tight">
                  Ready to Transform Your 
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage to-primary">Organization?</span>
                </h2>
                
                <p className="text-xl md:text-2xl text-primary/70 font-body leading-relaxed max-w-4xl mx-auto">
                  Let's explore how COIREA can support your organization's unique journey toward 
                  <span className="text-sage font-semibold"> regenerative success</span>.
                </p>
              </div>

              {/* Enhanced Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/journey')}
                  className="group bg-gradient-to-r from-sage to-sage hover:from-sage/90 hover:to-sage/90 text-white px-10 py-6 text-xl font-semibold min-w-[250px] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center gap-3">
                    Begin Your Journey
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/tools')}
                  className="group border-2 border-primary/30 text-primary hover:bg-primary hover:text-white px-10 py-6 text-xl font-semibold min-w-[250px] rounded-2xl bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center gap-3">
                    Try Our Tools
                    <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </span>
                </Button>
              </div>

              {/* Enhanced Supporting Features */}
              <div className="pt-12">
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                  <div className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-primary/10 hover:border-sage/30 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-sage/20 to-sage/10 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-sage" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-primary">Free Consultation</div>
                      <div className="text-sm text-primary/60">Available upon request</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-primary/10 hover:border-copper/30 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-copper/20 to-copper/10 rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-copper" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-primary">Flexible Scheduling</div>
                      <div className="text-sm text-primary/60">Fits your timeline</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-primary">Proven Framework</div>
                      <div className="text-sm text-primary/60">5-pillar system</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
    </>
  );
};

export default Offerings;
