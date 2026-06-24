import HeroSection from "@/components/sections/HeroSection";
import Philosophy from "@/components/sections/philosophy";
import Curriculum from "@/components/sections/curriculum";
import Quality from "@/components/sections/quality";
import Gallery from "@/components/sections/gallery";
import Admissions from "@/components/sections/admissions";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <Philosophy />
      <Curriculum />
      <Quality />
      <Gallery />
      <Admissions />
    </main>
  );
}
