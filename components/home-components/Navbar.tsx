"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { A } from "./constants";
import { ProjectButton } from "./shared";
const links = [
  ["Home", "/#home"],
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["Teams", "/#teams"],
  ["Reviews", "/#reviews"],
  ["Contact", "/contact"],
] as const;
export function Navbar({
  active = "Home",
}: {
  active?: (typeof links)[number][0];
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
    <header className="fixed inset-x-0 top-0 z-[110] flex h-[74px] w-full items-center justify-between border-b border-[#d8d5ce] bg-white/95 px-4 shadow-[0_4px_20px_rgba(3,60,56,0.08)] backdrop-blur-xl sm:px-5 xl:h-[84px] xl:px-[6.875vw]">
      <a
        className="flex items-center gap-2 whitespace-nowrap text-black no-underline"
        href="/#home"
      >
        <Image
          src={`${A}imgGroup4.svg`}
          alt=""
          width={47}
          height={46}
          priority
          className="h-[34px] w-[34px] sm:h-[38px] sm:w-[38px] xl:h-[46px] xl:w-[47px]"
        />
        <strong className="text-lg font-extrabold tracking-[-1px] sm:text-[21px] xl:text-[28px]">
          Custom<span className="text-[#033c38]">Web</span> Pro
        </strong>
      </a>
      <nav
        className={`${open ? "flex" : "hidden"} absolute left-0 top-[74px] max-h-[calc(100dvh-74px)] w-full flex-col items-center gap-6 overflow-y-auto bg-white p-6 shadow-lg xl:static xl:flex xl:max-h-none xl:w-auto xl:flex-row xl:overflow-visible xl:bg-transparent xl:p-0 xl:shadow-none`}
      >
        {links.map(([label, href]) => (
          <a
            className={`border-b-2 pb-1 text-base font-medium no-underline transition-colors ${label === active ? "border-[#033C38] text-[#033C38]" : "border-transparent text-[#5C5C5C] hover:border-[#033C38]/40 hover:text-[#033C38]"}`}
            key={label}
            href={href}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="hidden xl:block">
        <ProjectButton />
      </div>
      <button
        className="flex h-11 w-11 items-center justify-center border-0 bg-transparent text-[#033c38] xl:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
    <div className="h-[74px] shrink-0 xl:h-[84px]" aria-hidden="true" />
    </>
  );
}
