import { Link } from "@/i18n/navigation";
import { BUSINESS, SOCIAL_POSTS } from "@/lib/constants";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { ArrowRight, Share2 } from "lucide-react";
import Image from "next/image";
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

        <StaggerContainer className="mt-10 grid gap-5 sm:grid-cols-3 md:mt-12">
          {SOCIAL_POSTS.map((post) => (
            <StaggerItem key={post.id}>
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-lg"
                aria-label={t(`socialPosts.${post.captionKey}.aria`)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={post.image}
                    alt={t(`socialPosts.${post.captionKey}.alt`)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="p-4">
                  <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-red">
                    <Share2 className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                    Instagram
                  </div>
                  <p className="line-clamp-2 text-sm text-brand-black/75">
                    {t(`socialPosts.${post.captionKey}.caption`)}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-maroon">
                    {t("socialViewPost")}
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                  </span>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href={BUSINESS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary min-w-[180px] text-center"
          >
            {t("socialFollowInstagram")}
          </a>
          <a
            href={BUSINESS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-dark min-w-[180px] text-center"
          >
            {t("socialFollowFacebook")}
          </a>
        </FadeIn>
      </div>
    </section>
  );
};
