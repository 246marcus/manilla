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
            <div className="hidden md:block md:mt-5 lg:mt-10 lg:translate-y-8">
              <Link href="/company">
                <button className="bg-gray-100 text-black px-6 py-2 rounded-full transition-colors border border-black/20 mb-1 md:translate-y-4 block mx-auto  lg:mx-0 mt-2 text-sm">
                  About Manilla Pay
                </button>
              </Link>
            </div>

            {/* Center Icon */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2 md:-mt-5 lg:-mt-12">
              <button className="p-4 bg-transparent lg:scale-90 transition-transform md:mb-10">
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
          <div className="mt-12 lg:my-0 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 lg:gap-24 xl:gap-32 px-6 md:px-10 lg:px-16">
            {/* Left Column - Text */}
            <div className="flex-1 max-w-lg text-center md:text-left text-black/80">
              <h2 className="text-2xl md:text-[28px] lg:text-[40px] font-semibold mb-4 whitespace-nowrap">
                Redefining How Nigerians Pays
              </h2>
              <p
                className={`${inter.className} text-[#868686] mb-6 text-[12px] md:text-[14px] lg:text-[22px]`}
              >
                Nigeria is moving forward - but payments are still stuck in the
                past.
              </p>

              <div className="bg-black/5 p-3 rounded-md">
                <p
                  className={`${inter.className} text-xs md:text-[14px] lg:text-[20px] text-[#181635]`}
                >
                  From bank queues and failed transfers to delayed utility
                  credits and cross-border headaches, the system isn’t built for
                  speed or convenience. That’s why we created Manilla Pay: to
                  merge the reliability of traditional infrastructure with the
                  flexibility and freedom of crypto.
                </p>

                {/* Buttons - Mobile */}
                <div className="flex gap-6 justify-center md:hidden items-center mt-4">
                  <Link
                    href="/company"
                    className="px-4 py-2 bg-[#F5F5F5] text-[#000] rounded-full hover:bg-gray-200 transition text-sm"
                  >
                    Click to learn more about us
                  </Link>
                  <Link href="/company">
                    <button className="text-xs px-4 py-2 bg-[#281AC9] hover:bg-[#3a2cd9] text-white rounded-full transition">
                      About Us
                    </button>
                  </Link>
                </div>
              </div>

              {/* Buttons - Tablet & Desktop */}
              <div className="hidden md:flex items-center justify-between mt-6 w-full">
                {/* Left button */}
                <Link
                  href="/company"
                  className={`${inter.className}px-4 py-2 bg-gray-100  rounded-full hover:bg-gray-200 transition text-sm md:text-base lg:w-[300px] lg:h-[50px] text-center lg:text-[22px] text-[#181635]`}
                >
                  Click to learn more about us
                </Link>

                {/* Right button */}
                <Link href="/company">
                  <button className="px-4 py-2 bg-[#281AC9] hover:bg-[#3a2cd9] text-white rounded-full transition text-sm md:text-base lg:w-[150px] lg:h-[50px]">
                    About Us
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 flex justify-center md:justify-end">
              <img
                src="/images/aboutmanillapay1.png"
                alt="Right Side Image"
                className="w-[250px] sm:w-[320px] md:w-[500px] lg:w-[620px] xl:w-[700px] h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <section className="relative bg-cover  rounded-2xl bg-center mb-3 mt-20">
          <div className="max-w-7xl mx-auto px-6  gap-1 items-stretch bg-no-repeat">
            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-0 md:justify-center items-center top-1 mb-5">
              <p
                className={`${raleway.className} font-semibold text-[14px] leading-[16px] tracking-[0px] text-center text-[#181635] lg:${inter.className} lg:font-semibold lg:text-[40px]`}
              >
                Why Choose Manilla App
              </p>
              <p
                className={`${inter.className} text-[12px] leading-[14px] tracking-[0px] text-center text-[#868686] lg:text-[24px]  lg:font-semibold lg:mt-5 lg:leading-[34px]`}
              >
                -smarter, faster, and more reliable{" "}
                <span className="hidden lg:inline">
                  <br />
                </span>
                way to handle your bills, travel, and financial needs.
              </p>

              <br />

              <button
                className={`${inter.className} bg-black  text-[#FACA31] w-[109px] h-[32px] rounded-full opacity-100 flex items-center justify-center rotate-0 lg:w-[239px] lg:h-[60px] md:w-[160px] md:h-[40px]`}
              >
                <span
                  className={` ${inter.className}lg:text-[16px] md:text-[13px] text-[10px] leading-[20px] font-medium`}
                >
                  Why Choose
                </span>
                <span className="ml-1 text-[10px] leading-[20px] font-medium text-[white] lg:text-[16px]">
                  Us
                </span>
              </button>
            </div>

            {/* DOWN COLUMN */}
            <div className="relative flex flex-col md:flex-row lg:flex-row items-center lg:justify-center my-8 md:my-2 top-[-20px] lg:top-0 md:mt-8 lg:mt-15 ">
              <div className="md:flex lg:flex items-stretch justify-center gap-5 ">
                <div className="relative w-[320px] md:w-[400px] lg:w-[450px] h-auto md:h-[420px] lg:h-[450px] ">
                  <Image
                    src="/images/manandfemale1.png"
                    alt="background"
                    width={350}
                    height={300}
                    className="object-cover object-right rounded-xl w-full h-full"
                  />
                </div>

                <div className="bg-[#000] rounded-2xl w-[326px] md:w-[500px] lg:w-[800px] h-auto md:h-[420px] lg:h-[450px] mt-5 md:mt-0 p-5 flex flex-col items-center lg:ml-3">
                  <div className="flex gap-2">
                    <img
                      src="/icons/dotmanilla.png"
                      alt="icon"
                      className="w-[30px] h-[30px]"
                    />
                    <p
                      className={`${inter.className} text-[#E5E5E5] font-medium lg:text-[26px] text-[16px] leading-[100%] tracking-[-0.6px]`}
                    >
                      <span
                        className={`${inter.className} text-[#FACA31] font-medium lg:text-[26px] text-[16px] leading-[100%] tracking-[-0.6px]`}
                      >
                        Manilla App
                      </span>{" "}
                      makes everyday payments faster, easier, and more flexible
                    </p>
                  </div>

                  <div className="flex gap-3 w-full  bg-[#1D1D1D] rounded-lg p-3 mt-4 mx-auto self-start">
                    <img
                      src="/icons/dollaricon.png"
                      alt=""
                      className="w-[40px] h-[40px] flex-shrink-0"
                    />
                    <div className="flex flex-col gap-1 ">
                      <p
                        className={`${inter.className} text-[#E5E5E5] font-bold text-[12px] lg:text-[16px] leading-[140%] mb-1`}
                      >
                        Pay Utility Bills
                      </p>
                      <p
                        className={`${inter.className} text-[#E5E5E5] font-normal text-[10px] lg:text-[14px] leading-[140%]`}
                      >
                        Settle electricity, water, cable tv & internet bills in
                        seconds. Manilla lets you pay securely with stablecoins,
                        ensuring convenience and reliability for everyday
                        Nigerian households.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 w-full  bg-[#1D1D1D] rounded-lg p-3 mt-1 mx-auto self-start">
                    <img
                      src="/icons/bookicon.png"
                      alt=""
                      className="w-[40px] h-[40px] flex-shrink-0"
                    />
                    <div className="flex flex-col gap-1 ">
                      <p
                        className={`${inter.className} text-[#E5E5E5] font-bold text-[12px] leading-[140%] mb-1 lg:text-[16px]`}
                      >
                        Top Up Airtime & Data
                      </p>
                      <p
                        className={`${inter.className} text-[#E5E5E5] font-normal text-[10px] lg:text-[14px] leading-[140%]`}
                      >
                        Recharge instantly on all major networks in Nigeria. Use
                        stablecoins or cards to top-up airtime and data anytime,
                        anywhere—fast, seamless, and stress-free with Manilla.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 w-full  bg-[#1D1D1D] rounded-lg p-3 mt-1 mx-auto self-start">
                    <img
                      src="/icons/planeicon.png"
                      alt=""
                      className="w-[40px] h-[40px] flex-shrink-0"
                    />
                    <div className="flex flex-col gap-1 ">
                      <p
                        className={`${inter.className} text-[#E5E5E5] font-bold text-[12px] lg:text-[16px] leading-[140%] mb-1`}
                      >
                        Book Flights & Pay for Travel
                      </p>
                      <p
                        className={`${inter.className} text-[#E5E5E5] font-normal text-[10px] lg:text-[14px]
                         leading-[140%]`}
                      >
                        Plan trips with ease. Book flights, stays, and rides
                        while paying in crypto or card. Manilla makes travel
                        seamless, secure, and globally connected for Nigerians.
                      </p>
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
