import { useState, useRef, useCallback } from "react";
import { Search, Expand } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface DashboardZoomProps {
  src: string;
}

const DashboardZoom = ({ src }: DashboardZoomProps) => {
  const [isZooming, setIsZooming] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLButtonElement>(null);
  const ZOOM = 4;
  const LENS_SIZE = 260;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setLensPos({ x, y });
  }, []);

  return (
    <Dialog>
      <div className="relative group">
        <DialogTrigger asChild>
          <button
            type="button"
            ref={containerRef}
            className="relative w-full rounded-2xl overflow-hidden border border-border shadow-2xl bg-background cursor-crosshair text-left"
            onMouseEnter={() => setIsZooming(true)}
            onMouseLeave={() => setIsZooming(false)}
            onMouseMove={handleMouseMove}
            aria-label="Open dashboard image in full size"
          >
            <img
              src={src}
              alt="COIREA Platform Dashboard showing organizational health overview"
              className="w-full h-auto select-none"
              loading="lazy"
              draggable={false}
            />

            {isZooming && (
              <>
                <div
                  className="absolute pointer-events-none rounded-full border-2 border-secondary/60 shadow-xl"
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

                <div className="absolute top-4 right-4 hidden xl:block pointer-events-none w-80 aspect-[4/3] rounded-xl overflow-hidden border border-border bg-background shadow-lg">
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                    style={{
                      transform: `scale(${ZOOM})`,
                      transformOrigin: `${lensPos.x}% ${lensPos.y}%`,
                    }}
                  />
                </div>
              </>
            )}
          </button>
        </DialogTrigger>

        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/85 backdrop-blur-sm border border-border text-xs text-muted-foreground opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity pointer-events-none">
          <Search className="w-3 h-3" />
          <span>Hover to zoom</span>
          <span>•</span>
          <Expand className="w-3 h-3" />
          <span>Click to open</span>
        </div>

        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-secondary/10 to-transparent -z-10 blur-sm" />
      </div>

      <DialogContent className="w-[96vw] max-w-[1400px] p-2 sm:p-3">
        <div className="max-h-[88vh] overflow-auto rounded-lg border border-border bg-background">
          <img
            src={src}
            alt="COIREA Platform Dashboard full preview"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DashboardZoom;

