import { Play } from "lucide-react";

type PlayButtonProps = {
  /** Button visual variant. */
  variant?: "outline" | "glass";
  /** Accessible label for assistive technologies. */
  ariaLabel?: string;
};

const VARIANT_CLASSES: Record<NonNullable<PlayButtonProps["variant"]>, string> =
  {
    outline: "border border-white/40 backdrop-blur-sm hover:bg-white/10",
    glass: "bg-white/20 backdrop-blur-sm",
  };

/** Circular play button reused across the hero and video thumbnails. */
export function PlayButton({
  variant = "outline",
  ariaLabel = "Play video",
}: PlayButtonProps) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={`flex h-12 w-12 items-center justify-center rounded-full ${VARIANT_CLASSES[variant]}`}
    >
      <Play className="h-4 w-4 fill-white" />
    </button>
  );
}
