"use client";
import React from "react";
import portbg from "../../../../../public/images/tokenpotbg.png";
import suitA from "../../../../../public/images/suit2a.png";
import suitB from "../../../../../public/images/suit2B.png";
import msbg from "../../../../../public/images/msbg.png";
import icon from "../../../../../public/icons/dropdownIcon.png";

const TokenPotential: React.FC = () => {
  const stats = [
    { label: "Total Manilla Supply", value: "1,000,000,000" },
    { label: "Manilla Price", value: "$0.00" },
    { label: "Circulating Supply", value: "$0.00" },
    { label: "24hrs Volume", value: "$0.00" },
    { label: "Total Burns", value: "$0.00" },
  ];

  return (
    <section className="bg-white px-6 pt-4 md:px-12">
      {/* Top Toggle Buttons */}
      <div
        className="flex flex-col max-w-5xl  mx-auto justify-center shadow-black/60  shadow-2xl mb-8 p-8 rounded-3xl md:-translate-y-20  bg-repeat-y"
        style={{
          backgroundImage: `url(${portbg.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover", // optional, makes sure it fills the area
        }}
      >
        <div className="mx-auto flex flex-1 justify-center items-center -translate-y-9">
          <div className="inline-flex  items-center justify-center mx-auto gap-3 ">
            <h2
              className=" py-8 px-20 flex  items-center justify-center scale-65 md:scale-90 "
              style={{
                backgroundImage: `url(${msbg.src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain", // optional, makes sure it fills the area
              }}
            >
              <span className="font-semibold text-nowrap text-sm">
                Token Information
              </span>
              <img src={icon.src} alt="about" className="w-10" />
            </h2>
          </div>
        </div>
        {/* <div className="flex justify-center">
          <p className="px-6 py-2 bg-gray-200 rounded-full text-gray-700 font-medium">
            Crypto Assets
          </p>
        </div> */}

        {/* Stats Cards */}
        <div className="flex flex-wrap justify-center gap-2  py-12 ">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white border border-gray-200 rounded-2xl p-6 w-80 md:w-40 h-80 md:h-auto justify-center md:justify-start  gap-4 md:gap-2  shadow hover:shadow-lg transition flex flex-col items-center text-center  ${
                idx % 2 !== 0 ? "lg:translate-y-10" : ""
              }`}
            >
              <div className="w-12 h-12 mb-3">
                <img
                  src={
                    idx % 2 !== 0
                      ? suitA.src // image for odd indexes
                      : suitB.src // image for even indexes
                  }
                  alt={item.label}
                  width={48}
                  height={48}
                  className={`object-contain ${
                    idx % 2 !== 0 ? "" : "scale-150"
                  }`}
                />
              </div>
              <p className="text-sm text-black">{item.label}</p>
              <h3 className="text-lg font-bold mt-1">{item.value}</h3>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-green-500 text-sm font-semibold">
                  ▲ 5.2%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TokenPotential;
