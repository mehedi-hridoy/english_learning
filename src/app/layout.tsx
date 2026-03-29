import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { localeDirection, type Locale } from "@/i18n/config";

const graphikArabic = localFont({
  src: [
    {
      path: "../assets/font/graphik-arabic/GraphikArabic-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/font/graphik-arabic/GraphikArabic-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/font/graphik-arabic/GraphikArabic-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/font/graphik-arabic/GraphikArabic-Semibold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/font/graphik-arabic/GraphikArabic-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/font/graphik-arabic/GraphikArabic-Black.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-graphik-arabic",
  display: "swap",
});

const activeLocale: Locale = "ar";

export const metadata: Metadata = {
  title: "Course English",
  description: "Arabic-first educational platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={activeLocale} dir={localeDirection[activeLocale]}>
      <body className={`${graphikArabic.variable} antialiased`}>{children}</body>
    </html>
  );
}
