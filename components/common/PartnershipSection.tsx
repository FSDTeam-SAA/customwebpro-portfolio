import { Star } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "../home-components/shared";

type Review = {
  name: string;
  country: string;
  flag: string;
  rating: number;
  review: string;
  image?: string;
};

const reviews = [
  {
    name: "majid_9990",
    country: "United Kingdom",
    flag: "🇬🇧",
    rating: 4.7,
    review:
      "I had an amazing experience throughout the whole project. Their team’s level of cooperation is amazing, always open to new challenges, and willing to go the extra mile. Highly recommended!",
  },
  {
    name: "beswick124",
    country: "United Kingdom",
    flag: "🇬🇧",
    rating: 4.7,
    review:
      "I am delighted with where we have landed. The communication and understanding really helped bring my project to life. I look forward to working together as we grow the business.",
  },
  {
    name: "mohamedeltawous",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    rating: 5,
    review:
      "I’m always happy to work with Biplob. He understands my requirements and strives to exceed my expectations every time. Thank you once more for delivering excellent work.",
  },
  {
    name: "olivia_karp",
    country: "United Kingdom",
    flag: "🇬🇧",
    rating: 5,
    review: "Did an amazing job!",
  },
  {
    name: "mordechaib",
    country: "Israel",
    flag: "🇮🇱",
    rating: 5,
    review: "Pros—an absolutely great team to work with.",
    image: "/images/testimonials/mordechaib.jpg",
  },
  {
    name: "purebullion",
    country: "United States",
    flag: "🇺🇸",
    rating: 5,
    review:
      "Delivered the first phase on time and we’re moving on to the second phase. Easy to work with.",
    image: "/images/testimonials/purebullion.png",
  },
  {
    name: "andreasmehlich",
    country: "Germany",
    flag: "🇩🇪",
    rating: 5,
    review:
      "Great work as always. Lovely team who know how to build apps and browser dashboards.",
  },
  {
    name: "chasingharmony3",
    country: "United States",
    flag: "🇺🇸",
    rating: 5,
    review: "Great team! Highly professional and understanding!",
  },
] satisfies readonly Review[];

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex min-h-[270px] w-[min(82vw,560px)] shrink-0 flex-col justify-between rounded-[22px] border border-[#D5D5D5]/20 bg-white p-5 shadow-[2px_3px_18px_rgba(20,27,52,0.06)] sm:min-h-[300px] sm:rounded-[28px] sm:p-8">
      <blockquote className="m-0 text-sm font-medium leading-[1.55] text-[#6C6C6C] sm:text-base lg:text-lg">
        “{review.review}”
      </blockquote>

      <div className="mt-6 flex items-center gap-3 border-t border-[#ECECEC] pt-5">
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[linear-gradient(135deg,#A97DDE,#033C38)] text-lg font-bold uppercase text-white sm:h-[72px] sm:w-[72px] sm:text-xl">
          {review.image ? (
            <Image
              src={review.image}
              alt={`${review.name} Fiverr profile`}
              fill
              className="object-cover"
              sizes="72px"
            />
          ) : (
            review.name.slice(0, 2)
          )}
        </div>
        <div className="min-w-0">
          <h3 className="m-0 truncate text-base font-semibold leading-tight text-[#2A2A2A] sm:text-xl">
            {review.name}
          </h3>
          <p className="mb-1.5 mt-1 text-[11px] text-[#0E0E0D] sm:text-xs">
            <span aria-hidden="true">{review.flag}</span> {review.country}
          </p>
          <div className="flex items-center gap-1.5" aria-label={`${review.rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="h-3.5 w-3.5 text-[#C98B2E] sm:h-[18px] sm:w-[18px]"
                fill="#C98B2E"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            ))}
            <span className="ml-1 text-xs font-semibold text-[#6C6C6C]">
              {review.rating.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

function ReviewRow({
  items,
  reverse = false,
}: {
  items: readonly Review[];
  reverse?: boolean;
}) {
  const repeated = [...items, ...items];

  return (
    <div className="testimonial-row flex w-max gap-[var(--testimonial-gap)] [--testimonial-gap:20px] sm:[--testimonial-gap:40px]" data-reverse={reverse || undefined}>
      {repeated.map((review, index) => (
        <ReviewCard key={`${review.name}-${index}`} review={review} />
      ))}
    </div>
  );
}

export function TestimonialSection() {
  const firstRow = reviews.slice(0, 4);
  const secondRow = reviews.slice(4);

  return (
    <section id="reviews" className="overflow-hidden bg-[#F9F9F9] py-[70px] lg:py-[100px]">
      <div className="mx-auto mb-12 max-w-[1656px] px-5 md:px-7 lg:mb-20 lg:px-0">
        <SectionHeading eyebrow="Client conversations" align="left">
          The partnership.
          <br />
          <em className="not-italic text-[#A97DDE]">From their perspective.</em>
        </SectionHeading>

        <div className="mt-6 flex items-center gap-3 text-sm text-[#6C6C6C] sm:text-base">
          <span className="font-semibold text-[#033C38]">4.9 on Fiverr</span>
          <span aria-hidden="true">•</span>
          <a
            href="https://www.fiverr.com/customweb_pro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6C6C6C] underline decoration-[#A97DDE] underline-offset-4"
          >
            View verified profile
          </a>
        </div>
      </div>

      <div className="testimonial-marquee relative flex flex-col gap-5 sm:gap-8">
        <ReviewRow items={firstRow} />
        <ReviewRow items={secondRow} reverse />
      </div>
    </section>
  );
}
