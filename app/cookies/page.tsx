import type { Metadata } from "next";
import Link from "next/link";
import { Navigation, Footer } from "@/components/layout";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Zásady používání cookies | maXmedia",
  description: "Informace o používání cookies na webu maXmedia.",
};

const cookieTable = [
  {
    name: "cookie_consent",
    type: "Nezbytné",
    purpose: "Uložení vašeho souhlasu",
    expiration: "1 rok",
  },
  {
    name: "_ga",
    type: "Analytické",
    purpose: "Google Analytics - rozlišení uživatelů",
    expiration: "2 roky",
  },
  {
    name: "_gid",
    type: "Analytické",
    purpose: "Google Analytics - rozlišení uživatelů",
    expiration: "24 hodin",
  },
  {
    name: "_fbp",
    type: "Marketingové",
    purpose: "Facebook Pixel",
    expiration: "3 měsíce",
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

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Zásady používání cookies
          </h1>

          <div className="prose prose-lg max-w-none">
            <h2>Co jsou cookies</h2>
            <p>
              Cookies jsou malé textové soubory, které se ukládají do vašeho
              prohlížeče při návštěvě webových stránek. Pomáhají nám zajistit
              správné fungování webu a zlepšovat vaši uživatelskou zkušenost.
            </p>

            <h2>Typy cookies, které používáme</h2>

            <h3>1. Nezbytné cookies</h3>
            <ul>
              <li>Zajišťují základní funkce webu</li>
              <li>Nelze je vypnout</li>
              <li>Příklad: zapamatování souhlasu s cookies</li>
            </ul>

            <h3>2. Analytické cookies</h3>
            <ul>
              <li>Pomáhají nám pochopit, jak návštěvníci používají web</li>
              <li>Shromažďují anonymní statistiky</li>
              <li>Příklad: Google Analytics</li>
            </ul>

            <h3>3. Marketingové cookies</h3>
            <ul>
              <li>Slouží k zobrazování relevantní reklamy</li>
              <li>Sledují vaši aktivitu napříč weby</li>
              <li>Příklad: Facebook Pixel, Google Ads</li>
            </ul>

            <h2>Přehled cookies</h2>
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

            <h2>Správa cookies</h2>
            <p>Svůj souhlas s cookies můžete kdykoliv změnit:</p>
            <ul>
              <li>
                Kliknutím na tlačítko &quot;Nastavení cookies&quot; v patičce webu
              </li>
              <li>V nastavení vašeho prohlížeče</li>
            </ul>
            <p>
              <strong>Upozornění:</strong> Vypnutí některých cookies může
              ovlivnit funkčnost webu.
            </p>

            <h2>Odkazy na zásady třetích stran</h2>
            <ul>
              <li>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  Google Analytics
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/policy/cookies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
