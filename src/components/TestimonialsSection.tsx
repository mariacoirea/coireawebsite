import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Heart } from "lucide-react";


const TestimonialsSection = () => {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-sage/10 to-copper/5 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-sage/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-copper/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Data-Driven Insights
          </div>
          
          <h2 className="text-5xl md:text-7xl font-display font-bold text-primary mb-8 leading-tight bg-gradient-to-r from-primary via-sage to-copper bg-clip-text text-transparent">
            Culture Is the Backbone of High-Performance Organizations
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-body max-w-4xl mx-auto mb-8 leading-relaxed">
            The numbers don't lie: culture, clarity, and care are strategic assets — not soft skills.
          </p>
          
          <div className="w-32 h-1 bg-gradient-to-r from-sage via-primary to-copper mx-auto rounded-full"></div>
        </div>

        {/* Primary Insight Box */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="relative bg-background/80 backdrop-blur-sm border border-primary/20 rounded-3xl p-10 md:p-16 shadow-2xl text-center overflow-hidden">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-sage/5 rounded-3xl"></div>
            
            {/* Floating decorative elements */}
            <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-sage/20 to-copper/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-br from-primary/20 to-sage/20 rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-sage rounded-2xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl md:text-6xl font-display font-bold bg-gradient-to-r from-primary via-sage to-copper bg-clip-text text-transparent">
                  72%
                </div>
                <span className="text-2xl md:text-3xl font-display font-semibold text-primary">higher engagement</span>
              </div>
              
              <div className="flex justify-center items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-gradient-to-br from-copper to-sage rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-5xl font-display font-bold bg-gradient-to-r from-copper via-primary to-sage bg-clip-text text-transparent">
                  40%
                </div>
                <span className="text-xl md:text-2xl font-display font-semibold text-primary">lower turnover</span>
              </div>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-foreground font-body leading-relaxed mb-6">
                  Organizations with strong culture see these dramatic improvements
                </p>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <div className="w-8 h-px bg-gradient-to-r from-transparent via-muted-foreground to-transparent"></div>
                  <p className="text-sm font-body italic">
                    Deloitte Human Capital Trends Report
                  </p>
                  <div className="w-8 h-px bg-gradient-to-r from-transparent via-muted-foreground to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Insight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="group relative bg-background/70 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-sage/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-sage rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-display font-bold text-white">72%</span>
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-4 group-hover:text-sage transition-colors">
                of leaders lack clarity on purpose
              </h3>
              <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                Purpose is defined but not embodied.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-4"></div>
              <p className="text-primary font-body font-semibold">
                We help you live your purpose, not just name it.
              </p>
            </div>
          </div>

          <div className="group relative bg-background/70 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sage/5 to-copper/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sage to-copper rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-4 group-hover:text-copper transition-colors">
                38.9% say well-being is not prioritized
              </h3>
              <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                Burnout is normalized.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-sage/30 to-transparent mb-4"></div>
              <p className="text-primary font-body font-semibold">
                We reframe well-being as a foundation for performance.
              </p>
            </div>
          </div>

          <div className="group relative bg-background/70 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-copper/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-copper to-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl font-display font-bold text-white">60%</span>
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-4 group-hover:text-copper transition-colors">
                report weak team trust
              </h3>
              <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                Collaboration is still siloed.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-copper/30 to-transparent mb-4"></div>
              <p className="text-primary font-body font-semibold">
                We restore psychological safety through relational design.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-2xl text-foreground font-body leading-relaxed mb-8 font-medium">
              Ready to shift from burnout to brilliance?
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-sage via-primary to-copper mx-auto rounded-full mb-8"></div>
          </div>
          
          <Button size="lg" className="bg-gradient-to-r from-primary via-sage to-copper hover:from-primary/90 hover:via-sage/90 hover:to-copper/90 text-white group px-12 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            Explore Our Framework
            <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;