import { Navigation, Footer, CookieConsent } from "@/components/layout";
import {
  Hero,
  Statistics,
  About,
  AISection,
  Contacts,
  Team,
  Services,
  Process,
  References,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        <Hero />
        <Statistics />
        <About />
        <AISection />
        <Contacts />
        <Team />
        <Services />
        <Process />
        <References />
        <Contact />
      </main>

      <Footer />
      <CookieConsent />
    </>
  );
}
