"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Raleway, Inter } from "next/font/google";
import ManillaFinance from "../../../public/icons/Iconaboutus.png";
import PaymentIcon from "../../../public/icons/Iconaboutus.png";
import ShoppingIcon from "../../../public/icons/Iconaboutus.png";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["600"],
});

const services = [
  {
    title: "Everyday Bills",
    description: `Whether it's PHCN power, topping up Glo data, or paying for your DSTV subscription—we make it happen in a few taps, 24/7.`,
    features: [
      { icon: ManillaFinance, label: "Airtime & Data" },
      { icon: ManillaFinance, label: "Cable" },
      { icon: PaymentIcon, label: "Electricity" },
      { icon: PaymentIcon, label: "Water" },
    ],
  },
  {
    title: "Travel & Mobility",
    description: `From flights and hotel reservations to airport drop-offs, your entire travel experience can now be powered by stablecoins and Manilla's smart wallet.`,
    features: [
      { icon: ManillaFinance, label: "Domestic and international" },
      { icon: ManillaFinance, label: "Airport drop-off and pickup" },
      { icon: ManillaFinance, label: "Hotel stays in Nigeria or overseas" },
    ],
  },
  {
    title: "For Businesses & Freelancers",
    description: `With Manilla's business tools, you can invoice international clients and get paid in crypto—without conversion headaches, delays, or high banking fees.`,
    features: [
      { icon: ShoppingIcon, label: "Invoice Settlement" },
      { icon: ShoppingIcon, label: "Crypto Payment API" },
    ],
  },
  {
    title: "For Businesses & Freelancers",
    description: `With Manilla's business tools, you can invoice international clients and get paid in crypto—without conversion headaches, delays, or high banking fees.`,
    features: [
      { icon: ShoppingIcon, label: "Invoice Settlement" },
      { icon: ShoppingIcon, label: "Crypto Payment API" },
    ],
  },
  {
    title: "Convert Crypto to Naira Without Stress",
    description: `Naira Bridge offers you a reliable, transparent way to convert major cryptocurrencies into naira—and vice versa.`,
    features: [
      { icon: ShoppingIcon, label: "Swap Naira to USDT, BTC, ETH, etc." },
      { icon: ShoppingIcon, label: "24/7 access, anytime, anywhere" },
      { icon: ShoppingIcon, label: "Get transparent, competitive rates" },
    ],
  },
];

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white text-gray-900 md:py-16">
      <img
        src="/icons/Vector4.png"
        alt=""
        className=" object-cover w-full h-[1px] mb-3 sm:h-[2px]"
      />

      <div className="max-w-7xl mx-auto px-6 border-l border-r border-gray-200 text-center">
        {/* About Title */}
        <div className="relative -mt-5 md:-mt-10 lg:-mt-9">
          {/* Image for md & lg screens */}
          <Image
            src="/icons/aboutusIcon1.png"
            alt="About Us Icon"
            width={250}
            height={150}
            className="object-contain w-[188px] h-[94px] sm:w-48 md:w-60 lg:w-[280px] mx-auto hidden md:block"
          />

          {/* Image for small screens */}
          <Image
            src="/icons/ourservices.png"
            alt="About Us Icon (Mobile)"
            width={250}
            height={150}
            className="object-contain w-[188px] h-[94px] sm:w-48 md:w-60 lg:w-[250px] mx-auto md:hidden"
          />
        </div>

        {/* Learn More Button */}
        <Link href="/company">
          <button className="mb-6 px-6 py-2 text-sm text-[#181635] rounded-full border border-gray-300 transition hover:border-gray-500">
            Learn About Our Services
          </button>
        </Link>

        {/* Intro Text */}
        <div className="space-y-2 mb-12 max-w-3xl mx-auto text-sm">
          <p
            className={`${raleway.className} text-[14px] md:text-2xl font-semibold mb-2`}
          >
            Pay Everyday Bills.
          </p>
          <p className={`${inter.className} text-[#868686] text-[14px]`}>
            Crypto Convenience for Nigeria Hustle.
          </p>
          <p className={`${inter.className} text-[#868686] text-[10px]`}>
            Life in Nigeria is fast-paced, and your bills shouldn&apos;t slow
            you down.
          </p>
          <p className={`${inter.className} text-[#868686] text-[10px]`}>
            Manilla lets you manage and settle every essential utility in one
            place.
          </p>
        </div>

        {/* Two Side-by-Side Sections */}
        <div className="flex flex-col md:flex-row w-full max-w-[1200px] mx-auto gap-6 py-4 px-4 md:px-8">
          {/* LEFT SIDE */}
          <div className="relative flex-1 flex flex-col justify-between rounded-t-3xl overflow-hidden h-[500px] md:h-[700px] lg:h-[800px]">
            <Image
              src="/images/your-background.png"
              alt="background"
              fill
              className="object-cover object-right rounded-t-3xl"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 flex flex-col items-center justify-between h-full px-6 ">
              <div className="text-center mt-5 md:mt-8 mb-3">
                <p
                  className={`${inter.className} text-white text-[8px] md:text-[15px] lg:text-[20px] font-medium leading-[140%] mb-4`}
                >
                  Simplifying finance for individuals, travelers, and the
                  <span className="block">
                    diaspora — fast, secure, and flexible.
                  </span>
                </p>
                <p
                  className={`${inter.className} text-white text-[14px] md:text-[18px] lg:text-[24px] font-semibold`}
                >
                  Empowering Everyday{" "}
                  <span className="block">Transactions</span>
                </p>
              </div>

              <div className="w-full max-w-5xl mx-auto ">
                <Image
                  src="/images/laptop1.png"
                  alt="laptop"
                  width={1200}
                  height={600}
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full md:flex-1 relative flex flex-col bg-[#F2F2F259] rounded-t-3xl  h-[400px] md:h-[700px] lg:h-[800px]">
            {/* Header */}
            <div className="flex items-center justify-center gap-3 py-4">
              <p
                className={`${inter.className} text-lg font-extrabold text-[#181635]`}
              >
                Our Services
              </p>
              <img
                src="/icons/serviceicon.png"
                alt="dropdown icon"
                className="w-[30px] h-[30px]"
              />
            </div>

            {/* SCROLL SECTION (Desktop/Tablet) */}
            <div className="hidden md:block flex-1 overflow-y-scroll scrollbar-hide px-6 pb-6 space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 shadow-sm text-left border border-[#28282852]"
                >
                  <p
                    className={`${inter.className} font-semibold text-[16px] text-[#000] mb-3`}
                  >
                    {service.title}
                  </p>
                  <p
                    className={`${inter.className} font-medium text-[12px] text-[#000] mb-3`}
                  >
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Image
                          src={feature.icon}
                          alt={feature.label}
                          width={40}
                          height={20}
                          className="w-[21px] h-[21px]"
                        />
                        <span
                          className={`${inter.className} text-[12px] font-medium text-[#181635]`}
                        >
                          {feature.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* SCROLL SECTION (Mobile) */}
            <div className="md:hidden flex-1 overflow-y-scroll scrollbar-hide px-4 pb-6 space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 shadow-sm text-left border border-[#28282852]"
                >
                  <p
                    className={`${inter.className} font-semibold text-[16px] text-[#000] mb-3`}
                  >
                    {service.title}
                  </p>
                  <p
                    className={`${inter.className} font-medium text-[12px] text-[#000] mb-3`}
                  >
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Image
                          src={feature.icon}
                          alt={feature.label}
                          width={40}
                          height={20}
                          className="w-[21px] h-[21px]"
                        />
                        <span
                          className={`${inter.className} text-[12px] font-medium text-[#181635]`}
                        >
                          {feature.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
