import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <Image
            src="/logos/logo-white.svg"
            alt="SMKIT Ushuluddin"
            width={146}
            height={44}
            className="object-contain"
          />
          <p className="text-sm text-muted mt-4 leading-relaxed">
            Membentuk Generasi Digital yang Berakhlak.
          </p>
        </div>

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

        <div>
          <p className="text-sm font-semibold text-background mb-5">
            Ikuti Kami
          </p>
          <ul className="space-y-3">
            <li>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-background transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Instagram SMKIT Ushuluddin"
              >
                <FaInstagram className="w-5 h-5" />
                Instagram
              </a>
            </li>
          </ul>
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
