import Image from "next/image";
import { Search, Play, Plane, Anchor, Triangle } from "lucide-react";

const navItems = ["ГЛАВНАЯ", "О НАС", "ТУРЫ", "ГАЛЕРЕЯ", "ОТЗЫВЫ", "КОНТАКТЫ"];
const slideNums = ["01", "02", "03", "04", "05"];
const tours = [
  { img: "/images/tour-1.jpg", n: "ТУР №1" },
  { img: "/images/tour-2.jpg", n: "ТУР №2" },
  { img: "/images/tour-3.jpg", n: "ТУР №3" },
  { img: "/images/tour-4.jpg", n: "ТУР №4" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[hsl(var(--bg-deep))] text-[hsl(var(--foreground))] font-sans">
      {/* HERO */}
      <section className="relative h-[100vh] min-h-[720px] w-full overflow-hidden">
        <Image
          src="/images/hero-tokyo.jpg"
          alt="Visit Tokyo"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--bg-deep))]/70 via-[hsl(var(--bg-deep))]/20 to-[hsl(var(--bg-deep))]" />

        {/* Navbar */}
        <header className="relative z-10 mx-auto flex max-w-[1280px] items-center justify-between px-8 pt-8">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--brand))]" />
            <span className="text-xs font-semibold tracking-[0.3em]">TRAVEL</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-medium tracking-[0.25em]">
            {navItems.map((n, i) => (
              <a
                key={n}
                href="#"
                className={
                  i === 0
                    ? "text-[hsl(var(--brand))]"
                    : "text-white/80 hover:text-white"
                }
              >
                {n}
              </a>
            ))}
          </nav>
          <Search className="h-4 w-4" />
        </header>
        <div className="relative z-10 mt-6 h-px max-w-[1280px] bg-white/15 mx-8" />

        {/* Title */}
        <div className="relative z-10 mx-auto max-w-[1280px] px-8 pt-24">
          <h1 className="text-[110px] leading-[0.95] font-bold tracking-tight">
            VISIT
            <br />
            TOKYO
          </h1>
        </div>

        {/* Slide indicators */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 z-10 flex flex-col items-end gap-3 text-xs tracking-widest">
          {slideNums.map((n) => (
            <div key={n} className="flex items-center gap-3">
              {n === "03" && <span className="h-px w-10 bg-white/60" />}
              <span
                className={
                  n === "03"
                    ? "text-white text-2xl font-semibold"
                    : "text-white/40"
                }
              >
                {n}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="absolute bottom-0 left-0 right-0 z-10 mx-auto max-w-[1280px] px-8 pb-10">
          <div className="flex items-center justify-between px-12 pb-44 text-white/40">
            <Triangle className="h-5 w-5 fill-[hsl(var(--brand))] text-[hsl(var(--brand))]" />
            <Anchor className="h-5 w-5" />
            <Plane className="h-5 w-5" />
          </div>
          <div className="grid grid-cols-3 gap-12 text-[11px] text-white/60">
            {[0, 1, 2].map((i) => (
              <div key={i} className="space-y-3">
                <p className="leading-relaxed">
                  Пара предложений текста и еще что-нибудь интересное для читателей
                </p>
                <a
                  href="#"
                  className="inline-block text-[10px] font-semibold tracking-[0.25em] text-white"
                >
                  ПОДРОБНЕЕ →
                </a>
              </div>
            ))}
          </div>
          <div className="mt-8 flex h-px">
            <div className="w-1/4 bg-[hsl(var(--brand))]" />
            <div className="w-3/4 bg-white/15" />
          </div>
        </div>
      </section>

      {/* POPULAR TOURS */}
      <section className="bg-[hsl(var(--bg-section))] py-24">
        <div className="mx-auto max-w-[1280px] px-8">
          <p className="text-center text-xs tracking-[0.25em] text-white/50">
            и получите незабываемые эмоции
          </p>
          <h2 className="mt-3 text-center text-2xl font-bold tracking-[0.3em]">
            ПОПУЛЯРНЫЕ ТУРЫ
          </h2>

          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            {tours.map((t) => (
              <div key={t.n} className="group relative overflow-hidden">
                <Image
                  src={t.img}
                  alt={t.n}
                  width={320}
                  height={288}
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-lg font-bold tracking-[0.2em]">{t.n}</h3>
                  <p className="mt-1 text-[11px] text-white/70">
                    и получите незабываемые
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <span className="h-px w-32 bg-white/30" />
          </div>
        </div>
      </section>

      {/* INSPIRE BANNER */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/banner-galaxy.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--bg-deep))]/60 via-transparent to-[hsl(var(--bg-deep))]/90" />

        <div className="relative mx-auto max-w-[1280px] px-8 pt-32 pb-12">
          <h2 className="text-[64px] leading-[1.05] font-bold tracking-tight max-w-2xl">
            TRAVEL AND
            <br />
            INSPIRE YOUR
            <br />
            LIFE
          </h2>

          <div className="mt-10 flex items-center gap-4">
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 backdrop-blur-sm hover:bg-white/10"
            >
              <Play className="h-4 w-4 fill-white" />
            </button>
            <span className="text-xs tracking-wider text-white/70">
              Смотреть видео
            </span>
            <span className="ml-4 h-px w-32 bg-white/30" />
          </div>

          <div className="mt-16 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="text-[11px] leading-relaxed text-white/60 max-w-[220px]">
              Здесь будет текст-описание для видео, которое вам предоставлено
              для запуска и которое очень интересное.
            </p>
            <div className="flex gap-6 md:w-[60%] md:justify-end">
              <div className="relative h-48 w-1/2 overflow-hidden">
                <Image
                  src="/images/video-1.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <button
                    type="button"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm"
                  >
                    <Play className="h-4 w-4 fill-white" />
                  </button>
                </div>
              </div>
              <div className="relative h-48 w-1/2 overflow-hidden">
                <Image
                  src="/images/video-2.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <button
                    type="button"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm"
                  >
                    <Play className="h-4 w-4 fill-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
