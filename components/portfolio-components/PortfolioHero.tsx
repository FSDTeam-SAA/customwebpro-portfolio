import Image from "next/image";

export function PortfolioHero() {
  return (
    <section className="relative flex min-h-[430px] items-end overflow-hidden px-5 pb-14 pt-28 text-white sm:min-h-[500px] md:px-7 lg:h-[512px] lg:px-[6.875vw] lg:pb-14">
      <Image
        src="/images/home/portfolioHero.png"
        alt="Abstract green geometric portfolio background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0.36)_32.6%,rgba(6,59,38,0.42)_100%)]" />
      <div className="relative mx-auto w-full max-w-[1664px]">
        <h1 className="max-w-[870px] text-[48px] font-semibold leading-[1.08] tracking-[-2px] sm:text-[64px] lg:text-[80px] lg:leading-[1.2] lg:tracking-[-3px]">
          Work that <span className="text-[#A97DDE]">moves</span>
          <br />
          <span className="text-[#A97DDE]">the</span> needle
        </h1>
        <p className="mt-4 max-w-[530px] text-base leading-6 sm:text-xl sm:leading-6">
          UI/UX, web and branding projects. Open any case study for the
          challenge, solution and measurable results.
        </p>
      </div>
    </section>
  );
}
