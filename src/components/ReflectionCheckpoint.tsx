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
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-display font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary mb-4">
              The Data Speaks:
            </h3>
          </div>
          
          <div className="space-y-6 max-w-6xl mx-auto">
            {/* Main Problem - Single Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="group text-center p-8 rounded-xl bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 backdrop-blur-sm border border-red-200/50 dark:border-red-800/30 hover:shadow-lg hover:shadow-red-100/20 dark:hover:shadow-red-900/10 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-display font-bold text-red-600 dark:text-red-400 mb-3">77%</div>
                <p className="text-base md:text-lg leading-relaxed">
                  <span className="font-semibold text-red-700 dark:text-red-300">of employees are not engaged at work</span>, meaning they're not giving their full energy or alignment.
                  <span className="text-sm block mt-3 italic text-red-600/70 dark:text-red-400/70">Source: Gallup, 2024</span>
                </p>
              </div>
              <div className="group text-center p-8 rounded-xl bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 backdrop-blur-sm border border-amber-200/50 dark:border-amber-800/30 hover:shadow-lg hover:shadow-amber-100/20 dark:hover:shadow-amber-900/10 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-display font-bold text-amber-600 dark:text-amber-400 mb-3">$8.9T</div>
                <p className="text-base md:text-lg leading-relaxed">
                  <span className="font-semibold text-amber-700 dark:text-amber-300">annual cost to global economy</span>—that's 9% of global GDP lost to stagnation, turnover, and burnout.
                  <span className="text-sm block mt-3 italic text-amber-600/70 dark:text-amber-400/70">Source: Gallup, 2024</span>
                </p>
              </div>
            </div>

            {/* Leadership & Trust Issues - Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="group text-center p-8 rounded-xl bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 backdrop-blur-sm border border-rose-200/50 dark:border-rose-800/30 hover:shadow-lg hover:shadow-rose-100/20 dark:hover:shadow-rose-900/10 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-display font-bold text-rose-600 dark:text-rose-400 mb-3">72%</div>
                <p className="text-base md:text-lg leading-relaxed">
                  <span className="font-semibold text-rose-700 dark:text-rose-300">of leaders lack clarity on purpose</span>, creating confusion and misalignment throughout organizations.
                  <span className="text-sm block mt-3 italic text-rose-600/70 dark:text-rose-400/70">Source: COIREA survey</span>
                </p>
              </div>
              <div className="group text-center p-8 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 backdrop-blur-sm border border-orange-200/50 dark:border-orange-800/30 hover:shadow-lg hover:shadow-orange-100/20 dark:hover:shadow-orange-900/10 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-display font-bold text-orange-600 dark:text-orange-400 mb-3">60%</div>
                <p className="text-base md:text-lg leading-relaxed">
                  <span className="font-semibold text-orange-700 dark:text-orange-300">of teams report weak trust</span>, undermining collaboration and psychological safety.
                  <span className="text-sm block mt-3 italic text-orange-600/70 dark:text-orange-400/70">Source: COIREA survey</span>
                </p>
              </div>
            </div>

            {/* Well-being & Solution - Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="group text-center p-8 rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 backdrop-blur-sm border border-violet-200/50 dark:border-violet-800/30 hover:shadow-lg hover:shadow-violet-100/20 dark:hover:shadow-violet-900/10 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-display font-bold text-violet-600 dark:text-violet-400 mb-3">33%</div>
                <p className="text-base md:text-lg leading-relaxed">
                  <span className="font-semibold text-violet-700 dark:text-violet-300">of employees are thriving in their overall well-being</span>. When people don't feel well, they can't perform well.
                  <span className="text-sm block mt-3 italic text-violet-600/70 dark:text-violet-400/70">Source: Gallup, 2024</span>
                </p>
              </div>
              <div className="group text-center p-8 rounded-xl bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-800/30 hover:shadow-lg hover:shadow-emerald-100/20 dark:hover:shadow-emerald-900/10 transition-all duration-300 ring-2 ring-emerald-200/30 dark:ring-emerald-700/30">
                <div className="text-3xl md:text-4xl font-display font-bold text-emerald-600 dark:text-emerald-400 mb-3">72% & 40%</div>
                <p className="text-base md:text-lg leading-relaxed">
                  <span className="font-semibold text-emerald-700 dark:text-emerald-300">Companies with strong culture see higher engagement and lower turnover</span>, proving that intentional culture transformation delivers measurable results.
                  <span className="text-sm block mt-3 italic text-emerald-600/70 dark:text-emerald-400/70">Source: Deloitte</span>
                </p>
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