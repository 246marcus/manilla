"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Products = () => {
  const slides = [
    {
      topIcon: "/images/product.png",
      graphicImage: "/images/productImage1.png",

      // LEFT SIDE TEXT
      leftTitle: "Manilla Pay",
      leftParagraph1:
        "Imagine settling all your household bills in one place, in seconds, without worrying about failed bank transfers or app downtimes.",
      leftParagraph2:
        "With our smart, intuitive app, you can pay for electricity, water, internet, airtime, cable subscriptions, and more - all using your crypto wallet or debit card.",

      // RIGHT SIDE TEXT & ASSETS
      rightBg: "/images/Rectangle.png",
      rightHeading:
        "A powerful suite of tools built to simplify your financial life",
      rightItems: [
        { icon: "/icons/iconproductarrow.png", text: "Manilla Pay" },
        { icon: "/icons/icon1.png", text: "Manilla Crypto Debit Card" },
        { icon: "/icons/icon1.png", text: "Manilla Token (MNLA)" },
      ],
      vectorLine: "/icons/Vector4.png",
      rightParagraph:
        "Designed for Nigerian realities, Manilla Pay eliminates queues, delays, and app-switching fatigue. It’s secure, scalable, and built for daily life.",
    },
    {
      topIcon: "/images/product.png",
      graphicImage: "/images/productImage2.png",

      // LEFT SIDE TEXT
      leftTitle: "Manilla Crypto Debit Card",
      leftParagraph1:
        "You shouldn’t have to jump through hoops to use your crypto in the real world. Our upcoming Manilla Crypto Debit Card makes that dream a reality.",
      leftParagraph2:
        "Shop, pay bills, ride, or dine anywhere Mastercard is accepted - without manually converting your crypto.",

      // RIGHT SIDE TEXT & ASSETS
      rightBg: "/images/Rectangle.png",
      rightHeading: "Borderless transfers, limitless possibilities",
      rightItems: [
        { icon: "/icons/icon1.png", text: "Manilla Pay" },
        {
          icon: "/icons/iconproductarrow2.png",
          text: "Manilla Crypto Debit Card",
        },
        { icon: "/icons/icon1.png", text: "Manilla Token (MNLA)" },
      ],
      vectorLine: "/icons/vector4.png",
      rightParagraph:
        "The bridge between your wallet and the world - Real-time crypto-to-naira conversion, seamless integration, and global utility packed into one sleek card.",
    },
    {
      topIcon: "/images/product.png",
      graphicImage: "/images/productImage3.png",

      // LEFT SIDE TEXT
      leftTitle: "Manilla Token (MNLA)",
      leftParagraph1:
        "Grow your wealth with our curated selection of crypto and fiat investment products.",
      leftParagraph2:
        "As you use Manilla Pay, you earn MNLA tokens. Stake them, save them, or spend them across our ecosystem.",

      // RIGHT SIDE TEXT & ASSETS
      rightBg: "/images/Rectangle.png",
      rightHeading:
        "A powerful suite of tools built to simplify your financial life",
      rightItems: [
        { icon: "/icons/icon1.png", text: "Manilla Pay" },
        { icon: "/icons/icon1.png", text: "Manilla Crypto Debit Card" },
        { icon: "/icons/iconproductarrow3.png", text: "Manilla Token (MNLA)" },
      ],
      vectorLine: "/icons/vector4.png",
      rightParagraph:
        "From discounted bills to referral rewards and borderless transactions, MNLA is built to increase crypto value in your everyday life.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative bg-white text-gray-900 pt-8 pb-16">
      <div className="max-w-[95%] lg:max-w-[1400px] mx-auto px-6 border-l border-r border-gray-200">
        {/* Top Row: Icon & Button */}
        <div className="flex flex-col items-center justify-center mb-12 space-y-4 -mt-22">
          <button className="p-4 bg-transparent hover:scale-105 transition-transform -mt-5">
            <Image
              src={currentSlide.topIcon}
              alt="Product Icon"
              width={250}
              height={150}
              className="object-contain w-28 sm:w-36 md:w-48 lg:w-56"
            />
          </button>

          <Link href="#">
            <button
              className="
                px-6 py-3
                bg-white text-black
                text-base sm:text-lg
                font-semibold
                rounded-full
                border border-gray-300
                hover:bg-gray-100
                transition
                w-full sm:w-auto
                max-w-xs
                text-center
              "
            >
              Learn About Our Products
            </button>
          </Link>
        </div>
      </div>

      {/* Dynamic text & graphic */}
      <div className="relative max-w-[950px] mx-auto space-y-8">
        <div>
          {/* TEXT CONTENT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start p-4">
            {/* LEFT COLUMN */}
            <div>
              <h2 className="text-4xl font-bold mb-4">
                {currentSlide.leftTitle}
              </h2>
              <p className="mb-4 text-lg">{currentSlide.leftParagraph1}</p>
              <p className="font-semibold text-lg">
                {currentSlide.leftParagraph2}
              </p>
            </div>

            {/* RIGHT COLUMN */}
            <div
              className="p-16 bg-no-repeat bg-contain bg-center"
              style={{ backgroundImage: `url(${currentSlide.rightBg})` }}
            >
              <h3 className="font-bold text-xl mb-4">
                {currentSlide.rightHeading}
              </h3>

              <div className="flex flex-nowrap items-center gap-6 mb-4 whitespace-nowrap">
                {currentSlide.rightItems.map((item, idx) => {
                  const isArrow = item.icon.includes("iconproductarrow");
                  return (
                    <div key={idx} className="flex items-center gap-2">
                      <Image
                        src={item.icon}
                        alt={item.text}
                        width={isArrow ? 50 : 24}
                        height={isArrow ? 36 : 24}
                      />
                      <span
                        className={
                          isArrow ? "font-bold text-lg" : "font-bold text-base"
                        }
                      >
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <Image
                src={currentSlide.vectorLine}
                alt="Separator Line"
                width={600}
                height={100}
                className="mb-4"
              />

              <p className="text-gray-600">{currentSlide.rightParagraph}</p>
            </div>
          </div>
        </div>

        {/* GRAPHIC IMAGE */}
        <div className="flex justify-center p-4">
          <Image
            src={currentSlide.graphicImage}
            alt="Explanation Graphic"
            width={1000}
            height={400}
            className="object-contain w-full h-auto"
          />
        </div>

        {/* INDICATOR BAR */}
        <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 h-3 rounded-md bg-blue-500"
                  : "w-3 h-3 rounded-full bg-gray-300"
              }`}
            ></span>
          ))}
        </div>

        {/* NAVIGATION ARROWS */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex gap-4">
          <button
            onClick={prevSlide}
            className="bg-white/80 p-2 rounded-full hover:bg-white shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="bg-white/80 p-2 rounded-full hover:bg-white shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
