import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { MapDirectionsLight } from "@/components/ui/MapDirections";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { BUSINESS } from "@/lib/constants";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ interest?: string }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
};

const PhoneIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
                    <PhoneIcon />
                  </span>
                  <div>
                    <p className="text-sm text-brand-black/60">{tCta("callUs")}</p>
                    <p className="font-semibold text-brand-black">
                      {BUSINESS.phoneDisplay}
                    </p>
                  </div>
                </a>

                <a
                  href={BUSINESS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded bg-gray-100 p-4 transition-colors hover:bg-gray-200"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded bg-green-700 text-white">
                    <WhatsAppIcon />
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
