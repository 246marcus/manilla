import React from "react";
import SuitsHero from "./components/SuitsHero";
import TokenPotential from "./components/TokenPotential";
import CryptoEarn from "./components/CryptoEarn";
import Rewards from "./components/Reward";
import FAQ from "./components/FAQ";
import Disclaimer from "../manillaToken/components/Disclaimer";

export default function ManillaSuit() {
  return (
    <main className="">
      <section>
        <SuitsHero />
      </section>
      <section>
        <TokenPotential />
      </section>
      <section>
        <CryptoEarn />
      </section>
      <section>
        <Rewards />
      </section>
      <section>
        <FAQ />
      </section>
      <section>
        <Disclaimer />
      </section>
    </main>
  );
}
