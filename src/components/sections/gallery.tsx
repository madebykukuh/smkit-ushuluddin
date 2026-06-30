import Image from "next/image";
import { Reveal } from "@/components/common/reveal";

const galleryItems = [
  {
    src: "/images/gallery/gallery-lingkungan.webp",
    caption: "Lingkungan Sekolah",
    height: 300,
  },
  {
    src: "/images/gallery/gallery-kelas.webp",
    caption: "Ruang Kelas",
    height: 300,
  },
  {
    src: "/images/gallery/gallery-asrama.webp",
    caption: "Gedung Asrama",
    height: 300,
  },
  {
    src: "/images/gallery/gallery-mesjid.webp",
    caption: "Masjid Sekolah",
    height: 300,
  },
  {
    src: "/images/gallery/gallery-kegiatan.webp",
    caption: "Kegiatan Siswa",
    height: 300,
  },
  {
    src: "/images/gallery/gallery-guru.webp",
    caption: "Dewan Guru",
    height: 300,
  },
];

export default function Gallery() {
  return (
    <section id="kehidupan-sekolah" className="bg-surface py-24">
      <div className="max-w-xl text-center mx-auto mb-12 px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Kehidupan Sekolah
          </p>
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
                alt={item.caption}
                width={600}
                height={item.height}
                className="w-full object-cover transition-all duration-[500ms] ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.12] group-hover:brightness-[1.03]"
                sizes="(min-width: 768px) 33vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-xs font-medium">{item.caption}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
