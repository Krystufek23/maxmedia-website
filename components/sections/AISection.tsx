"use client";

import Image from "next/image";
import { Section } from "../ui";

export function AISection() {
  return (
    <Section background="gradient">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Visual - AI Hero */}
        <div className="order-2 lg:order-1">
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-1">
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="/images/ai-hero.jpg"
                  alt="PR driven by AI — pracovní stůl s AI chatem, českým denníkem a plánem kampaně"
                  width={1024}
                  height={1024}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Decorative accents */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/30 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
          </div>
        </div>

        {/* Text Content */}
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            PR driven by <span className="text-primary">AI</span>
          </h2>

          <div className="space-y-6 text-lg text-gray-300">
            <p>
              AI pro nás není módní slovo, ale pracovní nástroj. Používáme
              profesionální modely jako ChatGPT, Claude, Gemini nebo Perplexity
              a víme, kdy sáhnout po kterém.
            </p>

            <p>
              Díky tomu pracujeme rychleji, přesněji a s větším přesahem — od
              analýz přes obsah až po strategii.
            </p>
          </div>

          {/* Highlight box */}
          <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <p className="text-xl font-semibold text-white">
              AI zrychluje naši práci,{" "}
              <span className="text-primary">zkušenosti rozhodují.</span>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
