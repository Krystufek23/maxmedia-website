"use client";

import Image from "next/image";
import { Container, Button } from "../ui";

export function Hero() {
  return (
    <section
      id="uvod"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-gray-900 to-dark">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary">30 let</span> zkušeností.
              <br />
              Moderní PR bez starých návyků.
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Spojujeme osvědčené know-how s AI, rychlostí a přesností.
            </p>

            <p className="text-lg text-gray-400 mb-8 max-w-xl">
              Nehrajeme si na velkou agenturu — odvádíme velkou práci v chytrém
              butikovém prostředí. Bez zbytečné omáčky. S důrazem na výsledek
              a konzultantský přístup.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="#sluzby" size="lg">
                Naše služby
              </Button>
              <Button href="#kontakt" variant="outline" size="lg">
                Kontaktujte nás
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-1">
                <div className="relative rounded-3xl overflow-hidden">
                  <Image
                    src="/images/hero-max.png"
                    alt="maXmedia — FMX Gladiator Games"
                    width={1916}
                    height={1284}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/30 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#cisla" className="text-white/50 hover:text-white transition-colors">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
