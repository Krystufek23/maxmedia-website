"use client";

import { Section } from "../ui";

const aiTools = [
  {
    name: "ChatGPT",
    color: "from-emerald-400 to-emerald-600",
  },
  {
    name: "Claude",
    color: "from-orange-400 to-orange-600",
  },
  {
    name: "Gemini",
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Perplexity",
    color: "from-cyan-400 to-cyan-600",
  },
];

export function AISection() {
  return (
    <Section background="gradient">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Visual - AI Tools */}
        <div className="order-2 lg:order-1">
          <div className="relative">
            {/* Central orb */}
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full animate-pulse-glow" />
              <div className="absolute inset-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-white">AI</span>
              </div>

              {/* Orbiting tools */}
              {aiTools.map((tool, index) => {
                const angle = (index * 90 - 45) * (Math.PI / 180);
                const radius = 140;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <div
                    key={tool.name}
                    className="absolute w-20 h-20 -translate-x-1/2 -translate-y-1/2 animate-float"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      animationDelay: `${index * 0.5}s`,
                    }}
                  >
                    <div
                      className={`w-full h-full rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-white text-xs font-semibold text-center px-2">
                        {tool.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
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
