export function ContactHero() {
  return (
    <section className="relative flex min-h-[430px] items-end overflow-hidden bg-[linear-gradient(180deg,rgba(169,125,222,.62)_0%,rgba(130,96,171,.31)_34%,rgba(91,68,120,0)_100%)] px-5 pb-10 pt-24 text-[#033c38] sm:min-h-[500px] sm:pb-14 md:px-7 lg:h-[512px] lg:px-[6.875vw]">
      <div className="relative mx-auto w-full max-w-[1664px]">
        <h1 className="max-w-[870px] text-[42px] font-semibold leading-[1.08] tracking-[-2px] text-[#033c38] min-[380px]:text-[48px] sm:text-[64px] lg:text-[80px] lg:leading-[1.2] lg:tracking-[-3px]">
          Let&apos;s talk{" "}
          <span className="text-[#A97DDE] [-webkit-text-stroke:1px_#033C38] [paint-order:stroke_fill]">
            about
          </span>
          <br />
          <span className="text-[#A97DDE] [-webkit-text-stroke:1px_#033C38] [paint-order:stroke_fill]">
            your
          </span>{" "}
          project
        </h1>
        <p className="mt-4 max-w-[530px] text-base leading-6 text-[#59636e] sm:text-xl sm:leading-6">
          Tell me what you&apos;re building. I reply within 24 hours and can sign an
          NDA on request.
        </p>
      </div>
    </section>
  );
}
