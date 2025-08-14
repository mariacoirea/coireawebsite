import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Events = () => {
  return (
    <>
      <SEOHead
        title="COIREA Community Events - Live Conversations for Conscious Leaders"
        description="Join our free monthly events featuring global speakers, forward-thinking leaders, and startup teams building thriving cultures and regenerative growth."
        keywords="COIREA events, conscious leadership workshops, startup community events, future of work panels, organizational transformation, live conversations"
        url="/events"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero Section */}
          <section 
            className="relative py-20 md:py-32 px-6 overflow-hidden"
            style={{
              backgroundImage: `url('/lovable-uploads/a97b716d-b960-4e42-8c39-867863fa4a9d.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
            
            {/* Geometric Accents */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-xl" />
            <div className="absolute bottom-20 right-16 w-40 h-40 bg-gradient-radial from-warm-beige/30 to-transparent rounded-full blur-2xl" />
            
            <div className="container mx-auto max-w-4xl text-center relative z-10">
              <div className="backdrop-blur-sm bg-card/30 rounded-2xl p-8 md:p-12 border border-white/20 shadow-elegant">
                <header>
                  <h1 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-6 leading-tight">
                    COIREA Community Events
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground font-body leading-relaxed">
                    Live Conversations, Workshops, and Panels for Founders and Teams shaping the Future of Work.
                  </p>
                </header>
              </div>
            </div>
          </section>

          {/* Intro Section */}
          <section className="py-16 md:py-20 px-6 relative">
            {/* Background Accents */}
            <div className="absolute top-10 right-1/4 w-24 h-24 bg-gradient-radial from-aura-pearl/40 to-transparent rounded-full blur-xl" />
            <div className="absolute bottom-16 left-1/3 w-32 h-32 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-2xl" />
            
            <div className="container mx-auto max-w-4xl relative z-10">
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                <div className="backdrop-blur-sm bg-card/50 rounded-xl p-6 border border-white/10 shadow-sm hover:shadow-elegant transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg mb-4 flex items-center justify-center">
                    <div className="w-6 h-6 bg-white/20 rounded-full" />
                  </div>
                  <p className="text-lg text-foreground font-body leading-relaxed">
                    At COIREA, we believe transformation happens in community.
                  </p>
                </div>
                
                <div className="backdrop-blur-sm bg-card/50 rounded-xl p-6 border border-white/10 shadow-sm hover:shadow-elegant transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg mb-4 flex items-center justify-center">
                    <div className="w-6 h-6 bg-white/20 rounded-full" />
                  </div>
                  <p className="text-lg text-foreground font-body leading-relaxed">
                    Our events bring together global speakers, forward-thinking leaders, and startup teams who care about building thriving cultures, conscious leadership, and regenerative growth.
                  </p>
                </div>
                
                <div className="backdrop-blur-sm bg-card/50 rounded-xl p-6 border border-white/10 shadow-sm hover:shadow-elegant transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg mb-4 flex items-center justify-center">
                    <div className="w-6 h-6 bg-white/20 rounded-full" />
                  </div>
                  <p className="text-lg text-foreground font-body leading-relaxed">
                    Each month, we host a free, live session — part inspiration, part practical insight — designed to help you scale without losing your team's well-being or purpose.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call-to-Action Section */}
          <section className="py-12 md:py-16 px-6 bg-gradient-subtle relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gradient-radial from-warm-beige/20 to-transparent rounded-full blur-3xl" />
            
            <div className="container mx-auto max-w-4xl text-center relative z-10">
              <div className="backdrop-blur-sm bg-card/40 rounded-2xl p-8 border border-white/20 shadow-elegant">
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-4">
                  Reserve your spot for the next session
                </h2>
                <p className="text-lg text-muted-foreground font-body mb-8">
                  Browse upcoming events below and RSVP for free.
                </p>
                <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto"></div>
              </div>
            </div>
          </section>

          {/* Luma Calendar Section */}
          <section className="py-16 md:py-20 px-6 relative">
            {/* Background Accents */}
            <div className="absolute top-1/4 left-8 w-28 h-28 bg-gradient-radial from-aura-pearl/30 to-transparent rounded-full blur-xl" />
            <div className="absolute bottom-1/3 right-12 w-36 h-36 bg-gradient-radial from-primary/15 to-transparent rounded-full blur-2xl" />
            
            <div className="container mx-auto max-w-6xl relative z-10">
              <div className="backdrop-blur-sm bg-card/60 border border-white/20 rounded-2xl overflow-hidden shadow-elegant">
                {/* Calendar Embed */}
                <div className="relative w-full" style={{ minHeight: '900px' }}>
                  <iframe
                    src="https://lu.ma/embed/calendar/cal-LBFjaY9cu5vzxD9/events?past=true"
                    className="w-full h-full absolute inset-0"
                    style={{ 
                      minHeight: '900px',
                      border: 'none',
                      borderRadius: '12px 12px 0 0'
                    }}
                    frameBorder="0"
                    allowFullScreen
                    aria-label="COIREA Events Calendar including past events"
                    title="COIREA Community Events on Luma - All Events"
                  />
                </div>
                
                {/* View on Luma Button */}
                <div className="p-6 border-t border-white/10 bg-gradient-subtle backdrop-blur-sm text-center">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-primary/40 text-primary hover:bg-primary/15 hover:border-primary/60 transition-all duration-300 backdrop-blur-sm"
                    asChild
                  >
                    <a 
                      href="https://lu.ma/coirea?k=c" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      View on Luma
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Evergreen Footer Section */}
          <section className="py-16 md:py-20 px-6 bg-gradient-subtle relative overflow-hidden">
            {/* Organic Background Elements */}
            <div className="absolute top-16 left-1/4 w-32 h-32 bg-gradient-radial from-warm-beige/40 to-transparent rounded-full blur-2xl" />
            <div className="absolute bottom-20 right-1/3 w-40 h-40 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-8 w-20 h-20 bg-gradient-radial from-aura-pearl/30 to-transparent rounded-full blur-xl" />
            
            <div className="container mx-auto max-w-4xl text-center relative z-10">
              <div className="backdrop-blur-sm bg-card/50 rounded-2xl p-8 md:p-12 border border-white/20 shadow-elegant">
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-6">
                  Never Miss an Event
                </h2>
                <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
                  Join our Luma community to get notified about upcoming sessions, replays, and special workshops.
                </p>
                <Button 
                  variant="default" 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow text-primary-foreground transition-all duration-300 rounded-full px-8 backdrop-blur-sm border border-white/20"
                  asChild
                >
                  <a 
                    href="https://lu.ma/coirea" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Subscribe on Luma
                    <ExternalLink size={16} />
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Events;