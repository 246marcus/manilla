"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDownIcon } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="bg-white text-gray-900 py-16">
      {/* Expanded container with optional side borders */}
      <div className="max-w-[95%] lg:max-w-[1400px] mx-auto px-6 border-l border-r border-gray-200 text-center">
        {/* About Title */}
        <div className="relative -mt-8 md:-mt-10 lg:-mt-12">
          <button className="p-4 bg-transparent hover:scale-105 transition-transform">
            <Image
              src="/icons/aboutusIcon.png"
              alt="About Us Icon"
              width={250}
              height={150}
              className="object-contain w-40 sm:w-48 md:w-60 lg:w-[250px] h-auto"
            />
          </button>
        </div>

        {/* Button under the title */}
        <Link href="/company">
          <button className="mb-6 px-6 py-3 bg-[#001EA9] text-white rounded-full hover:bg-[#002FCC] transition">
            Learn More About Us
          </button>
        </Link>

        {/* Four lines of text */}
        <div className="space-y-2 mb-12 max-w-3xl mx-auto text-sm text-gray-600">
          <h2 className="text-4xl font-bold mb-4">Pay Everyday Bills.</h2>
          <p className="text-2xl">Crypto Convenience for Nigeria Hustle.</p>
          <p>
            Life in Nigeria is fast-paced, and your bills shouldn&apos;t slow
            you down.
          </p>
          <p>
            Manilla lets you manage and settle every essential utility in one
            place.
          </p>
        </div>

        {/* Two sections side by side / stacked on mobile */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-6">
          {/* Left Static Image */}
          <div className="flex-shrink-0 w-full md:w-1/2">
            <Image
              src="/images/aboutUs.png"
              alt="About Image 1"
              width={400}
              height={500}
              className="object-contain w-full h-[350px] sm:h-[400px] md:h-[500px]"
            />
          </div>

          {/* Right Vertical Scroll */}
          <div className="w-full md:w-1/2 relative flex flex-col h-[350px] sm:h-[400px] md:h-[500px]">
            {/* Title Above Scroll */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <h2 className="text-lg font-semibold">Our Services</h2>
              <ChevronDownIcon className="w-5 h-5 text-gray-600" />
            </div>

            {/* Scroll Container */}
            <div className="flex-1 overflow-y-scroll scrollbar-hide pr-4 scroll-container space-y-4">
              <Image
                src="/images/productCard1.png"
                alt="Product 1"
                width={400}
                height={250}
                className="rounded-lg object-cover w-full"
              />
              <Image
                src="/images/productCard2.png"
                alt="Product 2"
                width={400}
                height={250}
                className="rounded-lg object-cover w-full"
              />
              <Image
                src="/images/productCard3.png"
                alt="Product 3"
                width={400}
                height={250}
                className="rounded-lg object-cover w-full"
              />
              <Image
                src="/images/productCard3.png"
                alt="Product 4"
                width={400}
                height={250}
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
