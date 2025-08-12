import React from "react";
import CompanyMission from "../ui/company/CompanyMission";
import CompanyValue from "../ui/company/CompanyValue";
import CompanyPartner from "../ui/company/CompanyPartner";
import CompanyHero from "../ui/company/CompanyHero";
import Footer from "./Footer";
import Contact from "../ui/company/Contact";
import CareerHome from "../ui/company/career/CareerHome";
import CareerApply from "../ui/company/career/CarrierApply";
import ManillaToken from "../ui/suit/ManillaToken";
import ManillaCard from "../ui/suit/card/ManillaCard";

const AboutUs = () => {
  return (
    <div>
      <CompanyHero />
      <CompanyMission />
      <CompanyValue />
      <CompanyPartner />
      <Footer />
      <div id="#company" className="">
        <Contact />
      </div>
      <CareerHome />
      <CareerApply/>
      <ManillaToken/>
      <ManillaCard/>

    </div>
  );
};

export default AboutUs;
