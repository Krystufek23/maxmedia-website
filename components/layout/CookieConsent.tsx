"use client";

import { useState, useEffect } from "react";
import { Button } from "../ui";

const STORAGE_KEY = "cookie_consent";
const OPEN_EVENT = "openCookieBanner";

type ConsentValue = "granted" | "denied";

function updateGtagConsent(value: ConsentValue) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("consent", "update", {
    analytics_storage: value,
  });
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ConsentValue | null;
    if (!stored) {
      setIsVisible(true);
    } else if (stored === "granted") {
      updateGtagConsent("granted");
    }

    const openHandler = () => setIsVisible(true);
    window.addEventListener(OPEN_EVENT, openHandler);
    return () => window.removeEventListener(OPEN_EVENT, openHandler);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "granted");
    updateGtagConsent("granted");
    setIsVisible(false);
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, "denied");
    updateGtagConsent("denied");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 pointer-events-auto">
        <div className="flex items-start gap-4 mb-6">
          <span className="text-3xl">🍪</span>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Používáme cookies
            </h2>
            <p className="text-gray-600">
              Kromě technických cookies používáme také analytické cookies
              (Google Analytics) pro měření návštěvnosti a zlepšování webu.
              Data jsou anonymizována. Bez Vašeho souhlasu žádné analytické
              cookies nepoužíváme.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button onClick={accept} className="flex-1">
            Přijmout
          </Button>
          <Button onClick={reject} variant="outline" className="flex-1">
            Odmítnout
          </Button>
        </div>

        <p className="text-sm text-gray-500 mt-4 text-center">
          Více informací v našich{" "}
          <a href="/cookies" className="text-primary hover:underline">
            Zásadách používání cookies
          </a>
          .
        </p>
      </div>
    </div>
  );
}
