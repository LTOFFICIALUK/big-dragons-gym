import {
  getAppleMapsDirectionsUrl,
  getGoogleMapsDirectionsUrl,
} from "@/lib/maps";
import { cn } from "@/lib/utils";
import { Map, Navigation } from "lucide-react";

type MapDirectionsProps = {
  className?: string;
  layout?: "row" | "stack";
  googleLabel?: string;
  appleLabel?: string;
};

export const MapDirections = ({
  className,
  layout = "row",
  googleLabel = "Google Maps",
  appleLabel = "Apple Maps",
}: MapDirectionsProps) => (
  <div
    className={cn(
      "flex gap-3",
      layout === "row" ? "flex-col sm:flex-row" : "flex-col",
      className,
    )}
    role="group"
    aria-label="Directions"
  >
    <a
      href={getGoogleMapsDirectionsUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex flex-1 items-center justify-center gap-2.5 rounded border-2 border-white/20 bg-white/5 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all hover:border-white/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <Map className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
      {googleLabel}
    </a>
    <a
      href={getAppleMapsDirectionsUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex flex-1 items-center justify-center gap-2.5 rounded border-2 border-white/20 bg-white/5 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all hover:border-white/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <Navigation className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
      {appleLabel}
    </a>
  </div>
);

export const MapDirectionsLight = ({
  className,
  googleLabel = "Google Maps",
  appleLabel = "Apple Maps",
}: Omit<MapDirectionsProps, "layout">) => (
  <div
    className={cn("flex flex-col gap-3 sm:flex-row", className)}
    role="group"
    aria-label="Directions"
  >
    <a
      href={getGoogleMapsDirectionsUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex flex-1 items-center justify-center gap-2.5 rounded border-2 border-maroon/20 bg-white px-5 py-3 text-sm font-bold uppercase tracking-wide text-maroon transition-all hover:border-maroon hover:bg-maroon hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
    >
      <Map className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
      {googleLabel}
    </a>
    <a
      href={getAppleMapsDirectionsUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex flex-1 items-center justify-center gap-2.5 rounded border-2 border-maroon/20 bg-white px-5 py-3 text-sm font-bold uppercase tracking-wide text-maroon transition-all hover:border-maroon hover:bg-maroon hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
    >
      <Navigation className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
      {appleLabel}
    </a>
  </div>
);
