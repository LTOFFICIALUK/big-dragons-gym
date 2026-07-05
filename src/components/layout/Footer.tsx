import { Link } from "@/i18n/navigation";
import { BUSINESS, IMAGES } from "@/lib/constants";
import { MapDirections } from "@/components/ui/MapDirections";
import { ExternalLink, MessageCircle } from "lucide-react";
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
    <footer className="bg-maroon pb-[calc(4.75rem+env(safe-area-inset-bottom,0px))] text-white lg:pb-0">
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
              showLabel={false}
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
                <ExternalLink className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              </a>
              <a
                href={BUSINESS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white hover:text-white"
                aria-label="Facebook"
              >
                <ExternalLink className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              </a>
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white hover:text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
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
