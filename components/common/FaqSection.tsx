"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../home-components/shared";
const faqs = [
  [
    "1. What Services Does CustomWeb Pro Offer?",
    "CustomWeb Pro offers AI-powered website development, mobile app development, full-stack web solutions, SaaS platforms, AI agents, chatbots, business automation, WordPress website design, and interactive online coding lessons.",
  ],
  [
    "2. Can You Build A Custom AI-Powered Website Or Mobile Application For My Business?",
    "Yes! I develop custom AI-powered websites and mobile applications tailored to your business goals. From AI integrations and intelligent chatbots to scalable web and mobile solutions, I help turn your ideas into practical digital products.",
  ],
  [
    "3. Do You Offer WordPress Website Design And Redesign Services?",
    "Yes! I provide professional WordPress website design, redesign, customization, and development services. Whether you need a new business website or want to improve an existing one, I can help create a modern, responsive, and user-friendly experience.",
  ],
  [
    "4. Do You Provide Ongoing Support And Customization After Project Delivery?",
    "Yes! I can help with bug fixes, feature enhancements, website improvements, and additional functionality based on your project requirements. The scope of ongoing support and maintenance can be discussed before starting the project.",
  ],
  [
    "5. How Can I Get Started, And How Much Does A Project Cost?",
    "Getting started is easy! Share your idea, project requirements, and goals with me. I’ll review your needs and recommend a suitable solution, timeline, and budget. Project-based services start at $90, AI and full-stack development projects start at $150, and hourly services start at $25, depending on the scope and complexity of the work.",
  ],
];
export function FaqSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <section id="faq" className="mx-auto grid max-w-[1920px] grid-cols-1 items-start gap-10 bg-white px-5 py-[70px] md:px-7 xl:grid-cols-[minmax(320px,1fr)_minmax(0,900px)] xl:gap-[clamp(48px,6.8vw,130px)] xl:px-[6.875vw] xl:py-[100px]">
      <div className="self-start xl:sticky xl:top-28">
        <SectionHeading eyebrow="A few things you might ask" align="left">
          Let&apos;s make
          <br />
          <em className="not-italic text-[#ffeb69]">things clear.</em>
        </SectionHeading>
      </div>
      <m.div
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.18, margin: "0px 0px -8% 0px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.14,
              delayChildren: 0.12,
            },
          },
        }}
      >
        {faqs.map(([q, a], i) => {
          const isOpen = activeFaq === i;

          return (
          <m.div
            layout={!reduceMotion}
            variants={{
              hidden: { opacity: 0, x: 38, y: 18 },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 95,
                  damping: 18,
                  mass: 0.65,
                },
              },
            }}
            className={`border-b border-[#ebebeb] px-3.5 py-[22px] transition-colors ${isOpen ? "rounded-[10px] bg-[#f7f7f7]" : "bg-white"}`}
            key={q}
          >
            <button
              className="flex w-full cursor-pointer justify-between gap-5 border-0 bg-transparent p-0 text-left text-base font-semibold text-[#033C38] md:text-[19px]"
              onClick={() => setActiveFaq(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${i}`}
            >
              {q}
              <m.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ type: "spring", stiffness: 360, damping: 24 }} className="text-2xl font-normal leading-5">+</m.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <m.div
                  id={`faq-answer-${i}`}
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduceMotion ? { display: "none" } : { height: 0, opacity: 0 }}
                  transition={{ height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.22 } }}
                  className="overflow-hidden"
                >
                  <p className="pb-1 pt-4 leading-relaxed text-[#5c5c5c]">{a}</p>
                </m.div>
              )}
            </AnimatePresence>
          </m.div>
          );
        })}
      </m.div>
    </section>
  );
}
