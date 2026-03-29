"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { FiHome, FiMenu, FiX } from "react-icons/fi";
import { IoChatboxEllipsesOutline, IoHelpCircleOutline, IoHeartOutline, IoSchoolOutline, IoSwapHorizontalOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";

import lineIcon from "@/assets/icons/line.png";
import saudiFlag from "@/assets/logos/country/saudi_arabia.png";
import ukFlag from "@/assets/logos/country/uk.png";
import swapArrowIcon from "@/assets/icons/swapArrow.png";
import wishlistIcon from "@/assets/icons/wishlist.png";
import {
  actionLinks,
  primaryNavLinks,
  topBarLinks,
  utilityLinks,
} from "@/components/layout/header-navigation";

type ActionIconLinkProps = {
  href: string;
  iconSrc: typeof swapArrowIcon;
  badgeCount?: number;
  label: string;
};

type UtilityDialog = "language" | "currency" | null;

const mobileQuickLinks = [
  { label: "الرئيسية", href: "/", icon: FiHome },
  { label: "اتصل بنا", href: "/contact", icon: IoChatboxEllipsesOutline },
  { label: "أسئلة وأجوبة", href: "/faq", icon: IoHelpCircleOutline },
];

const mobileMenuLinks = [
  { label: "العروض", href: "/offers" },
  { label: "من نحن", href: "/about" },
  { label: "فريق العمل", href: "/team" },
  { label: "المدونة", href: "/articles" },
  { label: "مدارس اللغة الإنجليزية", href: "/language-schools" },
  { label: "البرنامج الصيفي", href: "/summer-programs" },
  { label: "القبول الجامعي", href: "/university-admissions" },
];

const mobileBottomNav = [
  { label: "الرئيسية", href: "/", icon: FiHome, active: true },
  { label: "المعاهد", href: "/institutes", icon: IoSchoolOutline },
  { label: "المفضلة", href: "/wishlist", icon: IoHeartOutline, badge: 5 },
  { label: "المقارنة", href: "/compare", icon: IoSwapHorizontalOutline },
  { label: "حسابي", href: "/login", icon: LuUserRound },
];

const languageOptions = [
  { id: "ar", label: "العربية", code: "ar", flag: saudiFlag },
  { id: "en", label: "English", code: "en", flag: ukFlag },
];

const currencyOptions = [
  { id: "sar", label: "ريال سعودي", code: "SAR", symbol: "﷼" },
  { id: "usd", label: "دولار أمريكي", code: "USD", symbol: "$" },
  { id: "gbp", label: "جنيه استرليني", code: "GBP", symbol: "£" },
  { id: "eur", label: "اليورو", code: "EUR", symbol: "€" },
];

function ActionIconLink({ href, iconSrc, badgeCount = 0, label }: ActionIconLinkProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ECF2F6] transition hover:bg-[#DEE8F0]"
    >
      <Image src={iconSrc} alt="" width={18} height={18} />
      {badgeCount > 0 ? (
        <span className="absolute -end-1 -top-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[#EF4444] px-1 text-[10px] font-semibold text-white">
          {badgeCount}
        </span>
      ) : null}
    </Link>
  );
}

function LogoMark() {
  return (
    <Link href="/" className="shrink-0">
      <div className="w-[236px]">
        <p dir="ltr" className="flex w-full items-end justify-center gap-1 leading-none text-[37px] font-extrabold tracking-[-0.04em] text-[#232323]">
          <span>كورس</span>
          <span className="mb-1 text-[26px] leading-none text-[#0071BC]">_</span>
          <span className="text-[#0071BC]">ourse</span>
        </p>
        <Image
          src={lineIcon}
          alt=""
          className="mt-3 h-[2px] w-full"
          sizes="236px"
        />
        <p className="mt-2 w-full text-center text-[18px] font-normal leading-none text-[#2B3037]">
          كورس الإنجليزي .كوم
        </p>
      </div>
    </Link>
  );
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDialog, setActiveDialog] = useState<UtilityDialog>(null);
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);
  const [selectedCurrency, setSelectedCurrency] = useState(currencyOptions[0]);
  const utilityAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (!utilityAreaRef.current?.contains(event.target as Node)) {
        setActiveDialog(null);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveDialog(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="w-full bg-white">
      <div className="hidden lg:block">
        <div className="bg-[#0071BC]">
          <div className="flex h-[56px] w-full items-center justify-between gap-6 px-4 text-white md:px-8 lg:px-[clamp(2rem,6vw,7rem)]">
            <nav className="hidden items-center gap-6 text-[13px] font-medium leading-none lg:flex">
              {topBarLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:opacity-85">
                  {link.label}
                </Link>
              ))}
            </nav>

            <div ref={utilityAreaRef} className="relative flex items-center gap-5 text-[13px] font-medium leading-none">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setActiveDialog((previous) => (previous === "language" ? null : "language"))}
                  className="inline-flex items-center gap-1.5 transition hover:opacity-85"
                >
                  <span className="text-[10px]">▾</span>
                  <span>{selectedLanguage.label}</span>
                  <span className="rounded-sm bg-[#57B947] px-1 py-0.5 text-[10px] font-semibold text-white">
                    KSA
                  </span>
                </button>

                {activeDialog === "language" ? (
                  <div className="absolute start-0 top-[calc(100%+10px)] z-50 w-[220px] rounded-2xl bg-white p-2 text-[#1E293B] shadow-[0_28px_50px_-30px_rgba(15,23,42,0.55)]" dir="ltr">
                    {languageOptions.map((language) => {
                      const isSelected = selectedLanguage.id === language.id;

                      return (
                        <button
                          key={language.id}
                          type="button"
                          onClick={() => {
                            setSelectedLanguage(language);
                            setActiveDialog(null);
                          }}
                          className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
                            isSelected ? "bg-[#EAF1F7]" : "hover:bg-[#F4F7FA]"
                          }`}
                        >
                          <Image src={language.flag} alt={language.label} className="h-6 w-6 rounded-full object-cover" />
                          <span className="flex flex-col">
                            <span className="text-[16px] font-semibold leading-none text-[#1F2937]">{language.label}</span>
                            <span className="mt-0.5 text-[12px] font-medium leading-none text-[#64748B]">{language.code}</span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                ) : null}
              </div>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setActiveDialog((previous) => (previous === "currency" ? null : "currency"))}
                  className="inline-flex items-center gap-1.5 transition hover:opacity-85"
                >
                  <span className="text-[10px]">▾</span>
                  <span>{selectedCurrency.symbol}</span>
                  <span>{selectedCurrency.code}</span>
                </button>

                {activeDialog === "currency" ? (
                  <div className="absolute start-0 top-[calc(100%+10px)] z-50 w-[240px] rounded-2xl bg-white p-2 text-[#1E293B] shadow-[0_28px_50px_-30px_rgba(15,23,42,0.55)]" dir="ltr">
                    {currencyOptions.map((currency) => {
                      const isSelected = selectedCurrency.id === currency.id;

                      return (
                        <button
                          key={currency.id}
                          type="button"
                          onClick={() => {
                            setSelectedCurrency(currency);
                            setActiveDialog(null);
                          }}
                          className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
                            isSelected ? "bg-[#EAF1F7]" : "hover:bg-[#F4F7FA]"
                          }`}
                        >
                          <span className="w-6 text-center text-[24px] font-semibold leading-none text-black">{currency.symbol}</span>
                          <span className="flex flex-col">
                            <span className="text-[16px] font-semibold leading-none text-[#1F2937]">{currency.label}</span>
                            <span className="mt-0.5 text-[12px] font-medium leading-none text-[#64748B]">{currency.code}</span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-[#E9EAED] bg-white">
          <div className="flex h-[100.54px] w-full items-center justify-between gap-[40px] px-4 md:px-8 lg:px-[clamp(2rem,6vw,7rem)]">
            <LogoMark />

            <nav className="hidden items-center gap-[48px] text-[13px] font-medium text-[#0F2745] lg:flex">
              {primaryNavLinks.map((link) => {
                const isHome = link.href === "/";

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`transition hover:text-[#0071BC] ${isHome ? "text-[#0071BC]" : ""}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div dir="ltr" className="flex items-center gap-2.5">
              <Link
                href={actionLinks.account.href}
                className="inline-flex h-12 min-w-[132px] items-center justify-center rounded-2xl bg-[#0071BC] px-6 text-[13px] font-medium text-white transition hover:bg-[#0065A8]"
              >
                {actionLinks.account.label}
              </Link>
              <ActionIconLink
                href={actionLinks.compare.href}
                iconSrc={swapArrowIcon}
                badgeCount={5}
                label="المقارنة"
              />
              <ActionIconLink
                href={actionLinks.wishlist.href}
                iconSrc={wishlistIcon}
                badgeCount={9}
                label="المفضلة"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <div className="bg-[#0071BC] text-center text-white">
          <div className="px-4 py-2 text-[12px] leading-[1.4]">
            <span className="me-1">🔥</span>
            عروضنا حصرية. نضمن أفضل الأسعار والخدمات وسندفع الفرق اذا وجدت سعر او خدمة أفضل
          </div>
          <div className="border-t border-white/15 px-2 py-2">
            <div className="rounded-sm border border-white/20 bg-[#117BC5] px-2 py-2">
              <div dir="ltr" className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(true)}
                  aria-label="فتح القائمة"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/12 text-white"
                >
                  <FiMenu size={20} />
                </button>

                <Link href="/" className="text-center leading-tight text-white">
                  <p dir="ltr" className="text-[16px] font-extrabold tracking-[-0.035em]">
                    كورس<span className="text-white">_</span>ourse
                  </p>
                  <p className="text-[10px] text-white/90">كورس الإنجليزي .كوم</p>
                </Link>

                <Link
                  href="https://wa.me/"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/12 text-white"
                  aria-label="واتساب"
                >
                  <FaWhatsapp size={18} />
                </Link>
              </div>

              <div className="mt-2 overflow-x-auto pb-1">
                <div className="flex min-w-max items-center gap-1.5 text-[12px] font-semibold text-white">
                  {topBarLinks.slice(0, 4).map((link, index) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`rounded-xl px-2.5 py-1.5 ${index === 0 ? "bg-white/15" : "bg-transparent"}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {isMenuOpen ? (
          <div className="fixed inset-0 z-[70] bg-black/45 px-4 py-7" dir="rtl">
            <div className="mx-auto max-w-[360px] rounded-sm bg-[#0071BC] p-3 text-white shadow-[0_34px_80px_-40px_rgba(0,0,0,0.8)]">
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="إغلاق القائمة"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/12"
                >
                  <FiX size={20} />
                </button>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2">
                {mobileQuickLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="rounded-lg bg-white/12 px-2 py-3 text-center"
                    >
                      <Icon className="mx-auto" size={15} />
                      <span className="mt-1 block text-[18px]">{link.label}</span>
                    </Link>
                  );
                })}
              </div>

              <nav className="mt-2 space-y-1">
                {mobileMenuLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-lg bg-white/10 px-4 py-2.5 text-[22px]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <Link href={utilityLinks.language.href} className="rounded-lg bg-white/12 px-3 py-2 text-[18px] text-center">
                  العربية
                </Link>
                <Link href={utilityLinks.currency.href} className="rounded-lg bg-white/12 px-3 py-2 text-[18px] text-center">
                  ريال سعودي
                </Link>
              </div>

              <div className="mt-3 flex items-center justify-center gap-2">
                <Link href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/12">
                  <FaLinkedinIn size={14} />
                </Link>
                <Link href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/12">
                  <FaFacebookF size={14} />
                </Link>
                <Link href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/12">
                  <FaInstagram size={14} />
                </Link>
                <Link href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/12">
                  <FaXTwitter size={14} />
                </Link>
              </div>

              <p className="mt-3 text-center text-[16px] text-white/90">سياسة الخصوصية | الشروط والأحكام</p>
            </div>
          </div>
        ) : null}

        <nav className="fixed inset-x-0 bottom-0 z-[60] border-t border-[#D9E2EC] bg-white" dir="rtl">
          <div className="mx-auto flex max-w-[480px] items-center justify-between px-4 pb-[max(8px,env(safe-area-inset-bottom))] pt-2">
            {mobileBottomNav.map((item) => {
              const Icon = item.icon;

              return (
                <Link key={item.href} href={item.href} className="relative flex min-w-[58px] flex-col items-center gap-1 text-[#6A7788]">
                  <span className={`inline-flex h-8 w-8 items-center justify-center ${item.active ? "text-[#0071BC]" : ""}`}>
                    <Icon size={20} />
                  </span>
                  {item.badge ? (
                    <span className="absolute end-2 top-0 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#EF4444] px-1 text-[10px] font-bold text-white">
                      {item.badge}
                    </span>
                  ) : null}
                  <span className={`text-[12px] font-semibold ${item.active ? "text-[#0071BC]" : "text-[#566474]"}`}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="mx-auto mb-1.5 h-1.5 w-28 rounded-full bg-black max-w-[480px]" />
        </nav>
      </div>
    </header>
  );
}
