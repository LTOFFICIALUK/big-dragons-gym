"use client";

import { Link } from "@/i18n/navigation";
import { AppleMapsIcon, GoogleMapsIcon } from "@/components/ui/MapDirections";
import { trackConversion } from "@/lib/analytics";
import {
  getAppleMapsDirectionsUrl,
  getGoogleMapsDirectionsUrl,
} from "@/lib/maps";
import { Clock } from "lucide-react";
import { useTranslations } from "next-intl";

export const MobileCTA = () => {
  const t = useTranslations("cta");

  const handleAppleMapsClick = () =>
    trackConversion("directions_click", "mobile_bar_apple");

  const handleGoogleMapsClick = () =>
    trackConversion("directions_click", "mobile_bar_google");

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-maroon/95 backdrop-blur-md supports-[padding:max(0px)]:pb-[env(safe-area-inset-bottom)] lg:hidden"
      role="navigation"
      aria-label="Quick actions"
    >
      <div className="grid grid-cols-3 divide-x divide-white/10">
        <a
          href={getAppleMapsDirectionsUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleAppleMapsClick}
          className="flex min-h-[3.25rem] flex-col items-center justify-center gap-0.5 px-1 py-2.5 text-[10px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white/5 sm:text-xs"
          aria-label={t("appleMaps")}
        >
          <AppleMapsIcon />
          <span className="truncate">{t("appleMaps")}</span>
        </a>
        <a
          href={getGoogleMapsDirectionsUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleGoogleMapsClick}
          className="flex min-h-[3.25rem] flex-col items-center justify-center gap-0.5 px-1 py-2.5 text-[10px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white/5 sm:text-xs"
          aria-label={t("googleMaps")}
        >
          <GoogleMapsIcon />
          <span className="truncate">{t("googleMaps")}</span>
        </a>
        <Link
          href="/membership"
          className="flex min-h-[3.25rem] flex-col items-center justify-center gap-0.5 px-1 py-2.5 text-[10px] font-semibold uppercase tracking-wide text-primary-red transition-colors hover:bg-white/5 sm:text-xs"
          aria-label={t("open247")}
        >
          <Clock className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
          <span className="truncate">{t("open247")}</span>
        </Link>
      </div>
    </div>
  );
};
