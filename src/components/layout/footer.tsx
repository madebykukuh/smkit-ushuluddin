import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <Image
            src="/placeholder/logo-white.svg"
            alt="SMKIT Ushuluddin"
            width={146}
            height={44}
            className="object-contain"
          />
          <p className="text-sm text-muted mt-3 leading-relaxed">
            Membentuk Generasi Digital yang Berakhlak.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-background mb-4">Halaman</p>
          <ul className="space-y-2">
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
                  className="text-sm text-muted hover:text-background transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-background mb-4">Kontak</p>
          <ul className="space-y-2 text-sm text-muted leading-relaxed">
            <li>
              Tambak Anyar Ilir, Kec. Martapura Timur, Kab. Banjar, Kalimantan
              Selatan
            </li>
            <li>
              <span className="text-muted/40">WhatsApp: </span>
              <a
                href="https://wa.me/6282350182358"
                className="hover:text-background transition-colors"
              >
                +62 823-5018-2358
              </a>
            </li>
            <li>
              <span className="text-muted/40">Email: </span>
              <span>smkitushuluddin@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 mt-4">
        <p className="text-center text-xs text-muted">
          © 2026 SMKIT Ushuluddin. Terakreditasi BAN-PDM.
        </p>
      </div>
    </footer>
  );
}
