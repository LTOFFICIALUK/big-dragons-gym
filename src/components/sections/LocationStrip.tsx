import { Link } from "@/i18n/navigation";
import { BUSINESS } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { MapDirectionsLight } from "@/components/ui/MapDirections";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { useTranslations } from "next-intl";

export const LocationStrip = () => {
  const t = useTranslations("home");
  const tCta = useTranslations("cta");

  return (
    <section className="section-padding bg-gray-100">
      <div className="container-narrow">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <FadeIn>
            <h2 className="font-display text-3xl tracking-wide text-maroon sm:text-4xl md:text-5xl">
              {t("locationTitle")}
            </h2>
            <address className="mt-6 space-y-1 not-italic text-base text-brand-black/80 sm:text-lg">
              <p className="font-semibold text-brand-black">{BUSINESS.name}</p>
              <p>{BUSINESS.address.street}</p>
              <p>
                {BUSINESS.address.locality}, {BUSINESS.address.postalCode}
              </p>
            </address>
            <p className="mt-4 rounded bg-maroon/5 p-4 text-sm text-brand-black/70">
              {t("locationNote")}
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <MapDirectionsLight
                googleLabel={tCta("googleMaps")}
                appleLabel={tCta("appleMaps")}
              />
              <Link href="/location" className="btn-outline-dark text-center">
                {tCta("getDirections")}
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <MapEmbed />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
