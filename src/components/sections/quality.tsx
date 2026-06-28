"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/common/reveal";

const testimonials = [
  {
    quote:
      "Anak saya awalnya belum terbiasa menggunakan komputer untuk belajar. Sekarang sudah lebih percaya diri saat mengerjakan tugas digital.",
    name: "Ibu N.H.",
    role: "Wali Murid · Martapura Timur",
  },
  {
    quote:
      "Saya pilih SMKIT Ushuluddin karena gratis SPP sangat membantu. Tapi yang tidak saya duga, gurunya benar-benar serius mendampingi.",
    name: "Bapak A.R.",
    role: "Wali Murid · Karang Intan",
  },
  {
    quote:
      "Selama sekolah saya banyak belajar hal-hal yang sebelumnya belum pernah saya coba, terutama tentang bisnis digital. Gurunya juga cukup terbuka kalau kami ingin bertanya atau berdiskusi.",
    name: "Muhammad Ilham",
    role: "Alumni SMKIT Ushuluddin · Batanjung",
  },
];

const achievements = [
  {
    level: "Tingkat Kabupaten",
    title: "Juara 1 FLS3N Cipta Puisi Kab. Banjar 2026",
    organizer: "Dinas Pendidikan & Kebudayaan Prov. KalSel",
  },
  {
    level: "Tingkat Kabupaten",
    title: "Juara 1 FLS3N Cipta Puisi Kab. Banjar 2025",
    organizer: "Dinas Pendidikan & Kebudayaan Prov. KalSel",
  },
  {
    level: "Tingkat Provinsi",
    title: "Juara 3 FLS3N Cipta Puisi Prov. Kalimantan Selatan 2025",
    organizer: "Dinas Pendidikan & Kebudayaan Prov. KalSel",
  },
  {
    level: "Tingkat Kabupaten",
    title: "Juara 3 Fahmil Quran Kabupaten Banjar 2025",
    organizer: "LPTQ Kabupaten Banjar",
  },
];

export default function Quality() {
  return (
    <section id="bukti-kualitas" className="bg-background py-24">
      {/* Testimonials */}
      <div className="max-w-6xl mx-auto px-6 mb-16 text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Kata Mereka
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Yang Mereka Rasakan
          </h2>
        </Reveal>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-stretch">
        {testimonials.map((t, idx) => (
          <Reveal key={idx} delayMs={idx * 80}>
            <Card className="bg-surface border border-secondary/60 rounded-2xl p-8 flex flex-col justify-between h-full shadow-none hover:shadow-md transition-shadow">
              <div className="flex-1">
                <Quote className="w-7 h-7 text-primary/20 mb-6" />
                <p className="text-foreground text-sm leading-relaxed italic">
                  {t.quote}
                </p>
              </div>
              <div className="flex items-center gap-3 mt-8 pt-6 border-t border-secondary/50">
                <Avatar className="w-10 h-10 bg-secondary">
                  <AvatarFallback className="text-primary font-semibold text-xs">
                    {t.name.split(" ")[0][0]}
                    {t.name.split(" ")[1]?.[0] || ""}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Rekam Jejak
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Apa yang Sudah Dicapai Siswa Kami
          </h2>
        </Reveal>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {achievements.map((a, idx) => (
          <Reveal key={idx} delayMs={idx * 80}>
            <Card className="bg-surface border border-secondary/60 rounded-xl p-6 hover:-translate-y-1 transition-transform shadow-none hover:shadow-sm">
              <p className="text-[10px] font-semibold text-primary border border-primary/30 rounded-full px-2 py-1 mb-3 inline-block">
                {a.level}
              </p>
              <p className="text-sm font-semibold text-foreground leading-snug mb-2">
                {a.title}
              </p>
              <p className="text-xs text-muted-foreground">{a.organizer}</p>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12">
        <Reveal>
          <Card className="bg-secondary/20 border border-primary/15 rounded-2xl p-6 md:p-10">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-[42%]">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-secondary/20 relative">
                  <Image
                    src="/images/gallery/gallery-juara.webp"
                    alt="Siswa SMKIT Ushuluddin menerima penghargaan kompetisi"
                    className="w-full h-full object-cover"
                    width={800}
                    height={600}
                  />
                  <div className="absolute bottom-2 right-2 p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                    <p className="text-white text-sm font-semibold">
                      Akhmad Alfi
                    </p>
                    <p className="text-white/80 text-xs">
                      XII &ndash; Pemasaran
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[58%]">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Lebih dari Sekadar Sebuah Piala
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Selama beberapa tahun terakhir, siswa SMKIT Ushuluddin telah
                  mengikuti berbagai kompetisi akademik maupun non-akademik di
                  tingkat kabupaten hingga nasional. Setiap pencapaian menjadi
                  bagian dari proses belajar untuk membangun rasa percaya diri,
                  sportivitas, dan semangat terus berkembang.
                </p>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
