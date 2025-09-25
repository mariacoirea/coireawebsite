import { Target, Crown, Users, Heart, Layers, type LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const pillars: {
  title: string;
  subtitle: string;
  description: string;
  drives: string;
  Icon: LucideIcon;
}[] = [
  {
    title: "Purpose & Culture",
    subtitle: "Clarity & storytelling",
    description:
      "Turn vision into belonging. Purpose and culture set the tone for everything: why you exist and what it feels like to work here. We weave your values and vision into daily practices, creating a coherent field that people trust and want to belong to.",
    drives: "Team alignment, talent retention, brand trust.",
    Icon: Target,
  },
  {
    title: "Supportive Leadership",
    subtitle: "Presence & feedback",
    description:
      "Build leaders who inspire through change. Supportive Leadership defines the energy of an organization. We cultivate leaders who are authentic, values-driven, and able to guide others with clarity, courage, and trust.",
    drives: "Strategic execution, innovation, cultural trust.",
    Icon: Crown,
  },
  {
    title: "Collaboration",
    subtitle: "Trust & flow",
    description:
      "Unlock collective intelligence. When trust and clarity are present, collaboration becomes effortless flow. We create systems that remove silos, foster psychological safety, and turn conflict into creativity.",
    drives: "Faster problem-solving, better ideas, stronger execution.",
    Icon: Users,
  },
  {
    title: "Well-Being",
    subtitle: "Energy & resilience",
    description:
      "Protect human energy as a strategic asset. Well-being is not a perk—it's the foundation of performance. We embed regenerative practices that sustain focus, creativity, and resilience across the whole team.",
    drives: "Productivity, retention, sustainable growth.",
    Icon: Heart,
  },
  {
    title: "Organizational Strategy",
    subtitle: "System Design & Backbone",
    description:
      "Turn vision into reality. Strategy is the structural spine of your business. We design adaptive systems, regenerative KPIs, and decision-making architectures that keep your organization agile and aligned with its deeper purpose.",
    drives: "Scalability, efficiency, resilience.",
    Icon: Layers,
  },
];

const FivePillarFrameworkSection = () => {
  return (
    <section className="relative overflow-hidden py-24" style={{backgroundImage: "url('/lovable-uploads/a2132690-3657-43fd-9280-c318fd590fa4.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
      {/* subtle background accents using semantic tokens */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_10%,hsl(var(--primary)/0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_80%_90%,hsl(var(--accent)/0.10)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.06)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.06)_1px,transparent_1px)] bg-[size:22px_22px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <header className="mx-auto max-w-6xl text-center animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-primary">
            The COIREA Operating System (Regenerative OS)
          </h1>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p className="text-lg md:text-xl leading-relaxed">
              Growth brings complexity — competing priorities, misaligned teams, and stalled momentum. The COIREA Operating System transforms these challenges into coherence.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Built on five core functions: Purpose & Culture, Supportive Leadership, Collaboration, Well-Being, and Organizational Strategy. The COIREA OS is a living architecture that aligns Purpose, People, and Performance into one holistic system.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Unlike static frameworks, the COIREA OS integrates structure with soul: decision-making that flows, metrics that measure meaning as well as results, and practices that sustain human vitality. The result: organizations that are aligned, adaptive, and resilient — designed to grow with integrity.
            </p>
          </div>
        </header>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map(({ title, subtitle, description, drives, Icon }, i) => (
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
                <div className="mt-4">
                  <div className="flex items-start gap-2">
                    <Badge variant="secondary" className="shrink-0">Drives</Badge>
                    <span className="text-xs text-muted-foreground">{drives}</span>
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