import { BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type MapEmbedProps = {
  title?: string;
  height?: number;
  className?: string;
  priority?: boolean;
};

export const MapEmbed = ({
  title,
  height = 400,
  className,
  priority = false,
}: MapEmbedProps) => (
  <div className={cn("overflow-hidden rounded-lg", className)}>
    <iframe
      title={title ?? "Big Dragons Gym location map"}
      src={BUSINESS.mapEmbed}
      width="100%"
      height={height}
      style={{ border: 0 }}
      allowFullScreen
      loading={priority ? "eager" : "lazy"}
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
);
