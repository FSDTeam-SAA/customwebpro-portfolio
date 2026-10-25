import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { A } from "./constants";

const pageLinks = [
  ["Home", "/#home"],
  ["About", "/#reviews"],
  ["Portfolio", "/portfolio"],
  ["FAQ", "/#faq"],
  ["Contact", "/contact"],
] as const;

const serviceLinks = [
  "AI Mobile Application Development",
  "AI Website Development",
  "Online Coding Lesson",
] as const;

export function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#033C38] px-5 pb-5 pt-16 text-white sm:px-8 lg:px-[4.5vw] lg:pt-20"
    >
      <div className="mx-auto max-w-[1656px]">
        <div className="grid gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-[1.25fr_.6fr_1fr_.7fr] lg:gap-16 lg:pb-24">
          <div className="flex max-w-[390px] flex-col items-start">
            <a
              href="/#home"
              className="flex items-center gap-2 text-white no-underline"
            >
              <Image
                src={`${A}imgGroup6.svg`}
                alt=""
                width={55}
                height={54}
                className="h-12 w-12 shrink-0"
              />
              <strong className="whitespace-nowrap text-[25px] font-extrabold leading-none sm:text-[30px]">
                CustomWeb <span className="text-[#A97DDE]">Pro</span>
              </strong>
            </a>

            <p className="mt-8 text-base leading-[1.45] text-white/90 sm:text-lg">
              A digital agency specializes in creating online strategies for
              businesses to optimize their presence on the internet services
            </p>

            <a
              href="https://www.fiverr.com/customweb_pro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CustomWeb Pro on Fiverr"
              className="group mt-8 inline-flex items-center rounded-lg border border-[#A97DDE]/45 bg-white px-4 py-2 text-[#1F1F1F] no-underline shadow-[0_8px_24px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(169,125,222,0.3)]"
            >
              <span className="text-[30px] font-black leading-none tracking-[-2px]">
                fiverr<span className="text-[#1DBF73]">.</span>
              </span>
            </a>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-semibold sm:text-[30px]">Pages</h2>
            <nav className="flex flex-col items-start gap-5">
              {pageLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-base text-white/90 no-underline transition-colors hover:text-[#A97DDE] sm:text-lg"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-semibold sm:text-[30px]">
              Services
            </h2>
            <nav className="flex flex-col items-start gap-5">
              {serviceLinks.map((label) => (
                <a
                  key={label}
                  href="/services"
                  className="text-base text-white/90 no-underline transition-colors hover:text-[#A97DDE] sm:text-lg"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-start lg:pt-[102px]">
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-lg bg-[#A97DDE] px-5 py-4 text-xl font-semibold text-[#033C38] no-underline transition-colors hover:bg-[#b890e7] sm:text-2xl"
            >
              Get Started
              <ArrowRight
                className="h-7 w-7 transition-transform group-hover:translate-x-1"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        <div className="border-t border-white/15 py-5">
          <p className="m-0 text-sm text-white/80 sm:text-base">
            © customweb_pro 2026. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
