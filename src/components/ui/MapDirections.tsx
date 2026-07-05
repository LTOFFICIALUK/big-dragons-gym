import {
  getAppleMapsDirectionsUrl,
  getGoogleMapsDirectionsUrl,
} from "@/lib/maps";
import { cn } from "@/lib/utils";

export const GoogleMapsIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
    <path
      fill="#EA4335"
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z"
    />
    <circle cx="12" cy="9" r="2.5" fill="#FFFFFF" />
  </svg>
);

export const AppleMapsIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11Z" />
  </svg>
);

const mapProviders = [
  {
    id: "google" as const,
    defaultLabel: "Google Maps",
    href: getGoogleMapsDirectionsUrl,
    Icon: GoogleMapsIcon,
  },
  {
    id: "apple" as const,
    defaultLabel: "Apple Maps",
    href: getAppleMapsDirectionsUrl,
    Icon: AppleMapsIcon,
  },
];

type MapDirectionsProps = {
  className?: string;
  compact?: boolean;
  label?: string;
  showLabel?: boolean;
  googleLabel?: string;
  appleLabel?: string;
  variant?: "light" | "dark";
};

const MapDirectionsBase = ({
  className,
  compact = false,
  label = "Get directions",
  showLabel = true,
  googleLabel,
  appleLabel,
  variant = "light",
}: MapDirectionsProps) => {
  const isDark = variant === "dark";
  const labels = {
    google: googleLabel ?? "Google Maps",
    apple: appleLabel ?? "Apple Maps",
  };

  return (
    <div className={className}>
      {showLabel && !compact && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.18em]",
            isDark ? "text-white/60" : "text-brand-black/50",
          )}
        >
          {label}
        </p>
      )}
      <div className="flex flex-wrap gap-3" role="group" aria-label={label}>
        {mapProviders.map((provider) => (
          <a
            key={provider.id}
            href={provider.href()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open directions in ${labels[provider.id]}`}
            className={cn(
              "inline-flex items-center gap-2.5 rounded-full border font-semibold transition-colors",
              compact ? "px-3.5 py-2.5 text-xs" : "px-4 py-3 text-sm",
              isDark
                ? "border-white/20 bg-white/10 text-white hover:bg-white hover:text-maroon"
                : "border-black/10 bg-white text-brand-black shadow-sm hover:border-maroon hover:bg-maroon hover:text-white",
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                isDark ? "bg-white/10" : "bg-gray-100",
              )}
            >
              <provider.Icon />
            </span>
            {labels[provider.id]}
          </a>
        ))}
      </div>
    </div>
  );
};

export const MapDirections = (props: Omit<MapDirectionsProps, "variant">) => (
  <MapDirectionsBase variant="dark" {...props} />
);

export const MapDirectionsLight = (
  props: Omit<MapDirectionsProps, "variant">,
) => <MapDirectionsBase variant="light" {...props} />;
