import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/common/reveal";

const digitalList = [
  "Mengelola toko online di marketplace",
  "Membuat foto, video, dan materi promosi produk",
  "Belajar mengenalkan produk melalui media sosial dan internet",
  "Memahami cara melayani pelanggan dengan baik",
  "Menyusun ide usaha dan membangun portofolio sejak kelas XI",
];

const pesantrenList = [
  "Shalat berjamaah 5 waktu, shalat dhuha & tahajud",
  "Kajian kitab akhlak rutin",
  "Pembinaan Al-Quran & muhadhoroh",
  "Tinggal di lingkungan asrama yang tertib dan saling membimbing.",
];

export default function Curriculum() {
  return (
    <section id="kurikulum" className="bg-surface py-24">
      <div className="max-w-[720px] text-center mx-auto mb-20 px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Kurikulum
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Dua Ekosistem. Satu Tujuan.
          </h2>
          <p className="text-muted-foreground text-base mt-4 leading-relaxed">
            Di SMKIT Ushuluddin, siswa belajar keterampilan untuk dunia kerja
            sekaligus membiasakan akhlak, disiplin, dan tanggung jawab melalui
            kehidupan pesantren.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div className="aspect-video rounded-xl overflow-hidden bg-secondary border border-secondary/20 shadow-sm">
            <Image
              src="/images/school/curriculum-digital.webp"
              alt="Siswa di lab komputer"
              className="w-full h-full object-cover"
              width={1200}
              height={675}
              sizes="(min-width: 1024px) 580px, 100vw"
            />
          </div>
          <div>
            <Badge className="bg-primary/10 text-primary border-0 font-semibold mb-4">
              Kompetensi Bisnis Digital
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-4">
              Belajar Skill Era Digital.
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Pembelajaran dilakukan melalui proyek dan praktik. Siswa belajar
              mengenal cara menjual produk, membuat promosi, melayani pelanggan,
              hingga mengelola usaha sederhana menggunakan media digital.
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
      </Reveal>

      <Reveal>
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
              sizes="(min-width: 1024px) 580px, 100vw"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
