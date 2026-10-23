"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../home-components/shared";
const faqs = [
  [
    "Which service should my business start with?",
    "We start with your goal and recommend the most effective path—website, mobile app, automation, or a tailored AI solution.",
  ],
  [
    "How does the 48-hour match window work?",
    "After reviewing your brief, our team contacts you with the right specialist and a clear next step.",
  ],
  [
    "Can I use 48Date in my browser?",
    "Yes. Our solutions are planned around the platforms and devices your audience actually uses.",
  ],
  [
    "Do I need Premium?",
    "No. Tell us what you need and we will recommend a package that fits your scope and budget.",
  ],
  [
    "How can I manage my privacy?",
    "Your project details and business information are handled confidentially throughout the process.",
  ],
];
export function FaqSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <section className="mx-auto grid max-w-[1920px] grid-cols-1 items-start gap-3 bg-white px-5 py-[70px] md:px-7 lg:grid-cols-[minmax(360px,1fr)_minmax(600px,900px)] lg:gap-[130px] lg:px-[6.875vw] lg:py-[100px]">
      <div className="self-start lg:sticky lg:top-8">
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
