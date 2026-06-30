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
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-gradient-to-b from-black/25 to-black/45 backdrop-blur-md border border-white/10 rounded-lg transition-all duration-[500ms] ease-[cubic-bezier(.22,.61,.36,1)] group-hover:from-black/35 group-hover:to-black/55 group-hover:backdrop-blur-lg">
                <p className="text-white text-xs font-semibold tracking-wide">
                  {item.caption}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
