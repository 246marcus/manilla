import React from "react";
import SuitsHero from "./SuitsHero";
import TokenPotential from "./TokenPotential";
import { Section } from "lucide-react";
import CryptoEarn from "./CryptoEarn";
import Rewards from "./Reward";
import FAQ from "./FAQ";
import Disclaimer from "./Disclaimer";

const ManillaToken = () => {
  return (
    <section>
      <SuitsHero />
      <TokenPotential />
      <CryptoEarn/>
      <Rewards/>
      <FAQ/>
      <Disclaimer/>
    </section>
  );
};

export default ManillaToken;
