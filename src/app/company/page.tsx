import React from "react";
import CompanyHero from "./components/CompanyHero";
import CompanyMission from "./components/CompanyMission";
import CompanyValue from "./components/CompanyValue";
import CompanyPartner from "./components/CompanyPartner";

export default function Company() {
  return (
    <main className="-mt-0">
      <section>
        <CompanyHero />
      </section>
      <section>
        <CompanyMission />
      </section>
      <section>
        <CompanyValue />
      </section>
      <section>
        <CompanyPartner />
      </section>
    </main>
  );
}
