"use client";

import { LazyMotion, domAnimation, m, useReducedMotion, useScroll, useSpring } from "framer-motion";
import type { ReactNode } from "react";

export function MotionProvider({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.25,
  });

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className="fixed left-0 top-0 z-[100] h-[3px] w-full origin-left bg-[#A97DDE]"
        style={{ scaleX }}
        aria-hidden="true"
      />
      {children}
    </LazyMotion>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
  direction = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
}) {
  const reduceMotion = useReducedMotion();
  const initialOffset = {
    up: { x: 0, y: 82, rotate: 0 },
    left: { x: -28, y: 72, rotate: -0.7 },
    right: { x: 28, y: 72, rotate: 0.7 },
  }[direction];

  return (
    <m.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, ...initialOffset, scale: 0.965, filter: "blur(10px)" }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.08, margin: "0px 0px -7% 0px" }}
      transition={{ type: "spring", stiffness: 72, damping: 17, mass: 0.82, delay }}
      style={{ transformOrigin: "center bottom" }}
    >
      {children}
    </m.div>
  );
}
