import { FadeIn } from "@/components/ui/FadeIn";
import { MEMBERSHIP_PRICES, BUSINESS, MEMBERSHIP_SIGNUP_URL } from "@/lib/constants";
import { getTranslations } from "next-intl/server";

const planKeys = ["monthly", "weekly", "kidsStamp"] as const;

export const MembershipPricing = async () => {
  const t = await getTranslations("membership.pricing");
  const tCta = await getTranslations("cta");

  return (
    <section className="section-padding bg-gray-100" aria-labelledby="membership-pricing-title">
      <div className="container-narrow">
        <FadeIn className="text-center">
          <h2
            id="membership-pricing-title"
            className="font-display text-3xl tracking-wide text-maroon sm:text-4xl"
          >
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-black/70">{t("subtitle")}</p>
        </FadeIn>

        <ul className="mt-10 grid gap-6 md:mt-12 md:grid-cols-3">
          {planKeys.map((key) => (
            <li key={key}>
              <FadeIn>
                <article
                  className={`flex h-full flex-col rounded bg-white p-6 shadow-sm ring-1 ring-black/5 ${
                    key === "monthly" ? "ring-2 ring-primary-red" : ""
                  }`}
                >
                  {key === "monthly" && (
                    <span className="mb-4 inline-flex self-start rounded bg-primary-red px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                      {t("featuredLabel")}
                    </span>
                  )}
                  <h3 className="font-display text-xl tracking-wide text-maroon">
                    {t(`plans.${key}.name`)}
                  </h3>
                  <p className="mt-4 font-display text-4xl tracking-wide text-brand-black">
                    £{MEMBERSHIP_PRICES[key]}
                  </p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-brand-black/50">
                    {t(`plans.${key}.period`)}
                  </p>
                  <p className="mt-4 flex-1 text-brand-black/70">
                    {t(`plans.${key}.description`)}
                  </p>
                </article>
              </FadeIn>
            </li>
          ))}
        </ul>

        <FadeIn className="mt-8 text-center">
          <p className="text-brand-black/70">{t("dealsNote")}</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={MEMBERSHIP_SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {tCta("joinNow")}
            </a>
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-dark"
            >
              {tCta("whatsapp")}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
