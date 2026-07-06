import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { MapDirectionsLight } from "@/components/ui/MapDirections";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { BUSINESS } from "@/lib/constants";
import { Phone } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildPageMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ interest?: string }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return buildPageMetadata({
    locale,
    pathname: "/contact",
    title: t("metaTitle"),
    description: t("metaDescription"),
  });
};

export default async function ContactPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { interest } = await searchParams;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "contact" });
  const tCta = await getTranslations({ locale, namespace: "cta" });

  const defaultInterest =
    interest === "pt" || interest === "nutrition" || interest === "membership"
      ? interest
      : "general";

  return (
    <>
      <PageHero title={t("h1")} subtitle={t("intro")} />

      <section className="section-padding bg-white">
        <div className="container-narrow grid gap-12 lg:grid-cols-2">
          <div>
            <FadeIn>
              <h2 className="font-display text-3xl tracking-wide text-maroon">
                {t("directTitle")}
              </h2>
              <p className="mt-2 text-brand-black/70">{t("directSubtitle")}</p>

              <div className="mt-8 space-y-4">
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-center gap-4 rounded bg-gray-100 p-4 transition-colors hover:bg-gray-200"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded bg-primary-red text-white">
                    <Phone className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm text-brand-black/60">{tCta("callUs")}</p>
                    <p className="font-semibold text-brand-black">
                      {BUSINESS.phoneDisplay}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${BUSINESS.secondaryContact.phone}`}
                  className="flex items-center gap-4 rounded bg-gray-100 p-4 transition-colors hover:bg-gray-200"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded bg-maroon text-white">
                    <Phone className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm text-brand-black/60">
                      {BUSINESS.secondaryContact.name}
                    </p>
                    <p className="font-semibold text-brand-black">
                      {BUSINESS.secondaryContact.phoneDisplay}
                    </p>
                  </div>
                </a>

                <a
                  href={BUSINESS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded bg-gray-100 p-4 transition-colors hover:bg-gray-200"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded bg-white shadow-sm ring-1 ring-black/5">
                    <WhatsAppIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm text-brand-black/60">{tCta("whatsapp")}</p>
                    <p className="font-semibold text-brand-black">{t("whatsappLabel")}</p>
                  </div>
                </a>

                <address className="not-italic rounded bg-maroon p-6 text-white">
                  <p className="font-display text-lg tracking-wide">{BUSINESS.name}</p>
                  <p className="mt-2 text-white/80">{BUSINESS.address.street}</p>
                  <p className="text-white/80">
                    {BUSINESS.address.locality}, {BUSINESS.address.postalCode}
                  </p>
                </address>

                <MapDirectionsLight
                  className="mt-6"
                  label={tCta("getDirections")}
                  googleLabel={tCta("googleMaps")}
                  appleLabel={tCta("appleMaps")}
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="mt-8">
              <MapEmbed />
            </FadeIn>
          </div>

          <div>
            <FadeIn>
              <h2 className="font-display text-3xl tracking-wide text-maroon">
                {t("formTitle")}
              </h2>
            </FadeIn>
            <div className="mt-6">
              <ContactForm defaultInterest={defaultInterest} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
