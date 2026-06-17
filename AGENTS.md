# Agent Instructions — SMKIT Ushuluddin Landing Page

> Operator: Kukuh | Role: UI/UX Engineer  
> Stack: Next.js 15 · TypeScript (strict) · Tailwind CSS · shadcn/ui  
> Status: [active development / prototype / maintenance]

---

## Tiga File yang Harus Dibaca Sebelum Memulai

1. `AGENTS.md` — file ini, aturan behavior agent per project.
2. `DESIGN.md` — visual identity: warna, font, spacing, komponen (Anti-Slop).
3. `FRONTEND.md` — coding standards: TypeScript strict, aksesibilitas, performa.

Baca ketiganya sebelum menulis satu baris kode pun.

---

## Identitas Project

- **Tujuan**: [Deskripsikan singkat tujuan project]
- **Target pengguna**: [Siapa yang akan menggunakan aplikasi ini]
- **Stage**: [MVP / Production / Portfolio / Client]
- **Design system**: Lihat panduan token di DESIGN.md

---

## Prinsip Utama

1. **UI/UX first** — setiap keputusan implementasi mempertimbangkan user experience.
2. **Aksesibilitas tidak opsional** — memenuhi standar WCAG 2.1 AA minimum.
3. **Mobile-first** — semua style dimulai dari breakpoint terkecil.
4. **Type safety** — tidak ada `any`, tidak ada implicit types.
5. **Komponen kecil** — jika komponen lebih dari 150 baris, wajib dipecah.

---

## Tech Stack

- Framework: Next.js 15 App Router
- Language: TypeScript strict mode
- Styling: Tailwind CSS + CSS Variables (design tokens dari DESIGN.md)
- Component library: shadcn/ui — extend, jangan pernah di-override langsung
- State: React state + Zustand untuk global state kompleks
- Data fetching: Next.js fetch (server) + TanStack Query (client)
- Form: React Hook Form + Zod
- Icons: Lucide React
- Font: next/font

---

## Struktur File

src/
├── app/ # App Router pages dan layouts
├── components/
│ ├── ui/ # shadcn/ui — JANGAN EDIT SEBARANGAN
│ ├── common/ # Reusable cross-feature components
│ └── [feature]/ # Spesifik per fitur komponen
├── hooks/ # Custom React hooks
├── lib/ # Utilities, helpers, constants
├── types/ # TypeScript types global
└── styles/ # Global styles

---

## Workflow yang Diharapkan

### Sebelum coding fitur baru:

1. Baca AGENTS.md + DESIGN.md + FRONTEND.md
2. Jalankan `/plan` untuk memecah fitur jadi subtask konkret
3. Jalankan `/impeccable shape` untuk menyusun design brief (jika ada UI)
4. Set `/checkpoint` sebelum mulai mengetik kode

### Selama coding:

- Aktifkan `/continuous-learning-v2` di awal sesi
- Selalu merujuk ke DESIGN.md untuk setiap keputusan visual
- Jaga batasan maksimal 150 baris per komponen

### Setelah coding:

1. `/code-reviewer` — lakukan quality check arsitektur dan TypeScript
2. `/impeccable critique` — jalankan design review dan scoring visual
3. `/impeccable polish` — dapatkan visual final pass yang meticulous
4. `/security-review` — jalankan audit internal sebelum git push

---

## Rules (Selalu Berlaku)

Summary aturan sentral dari pangkalan OpenCode (`~/.opencode/rules/`):

- Tidak ada `any` type di TypeScript
- Tidak ada inline style (`style={{...}}`)
- Tidak ada hardcode warna hex atau spacing manual — gunakan design tokens
- Tidak ada `console.log` yang lolos ke production code
- Semua media gambar wajib menggunakan `next/image`
- Semua tipografi wajib menggunakan `next/font`
- Semua interactive element wajib memiliki accessible text atau `aria-label`

---

## Format Output

- Jelaskan komponen apa saja yang diubah dan rasionalisasinya
- Tandai aspek keputusan aksesibilitas yang telah diterapkan
- Catat jika ada penambahan package/dependency baru
- Beri peringatan jika ada trade-off terhadap performa visual
- Jika terjadi konflik aturan dengan DESIGN.md atau FRONTEND.md, tanyakan operator terlebih dahulu

---

## Larangan Eksplisit

- DILARANG mengubah file mentah di dalam folder `src/components/ui/` (area proteksi shadcn)
- DILARANG menginstall dependency tanpa persetujuan operator
- DILARANG membuat file `.env` berisi nilai kredensial nyata di dalam workspace
- DILARANG menggunakan perintah malas `git add .` — selalu stage spesifik per file
- DILARANG skip tahapan `/security-review` sebelum melakukan push ke branch main
