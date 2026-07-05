import { MapEmbed } from "@/components/ui/MapEmbed";
import { MapDirectionsLight } from "@/components/ui/MapDirections";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

type HeroLocationMapProps = {
  className?: string;
  mapHeight?: number;
  priority?: boolean;
};

export const HeroLocationMap = ({
  className,
  mapHeight = 280,
  priority = true,
}: HeroLocationMapProps) => {
  const tCta = useTranslations("cta");

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/10",
        className,
      )}
    >
      <MapEmbed height={mapHeight} priority={priority} className="rounded-none" />
      <div className="border-t border-black/5 bg-white p-4">
        <MapDirectionsLight
          label={tCta("getDirections")}
          googleLabel={tCta("googleMaps")}
          appleLabel={tCta("appleMaps")}
          compact
        />
      </div>
    </div>
  );
};
