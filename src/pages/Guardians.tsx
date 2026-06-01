import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Eye, GitBranch, Zap, Anchor, Check } from "lucide-react";
import { toast } from "sonner";
import guardiansHero from "@/assets/guardians-hero.jpg";
import MeetStewards, { type Steward } from "@/components/MeetStewards";
import tanyaAsset from "@/assets/stewards/tanya.jpeg.asset.json";
import juanCarlosAsset from "@/assets/stewards/juan_carlos.jpeg.asset.json";
import marcelaAsset from "@/assets/stewards/marcela.jpeg.asset.json";
import gabrielaAsset from "@/assets/stewards/gabriela.jpg.asset.json";

const Stewards = () => {
  const { i18n } = useTranslation();
  const isEs = i18n.language?.startsWith("es");
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", country: "", work: "", processes: "", resonance: "", practice: "", linkedin: "", website: "",
  });

  const t = (en: string, es: string) => (isEs ? es : en);

  const compass = [
    { icon: Eye, t: t("Diagnose", "Diagnosticar"), d: t("Read the organizational state with clarity and without judgment.", "Leer el estado organizacional con claridad y sin juicio.") },
    { icon: GitBranch, t: t("Map the system", "Mapear el sistema"), d: t("Identify invisible patterns and dynamics beneath the surface.", "Identificar patrones y dinámicas invisibles bajo la superficie.") },
    { icon: Zap, t: t("Challenge", "Desafiar"), d: t("Name what the team is collectively avoiding.", "Nombrar lo que el equipo evita colectivamente.") },
    { icon: Anchor, t: t("Hold presence", "Sostener presencia"), d: t("Remain the steady human anchor through transformation.", "Ser el ancla humana firme durante la transformación.") },
  ];

  const guardians = [
    { name: "Juan Carlos", role: t("Systemic vision", "Visión sistémica"), aporte: t("Systemic gaze", "Mirada sistémica"), desc: t("accompanying organizations to see what the system already knows about itself, before touching anything.", "acompañando a organizaciones a ver lo que el sistema ya sabe de sí mismo, antes de tocar nada.") },
    { name: "Gabriela", role: t("Natural systems intelligence", "Inteligencia de sistemas naturales"), aporte: t("Natural intelligence", "Inteligencia natural"), desc: t("a biologist who reads organizations as ecosystems, from the inside out.", "una bióloga que lee las organizaciones como ecosistemas, de dentro hacia fuera.") },
    { name: "Tanya", role: t("Systemic trust", "Confianza sistémica"), aporte: t("Systemic trust", "Confianza sistémica"), desc: t("holding collective processes with care, especially when something can no longer continue as before.", "sosteniendo procesos colectivos con cuidado, especialmente cuando algo ya no puede seguir como antes.") },
    { name: "Marcela", role: t("Coherence", "Coherencia"), aporte: t("Coherence", "Coherencia"), desc: t("accompanying leaders and teams back to alignment when doing has outpaced being.", "acompañando a líderes y equipos a la alineación cuando el hacer ha superado al ser.") },
  ];

  const criteria = [
    t("You have real experience accompanying human or organizational processes", "Tienes experiencia real acompañando procesos humanos u organizacionales"),
    t("You have an active personal practice — coaching, meditation, somatic work, or similar", "Tienes una práctica personal activa — coaching, meditación, trabajo somático, o similar"),
    t("You want to operate from a system that integrates purpose, structure, and well-being", "Quieres operar desde un sistema que integra propósito, estructura y bienestar"),
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      toast.error(t("Please enter your name.", "Por favor ingresa tu nombre."));
      return;
    }
    setSubmitting(true);
    try {
      const { supabase } = await import("@/integrations/supabase/client");
      const { error } = await supabase.functions.invoke("send-guardian-application", {
        body: form,
      });
      if (error) throw error;
      toast.success(t("Application received. We'll be in touch within 7–10 days.", "Aplicación recibida. Te contactaremos en 7–10 días."));
      setForm({ name: "", email: "", country: "", work: "", processes: "", resonance: "", practice: "", linkedin: "", website: "" });
    } catch (err) {
      console.error(err);
      toast.error(t("Something went wrong. Please try again.", "Algo salió mal. Inténtalo de nuevo."));
    } finally {
      setSubmitting(false);
    }
  };

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const title = t("Stewards — COIREA", "Stewards — COIREA");
  const desc = t(
    "The Stewards are the human presence behind the COIREA system — facilitators holding organizations through deep transformation.",
    "Los Stewards son la presencia humana detrás del sistema COIREA — facilitadores que sostienen a las organizaciones a través de transformaciones profundas."
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://coirea.com/guardians" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* HERO */}
        <section className="relative overflow-hidden min-h-[70vh] flex items-center justify-center px-6 md:px-10 py-24 md:py-32">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${guardiansHero})` }}
            aria-hidden="true"
          />
          {/* Teal overlay */}
          <div className="absolute inset-0 bg-primary/30" aria-hidden="true" />
          {/* Soft edge blur / vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: "inset 0 0 120px 40px rgba(27,94,90,0.55)",
              backdropFilter: "blur(0px)",
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_55%,black_100%)] backdrop-blur-md" aria-hidden="true" />

          <div className="relative max-w-3xl text-center" style={{ color: "#F0EBE1" }}>
            <div className="text-xs tracking-[0.25em] uppercase mb-5 font-body" style={{ color: "#F0EBE1", opacity: 0.85 }}>
              {t("The heart of the system", "El corazón del sistema")}
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 font-semibold" style={{ color: "#F0EBE1" }}>
              {t("The Stewards", "Los Stewards")}
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-body" style={{ color: "#F0EBE1", opacity: 0.92 }}>
              {t(
                "Stewards are the human presence behind the COIREA system. They don't apply a method — they hold a living process. They walk alongside organizations through their deepest transformation.",
                "Los Stewards son la presencia humana detrás del sistema COIREA. No aplican un método — sostienen un proceso vivo. Acompañan a las organizaciones a través de su transformación más profunda."
              )}
            </p>
          </div>
        </section>


        <div className="h-px bg-border" />

        {/* WHAT */}
        <section className="px-6 md:px-10 py-16 md:py-20 bg-warm-beige">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <h2 className="font-display text-3xl md:text-4xl mb-5 leading-tight text-primary font-semibold">
                {t("What does a Steward do?", "¿Qué hace un Steward?")}
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground font-body">
                <p>{t(
                  "A COIREA Steward accompanies teams and leaders through the implementation of the organizational OS. They work from within: reading the current state of the organization, mapping its dynamics and hidden patterns, naming what the system is avoiding, and holding steady presence through the moments of greatest tension.",
                  "Un Steward COIREA acompaña a equipos y líderes en la implementación del sistema operativo organizacional. Trabaja desde adentro: leyendo el estado actual de la organización, mapeando sus dinámicas y patrones ocultos, nombrando lo que el sistema evita, y sosteniendo una presencia firme en los momentos de mayor tensión."
                )}</p>
                <p>{t(
                  "Their role is not to give answers. It is to ask the questions the system needs to hear, and to stay in the room when those questions land.",
                  "Su rol no es dar respuestas. Es hacer las preguntas que el sistema necesita escuchar, y permanecer en la sala cuando esas preguntas aterrizan."
                )}</p>
                <p>{t(
                  "Each Steward brings their own purpose, background, and inner practice to the work. COIREA gives them the system. They bring the presence that makes it real.",
                  "Cada Steward trae su propio propósito, trayectoria y práctica interior al trabajo. COIREA les da el sistema. Ellos traen la presencia que lo hace real."
                )}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {compass.map(({ icon: Icon, t: ct, d }) => (
                <div key={ct} className="rounded-xl p-6 bg-background/70 backdrop-blur-sm border border-border">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-accent/10 border border-accent/30">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <div className="font-body text-base font-semibold mb-2 text-primary">{ct}</div>
                  <div className="text-sm leading-relaxed text-muted-foreground font-body">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-px bg-border" />

        {/* MEET */}
        <MeetStewards
          title={t("Meet the Stewards", "Conoce a los Stewards")}
          subtitle={t("The people holding the system", "Las personas que sostienen el sistema")}
          quote={t(
            "\"We didn't come together because we agree on everything. We came together because each of us carries a piece of what organizations need most right now, and we recognized it in each other.\"",
            "\"No nos unimos porque estemos de acuerdo en todo. Nos unimos porque cada uno carga una pieza de lo que las organizaciones más necesitan ahora mismo, y la reconocimos en el otro.\""
          )}
          caption={t(
            "Five different territories. One living body. Click any steward — on the grid or the map — to learn more.",
            "Cinco territorios diferentes. Un cuerpo vivo. Haz clic en cualquier steward — en la cuadrícula o en el mapa — para conocer más."
          )}
          mapLabel={t("Steward locations", "Ubicación de Stewards")}
          closeLabel={t("Close", "Cerrar")}
          stewards={[
            {
              id: "juan-carlos",
              name: "Juan Carlos",
              location: t("Quito, Ecuador", "Quito, Ecuador"),
              specialty: t("Systemic vision", "Visión sistémica"),
              keyword: t("Systemic gaze — ", "Mirada sistémica — "),
              description: t(
                "accompanying organizations to see what the system already knows about itself, before touching anything.",
                "acompañando a organizaciones a ver lo que el sistema ya sabe de sí mismo, antes de tocar nada."
              ),
              photoUrl: juanCarlosAsset.url,
              map: { top: "41%", left: "37%", labelSide: "left" },
            },
            {
              id: "tanya",
              name: "Tanya",
              location: t("Lima, Perú", "Lima, Perú"),
              specialty: t("Systemic trust", "Confianza sistémica"),
              keyword: t("Systemic trust — ", "Confianza sistémica — "),
              description: t(
                "holding collective processes with care, especially when something can no longer continue as before.",
                "sosteniendo procesos colectivos con cuidado, especialmente cuando algo ya no puede seguir como antes."
              ),
              photoUrl: tanyaAsset.url,
              map: { top: "52%", left: "42%", labelSide: "left" },
            },
            {
              id: "gabriela",
              name: "Gabriela",
              location: t("Santiago, Chile", "Santiago, Chile"),
              specialty: t("Natural intelligence", "Inteligencia natural"),
              keyword: t("Natural intelligence — ", "Inteligencia natural — "),
              description: t(
                "a biologist who reads organizations as ecosystems, from the inside out.",
                "una bióloga que lee las organizaciones como ecosistemas, de dentro hacia fuera."
              ),
              photoUrl: gabrielaAsset.url,
              map: { top: "70%", left: "47%", labelSide: "left" },
            },
            {
              id: "marcela",
              name: "Marcela",
              location: t("Buenos Aires, Argentina", "Buenos Aires, Argentina"),
              specialty: t("Coherence", "Coherencia"),
              keyword: t("Coherence — ", "Coherencia — "),
              description: t(
                "accompanying leaders and teams back to alignment when doing has outpaced being.",
                "acompañando a líderes y equipos a la alineación cuando el hacer ha superado al ser."
              ),
              photoUrl: marcelaAsset.url,
              map: { top: "70%", left: "56%", labelSide: "right" },
            },
          ] satisfies Steward[]}
        />

        <section className="px-6 md:px-10 pb-16 md:pb-20 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-base leading-relaxed font-body text-muted-foreground text-center">
              <p>{t(
                "COIREA was not conceived as a methodology to apply. It was conceived as a container to trust: a space where reflection precedes intervention, where patterns are named without assigning blame, and where organizational intelligence is allowed to emerge from within.",
                "COIREA no fue concebida como una metodología para aplicar. Fue concebida como un contenedor en el que confiar: un espacio donde la reflexión precede a la intervención, donde los patrones se nombran sin asignar culpas, y donde se permite que la inteligencia organizacional emerja desde dentro."
              )}</p>
            </div>
            <div className="font-display text-lg md:text-xl text-center max-w-xl mx-auto mt-10 py-6 leading-relaxed text-primary border-t border-b border-accent/40">
              {t(
                "\"If something in your organization isn't flowing, we're not here to fix it. We're here to help you see it.\"",
                "\"Si algo en tu organización no fluye, no estamos aquí para arreglarlo. Estamos aquí para ayudarte a verlo.\""
              )}
            </div>
          </div>
        </section>

        <div className="h-px bg-accent/40" />

        {/* APPLY */}
        <section className="px-6 md:px-10 py-16 md:py-20 bg-warm-beige text-foreground">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <div className="text-xs tracking-[0.2em] uppercase mb-3 text-muted-foreground font-body">
                {t("For facilitators & coaches", "Para facilitadores y coaches")}
              </div>
              <h2 className="font-display text-3xl md:text-4xl mb-4 leading-tight text-primary font-semibold">
                {t("Do you feel the call to become a Steward?", "¿Sientes el llamado a ser Steward?")}
              </h2>
              <p className="text-base leading-relaxed font-body mb-3 text-muted-foreground">
                {t(
                  "COIREA Stewards are not hired — they are recognized. If you have real experience accompanying human or organizational processes, an active personal practice, and you resonate with a more conscious, systemic, and alive way of doing things — we want to meet you.",
                  "Los Stewards COIREA no se contratan — se reconocen. Si tienes experiencia real acompañando procesos humanos u organizacionales, una práctica personal activa, y resuenas con una forma más consciente, sistémica y viva de hacer las cosas — queremos conocerte."
                )}
              </p>
              <p className="text-base leading-relaxed font-body mb-6 text-muted-foreground">
                {t(
                  "We are building the first Steward network in Latin America. Current applications are part of the foundational process. This is an invitation, not a job posting.",
                  "Estamos construyendo la primera red de Stewards en Latinoamérica. Las aplicaciones actuales son parte del proceso fundacional. Esta es una invitación, no una oferta de trabajo."
                )}
              </p>
              <div className="space-y-3 mb-7">
                {criteria.map((c) => (
                  <div key={c} className="flex gap-3 items-start text-sm leading-relaxed font-body text-foreground/80">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-accent/20 border border-accent/50">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
              <a href="#steward-form" className="inline-block px-7 py-3 rounded-full text-xs tracking-[0.1em] font-semibold uppercase font-body bg-accent text-accent-foreground hover:bg-accent-warm transition-colors">
                {t("Apply to become a Steward →", "Aplica para ser Steward →")}
              </a>
              <p className="text-xs mt-3 italic font-body text-muted-foreground">
                {t("We review every application personally.", "Revisamos cada aplicación personalmente.")}
              </p>
            </div>

            <form id="steward-form" onSubmit={handleSubmit} className="rounded-2xl p-7 bg-background/70 backdrop-blur-sm border border-border">
              <div className="font-display text-2xl mb-1 text-primary font-semibold">
                {t("Tell us about yourself", "Cuéntanos sobre ti")}
              </div>
              <div className="text-xs italic font-body mb-5 text-muted-foreground">
                {t("We'll be in touch within 7–10 days.", "Te contactaremos en 7–10 días.")}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Field label={t("Full name", "Nombre completo")} value={form.name} onChange={set("name")} placeholder={t("Your name", "Tu nombre")} required />
                <Field label={t("Email", "Correo electrónico")} type="email" value={form.email} onChange={set("email")} placeholder={t("your@email.com", "tu@correo.com")} required />
                <Field label={t("Country", "País")} value={form.country} onChange={set("country")} placeholder={t("Where you're based", "Dónde resides")} required />
                <Field label={t("LinkedIn", "LinkedIn")} value={form.linkedin} onChange={set("linkedin")} placeholder="https://linkedin.com/in/..." required />
                <Field full label={t("What do you do today?", "¿A qué te dedicas hoy?")} value={form.work} onChange={set("work")} placeholder={t("Your current work or practice", "Tu trabajo o práctica actual")} />
                <Field full textarea label={t("What kinds of processes have you accompanied?", "¿Qué tipos de procesos has acompañado?")} value={form.processes} onChange={set("processes")} placeholder={t("Teams, individuals, organizations...", "Equipos, individuos, organizaciones...")} />
                <Field full textarea label={t("Why does COIREA resonate with you?", "¿Por qué resuena COIREA contigo?")} value={form.resonance} onChange={set("resonance")} placeholder={t("In your own words...", "En tus propias palabras...")} />
                <Field full textarea label={t("Do you have a personal practice? Which one?", "¿Tienes una práctica personal? ¿Cuál?")} value={form.practice} onChange={set("practice")} placeholder={t("Meditation, coaching, somatic work...", "Meditación, coaching, trabajo somático...")} />
                <Field full label={`${t("Website", "Sitio web")} (${t("optional", "opcional")})`} value={form.website} onChange={set("website")} placeholder="https://" />
              </div>
              <button type="submit" disabled={submitting} className="block w-full mt-5 py-3 rounded-md text-xs tracking-[0.1em] uppercase font-semibold font-body bg-accent text-accent-foreground hover:bg-accent-warm transition-colors disabled:opacity-50">
                {submitting ? t("Submitting...", "Enviando...") : t("Submit application", "Enviar aplicación")}
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const Field = ({
  label, value, onChange, placeholder, full, textarea, required, type,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  full?: boolean;
  textarea?: boolean;
  required?: boolean;
  type?: string;
}) => (
  <div className={`flex flex-col gap-1.5 ${full ? "sm:col-span-2" : ""}`}>
    <label className="text-xs tracking-wide font-body text-muted-foreground">{label}</label>
    {textarea ? (
      <textarea
        value={value} onChange={onChange} placeholder={placeholder} required={required}
        className="resize-none h-20 rounded-md px-3 py-2 text-sm font-body outline-none bg-background border border-border text-foreground placeholder:text-muted-foreground/60 focus:border-accent/60"
      />
    ) : (
      <input
        type={type || "text"}
        value={value} onChange={onChange} placeholder={placeholder} required={required}
        className="rounded-md px-3 py-2 text-sm font-body outline-none bg-background border border-border text-foreground placeholder:text-muted-foreground/60 focus:border-accent/60"
      />
    )}
  </div>
);


export default Stewards;
