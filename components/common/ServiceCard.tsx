"use client";

import { m, useReducedMotion } from "framer-motion";
import Image from "next/image";

export type ServiceCardProps = {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  tags?: string[];
  compactMobile?: boolean;
};

export function ServiceCard({ image, imageAlt, title, description, compactMobile = false }: ServiceCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <m.article whileHover={reduceMotion ? undefined : { y: -8 }} transition={{ type: "spring", stiffness: 220, damping: 20 }} className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#D0D0D0] bg-[#FAFAFA] shadow-[0_8px_30px_rgba(3,60,56,0)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(3,60,56,0.14)]">
      <div className={`relative block overflow-hidden md:h-[292px] ${compactMobile ? "h-[105px] sm:h-[230px]" : "h-[230px]"}`}>
        <Image src={image} alt={imageAlt} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
        <span className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/40" />
      </div>

      <div className={`flex flex-1 flex-col sm:gap-4 sm:p-6 ${compactMobile ? "gap-2 p-2.5" : "gap-4 p-5"}`}>
        <div className="flex-1">
          <h3 className={`font-bold tracking-[-0.5px] text-[#033C38] lg:text-[32px] xl:text-[36px] xl:leading-[1.5] ${compactMobile ? "text-[14px] leading-[1.25] sm:text-[27px] sm:leading-[1.4]" : "text-[27px] leading-[1.4]"}`}>{title}</h3>
          <p className={`text-[#5C5C5C] sm:mt-3 sm:text-base sm:leading-6 sm:tracking-[1px] ${compactMobile ? "mt-1.5 text-[10px] leading-[1.4]" : "mt-3 text-base leading-6 tracking-[1px]"}`}>{description}</p>
        </div>

      </div>
    </m.article>
  );
}
