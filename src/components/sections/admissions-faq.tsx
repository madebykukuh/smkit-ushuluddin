"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FAQItemProps {
  faq: { q: string; a: string };
  isOpen: boolean;
  onOpen: () => void;
  idx: number;
}

export function FAQItem({ faq, isOpen, onOpen, idx }: FAQItemProps) {
  const contentId = `faq-content-${idx}`;
  return (
    <div className="group border border-secondary/60 rounded-xl overflow-hidden bg-surface transition-shadow duration-200 hover:shadow-sm">
      <button
        type="button"
        onClick={onOpen}
        className="w-full flex justify-between items-center text-left px-6 py-5 cursor-pointer text-sm font-medium text-foreground hover:bg-secondary/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span>{faq.q}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-primary transition-transform duration-200 ease-in-out shrink-0 ml-4",
            isOpen && "rotate-180",
          )}
          aria-hidden="true"
        />
      </button>
      <div
        id={contentId}
        className={cn(
          "grid transition-all duration-200 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-5 pt-2 text-sm text-muted-foreground leading-relaxed">
            {faq.a}
          </div>
        </div>
      </div>
    </div>
  );
}
