import React from "react";
import CardHero from "./component/CardHero";
import CardBenefit from "./component/CardBenefit";
import CardVirtual from "./component/CardVirtual";

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
    </main>
  );
}
