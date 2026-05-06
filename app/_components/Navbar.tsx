import { Search } from "lucide-react";
import { BRAND_NAME, NAV_ITEMS } from "../_data/content";

/** Top navigation rendered on top of the hero image. */
export function Navbar() {
  return (
    <>
      <header className="relative z-10 mx-auto flex max-w-[1280px] items-center justify-between px-8 pt-8">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-brand" />
          <span className="text-xs font-semibold tracking-[0.3em]">
            {BRAND_NAME}
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-medium tracking-[0.25em]">
          {NAV_ITEMS.map((item, index) => (
            <a
              key={item}
              href="#"
              className={
                index === 0 ? "text-brand" : "text-white/80 hover:text-white"
              }
            >
              {item}
            </a>
          ))}
        </nav>
        <Search className="h-4 w-4" />
      </header>
      <div className="relative z-10 mt-6 h-px max-w-[1280px] bg-white/15 mx-8" />
    </>
  );
}
