import { Users, Activity, Heart, Compass, Workflow, TrendingUp } from "lucide-react";

const questions = [
  { icon: Workflow, text: "Are decisions bottlenecked at the top?" },
  { icon: Activity, text: "Do priorities clash faster than execution?" },
  { icon: Users, text: "Are you losing great people faster than you can onboard them?" },
  { icon: Heart, text: "Does your culture inspire loyalty across generations, especially Gen Z?" },
];

const dataPoints = [
  { stat: "77%", description: "of employees are disengaged at work", source: "Gallup 2024" },
  { stat: "$8.9T", description: "global economic cost of low engagement", source: "Gallup 2024" },
  { stat: "72%", description: "higher engagement with strong culture", source: "Deloitte" },
  { stat: "40%", description: "lower turnover with strong culture", source: "Deloitte" },
  { stat: "72%", description: "of leaders lack clarity on purpose", source: "COIREA" },
  { stat: "33%", description: "of employees are thriving in well-being", source: "Gallup 2024" },
];

const ReflectionCheckpoint = () => {
  return (
    <section
      id="reflection-checkpoint"
      aria-labelledby="reflection-heading"
      className="relative bg-aura-pearl py-16 md:py-20 overflow-hidden"
    >
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div className="absolute -top-10 right-10 w-72 h-72 rounded-full bg-gradient-to-br from-primary/[0.06] to-accent/[0.06] blur-2xl"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-gradient-to-tr from-secondary/[0.06] to-primary/[0.06] blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <header className="text-center mb-8 md:mb-12">
          <h2
            id="reflection-heading"
            className="text-3xl md:text-5xl font-display font-semibold leading-tight bg-clip-text text-transparent bg-gradient-to-br from-primary to-accent"
          >
            Is Your Core Aligned Enough to Grow?
          </h2>
          <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Growth collapses when Purpose, People, and Performance drift apart. Before you move forward, check your core:
          </p>
        </header>

        {/* Questions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
          {questions.map(({ icon: Icon, text }, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 animate-fade-in"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary/80">
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-body">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Data Section */}
        <div className="mb-8 md:mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-4">
              The Data Speaks:
            </h3>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              Low engagement costs the global economy $8.9 trillion annually—that's 9% of global GDP lost to stagnation, turnover, and burnout.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {dataPoints.map(({ stat, description, source }, idx) => (
              <div
                key={idx}
                className="text-center p-4 rounded-xl bg-card/40 backdrop-blur-sm border border-border/50 animate-fade-in"
                style={{ animationDelay: `${(idx + 4) * 80}ms` }}
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                  {stat}
                </div>
                <p className="text-sm text-muted-foreground mb-1">
                  {description}
                </p>
                <p className="text-xs text-muted-foreground/70 italic">
                  {source}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Reflection Box - Horizontal at Bottom */}
        <aside className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 md:p-8 shadow-soft max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-9 w-9 rounded-full bg-accent/10 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-accent" aria-hidden="true" />
            </div>
            <span className="text-sm tracking-wide uppercase text-muted-foreground">Assessment</span>
          </div>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            If you hesitated on the questions and see yourself in the numbers, your organization is likely running on less capacity and clarity than it could.
          </p>
        </aside>
      </div>

      {/* Bottom fading gradient to lead into the framework section */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-muted/50" aria-hidden="true" />
    </section>
  );
};

export default ReflectionCheckpoint;