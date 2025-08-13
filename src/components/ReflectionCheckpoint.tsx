import { Users, Heart, Compass, Sparkles } from "lucide-react";

const questions = [
  { icon: Users, text: "Do you keep losing great people faster than you can onboard them?" },
  { icon: Heart, text: "Does your culture inspire loyalty across generations — especially Gen Z?" },
  { icon: Compass, text: "When priorities clash, do you have a shared compass to guide the way?" },
];

const ReflectionCheckpoint = () => {
  return (
    <section
      id="reflection-checkpoint"
      aria-labelledby="reflection-heading"
      className="relative bg-aura-pearl py-16 md:py-24 overflow-hidden"
    >
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div className="absolute -top-10 right-10 w-72 h-72 rounded-full bg-gradient-to-br from-primary/[0.06] to-accent/[0.06] blur-2xl"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-gradient-to-tr from-secondary/[0.06] to-primary/[0.06] blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <header className="mb-12 md:mb-16">
            <h2
              id="reflection-heading"
              className="text-3xl md:text-5xl font-display font-semibold leading-tight bg-clip-text text-transparent bg-gradient-to-br from-primary to-accent mb-6"
            >
              Before You Lead Forward, Is Your Core Aligned?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Great strategies collapse without a solid foundation. Here are the questions that reveal whether yours is ready for what's next.
            </p>
          </header>

          {/* Questions Grid */}
          <div className="grid gap-6 md:gap-8 mb-12 md:mb-16">
            {questions.map(({ icon: Icon, text }, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 md:gap-6 p-6 md:p-8 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm shadow-soft animate-fade-in"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <div className="flex-shrink-0">
                  <span className="inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6 md:h-7 md:w-7" aria-hidden="true" />
                  </span>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 font-body text-left flex-1">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Reflection Callout */}
          <div className="max-w-2xl mx-auto">
            <div className="rounded-3xl border border-border/60 bg-card/60 backdrop-blur-sm p-8 md:p-10 shadow-elegant">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-accent" aria-hidden="true" />
                </div>
                <span className="text-sm tracking-wide uppercase text-accent font-semibold">Reflection</span>
              </div>

              <div className="space-y-4">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  If you hesitated on any of these, your organization might be running on less capacity, clarity, and connection than it could.
                </p>
                <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
                  That's where the <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent font-semibold">COIREA Core Framework™</span> comes in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fading gradient to lead into the framework section */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-muted/50" aria-hidden="true" />
    </section>
  );
};

export default ReflectionCheckpoint;