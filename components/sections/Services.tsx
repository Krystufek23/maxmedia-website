"use client";

import { useState } from "react";
import { Section, SectionTitle, Card } from "../ui";

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  items?: string[];
}

const services: Service[] = [
  {
    id: "pr",
    title: "Public Relations",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
        />
      </svg>
    ),
    description:
      "Kompletní PR služby od produktového PR přes storytelling až po krizovou komunikaci.",
    items: [
      "Produktové PR",
      "Příběh značky (Storytelling)",
      "Korporátní PR",
      "Krizová komunikace",
    ],
  },
  {
    id: "social",
    title: "Social Media & PPC",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
        />
      </svg>
    ),
    description:
      "Správa sociálních sítí a PPC reklama s přesným cílením pro maximální efektivitu.",
    items: [
      "Správa sociálních sítí",
      "PPC reklama",
      "Facebook & Instagram",
      "Content strategie",
    ],
  },
  {
    id: "influencer",
    title: "Influencer Marketing",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
    description:
      "Propojujeme značky s relevantními influencery pro autentickou komunikaci.",
    items: [
      "Výběr influencerů",
      "Kampaně na míru",
      "Měřitelné výsledky",
      "Síť ověřených spolupracovníků",
    ],
  },
  {
    id: "content",
    title: "Obsah & Kreativa",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
    description:
      "Tiskové zprávy, PR články, grafika a kompletní vizuální obsah pro vaše kampaně.",
    items: [
      "Copywriting",
      "Focení & Natáčení",
      "Grafika & Design",
      "Vizuální identita",
    ],
  },
  {
    id: "events",
    title: "Eventy",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    description:
      "Od malých tiskových konferencí po velké akce, které vyprodávají arény.",
    items: [
      "Tiskové konference",
      "Firemní eventy",
      "Sportovní akce",
      "100+ eventů za sebou",
    ],
  },
];

function ServiceCard({
  service,
  isActive,
  onHover,
}: {
  service: Service;
  isActive: boolean;
  onHover: () => void;
}) {
  return (
    <Card
      className={`cursor-pointer transition-all duration-300 ${
        isActive
          ? "ring-2 ring-primary bg-primary/5"
          : "hover:bg-gray-50"
      }`}
      onMouseEnter={onHover}
      hover={false}
    >
      <div className="flex items-start gap-4">
        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
            isActive
              ? "bg-primary text-white"
              : "bg-primary/10 text-primary"
          }`}
        >
          {service.icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm">{service.description}</p>
        </div>
      </div>
    </Card>
  );
}

export function Services() {
  const [activeService, setActiveService] = useState(services[0].id);

  const active = services.find((s) => s.id === activeService) || services[0];

  return (
    <Section id="sluzby" background="white">
      <SectionTitle
        title="Co umíme"
        subtitle="Netvrdíme, že PR je věda. Vše je jen o zápalu, hravosti, nápadu a v neposlední řadě i kontaktech a zkušenostech. A ty my máme!"
      />

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Service List */}
        <div className="lg:col-span-3 space-y-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isActive={activeService === service.id}
              onHover={() => setActiveService(service.id)}
            />
          ))}
        </div>

        {/* Active Service Details */}
        <div className="lg:col-span-2">
          <div className="sticky top-32 bg-gradient-to-br from-secondary to-gray-800 rounded-3xl p-8 text-white">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
              {active.icon}
            </div>

            <h3 className="text-2xl font-bold mb-4">{active.title}</h3>
            <p className="text-gray-300 mb-6">{active.description}</p>

            {active.items && (
              <ul className="space-y-3">
                {active.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-primary flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 mt-8 text-primary hover:text-primary-light transition-colors font-semibold"
            >
              Máte zájem?
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
