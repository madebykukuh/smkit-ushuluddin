import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | SMKIT Ushuluddin",
  description: "Kebijakan Privasi website resmi SMKIT Ushuluddin.",
};

export default function PrivacyPage() {
  return (
    <main className="flex-1 py-24">
      <article className="max-w-3xl mx-auto px-6">
        <header className="mb-14">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Kebijakan Privasi
          </h1>

          <p className="mt-3 text-sm text-muted-foreground">
            Terakhir diperbarui: Juni 2026
          </p>

          <p className="mt-8 text-base leading-8 text-muted-foreground">
            Kami menghargai privasi setiap pengunjung website SMKIT Ushuluddin.
            Informasi yang Anda berikan hanya digunakan untuk keperluan
            komunikasi, pelayanan informasi sekolah, serta peningkatan kualitas
            website.
          </p>
        </header>

        <section className="space-y-5 mb-14">
          <h2 className="text-2xl font-semibold text-foreground">
            Data yang Kami Terima
          </h2>

          <p className="text-base leading-8 text-muted-foreground">
            Kami dapat menerima informasi yang Anda kirimkan secara sukarela,
            seperti:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-base leading-8 text-muted-foreground">
            <li>Nama calon siswa</li>
            <li>Nomor WhatsApp</li>
            <li>Isi pesan melalui formulir atau tautan WhatsApp</li>
          </ul>

          <p className="text-base leading-8 text-muted-foreground">
            Kami tidak menjual ataupun membagikan informasi pribadi kepada pihak
            lain.
          </p>
        </section>

        <section className="space-y-5 mb-14">
          <h2 className="text-2xl font-semibold text-foreground">
            Analitik Website
          </h2>

          <p className="text-base leading-8 text-muted-foreground">
            Website ini menggunakan <strong>Microsoft Clarity</strong> untuk
            membantu memahami bagaimana pengunjung menggunakan website, seperti
            halaman yang dikunjungi, klik, scroll, dan pola navigasi.
          </p>

          <p className="text-base leading-8 text-muted-foreground">
            Informasi tersebut digunakan hanya untuk meningkatkan pengalaman
            pengguna.
          </p>

          <p className="text-base leading-8 text-muted-foreground">
            Pelajari lebih lanjut mengenai Microsoft Privacy:
          </p>

          <a
            href="https://privacy.microsoft.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-primary font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
          >
            https://privacy.microsoft.com/
          </a>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-foreground">
            Hubungi Kami
          </h2>

          <p className="text-base leading-8 text-muted-foreground">
            Apabila memiliki pertanyaan mengenai kebijakan privasi ini, silakan
            menghubungi kami melalui email berikut:
          </p>

          <a
            href="mailto:halo@smkitushuluddin.sch.id"
            className="inline-flex text-primary font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
          >
            halo@smkitushuluddin.sch.id
          </a>
        </section>
      </article>
    </main>
  );
}
