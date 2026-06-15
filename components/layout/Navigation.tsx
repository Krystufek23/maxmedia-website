"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Container } from "../ui";

const navLinks = [
  { href: "#uvod", label: "Úvod" },
  { href: "#o-nas", label: "O nás" },
  { href: "#tym", label: "Tým" },
  { href: "#sluzby", label: "Služby" },
  { href: "#reference", label: "Reference" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-card py-3"
          : "bg-transparent py-5"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo - switch between normal and inverse version */}
          <a href="#uvod" className="relative z-10 block h-10">
            {/* Logo for light background (when scrolled) */}
            <Image
              src="/images/logo.png"
              alt="maXmedia"
              width={160}
              height={40}
              className={`h-10 w-auto transition-opacity duration-300 absolute top-0 left-0 ${
                isScrolled ? "opacity-100" : "opacity-0"
              }`}
              priority
            />
            {/* Logo for dark background (not scrolled) - inverse version with blend mode */}
            <Image
              src="/images/logo-inverse.png"
              alt="maXmedia"
              width={160}
              height={40}
              className={`h-10 w-auto transition-opacity duration-300 mix-blend-lighten ${
                isScrolled ? "opacity-0" : "opacity-100"
              }`}
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`font-medium transition-colors duration-200 hover:text-primary ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="#kontakt"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all duration-300 hover:shadow-glow"
          >
            Kontaktujte nás
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden relative z-10 p-2 ${
              isScrolled || isMobileMenuOpen ? "text-gray-900" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 bg-white transform transition-transform duration-300 md:hidden ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-gray-900 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all"
              >
                Kontaktujte nás
              </a>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
