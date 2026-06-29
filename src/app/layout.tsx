import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import "./globals.css";

import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";

import CountdownBanner from "@/components/layout/countdown-banner";
import HideOnPrivacy from "@/components/layout/hide-on-privacy";
import NavbarSwitch from "@/components/layout/navbar-switch";
import Footer from "@/components/layout/footer";
import StructuredData from "../components/seo/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.siteUrl),

  title:
    "SMKIT Ushuluddin | SMK Bisnis Digital Berbasis Pesantren — Kabupaten Banjar",

  description:
    "SMKIT Ushuluddin, sekolah kejuruan berbasis pesantren di Martapura Timur, Kabupaten Banjar. Konsentrasi Bisnis Digital, gratis SPP, terakreditasi BAN-PDM.",

  keywords: [
    "SMKIT Ushuluddin",
    "SMK Bisnis Digital Banjar",
    "SMK Berbasis Pesantren Kabupaten Banjar",
    "SMK Gratis SPP Kalimantan Selatan",
    "PPDB SMK Banjar",
    "SMK Martapura Timur",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "id_ID",

    title: "SMKIT Ushuluddin — Membentuk Generasi Digital yang Berakhlak",

    description:
      "Sekolah kejuruan berbasis pesantren di Kabupaten Banjar. Konsentrasi Bisnis Digital dengan pembinaan karakter Islami.",

    url: SITE.siteUrl,

    siteName: "SMKIT Ushuluddin",

    images: [
      {
        url: "/documents/og-image.svg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={cn("h-full", inter.variable)}>
      <head>
        <StructuredData />

        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);
              t.async=1;
              t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xelc7xv89q");
          `}
        </Script>
      </head>

      <body className="min-h-full flex flex-col bg-background text-foreground">
        <HideOnPrivacy>
          <CountdownBanner />
        </HideOnPrivacy>

        <NavbarSwitch />

        {children}

        <Footer />
      </body>
    </html>
  );
}
