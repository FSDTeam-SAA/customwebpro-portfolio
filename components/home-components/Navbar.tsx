"use client";
import { m } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ProjectButton } from "./shared";
const links = [
  ["Home", "/#home"],
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["Reviews", "/#reviews"],
  ["Contact", "/contact"],
] as const;
export function Navbar({
  active = "Home",
}: {
  active?: (typeof links)[number][0];
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<(typeof links)[number][0]>(active);
  const navigationTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setSelected(active);
  }, [active]);

  useEffect(() => () => {
    if (navigationTimer.current) clearTimeout(navigationTimer.current);
  }, []);

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-[110] flex h-[74px] w-full items-center justify-between border-b border-[#d8d5ce] bg-white/95 px-4 shadow-[0_4px_20px_rgba(3,60,56,0.08)] backdrop-blur-xl sm:px-5 xl:h-[84px] xl:px-[6.875vw]">
      <Link
        className="flex items-center gap-2 whitespace-nowrap text-black no-underline"
        href="/#home"
      >
        <Image
          src="/images/home/newlogo.png"
          alt="CustomWeb Pro"
          width={95}
          height={92}
          priority
          className="h-[34px] w-[34px] sm:h-[38px] sm:w-[38px] xl:h-[46px] xl:w-[47px]"
        />
        <strong className="text-lg font-extrabold tracking-[-1px] sm:text-[21px] xl:text-[28px]">
          Custom<span className="text-[#033c38]">Web</span> Pro
        </strong>
      </Link>
      <nav
        className={`${open ? "flex" : "hidden"} absolute left-0 top-[74px] max-h-[calc(100dvh-74px)] w-full flex-col items-center gap-6 overflow-y-auto bg-white p-6 shadow-lg xl:static xl:flex xl:max-h-none xl:w-auto xl:flex-row xl:overflow-visible xl:bg-transparent xl:p-0 xl:shadow-none`}
      >
        {links.map(([label, href]) => (
          <Link
            className={`relative pb-1 text-base font-medium no-underline transition-colors ${label === selected ? "text-[#033C38]" : "text-[#5C5C5C] hover:text-[#033C38]"}`}
            key={label}
            href={href}
            onClick={(event) => {
              if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
              event.preventDefault();

              if (navigationTimer.current) clearTimeout(navigationTimer.current);
              setSelected(label);
              setOpen(false);
              navigationTimer.current = setTimeout(() => router.push(href), 360);
            }}
          >
            {label}
            {label === selected && (
              <m.span
                layoutId="navbar-active-underline"
                className="absolute inset-x-0 -bottom-[2px] h-0.5 rounded-full bg-[#033C38]"
                transition={{ type: "spring", stiffness: 260, damping: 26, mass: 0.8 }}
              />
            )}
          </Link>
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
