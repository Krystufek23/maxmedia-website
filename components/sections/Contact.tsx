"use client";

import { Section, SectionTitle, Card } from "../ui";

export function Contact() {
  return (
    <Section id="kontakt" background="gradient">
      <SectionTitle
        title="Kontaktujte nás"
        subtitle="Máte projekt, který potřebuje podporu? Ozvěte se nám a probereme, jak vám můžeme pomoci."
        light
      />

      <div className="max-w-3xl mx-auto space-y-8">
        {/* Main Contact */}
        <Card className="bg-white/10 backdrop-blur-sm border border-white/20" hover={false}>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <div className="text-white">
              <h3 className="text-xl font-bold mb-1">Kryštof Šabacký</h3>
              <p className="text-gray-300 mb-3">Director</p>
              <div className="space-y-2">
                <a
                  href="mailto:krystof@maxmediapr.cz"
                  className="flex items-center gap-2 text-primary hover:text-primary-light transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  krystof@maxmediapr.cz
                </a>
                <a
                  href="tel:+420604691147"
                  className="flex items-center gap-2 text-primary hover:text-primary-light transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +420 604 691 147
                </a>
              </div>
            </div>
          </div>
        </Card>

        {/* Company Info */}
        <Card className="bg-white/10 backdrop-blur-sm border border-white/20" hover={false}>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className="text-white">
              <h3 className="text-xl font-bold mb-1">maXmedia s.r.o.</h3>
              <p className="text-gray-300">
                U Hráze 344/1
                <br />
                100 00 Praha 10 – Strašnice
              </p>
              <a
                href="mailto:info@maxmediapr.cz"
                className="flex items-center gap-2 mt-3 text-primary hover:text-primary-light transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                info@maxmediapr.cz
              </a>
            </div>
          </div>
        </Card>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <span className="text-gray-400">Sledujte nás:</span>
          <a
            href="https://linkedin.com/company/maxmediapr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </Section>
  );
}
