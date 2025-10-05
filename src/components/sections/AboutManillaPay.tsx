"use client";

import React from "react";
import Link from "next/link";
import { Raleway, Inter } from "next/font/google";
import Image from "next/image";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const AboutManillaPay = () => {
  return (
    <section className="relative text-gray-900 pt-8">
      <div className="max-w-7xl mx-auto pt-6 ">
        <div className="">
          {/* Top Row */}
          <div className="relative flex items-center mb-4 w-full">
            {/* Left Button */}
            <div className="hidden md:block lg:mt-10 lg:translate-y-8">
              <Link href="/company">
                <button className="bg-gray-100 text-black px-6 py-2 rounded-full transition-colors border border-black/20 mb-1 md:translate-y-4 block mx-auto md:mt-10 lg:mx-0 mt-2 text-sm">
                  About Manilla Pay
                </button>
              </Link>
            </div>

            {/* Center Icon */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2 md:-mt-5 lg:-mt-12">
              <button className="p-4 bg-transparent lg:scale-90 transition-transform">
                <img
                  src="/icons/aboutusIcon.png"
                  alt="About Us Icon"
                  width={250}
                  height={150}
                  className="object-contain w-40 sm:w-44 md:w-56 lg:w-64"
                />
              </button>
            </div>

            {/* Right Empty Space to balance */}
            <div className="hidden md:block" style={{ width: "130px" }}></div>
          </div>

          {/* Main Content */}
          <div className="mt-12 lg:my-0 flex flex-col lg:flex-row items-center lg:justify-between gap-12">
            {/* Left Column - Text */}
            <div className="max-w-lg text-center lg:text-left px-3 lg:px-0 text-black/80 lg:flex-1 ">
              <h2 className="sm:text-xl text-2xl  font-semibold mb-4 lg:text-[40px] ">
                Redefining How Canada Pays
              </h2>
              <p
                className={` ${inter.className}  text-[#868686] mb-6 text-[12px] lg:text-[22px]`}
              >
                Nigeria is moving forward - but payments are still stuck in the
                past.
              </p>

              <div className=" bg-black/7">
                <p
                  className={` ${inter.className}text-xs lg:text-[20px] p-2 py-3 rounded-md text-[#181635] mb-3`}
                >
                  From bank queues and failed transfers to delayed utility
                  credits and cross-border headaches, the system isn’t built for
                  speed or convenience. That’s why we created Manilla Pay: to
                  merge the reliability of traditional infrastructure with the
                  flexibility and freedom of crypto.
                  {/* Buttons */}
                </p>

                <div className="flex gap-4  justify-center lg:justify-start items-center ">
                  <Link
                    href="/company"
                    className=" px-3 py-2 cursor-pointer mb-2 mt-4 bg-gray-100 text-[#000] rounded-full hover:bg-gray-200 transition text-xs lg:"
                  >
                    Click to learn more about us
                  </Link>

                  <Link href="/company">
                    <button className=" text-xs px-3 py-2 md:mt-2 bg-[#281AC9] hover:bg-[#3a2cd9] text-white rounded-full cursor-pointer transition whitespace-nowrap ">
                      About Us
                    </button>
                  </Link>
                </div>
              </div>

              {/* Buttons
              <div className="flex gap-4 flex-wrap justify-center lg:justify-start items-center">
                <Link
                  href="/company"
                  className="px-6 py-3 cursor-pointer mb-2 mt-4 bg-gray-100 text-[#001EA9] rounded-full hover:bg-gray-200 transition"
                >
                  Click to learn more about us
                </Link>

                <Link href="/company">
                  <button className="px-6 py-2 md:mt-2 bg-[#281AC9] hover:bg-[#3a2cd9] text-white rounded-full cursor-pointer transition">
                    About Us
                  </button>
                </Link>
              </div> */}
            </div>

            {/* Right Column - Image */}
            <div className="lg:flex lg:flex-1 justify-center lg:justify-end ">
              <img
                src="/images/aboutmanillapay1.png"
                alt="Right Side Image"
                className="relative z-10 h-70 sm:h-90 lg:h-auto lg:max-h-140 md:w-120 lg:w-auto object-contain"
              />
            </div>
          </div>
        </div>
        {/* Bottom Section */}

        <section className="relative bg-cover rounded-2xl bg-center mb-3 mt-3">
          <div className="max-w-7xl mx-auto px-6">
            {/* Header Section - Centered */}
            <div className="flex flex-col gap-0 justify-center items-center mb-8">
              <p
                className={`${raleway.className} font-semibold text-[14px] leading-[16px] tracking-[0px] text-center text-[#181635] lg:${inter.className} lg:text-[40px] lg:mt-8 `}
              >
                Why Choose Manilla App
              </p>
              <p
                className={`${inter.className} text-[12px] leading-[14px] tracking-[0px] text-center text-[#868686] lg:text-[24px] lg:font-semibold lg:mt-5 lg:leading-[34px]`}
              >
                -smarter, faster, and more reliable{" "}
                <span className="hidden lg:inline">
                  <br />
                </span>
                way to handle your bills, travel, and financial needs.
              </p>

              <br />
              <button
                className={`${inter.className} bg-black text-white w-[109px] h-[32px] rounded-full opacity-100 flex items-center justify-center rotate-0 lg:w-[239px] lg:h-[60px]`}
              >
                <span className="text-[rgba(250,202,49,1)] text-[10px] lg:text-[16px] leading-[20px] font-medium">
                  Why Choose
                </span>
                <span className="ml-1 text-[10px] leading-[20px] font-medium lg:text-[16px]">
                  Us
                </span>
              </button>
            </div>

            {/* Content Grid - 3 Columns on Large Screens */}
            {/* Content Grid - 3 Columns on Large Screens */}
            <div className="flex justify-center items-center w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch ">
                {/* Left Image with Overlay */}
                <div className="flex justify-center lg:col-span-3">
                  <div className="relative w-[320px] lg:w-full h-[300px] lg:h-full">
                    <Image
                      src="/images/backgroundpic.png"
                      alt="background"
                      width={350}
                      height={300}
                      className="object-cover object-right rounded-xl w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/40 bg-opacity-47 rounded-b-xl py-4 px-6">
                      <div
                        className={`${inter.className} font-semibold leading-[100%] text-[#FACA31] text-center`}
                      >
                        <p
                          className={`${inter.className} font-semibold text-[10px] leading-[100%]`}
                        >
                          Our platform supports payments using
                        </p>
                        <div className="flex gap-2 justify-center items-center mt-2 flex-wrap">
                          <li
                            className="w-[70px] h-[28px] opacity-100 border rounded-full flex items-center justify-center gap-1 p-4"
                            style={{ boxShadow: "0px 0px 0px 0.7px #A7FB21" }}
                          >
                            <img src="/icons/USDTICON.png" alt="usdt" />
                            <p className="text-white text-[8px]">USDT</p>
                          </li>
                          <li
                            className="w-[70px] h-[28px] opacity-100 border rounded-full flex items-center justify-center gap-1 p-4"
                            style={{ boxShadow: "0px 0px 0px 0.7px #A7FB21" }}
                          >
                            <img src="/icons/USDCICON.png" alt="" />
                            <p className="text-white text-[8px]">USDC</p>
                          </li>
                          <li
                            className="w-[70px] h-[28px] opacity-100 border rounded-full flex items-center justify-center gap-1 p-4"
                            style={{ boxShadow: "0px 0px 0px 0.7px #A7FB21" }}
                          >
                            <img src="/icons/USD1ICON.png" alt="" />
                            <p className="text-white text-[8px]">USD1</p>
                          </li>
                          <li
                            className="w-[70px] h-[28px] opacity-100 border rounded-full flex items-center justify-center gap-1 p-4"
                            style={{ boxShadow: "0px 0px 0px 0.7px #A7FB21" }}
                          >
                            <img src="/icons/BTCICON.png" alt="" />
                            <p className="text-white text-[8px]">BTC</p>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center - Black Card with Features */}
                <div className="flex justify-center lg:col-span-6">
                  <div className="bg-[#000] rounded-2xl w-[320px] lg:w-full h-full p-5 flex flex-col">
                    <div className="flex gap-2 mb-4">
                      <img
                        src="/icons/dotmanilla.png"
                        alt="icon"
                        className="w-[28px] h-[28px]"
                      />
                      <p
                        className={`${inter.className} text-[#E5E5E5] font-medium text-[16px] leading-[100%] tracking-[-0.6px]`}
                      >
                        <span
                          className={`${inter.className} text-[#FACA31] font-medium text-[16px] leading-[100%] tracking-[-0.6px]`}
                        >
                          Manilla App
                        </span>{" "}
                        makes everyday payments faster, easier, and more
                        flexible
                      </p>
                    </div>

                    <div className="space-y-3 flex-1">
                      <div className="flex gap-3 w-full bg-[#1D1D1D] rounded-lg p-2">
                        <img
                          src="/icons/dollaricon.png"
                          alt=""
                          className="w-[40px] h-[40px] flex-shrink-0"
                        />
                        <div className="flex flex-col gap-1">
                          <p
                            className={`${inter.className} text-[#E5E5E5] font-bold text-[12px] leading-[140%]`}
                          >
                            Pay Utility Bills
                          </p>
                          <p
                            className={`${inter.className} text-[#E5E5E5] font-normal text-[10px] leading-[140%]`}
                          >
                            Settle electricity, water, cable tv & internet bills
                            in seconds. Manilla lets you pay securely with
                            stablecoins, ensuring convenience and reliability
                            for everyday Nigerian households.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3 w-full bg-[#1D1D1D] rounded-lg p-2">
                        <img
                          src="/icons/bookicon.png"
                          alt=""
                          className="w-[40px] h-[40px] flex-shrink-0"
                        />
                        <div className="flex flex-col gap-1">
                          <p
                            className={`${inter.className} text-[#E5E5E5] font-bold text-[12px] leading-[140%]`}
                          >
                            Top Up Airtime & Data
                          </p>
                          <p
                            className={`${inter.className} text-[#E5E5E5] font-normal text-[10px] leading-[140%]`}
                          >
                            Recharge instantly on all major networks in Nigeria.
                            Use stablecoins or cards to top-up airtime and data
                            anytime, anywhere—fast, seamless, and stress-free
                            with Manilla.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3 w-full bg-[#1D1D1D] rounded-lg p-2">
                        <img
                          src="/icons/planeicon.png"
                          alt=""
                          className="w-[40px] h-[40px] flex-shrink-0"
                        />
                        <div className="flex flex-col gap-1">
                          <p
                            className={`${inter.className} text-[#E5E5E5] font-bold text-[12px] leading-[140%]`}
                          >
                            Book Flights & Pay for Travel
                          </p>
                          <p
                            className={`${inter.className} text-[#E5E5E5] font-normal text-[10px] leading-[140%]`}
                          >
                            Plan trips with ease. Book flights, stays, and rides
                            while paying in crypto or card. Manilla makes travel
                            seamless, secure, and globally connected for
                            Nigerians.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutManillaPay;
