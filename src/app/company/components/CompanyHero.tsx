import React from "react";
import Mfinance from "../../../../public/images/Mfinance.png";
import abtbg from "../../../../public/images/abtbg.png";
import icon from "../../../../public/icons/Icon1.png";
import { FaArrowRightLong } from "react-icons/fa6";

const CompanyHero: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4  md:px-6 lg:px-8 py-10 relative">
      {/* Outer decorative wrapper */}
      <div className="absolute bg-cyan-300 p-20 lg:p-30 top-10 md:left-15 left-0.5 blur-[100px]"></div>
      <div className="absolute bg-cyan-300 p-20 lg:p-24 bottom-20 lg:bottom-5 right-0.5 md:right-15 blur-[100px]"></div>

      <div className="z-10">
        <div className="p-2 py-10 px-4">
          <div className="flex flex-col gap-4 items-center justify-center mt-4 mb-3  text-center">
            <p className="  rounded-full px-4 py-1 bg-gray-200/70 ">
              About Manilla Finance
            </p>
            <div className="bg-black hidden md:inline-block translate-x-50 rounded-full text-white px-4 py-1">
              Who We Are
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center  py-4  ">
            <div className="flex-1 md:flex-7/12   max-w-xl lg:max-w-4xl ">
              <div className="p-5 border-3 border-black/50 flex flex-col gap-3 rounded-xl">
                <div className="flex items-center justify-center">
                  <h2
                    className="text-white font-semibold flex  items-center justify-center text-nowrap  my-4 py-3 px-14"
                    style={{
                      backgroundImage: `url(${abtbg.src})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain", // optional, makes sure it fills the area
                    }}
                  >
                    About Us <img src={icon.src} alt="about" className="w-10" />
                  </h2>
                </div>
                <h3 className="text-lg text-center max-w-sm md:text-xl font-semibold text-gray-900 mx-auto">
                  Powering the Future of Payments — From Africa to the World
                </h3>
                <p className="mt-4 text-center text-sm md:text-base px-2 md:px-4 text-gray-600  leading-relaxed ">
                  Manilla Finance is a pioneering fintech company transforming
                  the way utility bill and travel payments are made across
                  Africa and North America. Headquartered in Nigeria with global
                  reach, Manilla Finance stands at the forefront of the DeFi
                  (Decentralized Finance) revolution — merging the security,
                  transparency, and efficiency of blockchain with the
                  accessibility and convenience required by everyday consumers
                  and enterprises.
                </p>
                <div className="mt-6 flex  items-center justify-center gap-3">
                  <button className="inline-flex items-center bg-gray-900 text-white rounded-full px-5 py-2 gap-2  text-sm font-medium shadow hover:opacity-95 transition">
                    Get Started Now <FaArrowRightLong />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 md:flex-5/12 flex">
              <img
                src={Mfinance.src}
                className="w-auto flex-1 "
                alt="manila finance"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHero;
