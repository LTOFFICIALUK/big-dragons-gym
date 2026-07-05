import { Clock, Dumbbell, MapPin, Users, UtensilsCrossed, type LucideIcon } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { useTranslations } from "next-intl";

const uspIcons: LucideIcon[] = [Clock, Dumbbell, UtensilsCrossed, Users, MapPin];
const whyKeys = ["local", "supportive", "noNonsense", "access"] as const;

export const USPSection = () => {
  const t = useTranslations("home");

  const usps = [
    t("usps.open247"),
    t("usps.personalTraining"),
    t("usps.nutrition"),
    t("usps.community"),
    t("usps.location"),
  ];

  return (
    <>
      <section className="border-y border-black/5 bg-gray-100 py-8 md:py-10">
        <div className="container-narrow">
          <StaggerContainer className="grid grid-cols-2 gap-6 md:grid-cols-5 md:gap-8">
            {usps.map((usp, index) => {
              const Icon = uspIcons[index];

              return (
                <StaggerItem
                  key={usp}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5">
                    <Icon className="h-6 w-6 text-primary-red" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <p className="mt-3 text-sm font-semibold leading-snug text-maroon md:text-base">
                    {usp}
                  </p>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <FadeIn className="text-center">
            <h2 className="font-display text-3xl tracking-wide text-maroon sm:text-4xl md:text-5xl">
              {t("whyTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-brand-black/70 sm:text-lg">
              {t("whySubtitle")}
            </p>
          </FadeIn>

          <StaggerContainer className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-12 md:gap-6">
            {whyKeys.map((key) => (
              <StaggerItem key={key}>
                <article className="card-premium h-full border-l-4 border-primary-red">
                  <h3 className="font-display text-xl tracking-wide text-maroon sm:text-2xl">
                    {t(`whyPoints.${key}.title`)}
                  </h3>
                  <p className="mt-3 text-sm text-brand-black/70 sm:text-base">
                    {t(`whyPoints.${key}.description`)}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
};
