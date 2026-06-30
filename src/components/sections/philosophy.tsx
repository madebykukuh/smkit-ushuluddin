import Image from "next/image";
import { Reveal } from "@/components/common/reveal";

export default function Philosophy() {
  return (
    <section id="filosofi" className="bg-background py-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Filosofi Kami
            </p>

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
                sizes="(min-width: 1024px) 480px, 100vw"
              />

              {/* Lower Third */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="rounded-xl border border-white/20 bg-white/92 backdrop-blur-md shadow-lg px-5 py-4">
                  <p className="text-base font-bold text-foreground leading-tight">
                    K.H. Juchran Erfan Ali
                  </p>

                  <p className="mt-1 text-sm leading-snug text-muted-foreground">
                    Pimpinan Pondok Pesantren Ushuluddin Martapura
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
