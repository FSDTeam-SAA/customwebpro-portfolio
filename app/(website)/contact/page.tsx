import { ContactSection, FaqSection } from "@/components/common";
import { MotionProvider, Reveal } from "@/components/common/PageMotion";
import { ContactHero } from "@/components/contact-components";
import { Footer, Navbar } from "@/components/home-components";

export default function ContactPage() {
  return (
    <MotionProvider>
      <main className="overflow-x-clip bg-white text-[#033C38]">
        <Navbar active="Contact" />
        <ContactHero />
        <div className="h-12 bg-white lg:h-20" aria-hidden="true" />
        <ContactSection />
        <Reveal direction="right">
          <FaqSection />
        </Reveal>
        <Reveal>
          <Footer />
        </Reveal>
      </main>
    </MotionProvider>
  );
}
