import { useEffect, useState, useRef } from "react";
import { MapPin, X, User } from "lucide-react";
import tanyaAsset from "@/assets/stewards/tanya.jpeg.asset.json";
import juanCarlosAsset from "@/assets/stewards/juan_carlos.jpeg.asset.json";
import marcelaAsset from "@/assets/stewards/marcela.jpeg.asset.json";
import gabrielaAsset from "@/assets/stewards/gabriela.jpg.asset.json";
import latamMap from "@/assets/stewards/latam-outline.png.asset.json";

export interface Steward {
  id: string;
  name: string;
  location: string;
  specialty: string;
  keyword: string;
  description: string;
  photoUrl: string;
  map: { top: string; left: string; labelSide: "left" | "right" };
}

interface Props {
  title: string;
  subtitle: string;
  quote: string;
  caption: string;
  mapLabel: string;
  closeLabel: string;
  stewards: Steward[];
  extraContent?: React.ReactNode;
}

// Cache processed (background-removed) image URLs per source URL
const processedCache = new Map<string, string>();
const pendingCache = new Map<string, Promise<string>>();

async function removeBgCached(src: string): Promise<string> {
  if (processedCache.has(src)) return processedCache.get(src)!;
  if (pendingCache.has(src)) return pendingCache.get(src)!;
  const p = (async () => {
    try {
      const mod = await import("@imgly/background-removal");
      const blob = await mod.removeBackground(src);
      const url = URL.createObjectURL(blob);
      processedCache.set(src, url);
      return url;
    } catch (e) {
      console.error("Background removal failed", e);
      processedCache.set(src, src);
      return src;
    }
  })();
  pendingCache.set(src, p);
  return p;
}

function StewardAvatar({ src, name, size = 80 }: { src: string; name: string; size?: number }) {
  const [url, setUrl] = useState<string>(src);
  useEffect(() => {
    let alive = true;
    setUrl(src);
    removeBgCached(src).then((u) => { if (alive && u) setUrl(u); }).catch(() => {});
    return () => { alive = false; };
  }, [src]);
  return (
    <div
      className="rounded-full overflow-hidden flex items-center justify-center bg-warm-beige border border-border relative"
      style={{ width: size, height: size }}
      aria-label={name}
    >
      {url ? (
        <img
          src={url}
          alt={name}
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 20%" }}
        />
      ) : (
        <User className="w-1/3 h-1/3 text-muted-foreground/50" />
      )}
    </div>
  );
}

const MeetStewards = ({ title, subtitle, quote, caption, mapLabel, closeLabel, stewards, extraContent }: Props) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const selected = stewards.find((s) => s.id === selectedId) || null;

  const toggle = (id: string) => {
    setSelectedId((curr) => (curr === id ? null : id));
    setTimeout(() => {
      if (detailRef.current) detailRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 50);
  };

  return (
    <section className="px-6 md:px-10 py-16 md:py-20 bg-background">
      <div className="text-center mb-12 max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl mb-2 text-primary font-semibold">{title}</h2>
        <p className="text-sm tracking-wide text-muted-foreground font-body">{subtitle}</p>
      </div>

      {/* Block A — Cards grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {stewards.map((s) => {
          const active = selectedId === s.id;
          return (
            <button
              key={s.id}
              onClick={() => toggle(s.id)}
              className={`group rounded-2xl p-5 bg-warm-beige border-2 text-center transition-all ${
                active ? "border-accent shadow-lg" : "border-border hover:border-accent/50"
              }`}
            >
              <div className="flex justify-center mb-3">
                <StewardAvatar src={s.photoUrl} name={s.name} size={128} />
              </div>
              <div className="font-body font-medium text-primary text-sm md:text-base">{s.name}</div>
              <div className="text-xs text-muted-foreground font-body mt-0.5">{s.location}</div>
              <div className="inline-block mt-3 px-2.5 py-1 rounded-full text-[10px] tracking-wide font-body bg-accent/15 text-accent">
                {s.specialty}
              </div>
            </button>
          );
        })}
      </div>

      {/* Block B — Detail panel */}
      <div
        ref={detailRef}
        className="max-w-6xl mx-auto overflow-hidden transition-all duration-400 ease-out"
        style={{
          maxHeight: selected ? 2000 : 0,
          opacity: selected ? 1 : 0,
          marginTop: selected ? 24 : 0,
        }}
      >
        {selected && (
          <div className="relative rounded-2xl p-6 md:p-8 bg-warm-beige border border-accent/40">
            <button
              onClick={() => setSelectedId(null)}
              aria-label={closeLabel}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center bg-background/70 hover:bg-background border border-border text-muted-foreground hover:text-primary transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-start">
              <div className="flex-shrink-0">
                <StewardAvatar src={selected.photoUrl} name={selected.name} size={96} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-display text-xl md:text-2xl text-primary font-semibold mb-1">{selected.name}</div>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground font-body mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  {selected.location}
                </div>
                <p className="text-base leading-relaxed font-body text-muted-foreground whitespace-pre-line">
                  {selected.keyword && <span className="font-semibold text-accent">{selected.keyword}</span>}
                  {selected.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Block C — Quote + Map */}
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div>
          <blockquote
            className="font-display text-lg md:text-xl leading-relaxed text-primary pl-5"
            style={{ borderLeft: "3px solid hsl(var(--accent))" }}
          >
            {quote}
          </blockquote>
          <p className="text-sm leading-relaxed font-body text-muted-foreground mt-4 pl-5">{caption}</p>
          {extraContent && <div className="mt-6 pl-5">{extraContent}</div>}
        </div>

        <div className="rounded-2xl p-6 bg-warm-beige border border-border">
          <div className="relative mx-auto w-full max-w-sm">
            <img src={latamMap.url} alt={mapLabel} className="w-full h-auto" />
            {stewards.map((s) => {
              const active = selectedId === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => toggle(s.id)}
                  aria-label={s.name}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group"
                  style={{ top: s.map.top, left: s.map.left }}
                >
                  <span className="relative flex items-center justify-center">
                    {active && (
                      <span className="absolute inline-flex h-6 w-6 rounded-full bg-accent/30 animate-ping" />
                    )}
                    <span
                      className={`relative inline-flex rounded-full bg-accent border-2 border-background transition-all ${
                        active ? "h-[14px] w-[14px]" : "h-[10px] w-[10px] group-hover:h-[14px] group-hover:w-[14px]"
                      }`}
                    />
                  </span>
                  <span
                    className={`absolute top-1/2 -translate-y-1/2 ${
                      s.map.labelSide === "left" ? "right-full mr-2" : "left-full ml-2"
                    } text-[11px] font-body font-semibold text-primary whitespace-nowrap`}
                  >
                    {s.name}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="text-center text-xs tracking-[0.2em] uppercase text-muted-foreground font-body mt-4">
            {mapLabel}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetStewards;
