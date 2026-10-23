"use client";

import { m, useReducedMotion } from "framer-motion";
import Image from "next/image";

export type ProjectCardProps = {
  image: string;
  imageAlt: string;
  title: string;
  accent: string;
  description: string;
  tags: string[];
  href?: string;
  imageVariant?: "cover" | "unify";
};

export function ProjectCard({ image, imageAlt, title, accent, description, tags, href = "#contact", imageVariant = "cover" }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const imageClasses = imageVariant === "unify"
    ? "absolute left-[-4.74%] top-[-16.54%] h-[157.33%] w-[109.48%] max-w-none object-cover"
    : "absolute inset-0 h-full w-full object-cover";

  return (
    <m.article
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
    >
      <a href={href} aria-label={`View ${title} project`} className="group relative block h-[310px] overflow-hidden rounded-lg shadow-[0_0_10px_rgba(113,113,113,0.25)] outline-none sm:h-[390px] lg:h-[520px]">
        <Image className={`${imageClasses} transition-transform duration-500 group-hover:scale-[1.02] group-focus-visible:scale-[1.02]`} src={image} alt={imageAlt} width={1200} height={1040} sizes="(max-width: 767px) 100vw, 50vw" />
        <span className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/60 group-focus-visible:bg-black/60" />
        <span className="absolute left-1/2 top-1/2 flex h-[58px] w-[58px] -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rounded-full border border-dashed border-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100 md:h-[68px] md:w-[68px]">
          <Image src="/images/home/imgFrame.svg" alt="" width={22} height={22} aria-hidden="true" />
        </span>
      </a>

      <h3 className="mb-3 mt-[18px] text-[25px] font-bold leading-[1.5] tracking-[1px] text-[#033C38] md:mt-[22px] md:text-[32px]">
        {title}<br />
        <span className="text-[#FFEB69] [-webkit-text-stroke:0.5px_#033C38] [paint-order:stroke_fill]">{accent}</span>
      </h3>
      <p className="mb-4 max-w-[790px] text-base leading-6 tracking-[1px] text-[#5C5C5C]">{description}</p>
      <div className="flex flex-wrap items-center gap-2">
        {tags.map((tag, index) => (
          <div className="flex items-center gap-2" key={tag}>
            {index > 0 && <Image src="/images/home/imgPolygon1.svg" alt="" width={12} height={12} aria-hidden="true" />}
            <span className="rounded-full bg-black/5 px-4 py-1 text-sm font-light leading-6 tracking-[1px] text-[#033C38] sm:text-base md:text-xl">{tag}</span>
          </div>
        ))}
      </div>
    </m.article>
  );
}
