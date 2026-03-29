"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { ar } from "date-fns/locale";
import Image from "next/image";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

import backgroundImage from "@/assets/images/background.png";
import companyLogo1 from "@/assets/logos/company/1c1bb2ba590cdfe983a5e3c9deabca6bf71ce4ae(1).png";
import companyLogo2 from "@/assets/logos/company/3da30bb7fdea92922a6e2a51e49dba2106707c08.png";
import companyLogo3 from "@/assets/logos/company/9122dc849a84a0cd1c147003d797d5b05b0b3083.png";
import companyLogo4 from "@/assets/logos/company/a232c17ce93f2c0f14f542e162216c0433ee63be(1).png";
import companyLogo5 from "@/assets/logos/company/fdb2c3579f5dcbe72232717d1974988088f1a1bb(1).png";
import countryCanada from "@/assets/logos/country/canada.png";
import countrySaudi from "@/assets/logos/country/saudi_arabia.png";
import countryUk from "@/assets/logos/country/uk.png";
import countryUs from "@/assets/logos/country/us.png";
import humanImage from "@/assets/images/human.png";

const courseTypeOptions = [
  "دورة اللغة الإنجليزية العامة",
  "دورة اللغة الإنجليزية المكثفة",
  "دورة اللغة الإنجليزية شبه المكثفة",
  "دورة تحضير اختبار الآيلتس - IELTS",
  "دورة لغة إنجليزية عالية الكثافة",
];

const options = [
  { id: "accommodation", label: "السكن", checked: true },
  { id: "airport-pickup", label: "الاستقبال من المطار", checked: false },
  { id: "insurance", label: "التأمين", checked: false },
];

const arabicNumber = new Intl.NumberFormat("ar-SA");

type OpenPanel = "destination" | "courseType" | "weeks" | "startDate" | null;

const popularInstitutes = [
  {
    id: "islington",
    name: "مركز إزلنجتون للغة الإنجليزية",
    logo: undefined,
    fallback: "ISLINGTON",
  },
  {
    id: "concorde",
    name: "معهد كونكورد العالي",
    logo: companyLogo1,
  },
  {
    id: "bath",
    name: "معهد اكاديمية باث",
    logo: companyLogo2,
  },
  {
    id: "lsi",
    name: "معهد ال اس اي",
    logo: companyLogo3,
  },
  {
    id: "other",
    name: "معاهد أخرى",
    logo: undefined,
    fallback: "←",
    isOtherCard: true,
  },
  {
    id: "berlitz",
    name: "معهد بيرلتز",
    logo: companyLogo4,
  },
  {
    id: "beet",
    name: "معهد بيت لانقويج سنتر",
    logo: companyLogo5,
  },
  {
    id: "london-school",
    name: "معهد لندن للغة الإنجليزية",
    logo: undefined,
    fallback: "THE LONDON SCHOOL",
  },
];

const popularCountries = [
  { id: "saudi", name: "المملكة العربية السعودية", flag: countrySaudi },
  { id: "us", name: "الولايات المتحدة", flag: countryUs },
  { id: "canada", name: "كندا", flag: countryCanada },
  { id: "uk", name: "المملكة المتحدة", flag: countryUk },
];

function formatWeeks(week: number) {
  return `${arabicNumber.format(week)} أسبوع`;
}

function formatDateInArabic(date: Date) {
  return new Intl.DateTimeFormat("ar-SA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function HomeHero() {
  const [openPanel, setOpenPanel] = useState<OpenPanel>(null);
  const [selectedCourseType, setSelectedCourseType] = useState<string | null>(null);
  const [selectedWeeks, setSelectedWeeks] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedDestination, setSelectedDestination] = useState<string>("");
  const [month, setMonth] = useState<Date>(new Date(2026, 3, 1));
  const [extras, setExtras] = useState<Record<string, boolean>>({
    accommodation: true,
    "airport-pickup": false,
    insurance: false,
  });

  const controlsRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (!controlsRef.current?.contains(event.target as Node)) {
        setOpenPanel(null);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const weeksOptions = useMemo(() => Array.from({ length: 52 }, (_, index) => index + 1), []);

  function toggleExtra(extraId: string) {
    setExtras((previous) => ({
      ...previous,
      [extraId]: !previous[extraId],
    }));
  }

  function closePanel() {
    setOpenPanel(null);
  }

  return (
    <section className="relative z-20 w-full overflow-visible border-t border-[#E9EAED] bg-white lg:min-h-[680px] lg:bg-[#E5EDF3]">
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          className="object-cover object-top opacity-50"
          sizes="(max-width: 1440px) 100vw, 1440px"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.82)_0%,rgba(255,255,255,0.72)_54%,rgba(0,113,188,0.16)_100%),linear-gradient(90deg,rgba(255,255,255,0.78)_0%,rgba(255,255,255,0.24)_40%,rgba(255,255,255,0.76)_100%)]" />
      </div>

      <div className="relative z-10 w-full px-4 pb-8 pt-8 sm:px-6 lg:flex lg:min-h-[680px] lg:items-end lg:justify-between lg:gap-6 lg:px-[clamp(2rem,6vw,7rem)] lg:pt-9" dir="ltr">
        <div className="relative hidden h-[580px] w-[clamp(360px,42vw,760px)] shrink-0 items-end justify-start overflow-hidden lg:flex lg:translate-y-8">
          <Image
            src={humanImage}
            alt="طالب يشير بإبهامه للأعلى"
            width={631}
            height={556}
            className="h-full w-full object-contain object-bottom"
            sizes="(max-width: 1024px) 48vw, 631px"
          />
        </div>

        <div className="mx-auto flex w-full max-w-none flex-col gap-8 text-right lg:mb-16 lg:w-[min(58vw,860px)] lg:gap-12" dir="rtl">
          <div>
            <p className="hidden text-[14px] font-normal leading-[1.35] text-[#1D2A39] sm:text-[16px] lg:block lg:text-[18px] lg:leading-none">
              🔥 عروضنا حصرية. نضمن أفضل الأسعار والخدمات وسندفع الفرق اذا وجدت سعر او خدمة أفضل
            </p>
            <h1 className="mt-3 text-[22px] font-bold leading-[1.2] text-[#102A46] sm:text-[24px] lg:mt-5 lg:text-[48px] lg:leading-none">
              ابدأ رحلتك الدراسية الآن
            </h1>
            <p className="mt-4 text-[14px] font-normal leading-[1.5] text-[#8A98A8] sm:text-[15px] lg:mt-5 lg:text-[18px] lg:leading-none">
              اكتشف أفضل المعاهد والدورات المعتمدة حول العالم، واختر الوجهة التي
              تناسب طموحاتك بكل سهولة.
            </p>
          </div>

          <form className="space-y-5" action="#" dir="rtl" ref={controlsRef}>
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpenPanel((previous) => (previous === "destination" ? null : "destination"))}
                className="block w-full rounded-md border border-[#D7E2EC] bg-white px-4 py-2.5 text-right"
              >
                <span className="block text-[14px] font-normal leading-none text-[#45576B]">
                  ادخل وجهتك المفضلة
                </span>
                <span className="mt-2 block text-[13px] leading-none text-[#A7B3C0]">
                  {selectedDestination || "ادخل الدولة أو المدينة أو المعهد"}
                </span>
              </button>

              {openPanel === "destination" ? (
                <div className="absolute inset-x-0 top-[calc(100%+10px)] z-50 overflow-hidden rounded-[22px] border border-[#D7E2EC] bg-white p-4 shadow-[0_28px_70px_-40px_rgba(9,24,41,0.7)] sm:p-6">
                  <section>
                    <h3 className="text-[36px] font-bold leading-none text-[#102A46]">أشهر المعاهد</h3>
                    <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                      {popularInstitutes.map((institute) => (
                        <button
                          key={institute.id}
                          type="button"
                          onClick={() => {
                            setSelectedDestination(institute.name);
                            closePanel();
                          }}
                          className={`rounded-2xl border border-[#D8E1EA] px-3 py-4 text-center transition hover:bg-[#F4F8FC] ${institute.isOtherCard ? "bg-[#E9F2F9]" : "bg-white"}`}
                        >
                          <div className="flex h-[42px] items-center justify-center">
                            {institute.logo ? (
                              <Image
                                src={institute.logo}
                                alt={institute.name}
                                className="max-h-10 w-auto object-contain"
                              />
                            ) : institute.isOtherCard ? (
                              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0071BC] text-xl text-white">←</span>
                            ) : (
                              <span className="text-[12px] font-semibold tracking-wide text-[#4A5C70]">
                                {institute.fallback}
                              </span>
                            )}
                          </div>
                          <p className="mt-3 text-[14px] font-semibold leading-[1.3] text-[#1D2F45]">
                            {institute.name}
                          </p>
                        </button>
                      ))}
                    </div>
                  </section>

                  <section className="mt-6 border-t border-[#E4EBF2] pt-5">
                    <h3 className="text-[36px] font-bold leading-none text-[#102A46]">أشهر الدول</h3>
                    <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                      {popularCountries.map((country) => (
                        <button
                          key={country.id}
                          type="button"
                          onClick={() => {
                            setSelectedDestination(country.name);
                            closePanel();
                          }}
                          className="rounded-2xl border border-[#D8E1EA] bg-white px-3 py-4 text-center transition hover:bg-[#F4F8FC]"
                        >
                          <div className="flex h-[42px] items-center justify-center">
                            <Image
                              src={country.flag}
                              alt={country.name}
                              className="h-8 w-8 object-contain"
                            />
                          </div>
                          <p className="mt-3 text-[14px] font-semibold leading-[1.3] text-[#1D2F45]">
                            {country.name}
                          </p>
                        </button>
                      ))}
                    </div>
                  </section>
                </div>
              ) : null}
            </div>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3" dir="rtl">
              <div className="relative col-span-2 order-3 lg:col-span-1 lg:order-1">
                <button
                  type="button"
                  onClick={() => setOpenPanel((previous) => (previous === "courseType" ? null : "courseType"))}
                  className="flex w-full items-center justify-between rounded-md border border-[#D7E2EC] bg-white px-4 py-2.5 text-right"
                >
                  <span>
                    <span className="block text-[14px] leading-none text-[#45576B]">نوع الدورة</span>
                    <span className="mt-2 block text-[13px] leading-none text-[#9CAAB8]">
                      {selectedCourseType ?? "اختر نوع الدورة"}
                    </span>
                  </span>
                  <span className="text-sm text-[#738499]">⌄</span>
                </button>

                {openPanel === "courseType" ? (
                  <div className="absolute inset-x-0 top-[calc(100%+8px)] z-40 rounded-2xl bg-white p-2 shadow-[0_22px_70px_-38px_rgba(9,24,41,0.6)]">
                    <ul className="space-y-1" role="listbox" aria-label="نوع الدورة">
                      {courseTypeOptions.map((option) => (
                        <li key={option}>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedCourseType(option);
                              closePanel();
                            }}
                            className="w-full rounded-xl px-3 py-2 text-right text-[14px] text-[#203247] transition hover:bg-[#EEF3F8]"
                          >
                            {option}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>

              <div className="relative order-2 lg:order-2">
                <button
                  type="button"
                  onClick={() => setOpenPanel((previous) => (previous === "weeks" ? null : "weeks"))}
                  className="flex w-full items-center justify-between rounded-md border border-[#D7E2EC] bg-white px-4 py-2.5 text-right"
                >
                  <span>
                    <span className="block text-[14px] leading-none text-[#45576B]">عدد الأسابيع</span>
                    <span className="mt-2 block text-[13px] leading-none text-[#9CAAB8]">
                      {selectedWeeks ? formatWeeks(selectedWeeks) : "اختر عدد الأسابيع"}
                    </span>
                  </span>
                  <span className="text-sm text-[#738499]">⌄</span>
                </button>

                {openPanel === "weeks" ? (
                  <div className="absolute inset-x-0 top-[calc(100%+8px)] z-40 max-h-64 overflow-y-auto rounded-2xl bg-white p-2 shadow-[0_22px_70px_-38px_rgba(9,24,41,0.6)]">
                    <ul className="space-y-1" role="listbox" aria-label="عدد الأسابيع">
                      {weeksOptions.map((week) => (
                        <li key={week}>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedWeeks(week);
                              closePanel();
                            }}
                            className="w-full rounded-xl px-3 py-2 text-right text-[14px] text-[#203247] transition hover:bg-[#EEF3F8]"
                          >
                            {formatWeeks(week)}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>

              <div className="relative order-1 lg:order-3">
                <button
                  type="button"
                  onClick={() => setOpenPanel((previous) => (previous === "startDate" ? null : "startDate"))}
                  className="flex w-full items-center justify-between rounded-md border border-[#D7E2EC] bg-white px-4 py-2.5 text-right"
                >
                  <span>
                    <span className="block text-[14px] leading-none text-[#45576B]">تاريخ البداية</span>
                    <span className="mt-2 block text-[13px] leading-none text-[#9CAAB8]">
                      {selectedDate ? formatDateInArabic(selectedDate) : "اختر تاريخ البداية"}
                    </span>
                  </span>
                  <span className="text-sm text-[#738499]">⌄</span>
                </button>

                {openPanel === "startDate" ? (
                  <div className="absolute start-0 top-[calc(100%+8px)] z-40 w-[min(360px,92vw)] rounded-2xl bg-white p-3 shadow-[0_22px_70px_-38px_rgba(9,24,41,0.6)]" dir="rtl">
                    <DayPicker
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => {
                        setSelectedDate(date);
                        if (date) {
                          closePanel();
                        }
                      }}
                      month={month}
                      onMonthChange={setMonth}
                      locale={ar}
                      dir="rtl"
                      showOutsideDays
                      className="hero-day-picker"
                      classNames={{
                        months: "w-full",
                        month: "w-full",
                        caption: "mb-3 flex items-center justify-between px-2",
                        caption_label: "text-xl font-bold text-[#102A46]",
                        nav: "flex items-center gap-2",
                        button_previous: "h-8 w-8 rounded-full text-[#415368] hover:bg-[#EFF4F8]",
                        button_next: "h-8 w-8 rounded-full text-[#415368] hover:bg-[#EFF4F8]",
                        head_row: "grid grid-cols-7 text-center text-[12px] font-bold text-[#8EA0B5]",
                        head_cell: "py-2",
                        row: "mt-1 grid grid-cols-7",
                        cell: "flex items-center justify-center",
                        day: "h-10 w-10 rounded-full text-[16px] font-semibold text-[#203247] hover:bg-[#EEF3F8]",
                        day_today: "font-extrabold",
                        day_selected: "bg-[#0071BC] text-white hover:bg-[#0071BC]",
                        day_outside: "text-[#B8C3CE]",
                      }}
                    />
                  </div>
                ) : null}
              </div>
            </div>

            <div className="space-y-4 pt-2" dir="rtl">
              <fieldset className="flex flex-wrap items-center justify-start gap-x-6 gap-y-3 border-none p-0" dir="rtl">
                <legend className="sr-only">خيارات إضافية</legend>
                {options.map((option) => (
                  <label
                    key={option.id}
                    htmlFor={option.id}
                    className="inline-flex cursor-pointer items-center gap-2 text-[14px] font-medium text-[#1A2C40]"
                  >
                    <input
                      id={option.id}
                      name="extra-options"
                      type="checkbox"
                      checked={extras[option.id] ?? option.checked}
                      onChange={() => toggleExtra(option.id)}
                      className="h-3.5 w-3.5 accent-[#0071BC]"
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </fieldset>

              <div className="flex w-full justify-start">
                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-[#0071BC] px-8 text-[14px] font-medium text-white transition hover:bg-[#0065A8] lg:h-12 lg:w-auto lg:min-w-[114px] lg:rounded-lg"
                >
                  بحث
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
