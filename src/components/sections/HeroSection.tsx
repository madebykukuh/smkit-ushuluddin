"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stats = [
  { value: "Gratis", label: "Pendaftaran" },
  { value: "Gratis", label: "SPP" },
  { value: "Terakreditasi", label: "BAN-PDM" },
  { value: "Pesantren", label: "Sistem Asrama Terintegrasi" },
];

const scrollToSection = (id: string) => {
  if (typeof window !== "undefined") {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
};

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Range parallax dikurangi ke -12% — cukup untuk efek, tidak terlalu jauh
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const blobY = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

  return (
    <section
      id="beranda"
      ref={ref}
      className="relative h-screen overflow-hidden"
    >
      {/* ── Background image ──────────────────────────────────────
          Key fix: -top-[10%] h-[120%]
          Image 20% lebih tinggi dari section → parallax -12% tidak
          pernah expose white space di bawah.
      ─────────────────────────────────────────────────────────── */}
      <motion.div
        className="absolute inset-x-0 -top-[10%] h-[120%] will-change-transform"
        style={{ y: bgY }}
        initial={{ scale: 1.04, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src="/placeholder/hero-bg.webp"
          alt="Suasana sekolah SMKIT Ushuluddin"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>

      {/* ── Gradient overlay ──────────────────────────────────────
          Explicit stops: solid kiri → fade cepat → transparent 62%
          Siswa di kanan tidak tertutup sama sekali.
      ─────────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0.93) 0%, rgba(255,255,255,0.85) 22%, rgba(255,255,255,0.45) 42%, rgba(255,255,255,0.08) 58%, transparent 68%)",
        }}
      />

      {/* ── Decorative blob ─────────────────────────────────────── */}
      <motion.svg
        className="absolute -bottom-10 -left-16 w-80 h-80 opacity-[0.07] will-change-transform pointer-events-none"
        style={{ y: blobY }}
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <path
          d="M47.5,-61.5C62.8,-51.8,77.3,-41.3,82.8,-27.2C88.3,-13.1,84.8,3.6,77.8,17.1C70.8,30.6,60.2,41,47.5,50.3C34.8,59.6,20,67.8,4.4,67.6C-11.2,67.4,-28.7,58.8,-39.8,47.5C-50.9,36.2,-55.7,22.1,-57.5,7.1C-59.3,-7.9,-58.1,-23.8,-51.2,-36.9C-44.3,-50,-32.7,-60.4,-20.2,-67.5C-7.7,-74.6,6.5,-78.4,19.6,-76.8C32.7,-75.2,45.7,-68.2,47.5,-61.5Z"
          fill="currentColor"
          className="text-teal-500"
        />
      </motion.svg>

      {/* ── Main content ─────────────────────────────────────────── */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-lg space-y-5"
          >
            <motion.p
              variants={itemVariants}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-primary"
            >
              SMKIT USHULUDDIN
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[1.08] text-foreground"
            >
              Membentuk Generasi <span className="text-teal-600">Digital</span>{" "}
              yang <span className="text-teal-600">Berakhlak</span>
              <span className="text-accent">.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-base leading-relaxed"
            >
              Sekolah kejuruan berbasis pesantren di Kabupaten Banjar.
              Menggabungkan kompetensi bisnis digital dengan pembinaan karakter
              Islami.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <Button
                size="lg"
                className="rounded-full bg-primary hover:bg-primary/90 text-white px-7"
                onClick={() => scrollToSection("admissions")}
              >
                Informasi Pendaftaran
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-slate-700 hover:text-primary px-6"
                onClick={() => scrollToSection("filosofi")}
              >
                Kenali Kami
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Stats bar ────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 z-20"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200/50 border border-b-0 border-slate-200/50 rounded-t-2xl overflow-hidden max-w-2xl">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/80 backdrop-blur-md px-4 py-4 text-center"
              >
                <div className="text-base font-bold text-primary leading-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 mt-1 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
