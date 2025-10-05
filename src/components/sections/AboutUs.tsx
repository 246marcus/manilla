// "use client";
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Raleway, Inter } from "next/font/google";
// import ManillaFinance from "../../../public/icons/Iconaboutus.png";
// import PaymentIcon from "../../../public/icons/Iconaboutus.png";
// import ShoppingIcon from "../../../public/icons/Iconaboutus.png";

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

// const raleway = Raleway({
//   subsets: ["latin"],
//   weight: ["600"],
// });

// const services = [
//   {
//     title: "Everyday Bills",
//     description: `Whether it's PHCN power, topping up Glo data, or paying for your DSTV subscription—we make it happen in a few taps, 24/7.`,
//     features: [
//       { icon: ManillaFinance, label: "Airtime & Data" },
//       { icon: ManillaFinance, label: "Cable" },
//       { icon: PaymentIcon, label: "Electricity" },
//       { icon: PaymentIcon, label: "Water" },
//     ],
//   },
//   {
//     title: "Travel & Mobility",
//     description: `From flights and hotel reservations to airport drop-offs, your entire travel experience can now be powered by stablecoins and Manilla's smart wallet.`,
//     features: [
//       { icon: ManillaFinance, label: "Domestic and international" },
//       {
//         icon: ManillaFinance,
//         label: "Airport drop-off and pickup",
//       },
//       {
//         icon: ManillaFinance,
//         label: "Hotel stays in Nigeria or overseas",
//       },
//     ],
//   },
//   {
//     title: "For Businesses & Freelancers",
//     description: ` With Manilla's business tools, you can invoice international clients and get paid in crypto—without conversion headaches, delays, or high banking fees. Get Paid in Crypto. Anywhere. Instantly. for goods and services with your wallet balance.`,
//     features: [
//       { icon: ShoppingIcon, label: "Invoice Settlement" },
//       { icon: ShoppingIcon, label: "Crypto Payment API" },
//     ],
//   },
//   {
//     title: "Convert Crypto to Naira Without Stress",
//     description: ` Naira Bridge offers you a reliable, transparent way to convert major cryptocurrencies into naira—and vice versa. Built for traders, freelancers, and everyday users alike, it's designed to be fast, fair, and frictionless.`,
//     features: [
//       {
//         icon: ShoppingIcon,
//         label: "Swap Naira to USDT, BTC, ETH, etc.",
//       },
//       { icon: ShoppingIcon, label: "24/7 access, anytime, anywhere" },
//       { icon: ShoppingIcon, label: "Get transparent, competitive rates" },
//     ],
//   },
// ];

// const AboutUs = () => {
//   return (
//     <section className="bg-white text-gray-900 md:py-16">
//       <img src="/icons/Vector4.png" alt="" className="w-screen object-cover" />

//       <div className="max-w-7xl mx-auto px-6 border-l border-r border-gray-200 text-center">
//         {/* About Title */}
//         <div className="relative -mt-8 md:-mt-10 lg:-mt-12">
//           <button className="p-4 bg-transparent scale-90 transition-transform">
//             <Image
//               src="/icons/ourservices.png"
//               alt="About Us Icon"
//               width={250}
//               height={150}
//               className="object-contain w-[188px] h-[94px] sm:w-48 md:w-60 lg:w-[250px]  scale-75 md:scale-90 "
//             />
//           </button>
//         </div>

//         {/* Button */}
//         <Link href="/company">
//           <button
//             className="mb-6 px-6 py-2 text-sm  text-[#181635] rounded-full  transition border-[border: 1px solid;

// border-image-source: linear-gradient(260.45deg, rgba(40, 26, 201, 0.16) -2.69%, rgba(251, 179, 33, 0.16) 140.54%);

// ] border-1"
//           >
//             Learn About Our Services
//           </button>
//         </Link>

//         {/* Four lines of text */}
//         <div className="space-y-2 mb-12 max-w-3xl mx-auto text-sm text-[]">
//           <p
//             className={`${raleway.className} text-[14px] md:text-2xl font-semibold mb-2`}
//           >
//             Pay Everyday Bills.
//           </p>
//           <p className={`${inter.className} text-[#868686] text-[14px]`}>
//             Crypto Convenience for Nigeria Hustle.
//           </p>
//           <p className={`${inter.className} text-[#868686] text-[10px]`}>
//             Life in Nigeria is fast-paced, and your bills shouldn&apos;t slow
//             you down.
//           </p>
//           <p className={`${inter.className} text-[#868686] text-[10px]`}>
//             Manilla lets you manage and settle every essential utility in one
//             place.
//           </p>
//         </div>

//         {/* Two sections */}
//         <div className="flex flex-col md:flex-row md:items-center max-w-6xl mx-auto  gap-2 md:gap-6 lg:gap-8  py-4">
//           {/* Left Image */}
//           <div className=" w-full flex md:flex-1 ">
//             <img
//               src="/images/aboutus.png"
//               alt="About Image 1"
//               className=" flex-1 sm:flex-none w-auto sm:max-100 sm:mx-auto  md:mx-0 md:w-auto max-h-120 lg:max-h-150 md:flex-1  md:h-auto  "
//             />
//           </div>

//           {/* Right Scroll */}
//           <div className="w-full md:flex-1 relative flex flex-col h-[350px] sm:h-[400px] md:h-[500px] my-6  bg-[#F2F2F259]">
//             <div className="flex items-center justify-center lg:justify-start lg:items-end  gap-3 mb-4 mt-4">
//               <p
//                 className={`${inter.className}text-lg font-extrabold text-[20px] text-[#181635] `}
//               >
//                 Our Services
//               </p>
//               <img
//                 src="/icons/dropdownicon.png"
//                 alt=""
//                 className="w-[30.64] h-[30.64]text-gray-600"
//               />
//             </div>

//             {/* Scroll Container */}
//             <div className="flex-1 overflow-y-scroll scrollbar-hide pr-4 scroll-container space-y-4 ">
//               {services.map((service, index) => (
//                 <div
//                   key={index}
//                   className="bg-gray-50 rounded-lg p-4 shadow-sm text-center md:text-left border-[#28282852] border-3 "
//                 >
//                   <p
//                     className={`${inter.className} font-semibold text-[16px] text-[#000] flex justify-start mb-3`}
//                   >
//                     {service.title}
//                   </p>
//                   <p
//                     className={`${inter.className} font-semibold text-[10px] text-[#000] text-left mb-3 `}
//                   >
//                     {service.description}
//                   </p>

//                   <div className="grid grid-cols-2 gap-2">
//                     {service.features.map((feature, i) => (
//                       <div key={i} className="flex items-center gap-2">
//                         <Image
//                           src={feature.icon}
//                           alt={feature.label}
//                           width={40}
//                           height={20}
//                           className="w-[21.29px] h-[21.29px]"
//                         />
//                         <span
//                           className={`${inter.className} text-[12px] font-medium text-[#181635]`}
//                         >
//                           {feature.label}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
      {
        icon: ManillaFinance,
        label: "Airport drop-off and pickup",
      },
      {
        icon: ManillaFinance,
        label: "Hotel stays in Nigeria or overseas",
      },
    ],
  },
  {
    title: "For Businesses & Freelancers",
    description: ` With Manilla's business tools, you can invoice international clients and get paid in crypto—without conversion headaches, delays, or high banking fees. Get Paid in Crypto. Anywhere. Instantly. for goods and services with your wallet balance.`,
    features: [
      { icon: ShoppingIcon, label: "Invoice Settlement" },
      { icon: ShoppingIcon, label: "Crypto Payment API" },
    ],
  },
  {
    title: "Naira Bridge - Convert Crypto to Naira Without Stress",
    description: ` Naira Bridge offers you a reliable, transparent way to convert major cryptocurrencies into naira—and vice versa. Built for traders, freelancers, and everyday users alike, it's designed to be fast, fair, and frictionless.`,
    features: [
      {
        icon: ShoppingIcon,
        label: "Swap Naira to USDT, BTC, ETH, etc.",
      },
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
      <img src="/icons/Vector4.png" alt="" className="w-screen object-cover" />

      <div className="max-w-7xl mx-auto px-6 border-l border-r border-gray-200 text-center">
        {/* About Title */}
        <div className="relative -mt-8 md:-mt-10 lg:-mt-12">
          <button className="p-4 bg-transparent scale-90 transition-transform">
            <Image
              src="/icons/ourservices.png"
              alt="About Us Icon"
              width={250}
              height={150}
              className="object-contain w-[188px] h-[94px] sm:w-48 md:w-60 lg:w-[250px]  scale-75 md:scale-90 "
            />
          </button>
        </div>

        {/* Button */}
        <Link href="/company">
          <button
            className="mb-6 px-6 py-2 text-sm  text-[#181635] rounded-full  transition border-[border: 1px solid;

border-image-source: linear-gradient(260.45deg, rgba(40, 26, 201, 0.16) -2.69%, rgba(251, 179, 33, 0.16) 140.54%);

] border-1"
          >
            Learn About Our Services
          </button>
        </Link>

        {/* Four lines of text */}
        <div className="space-y-2 mb-12 max-w-3xl mx-auto text-sm text-[]">
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

        {/* Two sections */}
        <div className="flex flex-col md:flex-row md:items-center max-w-6xl mx-auto  gap-2 md:gap-6 lg:gap-8  py-4">
          {/* Left Image */}
          <div className=" w-full flex md:flex-1 ">
            <img
              src="/images/aboutus.png"
              alt="About Image 1"
              className=" flex-1 sm:flex-none w-auto sm:max-100 sm:mx-auto  md:mx-0 md:w-auto max-h-120 lg:max-h-150 md:flex-1  md:h-auto  "
            />
          </div>

          {/* Right Section with Carousel */}
          <div className="w-full md:flex-1 relative flex flex-col min-h-[400px] sm:min-h-[450px] md:min-h-[500px] my-6 bg-[#F2F2F259] p-4">
            <div className="flex items-center justify-center lg:justify-start lg:items-end gap-3 mb-4">
              <p
                className={`${inter.className} text-lg font-extrabold text-[20px] text-[#181635]`}
              >
                Our Services
              </p>
              <img
                src="/icons/dropdownicon.png"
                alt=""
                className="w-[30.64px] h-[30.64px] text-gray-600"
              />
            </div>

            {/* Current Card Display */}
            <div className="flex-1 pr-4 flex items-center justify-center">
              <div className="bg-gray-50 rounded-lg p-4 shadow-sm border-[#28282852] border-2 w-full max-w-md">
                <p
                  className={`${inter.className} font-semibold text-[16px] text-[#000] text-center mb-3 flex justify-start`}
                >
                  {services[currentIndex].title}
                </p>
                <p
                  className={`${inter.className} font-semibold text-[10px] text-[#000]  mb-3 text-left`}
                >
                  {services[currentIndex].description}
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {services[currentIndex].features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2  justify-start "
                    >
                      <Image
                        src={feature.icon}
                        alt={feature.label}
                        width={40}
                        height={20}
                        className="w-[21.29px] h-[21.29px]"
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
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-3 ml-[-20]">
              {/* Previous Button */}
              <button
                onClick={handlePrevious}
                className="focus:outline-none hover:opacity-70 transition-opacity"
                aria-label="Previous card"
              >
                <img
                  src="/icons/left-arrow.png"
                  alt="Previous"
                  className="w-[40px] h-[39.54px]"
                />
              </button>

              {/* Indicator Dots */}
              <div className="flex gap-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`transition-all duration-300 ${
                      currentIndex === index
                        ? "w-8 h-2 bg-black rounded-full"
                        : "w-2 h-2 bg-[#FACA31] rounded-full"
                    }`}
                    aria-label={`Go to card ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="focus:outline-none hover:opacity-70 transition-opacity"
                aria-label="Next card"
              >
                <img
                  src="/icons/right-arrow.png"
                  alt="Next"
                  className="w-[40px] h-[39.54px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
