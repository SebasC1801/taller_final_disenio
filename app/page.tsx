import { HeroSection } from "./_components/HeroSection";
import { InspireBannerSection } from "./_components/InspireBannerSection";
import { PopularToursSection } from "./_components/PopularToursSection";

/**
 * Landing page composition. Sections are kept as standalone components to
 * make the page structure self-documenting and easy to reorder.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-bg-deep text-foreground font-sans">
      <HeroSection />
      <PopularToursSection />
      <InspireBannerSection />
    </div>
  );
}
