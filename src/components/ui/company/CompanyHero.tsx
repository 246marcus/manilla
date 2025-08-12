import Image from "next/image";
import React from "react";
import Mfinance from "../../../../public/images/Mfinance.png";
import abtbg from "../../../../public/images/abtbg.png";

const CompanyHero: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Outer decorative wrapper */}

      {/* <div className="relative bg-gradient-to-br from-white to-slate-50 p-6 md:p-10 rounded-3xl shadow-xl">
        <div className=" mx-auto my-3 items-center flex justify-center ">
          About Manilla Finance
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          
          <div className="md:col-span-2 relative rounded-2xl border border-gray-200 p-6 md:p-8 bg-white">
           
            <div className="">
              <span className="inline-flex items-center bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg">
                About Us
                <span className="ml-2 w-2 h-2 bg-green-400 rounded-full block" />
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                  Powering the Future of Payments — From Africa to the World
                </h2>
                <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
                  Manilla Finance is a pioneering fintech company transforming
                  the way utility bill and travel payments are made across
                  Africa and North America. Headquartered in Nigeria with global
                  reach, Manilla Finance stands at the forefront of the DeFi
                  (Decentralized Finance) revolution — merging the security,
                  transparency, and efficiency of blockchain with the
                  accessibility and convenience required by everyday consumers
                  and enterprises.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="inline-flex items-center bg-gray-900 text-white rounded-full px-5 py-2 text-sm font-medium shadow hover:opacity-95 transition">
                    Get Started Now
                  </button>
                  <button className="inline-flex items-center text-sm text-gray-700 px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-50 transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

        
          <div className="relative rounded-2xl border-2 border-dashed border-gray-300 p-6 flex flex-col justify-between bg-white">
            <img src={Mfinance.src} alt="" />
          </div>
        </div>

        <div className="hidden lg:block absolute -top-8 right-10 w-36 h-12 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center text-sm text-gray-700">
          Who We Are
        </div>
      </div> */}

      <div className="">
        <div className="p-2 pt-10 px-4">
          <div className="flex items-center justify-center mt-4 text-center">
            <p className="  rounded-full px-4 py-2 bg-amber-100/20 ">
              About Manilla Finance
            </p>
          </div>
          <div className="">Who We Are</div>
          <div className="flex flex-col lg:flex-row justify-center items-center  py-4  ">
            <div className="flex-1 md:flex-4/6   max-w-xl lg:max-w-4xl ">
              <div className="p-5 border flex flex-col gap-4 rounded-xl">
                <div className="flex items-center justify-center">
                  <h2
                    className="text-white font-semibold  my-4 py-3 px-14"
                    style={{
                      backgroundImage: `url(${abtbg.src})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain", // optional, makes sure it fills the area
                    }}
                  >
                    About Us
                  </h2>
                </div>
                <h3 className="text-lg text-center md:text-xl font-semibold text-gray-900">
                  Powering the Future of Payments — From Africa to the World
                </h3>
                <p className="mt-4 text-center text-sm md:text-base text-gray-600  leading-relaxed ">
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
                  <button className="inline-flex items-center bg-gray-900 text-white rounded-full px-5 py-2 text-sm font-medium shadow hover:opacity-95 transition">
                    Get Started Now
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 md:flex-2/6 flex">
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
