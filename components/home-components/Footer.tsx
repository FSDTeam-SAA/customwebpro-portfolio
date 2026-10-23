import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { A } from "./constants";

const footerLinks = ["Home", "Services", "Portfolio", "Teams", "Reviews"];

export function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden border-t border-white/10 bg-[#033C38] px-5 py-16 text-white md:px-10 lg:px-[6.875vw] lg:py-[100px]">
      <div className="pointer-events-none absolute left-[-18px] top-7 z-0 flex items-center gap-5 opacity-[0.08] md:left-[-28px] md:top-[-10px] md:gap-8 lg:left-[4.8vw] lg:top-[35px] lg:gap-[50px]">
        <Image
          src={`${A}imgGroup7.svg`}
          alt=""
          width={1000}
          height={1000}
          className="h-[130px] w-[134px] shrink-0 md:h-[220px] md:w-[226px] lg:h-[327px] lg:w-[336px]"
        />
        <p className="m-0 whitespace-nowrap text-[72px] font-extrabold leading-none text-white md:text-[128px] lg:text-[202px]">
          CustomWeb <span className="text-[#FFEB69]">Pro</span>
        </p>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1656px] flex-col gap-12">
        <div className="flex w-full flex-col items-start gap-10 md:flex-row md:flex-wrap md:items-center md:justify-between lg:flex-nowrap lg:gap-[100px]">
          <div className="flex w-full shrink-0 flex-col items-start gap-6 md:w-[378px]">
            <a href="#home" className="flex items-center gap-2 text-white no-underline">
              <Image
                src={`${A}imgGroup6.svg`}
                alt="CustomWeb Pro"
                width={55}
                height={54}
                className="h-[53.5px] w-[54.9px] shrink-0"
              />
              <strong className="whitespace-nowrap text-[28px] font-extrabold leading-none md:text-[33px]">
                CustomWeb <span className="text-[#FFEB69]">Pro</span>
              </strong>
            </a>
            <p className="m-0 max-w-[378px] text-base font-normal leading-normal text-white md:text-xl">
              Adwenza is a Digital Marketing Agency in Ahmedabad &amp; Mumbai built
              for one thing: marketing that moves the business, not just the
              dashboard.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-4 gap-y-3 md:justify-center lg:min-w-0 lg:flex-1 lg:flex-nowrap">
            {footerLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="whitespace-nowrap text-lg font-semibold text-[#FFEB69] underline decoration-from-font md:text-2xl"
              >
                {link}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="flex h-[105px] w-[105px] shrink-0 flex-col items-center justify-center gap-1 bg-[#FFEB69] p-2 text-center text-[#033C38] no-underline"
          >
            <ArrowUpRight size={28} strokeWidth={1.3} />
            <span className="text-base font-semibold leading-normal">
              LAT&apos;S<br />TALK
            </span>
          </a>
        </div>

        <div className="flex w-full justify-center">
          <p className="m-0 text-center text-sm font-normal text-[#BEBEBE] md:text-xl">
            © 2026&nbsp; Team C. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
