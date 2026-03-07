import Image from "next/image";
import { Container } from "../ui";

const footerLinks = {
  navigation: [
    { href: "#uvod", label: "Úvod" },
    { href: "#o-nas", label: "O nás" },
    { href: "#tym", label: "Tým" },
    { href: "#sluzby", label: "Služby" },
    { href: "#reference", label: "Reference" },
    { href: "#kontakt", label: "Kontakt" },
  ],
  legal: [
    { href: "/ochrana-osobnich-udaju", label: "Ochrana osobních údajů" },
    { href: "/cookies", label: "Cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-dark text-white py-16">
      <Container>
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Image
              src="/images/logo.png"
              alt="maXmedia"
              width={160}
              height={40}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 max-w-md">
              PR agentura s 30 lety zkušeností. Spojujeme osvědčené know-how s
              AI, rychlostí a přesností.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://linkedin.com/company/maxmediapr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigace</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:info@maxmediapr.cz"
                  className="hover:text-white transition-colors"
                >
                  info@maxmediapr.cz
                </a>
              </li>
              <li>
                <a
                  href="tel:+420604691147"
                  className="hover:text-white transition-colors"
                >
                  +420 604 691 147
                </a>
              </li>
              <li className="pt-2">
                U Hráze 344/1
                <br />
                100 00 Praha 10
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} maXmedia s.r.o. Všechna práva
            vyhrazena.
          </p>

          <div className="flex items-center gap-6 text-sm">
            {footerLinks.legal.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-500 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              id="cookie-settings"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Nastavení cookies
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
