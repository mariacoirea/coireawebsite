import { Users, Activity, Heart, Compass, Workflow, TrendingUp } from "lucide-react";

const questions = [
  { icon: Workflow, text: "Are decisions bottlenecked at the top?" },
  { icon: Activity, text: "Do priorities clash faster than execution?" },
  { icon: Users, text: "Are you losing great people faster than you can onboard them?" },
  { icon: Heart, text: "Does your culture inspire loyalty across generations, especially Gen Z?" },
];

const dataPoints = [
  { stat: "77%", description: "employees not engaged at work", source: "Gallup 2024" },
  { stat: "$8.9T", description: "annual cost to global economy", source: "Gallup 2024" },
  { stat: "72%", description: "higher engagement with strong culture", source: "Deloitte" },
  { stat: "40%", description: "lower turnover with strong culture", source: "Deloitte" },
  { stat: "72%", description: "leaders lack clarity on purpose", source: "COIREA" },
  { stat: "60%", description: "teams report weak trust", source: "COIREA" },
  { stat: "33%", description: "employees thriving in well-being", source: "Gallup 2024" },
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

        {/* Data Section with Horizontal Layout */}
        <div className="mb-8 md:mb-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-4">
              The Data Speaks:
            </h3>
          </div>
          
          <div className="space-y-8 max-w-7xl mx-auto">
            {/* Main Problem - Single Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="text-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-colors">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-4">23%</div>
                <p className="text-lg md:text-xl text-foreground mb-2 font-medium">
                  of employees are engaged at work
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  meaning <span className="font-semibold text-primary">77%</span> are not giving their full energy or alignment.
                </p>
                <span className="text-sm text-muted-foreground italic">Source: Gallup, 2024</span>
              </div>
              <div className="text-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-colors">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-4">$8.9T</div>
                <p className="text-lg md:text-xl text-foreground mb-2 font-medium">
                  annual cost to global economy
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  that's <span className="font-semibold text-primary">9%</span> of global GDP lost to stagnation, turnover, and burnout.
                </p>
                <span className="text-sm text-muted-foreground italic">Source: Gallup, 2024</span>
              </div>
            </div>

            {/* Leadership & Trust Issues - Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="text-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-colors">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-4">72%</div>
                <p className="text-lg md:text-xl text-foreground mb-2 font-medium">
                  of leaders lack clarity on purpose
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  creating confusion and misalignment throughout organizations.
                </p>
                <span className="text-sm text-muted-foreground italic">Source: COIREA survey</span>
              </div>
              <div className="text-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-colors">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-4">60%</div>
                <p className="text-lg md:text-xl text-foreground mb-2 font-medium">
                  of teams report weak trust
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  undermining collaboration and psychological safety.
                </p>
                <span className="text-sm text-muted-foreground italic">Source: COIREA survey</span>
              </div>
            </div>

            {/* Well-being & Solution - Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="text-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-colors">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-4">33%</div>
                <p className="text-lg md:text-xl text-foreground mb-2 font-medium">
                  of employees are thriving in well-being
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When people don't feel well, they can't perform well.
                </p>
                <span className="text-sm text-muted-foreground italic">Source: Gallup, 2024</span>
              </div>
              <div className="text-center p-8 rounded-2xl bg-primary/5 backdrop-blur-sm border border-primary/20 hover:border-primary/30 transition-colors">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="text-3xl md:text-4xl font-bold text-primary">72%</div>
                  <span className="text-muted-foreground">higher engagement &</span>
                  <div className="text-3xl md:text-4xl font-bold text-primary">40%</div>
                </div>
                <p className="text-lg md:text-xl text-foreground mb-2 font-medium">
                  lower turnover with strong culture
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  proving that intentional culture transformation delivers measurable results.
                </p>
                <span className="text-sm text-muted-foreground italic">Source: Deloitte</span>
              </div>
            </div>
          </div>
        </div>

        {/* Transition text */}
        <p className="text-center text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
          If you hesitated on the questions and see yourself in the numbers, your organization is likely running on less capacity and clarity than it could.
        </p>
      </div>

      {/* Bottom fading gradient to lead into the framework section */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-muted/50" aria-hidden="true" />
    </section>
  );
};

export default ReflectionCheckpoint;