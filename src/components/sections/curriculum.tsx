"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const digitalList = [
  "Pengelolaan marketplace (Tokopedia, Shopee, TikTok Shop)",
  "Periklanan digital & optimasi SEO",
  "Produksi konten & copywriting",
  "Analisis data bisnis dasar",
  "Portofolio digital personal sejak Kelas XI",
];

const pesantrenList = [
  "Shalat berjamaah 5 waktu, shalat dhuha & tahajud",
  "Kajian kitab akhlak rutin",
  "Pembinaan Al-Quran & muhadhoroh",
  "Lingkungan asrama yang terstruktur dan terpantau",
];

export default function Curriculum() {
  return (
    <section id="kurikulum" className="bg-surface py-24">
      <div className="max-w-xl text-center mx-auto mb-20 px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
          Kurikulum
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Dua Ekosistem. Satu Tujuan.
        </h2>
        <p className="text-muted-foreground text-base mt-4 leading-relaxed">
          Bisnis digital dan kehidupan pesantren bukan dua hal yang bertolak
          belakang. Di sini, keduanya dirancang saling menguatkan.
        </p>
      </div>

      {/* Block A — Digital */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
        <div className="aspect-video rounded-xl overflow-hidden bg-secondary border border-secondary/20 shadow-sm">
          <Image
            src="/images/school/curriculum-digital.webp"
            alt="Siswa di lab komputer"
            className="w-full h-full object-cover"
            width={1200}
            height={675}
          />
        </div>
        <div>
          <Badge className="bg-primary/10 text-primary border-0 font-semibold mb-4">
            Kompetensi Bisnis Digital
          </Badge>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-4">
            Belajar Skill Era Digital — Lewat Praktik, Bukan Teori.
          </h3>
          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            Di kelas, siswa tidak duduk mendengarkan. Mereka belajar mengelola
            toko online, merancang kampanye iklan, membuat konten promosi, dan
            menganalisis data penjualan.
          </p>
          <ul className="space-y-4">
            {digitalList.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-foreground"
              >
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Block B — Pesantren */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-last lg:order-first">
          <Badge className="bg-primary/10 text-primary border-0 font-semibold mb-4">
            Program Pesantren
          </Badge>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-4">
            Membentuk Akhlak Mulia Melalui Kebiasaan Sehari-hari.
          </h3>
          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            Kami percaya karakter dibentuk dari kebiasaan. Shalat berjamaah,
            kajian kitab, dan interaksi sehari-hari yang terjaga adalah
            kurikulum yang tidak tertulis di silabus, tapi tercetak di
            kepribadian.
          </p>
          <ul className="space-y-4">
            {pesantrenList.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-foreground"
              >
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="aspect-video rounded-xl overflow-hidden bg-secondary border border-secondary/20 shadow-sm lg:order-last">
          <Image
            src="/images/school/curriculum-pesantren.webp"
            alt="Kegiatan ibadah dan kajian pesantren"
            className="w-full h-full object-cover"
            width={1200}
            height={675}
          />
        </div>
      </div>
    </section>
  );
}
