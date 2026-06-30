import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export function TestimonialItem({ testimonial }: { testimonial: Testimonial }) {
  const { quote, name, role } = testimonial;
  return (
    <Card className="bg-surface border border-secondary/60 rounded-2xl p-8 flex flex-col justify-between h-full shadow-none hover:shadow-md transition-shadow">
      <div className="flex-1">
        <Quote className="w-7 h-7 text-primary/20 mb-6" />
        <p className="text-foreground text-sm leading-relaxed italic">
          {quote}
        </p>
      </div>
      <div className="flex items-center gap-3 mt-8 pt-6 border-t border-secondary/50">
        <Avatar className="w-10 h-10 bg-secondary">
          <AvatarFallback className="text-primary font-semibold text-xs">
            {name.split(" ")[0][0]}
            {name.split(" ")[1]?.[0] || ""}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </Card>
  );
}

export const testimonials = [
  {
    quote:
      "Anak saya awalnya belum terbiasa menggunakan komputer untuk belajar. Sekarang sudah lebih percaya diri saat mengerjakan tugas digital.",
    name: "Ibu N.H.",
    role: "Wali Murid · Martapura Timur",
  },
  {
    quote:
      "Saya pilih SMKIT Ushuluddin karena gratis SPP sangat membantu. Tapi yang tidak saya duga, gurunya benar-benar serius mendampingi.",
    name: "Bapak A.R.",
    role: "Wali Murid · Karang Intan",
  },
  {
    quote:
      "Selama sekolah saya banyak belajar hal-hal yang sebelumnya belum pernah saya coba, terutama tentang bisnis digital. Gurunya juga cukup terbuka kalau kami ingin bertanya atau berdiskusi.",
    name: "Muhammad Ilham",
    role: "Alumni SMKIT Ushuluddin · Batanjung",
  },
];
