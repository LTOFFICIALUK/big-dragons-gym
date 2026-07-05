import { Link } from "@/i18n/navigation";
import { BUSINESS } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { useTranslations } from "next-intl";

export const SocialSection = () => {
  const t = useTranslations("home");

  return (
    <section className="section-padding bg-white">
      <div className="container-narrow text-center">
        <FadeIn>
          <h2 className="font-display text-4xl tracking-wide text-maroon md:text-5xl">
            {t("socialTitle")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-black/70">
            {t("socialSubtitle")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary min-w-[180px]"
            >
              Instagram
            </a>
            <a
              href={BUSINESS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-dark min-w-[180px]"
            >
              Facebook
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
