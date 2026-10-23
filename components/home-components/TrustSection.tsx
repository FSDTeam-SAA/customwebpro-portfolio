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
      >
        Your Trusted <em className="not-italic text-[#ffeb69]">AI Partner</em>{" "}
        on Fiverr
      </SectionHeading>
      <div className="mx-auto mt-12 grid max-w-[1656px] grid-cols-1 gap-6 md:mt-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {cards.map((c) => (
          <article
            className="overflow-hidden rounded-2xl bg-[#fcfdfe] text-center shadow-[0_24px_23px_rgba(52,69,90,.11)]"
            key={c.title}
          >
            <Image
              className="h-[220px] w-full object-cover md:h-[300px]"
              src={`${A}${c.image}`}
              alt=""
              width={1000}
              height={1000}
            />
            <div className="min-h-[180px] p-6 pt-8 md:min-h-[300px]">
              <h3 className="mb-4 text-2xl font-extrabold">{c.title}</h3>
              <p className="m-0 text-[15px] leading-normal md:text-lg md:leading-7">
                {c.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
