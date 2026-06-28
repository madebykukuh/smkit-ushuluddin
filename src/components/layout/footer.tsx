import Image from "next/image";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Kolom 1: Logo & Sosial Media */}
        <div>
          <Image
            src="/logos/logo-white.svg"
            alt="SMKIT Ushuluddin"
            width={146}
            height={44}
            className="object-contain"
          />
          <p className="mt-4 text-sm text-muted leading-relaxed">
            Membentuk Generasi Digital yang Berakhlak.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram SMKIT Ushuluddin"
              className="
                group
                w-10 h-10
                inline-flex items-center justify-center
                rounded-full
                border border-white/15
                text-muted
                transition-all duration-300 ease-out
                hover:border-background
                hover:bg-background/10
                hover:text-background
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-background
              "
            >
              <FaInstagram className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            </a>

            <a
              href={SITE.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube SMKIT Ushuluddin"
              className="
                group
                w-10 h-10
                inline-flex items-center justify-center
                rounded-full
                border border-white/15
                text-muted
                transition-all duration-300 ease-out
                hover:border-background
                hover:bg-background/10
                hover:text-background
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-background
              "
            >
              <FaYoutube className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            </a>
          </div>
        </div>

        {/* Kolom 2: Tautan Halaman */}
        <div>
          <p className="text-sm font-semibold text-background mb-5">Halaman</p>
          <ul className="space-y-3">
            {[
              { label: "Beranda", href: "#beranda" },
              { label: "Filosofi", href: "#filosofi" },
              { label: "Kurikulum", href: "#kurikulum" },
              { label: "Kehidupan Sekolah", href: "#kehidupan-sekolah" },
              { label: "Pendaftaran", href: "#admissions" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted hover:text-background transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary inline-block py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom 3: Kontak */}
        <div>
          <p className="text-sm font-semibold text-background mb-5">Kontak</p>
          <ul className="space-y-3 text-sm text-muted leading-relaxed">
            <li>
              <span className="text-muted/60">Alamat: </span>
              Tambak Anyar Ilir, Kec. Martapura Timur, Kab. Banjar, Kalimantan
              Selatan
            </li>
            <li>
              <span className="text-muted/60">WhatsApp: </span>
              <a
                href={SITE.whatsappUrl}
                className="hover:text-background transition-colors duration-200"
              >
                +62 823-5018-2358
              </a>
            </li>
            <li>
              <span className="text-muted/60">Email: </span>
              <span>{SITE.email}</span>
            </li>
            <li>
              <span className="text-muted/60">NPSN: </span>
              <span>{SITE.npsn}</span>
            </li>
          </ul>
        </div>

        {/* Kolom 4: Peta Lokasi */}
        <div>
          <a
            href="https://maps.app.goo.gl/C7Sv8YdyR8WZW2TP8"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Lihat SMKIT Ushuluddin di Google Maps"
            className="
              group
              block
              overflow-hidden
              rounded-xl
              border border-white/10
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-primary/50
              cursor-pointer
            "
          >
            <div className="relative h-[230px] overflow-hidden">
              <Image
                src="/images/school/map-preview.webp"
                alt="Peta lokasi SMKIT Ushuluddin"
                fill
                sizes="(max-width: 768px) 100vw, 240px"
                className="
                  object-cover
                  transition-all
                  duration-500
                  ease-out
                  group-hover:scale-110
                  group-hover:brightness-105
                "
              />
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  flex
                  items-center
                  gap-2
                  px-4
                  py-3
                  bg-black/30
                  backdrop-blur-md
                  text-white
                  text-sm
                "
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="font-semibold tracking-wide">
                  Lihat di Google Maps
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8">
        <p className="text-center text-xs text-muted">
          © 2026 SMKIT Ushuluddin. Terakreditasi BAN-PDM.
        </p>
      </div>
    </footer>
  );
}
