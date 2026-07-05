import { BUSINESS } from "@/lib/constants";

export const MapEmbed = ({ title }: { title?: string }) => (
  <div className="overflow-hidden rounded shadow-lg ring-1 ring-black/10">
    <iframe
      title={title ?? "Big Dragons Gym location map"}
      src={BUSINESS.mapEmbed}
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full"
    />
  </div>
);
