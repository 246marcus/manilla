"use client";
import React from "react";
import suitsbg from "../../../../../public/images/suitbg.png";
import suit1 from "../../../../../public/images/suit1.png";
import circleArr from "../../../../../public/icons/arrowcircle.png";

const SuitsHero: React.FC = () => {
  return (
    <section
      className="bg-black py-16 px-6 md:px-12 
    "
      style={{
        backgroundImage: `url(${suitsbg.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // optional, makes sure it fills the area
      }}
    >
      <div className="max-w-4xl mx-auto text-white flex flex-col-reverse lg:flex-row items-center  justify-between my-10 mt-14 md:mt-20 gap-6 md:gap-12">
        {/* Left Content */}
        <div className="flex flex-col items-center lg:items-start md:gap-6 gap-3 max-w-lg text-center lg:text-start">
          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-bold leading-10">
            The Manilla Token{" "}
            <span className="text-yellow-400 px-3 py-1 rounded-full bg-white/20 text-nowrap">
              -MNLA
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-xs md:text-sm">
            The token empowering the Manilla Community
          </p>

          {/* Trade Buttons */}
          <p className="text-gray-300 text-xs md:text-sm hidden lg:block translate-y-3">
            Trade Manilla on exchange platforms
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="bg-white border border-white px-6 py-2 rounded-full text-sm hover:bg-white/50 text-black transition">
              Buy On Mexc
            </button>
            <button className="bg-transparent text-yellow-400  px-6 py-2 rounded-full text-sm flex items-center gap-2 hover:text-white  transition">
              Buy On Pancakeswap
              <img src={circleArr.src} alt="icon" className="w-6" />
            </button>
          </div>

          {/* About Button */}
          <button className="bg-transparent shadow mt-4 shadow-white/60 px-6 py-2 rounded-full text-sm hover:bg-white hover:text-black transition w-fit">
            About Manilla Token (MNLA)
          </button>

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md rounded-xl p-4 bg-white/8 mt-1">
           MNLA is the core token of the Manilla Finance ecosystem. As other tokens currently play a key role, MNLA will naturally move into price discovery and full valuation as the platform grows - ultimately becoming the primary token for bill payments and fee deductions.
          </p>
        </div>

        {/* Right Content (Image) */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-64 h-64 md:w-90 md:h-90 ">
            <img src={suit1.src} alt="Token Icon" className="object-contain" />
          </div>
          <button className="bg-transparent shadow text-yellow-400 -translate-x-25  hidden lg:block shadow-white/60 px-6 py-1 rounded-full text-xs hover:bg-white hover:text-black transition">
            Manilla Token
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuitsHero;
