"use client";

import { BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useId } from "react";

type IconProps = {
  className?: string;
};

export const InstagramIcon = ({ className }: IconProps) => {
  const gradientId = useId();

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("h-6 w-6 shrink-0", className)}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FD5949" />
          <stop offset="50%" stopColor="#D6249F" />
          <stop offset="100%" stopColor="#285AEB" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill={`url(#${gradientId})`} />
      <circle cx="12" cy="12" r="4.25" fill="none" stroke="#fff" strokeWidth="1.75" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="#fff" />
    </svg>
  );
};

export const FacebookIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("h-6 w-6 shrink-0", className)}>
    <rect width="24" height="24" rx="6" fill="#1877F2" />
    <path
      d="M14.5 8.5H16V6h-1.5c-1.8 0-2.9 1.1-2.9 2.8V11H10v2.25h1.6V18h2.4v-4.75H16V11h-2.1l-.4-2.5z"
      fill="#fff"
    />
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
