"use client";

import Image from "next/image";
import Link from "next/link";

export default function PrivacyNavbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-card/90 border-b border-secondary/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/logo.svg"
              alt="SMKIT Ushuluddin"
              width={146}
              height={44}
              className="object-contain"
            />
          </Link>

          <nav>
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-foreground/80 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Kembali ke Beranda
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
