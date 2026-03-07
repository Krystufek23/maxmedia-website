"use client";

import { Section, SectionTitle } from "../ui";

export function About() {
  return (
    <Section id="o-nas" background="light">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <SectionTitle title="O maXmedia" align="left" />

          <div className="space-y-6 text-lg text-gray-600">
            <p>
              Jsme plnohodnotná PR a marketingová agentura s vlastním silným
              portfoliem klientů.{" "}
              <strong className="text-gray-900">Sport máme v krvi</strong> –
              PR spojené se sportem a podporou sportovních značek je stále
              naší doménou.
            </p>

            <p>
              Díky našemu týmu konzultantů jsme schopni nabídnout jakékoliv
              služby z oblasti public relations. Máme zkušenosti z působení
              v mezinárodních velkých síťových PR agenturách.
            </p>

            <p className="text-primary font-semibold text-xl">
              Nabízíme stejné know-how jako velké agentury, ale s podstatně
              přátelštějším a vstřícnějším přístupem.
            </p>
          </div>
        </div>

        {/* Visual Element */}
        <div className="relative">
          <div className="relative z-10 bg-white rounded-3xl shadow-card p-8">
            {/* Experience Badge */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center text-white">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">30+ let</div>
                <div className="text-gray-600">na trhu</div>
              </div>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                "Butikový přístup s výsledky velkých agentur",
                "Zkušenosti z mezinárodních PR sítí",
                "Specialisté na sportovní PR",
                "Osobní přístup ke každému klientovi",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
        </div>
      </div>
    </Section>
  );
}
