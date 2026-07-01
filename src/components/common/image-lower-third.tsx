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
      ? `absolute bottom-3 left-2 right-2`
      : `absolute bottom-3 left-3 right-3`,
    top: `absolute top-3 left-3 right-3`,
    left: `absolute bottom-3 left-3 top-3`,
    right: `absolute bottom-3 right-3 top-3`,
    badge: `absolute top-2 left-3 w-fit`,
    chip: mobileSmall
      ? `absolute bottom-2 left-2 w-fit`
      : `absolute bottom-3 left-3 w-fit`,
  };

  const defaultClasses = cn(
    "border border-white/20 bg-white/85 backdrop-blur-lg shadow-md",
    size === "default"
      ? mobileSmall
        ? "rounded-xl px-3 py-2"
        : "rounded-xl px-4 py-3"
      : "",
    size === "compact" ? "rounded-xl px-2 py-1" : "",
    size === "badge" ? "px-3 py-1.5 rounded-full backdrop-blur-xl" : "",
    size === "chip"
      ? "px-3 py-1.5 rounded-xl backdrop-blur-lg bg-white/85"
      : "",
  );

  const titleClasses = cn(
    "font-semibold leading-tight",
    size === "chip" ? (mobileSmall ? "text-[10px]" : "text-[11px]") : "",
    size === "default" ? (mobileSmall ? "text-sm" : "text-[12px]") : "",
    size === "compact" ? "text-sm" : "",
    size === "badge" ? "text-sm" : "",
  );

  const subtitleClasses = cn(
    "leading-snug text-muted-foreground",
    mobileSmall ? "text-[11px]" : "text-[12px]",
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
