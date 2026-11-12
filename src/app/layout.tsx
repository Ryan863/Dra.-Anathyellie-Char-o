import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/config/site-data";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  keywords: [
    "Dra. Anathyellie Charão",
    "Harmonização Facial Santa Cruz do Sul",
    "Tratamento de Melasma Santa Cruz do Sul",
    "Botox Santa Cruz do Sul",
    "Bioestimuladores de Colágeno",
    "Saúde Integrativa",
    "Limpeza de Pele dōTERRA",
    "Biomédica Esteta Santa Cruz do Sul",
  ],
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    type: "website",
    locale: "pt_BR",
    siteName: SITE_CONFIG.brandName,
    images: [
      {
        url: "/hero-desktop.jpg",
        width: 1200,
        height: 675,
        alt: "Dra. Anathyellie Charão — Harmonização Facial e Saúde Integrativa em Santa Cruz do Sul",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: ["/hero-desktop.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["HealthAndBeautyBusiness", "LocalBusiness"],
  name: "Dra. Anathyellie Charão - Harmonização Facial",
  description: SITE_CONFIG.description,
  image: "/hero-desktop.jpg",
  telephone: SITE_CONFIG.phoneInternational,
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_CONFIG.address.street,
    addressLocality: SITE_CONFIG.address.city,
    addressRegion: SITE_CONFIG.address.state,
    postalCode: SITE_CONFIG.address.postalCode,
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    address: SITE_CONFIG.address.plusCode,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "17:30",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE_CONFIG.rating.score,
    reviewCount: SITE_CONFIG.rating.count,
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [SITE_CONFIG.instagramUrl, SITE_CONFIG.facebookUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${plusJakarta.variable}`}
    >
      <body className="font-sans bg-[#F7F3ED] text-[#26211F] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

