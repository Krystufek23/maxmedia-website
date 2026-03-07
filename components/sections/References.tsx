"use client";

import { useState } from "react";
import Image from "next/image";
import { Section, SectionTitle, Card } from "../ui";

interface CaseStudy {
  client: string;
  result: string;
  metric: string;
  hasCaseStudy?: boolean;
}

interface ClientLogo {
  name: string;
  category: string;
  logo: string;
  hasCaseStudy?: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    client: "STIHL Timbersports 2019",
    result: "Vyprodaná aréna, zásah 15 mio, 207 výstupů",
    metric: "27 mio PR value",
    hasCaseStudy: true,
  },
  {
    client: "Brit",
    result: "Kompletní PR kampaň",
    metric: "12,6 mio mediální zásah",
    hasCaseStudy: true,
  },
  {
    client: "Skyr",
    result: "Social media management",
    metric: "1 mio zásah za Q1",
    hasCaseStudy: true,
  },
  {
    client: "Angry Beards & BusyB",
    result: "Celoroční PR podpora",
    metric: "235 výstupů za rok",
    hasCaseStudy: false,
  },
];

const categories = [
  { id: "all", label: "Všechny" },
  { id: "sport", label: "Sport" },
  { id: "pet-fmcg", label: "Pet & FMCG" },
  { id: "hobby-outdoor", label: "Hobby & Outdoor" },
  { id: "moto-elektro", label: "Moto & Elektro" },
  { id: "akce", label: "Akce" },
  { id: "e-shop", label: "E-shop" },
  { id: "reality", label: "Reality" },
];

// Client logos organized by category
const clientLogos: ClientLogo[] = [
  // Sport
  { name: "LEKI", category: "sport", logo: "/images/logos/SPORT/Leki_black.svg" },
  { name: "Maloja", category: "sport", logo: "/images/logos/SPORT/Maloja_2020_black.svg" },
  { name: "Level Sport Koncept", category: "sport", logo: "/images/logos/SPORT/max_levelsportkoncept.jpg" },
  { name: "Mizuno", category: "sport", logo: "/images/logos/SPORT/Mizuno_white.svg" },
  { name: "POC", category: "sport", logo: "/images/logos/SPORT/POC_white.svg" },
  // Pet & FMCG
  { name: "Monster Energy", category: "pet-fmcg", logo: "/images/logos/PET-FMCG/monster_energy_logo.png" },
  { name: "VAFO Brit", category: "pet-fmcg", logo: "/images/logos/PET-FMCG/slide11-image88.png", hasCaseStudy: true },
  { name: "Skyr", category: "pet-fmcg", logo: "/images/logos/PET-FMCG/slide11-image90.png", hasCaseStudy: true },
  // Hobby & Outdoor
  { name: "Toi Toi", category: "hobby-outdoor", logo: "/images/logos/HOBBY-OUTDOOR/max_toitoi.jpg" },
  { name: "STIHL", category: "hobby-outdoor", logo: "/images/logos/HOBBY-OUTDOOR/slide11-image84.png", hasCaseStudy: true },
  // Moto & Elektro
  { name: "First Green", category: "moto-elektro", logo: "/images/logos/MOTO-ELEKTRO/firstgreen.jpg" },
  { name: "Mini", category: "moto-elektro", logo: "/images/logos/MOTO-ELEKTRO/max_mini.jpg" },
  // Events/Akce (including historical events)
  { name: "Movember", category: "akce", logo: "/images/logos/AKCE/max_movember.jpg" },
  { name: "Praha", category: "akce", logo: "/images/logos/AKCE/max_praha.jpg" },
  { name: "The Color Run", category: "akce", logo: "/images/logos/AKCE/slide13-image120.png" },
  { name: "FMX Gladiator", category: "akce", logo: "/images/logos/AKCE/slide13-image121.png" },
  // E-shop
  { name: "E-shop 1", category: "e-shop", logo: "/images/logos/E-SHOP/slide12-image114.png" },
  { name: "E-shop 2", category: "e-shop", logo: "/images/logos/E-SHOP/slide12-image117.png" },
  // Reality
  { name: "Reality 1", category: "reality", logo: "/images/logos/REALITY/slide12-image111.png" },
  { name: "Reality 2", category: "reality", logo: "/images/logos/REALITY/slide12-image113.png" },
];

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Card
      className={`text-center ${study.hasCaseStudy ? "cursor-pointer group" : ""}`}
    >
      <div className="relative">
        <h4 className="text-lg font-bold text-gray-900 mb-2">
          {study.client}
        </h4>
        <p className="text-gray-600 text-sm mb-4">{study.result}</p>
        <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
          <span className="text-primary font-bold">{study.metric}</span>
        </div>

        {/* Case study indicator */}
        {study.hasCaseStudy && (
          <div className="mt-4 flex items-center justify-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Zobrazit case study</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>
    </Card>
  );
}

function LogoCard({ client }: { client: ClientLogo }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="aspect-[3/2] flex items-center justify-center p-4">
      {imageError ? (
        <span className="text-xs text-gray-400">{client.name}</span>
      ) : (
        <div className="relative w-full h-full">
          <Image
            src={client.logo}
            alt={client.name}
            fill
            className="object-contain"
            onError={() => setImageError(true)}
          />
        </div>
      )}
    </div>
  );
}

export function References() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredLogos =
    activeCategory === "all"
      ? clientLogos
      : clientLogos.filter((logo) => logo.category === activeCategory);

  return (
    <Section id="reference" background="white">
      <SectionTitle
        title="Reference"
        subtitle="Podívejte se, s kým spolupracujeme a jakých výsledků jsme společně dosáhli."
      />

      {/* Case Studies */}
      <div className="mb-16">
        <h3 className="text-xl font-semibold text-gray-600 text-center mb-8">
          Case Studies
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.client} study={study} />
          ))}
        </div>
      </div>

      {/* Client Logos with Filter */}
      <div>
        <h3 className="text-xl font-semibold text-gray-600 text-center mb-8">
          Naše reference
        </h3>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredLogos.map((client, index) => (
            <LogoCard key={`${client.name}-${index}`} client={client} />
          ))}
        </div>

        {filteredLogos.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            V této kategorii zatím nemáme klienty.
          </div>
        )}
      </div>
    </Section>
  );
}
