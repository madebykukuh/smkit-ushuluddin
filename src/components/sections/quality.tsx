import Image from "next/image";
import { Reveal } from "@/components/common/reveal";
import { Card } from "@/components/ui/card";
import { TestimonialItem, testimonials } from "./quality-testimonial";
import { Achievement } from "./admissions-shared";

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
            <TestimonialItem testimonial={t} />
          </Reveal>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Apa yang Sudah Dicapai Siswa Kami
          </h2>
        </Reveal>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 items-stretch">
        {achievements.map((a, idx) => (
          <Reveal key={idx} delayMs={idx * 80}>
            <Achievement {...a} />
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
                    sizes="(min-width: 768px) 45vw, 100vw"
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
