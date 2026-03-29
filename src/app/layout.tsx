import type { Metadata } from "next";
import { Cairo } from "next/font/google";

import "./globals.css";
import { localeDirection, type Locale } from "@/i18n/config";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
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
      <body className={`${cairo.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
