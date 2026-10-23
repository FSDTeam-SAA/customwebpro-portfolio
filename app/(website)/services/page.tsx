import { ContactSection, FaqSection, PartnershipSection } from "@/components/common";
import { MotionProvider, Reveal } from "@/components/common/PageMotion";
import { Footer, Navbar } from "@/components/home-components";
import { ServicesGrid, ServicesHero } from "@/components/services-components";

export default function ServicesPage() {
  return (
    <MotionProvider>
      <main className="overflow-x-clip bg-white text-[#033C38]">
        <Navbar active="Services" />
        <ServicesHero />
        <ServicesGrid />
        <Reveal direction="left"><PartnershipSection /></Reveal>
        <Reveal direction="right"><FaqSection /></Reveal>
        <Reveal><ContactSection /></Reveal>
        <Reveal><Footer /></Reveal>
      </main>
    </MotionProvider>
  );
}
