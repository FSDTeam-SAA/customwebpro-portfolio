import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/common";
import { portfolioProjects, type PortfolioProject } from "@/components/common/portfolioData";

export function ProjectDetailsContent({ project }: { project: PortfolioProject }) {
  const details = [["Price range", project.priceRange], ["Project duration", project.duration], ["Industries", project.industry]] as const;
  const moreProjects = portfolioProjects.filter(({ slug }) => slug !== project.slug).slice(0, 2);
  const [heroImage] = project.detailImages;
  return (
    <>
      <section className="bg-[linear-gradient(180deg,rgba(169,125,222,.52)_0%,rgba(130,96,171,.22)_35%,rgba(91,68,120,0)_100%)] px-5 pb-14 pt-8 sm:px-8 sm:pt-12 lg:min-h-[1096px] lg:px-[6.67vw] lg:pb-16 lg:pt-14">
        <div className="mx-auto max-w-[1664px]">
          <div className="mb-8 flex flex-col gap-8 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0">
              <Link
                href="/portfolio"
                className="mb-4 inline-flex flex-wrap items-center gap-2 text-sm font-medium text-[#033C38] no-underline sm:text-lg lg:text-2xl"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-dashed border-[#033C38] bg-[#A97DDE] sm:h-[42px] sm:w-[42px]">
                  <ArrowLeft size={20} aria-hidden="true" />
                </span>
                All Works <span className="text-sm text-[#0E0E0D] sm:text-base">/</span>
                Project {String(portfolioProjects.findIndex(({ slug }) => slug === project.slug) + 1).padStart(2, "0")}
              </Link>
              <h1 className="m-0 max-w-[870px] text-[38px] font-semibold leading-[1.08] tracking-[-1.5px] text-[#033C38] sm:text-[52px] lg:text-[64px] lg:leading-[1.1] lg:tracking-[-2px]">
                {project.detailTitle}
              </h1>
            </div>

            <div className="shrink-0 lg:max-w-[560px]">
              <dl className="m-0 grid grid-cols-3 gap-4 sm:flex sm:gap-8">
                {details.map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[10px] font-medium uppercase tracking-[1.5px] text-[#033C38] sm:text-xs sm:tracking-[2px]">
                      {label}
                    </dt>
                    <dd className="m-0 mt-1 text-sm font-semibold text-[#033C38] sm:text-lg">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="rounded border border-white bg-[#033C38] px-3 py-1.5 text-[11px] leading-none text-white sm:text-[13px] sm:leading-[19px]"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative aspect-[1.35/1] overflow-hidden rounded-sm bg-[#ebe5f2] sm:aspect-[1.8/1] lg:aspect-[2.35/1]">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 86vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-[6.67vw] lg:py-16">
        <div className="mx-auto max-w-[1664px]">
          <p className="mb-8 text-sm font-medium uppercase text-[#033C38] sm:text-lg lg:mb-12 lg:text-2xl">
            {"// About project"}
          </p>

          <div className="mb-10 lg:mb-12">
            <h2 className="mb-5 text-[38px] font-semibold leading-[1.08] tracking-[-1.5px] text-[#033C38] sm:text-[52px] lg:text-[64px] lg:leading-[1.1] lg:tracking-[-2px]">
              About the <span className="text-[#A97DDE]">Project</span>
            </h2>
            <p className="m-0 max-w-[1600px] text-base leading-[1.55] text-[#5C5C5C] sm:text-xl lg:text-2xl lg:leading-[1.5]">
              {project.detailDescription}
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:gap-12">
            {project.detailImages.map((image, index) => (
              <div key={image.src} className={`overflow-hidden rounded-lg bg-[#f4f1f7] ${image.height > image.width * 1.5 ? "mx-auto w-full max-w-[900px]" : "w-full"}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  priority={index === 0}
                  className="h-auto w-full"
                  sizes={image.height > image.width * 1.5 ? "(max-width: 960px) 100vw, 900px" : "(max-width: 1024px) 100vw, 86vw"}
                />
              </div>
            ))}
          </div>

          <div className="pt-16 sm:pt-20 lg:pt-12">
            <div className="mb-9 flex items-center justify-between gap-5 lg:mb-12">
              <h2 className="m-0 text-[42px] font-semibold leading-none tracking-[-2px] text-[#033C38] sm:text-[64px] lg:text-[96px]">
                More <span className="text-[#A97DDE]">Projects</span>
              </h2>
              <Link
                href="/portfolio"
                className="hidden h-[52px] shrink-0 items-center justify-center gap-2 bg-[#033C38] px-7 text-base font-medium text-[#F2EFE7] no-underline transition-colors hover:bg-[#A97DDE] sm:inline-flex"
              >
                See All <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8 lg:gap-12">
              {moreProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>

            <Link
              href="/portfolio"
              className="mt-10 inline-flex h-[52px] items-center justify-center gap-2 bg-[#033C38] px-7 text-base font-medium text-[#F2EFE7] no-underline sm:hidden"
            >
              See All <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
