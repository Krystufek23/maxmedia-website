export {};

type GtagConsentParams = {
  ad_storage?: "granted" | "denied";
  ad_user_data?: "granted" | "denied";
  ad_personalization?: "granted" | "denied";
  analytics_storage?: "granted" | "denied";
  wait_for_update?: number;
};

type GtagCommand =
  | ["consent", "default" | "update", GtagConsentParams]
  | ["config", string, Record<string, unknown>?]
  | ["event", string, Record<string, unknown>?]
  | ["js", Date]
  | ["set", Record<string, unknown>];

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: GtagCommand) => void;
  }
}
