"use client";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const revealDelayClasses: Record<number, string> = {
  0: "reveal-delay-0",
  80: "reveal-delay-80",
  160: "reveal-delay-160",
  240: "reveal-delay-240",
  320: "reveal-delay-320",
  400: "reveal-delay-400",
};

export interface RevealProps {
  children: React.ReactNode;
  delayMs?: number;
  className?: string;
}

export function Reveal({ children, delayMs = 0, className }: RevealProps) {
  const ref = useInView();

  return (
    <div
      ref={ref}
      className={cn(
        className,
        "reveal-item",
        revealDelayClasses[delayMs] ?? "reveal-delay-0",
      )}
    >
      {children}
    </div>
  );
}
