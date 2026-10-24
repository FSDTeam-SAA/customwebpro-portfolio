import Image from "next/image";
import { A } from "./constants";
import { SectionHeading } from "./shared";
const cards = [
  {
    image: "imgImage22.png",
    title: "Expertise & Experience",
    text: "Your go-to AI partner on Fiverr, delivering custom solutions in chatbots, models, automation, and data-driven innovation worldwide.",
  },
  {
    image: "imgImage23.png",
    title: "100% Client Satisfaction",
    text: "Proven track record of consistently exceeding client expectations with top-quality AI, app and web solutions tailored to your goals.",
  },
  {
    image: "imgImage24.png",
    title: "Timely Delivery",
    text: "Committed to delivering high-quality AI, app, and web projects on schedule—every time, without compromising performance or precision.",
  },
];
export function TrustSection() {
  return (
    <section
      className="bg-[#f8faf8] px-5 py-[70px] md:px-7 lg:px-[6.875vw] lg:py-[100px]"
      id="reviews"
    >
      <SectionHeading
        eyebrow="Why choose us"
        description="With over 6+ years of experience in AI development and 250+ satisfied clients, we deliver exceptional results that exceed expectations."
        compactMobile
      >
        Your Trusted <em className="not-italic text-[#ffeb69]">AI Partner</em>{" "}
        on Fiverr
      </SectionHeading>
      <div className="mx-auto mt-12 grid max-w-[1656px] grid-cols-2 gap-3 sm:gap-5 md:mt-20 md:gap-6 lg:grid-cols-3 lg:gap-12">
        {cards.map((c) => (
          <article
            className="overflow-hidden rounded-2xl bg-[#fcfdfe] text-center shadow-[0_24px_23px_rgba(52,69,90,.11)]"
            key={c.title}
          >
            <Image
              className="h-[110px] w-full object-cover sm:h-[160px] md:h-[300px]"
              src={`${A}${c.image}`}
              alt=""
              width={1000}
              height={1000}
            />
            <div className="min-h-[190px] p-3 pt-4 sm:min-h-[210px] sm:p-5 md:min-h-[300px] md:p-6 md:pt-8">
              <h3 className="mb-2 text-base font-extrabold leading-tight sm:mb-3 sm:text-xl md:mb-4 md:text-2xl">{c.title}</h3>
              <p className="m-0 text-[12px] leading-[1.45] sm:text-sm md:text-lg md:leading-7">
                {c.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
