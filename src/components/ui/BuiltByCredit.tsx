import { BUILT_BY } from "@/lib/constants";
import { cn } from "@/lib/utils";

type BuiltByCreditProps = {
  className?: string;
};

export const BuiltByCredit = ({ className }: BuiltByCreditProps) => (
  <p className={cn("text-xs text-white/45", className)}>
    Built by{" "}
    <a
      href={BUILT_BY.href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-2 transition-colors hover:text-white"
    >
      {BUILT_BY.name}
    </a>
    .
  </p>
);
