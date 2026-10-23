import { A } from "./constants";
import Image from "next/image";
const logos = [
  "imgImageRemovebgPreview81.png",
  "imgImageRemovebgPreview91.png",
  "imgImageRemovebgPreview51.png",
  "imgImageRemovebgPreview61.png",
  "imgImageRemovebgPreview31.png",
  "imgImageRemovebgPreview41.png",
  "imgImageRemovebgPreview1.png",
  "imgImageRemovebgPreview11.png",
  "imgImageRemovebgPreview21.png",
  "imgScreenshot3RemovebgPreview1.png",
  "imgScreenshot2RemovebgPreview1.png",
  "imgImageRemovebgPreview71.png",
];

export function LogoStrip() {
  return (
    <section
      className="group overflow-hidden bg-white py-7 md:py-12"
      aria-label="Technologies we use"
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[0, 1].map((groupIndex) => (
          <div
            key={groupIndex}
            className="flex shrink-0 items-center gap-9 pr-9 md:gap-[76px] md:pr-[76px]"
            aria-hidden={groupIndex === 1}
          >
            {logos.map((logo) => (
              <Image
                className="h-[45px] w-auto max-w-[150px] shrink-0 object-contain grayscale opacity-30 md:h-[70px] md:max-w-[245px]"
                key={`${groupIndex}-${logo}`}
                src={`${A}${logo}`}
                alt=""
                width={245}
                height={70}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
