"use client";

import { m, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import { A } from "./constants";
const tags = [
  "Mobile App Development",
  "UI/UX Design",
  "Flutter Developer",
  "AI Integration",
  "Web Development",
];
export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="grid min-h-0 place-items-center bg-[linear-gradient(180deg,rgba(255,235,105,.52)_0%,rgba(130,167,0,.22)_32%,rgba(6,59,38,0)_100%)] px-5 pb-14 pt-10 md:px-7 md:pt-14 lg:min-h-[996px] lg:px-[6.875vw] lg:pb-[50px] lg:pt-14"
    >
      <m.div className="flex w-full max-w-[1656px] flex-col items-center gap-6 lg:grid lg:grid-cols-[minmax(0,760px)_minmax(430px,617px)] lg:justify-between lg:gap-[60px]" initial={reduceMotion ? false : "hidden"} animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.12 } } }}>
        <m.div variants={item} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
          <m.h1 variants={item} className="mb-6 text-[47px] font-extrabold leading-[1.2] tracking-[-2px] text-[#033c38] md:text-6xl lg:text-[80px] lg:tracking-[-3px]">
            Your next idea.
            <br />
            Built{" "}
            <span className="text-[#FFEB69] [-webkit-text-stroke:1px_#033C38] [paint-order:stroke_fill]">
              with care.
            </span>
          </m.h1>
          <m.p variants={item} className="mb-6 max-w-[590px] text-[15px] leading-[26px] text-[#59636e] md:text-base">
            Empowering your ideas with custom AI solutions, cutting-edge mobile
            apps, and stunning websites — backed by 100% satisfaction guarantee.
          </m.p>
          <m.div variants={item} className="flex w-full flex-wrap items-center gap-2 rounded-2xl bg-white p-2 md:w-fit md:gap-[15px] md:p-4">
            {[
              ["1000+", "Reviews"],
              ["5.0", "Reviews"],
              ["Level 2", "Fiverr Seller"],
            ].map(([a, b], i) => (
              <div
                key={a}
                className="flex min-w-[calc(50%_-_4px)] flex-1 flex-col items-center gap-1 rounded-lg bg-[#033c38] px-3.5 py-2 text-white md:min-w-[112px] md:px-[13px]"
              >
                <strong className="flex items-center gap-1 text-base">
                  {a}
                  {i === 1 && <Star size={15} fill="#ffeb69" />}
                </strong>
                <small className="text-[14px] text-[#d4d9cc]">{b}</small>
              </div>
            ))}
            <a
              className="flex h-12 w-full  items-center justify-center gap-2 rounded-lg border border-[#ffeb69] bg-[#087a4b] px-[22px] text-white no-underline md:w-auto"
              href="#contact"
            >
              ● Fiverr <ArrowUpRight size={18}  className="border rounded-full !w-7 !h-7"/>
            </a>
          </m.div>
          <m.div variants={item} className="mt-4 flex max-w-[553px] flex-wrap gap-2 md:gap-x-4 md:gap-y-3">
            {tags.map((tag) => (
              <span
                className="rounded-[47px] border border-[#033c38] bg-[#e5ecd9] px-2.5 py-1.5 text-[14px] text-[#033C38] md:px-4 md:py-2 md:text-xs"
                key={tag}
              >
                ◆ {tag}
              </span>
            ))}
          </m.div>
        </m.div>
        <m.div variants={{ hidden: { opacity: 0, x: 60, scale: 0.96 }, visible: { opacity: 1, x: 0, scale: 1 } }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="relative flex h-[510px] w-full items-end justify-center lg:h-[720px]">
          <Image
            className="absolute left-1/2 top-[35px] w-[500px] max-w-none -translate-x-1/2 lg:top-[78px] lg:w-[710px]"
            src={`${A}imgEllipse2322.png`}
            alt=""
            width={1423}
            height={1423}
          />
          <m.div className="relative z-[1] flex h-full w-full items-end justify-center" animate={reduceMotion ? undefined : { y: [0, -8, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}>
          <Image
            className="max-h-[500px] w-full object-contain object-bottom lg:max-h-[771px]"
            src={`${A}imgBiplobHossainGeneratedEditorialPortrait.png`}
            alt="Biplob Hossain"
            width={560}
            height={700}
            priority
          />
          </m.div>
          <div className="absolute bottom-0 left-1/2 z-[2] flex w-[90%] -translate-x-1/2 flex-col items-center rounded-lg bg-[linear-gradient(180deg,#fff8ce_0%,#82a700_34%,#063b26_100%)] px-5 py-[13px] text-white lg:w-[83%]">
            <strong className="text-[22px]">Biplob Hossain</strong>
            <small className="text-xs">CEO & Founder of Custom Web Pro</small>
          </div>
        </m.div>
      </m.div>
    </section>
  );
}
