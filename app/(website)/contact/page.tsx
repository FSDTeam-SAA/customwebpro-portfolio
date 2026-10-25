import { ContactSection } from "@/components/common";
import { MotionProvider, Reveal } from "@/components/common/PageMotion";
import { ContactHero } from "@/components/contact-components";
import { Footer, Navbar } from "@/components/home-components";

export default function ContactPage() {
  return (
    <MotionProvider>
      <main className="overflow-x-clip bg-white text-[#033C38]">
        <Navbar active="Contact" />
        <Reveal><ContactHero /></Reveal>
        <div className="h-12 bg-white lg:h-20" aria-hidden="true" />
        <Reveal direction="right"><ContactSection /></Reveal>
        <Reveal>
          <Footer />
        </Reveal>
      </main>
    </MotionProvider>
  );
}
