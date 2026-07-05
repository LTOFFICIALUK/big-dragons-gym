"use client";

import { Link } from "@/i18n/navigation";
import { BUSINESS } from "@/lib/constants";
import { MessageCircle, Phone, Send } from "lucide-react";
import { useTranslations } from "next-intl";

export const MobileCTA = () => {
  const t = useTranslations("cta");

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-maroon/95 backdrop-blur-md supports-[padding:max(0px)]:pb-[env(safe-area-inset-bottom)] lg:hidden"
      role="navigation"
      aria-label="Quick contact actions"
    >
      <div className="grid grid-cols-3 divide-x divide-white/10">
        <a
          href={`tel:${BUSINESS.phone}`}
          className="flex min-h-[3.25rem] flex-col items-center justify-center gap-0.5 px-1 py-2.5 text-[10px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white/5 sm:text-xs"
          aria-label={t("callUs")}
        >
          <Phone className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
          <span className="truncate">{t("callUs")}</span>
        </a>
        <a
          href={BUSINESS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[3.25rem] flex-col items-center justify-center gap-0.5 px-1 py-2.5 text-[10px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white/5 sm:text-xs"
          aria-label={t("whatsapp")}
        >
          <MessageCircle className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
          <span className="truncate">{t("whatsapp")}</span>
        </a>
        <Link
          href="/contact"
          className="flex min-h-[3.25rem] flex-col items-center justify-center gap-0.5 px-1 py-2.5 text-[10px] font-semibold uppercase tracking-wide text-primary-red transition-colors hover:bg-white/5 sm:text-xs"
        >
          <Send className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
};
