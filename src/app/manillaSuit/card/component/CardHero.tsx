"use client";
import React from "react";
import cardbg from "../../../../../public/images/cardbg.png";
import card1 from "../../../../../public/images/card1.png";

const CardHero: React.FC = () => {
  return (
    <section
      className="bg-white py-16 px-6 md:px-12 bg-cover lg:bg-contain
    "
      style={{
        backgroundImage: `url(${cardbg.src})`,
        backgroundPosition: "center",
        //backgroundRepeat: "no-repeat",
        //backgroundSize: "contain", // optional, makes sure it fills the area
      }}
    >
      <div className="flex items-center justify-center mt-10">
        <h1 className="text-2xl md:text-5xl font-bold md:translate-y-10">
          The Manilla Card
        </h1>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col-reverse lg:flex-row items-center  justify-between mb-10 gap-2 md:my-12 py-8 md:gap-12">
        {/* Left Content */}
        <div className="flex flex-5/12 flex-col items-center lg:items-start md:gap-3 gap-3 max-w-lg text-center lg:text-start ">
          {/* Title */}

          {/* Subtitle */}
          <p className="text-yellow-300 hidden lg:inline-block bg-black  text-xs md:text-sm py-1 px-3 rounded-full">
            The Manilla Card
          </p>

          {/* About Button */}
          <button className=" shadow mt-4 shadow-white/60 px-6 py-2 rounded-full text-sm text-white bg-black/40 hover:text-white/60 transition w-fit">
            The Manilla Card
          </button>

          {/* Description */}
          <p className="text-black text-sm md:text-base leading-relaxed max-w-md rounded-xl p-4 bg-black/30 mt-1">
            Earn unlimited crypto cashback every time you pay with the Manilla
            Debit Card at over 40 million merchant locations worldwide or
            online.
          </p>

          <p className="font-semibold underline">
            Be first to swipe in crypto.
          </p>
          <div className="flex  sm:flex-row gap-4 mt-4">
            <button className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-white/50  transition">
              Get the Card
            </button>
            <button className="bg-transparent text-black  px-6 py-2 rounded-full text-sm flex items-center gap-2 hover:text-white  transition">
              About Us
              <span className="bg-yellow-400 w-5 h-5 rounded-full flex items-center justify-center text-yellow-300 text-xs">
                ?
              </span>
            </button>
          </div>
        </div>

        {/* Right Content (Image) */}   {/* scale-110 sm:scale-90 md:scale-90 lg:scale-x-120 lg:scale-y-150 lg:-translate-x-30  lg:h-auto sm:translate-y-12 */}
        <div className=" lg:flex-7/12 mt-6 lg:mt-0 justify-center flex flex-col items-center gap-4 ">
          <img
            src={card1.src}
            alt="Token Icon"
            className="  "
          />
        </div>
      </div>
    </section>
  );
};

export default CardHero;
