# FRONTEND.md — Agent Constitution
> Berlaku untuk semua AI agent di project ini.
> Ini aturan, bukan saran. Baca bersama DESIGN.md untuk context visual.

---

## Filosofi

Desain yang baik terasa natural — tidak ada elemen yang ditambahkan tanpa alasan.  
Setiap margin, warna, shadow, dan animasi harus bisa dijelaskan tujuannya.

---

## Hierarki Komponen

1. shadcn/ui primitives — jangan ubah
2. Common components — reusable, tidak ada state bisnis
3. Feature components — punya konteks bisnis spesifik
4. Page/layout — menyusun yang di atas

---

## Aturan Komponen

- Target: <100 baris per komponen
- Maksimum: 150 baris — jika lebih, pecah
- Custom hook untuk logic >10 baris
- Props interface: `[NamaKomponen]Props`
- Export type bersama komponen

---

## Aturan Visual

### Spacing
Gunakan nilai Tailwind: `p-2, p-4, p-6, p-8, p-12`.  
Konsisten di satu halaman — hindari campur `gap-3` dan `gap-4` di level yang sama.

### Warna
Selalu gunakan CSS variables dari DESIGN.md:
- `bg-background, text-foreground`
- `text-muted-foreground` untuk secondary text
- `bg-primary text-primary-foreground` untuk aksi utama
- `bg-destructive` untuk error/delete
- Tidak ada hardcode hex (#fff, #000, dll)

### Typography
- Heading: `font-semibold` atau `font-bold`
- Body UI: `text-sm` (14px)
- Body konten: `text-base` (16px)
- Secondary: `text-muted-foreground`

### Border Radius
- Small (badge, input): `rounded-md`
- Medium (card, dialog): `rounded-lg`
- Large (modal): `rounded-xl`

### Shadow
Gunakan sparingly. Preferensikan `border border-border` daripada shadow untuk card.

---

## Aturan Responsivitas

- Mobile-first selalu
- Pattern: `[mobile] sm:[640px] md:[768px] lg:[1024px] xl:[1280px]`
- Layout grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Sidebar: `hidden md:flex`

---

## Aturan Aksesibilitas

- Semua image: `alt` wajib (kosong `alt=""` untuk decorative)
- Semua button: visible text atau `aria-label`
- Form: setiap input punya `<label>` dengan `htmlFor`
- Focus: jangan disable outline tanpa menambahkan `ring`
- Contrast: minimum 4.5:1 untuk normal text

---

## Aturan Performa

- Gambar: selalu `next/image`, tidak pernah `<img>`
- Font: `next/font`, tidak pernah CDN link
- Icons: Lucide React (tree-shakeable)
- Conditional rendering: `&&` untuk komponen besar

---

## Loading States (Wajib)

Setiap data fetching harus punya:
1. Loading state (skeleton atau spinner)
2. Error state (pesan yang manusiawi)
3. Empty state (bukan layar kosong)

Pattern:
```tsx
if (isLoading) return <Skeleton />
if (error) return <ErrorMessage error={error} />
if (!data || data.length === 0) return <EmptyState />
return <DataComponent data={data} />
```

---

## Animasi

- Durasi: 150–300ms micro-interactions, 300–500ms layout shifts
- Easing: `ease-in-out` sebagai default
- Tidak ada animasi yang mengganggu — motion harus ada tujuan

---

## Yang TIDAK BOLEH Dilakukan

- `<img>` tanpa next/image
- Hardcode warna atau ukuran
- Inline style (`style={{...}}`)
- `any` type di TypeScript
- `!important` di CSS
- Komponen tanpa prop types
- Logic bisnis di dalam komponen UI
- `console.log` di production code
