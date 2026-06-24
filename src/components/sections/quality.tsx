import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Anak saya awalnya tidak percaya diri dengan teknologi. Setelah masuk sini, di semester dua dia sudah bisa kelola toko online sendiri. Yang bikin tenang, akhlak dan shalatnya juga tetap terjaga.",
    name: "Ibu N.H.",
    role: "Wali Murid · Martapura Timur",
  },
  {
    quote:
      "Saya pilih SMKIT Ushuluddin karena gratis SPP sangat membantu. Tapi yang tidak saya duga, gurunya benar-benar serius mendampingi — bukan sekadar hadir di kelas.",
    name: "Bapak A.R.",
    role: "Wali Murut · Karang Intan",
  },
  {
    quote:
      "Dulu takut mondok, pikir tidak bisa fokus belajar IT. Ternyata justru sebaliknya — jadwal pesantren bikin saya lebih disiplin mengerjakan semua tugas digital.",
    name: "M.F.",
    role: "Siswa Aktif · Astambul",
  },
];

const achievements = [
  {
    level: "Tingkat Kabupaten",
    title: "Juara 1 FLS3N Cipta Puisi Kab. Banjar 2026",
    organizer: "Dinas Pendidikan & Kebudayaan Prov. KalSel",
  },
  {
    level: "Tingkat Kabupaten",
    title: "Juara 1 FLS3N Cipta Puisi Kab. Banjar 2025",
    organizer: "Dinas Pendidikan & Kebudayaan Prov. KalSel",
  },
  {
    level: "Tingkat Provinsi",
    title: "Juara 3 FLS3N Cipta Puisi Prov. Kalimantan Selatan 2025",
    organizer: "Dinas Pendidikan & Kebudayaan Prov. KalSel",
  },
  {
    level: "Tingkat Kabupaten",
    title: "Juara 3 Fahmil Quran Kabupaten Banjar 2025",
    organizer: "LPTQ Kabupaten Banjar",
  },
];

export default function Quality() {
  return (
    <section id="bukti-kualitas" className="bg-background py-24">
      {/* Testimonials */}
      <div className="max-w-xl text-center mx-auto mb-16 px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
          Kata Mereka
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Yang Mereka Rasakan
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {testimonials.map((t, idx) => (
          <Card
            key={idx}
            className="bg-surface border border-secondary/60 rounded-2xl p-8 flex flex-col justify-between shadow-none hover:shadow-md transition-shadow"
          >
            <div>
              <Quote className="w-7 h-7 text-primary/20 mb-6" />
              <p className="text-foreground text-sm leading-relaxed italic">
                {t.quote}
              </p>
            </div>
            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-secondary/50">
              <Avatar className="w-10 h-10 bg-secondary">
                <AvatarFallback className="text-primary font-semibold text-xs">
                  {t.name.split(" ")[0][0]}
                  {t.name.split(" ")[1]?.[0] || ""}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {t.name}
                </p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Achievements */}
      <div className="max-w-xl text-center mx-auto mb-12 px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
          Rekam Jejak
        </p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          Prestasi yang Kami Banggakan
        </h2>
      </div>

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {achievements.map((a, idx) => (
          <Card
            key={idx}
            className="bg-surface border border-secondary/60 rounded-xl p-6 hover:-translate-y-1 transition-transform shadow-none hover:shadow-sm"
          >
            <p className="text-[10px] font-semibold text-primary border border-primary/30 rounded-full px-2 py-1 mb-3 inline-block">
              {a.level}
            </p>
            <p className="text-sm font-semibold text-foreground leading-snug mb-2">
              {a.title}
            </p>
            <p className="text-xs text-muted-foreground">{a.organizer}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
