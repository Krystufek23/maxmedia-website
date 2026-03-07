"use client";

import Image from "next/image";
import { Section, SectionTitle, Card } from "../ui";

interface TeamMember {
  name: string;
  position: string;
  quote?: string;
  image: string;
  isCore?: boolean;
}

const coreTeam: TeamMember[] = [
  {
    name: "Kryštof Šabacký",
    position: "Director",
    quote: "PR nás baví! Neděláme z PR vědu a máme výsledky.",
    image: "/images/team/krystof-sabacky.jpeg",
    isCore: true,
  },
  {
    name: "Monika Netřeba",
    position: "PR & Content Manager",
    quote: "Říká vám to něco? Nám ano!",
    image: "/images/team/monika-netreba.jpeg",
    isCore: true,
  },
  {
    name: "Daniela Pokorná",
    position: "PR & Social Manager",
    quote: "Ale hlavně máme kontakty!",
    image: "/images/team/daniela-pokorna.png",
    isCore: true,
  },
];

const specialists: TeamMember[] = [
  {
    name: "Adriana Suská",
    position: "Social Performance",
    image: "/images/team/adriena-suska.jpeg",
  },
  {
    name: "Jan Vlášek",
    position: "Extrémní specialista",
    image: "/images/team/jan-vlasek-105825.jpg",
  },
  {
    name: "Jakub Uksa",
    position: "Grafika (Kubula/Cubic)",
    image: "/images/team/jakub_uksa.webp",
  },
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <Card className="text-center group overflow-hidden" padding="none">
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Quote overlay */}
        {member.quote && (
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-white text-sm italic">&quot;{member.quote}&quot;</p>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
        <p className="text-primary font-medium text-sm">{member.position}</p>
      </div>
    </Card>
  );
}

export function Team() {
  return (
    <Section id="tym" background="light">
      {/* Quote */}
      <div className="text-center mb-16">
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 italic">
          &quot;Silné PR nedělá logo agentury.{" "}
          <span className="text-primary">Dělají ho lidé.</span>&quot;
        </blockquote>
      </div>

      <SectionTitle
        title="Náš tým"
        subtitle="Náš tým stojí na zkušenosti, sehranosti a odbornosti. Umíme obsáhnout každodenní operativu i strategické řízení komunikace. A když je potřeba, sáhneme i po ověřených externích specialistech a kontaktech."
      />

      {/* Core Team */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-gray-600 text-center mb-6">
          Core tým
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {coreTeam.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>

      {/* Specialists */}
      <div>
        <h3 className="text-xl font-semibold text-gray-600 text-center mb-6">
          Specialisté
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {specialists.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </Section>
  );
}
