
import { Target, Crown, Users, Heart, Layers, type LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const pillars: {
  title: string;
  subtitle: string;
  description: string;
  drives: string;
  activation: string;
  Icon: LucideIcon;
}[] = [
  {
    title: "Purpose & Culture",
    subtitle: "Turn vision into a company people believe in",
    description:
      "Your purpose isn’t a slide deck — it’s the fuel for growth. We help you weave it into everyday decisions, so culture becomes your competitive edge.",
    drives: "Team alignment, talent retention, brand trust.",
    activation: "Strategic Alignment + Regenerative Systems + Embodied Strategy",
    Icon: Target,
  },
  {
    title: "Leadership",
    subtitle: "Build leaders people want to follow",
    description:
      "A company rises or falls on the quality of its leadership. We help you shape leaders who are decisive, values-led, and able to inspire through change.",
    drives: "Strategic execution, trust, innovation.",
    activation: "Conscious Leadership + Embodied Strategy",
    Icon: Crown,
  },
  {
    title: "Collaboration",
    subtitle: "Unlock the power of your teams",
    description:
      "When trust and clarity are in place, collaboration becomes a growth engine. We create the structures and habits that turn silos into synergy.",
    drives: "Faster problem-solving, better ideas, stronger execution.",
    activation: "Regenerative Systems + Team Strategy",
    Icon: Users,
  },
  {
    title: "Well-Being",
    subtitle: "Keep your top talent at their best",
    description:
      "Burnout costs far more than wellness ever will. We design systems that protect your people’s energy and creativity while keeping performance high.",
    drives: "Productivity, retention, sustainable growth.",
    activation: "Automated Operations + Embodied Strategy",
    Icon: Heart,
  },
  {
    title: "Organizational Strategy",
    subtitle: "Make your business adaptable",
    description:
      "Markets shift. Teams grow. Priorities compete. We design the adaptive structures, clear decision pathways, and self-organizing operations that give you the backbone to scale — without burning out people or breaking your culture.",
    drives: "Scalability, efficiency, resilience.",
    activation: "Regenerative Systems + Automated Operations + Strategic Alignment",
    Icon: Layers,
  },
];

const FivePillarFrameworkSection = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-aura-pearl to-warm-beige">
      {/* subtle background accents using semantic tokens */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_10%,hsl(var(--primary)/0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_80%_90%,hsl(var(--accent)/0.10)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.06)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.06)_1px,transparent_1px)] bg-[size:22px_22px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <header className="mx-auto max-w-4xl text-center animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-primary">
            The COIREA Core Framework™
          </h1>
          <h2 className="mt-4 text-base md:text-lg text-muted-foreground">
            Growth creates complexity — priorities compete, alignment slips, and energy drains. These pillars focus on the five forces that shape a thriving organization: a purpose-led culture, values-driven leadership, high-trust collaboration, human-centered well-being, and adaptive strategy. Our Structural Foundations turn these into practical systems that keep your company aligned, resilient, and ready to grow with integrity.
          </h2>
        </header>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map(({ title, subtitle, description, drives, activation, Icon }, i) => (
            <Card
              key={title}
              className="group h-full bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-background/40 border-border/50 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 animate-fade-in"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary ring-1 ring-primary/20 group-hover:ring-primary/30 transition-all flex items-center justify-center">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <CardTitle className="mt-4 text-center text-lg text-foreground">{title}</CardTitle>
                <CardDescription className="text-center text-sm">{subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <Badge variant="secondary" className="shrink-0">Drives</Badge>
                    <span className="text-xs text-muted-foreground">{drives}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="shrink-0">Activation</Badge>
                    <span className="text-xs text-muted-foreground">{activation}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FivePillarFrameworkSection;

