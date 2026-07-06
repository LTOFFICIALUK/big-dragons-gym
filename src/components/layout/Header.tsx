"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { BUSINESS, IMAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ComponentProps, useEffect, useRef, useState } from "react";

type LinkHref = ComponentProps<typeof Link>["href"];

const primaryNavItems = [
  { key: "home", href: "/" as const },
  { key: "about", href: "/about" as const },
  { key: "membership", href: "/membership" as const },
  { key: "location", href: "/location" as const },
  { key: "contact", href: "/contact" as const },
] as const;

const serviceNavItems = [
  { key: "personalTraining", href: "/personal-training" as const },
  { key: "nutrition", href: "/nutrition" as const },
] as const;

const servicePaths = serviceNavItems.map((item) => item.href);

const navLinkClass = (isActive: boolean) =>
  cn(
    "relative whitespace-nowrap px-2.5 py-2 text-[13px] font-medium tracking-wide transition-colors xl:px-3 xl:text-sm",
    isActive
      ? "text-white after:absolute after:bottom-0 after:left-2.5 after:right-2.5 after:h-0.5 after:rounded-full after:bg-primary-red xl:after:left-3 xl:after:right-3"
      : "text-white/75 hover:text-white",
  );

type ServiceNavItem = {
  key: (typeof serviceNavItems)[number]["key"];
  href: (typeof serviceNavItems)[number]["href"];
  label: string;
};

const ServicesDropdown = ({
  pathname,
  label,
  items,
}: {
  pathname: string;
  label: string;
  items: ServiceNavItem[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isActive = servicePaths.some((path) => pathname === path);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggle = () => setIsOpen((open) => !open);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        className={cn(navLinkClass(isActive), "inline-flex items-center gap-1")}
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
      >
        {label}
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "h-3 w-3 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
          strokeWidth={2}
        />
      </button>

      <div
        className={cn(
          "absolute left-0 top-full z-50 min-w-[12rem] pt-2 transition-all duration-200",
          isOpen
            ? "pointer-events-auto visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-1 opacity-0",
        )}
      >
        <div className="overflow-hidden rounded-md border border-white/10 bg-maroon-light py-1 shadow-xl">
          {items.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={cn(
                "block whitespace-nowrap px-4 py-2.5 text-sm transition-colors hover:bg-white/5",
                pathname === item.href
                  ? "bg-white/5 font-medium text-white"
                  : "text-white/80 hover:text-white",
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Header = () => {
  const t = useTranslations("nav");
  const tLang = useTranslations("language");
  const tCta = useTranslations("cta");
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const otherLocale = locale === "en" ? "cy" : "en";

  const getLocaleSwitchHref = () => {
    if (pathname.startsWith("/blog/") && pathname !== "/blog") {
      const slug = pathname.replace("/blog/", "");
      return { pathname: "/blog/[slug]" as const, params: { slug } };
    }
    return pathname;
  };

  const localeSwitchHref = getLocaleSwitchHref() as LinkHref;

  const mobileNavItems = [
    { key: "home", href: "/" as const },
    { key: "about", href: "/about" as const },
    { key: "personalTraining", href: "/personal-training" as const },
    { key: "nutrition", href: "/nutrition" as const },
    { key: "membership", href: "/membership" as const },
    { key: "location", href: "/location" as const },
    { key: "contact", href: "/contact" as const },
  ] as const;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-white/10 transition-all duration-300",
        isScrolled
          ? "bg-maroon/95 shadow-lg backdrop-blur-md"
          : "bg-maroon",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4 lg:h-[4.25rem]">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5"
            aria-label={t("home")}
          >
            <Image
              src={IMAGES.logo}
              alt="Big Dragons Gym crest logo"
              width={48}
              height={48}
              className="h-9 w-9 rounded object-contain md:h-10 md:w-10"
              priority
            />
            <span className="hidden font-display text-lg leading-none tracking-wider text-white whitespace-nowrap md:block lg:text-xl">
              BIG DRAGONS GYM
            </span>
          </Link>

          <nav
            className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1"
            aria-label="Main navigation"
          >
            {primaryNavItems.slice(0, 2).map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={navLinkClass(pathname === item.href)}
              >
                {t(item.key)}
              </Link>
            ))}

            <ServicesDropdownWithTranslations pathname={pathname} />

            {primaryNavItems.slice(2).map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={navLinkClass(pathname === item.href)}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <div
              className="flex items-center rounded-full border border-white/15 bg-white/5 px-1 py-0.5 text-xs"
              role="group"
              aria-label="Language selection"
            >
              <Link
                href={localeSwitchHref}
                locale="en"
                className={cn(
                  "rounded-full px-2.5 py-1 transition-colors",
                  locale === "en"
                    ? "bg-white/15 font-semibold text-white"
                    : "text-white/60 hover:text-white",
                )}
                aria-current={locale === "en" ? "true" : undefined}
              >
                {tLang("en")}
              </Link>
              <Link
                href={localeSwitchHref}
                locale="cy"
                className={cn(
                  "rounded-full px-2.5 py-1 transition-colors",
                  locale === "cy"
                    ? "bg-white/15 font-semibold text-white"
                    : "text-white/60 hover:text-white",
                )}
                aria-current={locale === "cy" ? "true" : undefined}
              >
                {tLang("cy")}
              </Link>
            </div>

            <a
              href={`tel:${BUSINESS.primaryContact.phone}`}
              className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded bg-primary-red px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-maroon-light hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-red"
            >
              {tCta("callUs")}
            </a>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded text-white lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? t("closeMenu") : t("openMenu")}
          >
            <span className="relative h-5 w-6">
              <span
                className={`absolute left-0 h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "top-2 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "top-2 -rotate-45" : "top-4"}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[80vh] border-t border-white/10" : "max-h-0"
        }`}
      >
        <nav
          className="mx-auto max-w-7xl space-y-0.5 px-4 py-4 sm:px-6"
          aria-label="Mobile navigation"
        >
          {mobileNavItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={cn(
                "block rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-white/5",
                pathname === item.href
                  ? "bg-white/5 text-white"
                  : "text-white/85",
              )}
            >
              {t(item.key)}
            </Link>
          ))}
          <div className="flex items-center gap-2 px-3 pt-4">
            <Link
              href={localeSwitchHref}
              locale={otherLocale}
              className="text-sm text-white/70 hover:text-white"
            >
              {otherLocale === "en" ? tLang("english") : tLang("cymraeg")}
            </Link>
          </div>
          <div className="px-3 pt-2">
            <a
              href={`tel:${BUSINESS.primaryContact.phone}`}
              className="btn-primary block text-center"
            >
              {tCta("callUs")}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

const ServicesDropdownWithTranslations = ({
  pathname,
}: {
  pathname: string;
}) => {
  const t = useTranslations("nav");

  return (
    <ServicesDropdown
      pathname={pathname}
      label={t("services")}
      items={serviceNavItems.map((item) => ({
        ...item,
        label: t(item.key),
      }))}
    />
  );
};
