import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import { A } from "../home-components/constants";
import { SectionHeading } from "../home-components/shared";

export function TestimonialSection() {
  return (
    <section className="bg-[#f8faf8] px-5 py-[70px] md:px-7 lg:px-[6.875vw] lg:py-[100px]">
      <div className="mx-auto mb-10 flex max-w-[1656px] flex-col items-start justify-between gap-6 sm:mb-12 sm:gap-8 lg:mb-20 lg:flex-row lg:items-end">
        <SectionHeading eyebrow="Client conversations" align="left">
          The partnership.
          <br />
          <em className="not-italic text-[#ffeb69]">From their perspective.</em>
        </SectionHeading>

        <div className="w-full text-[#696969] lg:w-[328px]">
          <div className="mb-4 flex gap-3 sm:mb-6 sm:gap-6">
            <button aria-label="Previous testimonial" className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed border-[#696969] bg-transparent sm:h-14 sm:w-14">
              <ArrowLeft className="h-4 w-4 sm:h-6 sm:w-6" />
            </button>
            <button aria-label="Next testimonial" className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed border-[#696969] bg-transparent sm:h-14 sm:w-14">
              <ArrowRight className="h-4 w-4 sm:h-6 sm:w-6" />
            </button>
          </div>
          <p className="m-0 max-w-[328px] text-[10px] font-medium uppercase leading-[1.5] tracking-[0.5px] sm:text-xs">
            We value each and every client&apos;s feedback which helps us to improve.
          </p>
        </div>
      </div>

      <article className="mx-auto grid max-w-[1537px] grid-cols-1 items-center gap-6 sm:gap-9 md:grid-cols-[280px_1fr] lg:grid-cols-[460px_1fr] lg:gap-16 lg:p-6">
        <div className="relative h-[230px] overflow-hidden rounded-lg border-2 border-[#d8d5ce] sm:h-[320px] md:h-[390px] lg:h-[534px]">
          <Image className="object-cover" src={`${A}imgFrame57.png`} alt="Marcus Vance" fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 280px, 460px" />
          <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-dashed border-white text-white sm:h-14 sm:w-14">
            <Play className="h-4 w-4 sm:h-6 sm:w-6" fill="white" />
          </span>
        </div>

        <div>
          <blockquote className="m-0 text-base font-medium leading-[1.5] sm:text-[20px] md:text-[25px] lg:text-[40px] lg:leading-normal">
            “Custom Web Pro re-architected our entire telematics ingestion pipeline. We went from dropping WebSocket packets during morning dispatch rushes to handling 50,000 live vehicle GPS streams with 18ms latency.”
          </blockquote>
          <h3 className="mb-0 mt-4 text-[26px] leading-tight text-[#0e0e0d] sm:mt-5 sm:text-[34px] md:text-[42px] lg:text-[64px]">
            Marcus Vance
          </h3>
          <p className="mb-0 mt-2 text-sm leading-5 text-[#0e0e0d] sm:text-base md:text-xl">
            VP of Engineering — FleetPulse Logistics
          </p>
        </div>
      </article>
    </section>
  );
}
