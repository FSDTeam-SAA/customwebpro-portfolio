import { ContactSection } from "@/components/common";
import { MotionProvider, Reveal } from "@/components/common/PageMotion";
import { Footer, Navbar } from "@/components/home-components";
import { ProjectDetailsContent } from "@/components/project-details";
import { portfolioProjects } from "@/components/common/portfolioData";

export default function ProjectDetailsPage() {
  return (
    <MotionProvider>
      <main className="overflow-x-clip bg-white text-[#033C38]">
        <Navbar active="Portfolio" />
        <Reveal><ProjectDetailsContent project={portfolioProjects[3]} /></Reveal>
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
