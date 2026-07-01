"use client";

import { cn } from "@/lib/utils";

interface ImageLowerThirdProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  position?: "bottom" | "top" | "left" | "right";
  size?: "default" | "compact";
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
  };

  const defaultClasses = cn(
    "rounded-xl border border-white/20 bg-white/92 backdrop-blur-md shadow-lg",
    size === "default" ? "px-5 py-4" : "px-3 py-2",
  );

  return (
    <div className={cn(positionClasses[position], containerClassName)}>
      <div className={cn(defaultClasses, className)}>
        <p
          className={cn(
            "font-bold text-foreground leading-tight",
            size === "default" ? "text-base" : "text-xs",
          )}
        >
          {title}
        </p>
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
