import { Lightbulb, Users, Activity, Heart, Compass } from "lucide-react";

const questions = [
  { icon: Lightbulb, text: "Is your team’s creativity driving real breakthroughs — or are you stuck in the comfort zone?" },
  { icon: Users, text: "Do you keep losing great people faster than you can onboard them?" },
  { icon: Activity, text: "How much value is slipping away every time a trained employee walks out the door?" },
  { icon: Heart, text: "Does your culture inspire loyalty across generations — especially Gen Z?" },
  { icon: Compass, text: "When priorities clash, do you have a shared compass to guide the way?" },
];

const ReflectionCheckpoint = () => {
  const leftQuestions = questions.slice(0, 3);
  const rightQuestions = questions.slice(3);
  return (
    <section
      id="reflection-checkpoint"
      aria-labelledby="reflection-heading"
      className="relative bg-aura-pearl py-20 md:py-28 overflow-hidden"
    >
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div className="absolute -top-10 right-10 w-72 h-72 rounded-full bg-gradient-to-br from-primary/[0.06] to-accent/[0.06] blur-2xl"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-gradient-to-tr from-secondary/[0.06] to-primary/[0.06] blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left: Headline + 3 Questions */}
          <div>
            <header className="mb-8 md:mb-10">
              <h2
                id="reflection-heading"
                className="text-4xl md:text-6xl font-display font-semibold leading-tight bg-clip-text text-transparent bg-gradient-to-br from-primary to-accent"
              >
                Before You Lead Forward, Is Your Core Aligned?
              </h2>
              <h2 className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
                Great strategies collapse without a solid foundation. Here are the questions that reveal whether yours is ready for what’s next.
              </h2>
            </header>

            <div className="space-y-5 md:space-y-6">
              {leftQuestions.map(({ icon: Icon, text }, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 animate-fade-in"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary/80">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-body">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 2 Questions + Closing Prompt */}
          <div className="space-y-8">
            <div className="space-y-5 md:space-y-6">
              {rightQuestions.map(({ icon: Icon, text }, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 animate-fade-in"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary/80">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-body">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <aside className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 md:p-8 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-9 w-9 rounded-full bg-accent/10 flex items-center justify-center">
                  <Compass className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <span className="text-sm tracking-wide uppercase text-muted-foreground">Reflection</span>
              </div>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                If you hesitated on any of these, your organization might be running on less capacity, clarity, and connection than it could.
              </p>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed font-medium">
                That’s where the <span className="text-primary font-semibold">COIREA Core Framework™</span> comes in.
              </p>
            </aside>
          </div>
        </div>
      </div>

      {/* Bottom fading gradient to lead into the framework section */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-muted/50" aria-hidden="true" />
    </section>
  );
};

export default ReflectionCheckpoint;
