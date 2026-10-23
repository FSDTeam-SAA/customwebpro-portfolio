"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { ProjectCard, type ProjectCardProps } from "@/components/common";

const filters = ["All Projects", "Fintech", "SaaS", "Healthcare", "Editorial", "Agency"] as const;
type Filter = (typeof filters)[number];

const baseProjects: Array<ProjectCardProps & { category: Exclude<Filter, "All Projects"> }> = [
  { image: "/images/home/imgFrame67.png", imageAlt: "Landify real estate mobile application", title: "Landify - Real Estate", accent: "Management Platform", description: "Landify case study: a real estate management platform with brand identity, dashboard UI, and responsive web design by ZeeTech. See the full ecosystem.", tags: ["Discovery", "Planning"], category: "Fintech" },
  { image: "/images/home/imgFrame68.png", imageAlt: "UnifyIQ sales management application", title: "UnifyIQ — Sales Management", accent: "SaaS Platform", description: "UnifyIQ case study: a sales management SaaS website designed and built in Webflow by ZeeTech — UI/UX, product storytelling, and conversion-focused pages.", tags: ["Discovery", "Planning"], category: "SaaS", imageVariant: "unify" },
  { image: "/images/home/imgFrame68.png", imageAlt: "Healthcare mobile product interface", title: "UnifyIQ — Sales Management", accent: "SaaS Platform", description: "A focused digital product experience shaped around clear journeys, accessible interaction and measurable business outcomes.", tags: ["Discovery", "Planning"], category: "Healthcare", imageVariant: "unify" },
  { image: "/images/home/imgFrame67.png", imageAlt: "Editorial real estate product presentation", title: "Landify - Real Estate", accent: "Management Platform", description: "A complete product ecosystem combining strategy, visual identity and responsive interfaces into one consistent experience.", tags: ["Discovery", "Planning"], category: "Editorial" },
  { image: "/images/home/imgFrame67.png", imageAlt: "Agency product design case study", title: "Landify - Real Estate", accent: "Management Platform", description: "Research-led design and development created to make complex workflows feel simple, useful and conversion-focused.", tags: ["Discovery", "Planning"], category: "Agency" },
  { image: "/images/home/imgFrame68.png", imageAlt: "Fintech application case study", title: "UnifyIQ — Sales Management", accent: "SaaS Platform", description: "A scalable interface system with polished product storytelling, responsive behavior and a strong visual identity.", tags: ["Discovery", "Planning"], category: "Fintech", imageVariant: "unify" },
];

export function PortfolioGallery() {
  const [active, setActive] = useState<Filter>("All Projects");
  const reduceMotion = useReducedMotion();
  const projects = active === "All Projects" ? baseProjects : baseProjects.filter((project) => project.category === active);

  return (
    <section className="bg-white px-5 py-14 md:px-7 lg:px-[6.875vw] lg:py-16">
      <div className="mx-auto max-w-[1664px]">
        <div className="mb-12 flex gap-3 overflow-x-auto pb-2 sm:flex-wrap lg:mb-20 lg:gap-4">
          {filters.map((filter) => (
            <button key={filter} onClick={() => setActive(filter)} className={`h-[48px] shrink-0 rounded-full border border-[#033C38] px-6 text-sm font-medium transition-colors sm:h-[52px] sm:px-7 sm:text-base ${active === filter ? "bg-[#033C38] text-white" : "bg-white text-[#033C38] hover:bg-[#FFEB69]"}`}>
              {filter}
            </button>
          ))}
        </div>

        <m.div layout className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:gap-y-20">
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => (
              <m.div key={`${project.category}-${index}`} layout initial={reduceMotion ? false : { opacity: 0, y: 36, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={reduceMotion ? undefined : { opacity: 0, y: 18, scale: 0.98 }} transition={{ duration: 0.48, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}>
                <ProjectCard {...project} />
              </m.div>
            ))}
          </AnimatePresence>
        </m.div>
      </div>
    </section>
  );
}
