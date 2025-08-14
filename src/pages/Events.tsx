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
            className="relative py-16 md:py-24 px-6 min-h-[70vh] flex items-center justify-center overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(210, 195, 175, 0.3) 0%, rgba(225, 215, 200, 0.2) 100%), url('/lovable-uploads/e1245c87-e916-4502-8adf-fb8970e5bb4c.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Content */}
            <div className="container mx-auto max-w-4xl text-center relative z-10">
              <header>
                <h1 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-6 leading-tight">
                  COIREA Community Events
                </h1>
                <p className="text-xl md:text-2xl text-primary/80 font-body leading-relaxed">
                  Live Conversations, Workshops, and Panels for Founders and Teams shaping the Future of Work.
                </p>
              </header>
            </div>
          </section>

          {/* Intro Section */}
          <section className="py-16 md:py-20 px-6">
            <div className="container mx-auto max-w-4xl">
              <div className="prose prose-lg max-w-none text-center">
                <p className="text-lg md:text-xl text-foreground font-body leading-relaxed mb-6">
                  At COIREA, we believe transformation happens in community.
                </p>
                <p className="text-lg md:text-xl text-foreground font-body leading-relaxed mb-6">
                  Our events bring together global speakers, forward-thinking leaders, and startup teams who care about building thriving cultures, conscious leadership, and regenerative growth.
                </p>
                <p className="text-lg md:text-xl text-foreground font-body leading-relaxed">
                  Each month, we host a free, live session — part inspiration, part practical insight — designed to help you scale without losing your team's well-being or purpose.
                </p>
              </div>
            </div>
          </section>

          {/* Call-to-Action Section */}
          <section className="py-12 md:py-16 px-6 bg-accent/5">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-4">
                Reserve your spot for the next session
              </h2>
              <p className="text-lg text-muted-foreground font-body mb-8">
                Browse upcoming events below and RSVP for free.
              </p>
              <div className="w-8 h-0.5 bg-primary mx-auto"></div>
            </div>
          </section>

          {/* Luma Calendar Section */}
          <section className="py-16 md:py-20 px-6">
            <div className="container mx-auto max-w-6xl">
              <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
                {/* Calendar Embed */}
                <div className="relative w-full" style={{ minHeight: '900px' }}>
                  <iframe
                    src="https://lu.ma/embed/calendar/cal-LBFjaY9cu5vzxD9/events"
                    className="w-full h-full absolute inset-0"
                    style={{ 
                      minHeight: '900px',
                      border: 'none',
                      borderRadius: '8px'
                    }}
                    frameBorder="0"
                    allowFullScreen
                    aria-label="COIREA Events Calendar"
                    title="COIREA Community Events on Luma"
                  />
                </div>
                
                {/* View on Luma Button */}
                <div className="p-6 border-t border-border bg-muted/20 text-center">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300"
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
          <section className="py-16 md:py-20 px-6 bg-gradient-subtle">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-6">
                Never Miss an Event
              </h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
                Join our Luma community to get notified about upcoming sessions, replays, and special workshops.
              </p>
              <Button 
                variant="default" 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 rounded-full px-8"
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
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Events;