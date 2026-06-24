"use client";

import { Award } from "lucide-react";

const facts = [
  { value: "30", label: "Kuota Siswa / Angkatan" },
  { value: "Gratis", label: "Pendaftaran & SPP Bulanan" },
  { value: "Terakreditasi", label: "BAN-PDM" },
  { value: "Pesantren", label: "Sistem Asrama Terintegrasi" },
];

const steps = [
  {
    step: "01",
    title: "Hubungi Panitia",
    desc: "Kirim pesan WhatsApp ke panitia SPMB untuk konfirmasi ketersediaan kuota dan mendapat panduan berkas.",
  },
  {
    step: "02",
    title: "Lengkapi Dokumen",
    desc: "Siapkan: fotokopi KK, Akta Kelahiran, SKL atau rapor semester akhir SMP/MTs, dan pasfoto terbaru.",
  },
  {
    step: "03",
    title: "Verifikasi & Pengumuman",
    desc: "Panitia menghubungi untuk konfirmasi berkas dan jadwal verifikasi. Pengumuman kelulusan seleksi disampaikan langsung.",
  },
];

const faqs = [
  {
    q: "Apakah benar gratis SPP selama sekolah?",
    a: "Ya. SMKIT Ushuluddin membebaskan biaya SPP bulanan dan biaya pendaftaran bagi seluruh siswa reguler.",
  },
  {
    q: "Di mana lokasi SMKIT Ushuluddin?",
    a: "Di Kecamatan Martapura Timur, Kabupaten Banjar, Provinsi Kalimantan Selatan. Dapat diakses kendaraan roda dua maupun roda empat.",
  },
  {
    q: "Apa itu Konsentrasi Bisnis Digital?",
    a: "Pemfokusan dari Program Keahlian Pemasaran — siswa berpraktik langsung mengelola bisnis online, membuat konten promosi, memasang iklan digital, dan mengoptimalkan SEO.",
  },
  {
    q: "Apakah lulusan bisa melanjutkan kuliah?",
    a: "Bisa. Ijazah SMKIT Ushuluddin terakreditasi BAN-PDM dan sah untuk mendaftar ke perguruan tinggi negeri maupun swasta.",
  },
  {
    q: "Bagaimana jika saya berada di luar kota?",
    a: "Proses pendaftaran bisa diinisiasi sepenuhnya via WhatsApp. Hubungi panitia untuk panduan lengkapnya.",
  },
];

export default function Admissions() {
  return (
    <section id="admissions" className="bg-background py-24">
      <div className="max-w-6xl mx-auto px-6 mb-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
          Pendaftaran
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Bergabung dengan SMKIT Ushuluddin
        </h2>
        <p className="text-muted-foreground text-base mt-4 leading-relaxed">
          Penerimaan TP 2026/2027 sedang berlangsung. Gelombang 1 ditutup{" "}
          <strong className="text-foreground">18 Juni 2026</strong> · Gelombang
          2 ditutup <strong className="text-foreground">13 Juli 2026</strong>.
        </p>
      </div>

      {/* Key Facts Grid */}
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 place-items-center">
        {facts.map((f) => (
          <div
            key={f.label}
            className="bg-surface rounded-2xl p-6 text-center border border-secondary/60 w-full max-w-[180px]"
          >
            <p className="text-2xl font-bold text-primary mb-1">{f.value}</p>
            <p className="text-xs text-muted-foreground font-medium">
              {f.label}
            </p>
          </div>
        ))}
      </div>

      {/* Step-by-Step */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <h3 className="text-xl font-bold text-foreground mb-10">
          Langkah Pendaftaran
        </h3>
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-secondary hidden md:block" />
          <div className="space-y-8">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shrink-0 z-10">
                  {s.step}
                </div>
                <div className="pt-1">
                  <p className="font-semibold text-foreground mb-1">
                    {s.title}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Appreciation Callout */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <div className="bg-secondary/40 border border-primary/20 rounded-2xl p-6 flex gap-4 items-start">
          <Award className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold text-foreground text-sm mb-1">
              Program Apresiasi Prestasi
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Calon siswa baru dengan prestasi juara 1, 2, atau 3 tingkat
              kabupaten — akademik maupun non-akademik — mendapat bantuan biaya
              seragam sekolah lengkap. Sebutkan prestasi Anda saat menghubungi
              panitia.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <h3 className="text-xl font-bold text-foreground mb-8">
          Pertanyaan Umum
        </h3>
        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group border border-secondary/60 rounded-lg overflow-hidden"
            >
              <summary className="flex justify-between items-center px-5 py-4 cursor-pointer list-none text-sm font-medium text-foreground hover:bg-secondary/30">
                <span>{faq.q}</span>
                <span className="text-primary group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <div className="px-5 pb-4 pt-2 text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Closing CTA */}
      <div className="max-w-lg mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-foreground mb-3">
          Tertarik untuk Bergabung?
        </h3>
        <p className="text-muted-foreground text-base mb-8 leading-relaxed">
          Hubungi panitia SPMB untuk informasi lebih lanjut atau memulai proses
          pendaftaran. Kami siap menjawab pertanyaan Anda.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto mb-4">
          <input
            id="candidate-name"
            type="text"
            placeholder="Nama calon siswa"
            className="flex-1 h-10 px-3 border border-secondary rounded-full focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          />
          <button
            className="h-10 px-5 bg-primary hover:bg-primary/90 text-white rounded-full font-medium whitespace-nowrap whatsapp-final-click"
            onClick={() => {
              const name = (
                document.getElementById("candidate-name") as HTMLInputElement
              ).value.trim();
              const n = encodeURIComponent(name || "Calon Siswa");
              window.open(
                `https://wa.me/6282350182358?text=Halo%20Panitia%20SPMB%20SMKIT%20Ushuluddin,%20saya%20ingin%20mendaftarkan%20anak%20saya%20bernama%20${n}.`,
                "_blank",
              );
            }}
          >
            Hubungi Panitia
          </button>
        </div>
        <p className="text-xs text-muted-foreground">
          Atau langsung via WhatsApp:
          <a
            href="https://wa.me/6282350182358"
            className="text-primary hover:underline ml-1"
          >
            +62 823-5018-2358
          </a>
        </p>
      </div>
    </section>
  );
}
