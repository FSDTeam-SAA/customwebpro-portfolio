"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { ProjectCard } from "@/components/common";
import { portfolioCategories, portfolioProjects } from "@/components/common/portfolioData";

type Filter = (typeof portfolioCategories)[number];

export function PortfolioGallery() {
  const [active, setActive] = useState<Filter>("All Projects");
  const reduceMotion = useReducedMotion();
  const projects = active === "All Projects" ? portfolioProjects : portfolioProjects.filter((project) => project.category === active);

  return (
    <section className="bg-white px-5 py-14 md:px-7 lg:px-[6.875vw] lg:py-16">
      <div className="mx-auto max-w-[1664px]">
        <div className="mb-12 flex gap-3 overflow-x-auto pb-2 sm:flex-wrap lg:mb-20 lg:gap-4">
          {portfolioCategories.map((filter) => (
            <button key={filter} onClick={() => setActive(filter)} className={`h-[48px] shrink-0 rounded-full border border-[#033C38] px-6 text-sm font-medium transition-colors sm:h-[52px] sm:px-7 sm:text-base ${active === filter ? "bg-[#033C38] text-white" : "bg-white text-[#033C38] hover:bg-[#A97DDE]"}`}>
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
