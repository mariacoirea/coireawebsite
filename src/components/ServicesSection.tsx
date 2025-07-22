import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Building, Lightbulb, Target, Star } from "lucide-react";
import { Link } from "react-router-dom";

// Tier 1 - Core Offering
const coreOffering = {
  icon: Building,
  title: "Organizational Transformation",
  description: "Holistic restructuring of systems, culture, and leadership — aligned with your organization's purpose, people, and performance. We build systems that scale and last.",
  features: ["Strategic Alignment", "Culture Architecture", "Conscious Leadership", "Change Implementation"],
  duration: "6–18 months",
  type: "Long-Term Partnership",
  isSignature: true
};

// Tier 2 - Short-Term Entry Points
const shortTermOfferings = [
  {
    icon: Users,
    title: "Team Retreats & Workshops",
    description: "Transformative gatherings designed to awaken clarity, cohesion, and collaborative intelligence.",
    features: ["Team Bonding", "Vision Activation", "Conflict Healing", "Creative Co-Creation Tools"],
    duration: "2–5 days",
    type: "Immersive Experiences"
  },
  {
    icon: Lightbulb,
    title: "Leadership Coaching",
    description: "Deep inner work for executives & emerging leaders ready to lead with authenticity, alignment, and regenerative presence.",
    features: ["Executive Presence", "Conscious Decision-Making", "Embodied Communication", "Inner Alignment"],
    duration: "3–12 months",
    type: "1:1 Guidance"
  },
  {
    icon: Target,
    title: "Regenerative Strategy Consulting",
    description: "Strategy rooted in soul and sustainability — integrating purpose, performance, and well-being into long-term business design.",
    features: ["Purpose Integration", "Future Planning", "Performance Systems", "Regenerative Metrics"],
    duration: "Duration flexible",
    type: "Project-Based Engagement"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-br from-warm-beige to-aura-pearl overflow-hidden">
      {/* Enhanced Background Layers */}
      <div className="absolute inset-0">
        {/* Organic pattern overlay */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: `radial-gradient(circle at 20% 30%, hsl(var(--primary)) 2px, transparent 2px),
                                   radial-gradient(circle at 80% 70%, hsl(var(--accent)) 1px, transparent 1px)`,
                 backgroundSize: '60px 60px, 40px 40px'
               }}>
          </div>
        </div>

        {/* Floating geometric elements */}
        <div className="absolute top-20 right-1/4 w-72 h-72 rounded-full bg-gradient-to-br from-primary/[0.02] to-accent/[0.02] blur-2xl"></div>
        <div className="absolute bottom-32 left-1/3 w-96 h-96 rounded-full bg-gradient-to-br from-secondary/[0.02] to-primary/[0.02] blur-3xl"></div>
        
        {/* Subtle mesh gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,hsl(var(--sage))_0%,transparent_60%)] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-6 leading-tight">
            Transformational Offerings for Regenerative Growth
          </h2>
          
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto mb-8">
            We co-create regenerative pathways tailored to your organization's unique rhythm and evolution.
          </p>

          <p className="text-lg text-muted-foreground/80 font-body max-w-4xl mx-auto mb-8">
            Whether you're redesigning your entire organizational architecture or starting with a team-building retreat, our offerings are intentionally crafted to restore coherence, vitality, and purpose in your company.
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
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-4">
              All offerings are co-created based on your organization's needs and stage of evolution.
            </p>
            <p className="text-base text-muted-foreground/80 font-body leading-relaxed">
              Share your context and let's explore how we can support your next phase.
            </p>
          </div>
          
          <Link to="/journey#journey-start">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group px-8 py-4">
              Begin Your Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".3" fill="hsl(var(--aura-pearl))"></path>
        </svg>
      </div>
    </section>
  );
};

export default ServicesSection;
