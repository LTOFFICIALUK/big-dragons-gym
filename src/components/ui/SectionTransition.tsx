import { cn } from "@/lib/utils";

export type SectionTransitionFill = "white" | "gray-100" | "maroon";

type SectionTransitionProps = {
  /** Background colour of the section below (fills the notch). */
  fill: SectionTransitionFill;
  edge?: "top" | "bottom";
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
 * Place on the upper section's bottom edge (or lower section's top edge).
 */
export const SectionTransition = ({
  fill,
  edge = "bottom",
  size = "md",
  className,
}: SectionTransitionProps) => (
  <div
    aria-hidden="true"
    className={cn(
      "pointer-events-none absolute inset-x-0 z-10 section-notch",
      sizeClasses[size],
      fillClasses[fill],
      edge === "bottom" && "bottom-0 rotate-180",
      edge === "top" && "top-0",
      className,
    )}
  />
);
