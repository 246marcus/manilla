import AboutManillaPay from "@/components/sections/AboutManillaPay";
import AboutUs from "@/components/sections/AboutUs";
import Blogs from "@/components/sections/Blogs";
import DevelopmentPartners from "@/components/sections/DevelopmentPartners";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import MediaPartner from "@/components/sections/MediaPartner";
import Product from "@/components/sections/Product";

import Nav from "@/components/ui/Nav";

export default function Home() {
  return (
    <main className="">
      <section>
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
