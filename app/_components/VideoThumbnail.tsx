import Image from "next/image";
import { PlayButton } from "./PlayButton";

type VideoThumbnailProps = {
  src: string;
  alt?: string;
};

/** Video preview with a centered play button overlay. */
export function VideoThumbnail({ src, alt = "" }: VideoThumbnailProps) {
  return (
    <div className="relative h-48 w-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 768px) 20vw, 50vw"
        className="object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
        <PlayButton variant="glass" />
      </div>
    </div>
  );
}
