"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { usePathname } from "next/navigation";

import { SITE } from "@/lib/constants";

const footerLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Filosofi", href: "#filosofi" },
  { label: "Kurikulum", href: "#kurikulum" },
  { label: "Kehidupan Sekolah", href: "#kehidupan-sekolah" },
  { label: "Pendaftaran", href: "#admissions" },
];

function FooterCopyright() {
  return (
    <div className="border-t border-background/10 pt-8">
      <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-center sm:gap-1">
        <span className="text-xs text-muted">
          © 2026 SMKIT Ushuluddin. Terakreditasi BAN-PDM.
        </span>
        <a
          href="/privacy"
          className="rounded-sm text-xs text-muted transition-colors duration-200 hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          Kebijakan Privasi
        </a>
      </div>
    </div>
  );
}

function BrandColumn() {
  return (
    <div>
      <Image
        src="/logos/logo-white.svg"
        alt="SMKIT Ushuluddin"
        width={146}
        height={44}
        className="object-contain"
      />
      <p className="mt-4 text-sm leading-relaxed text-muted">
        Membentuk Generasi Digital yang Berakhlak.
      </p>
      <div className="mt-5 flex items-center gap-3">
        {/* Button Instagram */}
        <a
          href={SITE.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram SMKIT Ushuluddin"
          className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-background/15 text-muted transition-all duration-300 ease-out hover:border-background hover:bg-background/10 hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:scale-110"
            aria-hidden="true"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>

        {/* Button YouTube */}
        <a
          href={SITE.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube SMKIT Ushuluddin"
          className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-background/15 text-muted transition-all duration-300 ease-out hover:border-background hover:bg-background/10 hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:scale-110"
            aria-hidden="true"
          >
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
            <polygon points="10 15 15 12 10 9" />
          </svg>
        </a>
      </div>
    </div>
  );
}

function LinksColumn() {
  return (
    <nav aria-label="Tautan footer">
      <p className="mb-5 text-sm font-semibold text-background">Halaman</p>
      <ul className="space-y-3">
        {footerLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="inline-block py-1 text-sm text-muted transition-colors duration-200 hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ContactColumn() {
  return (
    <address className="not-italic">
      <p className="mb-5 text-sm font-semibold text-background">Kontak</p>
      <ul className="space-y-3 text-sm leading-relaxed text-muted">
        <li>
          <span className="text-muted/70">Alamat: </span>
          Tambak Anyar Ilir, Kec. Martapura Timur, Kab. Banjar, Kalimantan
          Selatan
        </li>
        <li>
          <span className="text-muted/70">WhatsApp: </span>
          <a
            href={SITE.whatsappUrl}
            className="transition-colors duration-200 hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            +62 823-5018-2358
          </a>
        </li>
        <li>
          <span className="text-muted/70">Email: </span>
          <a
            href={`mailto:${SITE.email}`}
            className="transition-colors duration-200 hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {SITE.email}
          </a>
        </li>
        <li>
          <span className="text-muted/70">NPSN: </span>
          <span>{SITE.npsn}</span>
        </li>
      </ul>
    </address>
  );
}

function MapColumn() {
  return (
    <a
      href="https://maps.app.goo.gl/C7Sv8YdyR8WZW2TP8"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Lihat SMKIT Ushuluddin di Google Maps"
      className="group block overflow-hidden rounded-xl border border-background/10 transition-colors duration-200 hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="relative h-[230px] overflow-hidden">
        <Image
          src="/images/school/map-preview.webp"
          alt="Peta lokasi SMKIT Ushuluddin"
          fill
          sizes="(max-width: 768px) 100vw, 240px"
          className="object-cover transition-transform duration-300 ease-in-out motion-safe:group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-foreground/70 px-4 py-3 text-sm text-background backdrop-blur-sm">
          <MapPin className="h-4 w-4" aria-hidden="true" />
          <span className="font-semibold">Lihat di Google Maps</span>
        </div>
      </div>
    </a>
  );
}

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/privacy") {
    return (
      <footer className="border-t border-border bg-foreground px-6 pb-10 pt-6 text-background">
        <div className="mx-auto max-w-6xl">
          <FooterCopyright />
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-border bg-foreground pb-10 pt-20 text-background">
      <div className="mx-auto mb-16 grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-4">
        <BrandColumn />
        <LinksColumn />
        <ContactColumn />
        <MapColumn />
      </div>
      <FooterCopyright />
    </footer>
  );
}
