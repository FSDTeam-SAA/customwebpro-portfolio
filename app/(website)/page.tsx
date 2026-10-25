import {
  ContactSection,
  Footer,
  HeroSection,
  LogoStrip,
  Navbar,
  ProjectsSection,
  ServicesSection,
  // TeamSection,
  TestimonialSection,
  TrustSection,
} from "@/components/home-components";
import { MotionProvider, Reveal } from "@/components/common/PageMotion";

export default function HomePage() {
  return (
    <MotionProvider>
      <main className="overflow-x-clip bg-white text-[#033c38]">
        <Navbar />
        <Reveal><HeroSection /></Reveal>
        <Reveal delay={0.05}><LogoStrip /></Reveal>
        <Reveal direction="left">
          <TrustSection />
        </Reveal>
        <Reveal direction="right">
          <ServicesSection />
        </Reveal>
        <Reveal>
          <ProjectsSection />
        </Reveal>
        {/* <Reveal direction="left">
          <TeamSection />
        </Reveal> */}
        <Reveal direction="right">
          <TestimonialSection />
        </Reveal>
        <Reveal>
          <ContactSection />
        </Reveal>
        <Reveal>
          <Footer />
        </Reveal>
      </main>
    </MotionProvider>
  );
}
