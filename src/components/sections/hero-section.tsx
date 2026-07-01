"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const heroStats = [
  { value: "Gratis", label: "Pendaftaran" },
  { value: "Gratis", label: "SPP" },
  { value: "Terakreditasi", label: "BAN-PDM" },
  { value: "Pesantren", label: "Sistem Asrama Terintegrasi" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function HeroMedia() {
  return (
    <>
      {/* LCP image: rendered immediately, outside any JS-gated animation */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-bg.webp"
          alt="Suasana sekolah SMKIT Ushuluddin"
          fill
          className="object-cover object-center"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
      </div>
      {/* Entrance overlay: opacity-only animation, does not block image paint */}
      <motion.div
        className="absolute inset-0 bg-card/10"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        aria-hidden="true"
      />
      <div className="hero-image-overlay" aria-hidden="true" />
      <div className="absolute -bottom-10 -left-16 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
    </>
  );
}

function HeroContent() {
  return (
    <div className="relative z-10 flex min-h-[100dvh] items-center pb-32 pt-24">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-lg space-y-5"
        >
          <motion.p
            variants={itemVariants}
            className="text-xs font-semibold uppercase tracking-widest text-primary"
          >
            SMKIT Ushuluddin
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold leading-[1.08] text-foreground text-balance sm:text-5xl xl:text-6xl"
          >
            Membentuk Generasi <span className="text-primary">Digital</span>{" "}
            yang <span className="text-primary">Berakhlak</span>
            <span className="text-accent">.</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="max-w-prose text-base leading-relaxed text-muted-foreground"
          >
            Sekolah kejuruan berbasis pesantren di Kabupaten Banjar.
            Menggabungkan kompetensi bisnis digital dengan pembinaan karakter
            Islami.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4"
          >
            <button
              type="button"
              onClick={() => scrollToSection("admissions")}
              className="btn-hero"
            >
              Informasi Pendaftaran
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("filosofi")}
              className="btn-secondary"
            >
              Kenali Kami
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.35, ease: "easeOut" }}
      className="absolute inset-x-0 bottom-0 z-20"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <dl className="grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-t-2xl border border-b-0 border-secondary/70 bg-secondary/70 md:grid-cols-4">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card/90 px-4 py-4 text-center flex flex-col justify-center min-h-[76px]"
            >
              <dd className="text-base font-bold leading-tight text-primary order-first mb-1">
                {stat.value}
              </dd>
              <dt className="text-[12px] sm:text-[13px] leading-snug text-muted-foreground">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section id="beranda" className="relative min-h-[100dvh] overflow-hidden">
      <HeroMedia />
      <HeroContent />
      <HeroStats />
    </section>
  );
}
