import { Link } from "@/i18n/navigation";
import { BUSINESS } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { useTranslations } from "next-intl";

export const LocationStrip = () => {
  const t = useTranslations("home");
  const tCta = useTranslations("cta");

  return (
    <section className="section-padding bg-gray-100">
      <div className="container-narrow">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <h2 className="font-display text-4xl tracking-wide text-maroon md:text-5xl">
              {t("locationTitle")}
            </h2>
            <address className="mt-6 space-y-1 not-italic text-lg text-brand-black/80">
              <p className="font-semibold text-brand-black">
                {BUSINESS.name}
              </p>
              <p>{BUSINESS.address.street}</p>
              <p>
                {BUSINESS.address.locality}, {BUSINESS.address.postalCode}
              </p>
            </address>
            <p className="mt-4 rounded bg-maroon/5 p-4 text-sm text-brand-black/70">
              {t("locationNote")}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/location" className="btn-primary">
                {tCta("getDirections")}
              </Link>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${BUSINESS.address.street}, ${BUSINESS.address.locality}, ${BUSINESS.address.postalCode}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-dark"
              >
                Google Maps
              </a>
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
