"use client";

import { cn } from "@/lib/utils";

interface ImageLowerThirdProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  position?: "bottom" | "top" | "left" | "right";
  size?: "default" | "compact" | "badge" | "chip";
}

export function ImageLowerThird({
  title,
  subtitle,
  className,
  containerClassName,
  position = "bottom",
  size = "default",
}: ImageLowerThirdProps) {
  const positionClasses = {
    bottom: `absolute bottom-5 left-5 right-5`,
    top: `absolute top-5 left-5 right-5`,
    left: `absolute bottom-5 left-5 top-5`,
    right: `absolute bottom-5 right-5 top-5`,
    badge: `absolute top-3 left-3 w-fit`,
    chip: `absolute bottom-4 left-4 w-fit`,
  };

  const defaultClasses = cn(
    "rounded-xl border border-white/20 bg-white/92 backdrop-blur-md shadow-lg",
    size === "default" ? "px-5 py-4" : "",
    size === "compact" ? "px-3 py-2" : "",
    size === "badge" ? "px-3 py-1.5 rounded-full backdrop-blur-xl" : "",
    size === "chip"
      ? "px-4 py-2 rounded-full backdrop-blur-xl bg-white/80"
      : "",
  );

  return (
    <div
      className={cn(
        positionClasses[
          position === "badge"
            ? "badge"
            : position === "chip"
              ? "chip"
              : position
        ],
        containerClassName,
      )}
    >
      <div className={cn(defaultClasses, className)}>
        <p className={cn("font-semibold text-sm leading-tight")}>{title}</p>
        {size === "default" && subtitle && (
          <p className="mt-1 text-sm leading-snug text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

export default ImageLowerThird;
