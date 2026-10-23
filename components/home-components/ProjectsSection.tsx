import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { ProjectCard, type ProjectCardProps } from "@/components/common/ProjectCard";

const projects: ProjectCardProps[] = [
  {
    image: "/images/home/imgFrame67.png",
    imageAlt: "Landify real estate management platform interface",
    title: "Landify - Real Estate",
    accent: "Management Platform",
    description: "Landify case study: a real estate management platform with brand identity, dashboard UI, and responsive web design by ZeeTech. See the full ecosystem.",
    tags: ["Branding & Product design", "Real Estate"],
  },
  {
    image: "/images/home/imgFrame68.png",
    imageAlt: "UnifyIQ sales management SaaS website",
    title: "UnifyIQ — Sales Management",
    accent: "SaaS Platform",
    description: "UnifyIQ case study: a sales management SaaS website designed and built in Webflow by ZeeTech — UI/UX, product storytelling, and conversion-focused pages.",
    tags: ["Webflow template", "SAAS"],
    imageVariant: "unify",
  },
];

export function ProjectsSection() {
  return (
    <section className="bg-[#F6F8F6] px-5 py-[70px] md:px-7 lg:px-[6.875vw] lg:py-[100px]" id="portfolio">
      <div className="mx-auto mb-12 flex max-w-[1664px] flex-col items-start justify-between gap-9 md:mb-20 lg:flex-row lg:items-end lg:gap-20">
        <div className="shrink-0">
          <div className="mb-6 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-dashed border-[#033C38] bg-[#FFEB69]">
              <Image src="/images/home/imgComponent14.svg" alt="" width={18} height={18} aria-hidden="true" />
            </span>
            <p className="text-sm font-medium uppercase leading-5 tracking-[1px] text-[#033C38] sm:text-base">Featured projects</p>
          </div>

          <h2 className="text-[42px] font-extrabold leading-[1.2] tracking-[-1.5px] text-[#033C38] sm:text-[56px] lg:text-[80px] lg:leading-[1.15] lg:tracking-[-3px]">
            Projects that<br />
            <span className="text-[#FFEB69] [-webkit-text-stroke:1px_#033C38] [paint-order:stroke_fill]">drive real</span>{" "}
            impact
          </h2>
        </div>

        <div className="w-full max-w-[533px] pb-1 text-[#5C5C5C]">
          <p className="text-base leading-7 tracking-[0.4px] sm:text-xl sm:leading-[1.5]">
            Explore a diverse portfolio of completed works that showcase our creativity, technical expertise, and commitment to client satisfaction. Each project reflects our passion for quality and innovation.
          </p>
          <a href="#contact" className="mt-4 inline-flex h-[52px] items-center justify-center gap-2 rounded-lg bg-[#063B26] px-7 text-base font-medium text-white transition-colors hover:bg-[#0a5138] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#063B26] sm:text-xl">
            View All Project
            <ArrowUpRight className="h-5 w-5" strokeWidth={1.8} />
          </a>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1664px] grid-cols-1 gap-12 md:grid-cols-2">
        {projects.map((project) => <ProjectCard key={project.title} {...project} />)}
      </div>
    </section>
  );
}
