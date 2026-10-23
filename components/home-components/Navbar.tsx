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
    <header className="sticky left-0 top-0 z-50 flex h-[74px] w-full items-center justify-between border-b border-[#d8d5ce] bg-white/90 px-5 shadow-[0_4px_20px_rgba(3,60,56,0.06)] backdrop-blur-xl lg:h-[84px] lg:px-[6.875vw]">
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
          className="h-[38px] w-[38px] lg:h-[46px] lg:w-[47px]"
        />
        <strong className="text-[21px] font-extrabold tracking-[-1px] lg:text-[28px]">
          Custom<span className="text-[#033c38]">Web</span> Pro
        </strong>
      </a>
      <nav
        className={`${open ? "flex" : "hidden"} absolute left-0 top-[74px] w-full flex-col items-center gap-6 bg-white p-6 shadow-lg lg:static lg:flex lg:w-auto lg:flex-row lg:bg-transparent lg:p-0 lg:shadow-none`}
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
      <div className="hidden lg:block">
        <ProjectButton />
      </div>
      <button
        className="border-0 bg-transparent text-[#033c38] lg:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
