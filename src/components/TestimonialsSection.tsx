
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Heart } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-aura-pearl via-warm-beige/80 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="bg-background border border-primary/20 rounded-2xl p-8 md:p-12 shadow-lg text-center">
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

        {/* 3-Column Insight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-background border border-primary/10 rounded-xl p-8 text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300">
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

          <div className="bg-background border border-primary/10 rounded-xl p-8 text-center hover:shadow-lg hover:border-sage/30 transition-all duration-300">
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

          <div className="bg-background border border-primary/10 rounded-xl p-8 text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300">
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

        {/* Call to Action */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
              Ready to shift from burnout to brilliance?
            </p>
          </div>
          
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group px-8 py-4">
            Explore Our Framework
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
