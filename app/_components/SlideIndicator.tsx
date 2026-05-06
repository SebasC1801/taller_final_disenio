import { ACTIVE_SLIDE, SLIDE_NUMBERS } from "../_data/content";

/** Vertical slide indicator shown on the right edge of the hero. */
export function SlideIndicator() {
  return (
    <div className="absolute right-12 top-1/2 -translate-y-1/2 z-10 flex flex-col items-end gap-3 text-xs tracking-widest">
      {SLIDE_NUMBERS.map((number) => {
        const isActive = number === ACTIVE_SLIDE;
        return (
          <div key={number} className="flex items-center gap-3">
            {isActive && <span className="h-px w-10 bg-white/60" />}
            <span
              className={
                isActive
                  ? "text-white text-2xl font-semibold"
                  : "text-white/40"
              }
            >
              {number}
            </span>
          </div>
        );
      })}
    </div>
  );
}
