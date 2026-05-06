/**
 * Static content and copy used across the landing page.
 * User-facing strings (Russian/English) live here to keep the UI
 * components free of hardcoded literals.
 */

export const BRAND_NAME = "TRAVEL";

export const NAV_ITEMS = [
  "ГЛАВНАЯ",
  "О НАС",
  "ТУРЫ",
  "ГАЛЕРЕЯ",
  "ОТЗЫВЫ",
  "КОНТАКТЫ",
] as const;

export const SLIDE_NUMBERS = ["01", "02", "03", "04", "05"] as const;
export const ACTIVE_SLIDE = "03" as const;

export type Tour = {
  readonly image: string;
  readonly name: string;
  readonly caption: string;
};

export const TOURS: readonly Tour[] = [
  { image: "/images/tour-1.jpg", name: "ТУР №1", caption: "и получите незабываемые" },
  { image: "/images/tour-2.jpg", name: "ТУР №2", caption: "и получите незабываемые" },
  { image: "/images/tour-3.jpg", name: "ТУР №3", caption: "и получите незабываемые" },
  { image: "/images/tour-4.jpg", name: "ТУР №4", caption: "и получите незабываемые" },
];

export const HERO = {
  title: ["VISIT", "TOKYO"] as const,
  heroImage: "/images/hero-tokyo.jpg",
  infoText:
    "Пара предложений текста и еще что-нибудь интересное для читателей",
  readMoreLabel: "ПОДРОБНЕЕ →",
  infoColumns: 3,
};

export const POPULAR_TOURS = {
  subtitle: "и получите незабываемые эмоции",
  title: "ПОПУЛЯРНЫЕ ТУРЫ",
};

export const INSPIRE_BANNER = {
  image: "/images/banner-galaxy.jpg",
  title: ["TRAVEL AND", "INSPIRE YOUR", "LIFE"] as const,
  watchVideoLabel: "Смотреть видео",
  description:
    "Здесь будет текст-описание для видео, которое вам предоставлено для запуска и которое очень интересное.",
  videos: [
    { src: "/images/video-1.jpg", alt: "" },
    { src: "/images/video-2.jpg", alt: "" },
  ] as const,
};
