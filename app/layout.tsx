import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

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
    url: "https://maxmediapr.cz",
    siteName: "maXmedia",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
