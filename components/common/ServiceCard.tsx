"use client";

import { m, useReducedMotion } from "framer-motion";
import Image from "next/image";

export type ServiceCardProps = {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  tags?: string[];
  href?: string;
};

export function ServiceCard({ image, imageAlt, title, description, tags = ["Discovery", "Planning"], href = "/#contact" }: ServiceCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <m.article whileHover={reduceMotion ? undefined : { y: -8 }} transition={{ type: "spring", stiffness: 220, damping: 20 }} className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#D0D0D0] bg-[#FAFAFA] shadow-[0_8px_30px_rgba(3,60,56,0)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(3,60,56,0.14)]">
      <a href={href} aria-label={`Learn more about ${title}`} className="relative block h-[230px] overflow-hidden outline-none md:h-[292px]">
        <Image src={image} alt={imageAlt} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-focus-within:scale-105" />
        <span className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/45 group-focus-within:bg-black/45" />
        <span className="absolute left-1/2 top-1/2 flex h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-dashed border-white drop-shadow-[0_1px_2px_white] transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110 group-focus-within:rotate-45 group-focus-within:scale-110">
          <Image src="/images/home/imgFrame.svg" alt="" width={20} height={20} aria-hidden="true" />
        </span>
      </a>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div className="flex-1">
          <h3 className="text-[27px] font-bold leading-[1.4] tracking-[-0.5px] text-[#033C38] lg:text-[32px] xl:text-[36px] xl:leading-[1.5]">{title}</h3>
          <p className="mt-3 text-base leading-6 tracking-[1px] text-[#5C5C5C]">{description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {tags.map((tag, index) => (
            <div key={tag} className="flex items-center gap-2">
              {index > 0 && <Image src="/images/home/imgComponent14.svg" alt="" width={18} height={18} aria-hidden="true" />}
              <span className="rounded-full bg-[#EFEFEF] px-4 py-1 text-sm font-light leading-6 text-[#033C38] sm:text-base xl:text-xl">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </m.article>
  );
}
