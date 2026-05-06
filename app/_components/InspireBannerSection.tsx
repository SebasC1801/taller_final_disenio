import Image from "next/image";
import { INSPIRE_BANNER } from "../_data/content";
import { PlayButton } from "./PlayButton";
import { VideoThumbnail } from "./VideoThumbnail";

/** Full-width banner inviting users to watch the inspirational videos. */
export function InspireBannerSection() {
  const { image, title, watchVideoLabel, description, videos } = INSPIRE_BANNER;

  return (
    <section className="relative overflow-hidden">
      <Image src={image} alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-linear-to-b from-bg-deep/60 via-transparent to-bg-deep/90" />

      <div className="relative mx-auto max-w-[1280px] px-8 pt-32 pb-12">
        <h2 className="text-[64px] leading-[1.05] font-bold tracking-tight max-w-2xl">
          {title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <div className="mt-10 flex items-center gap-4">
          <PlayButton ariaLabel={watchVideoLabel} />
          <span className="text-xs tracking-wider text-white/70">
            {watchVideoLabel}
          </span>
          <span className="ml-4 h-px w-32 bg-white/30" />
        </div>

        <div className="mt-16 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[11px] leading-relaxed text-white/60 max-w-[220px]">
            {description}
          </p>
          <div className="flex gap-6 md:w-[60%] md:justify-end">
            {videos.map((video) => (
              <div key={video.src} className="w-1/2">
                <VideoThumbnail src={video.src} alt={video.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
