"use client";

import { useState } from "react";
import { Reveal } from "@/components/common/reveal";
import { FAQItem } from "./admissions-faq";
import {
  AppreciationCallout,
  StepByStep,
  KeyFactsGrid,
} from "./admissions-shared";

const faqs = [
  {
    q: "Apakah benar gratis SPP selama sekolah?",
    a: "Ya. SMKIT Ushuluddin membebaskan biaya SPP bulanan dan biaya pendaftaran bagi seluruh siswa reguler.",
  },
  {
    q: "Di mana lokasi SMKIT Ushuluddin?",
    a: "Di Tambak Anyar Ilir, Kec. Martapura Timur, Kab. Banjar, Kalimantan Selatan. Dapat diakses kendaraan roda dua maupun roda empat.",
  },
  {
    q: "Apa itu Konsentrasi Bisnis Digital?",
    a: "Pemfokusan dari Program Keahlian Pemasaran: siswa berpraktik langsung mengelola bisnis online, membuat konten promosi, memasang iklan digital, dan mengoptimalkan SEO.",
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
  const [candidateName, setCandidateName] = useState("");
  const [isNameFocused, setIsNameFocused] = useState(false);
  const isNameFloating = isNameFocused || candidateName.length > 0;

  const openWhatsapp = () => {
    const normalizedName = candidateName.trim() || "Calon Siswa";
    const message = new URLSearchParams({
      text: `Halo Panitia SPMB SMKIT Ushuluddin, saya ingin mendaftarkan anak saya bernama ${normalizedName}.`,
    });
    const waWindow = window.open(
      `https://wa.me/6282350182358?${message.toString()}`,
      "_blank",
      "noopener,noreferrer",
    );
    if (waWindow) waWindow.opener = null;
  };

  return (
    <section id="admissions" className="bg-background py-24">
      <Reveal>
        <div className="max-w-6xl mx-auto px-6 mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Pendaftaran
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Bergabung dengan SMKIT Ushuluddin
          </h2>
          <p className="text-muted-foreground text-base mt-4 leading-relaxed">
            Penerimaan TP 2026/2027 sedang berlangsung. Gelombang 1 ditutup{" "}
            <strong className="text-foreground">18 Juni 2026</strong> ·
            Gelombang 2 ditutup{" "}
            <strong className="text-foreground">13 Juli 2026</strong>.
          </p>
        </div>
      </Reveal>

      <Reveal delayMs={100}>
        <KeyFactsGrid />
      </Reveal>

      <Reveal delayMs={150}>
        <StepByStep />
      </Reveal>

      <Reveal delayMs={200}>
        <AppreciationCallout />
      </Reveal>

      <div className="max-w-6xl mx-auto px-6 mb-20">
        <Reveal delayMs={250}>
          <h3 className="text-xl font-bold text-foreground mb-8">
            Pertanyaan Umum
          </h3>
        </Reveal>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Reveal key={idx} delayMs={250 + idx * 80}>
              <FAQItem
                faq={faq}
                isOpen={openFaq === idx}
                onOpen={() => setOpenFaq(openFaq === idx ? null : idx)}
                idx={idx}
              />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 text-center">
        <Reveal delayMs={350}>
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Masih Memiliki Pertanyaan?
          </h3>
          <p className="text-muted-foreground text-base mt-8 mb-10 leading-relaxed">
            Kalau ingin mengenal sekolah kami lebih dekat, silakan berbincang
            dengan panitia melalui WhatsApp.
          </p>

          <div className="mb-6 flex w-full flex-col gap-4 sm:flex-row">
            <div className="flex-1 relative">
              <input
                id="candidate-name"
                type="text"
                value={candidateName}
                onChange={(event) => setCandidateName(event.target.value)}
                onFocus={() => setIsNameFocused(true)}
                onBlur={() => setIsNameFocused(false)}
                className="input-primary w-full placeholder-transparent"
                autoComplete="name"
                placeholder=" "
              />
              <label
                htmlFor="candidate-name"
                className={`absolute left-5 pointer-events-none transition-all duration-[180ms] ease-out ${
                  isNameFloating
                    ? "top-0 -translate-y-1/2 text-[12px] font-medium text-primary bg-background px-1.5"
                    : "top-1/2 -translate-y-1/2 text-base text-muted-foreground"
                }`}
              >
                Nama calon siswa
              </label>
            </div>
            <button
              type="button"
              className="btn-hero whitespace-nowrap"
              onClick={openWhatsapp}
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
