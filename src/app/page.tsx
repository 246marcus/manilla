"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation"; // ✅ usePathname instead of useRouter
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

declare global {
  interface Window {
    $zoho: any;
  }
}

export default function Home() {
  const pathname = usePathname(); // ✅ usePathname replaces useRouter()

  useEffect(() => {
    // Only load Zoho widget on homepage
    if (pathname === "/") {
      window.$zoho = window.$zoho || {};
      window.$zoho.salesiq = window.$zoho.salesiq || { ready: function () {} };

      const script = document.createElement("script");
      script.id = "zsiqscript";
      script.src =
        "https://salesiq.zoho.com/widget?wc=siqc06e0a68e054529311c51022aa78b5c9c346a9e4c5db2eebabea824834236e99";
      script.defer = true;
      document.body.appendChild(script);

      return () => {
        // Cleanup widget on route change
        const existing = document.getElementById("zsiqscript");
        if (existing) existing.remove();

        const zohoWidget = document.getElementById("zsiqwidget");
        if (zohoWidget) zohoWidget.remove();
      };
    }
  }, [pathname]);

  return (
    <main>
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
