"use client";

import { useState, useEffect } from "react";
import { Button } from "../ui";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if consent has been given
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem("cookie_consent", JSON.stringify(prefs));
    setIsVisible(false);
    // Here you would trigger/disable analytics based on preferences
  };

  const acceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    setPreferences(allAccepted);
    saveConsent(allAccepted);
  };

  const acceptNecessary = () => {
    const necessaryOnly = { necessary: true, analytics: false, marketing: false };
    setPreferences(necessaryOnly);
    saveConsent(necessaryOnly);
  };

  const saveSettings = () => {
    saveConsent(preferences);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 pointer-events-auto">
        {showSettings ? (
          <>
            {/* Settings View */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Nastavení cookies
              </h2>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-500 hover:text-gray-700"
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {/* Necessary Cookies */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Nezbytné cookies
                  </h3>
                  <p className="text-sm text-gray-600">
                    Zajišťují základní funkce webu
                  </p>
                </div>
                <span className="text-sm text-gray-500 font-medium">
                  Vždy aktivní
                </span>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Analytické cookies
                  </h3>
                  <p className="text-sm text-gray-600">
                    Pomáhají nám zlepšovat web
                  </p>
                </div>
                <button
                  onClick={() =>
                    setPreferences({
                      ...preferences,
                      analytics: !preferences.analytics,
                    })
                  }
                  className={`w-12 h-6 rounded-full transition-colors ${
                    preferences.analytics ? "bg-primary" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`block w-5 h-5 bg-white rounded-full shadow transition-transform ${
                      preferences.analytics ? "translate-x-6" : "translate-x-0.5"
                    }`}
                  />
                </button>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Marketingové cookies
                  </h3>
                  <p className="text-sm text-gray-600">
                    Umožňují zobrazovat relevantní reklamy
                  </p>
                </div>
                <button
                  onClick={() =>
                    setPreferences({
                      ...preferences,
                      marketing: !preferences.marketing,
                    })
                  }
                  className={`w-12 h-6 rounded-full transition-colors ${
                    preferences.marketing ? "bg-primary" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`block w-5 h-5 bg-white rounded-full shadow transition-transform ${
                      preferences.marketing
                        ? "translate-x-6"
                        : "translate-x-0.5"
                    }`}
                  />
                </button>
              </div>
            </div>

            <Button onClick={saveSettings} className="w-full">
              Uložit nastavení
            </Button>
          </>
        ) : (
          <>
            {/* Main Banner */}
            <div className="flex items-start gap-4 mb-6">
              <span className="text-3xl">🍪</span>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Používáme cookies
                </h2>
                <p className="text-gray-600">
                  Tento web používá cookies pro zajištění správného fungování,
                  analýzu návštěvnosti a personalizaci obsahu. Kliknutím na
                  &quot;Přijmout vše&quot; souhlasíte s použitím všech cookies.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={acceptAll} className="flex-1">
                Přijmout vše
              </Button>
              <Button
                onClick={acceptNecessary}
                variant="outline"
                className="flex-1"
              >
                Pouze nezbytné
              </Button>
              <Button
                onClick={() => setShowSettings(true)}
                variant="ghost"
                className="flex-1"
              >
                Nastavení
              </Button>
            </div>

            <p className="text-sm text-gray-500 mt-4 text-center">
              Více informací v našich{" "}
              <a href="/ochrana-osobnich-udaju" className="text-primary hover:underline">
                Zásadách ochrany osobních údajů
              </a>
              .
            </p>
          </>
        )}
      </div>
    </div>
  );
}
