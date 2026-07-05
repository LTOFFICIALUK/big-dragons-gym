import { Link } from "@/i18n/navigation";
import { BUSINESS, SOCIAL_POSTS } from "@/lib/constants";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const SocialSection = () => {
  const t = useTranslations("home");

  return (
    <section className="section-padding bg-gray-100">
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
                    <InstagramIcon />
                    Instagram
                  </div>
                  <p className="line-clamp-2 text-sm text-brand-black/75">
                    {t(`socialPosts.${post.captionKey}.caption`)}
                  </p>
                  <span className="mt-3 inline-flex text-xs font-bold uppercase tracking-wider text-maroon">
                    {t("socialViewPost")} →
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

const InstagramIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);
