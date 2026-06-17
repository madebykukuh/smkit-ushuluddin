# DESIGN.md — Visual Identity SMKIT Ushuluddin
> Reference: PRD v3.0 & Official Color System Guide
> Last updated: 2026

---

## 1. Brand Identity
- **Nama**: SMKIT Ushuluddin
- **Tagline**: Membentuk Generasi Digital yang Berakhlak.
- **Personality**: Institutional editorial, tenang, elegan, profesional, dan dapat dipercaya.
- **Vibe**: Percaya diri, tidak berteriak, *photography-first*. Bukan *sales page* atau brosur cetak.

## 2. Color System
- **Background**: `#F5F7F7` (Halaman utama)
- **Surface**: `#FFFFFF` (Card, panel, navbar)
- **Primary**: `#0D6666` (Gunakan hemat: Navbar CTA, Eyebrow, Ikon fitur, Tombol aksi utama)
- **Primary Hover**: `#0B5C5C`
- **Primary Active**: `#094F4F`
- **Secondary / Surface Alt**: `#D9E9E9`
- **Accent**: `#F2C94C` (Hanya untuk highlight yang sangat spesifik)
- **Text Dark**: `#1E293B` (Judul & teks utama)
- **Text Muted**: `#64748B` (Teks sekunder)
- **Border / Divider**: `#D9E9E9` (Atau opacity dari secondary)

## 3. Typography
- **Font family**: Inter (sans-serif)
- **Size scale & weight**: 
  - Headline besar: `text-4xl` hingga `text-6xl` (`font-bold`, `tracking-tight`)
  - Body UI: `text-sm` (14px)
  - Body Content: `text-base` hingga `text-lg` (16px-18px)
  - Eyebrow: `text-xs` (`font-semibold`, `uppercase`, `tracking-widest`)
- **Line-height**: `leading-[1.1]` untuk headline utama, `leading-relaxed` untuk paragraf.

## 4. Spacing System
- **Base unit**: 4px (Standar Tailwind)
- **Section Spacing**: *Whitespace adalah kepercayaan diri.* Setiap section utama wajib menggunakan minimum `py-24`. Jangan pernah mengompres ruang vertikal.
- **Component gap**: Gunakan `gap-6` atau `gap-16` untuk memisahkan teks dan gambar pada layout asimetris.

## 5. Shape & Radius
- **Images/Photo Collages**: `rounded-2xl` dengan `overflow-hidden`.
- **Cards/Containers**: `rounded-2xl` atau `rounded-xl`.
- **Buttons**: `rounded-md` atau `rounded-lg`.
- **Badges**: `rounded-full` (pill shape).

## 6. Shadow System
- **Elevation**: Gunakan bayangan secara sangat hemat (*sparingly*). 
- **Cards**: Utamakan penggunaan `border border-secondary/60` dipadukan dengan `shadow-none`.
- **Hover States**: Berikan `hover:shadow-md` atau `hover:shadow-sm` untuk memberikan interaksi taktil yang halus, bukan bayangan tebal yang permanen.

## 7. Component Rules
- **CTA Behavior**: Maksimal SATU tombol aksi utama per section (kecuali Hero yang diizinkan memiliki grup CTA utama dan sekunder).
- **Image Placeholders**: Wajib menggunakan blok `<div className="bg-secondary rounded-[inherit] overflow-hidden">` dengan `aspect-ratio` atau `height` eksplisit agar layout tidak *collapse*.
- **Banned Elements**: Tidak ada *urgency badge*, emoji peringatan ⚠️, ikon *pulse* animasi di dalam konten halaman utama. Semuanya harus tampil solid dan meyakinkan.

## 8. Motion
- **Duration**: `duration-200` untuk semua transisi warna/hover. Hindari `duration-500+` yang terasa lambat.
- **Easing**: `ease-in-out` sebagai default.
- **Accessibility**: Wajib membungkus animasi *transform* atau *layout shifts* dengan `@media (prefers-reduced-motion: no-preference)`.

## 9. Voice & Tone
- **Copy Guidelines**: Ringkas, editorial, dan membumi.
- **Tone**: Jujur dan transparan (misal: "Mengapa 30 Siswa?"). Hindari bahasa promosi murahan atau janji berlebihan.
- **Aturan Paragraf**: Jaga agar paragraf tetap pendek (2-3 kalimat) dan gunakan jeda ruang (`mt-4`) antar paragraf untuk keterbacaan maksimum.
