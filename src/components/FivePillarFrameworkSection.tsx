
import { Target, Crown, Users, Heart, Layers } from "lucide-react";

const FivePillarFrameworkSection = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-neutral-warm/20 via-background to-neutral-warm/10">
      {/* Enhanced sacred geometry background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/8 via-transparent to-accent/8"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,hsl(var(--secondary))_0%,transparent_50%)] opacity-30 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,hsl(var(--accent))_0%,transparent_50%)] opacity-30 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary))_0%,transparent_70%)] opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Streamlined Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-8 text-primary leading-tight">
            The{' '}
            <span className="italic text-accent bg-gradient-to-r from-accent to-accent-warm bg-clip-text text-transparent">
              5 Pillars of Organizational Well-Being
            </span>
          </h2>
          
          {/* Framework Introduction */}
          <div className="max-w-4xl mx-auto mt-12 space-y-6">
            <p className="text-xl md:text-2xl font-display text-primary/90 leading-relaxed italic">
              Reveal what's alive, what's blocked, and what's ready to evolve.
            </p>
            
            <p className="text-lg md:text-xl font-body text-primary/80 leading-relaxed">
              Before building structures, we tune into the inner state of your organization—its people, energy, and culture. The 5 Pillars help us sense where disconnection may live.
            </p>
            
            {/* 5 Pillars List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
              <article className="text-center p-6 bg-background/50 rounded-lg border border-primary/10 hover:border-primary/20 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-primary">
                  <Target className="w-16 h-16" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-primary mb-2">Purpose & Culture</h3>
                <p className="text-sm text-primary/80 font-body mb-2">Turn vision into a company people believe in</p>
                <p className="text-sm text-primary/70 font-body">
                  Your purpose isn’t a slide deck — it’s the fuel for growth. We help you weave it into everyday decisions, so culture becomes your competitive edge.
                </p>
                <p className="text-xs text-primary/70 font-body mt-4"><span className="font-semibold text-primary">Drives:</span> Team alignment, talent retention, brand trust.</p>
                <p className="text-xs text-primary/70 font-body"><span className="font-semibold text-primary">Activation:</span> Strategic Alignment + Regenerative Systems + Embodied Strategy</p>
              </article>

              <article className="text-center p-6 bg-background/50 rounded-lg border border-primary/10 hover:border-primary/20 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-primary">
                  <Crown className="w-16 h-16" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-primary mb-2">Leadership</h3>
                <p className="text-sm text-primary/80 font-body mb-2">Build leaders people want to follow</p>
                <p className="text-sm text-primary/70 font-body">
                  A company rises or falls on the quality of its leadership. We help you shape leaders who are decisive, values-led, and able to inspire through change.
                </p>
                <p className="text-xs text-primary/70 font-body mt-4"><span className="font-semibold text-primary">Drives:</span> Strategic execution, trust, innovation.</p>
                <p className="text-xs text-primary/70 font-body"><span className="font-semibold text-primary">Activation:</span> Conscious Leadership + Embodied Strategy</p>
              </article>

              <article className="text-center p-6 bg-background/50 rounded-lg border border-primary/10 hover:border-primary/20 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-primary">
                  <Users className="w-16 h-16" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-primary mb-2">Collaboration</h3>
                <p className="text-sm text-primary/80 font-body mb-2">Unlock the power of your teams</p>
                <p className="text-sm text-primary/70 font-body">
                  When trust and clarity are in place, collaboration becomes a growth engine. We create the structures and habits that turn silos into synergy.
                </p>
                <p className="text-xs text-primary/70 font-body mt-4"><span className="font-semibold text-primary">Drives:</span> Faster problem-solving, better ideas, stronger execution.</p>
                <p className="text-xs text-primary/70 font-body"><span className="font-semibold text-primary">Activation:</span> Regenerative Systems + Team Strategy</p>
              </article>

              <article className="text-center p-6 bg-background/50 rounded-lg border border-primary/10 hover:border-primary/20 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-primary">
                  <Heart className="w-16 h-16" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-primary mb-2">Well-Being</h3>
                <p className="text-sm text-primary/80 font-body mb-2">Keep your top talent at their best</p>
                <p className="text-sm text-primary/70 font-body">
                  Burnout costs far more than wellness ever will. We design systems that protect your people’s energy and creativity while keeping performance high.
                </p>
                <p className="text-xs text-primary/70 font-body mt-4"><span className="font-semibold text-primary">Drives:</span> Productivity, retention, sustainable growth.</p>
                <p className="text-xs text-primary/70 font-body"><span className="font-semibold text-primary">Activation:</span> Automated Operations + Embodied Strategy</p>
              </article>

              <article className="text-center p-6 bg-background/50 rounded-lg border border-primary/10 hover:border-primary/20 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-primary">
                  <Layers className="w-16 h-16" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-primary mb-2">Organizational Strategy</h3>
                <p className="text-sm text-primary/80 font-body mb-2">Make your business adaptable — and unstoppable</p>
                <p className="text-sm text-primary/70 font-body">
                  Markets shift. Teams grow. Priorities compete. We design the adaptive structures, clear decision pathways, and self-organizing operations that give you the backbone to scale — without burning out people or breaking your culture.
                </p>
                <p className="text-xs text-primary/70 font-body mt-4"><span className="font-semibold text-primary">Drives:</span> Scalability, efficiency, resilience.</p>
                <p className="text-xs text-primary/70 font-body"><span className="font-semibold text-primary">Activation:</span> Regenerative Systems + Automated Operations + Strategic Alignment</p>
              </article>
            </div>
            
            <p className="text-lg md:text-xl font-body text-primary/75 leading-relaxed mt-8">
              Together, these frameworks guide transformation: The Pillars reveal where energy is leaking. The Foundations rebuild systems that support what matters most.
            </p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default FivePillarFrameworkSection;
