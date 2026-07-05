import {
  getAppleMapsDirectionsUrl,
  getGoogleMapsDirectionsUrl,
} from "@/lib/maps";
import { cn } from "@/lib/utils";

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
      <GoogleMapsIcon />
      {googleLabel}
    </a>
    <a
      href={getAppleMapsDirectionsUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex flex-1 items-center justify-center gap-2.5 rounded border-2 border-white/20 bg-white/5 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all hover:border-white/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <AppleMapsIcon />
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
      <GoogleMapsIcon className="h-5 w-5" />
      {googleLabel}
    </a>
    <a
      href={getAppleMapsDirectionsUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex flex-1 items-center justify-center gap-2.5 rounded border-2 border-maroon/20 bg-white px-5 py-3 text-sm font-bold uppercase tracking-wide text-maroon transition-all hover:border-maroon hover:bg-maroon hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
    >
      <AppleMapsIcon className="h-5 w-5" />
      {appleLabel}
    </a>
  </div>
);

const GoogleMapsIcon = ({ className }: { className?: string }) => (
  <svg
    className={cn("h-5 w-5 shrink-0", className)}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
  </svg>
);

const AppleMapsIcon = ({ className }: { className?: string }) => (
  <svg
    className={cn("h-5 w-5 shrink-0", className)}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2c-3.5 0-6.5 2.5-6.5 6 0 4.5 6.5 14 6.5 14s6.5-9.5 6.5-14c0-3.5-3-6-6.5-6zm0 8.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
  </svg>
);
