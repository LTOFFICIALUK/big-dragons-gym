"use client";

import { BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useId } from "react";

type IconProps = {
  className?: string;
};

/** Official Instagram glyph path (Simple Icons / Meta brand). */
const INSTAGRAM_GLYPH =
  "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z";

/** Official Facebook glyph path (Simple Icons / Meta brand). */
const FACEBOOK_GLYPH =
  "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z";

/** Official WhatsApp glyph path (Simple Icons). */
const WHATSAPP_GLYPH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

export const InstagramIcon = ({ className }: IconProps) => {
  const gradientId = useId();

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("h-6 w-6 shrink-0", className)}
    >
      <defs>
        <radialGradient
          id={gradientId}
          cx="30%"
          cy="107%"
          r="150%"
          fx="30%"
          fy="107%"
        >
          <stop offset="0%" stopColor="#FFDD55" />
          <stop offset="50%" stopColor="#FF543E" />
          <stop offset="100%" stopColor="#C837AB" />
        </radialGradient>
      </defs>
      <path fill={`url(#${gradientId})`} d={INSTAGRAM_GLYPH} />
    </svg>
  );
};

export const FacebookIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("h-6 w-6 shrink-0", className)}>
    <path fill="#0866FF" d={FACEBOOK_GLYPH} />
  </svg>
);

export const WhatsAppIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("h-6 w-6 shrink-0", className)}>
    <path fill="#25D366" d={WHATSAPP_GLYPH} />
  </svg>
);

type SocialFollowLinksProps = {
  instagramLabel: string;
  facebookLabel: string;
  className?: string;
  linkClassName?: string;
  iconClassName?: string;
  layout?: "row" | "column";
};

export const SocialFollowLinks = ({
  instagramLabel,
  facebookLabel,
  className,
  linkClassName,
  iconClassName = "h-10 w-10",
  layout = "row",
}: SocialFollowLinksProps) => (
  <div
    className={cn(
      "flex items-center justify-center gap-4",
      layout === "column" ? "flex-col sm:flex-row" : "flex-col sm:flex-row",
      className,
    )}
  >
    <a
      href={BUSINESS.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex min-w-[220px] items-center justify-center gap-3 rounded-lg bg-white px-6 py-4 shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:shadow-md",
        linkClassName,
      )}
    >
      <InstagramIcon className={iconClassName} />
      <span className="text-sm font-bold uppercase tracking-wider text-maroon group-hover:text-primary-red">
        {instagramLabel}
      </span>
    </a>
    <a
      href={BUSINESS.facebook}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex min-w-[220px] items-center justify-center gap-3 rounded-lg bg-white px-6 py-4 shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:shadow-md",
        linkClassName,
      )}
    >
      <FacebookIcon className={iconClassName} />
      <span className="text-sm font-bold uppercase tracking-wider text-maroon group-hover:text-primary-red">
        {facebookLabel}
      </span>
    </a>
  </div>
);
