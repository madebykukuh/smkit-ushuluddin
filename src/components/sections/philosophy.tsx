"use client";

import Image from "next/image";
import { Reveal } from "@/components/common/reveal";

export default function Philosophy() {
  return (
    <section id="filosofi" className="bg-background py-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Filosofi Kami
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-8">
              Pendidikan yang Baik
              <br />
              Harus Dapat Diakses
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base mb-4">
              Berangkat dari pengalaman pribadi yang pernah merasakan sulitnya
              menempuh pendidikan, pimpinan pondok berkomitmen menghadirkan
              ruang belajar yang lebih terbuka bagi siswa-siswi dan
              santri-santriwati.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base mb-4">
              Karena itu, SMKIT Ushuluddin hadir dengan semangat pendidikan
              gratis, pendampingan yang dekat, dan lingkungan yang membentuk
              karakter — agar kesempatan belajar tidak berhenti pada
              keterbatasan biaya.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              Kuota 30 siswa per angkatan bukan untuk membatasi mimpi, tetapi
              agar setiap anak benar-benar mendapat perhatian yang layak.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-secondary border border-secondary/20 shadow-sm">
              <Image
                src="/images/school/philosophy-main.webp"
                alt="Interaksi guru dan siswa"
                className="w-full h-full object-cover"
                width={800}
                height={1067}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-md p-6 border border-secondary/20">
              <p className="text-5xl font-extrabold text-primary">30</p>
              <p className="text-sm text-muted-foreground mt-1 max-w-[120px] leading-tight">
                Siswa per angkatan, setiap tahun
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
