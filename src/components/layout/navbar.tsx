"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetClose } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Filosofi", href: "#filosofi" },
  { label: "Kurikulum", href: "#kurikulum" },
  { label: "Kehidupan Sekolah", href: "#kehidupan-sekolah" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-card/90 border-b border-secondary/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <a href="#beranda" className="flex items-center">
            <Image
              src="/logos/logo.svg"
              alt="SMKIT Ushuluddin"
              width={146}
              height={44}
              className="object-contain"
            />
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="nav-link"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => scrollToSection("#admissions")}
              className="btn-navbar ml-4"
            >
              Informasi Pendaftaran
            </button>
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <button
              type="button"
              className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => setIsOpen(true)}
              aria-label="Buka menu navigasi"
            >
              <Menu className="h-5 w-5" />
            </button>
            <SheetContent side="right" className="w-[300px] p-6">
              <SheetClose className="absolute top-4 right-4 rounded-md p-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </SheetClose>
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-base text-foreground hover:text-primary transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => scrollToSection("#admissions")}
                  className="btn-primary text-sm"
                >
                  Informasi Pendaftaran
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
