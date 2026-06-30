import { Award } from "lucide-react";

interface AchievementProps {
  level: string;
  title: string;
  organizer: string;
}

export function Achievement({ level, title, organizer }: AchievementProps) {
  return (
    <div className="h-full bg-surface border border-secondary/60 rounded-xl p-6 flex flex-col shadow-none hover:-translate-y-1 hover:shadow-sm transition-all duration-300">
      <p className="inline-block w-fit rounded-full border border-primary/30 px-2 py-1 text-[10px] font-semibold text-primary mb-4">
        {level}
      </p>

      <div className="flex-1">
        <p className="text-sm font-semibold leading-snug text-foreground">
          {title}
        </p>
      </div>

      <p className="mt-5 text-xs text-muted-foreground leading-relaxed">
        {organizer}
      </p>
    </div>
  );
}

export function AppreciationCallout() {
  return (
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
  );
}

export function StepByStep() {
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

  return (
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
                <p className="font-semibold text-foreground mb-1">{s.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function KeyFactsGrid() {
  const facts = [
    { value: "30", label: "Kuota Siswa / Angkatan" },
    { value: "Gratis", label: "Pendaftaran & SPP Bulanan" },
    { value: "Terakreditasi", label: "BAN-PDM" },
    { value: "Pesantren", label: "Sistem Asrama Terintegrasi" },
  ];

  return (
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
  );
}
