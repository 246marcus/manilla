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
          <div className="flex flex-col gap-4 items-center justify-center -mt-5 mb-3  text-center">
            <p className="  rounded-full px-4 py-1 bg-gray-200/70  text-[10px] lg:text-[23px]">
              About Manilla Finance
            </p>
            <div className="block md:hidden ml-55">
              <img
                src="/images/whoweare.png"
                alt="Who We Are"
                className="w-full h-8"
              />
            </div>

            <div className="bg-black hidden md:inline-block translate-x-50 rounded-full text-white px-4 py-1">
              Who We Are
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center -mt-10 md:mt-0">
            <div className="flex-1 md:flex-7/12 lg:h-auto w-full ">
              <div className="block md:hidden pb-0 -mb-10 -mx-7  -ml-3">
                <img
                  src="/images/groupicon.png"
                  alt="About Us Mobile"
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <div className="p-3 border-3 border-black/50 flex flex-col  rounded-xl w-full lg:h-auto">
                <div className="flex items-center justify-center lg:pt-3">
                  <h2
                    className="text-white font-semibold flex  items-center justify-center text-nowrap  my-4 py-3 px-14 text-[14px] lg:text-[24px]"
                    style={{
                      backgroundImage: `url(${abtbg.src})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                    }}
                  >
                    About Us{" "}
                    <img src={icon.src} alt="about" className="w-6 mb-0" />
                  </h2>
                </div>

                <p className="mt-0 text-center text-[15px] md:text-base  md:px-4 text-[#474650]  leading-relaxed lg:text-[18px]">
                  <p className="text-center text-[10px] lg:text-[14px] md:text-[10px] pb-3 ">
                    <p className="pb-3 md:text-[14px]">
                      <span className="text-[#281AC9] text-[10px]  md:text-[15px] lg:text-[18px]  font-bold ">
                        Manilla Finance
                      </span>{" "}
                      is a pioneering fintech company transforming the way
                      utility bills and travel payments are made across Africa
                      and North America. Founded with the vision of bridging
                      traditional financial systems and emerging blockchain
                      technology, Manilla Finance empowers individuals and
                      businesses to pay bills and transact seamlessly using both
                      utility digital assets and stablecoins like USDC and USDT.
                    </p>
                    <p className="pb-3 md:text-[14px]">
                      Headquartered in Nigeria and Canada, Manilla Finance
                      stands at the forefront of the CeDeFi (Centralized
                      Decentralized Finance) revolution, merging the security,
                      transparency, and efficiency of blockchain with the
                      accessibility and convenience required by everyday
                      consumers and enterprises. Our platform leverages
                      cutting-edge technology to simplify payments for essential
                      services such as electricity, water, gas, internet data,
                      cable TV, airtime, and travel-related expenses, including
                      flights, stays, and airport transfers.
                    </p>
                    <p className="md:text-[14px]">
                      At Manilla Finance, we are driven by a deep commitment to
                      financial inclusion, innovation, and customer-centricity.
                      Our team comprises industry veterans, blockchain experts,
                      and customer service professionals dedicated to delivering
                      an unmatched payment experience that is fast, secure, and
                      reliable.
                    </p>
                  </p>
                </p>
              </div>
            </div>

            <div className="hidden md:flex flex-1 md:flex-5/12 relative text-2xl font-bold">
              <img
                src="/images/manillafinance.png"
                className="w-full h-full object-cover rounded-lg"
                alt="manila finance"
              />

              <button className="absolute bottom-[75px] lg:bottom-[87px] left-[35px] lg:left-[33px] bg-[#FACA31] text-[#181635] lg:px-4 lg:py-4 lg:text-[25px] px-2 py-4 rounded-lg shadow-lg flex items-center gap-2 text-2xl font-bold md:left-[60px] md:bottom-[128px] md:text-[40px] md:px-5 md:py-8 md:rounded-2xl">
                <img
                  src="/icons/search.png"
                  alt="icon"
                  className="w-5 h-5 md:w-10 md:h-10 lg:w-6 lg:h-6 font-bold"
                />
                About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHero;
