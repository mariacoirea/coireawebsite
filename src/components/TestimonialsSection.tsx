import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, Conscious Ventures",
    company: "Impact Investment Firm",
    content: "COIREA transformed not just our business strategy, but our entire organizational soul. The 5-Pillar Framework brought coherence we never knew we were missing.",
    rating: 5,
    avatar: "S"
  },
  {
    name: "David Chen",
    role: "VP of Operations",
    company: "Sustainable Tech Solutions",
    content: "The team retreats facilitated by COIREA were game-changing. We went from siloed departments to a unified, purpose-driven organization in just six months.",
    rating: 5,
    avatar: "D"
  },
  {
    name: "Maria Rodriguez",
    role: "Founder & Executive Director",
    company: "Regenerative Consulting Group",
    content: "Working with COIREA on leadership development has been transformational. Their approach to conscious leadership is both practical and deeply inspiring.",
    rating: 5,
    avatar: "M"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <Quote className="w-12 h-12 text-accent" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-6 leading-tight">
            Voices of
            <span className="block italic">Transformation</span>
          </h2>
          
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto mb-8">
            Stories from organizations that have embraced regenerative evolution
          </p>
          
          <div className="w-24 h-0.5 bg-gradient-warm mx-auto"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-elegant transition-all duration-500 group border-0 bg-card/80 backdrop-blur-sm hover:scale-[1.02] relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-hero opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
              
              {/* Quote icon */}
              <div className="flex items-center justify-between mb-6">
                <Quote className="w-8 h-8 text-accent/60" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <blockquote className="text-foreground/90 font-body leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <Avatar className="w-12 h-12 bg-gradient-hero text-primary-foreground flex items-center justify-center font-semibold">
                  {testimonial.avatar}
                </Avatar>
                <div>
                  <div className="font-body font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-accent font-medium">{testimonial.company}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground font-body">Organizations Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground font-body">Client Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">5yr</div>
            <div className="text-muted-foreground font-body">Average Partnership Duration</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;