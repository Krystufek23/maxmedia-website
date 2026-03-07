import type { Metadata } from "next";
import Link from "next/link";
import { Navigation, Footer } from "@/components/layout";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů | maXmedia",
  description: "Zásady ochrany osobních údajů společnosti maXmedia s.r.o.",
};

export default function PrivacyPolicyPage() {
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
            Zásady ochrany osobních údajů
          </h1>

          <div className="prose prose-lg max-w-none">
            <h2>Úvodní ustanovení</h2>
            <p>
              Společnost <strong>maXmedia s.r.o.</strong>, IČO: 272 14 583, se
              sídlem U Hráze 344/1, 100 00 Praha 10 - Strašnice (dále jen
              &quot;maXmedia&quot; nebo &quot;my&quot;), je správcem osobních údajů, které nám
              poskytnete prostřednictvím tohoto webu.
            </p>
            <p>
              Tyto zásady popisují, jaké osobní údaje shromažďujeme, jak je
              používáme a jaká máte práva v souvislosti s jejich zpracováním.
            </p>

            <h2>Jaké údaje shromažďujeme</h2>

            <h3>1. Údaje z kontaktního formuláře:</h3>
            <ul>
              <li>Jméno a příjmení</li>
              <li>E-mailová adresa</li>
              <li>Název firmy (volitelné)</li>
              <li>Obsah zprávy</li>
            </ul>

            <h3>2. Technické údaje:</h3>
            <ul>
              <li>IP adresa</li>
              <li>Typ prohlížeče a zařízení</li>
              <li>Informace o návštěvě webu (pomocí cookies)</li>
            </ul>

            <h2>Účel zpracování</h2>
            <p>Vaše osobní údaje zpracováváme za účelem:</p>
            <ul>
              <li>
                Odpovědi na vaše dotazy zaslané prostřednictvím kontaktního
                formuláře
              </li>
              <li>Zasílání obchodních sdělení (pouze s vaším souhlasem)</li>
              <li>Zlepšování našich služeb a webu</li>
              <li>Plnění zákonných povinností</li>
            </ul>

            <h2>Právní základ zpracování</h2>
            <ul>
              <li>
                <strong>Oprávněný zájem</strong> - odpovědi na dotazy, provoz
                webu
              </li>
              <li>
                <strong>Souhlas</strong> - zasílání marketingových sdělení
              </li>
              <li>
                <strong>Plnění smlouvy</strong> - komunikace s klienty
              </li>
            </ul>

            <h2>Doba uchování údajů</h2>
            <ul>
              <li>
                Údaje z kontaktního formuláře: 3 roky od posledního kontaktu
              </li>
              <li>Marketingové údaje: do odvolání souhlasu</li>
              <li>
                Technické údaje (cookies): dle typu cookie (viz{" "}
                <Link href="/cookies" className="text-primary">
                  Zásady cookies
                </Link>
                )
              </li>
            </ul>

            <h2>Předávání údajů</h2>
            <p>
              Vaše údaje nepředáváme třetím stranám s výjimkou:
            </p>
            <ul>
              <li>Poskytovatelů IT služeb (hosting, e-mail)</li>
              <li>Případů vyžadovaných zákonem</li>
            </ul>
            <p>Údaje nezpracováváme mimo EU/EHP.</p>

            <h2>Vaše práva</h2>
            <p>Máte právo:</p>
            <ul>
              <li>
                <strong>Na přístup</strong> k vašim osobním údajům
              </li>
              <li>
                <strong>Na opravu</strong> nepřesných údajů
              </li>
              <li>
                <strong>Na výmaz</strong> údajů (&quot;právo být zapomenut&quot;)
              </li>
              <li>
                <strong>Na omezení zpracování</strong>
              </li>
              <li>
                <strong>Na přenositelnost</strong> údajů
              </li>
              <li>
                <strong>Vznést námitku</strong> proti zpracování
              </li>
              <li>
                <strong>Odvolat souhlas</strong> se zpracováním
              </li>
              <li>
                <strong>Podat stížnost</strong> u Úřadu pro ochranu osobních
                údajů (
                <a
                  href="https://www.uoou.cz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  www.uoou.cz
                </a>
                )
              </li>
            </ul>

            <h2>Kontakt pro ochranu osobních údajů</h2>
            <p>
              <strong>maXmedia s.r.o.</strong>
              <br />
              E-mail:{" "}
              <a href="mailto:info@maxmediapr.cz" className="text-primary">
                info@maxmediapr.cz
              </a>
              <br />
              Telefon:{" "}
              <a href="tel:+420604691147" className="text-primary">
                +420 604 691 147
              </a>
            </p>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
