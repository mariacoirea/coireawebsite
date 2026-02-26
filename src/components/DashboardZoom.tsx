import { useState, useRef, useCallback } from "react";
import { Search } from "lucide-react";

interface DashboardZoomProps {
  src: string;
}

const DashboardZoom = ({ src }: DashboardZoomProps) => {
  const [isZooming, setIsZooming] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const ZOOM = 2.5;
  const LENS_SIZE = 180;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setLensPos({ x, y });
  }, []);

  return (
    <div className="relative group">
      <div
        ref={containerRef}
        className="relative rounded-2xl overflow-hidden border border-border shadow-2xl bg-background cursor-crosshair"
        onMouseEnter={() => setIsZooming(true)}
        onMouseLeave={() => setIsZooming(false)}
        onMouseMove={handleMouseMove}
      >
        <img
          src={src}
          alt="COIREA Platform Dashboard showing organizational health overview"
          className="w-full h-auto"
          loading="lazy"
        />

        {/* Magnifying lens overlay */}
        {isZooming && (
          <div
            className="absolute pointer-events-none rounded-full border-2 border-secondary/60 shadow-lg"
            style={{
              width: LENS_SIZE,
              height: LENS_SIZE,
              left: `calc(${lensPos.x}% - ${LENS_SIZE / 2}px)`,
              top: `calc(${lensPos.y}% - ${LENS_SIZE / 2}px)`,
              backgroundImage: `url(${src})`,
              backgroundSize: `${100 * ZOOM}% ${100 * ZOOM}%`,
              backgroundPosition: `${lensPos.x}% ${lensPos.y}%`,
              backgroundRepeat: "no-repeat",
            }}
          />
        )}
      </div>

      {/* Hint */}
      <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <Search className="w-3 h-3" />
        <span>Hover to zoom</span>
      </div>

      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-secondary/10 to-transparent -z-10 blur-sm" />
    </div>
  );
};

export default DashboardZoom;
