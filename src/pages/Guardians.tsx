import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Eye, GitBranch, Zap, Anchor, User, Check, CircleDotDashed } from "lucide-react";
import { toast } from "sonner";

// COIREA Guardians palette (earth tones, aligned with brand essence)
const palette = {
  bg: "#F0EBE1",
  bgAlt: "#EAE4D8",
  ink: "#1B5E5A",
  sage: "#5C7A5A",
  gold: "#C8A96E",
};

const Guardians = () => {
  const { i18n } = useTranslation();
  const isEs = i18n.language?.startsWith("es");
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "", country: "", work: "", processes: "", resonance: "", practice: "", link: "",
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
    setSubmitting(true);
    // Lightweight client-side submission stub — wire to backend later if needed
    await new Promise((r) => setTimeout(r, 600));
    toast.success(t("Application received. We'll be in touch within 7–10 days.", "Aplicación recibida. Te contactaremos en 7–10 días."));
    setForm({ name: "", country: "", work: "", processes: "", resonance: "", practice: "", link: "" });
    setSubmitting(false);
  };

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const title = t("Guardians — COIREA", "Guardianes — COIREA");
  const desc = t(
    "The Guardians are the human presence behind the COIREA system — facilitators holding organizations through deep transformation.",
    "Los Guardianes son la presencia humana detrás del sistema COIREA — facilitadores que sostienen a las organizaciones a través de transformaciones profundas."
  );

  return (
    <div className="min-h-screen" style={{ background: palette.bg, color: palette.ink }}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://coirea.com/guardians" />
      </Helmet>

      <Header />

      <main className="pt-20 font-body" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
        {/* HERO */}
        <section className="relative overflow-hidden px-6 md:px-10 py-20 md:py-28" style={{ background: palette.bg }}>
          <div className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 hidden md:block">
            <div className="relative w-[260px] h-[260px]">
              <div className="absolute inset-0 rounded-full" style={{ border: `1px solid ${palette.sage}1a` }} />
              <div className="absolute top-1/2 left-1/2 w-[180px] h-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ border: `1px solid ${palette.gold}26` }} />
              <div className="absolute top-1/2 left-1/2 w-[90px] h-[90px] -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center" style={{ background: `${palette.gold}10`, border: `1px solid ${palette.gold}33` }}>
                <CircleDotDashed className="w-6 h-6" style={{ color: `${palette.gold}99` }} />
              </div>
            </div>
          </div>
          <div className="max-w-2xl">
            <div className="text-[10px] tracking-[0.2em] uppercase mb-5" style={{ color: palette.sage }}>
              {t("The heart of the system", "El corazón del sistema")}
            </div>
            <h1 className="text-5xl md:text-6xl leading-[1.05] mb-6 font-display" style={{ color: palette.ink, fontWeight: 300 }}>
              {t("The", "Los")}<br />{t("Guardians", "Guardianes")}
            </h1>
            <p className="text-base leading-[1.8] max-w-md font-light" style={{ color: palette.sage }}>
              {t(
                "Guardians are the human presence behind the COIREA system. They don't apply a method — they hold a living process. They walk alongside organizations through their deepest transformation.",
                "Los Guardianes son la presencia humana detrás del sistema COIREA. No aplican un método — sostienen un proceso vivo. Acompañan a las organizaciones a través de su transformación más profunda."
              )}
            </p>
          </div>
        </section>

        <div className="h-px" style={{ background: `${palette.ink}1a` }} />

        {/* WHAT */}
        <section className="px-6 md:px-10 py-16" style={{ background: palette.bgAlt }}>
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <h2 className="font-display text-4xl mb-5 leading-tight" style={{ color: palette.ink, fontWeight: 300 }}>
                {t("What does a", "¿Qué hace un")}<br />{t("Guardian do?", "Guardián?")}
              </h2>
              <div className="space-y-4 text-[14px] leading-[1.8] font-light" style={{ color: palette.sage }}>
                <p>{t(
                  "A COIREA Guardian accompanies teams and leaders through the implementation of the organizational OS. They work from within: reading the current state of the organization, mapping its dynamics and hidden patterns, naming what the system is avoiding, and holding steady presence through the moments of greatest tension.",
                  "Un Guardián COIREA acompaña a equipos y líderes en la implementación del sistema operativo organizacional. Trabaja desde adentro: leyendo el estado actual de la organización, mapeando sus dinámicas y patrones ocultos, nombrando lo que el sistema evita, y sosteniendo una presencia firme en los momentos de mayor tensión."
                )}</p>
                <p>{t(
                  "Their role is not to give answers. It is to ask the questions the system needs to hear — and to stay in the room when those questions land.",
                  "Su rol no es dar respuestas. Es hacer las preguntas que el sistema necesita escuchar — y permanecer en la sala cuando esas preguntas aterrizan."
                )}</p>
                <p>{t(
                  "Each Guardian brings their own purpose, background, and inner practice to the work. COIREA gives them the system and the network. They bring the presence that makes it real.",
                  "Cada Guardián trae su propio propósito, trayectoria y práctica interior al trabajo. COIREA les da el sistema y la red. Ellos traen la presencia que lo hace real."
                )}</p>
              </div>
              <div className="grid grid-cols-2 gap-2.5 mt-8">
                {compass.map(({ icon: Icon, t: ct, d }) => (
                  <div key={ct} className="rounded-xl p-4" style={{ background: palette.bg, border: `0.5px solid ${palette.ink}1f` }}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mb-2.5" style={{ background: `${palette.gold}1f`, border: `1px solid ${palette.gold}40` }}>
                      <Icon className="w-3.5 h-3.5" style={{ color: palette.gold }} />
                    </div>
                    <div className="text-[12px] font-medium mb-1" style={{ color: palette.ink }}>{ct}</div>
                    <div className="text-[11.5px] leading-[1.6] font-light" style={{ color: palette.sage }}>{d}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center min-h-[260px]">
              <div className="w-[220px] h-[220px] rounded-full flex items-center justify-center" style={{ border: `1px solid ${palette.sage}26` }}>
                <div className="w-[155px] h-[155px] rounded-full flex items-center justify-center" style={{ border: `1px solid ${palette.gold}33` }}>
                  <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: `${palette.gold}14`, border: `1px solid ${palette.gold}40` }}>
                    <CircleDotDashed className="w-7 h-7" style={{ color: `${palette.gold}99` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="h-px" style={{ background: `${palette.ink}1a` }} />

        {/* MEET */}
        <section className="px-6 md:px-10 py-16" style={{ background: palette.bg }}>
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl mb-1.5" style={{ color: palette.ink, fontWeight: 300 }}>
              {t("Meet the Guardians", "Conoce a los Guardianes")}
            </h2>
            <p className="text-[11px] tracking-[0.08em] font-light" style={{ color: palette.sage }}>
              {t("The people holding the system", "Las personas que sostienen el sistema")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-6xl mx-auto mb-12">
            {guardians.map((g) => (
              <div key={g.name} className="rounded-2xl p-5 text-center" style={{ background: palette.bgAlt, border: `0.5px solid ${palette.ink}1a` }}>
                <div className="w-[72px] h-[72px] rounded-full flex flex-col items-center justify-center mx-auto mb-3 gap-0.5" style={{ background: `${palette.gold}14`, border: `1.5px dashed ${palette.gold}59` }}>
                  <User className="w-[17px] h-[17px]" style={{ color: `${palette.gold}80` }} />
                  <span className="text-[7.5px] tracking-wide" style={{ color: `${palette.gold}8c` }}>
                    {t("Photo soon", "Foto pronto")}
                  </span>
                </div>
                <div className="font-display text-[17px] mb-1" style={{ color: palette.ink, fontWeight: 400 }}>{g.name}</div>
                <div className="text-[10px] italic mb-3 font-display tracking-wide" style={{ color: palette.sage }}>{g.role}</div>
                <div className="text-[11px] leading-[1.65] font-light text-left pt-3" style={{ color: palette.sage, borderTop: `0.5px solid ${palette.ink}14` }}>
                  <strong style={{ color: palette.ink, fontWeight: 500 }}>{g.aporte} —</strong> {g.desc}
                </div>
              </div>
            ))}
          </div>

          {/* NARRATIVE */}
          <div className="pt-12 max-w-3xl mx-auto" style={{ borderTop: `0.5px solid ${palette.ink}1a` }}>
            <p className="font-display italic text-xl text-center max-w-xl mx-auto mb-8 leading-snug" style={{ color: palette.ink, fontWeight: 300 }}>
              {t(
                "\"We didn't come together because we agree on everything. We arrived together because each of us carries a piece of what organizations most need today, and we recognized it in one another.\"",
                "\"No nos unimos porque estemos de acuerdo en todo. Llegamos juntos porque cada uno carga una pieza de lo que las organizaciones más necesitan hoy, y la reconocimos en el otro.\""
              )}
            </p>
            <div className="max-w-2xl mx-auto space-y-4 text-[14px] leading-[1.85] font-light" style={{ color: palette.sage }}>
              <p>
                {t(
                  "María José brings the vision: a decade leading organizations across three continents, and the courage to ask what it really means for a system to be alive. Tanya brings systemic trust: the capacity to hold collective processes with care, especially when something can no longer continue as before. Gabriela brings the intelligence of natural systems: a biologist who reads organizations as one reads ecosystems, from the inside out. Marcela brings coherence: accompanying leaders and teams back to alignment when doing has outpaced being. And Juan Carlos brings the ",
                  "María José aporta la visión: una década liderando organizaciones en tres continentes, y el valor de preguntarse qué significa realmente que un sistema esté vivo. Tanya aporta la confianza sistémica: la capacidad de sostener procesos colectivos con cuidado, especialmente cuando algo ya no puede seguir como hasta ahora. Gabriela aporta la inteligencia de los sistemas naturales: una bióloga que lee las organizaciones como se leen los ecosistemas, de dentro hacia fuera. Marcela aporta coherencia: acompañando a líderes y equipos a volver a la alineación cuando el hacer ha superado al ser. Y Juan Carlos aporta la "
                )}
                <em style={{ color: palette.ink }}>{t("systemic gaze", "mirada sistémica")}</em>
                {t(
                  ": accompanying organizations to see what the system already knows about itself, before touching anything.",
                  ": acompañando a organizaciones a ver lo que el sistema ya sabe de sí mismo, antes de tocar nada."
                )}
              </p>
            </div>
            <div className="font-display italic text-2xl text-center my-8" style={{ color: palette.ink, fontWeight: 300 }}>
              {t("Five different territories. One single living body.", "Cinco territorios diferentes. Un solo cuerpo vivo.")}
            </div>
            <div className="max-w-xl mx-auto text-[14px] leading-[1.85] font-light text-center" style={{ color: palette.sage }}>
              <p>{t(
                "COIREA was not conceived as a methodology to apply. It was conceived as a container to trust: a space where reflection precedes intervention, where patterns are identified without pointing to culprits, and where organizational intelligence is allowed to emerge from within.",
                "COIREA no fue concebida como una metodología para aplicar. Fue concebida como un contenedor en el que confiar: un espacio donde la reflexión precede a la intervención, donde se identifican los patrones sin señalar culpables, y donde se permite que la inteligencia organizacional emerja desde dentro."
              )}</p>
            </div>
            <div className="font-display italic text-[17px] text-center max-w-md mx-auto mt-7 py-5 leading-relaxed" style={{ color: palette.ink, fontWeight: 400, borderTop: `0.5px solid ${palette.gold}4d`, borderBottom: `0.5px solid ${palette.gold}4d` }}>
              {t(
                "\"If something in your organization isn't flowing, we're not here to fix it. We're here to help you see it.\"",
                "\"Si algo en tu organización no fluye, no estamos aquí para arreglarlo. Estamos aquí para ayudarte a verlo.\""
              )}
            </div>
          </div>
        </section>

        <div className="h-px" style={{ background: `${palette.gold}40` }} />

        {/* APPLY */}
        <section className="px-6 md:px-10 py-16" style={{ background: palette.ink, color: palette.bg }}>
          <div className="grid md:grid-cols-2 gap-14 items-start max-w-6xl mx-auto">
            <div>
              <div className="text-[9px] tracking-[0.2em] uppercase mb-3" style={{ color: `${palette.bg}73` }}>
                {t("For facilitators & coaches", "Para facilitadores y coaches")}
              </div>
              <h2 className="font-display text-4xl mb-4 leading-tight" style={{ color: palette.bg, fontWeight: 300 }}>
                {t("Do you feel the call to become a Guardian?", "¿Sientes el llamado a ser Guardián?")}
              </h2>
              <p className="text-[14px] leading-[1.8] font-light mb-3" style={{ color: `${palette.bg}b3` }}>
                {t(
                  "COIREA Guardians are not hired — they are recognized. If you have real experience accompanying human or organizational processes, an active personal practice, and you resonate with a more conscious, systemic, and alive way of doing things — we want to meet you.",
                  "Los Guardianes COIREA no se contratan — se reconocen. Si tienes experiencia real acompañando procesos humanos u organizacionales, una práctica personal activa, y resuenas con una forma más consciente, sistémica y viva de hacer las cosas — queremos conocerte."
                )}
              </p>
              <p className="text-[14px] leading-[1.8] font-light mb-6" style={{ color: `${palette.bg}b3` }}>
                {t(
                  "We are building the first Guardian network in Latin America. Current applications are part of the foundational process. This is an invitation, not a job posting.",
                  "Estamos construyendo la primera red de Guardianes en Latinoamérica. Las aplicaciones actuales son parte del proceso fundacional. Esta es una invitación, no una oferta de trabajo."
                )}
              </p>
              <div className="space-y-3 mb-7">
                {criteria.map((c) => (
                  <div key={c} className="flex gap-3 items-start text-[14px] leading-snug font-light" style={{ color: `${palette.bg}cc` }}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${palette.gold}2e`, border: `1px solid ${palette.gold}59` }}>
                      <Check className="w-2.5 h-2.5" style={{ color: palette.gold }} />
                    </div>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
              <a href="#guardian-form" className="inline-block px-7 py-3 rounded-full text-[11px] tracking-[0.1em] font-medium" style={{ background: palette.gold, color: palette.ink }}>
                {t("Apply to become a Guardian →", "Aplica para ser Guardián →")}
              </a>
              <p className="text-[11px] mt-3 italic font-display" style={{ color: `${palette.bg}61` }}>
                {t("We review every application personally.", "Revisamos cada aplicación personalmente.")}
              </p>
            </div>

            <form id="guardian-form" onSubmit={handleSubmit} className="rounded-2xl p-7" style={{ background: "rgba(255,255,255,0.05)", border: `0.5px solid ${palette.bg}1f` }}>
              <div className="font-display text-2xl mb-1" style={{ color: palette.bg, fontWeight: 400 }}>
                {t("Tell us about yourself", "Cuéntanos sobre ti")}
              </div>
              <div className="text-[11px] italic font-display mb-5" style={{ color: `${palette.bg}73` }}>
                {t("We'll be in touch within 7–10 days.", "Te contactaremos en 7–10 días.")}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <Field label={t("Full name", "Nombre completo")} value={form.name} onChange={set("name")} placeholder={t("Your name", "Tu nombre")} required />
                <Field label={t("Country", "País")} value={form.country} onChange={set("country")} placeholder={t("Where you're based", "Dónde resides")} required />
                <Field full label={t("What do you do today?", "¿A qué te dedicas hoy?")} value={form.work} onChange={set("work")} placeholder={t("Your current work or practice", "Tu trabajo o práctica actual")} />
                <Field full textarea label={t("What kinds of processes have you accompanied?", "¿Qué tipos de procesos has acompañado?")} value={form.processes} onChange={set("processes")} placeholder={t("Teams, individuals, organizations...", "Equipos, individuos, organizaciones...")} />
                <Field full textarea label={t("Why does COIREA resonate with you?", "¿Por qué resuena COIREA contigo?")} value={form.resonance} onChange={set("resonance")} placeholder={t("In your own words...", "En tus propias palabras...")} />
                <Field full textarea label={t("Do you have a personal practice? Which one?", "¿Tienes una práctica personal? ¿Cuál?")} value={form.practice} onChange={set("practice")} placeholder={t("Meditation, coaching, somatic work...", "Meditación, coaching, trabajo somático...")} />
                <Field full label={`${t("LinkedIn or website", "LinkedIn o sitio web")} (${t("optional", "opcional")})`} value={form.link} onChange={set("link")} placeholder="https://" />
              </div>
              <button type="submit" disabled={submitting} className="block w-full mt-4 py-3 rounded-md text-[11px] tracking-[0.1em] disabled:opacity-50" style={{ background: `${palette.bg}14`, border: `0.5px solid ${palette.bg}33`, color: palette.bg }}>
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
  label, value, onChange, placeholder, full, textarea, required,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  full?: boolean;
  textarea?: boolean;
  required?: boolean;
}) => (
  <div className={`flex flex-col gap-1 ${full ? "sm:col-span-2" : ""}`}>
    <label className="text-[10px] tracking-wide" style={{ color: "rgba(240,235,225,0.55)" }}>{label}</label>
    {textarea ? (
      <textarea
        value={value} onChange={onChange} placeholder={placeholder} required={required}
        className="resize-none h-[68px] rounded-md px-3 py-2 text-[12px] font-light outline-none"
        style={{ background: "rgba(255,255,255,0.07)", border: "0.5px solid rgba(240,235,225,0.18)", color: "#F0EBE1" }}
      />
    ) : (
      <input
        value={value} onChange={onChange} placeholder={placeholder} required={required}
        className="rounded-md px-3 py-2 text-[12px] font-light outline-none"
        style={{ background: "rgba(255,255,255,0.07)", border: "0.5px solid rgba(240,235,225,0.18)", color: "#F0EBE1" }}
      />
    )}
  </div>
);

export default Guardians;
