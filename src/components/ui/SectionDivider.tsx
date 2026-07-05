import { cn } from "@/lib/utils";

type SectionDividerProps = {
  variant?: "maroon" | "white" | "gray";
  className?: string;
};

export const SectionDivider = ({
  variant = "maroon",
  className,
}: SectionDividerProps) => {
  const colors = {
    maroon: "bg-maroon",
    white: "bg-white",
    gray: "bg-gray-100",
  };

  return (
    <div
      className={cn("relative h-12 w-full md:h-16", colors[variant], className)}
      aria-hidden="true"
    >
      <div
        className={cn(
          "absolute inset-x-0 -bottom-px h-6 bg-inherit angular-divider",
          variant === "maroon" && "bg-maroon",
          variant === "white" && "bg-white",
          variant === "gray" && "bg-gray-100"
        )}
      />
    </div>
  );
};
