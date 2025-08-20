import React from "react";
import CardHero from "./component/CardHero";
import CardBenefit from "./component/CardBenefit";
import CardVirtual from "./component/CardVirtual";
import FAQ from "../manillaToken/components/FAQ";

export default function ManillaSuit() {
  return (
    <main className="">
      <section>
        <CardHero />
      </section>
      <section>
        <CardBenefit />
      </section>
      <section>
        <CardVirtual />
      </section>
      <section className="py-4 lg:pt-20 lg:pb-10">
        <FAQ />
      </section>
    </main>
  );
}
