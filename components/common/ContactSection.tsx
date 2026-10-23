import { ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { A } from "../home-components/constants";

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
    <section
      id="contact"
      className="relative grid min-h-[795px] grid-cols-1 overflow-hidden bg-[#FFFADE] lg:grid-cols-2 lg:gap-16 lg:px-32 lg:py-12"
    >
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <Image
          src={`${A}imgProjectHelpCard.png`}
          alt=""
          width={3328}
          height={1770}
          className="absolute left-[-8.49%] top-[-5.36%] h-[110.93%] w-[112.37%] max-w-none"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0)_47.969%,#FFFAD8_48.051%)]" />
      </div>

      <div className="relative flex min-w-0 flex-col items-start gap-12 overflow-hidden px-5 py-12 sm:px-10 lg:overflow-visible lg:p-0">
        <Image
          src={`${A}imgProjectHelpCard.png`}
          alt=""
          fill
          sizes="(max-width: 1023px) 100vw, 1px"
          className="z-0 object-cover lg:hidden"
        />
        <div className="absolute inset-0 z-0 bg-black/20 lg:hidden" />

        <div className="relative z-10 w-full">
          <h2 className="m-0 text-[44px] font-semibold leading-[1.12] tracking-[-2px] text-white sm:text-[58px] lg:w-[766px] lg:text-[80px] lg:leading-[1.2] lg:tracking-[-3px]">
            LET&apos;S DISCUSS
            <span className="mt-1 flex items-center gap-3 sm:gap-5 lg:mt-0 lg:gap-4">
              <Image
                src={`${A}imgGroup5.svg`}
                alt=""
                width={82}
                height={80}
                className="h-[52px] w-[54px] shrink-0 sm:h-[66px] sm:w-[68px] lg:h-[80px] lg:w-[82px]"
              />
              YOUR PROJECT
            </span>
          </h2>
        </div>

        <div className="relative z-10 flex flex-col items-start gap-6">
          <div className="relative h-[344px] w-[350px] max-w-full overflow-hidden rounded-2xl border border-white bg-[linear-gradient(180deg,rgba(6,59,22,.66),rgba(255,235,105,.66))]">
            <Image
              src={`${A}imgFrame130.png`}
              alt="Biplob Hossain"
              width={1122}
              height={1402}
              className="absolute left-0 top-0 h-[127.13%] w-full max-w-none object-cover object-top"
            />
          </div>
          <div className="flex flex-col items-start gap-3 text-white lg:gap-5">
            <p className="m-0 text-[32px] font-extralight leading-normal lg:text-[40px]">
              Biplob Hossain
            </p>
            <p className="m-0 text-xl font-extralight leading-5 text-[#F2EFE7] lg:text-2xl">
              CustomWeb Pro
            </p>
          </div>
        </div>
      </div>

      <form className="relative flex min-w-0 flex-col items-start gap-6 self-stretch bg-[#FFFADE] px-5 py-12 text-[#033C38] sm:px-10 lg:bg-transparent lg:p-0">
        <label className="flex h-[88px] w-full flex-col items-start gap-2 text-xl font-semibold lg:text-2xl">
          Full Name
          <input className={fieldClass} type="text" placeholder="E.G. ALEX MORGAN" />
        </label>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          <label className="flex h-[88px] min-w-0 flex-col items-start gap-2 text-xl font-semibold lg:text-2xl">
            Your Email
            <input className={fieldClass} type="email" placeholder="yourmail@gmail.com" />
          </label>
          <label className="flex h-[88px] min-w-0 flex-col items-start gap-2 text-xl font-semibold lg:text-2xl">
            Whatsapp Number
            <span className="flex w-full items-center border-b border-[#5C5C5C] px-2 py-4 focus-within:border-[#033C38]">
              <Image
                src={`${A}imgVuesaxTwotoneWhatsapp.svg`}
                alt=""
                width={20}
                height={20}
                className="h-5 w-5 shrink-0"
              />
              <ChevronDown className="ml-1 shrink-0" size={16} />
              <input
                className="min-w-0 flex-1 border-0 bg-transparent pl-4 text-base font-medium outline-none placeholder:text-[#5C5C5C]"
                type="tel"
                placeholder="123 456 7890"
              />
            </span>
          </label>
        </div>

        <fieldset className="m-0 flex w-full flex-col gap-4 border-0 p-0">
          <legend className="mb-4 text-xl font-semibold lg:text-2xl">Project Budget</legend>
          <div className="flex flex-wrap items-start gap-4">
            {budgets.map((budget) => (
              <label
                key={budget}
                className="cursor-pointer border border-[#033C38] p-2 text-base font-medium text-[#5C5C5C] transition-colors has-[:checked]:bg-[#033C38] has-[:checked]:text-white"
              >
                <input className="sr-only" type="radio" name="budget" value={budget} />
                {budget}
              </label>
            ))}
          </div>
        </fieldset>

        <label className="flex min-h-0 w-full flex-1 flex-col items-start gap-4 text-xl font-semibold lg:text-2xl">
          Project Details
          <textarea
            className={`${fieldClass} h-[83px] resize-none`}
            placeholder="I want to redesign my website....."
          />
        </label>

        <button
          className="flex h-[52px] cursor-pointer items-center justify-center gap-2.5 rounded-sm border border-[#033C38] bg-[#033C38] px-7 text-base font-medium text-white transition-colors hover:bg-[#FFEB69] hover:text-[#033C38]"
          type="submit"
        >
          Send Inquiry <ArrowUpRight size={18} />
        </button>
      </form>
    </section>
  );
}
