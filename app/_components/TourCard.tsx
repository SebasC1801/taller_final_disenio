import Image from "next/image";
import type { Tour } from "../_data/content";

/** Card used in the popular tours grid. */
export function TourCard({ image, name, caption }: Tour) {
  return (
    <div className="group relative overflow-hidden">
      <Image
        src={image}
        alt={name}
        width={320}
        height={288}
        className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute bottom-5 left-5 right-5">
        <h3 className="text-lg font-bold tracking-[0.2em]">{name}</h3>
        <p className="mt-1 text-[11px] text-white/70">{caption}</p>
      </div>
    </div>
  );
}
