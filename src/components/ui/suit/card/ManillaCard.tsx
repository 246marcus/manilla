import React from "react";
import CardHero from "./CardHero";
import CardBenefit from "./CardBenefit";
import CardVirtual from "./CardVirtual";
import FAQ from "../FAQ";

const ManillaCard: React.FC = () => {
  return (
    <div>
      <CardHero />
      <CardBenefit />
      <CardVirtual /> 
      <FAQ />
    </div>
  );
};

export default ManillaCard;
