import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { useTranslations } from "next-intl";

const uspIcons = ["🕐", "💪", "🥗", "🏴󠁧󠁢󠁷󠁬󠁳󠁿", "📍"];
const whyKeys = ["local", "supportive", "noNonsense", "access"] as const;

export const USPSection = () => {
  const t = useTranslations("home");

  const usps = [
    t("usps.open247"),
    t("usps.ptWithDei"),
    t("usps.nutrition"),
    t("usps.community"),
    t("usps.location"),
  ];

  return (
    <>
      <section className="border-y border-black/5 bg-gray-100 py-8">
        <div className="container-narrow">
          <StaggerContainer className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-6">
            {usps.map((usp, index) => (
              <StaggerItem
                key={usp}
                className="flex flex-col items-center text-center"
              >
                <span className="text-2xl" aria-hidden="true">
                  {uspIcons[index]}
                </span>
                <p className="mt-2 text-sm font-semibold text-maroon md:text-base">
                  {usp}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <FadeIn className="text-center">
            <h2 className="font-display text-4xl tracking-wide text-maroon md:text-5xl">
              {t("whyTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-black/70">
              {t("whySubtitle")}
            </p>
          </FadeIn>

          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2">
            {whyKeys.map((key) => (
              <StaggerItem key={key}>
                <article className="card-premium h-full border-l-4 border-primary-red">
                  <h3 className="font-display text-2xl tracking-wide text-maroon">
                    {t(`whyPoints.${key}.title`)}
                  </h3>
                  <p className="mt-3 text-brand-black/70">
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
