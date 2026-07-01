"use client";

import Image from "next/image";
import { Reveal } from "@/components/common/reveal";
import { ImageLowerThird } from "@/components/common/image-lower-third";

export default function Philosophy() {
  return (
    <section id="filosofi" className="bg-background py-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <Reveal>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground mb-8">
              Pendidikan yang Baik
              <br />
              Harus Dapat Diakses
            </h2>

            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Berangkat dari pengalaman pribadi yang pernah merasakan sulitnya
              menempuh pendidikan, pimpinan pondok berkomitmen menghadirkan
              ruang belajar yang lebih terbuka bagi siswa-siswi dan
              santri-santriwati.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Karena itu, SMKIT Ushuluddin hadir dengan semangat pendidikan
              gratis, pendampingan yang dekat, dan lingkungan yang membentuk
              karakter agar kesempatan belajar tidak berhenti karena
              keterbatasan biaya.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground">
              Kuota belajar yang terbatas dipilih agar setiap siswa memperoleh
              perhatian, pendampingan, dan proses belajar yang lebih personal.
            </p>
          </div>
        </Reveal>

        {/* Right Image */}
        <Reveal>
          <div className="relative max-w-md mx-auto lg:ml-auto">
            <div className="relative overflow-hidden rounded-2xl border border-secondary/20 bg-secondary shadow-sm aspect-[3/4]">
              <Image
                src="/images/school/philosophy-main.webp"
                alt="K.H. Juchran Erfan Ali, Pimpinan Pondok Pesantren Ushuluddin"
                width={800}
                height={1067}
                className="h-full w-full object-cover"
                priority={false}
              />

              {/* Lower Third */}
              <ImageLowerThird
                title="K.H. Juchran Erfan Ali"
                subtitle="Pimpinan Pondok Pesantren Ushuluddin Martapura"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
