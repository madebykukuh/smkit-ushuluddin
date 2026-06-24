"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
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
    <header className="sticky top-0 z-50 backdrop-blur-md bg-surface/90 border-b border-secondary/60">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <a href="#beranda" className="flex items-center">
            <Image
              src="/placeholder/logo.svg"
              alt="SMKIT Ushuluddin"
              width={146}
              height={44}
              className="object-contain"
            />
          </a>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-text-muted hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <Button
              size="sm"
              className="bg-primary text-white hover:bg-primary/90 ml-4"
              onClick={() => scrollToSection("#admissions")}
            >
              Informasi Pendaftaran
            </Button>
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-text-dark"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <SheetContent side="right" className="w-[300px] p-6">
              <SheetClose className="absolute top-4 right-4 rounded-md p-2 hover:bg-muted">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </SheetClose>
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-base text-text-dark hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </button>
                ))}
                <Button
                  className="bg-primary text-white hover:bg-primary/90 w-full"
                  onClick={() => scrollToSection("#admissions")}
                >
                  Informasi Pendaftaran
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
