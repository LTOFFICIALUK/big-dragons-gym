import { FadeIn } from "@/components/ui/FadeIn";
import { SocialFollowLinks } from "@/components/ui/SocialIcons";
import { useTranslations } from "next-intl";

export const SocialSection = () => {
  const t = useTranslations("home");

  return (
    <section className="relative section-padding bg-gray-100">
      <div className="container-narrow">
        <FadeIn className="text-center">
          <h2 className="font-display text-3xl tracking-wide text-maroon sm:text-4xl md:text-5xl">
            {t("socialTitle")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-brand-black/70 sm:text-lg">
            {t("socialSubtitle")}
          </p>
        </FadeIn>

        <FadeIn className="mt-10 md:mt-12">
          <SocialFollowLinks
            instagramLabel={t("socialFollowInstagram")}
            facebookLabel={t("socialFollowFacebook")}
          />
        </FadeIn>
      </div>
    </section>
  );
};
