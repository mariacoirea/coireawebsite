import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Building, Lightbulb, Target, Star } from "lucide-react";

// Tier 1 - Core Offering
const coreOffering = {
  icon: Building,
  title: "Organizational Transformation",
  description: "Comprehensive restructuring of systems, culture, and leadership for sustainable growth.",
  features: ["Strategic Alignment", "Leadership Development", "Culture Design", "Change Management"],
  duration: "6–18 months",
  type: "Long-Term Program",
  isSignature: true
};

// Tier 2 - Short-Term Entry Points
const shortTermOfferings = [
  {
    icon: Users,
    title: "Team Retreats & Workshops",
    description: "Cohesive, high-impact experiences for trust, clarity, and aligned collaboration",
    features: ["Team Building", "Vision Alignment", "Conflict Resolution", "Collaborative Tools"],
    duration: "2–5 days",
    type: "Intensive Experience"
  },
  {
    icon: Lightbulb,
    title: "Leadership Coaching",
    description: "One-on-one support for regenerative, values-led leadership",
    features: ["Executive Coaching", "Conscious Leadership", "Authentic Communication", "Decision-Making"],
    duration: "3–12 months",
    type: "Personal Development"
  },
  {
    icon: Target,
    title: "Regenerative Strategy Consulting",
    description: "Aligning purpose, performance, and planetary well-being into your strategy",
    features: ["Purpose Integration", "Performance Optimization", "Well-being Strategies", "Future Planning"],
    duration: "Project-based",
    type: "Strategic Support"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-neutral-warm">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-6 leading-tight">
            Our Transformational Offerings
          </h2>
          
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto mb-8">
            Comprehensive pathways for regenerative business evolution
          </p>

          <p className="text-lg text-muted-foreground/80 font-body max-w-4xl mx-auto mb-8">
            Whether you're starting small or ready for deep transformation, each of our services is custom-designed to meet your team where they are — and guide them where they're meant to grow.
          </p>
          
          <div className="w-24 h-0.5 bg-gradient-warm mx-auto"></div>
        </div>

        {/* Tier 1 - Core Offering (Full Width) */}
        <div className="mb-16 max-w-6xl mx-auto">
          <Card className="p-10 hover:shadow-elegant transition-all duration-500 group border-0 bg-card/60 backdrop-blur-sm hover:scale-[1.01] relative">
            {/* Signature Badge */}
            <div className="absolute top-6 right-6">
              <div className="flex items-center space-x-2 bg-accent/15 px-4 py-2 rounded-full">
                <Star className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Signature Program</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <coreOffering.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-semibold text-primary group-hover:text-primary-light transition-colors">
                      {coreOffering.title}
                    </h3>
                    <div className="flex items-center space-x-2 mt-3">
                      <span className="text-sm text-accent font-medium bg-accent/10 px-3 py-1 rounded-full">
                        {coreOffering.type}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {coreOffering.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground font-body leading-relaxed mb-6 text-lg">
                  {coreOffering.description}
                </p>
              </div>

              <div>
                {/* Features */}
                <div>
                  <h4 className="text-sm font-body font-semibold text-primary mb-4 uppercase tracking-wide">
                    Key Areas
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {coreOffering.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-foreground/80 font-body">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Tier 2 - Short-Term Entry Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {shortTermOfferings.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-elegant transition-all duration-500 group border-0 bg-card/60 backdrop-blur-sm hover:scale-[1.02]"
            >
              {/* Header */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold text-primary group-hover:text-primary-light transition-colors mb-3">
                  {service.title}
                </h3>
                <div className="flex flex-col space-y-2">
                  <span className="text-sm text-accent font-medium bg-accent/10 px-3 py-1 rounded-full w-fit">
                    {service.type}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {service.duration}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-body font-semibold text-primary mb-3 uppercase tracking-wide">
                  Key Areas
                </h4>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-sm text-foreground/80 font-body">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Central Call to Action */}
        <div className="text-center">
          <div className="max-w-3xl mx-auto mb-8">
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-4">
              Begin Your Journey
            </h3>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              All of our offerings are tailored to your organization's unique needs. Fill out the form and we'll co-create the right solution together.
            </p>
          </div>
          
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group px-8 py-4">
            Begin Your Journey
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;