"use client";

import { cn } from "@/lib/utils";

interface ImageLowerThirdProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  position?: "bottom" | "top" | "left" | "right";
  size?: "default" | "compact" | "badge" | "chip";
  mobileSmall?: boolean;
}

export function ImageLowerThird({
  title,
  subtitle,
  className,
  containerClassName,
  position = "bottom",
  size = "default",
  mobileSmall = false,
}: ImageLowerThirdProps) {
  const positionClasses = {
    bottom: mobileSmall
      ? `absolute bottom-4 left-4 right-4`
      : `absolute bottom-5 left-5 right-5`,
    top: `absolute top-5 left-5 right-5`,
    left: `absolute bottom-5 left-5 top-5`,
    right: `absolute bottom-5 right-5 top-5`,
    badge: `absolute top-3 left-3 w-fit`,
    chip: `absolute bottom-3 left-3 w-fit`,
  };

  const defaultClasses = cn(
    "rounded-xl border border-white/20 bg-white/92 backdrop-blur-md shadow-lg",
    size === "default" ? (mobileSmall ? "px-4 py-2" : "px-5 py-4") : "",
    size === "compact" ? "px-3 py-2" : "",
    size === "badge" ? "px-3 py-1.5 rounded-full backdrop-blur-xl" : "",
    size === "chip"
      ? "px-4 py-1.5 rounded-2xl backdrop-blur-xl bg-white/75"
      : "",
  );

  const titleClasses = cn(
    "font-semibold leading-tight",
    size === "chip" ? "text-[11px]" : "",
    size === "default" ? (mobileSmall ? "text-sm" : "text-base") : "",
    size === "compact" ? "text-sm" : "",
    size === "badge" ? "text-sm" : "",
  );

  const subtitleClasses = cn(
    "leading-snug text-muted-foreground",
    mobileSmall ? "text-[11px]" : "text-sm",
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
        <p className={titleClasses}>{title}</p>
        {size === "default" && subtitle && (
          <p className={cn(subtitleClasses, "mt-0.5")}>{subtitle}</p>
        )}
      </div>
    </div>
  );
}

export default ImageLowerThird;
