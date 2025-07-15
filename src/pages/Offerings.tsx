import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Offerings = () => {
  const services = [
    {
      title: "Conscious Leadership Development",
      description: "Empowering leaders with courage, clarity, and embodied authenticity through immersive programs and coaching.",
      features: ["Executive coaching", "Leadership retreats", "Authentic presence training", "Decision-making clarity"]
    },
    {
      title: "Regenerative Intelligence Systems",
      description: "Rooted growth guided by the wisdom of nature and systems thinking for sustainable business evolution.",
      features: ["Biomimicry principles", "Systems mapping", "Natural cycles integration", "Regenerative strategy"]
    },
    {
      title: "Organizational Coherence",
      description: "Long-term clarity aligned with your organization's soul and strategic objectives.",
      features: ["Purpose alignment", "Values integration", "Culture transformation", "Strategic coherence"]
    },
    {
      title: "Well-Being Integration",
      description: "Workplace wellness as the foundation of regenerative success and high performance.",
      features: ["Wellness programs", "Stress management", "Work-life harmony", "Mindfulness practices"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-8 leading-tight">
              Our Offerings
            </h1>
            <p className="text-xl text-muted-foreground font-body leading-relaxed">
              Comprehensive solutions for organizational transformation, from individual leadership 
              development to systemic change programs.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-card shadow-soft hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl font-display text-primary">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 font-body mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-foreground/70 font-body">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-subtle">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-6">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-lg text-foreground/80 font-body mb-8 leading-relaxed">
              Let's explore how our 5-Pillar Framework can guide your organization's evolution 
              toward regenerative success.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Begin the Journey
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Offerings;