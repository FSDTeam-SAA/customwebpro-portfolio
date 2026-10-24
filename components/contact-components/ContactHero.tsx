import Image from "next/image";

export function ContactHero() {
  return (
    <section className="relative flex min-h-[430px] items-end overflow-hidden px-5 pb-10 pt-24 text-white sm:min-h-[500px] sm:pb-14 md:px-7 lg:h-[512px] lg:px-[6.875vw]">
      <Image
        src="/images/home/cbg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0.04%,rgba(0,0,0,0.36)_32.59%,rgba(6,59,38,0.42)_100%)]" /> */}
      <div className="relative mx-auto w-full max-w-[1664px]">
        <h1 className="max-w-[870px] text-[42px] font-semibold leading-[1.08] tracking-[-2px] min-[380px]:text-[48px] sm:text-[64px] lg:text-[80px] lg:leading-[1.2] lg:tracking-[-3px]">
          Let&apos;s talk <span className="text-[#FFEB69]">about</span>
          <br />
          <span className="text-[#FFEB69]">your</span> project 
        </h1>
        <p className="mt-4 max-w-[530px] text-base leading-6 sm:text-xl sm:leading-6">
          Tell me what you&apos;re building. I reply within 24 hours and can sign an
          NDA on request.
        </p>
      </div>
    </section>
  );
}
