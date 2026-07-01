"use client";

import { cn } from "@/lib/utils";

interface ImageLowerThirdProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  variant: "philosophy" | "achievement" | "chip";
}

export function ImageLowerThird({
  title,
  subtitle,
  className,
  containerClassName,
  variant,
}: ImageLowerThirdProps) {
  const variants = {
    philosophy: {
      container: "absolute bottom-5 left-5 right-5",
      card: "rounded-xl border border-white/20 bg-white/92 backdrop-blur-md shadow-lg px-5 py-4",
      title: "text-base font-bold text-foreground leading-tight",
      subtitle: "mt-1 text-sm leading-snug text-muted-foreground",
    },
    achievement: {
      container:
        "absolute bottom-3 left-3 right-3 md:bottom-3 md:left-4 md:right-4",
      card: "rounded-xl border border-white/20 bg-white/92 backdrop-blur-md shadow-lg px-4 py-3",
      title: "text-base font-bold text-foreground leading-tight",
      subtitle:
        "mt-1 text-[11px] md:text-[12px] leading-snug text-muted-foreground",
    },
    chip: {
      container:
        "absolute bottom-2 left-2 right-2 md:bottom-3 md:left-3 md:right-3 w-fit md:w-fit",
      card: "rounded-lg border border-white/20 bg-white/85 backdrop-blur-lg shadow-md px-3 py-1.5 md:px-3 md:py-1.5",
      title:
        "text-[11px] md:text-[12px] font-semibold leading-tight text-foreground",
    },
  } as const;

  const styles = variants[variant];

  return (
    <div className={cn(styles.container, containerClassName)}>
      <div className={cn(styles.card, className)}>
        <p className={styles.title}>{title}</p>
        {subtitle && variant !== "chip" && (
          <p className={styles.subtitle}>{subtitle}</p>
        )}
      </div>
    </div>
  );
}

export default ImageLowerThird;
