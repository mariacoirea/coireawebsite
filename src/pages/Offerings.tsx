
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CoireaDashboardMockup from "@/components/CoireaDashboardMockup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Building, Lightbulb, Target, Star, Calendar, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const Offerings = () => {
  return (
    <>
      <SEOHead
        title="Our Offerings - Transformational Services for Regenerative Organizations"
        description="Discover COIREA's comprehensive suite of organizational transformation services, from team retreats to long-term partnerships. See our innovative dashboard and tools."
        keywords="organizational transformation services, team retreats, leadership coaching, regenerative strategy, COIREA dashboard, organizational development"
        url="/offerings"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16 sm:pt-20">
          {/* Hero Section - Mobile Optimized */}
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-subtle">
            <div className="container mx-auto max-w-4xl text-center">
              <header>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-primary mb-6 sm:mb-8 leading-tight">
                  Transform Your Organization
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground font-body leading-relaxed mb-6 sm:mb-8 px-2">
                  Comprehensive services designed to support your organization's evolution toward regenerative success.
                </p>
              </header>
            </div>
          </section>

          {/* COIREA Dashboard Section - Mobile Optimized */}
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-8 sm:mb-12">
                <div className="flex items-center justify-center mb-4">
                  <Badge variant="secondary" className="text-xs sm:text-sm">Coming Soon</Badge>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-primary mb-4 sm:mb-6">
                  COIREA Dashboard
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground font-body max-w-3xl mx-auto px-2">
                  A comprehensive platform for tracking organizational health, team alignment, and transformation progress.
                </p>
              </div>
              
              <CoireaDashboardMockup />
            </div>
          </section>

          {/* Services Overview - Mobile Optimized */}
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-warm-beige to-aura-pearl">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-primary mb-4 sm:mb-6">
                  Our Service Offerings
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground font-body max-w-3xl mx-auto px-2">
                  From quick-impact workshops to comprehensive transformation programs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {/* Service Cards - Mobile Optimized */}
                <Card className="p-6 sm:p-8 hover:shadow-elegant transition-all duration-500 group border-0 bg-card/80 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-hero rounded-2xl flex items-center justify-center">
                      <Building className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                    </div>
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-semibold text-primary mb-3 sm:mb-4">
                    Organizational Transformation
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed mb-4 sm:mb-6">
                    Comprehensive restructuring of systems, culture, and leadership.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">6-18 months</Badge>
                    <Badge variant="outline" className="text-xs">Long-term</Badge>
                  </div>
                </Card>

                <Card className="p-6 sm:p-8 hover:shadow-elegant transition-all duration-500 group border-0 bg-card/80 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-hero rounded-2xl flex items-center justify-center">
                      <Users className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-semibold text-primary mb-3 sm:mb-4">
                    Team Retreats & Workshops
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed mb-4 sm:mb-6">
                    Transformative gatherings for clarity, cohesion, and collaboration.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">2-5 days</Badge>
                    <Badge variant="outline" className="text-xs">Immersive</Badge>
                  </div>
                </Card>

                <Card className="p-6 sm:p-8 hover:shadow-elegant transition-all duration-500 group border-0 bg-card/80 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-hero rounded-2xl flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-semibold text-primary mb-3 sm:mb-4">
                    Leadership Coaching
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed mb-4 sm:mb-6">
                    Deep inner work for authentic, aligned leadership presence.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">3-12 months</Badge>
                    <Badge variant="outline" className="text-xs">1:1 Guidance</Badge>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Enhanced CTA Section - Mobile Optimized */}
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-r from-primary/5 to-accent/5">
            <div className="container mx-auto max-w-4xl">
              <Card className="p-6 sm:p-8 md:p-12 border-0 bg-card/90 backdrop-blur-sm shadow-elegant">
                <div className="text-center space-y-4 sm:space-y-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-primary leading-tight">
                    Ready to Transform Your Organization?
                  </h2>
                  
                  <p className="text-base sm:text-lg text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed px-2">
                    Let's explore how COIREA can support your organization's unique journey toward regenerative success.
                  </p>

                  {/* CTA Buttons - Mobile Stack */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6">
                    <Link to="/journey" className="w-full sm:w-auto">
                      <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground group px-6 sm:px-8 py-3 sm:py-4">
                        Begin Your Journey
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    
                    <Link to="/tools" className="w-full sm:w-auto">
                      <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 px-6 sm:px-8 py-3 sm:py-4">
                        Try Our Tools
                      </Button>
                    </Link>
                  </div>

                  {/* Contact Info - Mobile Optimized */}
                  <div className="pt-6 sm:pt-8 border-t border-border/50 space-y-3 sm:space-y-0 sm:flex sm:items-center sm:justify-center sm:space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center space-x-2">
                      <MessageSquare className="w-4 h-4" />
                      <span>Free consultation available</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Flexible scheduling</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Offerings;
