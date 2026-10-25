
import { MotionProvider, Reveal } from "@/components/common/PageMotion";
import { Footer, Navbar } from "@/components/home-components";
import { PortfolioGallery, PortfolioHero } from "@/components/portfolio-components";

export default function PortfolioPage() {
  return (
    <MotionProvider>
      <main className="overflow-x-clip bg-white text-[#033C38]">
        <Navbar active="Portfolio" />
        <Reveal><PortfolioHero /></Reveal>
        <Reveal direction="right"><PortfolioGallery /></Reveal>
        <Reveal>
          <Footer />
        </Reveal>
      </main>
    </MotionProvider>
  );
}
