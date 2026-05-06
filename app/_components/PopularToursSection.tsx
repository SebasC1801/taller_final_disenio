import { POPULAR_TOURS, TOURS } from "../_data/content";
import { TourCard } from "./TourCard";

/** Grid of popular tours with title and trailing divider. */
export function PopularToursSection() {
  return (
    <section className="bg-bg-section py-24">
      <div className="mx-auto max-w-[1280px] px-8">
        <p className="text-center text-xs tracking-[0.25em] text-white/50">
          {POPULAR_TOURS.subtitle}
        </p>
        <h2 className="mt-3 text-center text-2xl font-bold tracking-[0.3em]">
          {POPULAR_TOURS.title}
        </h2>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {TOURS.map((tour) => (
            <TourCard key={tour.name} {...tour} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <span className="h-px w-32 bg-white/30" />
        </div>
      </div>
    </section>
  );
}
