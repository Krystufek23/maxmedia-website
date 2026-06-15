"use client";

import Image from "next/image";
import { Section } from "../ui";

export function Contacts() {
  return (
    <Section background="white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Kontakty nejsou databáze.
          <br />
          <span className="text-primary">Jsou to vztahy.</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
          Známe novináře, editory i prostředí, ve kterém pracují. Víme, co má
          šanci zaujmout a jak připravit podklady, které dávají smysl.
        </p>

        <p className="text-xl md:text-2xl font-semibold text-gray-900 mb-8">
          Tam kde ostatní ztroskotají,{" "}
          <span className="text-primary">my najdeme do médií cestu.</span>
        </p>

        {/* Media logos */}
        <div className="relative py-8 mb-8">
          <div className="relative w-full max-w-4xl mx-auto">
            <Image
              src="/images/media-logos.jpg"
              alt="Média, se kterými spolupracujeme - Forbes, Vogue, Blesk, DVTV, Deník a další"
              width={1200}
              height={600}
              className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>

        {/* Highlight box */}
        <div className="inline-block p-6 bg-gray-100 rounded-2xl">
          <p className="text-xl font-semibold text-gray-900">
            Díky tomu umíme značkám otevírat dveře,
            <br />
            <span className="text-primary">
              které by jinak zůstaly zavřené.
            </span>
          </p>
        </div>
      </div>
    </Section>
  );
}
