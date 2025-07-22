
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const TestimonialsSection = () => {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-aura-pearl via-warm-beige/80 to-background overflow-hidden">
      {/* Enhanced Background Layers */}
      <div className="absolute inset-0">
        {/* Data visualization inspired patterns */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Grid pattern for data theme */}
            <div className="w-full h-full" 
                 style={{
                   backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                                     linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
                   backgroundSize: '40px 40px'
                 }}>
            </div>
          </div>
        </div>

        {/* Organic flowing shapes */}
        <div className="absolute top-16 left-8 w-80 h-80 rounded-full bg-gradient-to-br from-primary/[0.03] via-accent/[0.02] to-transparent blur-3xl"></div>
        <div className="absolute bottom-20 right-12 w-96 h-96 rounded-full bg-gradient-to-br from-secondary/[0.02] via-sage/[0.03] to-transparent blur-3xl"></div>
        
        {/* Subtle chart-like elements */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32">
          <div className="w-full h-full rounded-full border border-primary/5 relative">
            <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-primary/10"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-accent/10"></div>
          </div>
        </div>

        {/* Floating data points */}
        <div className="absolute top-24 left-1/3 w-1 h-1 rounded-full bg-primary/20 animate-pulse"></div>
        <div className="absolute top-40 right-1/3 w-2 h-2 rounded-full bg-accent/15"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 rounded-full bg-sage/20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Data-Driven Insights
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-6 leading-tight">
            Culture Is the Backbone of High-Performance Organizations
          </h2>
          
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto mb-8">
            The numbers don't lie: culture, clarity, and care are strategic assets — not soft skills.
          </p>
        </div>

        {/* Primary Insight Box */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-background/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12 shadow-lg text-center relative overflow-hidden">
            {/* Subtle background pattern for the insight box */}
            <div className="absolute inset-0 opacity-[0.02]">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-center items-center gap-6 mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold text-primary">
                  72% higher employee engagement
                </div>
              </div>
              
              <div className="flex justify-center items-center gap-6 mb-8">
                <div className="w-12 h-12 bg-sage rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-display font-bold text-primary">
                  40% lower turnover
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-4">
                Organizations with strong culture see these dramatic improvements
              </p>
              <p className="text-sm text-muted-foreground/80 font-body italic">
                — Deloitte Human Capital Trends Report
              </p>
            </div>
          </div>
        </div>

        {/* 3-Column Insight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-background/80 backdrop-blur-sm border border-primary/10 rounded-xl p-8 text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.01] to-transparent"></div>
            <div className="relative z-10">
              <div className="text-3xl font-display font-bold text-primary mb-4">72%</div>
              <h3 className="text-lg font-display font-semibold text-primary mb-3">
                of leaders lack clarity on purpose
              </h3>
              <p className="text-muted-foreground font-body mb-4 leading-relaxed">
                Purpose is defined but not embodied.
              </p>
              <p className="text-primary/80 font-body font-medium">
                We help you live your purpose, not just name it.
              </p>
            </div>
          </div>

          <div className="bg-background/80 backdrop-blur-sm border border-primary/10 rounded-xl p-8 text-center hover:shadow-lg hover:border-sage/30 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sage/[0.01] to-transparent"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-sage/10 rounded-xl mb-4 mx-auto">
                <Heart className="w-6 h-6 text-sage" />
              </div>
              <h3 className="text-lg font-display font-semibold text-primary mb-3">
                38.9% say well-being is not prioritized
              </h3>
              <p className="text-muted-foreground font-body mb-4 leading-relaxed">
                Burnout is normalized.
              </p>
              <p className="text-primary/80 font-body font-medium">
                We reframe well-being as a foundation for performance.
              </p>
            </div>
          </div>

          <div className="bg-background/80 backdrop-blur-sm border border-primary/10 rounded-xl p-8 text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.01] to-transparent"></div>
            <div className="relative z-10">
              <div className="text-3xl font-display font-bold text-primary mb-4">60%</div>
              <h3 className="text-lg font-display font-semibold text-primary mb-3">
                report weak team trust
              </h3>
              <p className="text-muted-foreground font-body mb-4 leading-relaxed">
                Collaboration is still siloed.
              </p>
              <p className="text-primary/80 font-body font-medium">
                We restore psychological safety through relational design.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
              Ready to shift from burnout to brilliance?
            </p>
          </div>
          
          <Link to="/journey#journey-start">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group px-8 py-4">
              Begin Your Journey
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Top wave separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".2" fill="hsl(var(--aura-pearl))"></path>
        </svg>
      </div>
    </section>
  );
};

export default TestimonialsSection;
