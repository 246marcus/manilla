"use client";

import { useEffect } from "react";
import Script from "next/script";

import AboutManillaPay from "@/components/sections/AboutManillaPay";
import AboutUs from "@/components/sections/AboutUs";
import Blogs from "@/components/sections/Blogs";
import DevelopmentPartners from "@/components/sections/DevelopmentPartners";
import Hero from "@/components/sections/Hero";
import MediaPartner from "@/components/sections/MediaPartner";
import Product from "@/components/sections/Product";
import ManillaSlides from "@/components/sections/ManillaSlides";
import Nav from "@/components/ui/Nav";

export default function Home() {
  useEffect(() => {
    // Initialize Zoho SalesIQ global variable safely
    window.$zoho = window.$zoho || {};
    window.$zoho.salesiq = window.$zoho.salesiq || { ready: function () {} };
  }, []);

  return (
    <main>
      {/* ✅ Zoho SalesIQ chat widget (homepage only) */}
      <Script
        id="zsiqscript"
        src="https://salesiq.zoho.com/widget?wc=siqc06e0a68e054529311c51022aa78b5c9c346a9e4c5db2eebabea824834236e99"
        strategy="afterInteractive"
      />

      <section className="bg-amber-300">
        <Nav />
        <Hero />
      </section>

      <section>
        <AboutManillaPay />
      </section>

      <section>
        <Product />
      </section>

      <section>
        <ManillaSlides />
      </section>

      <section>
        <AboutUs />
      </section>

      <section>
        <DevelopmentPartners />
      </section>

      <section>
        <Blogs />
      </section>

      <section>
        <MediaPartner />
      </section>
    </main>
  );
}
