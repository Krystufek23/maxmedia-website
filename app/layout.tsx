import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import Script from "next/script";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-QGYSVW8K6S";
const SITE_URL = "https://www.maxmediapr.cz";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: "maXmedia | PR agentura s 30 lety zkušeností",
  description:
    "PR agentura maXmedia - 30 let zkušeností, současné PR bez starých návyků. Spojujeme osvědčené know-how s AI, rychlostí a přesností.",
  keywords: [
    "PR agentura",
    "public relations",
    "maXmedia",
    "Praha",
    "krizová komunikace",
    "social media",
    "influencer marketing",
  ],
  authors: [{ name: "maXmedia s.r.o." }],
  openGraph: {
    title: "maXmedia | PR agentura s 30 lety zkušeností",
    description:
      "PR agentura maXmedia - 30 let zkušeností, současné PR bez starých návyků.",
    url: SITE_URL,
    siteName: "maXmedia",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/images/maxmedia-logo.png", alt: "maXmedia" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <head>
        <Script id="gtag-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500,
            });
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
          `}
        </Script>
        <Script
          id="gtag-js"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <JsonLd />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
