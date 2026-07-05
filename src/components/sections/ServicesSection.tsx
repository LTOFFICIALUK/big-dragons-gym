import { Link } from "@/i18n/navigation";
import { IMAGES } from "@/lib/constants";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import Image from "next/image";
import { useTranslations } from "next-intl";

const serviceConfig = [
  {
    key: "pt" as const,
    href: "/personal-training" as const,
    image: IMAGES.personalTraining,
  },
  {
    key: "nutrition" as const,
    href: "/nutrition" as const,
    image: IMAGES.nutrition,
  },
  {
    key: "membership" as const,
    href: "/membership" as const,
    image: IMAGES.nightGym,
  },
];

export const ServicesSection = () => {
  const t = useTranslations("home");
  const tCta = useTranslations("cta");

  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <FadeIn className="text-center">
          <h2 className="font-display text-4xl tracking-wide text-maroon md:text-5xl">
            {t("servicesTitle")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-black/70">
            {t("servicesSubtitle")}
          </p>
        </FadeIn>

        <StaggerContainer className="mt-12 grid gap-8 md:grid-cols-3">
          {serviceConfig.map((service) => (
            <StaggerItem key={service.key}>
              <Link
                href={service.href}
                className="group block overflow-hidden rounded bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={t(`services.${service.key}.title`)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 font-display text-2xl tracking-wide text-white">
                    {t(`services.${service.key}.title`)}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-brand-black/70">
                    {t(`services.${service.key}.description`)}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary-red">
                    {tCta("readMore")}
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
