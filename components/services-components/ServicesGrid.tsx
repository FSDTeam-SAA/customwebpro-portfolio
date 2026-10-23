"use client";

import { m, useReducedMotion } from "framer-motion";
import { ServiceCard, services } from "@/components/common";

const allServices = [...services, ...services];

export function ServicesGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white px-5 py-14 md:px-7 lg:px-[6.875vw] lg:py-16">
      <m.div
        className="mx-auto grid max-w-[1664px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-20"
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: "some", margin: "0px 0px -6% 0px" }}
        variants={{ visible: { transition: { staggerChildren: 0.11 } } }}
      >
        {allServices.map((service, index) => (
          <m.div
            key={`${service.title}-${index}`}
            variants={{
              hidden: { opacity: 0, y: 42, rotateX: 5, scale: 0.97 },
              visible: { opacity: 1, y: 0, rotateX: 0, scale: 1 },
            }}
            transition={{ type: "spring", stiffness: 90, damping: 18, mass: 0.7 }}
            className="h-full [perspective:1000px]"
          >
            <ServiceCard {...service} />
          </m.div>
        ))}
      </m.div>
    </section>
  );
}
