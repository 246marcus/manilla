"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDownIcon } from "lucide-react";

// Example static icon imports (adjust the paths to match your folder)
import ManillaFinance from "../../../public/icons/Iconaboutus.png";
import PaymentIcon from "../../../public/icons/Iconaboutus.png";
import ShoppingIcon from "../../../public/icons/Iconaboutus.png";

const services = [
  {
    title: "Everyday Bills",
    description:
      "Whether it&apos;s NEPA light, topping up Glo data, or paying for your DSTV subscription—we make it happen in a few taps, 24/7.",
    features: [
      { icon: ManillaFinance, label: "Airtime & Data" },
      { icon: ManillaFinance, label: "Cabel" },
      { icon: PaymentIcon, label: "Electricity" },
      { icon: PaymentIcon, label: "Water" },
    ],
  },
  {
    title: "Travel & Mobility",
    description:
      "From flights and hotel reservations to airport drop-offs, your entire travel experience can now be powered by stablecoins and Manilla&apos;s smart wallet.",
    features: [
      { icon: ManillaFinance, label: "Domestic and international" },
      {
        icon: ManillaFinance,
        label: "Airport drop-off and pickup with crypto",
      },
      {
        icon: ManillaFinance,
        label: "Hotel stays in Nigeria or overseas",
      },
    ],
  },
  {
    title: "For Businesses & Freelancers",
    description:
      "With Manilla&apos;s business tools, you can invoice international clients and get paid in crypto—without conversion headaches, delays, or high banking fees. Get Paid in Crypto. Anywhere. Instantly. for goods and services with your wallet balance.",
    features: [
      { icon: ShoppingIcon, label: "Invoice Settlement" },
      { icon: ShoppingIcon, label: "Crypto Payment API" },
    ],
  },
  {
    title: "Convert Crypto to Naira Without Stress",
    description:
      "Naira Bridge offers you a reliable, transparent way to convert major cryptocurrencies into naira—and vice versa. Built for traders, freelancers, and everyday users alike, it&apos;s designed to be fast, fair, and frictionless.",
    features: [
      {
        icon: ShoppingIcon,
        label: "Swap Naira to USDT, BTC, ETH, etc. instantly",
      },
      { icon: ShoppingIcon, label: "24/7 access, anytime, anywhere" },
      { icon: ShoppingIcon, label: "Get transparent, competitive rates" },
    ],
  },
];

const AboutUs = () => {
  return (
    <section className="bg-white text-gray-900 md:py-16">
      <div className="max-w-7xl mx-auto px-6 border-l border-r border-gray-200 text-center">
        {/* About Title */}
        <div className="relative -mt-8 md:-mt-10 lg:-mt-12">
          <button className="p-4 bg-transparent scale-90 transition-transform">
            <Image
              src="/icons/aboutusIcon.png"
              alt="About Us Icon"
              width={250}
              height={150}
              className="object-contain w-40 sm:w-48 md:w-60 lg:w-[250px] h-auto scale-75 md:scale-90 "
            />
          </button>
        </div>

        {/* Button */}
        <Link href="/company">
          <button className="mb-6 px-6 py-2 text-sm bg-[#001EA9] text-white rounded-full hover:bg-[#002FCC] transition">
            Learn More About Us
          </button>
        </Link>

        {/* Four lines of text */}
        <div className="space-y-2 mb-12 max-w-3xl mx-auto text-sm text-gray-600">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Pay Everyday Bills.</h2>
          <p className="text-base md:text-lg font-semibold">Crypto Convenience for Nigeria Hustle.</p>
          <p className="text-sm">
            Life in Nigeria is fast-paced, and your bills shouldn&apos;t slow
            you down.
          </p>
          <p>
            Manilla lets you manage and settle every essential utility in one
            place.
          </p>
        </div>

        {/* Two sections */}
        <div className="flex flex-col md:flex-row md:items-center max-w-7xl mx-auto  gap-4 md:gap-6 lg:gap-8  py-4">
          {/* Left Image */}
          <div className=" w-full md:flex-1 ">
            <img
              src="/images/aboutus.png"
              alt="About Image 1"
              className="object-contain w-full h-90 lg:max-h-150 sm:h-110 md:h-auto  "
            />
          </div>

          {/* Right Scroll */}
          <div className="w-full md:flex-1 relative flex flex-col h-[350px] sm:h-[400px] md:h-[500px] my-6">
            <div className="flex items-center justify-center lg:justify-start lg:items-end  gap-2 mb-4">
              <h2 className="text-lg font-semibold">Our Services</h2>
              <ChevronDownIcon className="w-5 h-5 text-gray-600" />
            </div>

            {/* Scroll Container */}
            <div className="flex-1 overflow-y-scroll scrollbar-hide pr-4 scroll-container space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 shadow-sm border border-gray-200 text-center md:text-left "
                >
                  <h1 className="text-xl font-bold text-center md:text-start mb-2">{service.title}</h1>
                  <p className="text-sm text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Image
                          src={feature.icon}
                          alt={feature.label}
                          width={40}
                          height={20}
                          className="object-contain"
                        />
                        <span className="text-sm">{feature.label}</span>
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
