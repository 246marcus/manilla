import AboutManillaPay from "@/components/sections/AboutManillaPay";
import AboutUs from "@/components/sections/AboutUs";
import Blogs from "@/components/sections/Blogs";
import DevelopmentPartners from "@/components/sections/DevelopmentPartners";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="">
      <section>
        <Hero />
      </section>
      <section>
        <AboutUs />
      </section>
      <section>
        <AboutManillaPay />
      </section>
      <section>
        <DevelopmentPartners />
      </section>
      <section>
        <Blogs />
      </section>
      <Footer />
    </main>
  );
}
