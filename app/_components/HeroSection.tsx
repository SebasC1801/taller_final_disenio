import Image from "next/image";
import { Anchor, Plane, Triangle } from "lucide-react";
import { HERO } from "../_data/content";
import { Navbar } from "./Navbar";
import { SlideIndicator } from "./SlideIndicator";

/** Hero section with navigation, heading and bottom info grid. */
export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden">
      <Image
        src={HERO.heroImage}
        alt="Visit Tokyo"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-b from-bg-deep/70 via-bg-deep/20 to-bg-deep" />

      <Navbar />

      <div className="relative z-10 mx-auto max-w-[1280px] px-8 pt-24">
        <h1 className="text-[110px] leading-[0.95] font-bold tracking-tight">
          {HERO.title[0]}
          <br />
          {HERO.title[1]}
        </h1>
      </div>

      <SlideIndicator />

      <HeroBottom />
    </section>
  );
}

/** Icons row and three info columns anchored to the bottom of the hero. */
function HeroBottom() {
  const columns = Array.from({ length: HERO.infoColumns });

  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 mx-auto max-w-[1280px] px-8 pb-10">
      <div className="flex items-center justify-between px-12 pb-44 text-white/40">
        <Triangle className="h-5 w-5 fill-brand text-brand" />
        <Anchor className="h-5 w-5" />
        <Plane className="h-5 w-5" />
      </div>

      <div className="grid grid-cols-3 gap-12 text-[11px] text-white/60">
        {columns.map((_, index) => (
          <div key={index} className="space-y-3">
            <p className="leading-relaxed">{HERO.infoText}</p>
            <a
              href="#"
              className="inline-block text-[10px] font-semibold tracking-[0.25em] text-white"
            >
              {HERO.readMoreLabel}
            </a>
          </div>
        ))}
      </div>

      <div className="mt-8 flex h-px">
        <div className="w-1/4 bg-brand" />
        <div className="w-3/4 bg-white/15" />
      </div>
    </div>
  );
}
