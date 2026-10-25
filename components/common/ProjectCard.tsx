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
  compactMobile?: boolean;
};

export function ProjectCard({ image, imageAlt, title, accent, description, tags, href = "#contact", imageVariant = "cover", compactMobile = false }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const isExternal = href.startsWith("http");
  const imageClasses = imageVariant === "unify"
    ? "absolute left-[-4.74%] top-[-16.54%] h-[157.33%] w-[109.48%] max-w-none object-cover"
    : "absolute inset-0 h-full w-full object-cover";

  return (
    <m.article
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
    >
      <a href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} aria-label={`View ${title} project`} className={`group relative block overflow-hidden rounded-lg shadow-[0_0_10px_rgba(113,113,113,0.25)] outline-none sm:h-[390px] lg:h-[520px] ${compactMobile ? "h-[115px]" : "h-[310px]"}`}>
        <Image className={`${imageClasses} transition-transform duration-500 group-hover:scale-[1.02] group-focus-visible:scale-[1.02]`} src={image} alt={imageAlt} width={1200} height={1040} sizes="(max-width: 767px) 100vw, 50vw" />
        <span className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/60 group-focus-visible:bg-black/60" />
        <span className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rounded-full border border-dashed border-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100 md:h-[68px] md:w-[68px] ${compactMobile ? "h-9 w-9 sm:h-[58px] sm:w-[58px]" : "h-[58px] w-[58px]"}`}>
          <Image src="/images/home/imgFrame.svg" alt="" width={22} height={22} aria-hidden="true" />
        </span>
      </a>

      <h3 className={`font-bold text-[#033C38] sm:mb-3 sm:mt-[18px] sm:text-[25px] sm:leading-[1.5] sm:tracking-[1px] md:mt-[22px] md:text-[32px] ${compactMobile ? "mb-1.5 mt-2 text-[14px] leading-[1.25] tracking-[-0.2px]" : "mb-3 mt-[18px] text-[25px] leading-[1.5] tracking-[1px]"}`}>
        {title}<br />
        <span className="text-[#A97DDE] [-webkit-text-stroke:0.5px_#033C38] [paint-order:stroke_fill]">{accent}</span>
      </h3>
      <p className={`max-w-[790px] text-[#5C5C5C] sm:mb-4 sm:text-base sm:leading-6 sm:tracking-[1px] ${compactMobile ? "mb-2 text-[10px] leading-[1.4]" : "mb-4 text-base leading-6 tracking-[1px]"}`}>{description}</p>
      <div className={`flex flex-wrap items-center ${compactMobile ? "gap-1 sm:gap-2" : "gap-2"}`}>
        {tags.map((tag, index) => (
          <div className={`flex items-center ${compactMobile ? "gap-1 sm:gap-2" : "gap-2"}`} key={tag}>
            {index > 0 && <Image src="/images/home/imgPolygon1.svg" alt="" width={12} height={12} aria-hidden="true" className={compactMobile ? "h-2 w-2 sm:h-3 sm:w-3" : undefined} />}
            <span className={`rounded-full bg-black/5 font-light text-[#033C38] sm:px-4 sm:py-1 sm:text-base sm:leading-6 sm:tracking-[1px] md:text-xl ${compactMobile ? "px-2 py-0.5 text-[9px] leading-4" : "px-4 py-1 text-sm leading-6 tracking-[1px]"}`}>{tag}</span>
          </div>
        ))}
      </div>
    </m.article>
  );
}
