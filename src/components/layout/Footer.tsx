import { Link } from "@/i18n/navigation";
import { BUSINESS, IMAGES } from "@/lib/constants";
import { MapDirections } from "@/components/ui/MapDirections";
import Image from "next/image";
import { useTranslations } from "next-intl";

const quickLinks = [
  { key: "about", href: "/about" as const },
  { key: "personalTraining", href: "/personal-training" as const },
  { key: "nutrition", href: "/nutrition" as const },
  { key: "membership", href: "/membership" as const },
  { key: "location", href: "/location" as const },
  { key: "contact", href: "/contact" as const },
  { key: "blog", href: "/blog" as const },
] as const;

export const Footer = () => {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tLang = useTranslations("language");
  const tCta = useTranslations("cta");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-maroon text-white">
      <div className="border-b border-white/10">
        <div className="container-narrow py-10 md:py-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <Image
                src={IMAGES.logo}
                alt="Big Dragons Gym"
                width={56}
                height={56}
                className="h-14 w-14 rounded object-contain"
              />
              <div>
                <p className="font-display text-2xl tracking-wider md:text-3xl">
                  BIG DRAGONS GYM
                </p>
                <p className="mt-1 text-sm text-white/70">{t("tagline")}</p>
              </div>
            </div>
            <MapDirections
              className="w-full lg:max-w-md"
              googleLabel={tCta("googleMaps")}
              appleLabel={tCta("appleMaps")}
            />
          </div>
        </div>
      </div>

      <div className="container-narrow section-padding !py-12 md:!py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <address className="space-y-1 not-italic text-white/80">
              <p className="font-semibold text-white">{BUSINESS.name}</p>
              <p>{BUSINESS.address.street}</p>
              <p>
                {BUSINESS.address.locality}, {BUSINESS.address.postalCode}
              </p>
            </address>
            <p className="mt-4 inline-flex items-center gap-2 rounded bg-primary-red/20 px-3 py-1 text-sm font-semibold text-primary-red">
              {t("open247")}
            </p>
            <p className="mt-4">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="font-semibold text-white transition-colors hover:text-primary-red"
              >
                {BUSINESS.phoneDisplay}
              </a>
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white hover:text-white"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={BUSINESS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white hover:text-white"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white hover:text-white"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-display text-lg tracking-wider">{t("quickLinks")}</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-1">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg tracking-wider">{t("legal")}</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/faq" className="text-sm text-white/70 transition-colors hover:text-white">
                  {tNav("faq")}
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-white/70 transition-colors hover:text-white">
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-white/70 transition-colors hover:text-white">
                  {t("cookies")}
                </Link>
              </li>
            </ul>

            <div
              className="mt-6 flex items-center gap-2 text-sm text-white/50"
              role="group"
              aria-label="Language selection"
            >
              <Link href="/" locale="en" className="transition-colors hover:text-white">
                {tLang("en")}
              </Link>
              <span aria-hidden="true">|</span>
              <Link href="/" locale="cy" className="transition-colors hover:text-white">
                {tLang("cy")}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          © {year} Big Dragons Gym. {t("rights")}
        </div>
      </div>
    </footer>
  );
};

const InstagramIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
