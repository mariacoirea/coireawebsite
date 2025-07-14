import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Building, Lightbulb, Calendar } from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Organizational Transformation",
    description: "Comprehensive restructuring of systems, culture, and leadership for sustainable growth.",
    features: ["Strategic Alignment", "Culture Design", "Leadership Development", "Change Management"],
    duration: "6-18 months",
    type: "Long-term Program"
  },
  {
    icon: Users,
    title: "Team Retreats & Workshops",
    description: "Intensive experiences that build cohesion, clarity, and collaborative intelligence.",
    features: ["Team Building", "Vision Alignment", "Conflict Resolution", "Collaborative Tools"],
    duration: "2-5 days",
    type: "Intensive Experience"
  },
  {
    icon: Lightbulb,
    title: "Leadership Coaching",
    description: "One-on-one guidance for executives embracing conscious, regenerative leadership.",
    features: ["Executive Coaching", "Conscious Leadership", "Authentic Communication", "Decision Making"],
    duration: "3-12 months",
    type: "Personal Development"
  },
  {
    icon: Calendar,
    title: "Strategic Consulting",
    description: "Expert guidance on integrating purpose, performance, and well-being into business strategy.",
    features: ["Purpose Integration", "Performance Optimization", "Well-being Strategies", "Future Planning"],
    duration: "Project-based",
    type: "Strategic Support"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-6 leading-tight">
            Our Transformational
            <span className="block italic">Offerings</span>
          </h2>
          
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto mb-8">
            Comprehensive solutions for conscious organizational evolution
          </p>
          
          <div className="w-24 h-0.5 bg-gradient-warm mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-elegant transition-all duration-500 group border-0 bg-card/60 backdrop-blur-sm hover:scale-[1.02]"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-semibold text-primary group-hover:text-primary-light transition-colors">
                      {service.title}
                    </h3>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-sm text-accent font-medium bg-accent/10 px-3 py-1 rounded-full">
                        {service.type}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {service.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-sm font-body font-semibold text-primary mb-3 uppercase tracking-wide">
                  Key Areas
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-sm text-foreground/80 font-body">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Button variant="outline" className="group w-full">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-12 bg-gradient-hero text-primary-foreground border-0 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-display font-semibold mb-6">
              Ready to Transform Your Organization?
            </h3>
            <p className="text-xl text-primary-foreground/90 font-body mb-8 max-w-2xl mx-auto">
              Every transformation begins with a conversation. Let's explore how COIREA can guide your organization's evolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" className="group">
                Schedule a Discovery Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
                Download Our Framework
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;