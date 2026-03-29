export type HeaderLink = {
  label: string;
  href: string;
};

export const topBarLinks: HeaderLink[] = [
  { label: "معاهد اللغة", href: "/language-institutes" },
  { label: "برامج صيفية", href: "/summer-programs" },
  { label: "دراسة عن بعد", href: "/online-courses" },
  { label: "قبولات جامعية", href: "/university-admissions" },
  { label: "سياحة وسفر", href: "/travel-tourism" },
  { label: "دورات تدريبية واحترافية", href: "/professional-courses" },
];

export const primaryNavLinks: HeaderLink[] = [
  { label: "الرئيسية", href: "/" },
  { label: "العروض", href: "/offers" },
  { label: "من نحن", href: "/about" },
  { label: "اتصل بنا", href: "/contact" },
  { label: "المقالات", href: "/articles" },
];

export const utilityLinks = {
  language: { label: "العربية", href: "/ar" },
  currency: { label: "ريال سعودي", href: "/currency" },
};

export const actionLinks = {
  account: { label: "حسابي", href: "/login" },
  compare: { label: "", href: "/compare" },
  wishlist: { label: "", href: "/wishlist" },
};
