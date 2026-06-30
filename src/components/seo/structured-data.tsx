import { SITE } from "@/lib/constants";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",

    name: "SMKIT Ushuluddin",

    url: SITE.siteUrl,

    logo: `${SITE.siteUrl}/logos/logo.svg`,

    email: SITE.email,

    telephone: "+6282350182358",

    identifier: {
      "@type": "PropertyValue",
      propertyID: "NPSN",
      value: SITE.npsn,
    },

    sameAs: [SITE.instagramUrl, SITE.youtubeUrl],

    address: {
      "@type": "PostalAddress",
      streetAddress: "Tambak Anyar Ilir",
      addressLocality: "Martapura Timur",
      addressRegion: "Kalimantan Selatan",
      postalCode: "70615",
      addressCountry: "ID",
    },

    description:
      "SMKIT Ushuluddin adalah sekolah kejuruan berbasis pesantren dengan Konsentrasi Keahlian Bisnis Digital di Kabupaten Banjar.",

    accreditation: "Terakreditasi BAN-PDM",

    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "IDR",
      description: "Gratis biaya pendaftaran dan SPP bulanan.",
    },
  };

  const jsonLd = JSON.stringify(schema).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}
