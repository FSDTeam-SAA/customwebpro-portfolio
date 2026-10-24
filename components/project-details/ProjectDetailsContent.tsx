import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { ProjectCard, type ProjectCardProps } from "@/components/common";

const details = [
  ["Duration", "8 Weeks"],
  ["Client", "EDUVAULT"],
  ["Status", "Shipped ✓"],
] as const;

const services = [
  "Product Strategy",
  "UI/UX Design",
  "Engineering",
  "QA",
  "Deployment",
];

const researchSections = [
  {
    title: (
      <>
        Typography &amp; <span>Color System</span>
      </>
    ),
    description:
      "A refined visual language combining editorial typography with a sophisticated premium color palette.",
    image: "/images/project-details/typography.png",
    alt: "Typography and color system for the property platform",
    width: 3328,
    height: 3044,
  },
  {
    title: (
      <>
        User <span>Persona</span>
        <br />
        Research
      </>
    ),
    description:
      "Research insights shaped around users' goals, pain points, motivations, and property-search behavior.",
    image: "/images/project-details/user-persona.png",
    alt: "User persona research with goals, pain points and motivations",
    width: 3328,
    height: 4290,
  },
  {
    title: (
      <>
        Mobile <span>User Flow</span>
      </>
    ),
    description:
      "A complete interaction flow from onboarding to AI-driven property recommendations.",
    image: "/images/project-details/mobile-flow.png",
    alt: "Mobile application user flow",
    width: 3328,
    height: 4290,
  },
  {
    title: (
      <>
        Grid &amp; <span>Layout System</span>
      </>
    ),
    description:
      "A responsive layout system designed to ensure consistency, balance, and visual hierarchy.",
    image: "/images/project-details/grid-system.png",
    alt: "Responsive grid and layout system",
    width: 3328,
    height: 2970,
  },
  {
    title: <>Result</>,
    description:
      "Lyvio evolved into an intelligent property discovery ecosystem that replaces overwhelming listings with faster, smarter, AI-driven guidance.",
    image: "/images/project-details/result.png",
    alt: "Lyvio product results and engagement metrics",
    width: 3328,
    height: 2970,
  },
];

const moreProjects: ProjectCardProps[] = [
  {
    image: "/images/home/imgFrame67.png",
    imageAlt: "Landify real estate management platform interface",
    title: "Landify - Real Estate",
    accent: "Management Platform",
    description:
      "Landify case study: a real estate management platform with brand identity, dashboard UI, and responsive web design by ZeeTech. See the full ecosystem.",
    tags: ["Branding & Product design", "Real Estate"],
    href: "/portfolio/project-details",
  },
  {
    image: "/images/home/imgFrame68.png",
    imageAlt: "UnifyIQ sales management SaaS website",
    title: "UnifyIQ — Sales Management",
    accent: "SaaS Platform",
    description:
      "UnifyIQ case study: a sales management SaaS website designed and built in Webflow by ZeeTech — UI/UX, product storytelling, and conversion-focused pages.",
    tags: ["Webflow template", "SAAS"],
    href: "/portfolio/project-details",
    imageVariant: "unify",
  },
];

export function ProjectDetailsContent() {
  return (
    <>
      <section className="bg-[linear-gradient(180deg,rgba(255,235,105,.52)_0%,rgba(130,167,0,.22)_45%,rgba(255,255,255,0)_100%)] px-5 pb-16 pt-10 sm:px-10 lg:px-[6.875vw] lg:pb-20 lg:pt-16">
        <div className="mx-auto max-w-[1664px]">
          <div className="mb-10 flex flex-col justify-between gap-8 lg:mb-12 lg:flex-row lg:items-start">
            <a
              href="/portfolio"
              className="inline-flex flex-wrap items-center gap-2 text-base font-medium text-[#033C38] no-underline sm:gap-3 sm:text-2xl"
            >
              <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-dashed border-[#033C38] bg-[#FFEB69]">
                <ArrowLeft size={20} />
              </span>
              All Works <span className="text-base text-[#0E0E0D]">/</span>{" "}
              Project 04
            </a>
            <div>
              <dl className="m-0 flex flex-wrap gap-8">
                {details.map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-xs font-medium uppercase tracking-[2px] text-[#033C38]">
                      {label}
                    </dt>
                    <dd className="m-0 mt-1 text-lg font-semibold text-[#033C38]">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex max-w-[520px] flex-wrap gap-2">
                {services.map((service) => (
                  <span
                    key={service}
                    className="rounded border border-white bg-[#033C38] px-3 py-1.5 text-[13px] text-white"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <Image
            src="/images/project-details/project-cover.png"
            alt="Adaptive learning and curriculum platform interface"
            width={3328}
            height={1162}
            priority
            className="h-auto w-full rounded-sm object-cover"
            sizes="(max-width: 1024px) 100vw, 86vw"
          />

          <div className="mt-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h1 className="m-0 max-w-[900px] text-[42px] font-semibold leading-[1.1] tracking-[-2px] text-[#033C38] sm:text-[56px] lg:text-[64px]">
              Adaptive Learning &amp; Curriculum Platform
            </h1>
            <p className="m-0 max-w-[449px] text-lg leading-[1.35] text-[#5C5C5C] sm:text-xl">
              A curriculum management platform that adapts learning paths based
              on student performance.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-10 lg:px-[6.875vw]">
        <div className="mx-auto max-w-[1664px] space-y-12 lg:space-y-16">
          <div>
            <p className="mb-10 text-xl font-medium uppercase text-[#033C38] sm:text-2xl">
              {"// About project"}
            </p>
            <h2 className="mb-5 text-[42px] font-semibold leading-[1.1] tracking-[-2px] text-[#033C38] sm:text-[56px] lg:text-[64px]">
              About the <span className="text-[#FFEB69]">Project</span>
            </h2>
            <div className="max-w-[1500px] space-y-5 text-lg leading-[1.45] text-[#5C5C5C] sm:text-xl">
              <p>
                Lyvio is an AI-powered property advisory platform designed to
                transform how people discover their ideal homes. Rather than
                relying on endless listings and generic filters, Lyvio leverages
                behavioral insights, lifestyle preferences, and AI-driven
                recommendations to help users make smarter real estate
                decisions.
              </p>
              <p>
                The project involved building a complete brand identity, user
                experience strategy, mobile product design, and AI-powered
                interaction flows. Our goal was to create a premium experience
                that feels intelligent, trustworthy, and highly personalized.
              </p>
            </div>
          </div>

          <Image
            src="/images/project-details/about-visual.png"
            alt="Lyvio property platform presentation"
            width={3328}
            height={1280}
            className="h-auto w-full rounded-xl"
            sizes="(max-width: 1024px) 100vw, 86vw"
          />
          <Image
            src="/images/project-details/problem-visual.png"
            alt="Property platform design presentation"
            width={3328}
            height={1280}
            className="h-auto w-full rounded-xl"
            sizes="(max-width: 1024px) 100vw, 86vw"
          />
          <Image
            src="/images/project-details/process-intro.png"
            alt="Property product discovery and interface overview"
            width={3328}
            height={1836}
            className="h-auto w-full rounded-xl"
            sizes="(max-width: 1024px) 100vw, 86vw"
          />

          <div className="grid gap-8 rounded-xl bg-white py-6 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Image
              src="/images/project-details/problem-visual.png"
              alt="Property management product summary"
              width={3328}
              height={1280}
              className="h-full min-h-[300px] w-full rounded-lg object-cover"
            />
            <div>
              <h2 className="mb-5 text-[44px] font-extrabold italic tracking-[4px] text-[#FFEB69] sm:text-[64px]">
                Problem
              </h2>
              <p className="text-lg leading-[1.5] text-[#5C5C5C] sm:text-xl">
                Traditional property search platforms overwhelm users with
                thousands of listings, complex filters, and little
                personalization. Users spend significant time browsing
                irrelevant properties without gaining confidence in their final
                decision. The lack of intelligent recommendations creates
                friction and makes home searching stressful and inefficient.
              </p>
            </div>
          </div>

          <div className="grid gap-8 rounded-xl bg-white py-6 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <h2 className="mb-5 text-[44px] font-extrabold italic tracking-[4px] text-[#033C38] sm:text-[64px]">
                Solution
              </h2>
              <p className="mb-5 text-lg text-[#5C5C5C] sm:text-xl">
                We designed an AI-driven property discovery experience focused
                on clarity and personalization:
              </p>
              <ul className="space-y-3 pl-5 text-lg leading-[1.45] text-[#5C5C5C] sm:text-xl">
                <li>
                  AI-powered property recommendations based on behavior and
                  lifestyle
                </li>
                <li>
                  Personalized onboarding and intelligent comparison tools
                </li>
                <li>Lifestyle scoring for faster, more confident decisions</li>
                <li>A clean, premium visual identity that builds trust</li>
              </ul>
            </div>
            <Image
              src="/images/project-details/problem-visual.png"
              alt="AI property discovery solution"
              width={3328}
              height={1280}
              className="h-full min-h-[300px] w-full rounded-lg object-cover"
            />
          </div>

          <Image
            src="/images/project-details/challenge-solution.png"
            alt="Research challenge and solution diagram"
            width={3232}
            height={4382}
            className="h-auto w-full rounded-xl"
            sizes="(max-width: 1024px) 100vw, 86vw"
          />
          <Image
            src="/images/project-details/design-process.png"
            alt="Product design process timeline"
            width={3328}
            height={1938}
            className="h-auto w-full rounded-xl"
            sizes="(max-width: 1024px) 100vw, 86vw"
          />

          {researchSections.map((section) => (
            <article key={section.image} className="pt-6">
              <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                <h2 className="m-0 text-[42px] font-semibold leading-[1.1] tracking-[-2px] text-[#033C38] sm:text-[56px] lg:text-[64px] [&_span]:text-[#FFEB69]">
                  {section.title}
                </h2>
                <p className="m-0 max-w-[546px] text-lg leading-[1.3] text-[#5C5C5C] sm:text-xl">
                  {section.description}
                </p>
              </div>
              <Image
                src={section.image}
                alt={section.alt}
                width={section.width}
                height={section.height}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 1024px) 100vw, 86vw"
              />
            </article>
          ))}

          <div className="pt-6">
            <h2 className="mb-10 text-[42px] font-semibold leading-tight tracking-[-2px] text-[#033C38] sm:text-[72px] lg:text-[96px]">
              More <span className="text-[#FFEB69]">Projects</span>
            </h2>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {moreProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
