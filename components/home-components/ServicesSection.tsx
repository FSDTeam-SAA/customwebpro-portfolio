import { ServiceCard, services } from "@/components/common";
import { SectionHeading } from "./shared";

export function ServicesSection() {
  return (
    <section
      className="bg-white px-5 py-[70px] md:px-7 lg:px-[6.875vw] lg:py-[100px]"
      id="services"
    >
      <SectionHeading
        eyebrow="Our services"
        description="Delivering high-quality, tailored digital solutions to meet your unique business needs. From design to deployment, we ensure precision, performance, and professionalism every step of the way."
      >
        Professional <em className="not-italic text-[#FFEB69]">Services</em>
      </SectionHeading>
      <div className="mx-auto mt-12 grid max-w-[1656px] grid-cols-2 gap-3 sm:gap-6 md:mt-20 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} compactMobile />
        ))}
      </div>
    
    </section>
  );
}
