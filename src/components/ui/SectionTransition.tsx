import { cn } from "@/lib/utils";

export type SectionTransitionFill = "white" | "gray-100" | "maroon";

type SectionTransitionProps = {
  /** Background colour of the section below (fills the notch). */
  fill: SectionTransitionFill;
  /** `upper` = bottom of the section above (default). `lower` = top of the section below — same chevron direction. */
  anchor?: "upper" | "lower";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const fillClasses: Record<SectionTransitionFill, string> = {
  white: "bg-white",
  "gray-100": "bg-gray-100",
  maroon: "bg-maroon",
};

const sizeClasses = {
  sm: "h-6",
  md: "h-8 md:h-10",
  lg: "h-10 md:h-14",
};

/**
 * Angular chevron notch between two section background colours.
 * Peak always points up into the lighter/upper section.
 */
export const SectionTransition = ({
  fill,
  anchor = "upper",
  size = "md",
  className,
}: SectionTransitionProps) => (
  <div
    aria-hidden="true"
    className={cn(
      "pointer-events-none absolute inset-x-0 z-10 section-notch rotate-180",
      sizeClasses[size],
      fillClasses[fill],
      anchor === "upper" && "bottom-0",
      anchor === "lower" && "top-0",
      className,
    )}
  />
);
