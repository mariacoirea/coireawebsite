
import { Target, Crown, Users, Heart, Layers, type LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const pillars: {
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
    subtitle: "Make your business adaptable — and unstoppable",
    description:
      "Markets shift. Teams grow. Priorities compete. We design the adaptive structures, clear decision pathways, and self-organizing operations that give you the backbone to scale — without burning out people or breaking your culture.",
    drives: "Scalability, efficiency, resilience.",
    activation: "Regenerative Systems + Automated Operations + Strategic Alignment",
    Icon: Layers,
  },
];

const FivePillarFrameworkSection = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-background to-muted/30">
      {/* subtle background accents using semantic tokens */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_10%,hsl(var(--primary)/0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_80%_90%,hsl(var(--accent)/0.10)_0%,transparent_60%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <header className="mx-auto max-w-3xl text-center animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
            5 Pillars of Organizational Well‑Being
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            The Pillars reveal where energy is leaking; the Foundations rebuild systems that
            support what matters most.
          </p>
        </header>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map(({ title, subtitle, description, drives, activation, Icon }, i) => (
            <Card
              key={title}
              className="group h-full border-border/60 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 animate-fade-in"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center transition-colors group-hover:bg-primary/15">
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
                <p className="mt-4 text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">Drives:</span> {drives}
                </p>
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">Activation:</span> {activation}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FivePillarFrameworkSection;

