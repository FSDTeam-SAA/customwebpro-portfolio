"use client";

import { m, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
export { A } from "./constants";
export function SectionHeading({
  eyebrow,
  children,
  description,
  align = "center",
  compactMobile = true,
}: {
  eyebrow: string;
  children: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  compactMobile?: boolean;
}) {
  const left = align === "left";
  const reduceMotion = useReducedMotion();
  return (
    <m.header
      className={`flex max-w-[1200px] flex-col gap-4 md:gap-6 ${left ? "items-start text-left" : "mx-auto items-center text-center"}`}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.45 }}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 } },
      }}
    >
      <m.div variants={{ hidden: { opacity: 0, x: -18 }, visible: { opacity: 1, x: 0 } }} className="flex items-center gap-2 text-xs font-medium uppercase text-black md:text-lg">
        <span className="rounded-full border border-dashed border-[#A97DDE] p-2 text-xs text-[#033c38]">
          ◆
        </span>
        {eyebrow}
      </m.div>
      <m.h2 variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }} className={`m-0 font-semibold leading-[1.12] tracking-[-1.8px] text-[#033c38] [&_em]:text-[#A97DDE] [&_em]:[-webkit-text-stroke:1px_#033C38] [&_em]:[paint-order:stroke_fill] md:text-6xl lg:text-[80px] lg:tracking-[-3px] ${compactMobile ? "text-[34px] sm:text-[42px]" : "text-[42px]"}`}>
        {children}
      </m.h2>
      {description && (
        <m.p variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} className={`m-0 max-w-[764px] text-[#5c5c5c] md:text-xl md:leading-[30px] ${compactMobile ? "text-[13px] leading-5 sm:text-base sm:leading-[25px]" : "text-base leading-[25px]"}`}>
          {description}
        </m.p>
      )}
    </m.header>
  );
}
export function ProjectButton({
  children = "Start a project",
  dark = false,
  href = "/contact",
}: {
  children?: React.ReactNode;
  dark?: boolean;
  href?: string;
}) {
  return (
    <m.a
      className={`inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-lg px-7 text-base font-semibold no-underline ${dark ? "border border-white bg-[#033c38] text-white" : "bg-[#A97DDE] text-white"}`}
      href={href}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 420, damping: 24 }}
    >
      {children}
      <ArrowUpRight size={18} />
    </m.a>
  );
}
