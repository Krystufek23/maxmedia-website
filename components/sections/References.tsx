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

const britDetail: CaseStudyDetail = {
  title: "Brit — Public Relations 2025",
  subtitle:
    "Dlouhodobá PR spolupráce s prémiovou značkou krmiv pro psy a kočky VAFO Praha.",
  metrics: [
    { label: "Kumulovaný zásah", value: "28,4 mio" },
    { label: "PR výstupů", value: "240" },
    { label: "PR hodnota (AVE)", value: "31,4 mio Kč" },
    { label: "Inzertní hodnota", value: "18,1 mio Kč" },
  ],
  images: [
    {
      src: "/images/case-studies/brit-metrics.png",
      alt: "Brit — výsledky PR kampaně 2025",
      caption: "Meziroční růst kumulovaného zásahu z 9,7 mio (2022) na 28,4 mio (2025)",
    },
    {
      src: "/images/case-studies/brit-vystupy-1.png",
      alt: "Brit — ukázky mediálních výstupů",
      caption: "TV rozhovory a magazínové výstupy s produktovým portfoliem",
    },
    {
      src: "/images/case-studies/brit-vystupy-2.png",
      alt: "Brit — ukázky mediálních výstupů",
      caption: "Print poradny a odborné články napříč lifestylovými tituly",
    },
  ],
};

const skyrDetail: CaseStudyDetail = {
  title: "Skyr — Social Media 2024",
  subtitle:
    "Kompletní social media management a influencer marketing pro islandský jogurt Skyr od Bohušovické mlékárny.",
  metrics: [
    { label: "Zásah FB & IG", value: "5,14 mio" },
    { label: "Engagement", value: "2,1 mio" },
    { label: "Barterových výstupů", value: "367" },
    { label: "Zásah ambasadorů", value: "1,8 mio" },
  ],
  images: [
    {
      src: "/images/case-studies/skyr-metrics.png",
      alt: "Skyr — výsledky v číslech",
      caption: "Roční kumulativní výsledky sociálních sítí a ambasadorských výstupů",
    },
    {
      src: "/images/case-studies/skyr-aktivity.png",
      alt: "Skyr — aktivity v rámci projektu",
      caption: "Tvorba receptů, spolupráce s influencery a produkce videí",
    },
    {
      src: "/images/case-studies/skyr-content.png",
      alt: "Skyr — ukázky obsahu",
      caption: "Ukázka lifestyle obsahu a produktových kampaní",
    },
  ],
};

const lskDetail: CaseStudyDetail = {
  title: "LEVELSPORTKONCEPT",
  subtitle:
    "Kompletní servis pro prémiového distributora sportovních značek — 15 let růstu, sport od A až do Z.",
  metrics: [
    { label: "Nárůst obratu", value: "10×" },
    { label: "Celkový zásah", value: "44,8 mio" },
    { label: "Mediálních výstupů", value: "800+" },
    { label: "Inzertní hodnota", value: "51,2 mio Kč" },
  ],
  images: [
    { src: "/images/case-studies/lsk-1.png", alt: "LSK — úvod", caption: "15 let růstu prémiového sportovního distributora" },
    { src: "/images/case-studies/lsk-2.png", alt: "LSK — portfolio značek", caption: "Portfolio značek napříč Run, Ski/Outdoor a Bike segmenty" },
    { src: "/images/case-studies/lsk-3.png", alt: "LSK — nárůst obratu", caption: "Nárůst obratu 10× za 10 let (3,12 mio € → 40 mio €)" },
    { src: "/images/case-studies/lsk-4.png", alt: "LSK — marketing values 2025", caption: "Marketingové výsledky maXmedia pro LSK v roce 2025" },
    { src: "/images/case-studies/lsk-5.png", alt: "LSK — winter advertisements", caption: "Zimní inzertní kampaně pro Maloja, Kästle, LEKI a POC" },
    { src: "/images/case-studies/lsk-6.png", alt: "LSK — kampaně", caption: "Kreativa a produktové vizuály pro klíčové značky" },
    { src: "/images/case-studies/lsk-7.png", alt: "LSK — mediální výstupy", caption: "Ukázky mediálních výstupů a spoluprací" },
    { src: "/images/case-studies/lsk-8.png", alt: "LSK — akce a eventy", caption: "Podpora značek na akcích a eventech" },
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
    metric: "28,4 mio zásah",
    hasCaseStudy: true,
    detail: britDetail,
  },
  {
    client: "Skyr",
    result: "Social media management",
    metric: "5,14 mio zásah FB/IG",
    hasCaseStudy: true,
    detail: skyrDetail,
  },
  {
    client: "LEVELSPORTKONCEPT",
    result: "Sport od A až do Z",
    metric: "10× nárůst za 10 let",
    hasCaseStudy: true,
    detail: lskDetail,
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
