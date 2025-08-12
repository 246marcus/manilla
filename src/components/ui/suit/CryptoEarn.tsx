// pages/pie-demo.tsx
import React from "react";
import msbg from "../../../../public/images/msbg.png";
import pie from "../../../../public/images/suit3.png";

const CryptoEarn: React.FC = () => {
  return (
    <main className="pb-12 bg-gray-50 p-6 sm:p-10">
      <div className="max-w-6xl mx-auto border-t-2 border-dashed border-black/20">
        <div className="flex items-center justify-bewteen  mb-6 md:mb-10">
          <div className="flex-1 ">
            <div className="hidden md:inline-flex items-center bg-gray-100/70  gap-2 text-sm font-medium px-6 py-2 rounded-full border border-gray-200 hover:shadow-md transition">
              crypto earn
            </div>
          </div>

          <div className="mx-auto flex flex-1 justify-center -translate-y-9">
            <div className="inline-flex items-center gap-3 ">
              <h2
                className=" scale-90 py-8 px-20 "
                style={{
                  backgroundImage: `url(${msbg.src})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain", // optional, makes sure it fills the area
                }}
              >
                <span className="font-semibold text-nowrap text-sm">
                  crypto earn
                </span>
              </h2>
            </div>
          </div>

          <div className="text-right flex-1">
            {/* keep spacing on right for desktop */}
            <div className="hidden sm:block"></div>
          </div>
        </div>

        {/* Header and Buy Section */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between  text-center md:text-start gap-6">
          <div className="flex-2/5">
            <h2 className="mt-6 text-2xl md:text-3xl font-bold text-slate-900">
              Where To Buy MNLA
            </h2>
            <p className="mt-3 text-slate-500 max-w-xl text-xs">
              MNLA can be bought from any of the exchanges the token will be
              listed on upon its launch.
            </p>
          </div>

          <div className="w-full md:flex-3/5">
            <div className="bg-gray-100/60 rounded-2xl p-4 shadow-xl ">
              <p className="text-slate-700  mb-4 text-xs">
                Its journey will start from a DEX(Pancake swap) and subsequently
                other industry leading CEX. Once launched, links will be
                provided to access the exchanges directly from this page.
              </p>

              <div className="flex  gap-3 flex-col sm:flex-row">
                <button className="flex-1 md:hidden bg-gradient-to-r from-indigo-600 to-cyan-500 text-white py-2 rounded-full font-semibold">
                  Buy Now
                </button>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button className="hidden md:block  px-6 py-2 rounded-full text-sm hover:text-black/50 text-black transition">
                  Buy Now
                </button>
                <button className="bg-black border  px-6 py-2 rounded-full text-sm hover:bg-black/50 text-white transition">
                  Buy On Mexc
                </button>
                <button className="bg-transparent text-black  px-6 py-2 rounded-full text-sm flex items-center gap-2 hover:text-white justify-center       not-user-valid:not-user-invalid:transition">
                  Buy On Pancakeswap
                  <span className="bg-black w-5 h-5 rounded-full flex items-center justify-center text-white text-xs">
                    ?
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pie Chart + Labels */}
        <div className="mt-16 mb-12 flex flex-col items-center">
          <div className="relative w-72 sm:w-96 md:w-[600px] lg:w-[640px]">
            <img
              src={pie.src}
              alt="Token distribution pie chart"
              width={900}
              height={900}
              className="rounded-full shadow-2xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
};
export default CryptoEarn;
