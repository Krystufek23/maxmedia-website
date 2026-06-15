"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Section,
  SectionTitle,
  Card,
  CaseStudyModal,
  type CaseStudyDetail,
} from "../ui";

interface CaseStudy {
  client: string;
  result: string;
  metric: string;
  hasCaseStudy?: boolean;
  detail?: CaseStudyDetail;
}

interface ClientLogo {
  name: string;
  category: string;
  logo: string;
  hasCaseStudy?: boolean;
}

const stihlDetail: CaseStudyDetail = {
  title: "STIHL Timbersports 2019",
  subtitle:
    "Mistrovství světa v dřevorubeckém sportu v pražské O2 Areně — kompletní PR a komunikační podpora.",
  metrics: [
    { label: "Mediální zásah", value: "15 mio" },
    { label: "Mediálních výstupů", value: "207" },
    { label: "PR value", value: "27 mio Kč" },
    { label: "Aréna", value: "Vyprodáno" },
  ],
  images: [
    {
      src: "/images/case-studies/stihl-hero.png",
      alt: "STIHL Timbersports — vyprodaná O2 Arena",
      caption: "Vyprodaná O2 Arena během finále mistrovství světa",
    },
    {
      src: "/images/case-studies/stihl-media.png",
      alt: "STIHL Timbersports — mediální výstupy",
      caption: "Výběr z 207 mediálních výstupů napříč TV, printem a online",
    },
    {
      src: "/images/case-studies/stihl-ooh.png",
      alt: "STIHL Timbersports — out-of-home kampaň",
      caption: "Out-of-home kampaň v Praze",
    },
  ],
};

const caseStudies: CaseStudy[] = [
  {
    client: "STIHL Timbersports 2019",
    result: "Vyprodaná aréna, mediální zásah 15 mio, 207 výstupů",
    metric: "27 mio PR value",
    hasCaseStudy: true,
    detail: stihlDetail,
  },
  {
    client: "Brit",
    result: "Kompletní PR kampaň",
    metric: "12,6 mio mediální zásah",
    hasCaseStudy: false,
  },
  {
    client: "Skyr",
    result: "Social media management",
    metric: "1 mio zásah za Q1",
    hasCaseStudy: false,
  },
  {
    client: "LEVELSPORTKONCEPT",
    result: "Sport od A až do Z",
    metric: "Dlouhodobá spolupráce",
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

const clientLogos: ClientLogo[] = [
  // Sport
  { name: "LEKI", category: "sport", logo: "/images/logos/SPORT/Leki_black.svg" },
  { name: "Maloja", category: "sport", logo: "/images/logos/SPORT/Maloja_2020_black.svg" },
  { name: "Level Sport Koncept", category: "sport", logo: "/images/logos/SPORT/max_levelsportkoncept.jpg" },
  { name: "Mizuno", category: "sport", logo: "/images/logos/SPORT/Mizuno_white.svg" },
  { name: "POC", category: "sport", logo: "/images/logos/SPORT/POC_white.svg" },
  { name: "GIANT", category: "sport", logo: "/images/logos/SPORT/giant.png" },
  { name: "Superior", category: "sport", logo: "/images/logos/SPORT/superior.webp" },
  { name: "Kästle", category: "sport", logo: "/images/logos/SPORT/kastle.png" },

  // Pet & FMCG
  { name: "Monster Energy", category: "pet-fmcg", logo: "/images/logos/PET-FMCG/monster_energy_logo.png" },
  { name: "VAFO Brit", category: "pet-fmcg", logo: "/images/logos/PET-FMCG/brit.png", hasCaseStudy: true },
  { name: "Skyr", category: "pet-fmcg", logo: "/images/logos/PET-FMCG/skyr.png", hasCaseStudy: true },
  { name: "Carnilove", category: "pet-fmcg", logo: "/images/logos/PET-FMCG/carnilove.png" },
  { name: "Bohušovická / Protein", category: "pet-fmcg", logo: "/images/logos/PET-FMCG/bohusovicka.png" },
  { name: "BusyB", category: "pet-fmcg", logo: "/images/logos/PET-FMCG/busyb.png" },
  { name: "Löfbergs", category: "pet-fmcg", logo: "/images/logos/PET-FMCG/lofbergs.png" },

  // Hobby & Outdoor
  { name: "Toi Toi", category: "hobby-outdoor", logo: "/images/logos/HOBBY-OUTDOOR/max_toitoi.jpg" },
  { name: "STIHL", category: "hobby-outdoor", logo: "/images/logos/HOBBY-OUTDOOR/stihl.png", hasCaseStudy: true },
  { name: "Hydrapack", category: "hobby-outdoor", logo: "/images/logos/HOBBY-OUTDOOR/hydrapack.png" },
  { name: "Teva", category: "hobby-outdoor", logo: "/images/logos/HOBBY-OUTDOOR/teva.png" },
  { name: "Viking", category: "hobby-outdoor", logo: "/images/logos/HOBBY-OUTDOOR/viking.png" },
  { name: "VEKA", category: "hobby-outdoor", logo: "/images/logos/HOBBY-OUTDOOR/veka.png" },
  { name: "Xyladecor", category: "hobby-outdoor", logo: "/images/logos/HOBBY-OUTDOOR/xyladecor.avif" },

  // Moto & Elektro
  { name: "First Green", category: "moto-elektro", logo: "/images/logos/MOTO-ELEKTRO/firstgreen.jpg" },
  { name: "Mini", category: "moto-elektro", logo: "/images/logos/MOTO-ELEKTRO/max_mini.jpg" },
  { name: "Dexim", category: "moto-elektro", logo: "/images/logos/MOTO-ELEKTRO/dexim.png" },
  { name: "iRobot", category: "moto-elektro", logo: "/images/logos/MOTO-ELEKTRO/irobot.png" },

  // Akce
  { name: "Movember", category: "akce", logo: "/images/logos/AKCE/max_movember.jpg" },
  { name: "Praha", category: "akce", logo: "/images/logos/AKCE/max_praha.jpg" },
  { name: "The Color Run", category: "akce", logo: "/images/logos/AKCE/color-run.png" },
  { name: "FMX Gladiator Games", category: "akce", logo: "/images/logos/AKCE/gladiator-games.png" },
  { name: "Lyže", category: "akce", logo: "/images/logos/AKCE/max_lyze.jpg" },

  // E-shop
  { name: "ageo", category: "e-shop", logo: "/images/logos/E-SHOP/ageo.png" },
  { name: "naboso", category: "e-shop", logo: "/images/logos/E-SHOP/naboso.png" },
  { name: "Angry Beards", category: "e-shop", logo: "/images/logos/E-SHOP/angry-beards.png" },

  // Reality
  { name: "Lexxus Norton", category: "reality", logo: "/images/logos/REALITY/lexxusnorton.png" },
  { name: "Rokytná Resort", category: "reality", logo: "/images/logos/REALITY/rokytnaresort.png" },
  { name: "Arbol Real Estate", category: "reality", logo: "/images/logos/REALITY/arbol.png" },
  { name: "Park Jeřice", category: "reality", logo: "/images/logos/REALITY/jerice-park.png" },
];

function CaseStudyCard({
  study,
  onOpen,
}: {
  study: CaseStudy;
  onOpen: () => void;
}) {
  const clickable = study.hasCaseStudy && !!study.detail;

  return (
    <Card
      className={`text-center ${clickable ? "cursor-pointer group" : ""}`}
      onClick={clickable ? onOpen : undefined}
    >
      <div className="relative">
        <h4 className="text-lg font-bold text-gray-900 mb-2">{study.client}</h4>
        <p className="text-gray-600 text-sm mb-4">{study.result}</p>
        <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
          <span className="text-primary font-bold">{study.metric}</span>
        </div>

        {clickable && (
          <div className="mt-4 flex items-center justify-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Zobrazit case study</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
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
  const [openStudy, setOpenStudy] = useState<CaseStudyDetail | null>(null);

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
            <CaseStudyCard
              key={study.client}
              study={study}
              onOpen={() => study.detail && setOpenStudy(study.detail)}
            />
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

      <CaseStudyModal
        isOpen={!!openStudy}
        study={openStudy}
        onClose={() => setOpenStudy(null)}
      />
    </Section>
  );
}
