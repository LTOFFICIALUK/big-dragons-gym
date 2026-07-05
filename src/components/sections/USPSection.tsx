import { Link } from "@/i18n/navigation";
import { IMAGES, SOCIAL_POSTS, BUSINESS } from "@/lib/constants";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import Image from "next/image";
import { useTranslations } from "next-intl";

const uspIconKeys = ["clock", "dumbbell", "nutrition", "community", "location"] as const;

const USPIcon = ({ icon }: { icon: (typeof uspIconKeys)[number] }) => {
  const className = "h-6 w-6 text-primary-red";

  switch (icon) {
    case "clock":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
        </svg>
      );
    case "dumbbell":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 9h2m0 0v6H4m2-6h2m10 0h2m0 0v6h-2m2-6h-2M8 12h8" />
        </svg>
      );
    case "nutrition":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 3v18M8 7c0-2 1.5-4 4-4s4 2 4 4M6 21h12" />
        </svg>
      );
    case "community":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m8-4a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    case "location":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM12 22s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" />
        </svg>
      );
  }
};

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
            {usps.map((usp, index) => (
              <StaggerItem
                key={usp}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5">
                  <USPIcon icon={uspIconKeys[index]} />
                </div>
                <p className="mt-3 text-sm font-semibold leading-snug text-maroon md:text-base">
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
