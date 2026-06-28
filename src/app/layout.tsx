import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import CountdownBanner from "@/components/layout/countdown-banner";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { SITE } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title:
    "SMKIT Ushuluddin | SMK Bisnis Digital Berbasis Pesantren — Kabupaten Banjar",
  description:
    "SMKIT Ushuluddin, sekolah kejuruan berbasis pesantren di Martapura Timur, Kabupaten Banjar. Konsentrasi Bisnis Digital, gratis SPP, terakreditasi BAN-PDM.",
  keywords: [
    "SMKIT Ushuluddin",
    "SMK Bisnis Digital Banjar",
    "SMK Berbasis Pesantren Kabupaten Banjar",
    "SMK Gratis SPP Kalimantan Selatan",
    "PPDB SMK Banjar 2026",
    "SMK Martapura Timur",
  ],
  openGraph: {
    title: "SMKIT Ushuluddin — Membentuk Generasi Digital yang Berakhlak",
    description:
      "Sekolah kejuruan berbasis pesantren di Kabupaten Banjar. Bisnis Digital + Pembinaan Karakter Islami.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "SMKIT Ushuluddin",
              url: SITE.siteUrl,
              identifier: {
                "@type": "PropertyValue",
                propertyID: "NPSN",
                value: SITE.npsn,
              },
              sameAs: [SITE.instagramUrl],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Martapura Timur",
                addressRegion: "Kabupaten Banjar, Kalimantan Selatan",
                addressCountry: "ID",
              },
              description:
                "SMK Berbasis Pesantren dengan Konsentrasi Bisnis Digital di Kabupaten Banjar, Kalimantan Selatan.",
              accreditation: "Terakreditasi BAN-PDM",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "IDR",
                description: "Gratis Biaya Pendaftaran dan SPP Bulanan",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <CountdownBanner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
