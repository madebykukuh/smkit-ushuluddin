"use client";

import Image from "next/image";
import { Reveal } from "@/components/common/reveal";
import { ImageLowerThird } from "@/components/common/image-lower-third";

const galleryItems = [
  {
    src: "/images/gallery/gallery-lingkungan.webp",
    title: "Lingkungan Sekolah",
    subtitle: "Area belajar dan asrama terpadu",
    height: 300,
  },
  {
    src: "/images/gallery/gallery-kelas.webp",
    title: "Ruang Kelas",
    subtitle: "Fasilitas belajar modern",
    height: 300,
  },
  {
    src: "/images/gallery/gallery-asrama.webp",
    title: "Gedung Asrama",
    subtitle: "Tempat tinggal nyaman",
    height: 300,
  },
  {
    src: "/images/gallery/gallery-mesjid.webp",
    title: "Masjid Sekolah",
    subtitle: "Tempat ibadah santri",
    height: 300,
  },
  {
    src: "/images/gallery/gallery-kegiatan.webp",
    title: "Kegiatan Siswa",
    subtitle: "Kehidupan ekstrakurikuler",
    height: 300,
  },
  {
    src: "/images/gallery/gallery-guru.webp",
    title: "Dewan Guru",
    subtitle: "Guru berkualitas",
    height: 300,
  },
];

export default function Gallery() {
  return (
    <section id="kehidupan-sekolah" className="bg-surface py-24">
      <div className="max-w-xl text-center mx-auto mb-12 px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-dark">
            Galeri SMKIT Ushuluddin
          </h2>
        </Reveal>
      </div>

      <div className="max-w-6xl mx-auto px-6 columns-2 md:columns-3 gap-4 space-y-4">
        {galleryItems.map((item, idx) => (
          <Reveal key={idx} delayMs={idx * 80}>
            <div className="break-inside-avoid group relative overflow-hidden rounded-xl bg-secondary">
              <Image
                src={item.src}
                alt={item.title}
                width={600}
                height={item.height}
                className="w-full object-cover transition-all duration-[500ms] ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.12] group-hover:brightness-[1.03]"
              />
              <ImageLowerThird title={item.title} subtitle={item.subtitle} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
