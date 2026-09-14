const SITE_URL = "https://www.maxmediapr.cz";

/**
 * Structured data (Schema.org JSON-LD) so search engines and AI assistants
 * can identify the company, its services and location without parsing prose.
 */
const organization = {
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: "maXmedia",
  legalName: "maXmedia s.r.o.",
  alternateName: "maXmedia PR",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  foundingDate: "2005",
  identifier: {
    "@type": "PropertyValue",
    propertyID: "IČO",
    value: "27214583",
  },
  description:
    "Butiková PR agentura v Praze, založená v roce 2005; zakladatel Kryštof Šabacký má 30 let zkušeností v PR. Public relations, produktové PR, krizová komunikace, sportovní PR, správa sociálních sítí (Facebook, Instagram, LinkedIn), influencer marketing a obsah. AI používáme jako běžný pracovní nástroj.",
  slogan: "PR driven by AI",
  email: "info@maxmediapr.cz",
  telephone: "+420604691147",
  address: {
    "@type": "PostalAddress",
    streetAddress: "U Hráze 344/1",
    addressLocality: "Praha 10 – Strašnice",
    postalCode: "100 00",
    addressCountry: "CZ",
  },
  areaServed: { "@type": "Country", name: "Czech Republic" },
  founder: {
    "@type": "Person",
    name: "Kryštof Šabacký",
    jobTitle: "Director",
    description: "30 let zkušeností v public relations.",
  },
  knowsLanguage: ["cs", "en"],
  sameAs: ["https://linkedin.com/company/maxmediapr"],
  knowsAbout: [
    "public relations",
    "produktové PR",
    "krizová komunikace",
    "media relations",
    "sportovní PR",
    "PR pro pet segment",
    "PR pro e-shopy a menší firmy",
    "správa sociálních sítí",
    "influencer marketing",
    "content marketing",
    "využití AI v PR a komunikaci",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Služby maXmedia",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Public Relations",
          description:
            "Kompletní PR služby od produktového PR přes storytelling a media relations až po krizovou komunikaci.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sportovní PR",
          description:
            "PR pro sportovní značky a akce – reference STIHL Timbersports (O2 Arena), FMX Gladiator Games, LEVELSPORTKONCEPT, Giant.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Social Media & PPC",
          description:
            "Správa Facebooku, Instagramu a LinkedInu a PPC reklama s přesným cílením.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Influencer Marketing",
          description:
            "Výběr, oslovení a vyhodnocení influencerů – včetně objevování nastupujících tvůrců dřív, než jsou známí.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Obsah & Kreativa",
          description:
            "Tiskové zprávy, PR články, grafika a kompletní vizuální obsah pro kampaně.",
        },
      },
    ],
  },
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "maXmedia",
  inLanguage: "cs",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [organization, website],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here: the data is static and authored in-repo.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
