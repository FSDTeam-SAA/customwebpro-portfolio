import { notFound } from "next/navigation";
import { ContactSection } from "@/components/common";
import { getPortfolioProject, portfolioProjects } from "@/components/common/portfolioData";
import { MotionProvider, Reveal } from "@/components/common/PageMotion";
import { Footer, Navbar } from "@/components/home-components";
import { ProjectDetailsContent } from "@/components/project-details";

export function generateStaticParams() {
  return portfolioProjects.map(({ slug }) => ({ slug }));
}

export default function ProjectDetailsPage({ params }: { params: { slug: string } }) {
  const project = getPortfolioProject(params.slug);

  if (!project) notFound();

  return (
    <MotionProvider>
      <main className="overflow-x-clip bg-white text-[#033C38]">
        <Navbar active="Portfolio" />
        <Reveal><ProjectDetailsContent project={project} /></Reveal>
        <Reveal><ContactSection /></Reveal>
        <Reveal><Footer /></Reveal>
      </main>
    </MotionProvider>
  );
}
