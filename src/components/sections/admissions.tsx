"use client";

import { useState } from "react";
import { Award, ChevronDown } from "lucide-react";
import { Reveal } from "@/components/common/reveal";

const facts = [
  { value: "30", label: "Kuota Siswa / Angkatan" },
  { value: "Gratis", label: "Pendaftaran & SPP Bulanan" },
  { value: "Terakreditasi", label: "BAN-PDM" },
  { value: "Pesantren", label: "Sistem Asrama Terintegrasi" },
];

function FAQItem({
  faq,
  isOpen,
  onOpen,
  idx,
}: {
  faq: { q: string; a: string };
  isOpen: boolean;
  onOpen: () => void;
  idx: number;
}) {
  const contentId = `faq-content-${idx}`;
  return (
    <div className="group border border-secondary/20 rounded-xl overflow-hidden bg-card transition-shadow duration-200 hover:shadow-sm">
      <button
        type="button"
        onClick={onOpen}
        className="w-full flex justify-between items-center px-6 py-5 cursor-pointer text-sm font-medium text-foreground hover:bg-secondary/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span>{faq.q}</span>
        <ChevronDown
          className="w-5 h-5 text-primary transition-transform duration-200 ease-in-out shrink-0"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      <div
        id={contentId}
        className="overflow-hidden transition-all duration-200 ease-in-out"
        style={{
          height: isOpen ? "auto" : "0",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="px-6 pb-5 pt-2 text-sm text-muted-foreground leading-relaxed">
          {faq.a}
        </div>
      </div>
    </div>
  );
}

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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {facts.map((f) => (
          <div
            key={f.label}
            className="bg-surface rounded-2xl p-6 text-center border border-secondary/60 flex flex-col justify-center items-center min-h-[120px] w-full transition-all hover:shadow-sm"
          >
            <p className="text-xl md:text-2xl font-bold text-primary mb-1 tracking-tight">
              {f.value}
            </p>
            <p className="text-xs text-muted-foreground font-medium leading-normal max-w-[150px]">
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
        <Reveal>
          <h3 className="text-xl font-bold text-foreground mb-8">
            Pertanyaan Umum
          </h3>
        </Reveal>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Reveal key={idx} delayMs={idx * 80}>
              <FAQItem
                faq={faq}
                isOpen={openFaq === idx}
                onOpen={() => setOpenFaq(idx)}
                idx={idx}
              />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Closing CTA */}
      <div className="max-w-2xl mx-auto px-6 text-center">
        <Reveal>
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Masih Memiliki Pertanyaan?
          </h3>
          <p className="text-muted-foreground text-base mt-8 mb-10 leading-relaxed">
            Kalau ingin mengenal sekolah kami lebih dekat, silakan berbincang
            dengan panitia melalui WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full mb-6">
            <input
              id="candidate-name"
              type="text"
              placeholder="Masukkan nama calon siswa"
              className="input-primary"
            />
            <button
              type="button"
              className="btn-hero whitespace-nowrap"
              onClick={() => {
                const name = (
                  document.getElementById("candidate-name") as HTMLInputElement
                ).value.trim();
                const n = encodeURIComponent(name || "Calon Siswa");
                const waWindow = window.open(
                  `https://wa.me/6282350182358?text=Halo%20Panitia%20SPMB%20SMKIT%20Ushuluddin,%20saya%20ingin%20mendaftarkan%20anak%20saya%20bernama%20${n}.`,
                  "_blank",
                );
                if (waWindow) waWindow.opener = null;
              }}
            >
              Hubungi Panitia
            </button>
          </div>
          <p className="text-xs text-muted-foreground">
            Atau langsung via WhatsApp:
            <a
              href="https://wa.me/6282350182358"
              className="text-primary hover:underline ml-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              +62 823-5018-2358
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
