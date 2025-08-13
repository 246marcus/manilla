"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Products = () => {
  const slides = [
    {
      topIcon: "/images/product.png",
      textImage: "/images/productText1.png",
      graphicImage: "/images/productImage1.png",
    },
    {
      topIcon: "/images/product.png",
      textImage: "/images/productText2.png",
      graphicImage: "/images/productImage2.png",
    },
    {
      topIcon: "/images/product.png",
      textImage: "/images/productText3.png",
      graphicImage: "/images/productImage3.png",
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
      {/* Expanded container with side borders */}
      <div className="max-w-[95%] lg:max-w-[1400px] mx-auto px-6 border-l border-r border-gray-200">
        {/* Top Row: Icon */}
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

        {/* Dynamic stacked images */}
        <div className="relative max-w-[950px] mx-auto space-y-4">
          {/* Text image */}
          <Image
            src={currentSlide.textImage}
            alt="Text Info"
            width={1200}
            height={400}
            className="object-contain w-full h-auto"
          />

          {/* Graphic image */}
          <Image
            src={currentSlide.graphicImage}
            alt="Explanation Graphic"
            width={1200}
            height={400}
            className="object-contain w-full h-auto"
          />

          {/* Indicator Bar */}
          <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 flex gap-2">
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

          {/* Navigation Arrows */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex gap-4">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="bg-white/80 p-2 rounded-full hover:bg-white shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="bg-white/80 p-2 rounded-full hover:bg-white shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
