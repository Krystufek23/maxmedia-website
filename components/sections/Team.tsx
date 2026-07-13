"use client";

import Image from "next/image";
import { Section, SectionTitle, Card } from "../ui";

interface TeamMember {
  name: string;
  position: string;
  quote?: string;
  image?: string;
  initials?: string;
  isCore?: boolean;
}

const coreTeam: TeamMember[] = [
  {
    name: "Kryštof Šabacký",
    position: "Director",
    quote: "PR nás baví! Neděláme z PR vědu a máme výsledky.",
    image: "/images/team/krystof.png",
    isCore: true,
  },
  {
    name: "Monika Netřeba",
    position: "PR & Content Manager",
    quote: "Máme kontakty, dokážeme si poradit.",
    image: "/images/team/monika.png",
    isCore: true,
  },
  {
    name: "Jan Vlášek",
    position: "Kreativa, content, social",
    quote: "Baví nás to a každá výzva má řešení a nic není extrém.",
    image: "/images/team/jan-vlasek.png",
    isCore: true,
  },
  {
    name: "Marlene Lašová",
    position: "Novozélandská spojka",
    quote: "Kdo má pobočku na Novém Zélandu.",
    image: "/images/team/marlene.png",
    isCore: true,
  },
];

const specialists: TeamMember[] = [
  {
    name: "Adriana Suská",
    position: "Social Performance",
    image: "/images/team/adriana.png",
  },
  {
    name: "Jakub Uksa",
    position: "Grafika",
    image: "/images/team/jakub-uksa.png",
  },
  {
    name: "Petr Homolka",
    position: "PPC specialist",
    image: "/images/team/petr-homolka.png",
  },
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <Card className="text-center group overflow-hidden" padding="none">
      {/* Image / Initials */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl md:text-7xl font-bold text-gray-500 select-none transition-colors duration-500 group-hover:text-primary">
              {member.initials ?? member.name.charAt(0)}
            </span>
          </div>
        )}
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
        subtitle="Náš tým stojí na zkušenostech, sehranosti a odbornosti. Umíme obsáhnout každodenní operativu i strategické řízení komunikace. A když je potřeba, sáhneme i po ověřených externích specialistech."
      />

      {/* Core Team */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-gray-600 text-center mb-6">
          Core tým
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto">
          {specialists.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </Section>
  );
}
