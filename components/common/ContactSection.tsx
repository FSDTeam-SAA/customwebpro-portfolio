import { ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { A } from "../home-components/constants";
import { SectionHeading } from "../home-components/shared";
import { FaqAccordion } from "./FaqSection";

const budgets = [
  "Less than $5k",
  "$5k - $20k",
  "$10k - $20k",
  "$20k - $50k",
  "More than $50k",
];

const fieldClass =
  "w-full border-0 border-b border-[#5C5C5C] bg-transparent px-2 py-4 text-base font-medium text-[#033C38] outline-none placeholder:text-[#5C5C5C] focus:border-[#033C38]";

export function ContactSection() {
  return (
    <section id="contact" className="grid grid-cols-1 bg-white xl:grid-cols-2">
      <div id="faq" className="scroll-mt-28 bg-white px-5 py-16 sm:px-10 lg:px-[6.875vw] xl:px-[clamp(40px,6.875vw,100px)] xl:py-20">
        <div className="mb-10">
          <SectionHeading eyebrow="A few things you might ask" align="left">
            Let&apos;s make<br />
            <em className="not-italic text-[#A97DDE]">things clear.</em>
          </SectionHeading>
        </div>
        <FaqAccordion embedded />
      </div>

      <form className="flex min-w-0 flex-col items-start gap-7 bg-[linear-gradient(180deg,rgba(169,125,222,.62)_0%,rgba(130,96,171,.31)_34%,rgba(91,68,120,0)_100%)] px-5 py-16 text-[#033C38] sm:px-10 xl:min-h-[795px] xl:px-[clamp(40px,6.875vw,100px)] xl:py-20">
        <label className="flex min-h-[88px] w-full flex-col items-start gap-2 text-xl font-semibold xl:text-2xl">
          Full Name
          <input className={fieldClass} type="text" name="name" placeholder="E.G. ALEX MORGAN" autoComplete="name" required />
        </label>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          <label className="flex min-h-[88px] min-w-0 flex-col items-start gap-2 text-xl font-semibold xl:text-2xl">
            Your Email
            <input className={fieldClass} type="email" name="email" placeholder="yourmail@gmail.com" autoComplete="email" required />
          </label>
          <label className="flex min-h-[88px] min-w-0 flex-col items-start gap-2 text-xl font-semibold xl:text-2xl">
            Whatsapp Number
            <span className="flex w-full items-center border-b border-[#5C5C5C] px-2 py-4 focus-within:border-[#033C38]">
              <Image src={`${A}imgVuesaxTwotoneWhatsapp.svg`} alt="" width={20} height={20} className="h-5 w-5 shrink-0" />
              <ChevronDown className="ml-1 shrink-0" size={16} />
              <input className="min-w-0 flex-1 border-0 bg-transparent pl-4 text-base font-medium outline-none placeholder:text-[#5C5C5C]" type="tel" name="whatsapp" placeholder="123 456 7890" autoComplete="tel" />
            </span>
          </label>
        </div>

        <fieldset className="m-0 flex w-full flex-col gap-4 border-0 p-0">
          <legend className="mb-4 text-xl font-semibold xl:text-2xl">Project Budget</legend>
          <div className="flex flex-wrap items-start gap-4">
            {budgets.map((budget) => (
              <label key={budget} className="cursor-pointer border border-[#033C38] p-2 text-base font-medium text-[#5C5C5C] transition-colors has-[:checked]:bg-[#033C38] has-[:checked]:text-white">
                <input className="sr-only" type="radio" name="budget" value={budget} />
                {budget}
              </label>
            ))}
          </div>
        </fieldset>

        <label className="flex min-h-0 w-full flex-1 flex-col items-start gap-4 text-xl font-semibold xl:text-2xl">
          Project Details
          <textarea className={`${fieldClass} h-[83px] resize-none`} name="details" placeholder="I want to redesign my website....." required />
        </label>

        <button className="flex h-[52px] cursor-pointer items-center justify-center gap-2.5 !rounded-[12px] border border-[#033C38] bg-[#033C38] px-7 text-base font-medium text-white transition-colors hover:bg-[#A97DDE] hover:text-[#033C38]" type="submit">
          Send Inquiry <ArrowUpRight size={18} />
        </button>
      </form>
    </section>
  );
}
