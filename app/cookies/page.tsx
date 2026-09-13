import type { Metadata } from "next";
import Link from "next/link";
import { Navigation, Footer } from "@/components/layout";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Zásady používání cookies | maXmedia",
  description:
    "Informace o používání cookies na webu maXmedia — technické a analytické (Google Analytics) cookies s Vaším souhlasem.",
};

const cookieTable = [
  {
    name: "cookie_consent",
    type: "Technické",
    purpose: "Uložení Vašeho souhlasu s cookies",
    expiration: "trvale (do vymazání)",
  },
  {
    name: "_ga",
    type: "Analytické",
    purpose: "Google Analytics — rozlišení uživatelů",
    expiration: "2 roky",
  },
  {
    name: "_ga_*",
    type: "Analytické",
    purpose: "Google Analytics — stav relace",
    expiration: "2 roky",
  },
];

export default function CookiesPage() {
  return (
    <>
      <Navigation />

      <main className="pt-32 pb-20">
        <Container size="narrow">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark mb-8 transition-colors"
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
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Zpět na hlavní stránku
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Zásady používání cookies
          </h1>
          <p className="text-gray-500 mb-8">Platnost od: 13. 9. 2026</p>

          <div className="prose prose-lg max-w-none">
            <h2>1. Kdo jsme</h2>
            <p>
              Provozovatelem tohoto webu je společnost{" "}
              <strong>maXmedia s.r.o.</strong>, se sídlem U Hráze 344/1, 100 00
              Praha 10 – Strašnice, IČ: 27214583. Správcem osobních údajů je
              Kryštof Šabacký.
            </p>

            <h2>2. Co jsou cookies</h2>
            <p>
              Cookies jsou malá textová data, která webový prohlížeč ukládá do
              Vašeho zařízení při návštěvě webové stránky. Slouží k tomu, aby
              si stránka zapamatovala Vaše preference nebo zajišťovala
              správnou funkci stránek.
            </p>

            <h2>3. Jaké cookies používáme</h2>
            <p>Používáme dvě kategorie cookies:</p>
            <h3>Technické (nezbytné) cookies</h3>
            <p>
              Jsou nutné pro správné zobrazení stránek v prohlížeči. Ukládají
              například Vaši volbu souhlasu s cookies. Nepřenáší žádné osobní
              údaje, nesledují Vaše chování mimo tento web a nejsou sdíleny se
              třetími stranami.
            </p>
            <h3>Analytické cookies (Google Analytics)</h3>
            <p>
              Pomáhají nám měřit návštěvnost webu a zlepšovat obsah.
              Používáme{" "}
              <strong>Google Analytics 4</strong> s technologií{" "}
              <strong>Google Consent Mode v2</strong>: bez Vašeho souhlasu se
              žádná analytická data neshromažďují. IP adresy jsou navíc
              anonymizovány.
            </p>
            <p>
              Analytické cookies aktivujeme pouze tehdy, pokud kliknete na
              tlačítko <em>Přijmout</em> v úvodním banneru cookies.
            </p>

            <h2>4. Přehled cookies</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 text-left">Název</th>
                    <th className="px-4 py-3 text-left">Typ</th>
                    <th className="px-4 py-3 text-left">Účel</th>
                    <th className="px-4 py-3 text-left">Expirace</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieTable.map((cookie) => (
                    <tr key={cookie.name} className="border-b">
                      <td className="px-4 py-3 font-mono text-sm">
                        {cookie.name}
                      </td>
                      <td className="px-4 py-3">{cookie.type}</td>
                      <td className="px-4 py-3">{cookie.purpose}</td>
                      <td className="px-4 py-3">{cookie.expiration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>5. Osobní údaje a formuláře</h2>
            <p>
              Tento web neobsahuje žádné kontaktní formuláře ani jiné
              mechanismy pro přímý sběr osobních údajů. Google Analytics
              zpracovává technická data (typ prohlížeče, zdroj návštěvy,
              chování na webu) v anonymizované podobě.
            </p>

            <h2>6. Třetí strany</h2>
            <p>
              Analytická data zpracovává společnost <strong>Google LLC</strong>{" "}
              (USA) jakožto zpracovatel v souladu se{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                zásadami ochrany soukromí Google
              </a>
              . Žádné jiné třetí strany na webu neběží (bez Facebook Pixelu,
              reklamních sítí a dalších sledovacích nástrojů).
            </p>

            <h2>7. Změna nebo odvolání souhlasu</h2>
            <p>
              Svůj souhlas můžete kdykoli změnit nebo odvolat kliknutím na
              odkaz <strong>Nastavení cookies</strong> v patičce webu. Případně
              můžete cookies spravovat nebo vymazat přímo v nastavení
              prohlížeče. Upozorňujeme, že vypnutí technických cookies může
              omezit správnou funkci některých částí webu.
            </p>

            <h2>8. Změny tohoto dokumentu</h2>
            <p>
              Tento dokument můžeme průběžně aktualizovat. Datum poslední
              aktualizace je uvedeno v záhlaví dokumentu.
            </p>

            <h2>9. Kontakt</h2>
            <p>
              Pokud máte dotazy týkající se tohoto dokumentu, kontaktujte nás:
            </p>
            <p>
              <strong>maXmedia s.r.o.</strong>
              <br />
              U Hráze 344/1, 100 00 Praha 10 – Strašnice
              <br />
              Správce údajů: Kryštof Šabacký
              <br />
              E-mail:{" "}
              <a href="mailto:info@maxmediapr.cz" className="text-primary">
                info@maxmediapr.cz
              </a>
            </p>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
