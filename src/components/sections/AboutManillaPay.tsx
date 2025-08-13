import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutManillaPay = () => {
  return (
    <section className="relative bg-white text-gray-900 pt-8 pb-16 ">
      <div className="max-w-7xl mx-auto px-6 ">
        {/* Top Row */}
        <div className="relative flex items-center mb-8 w-full">
          {/* Left Button */}
          <div className="hidden md:block">
            <Link href="/about">
              <button className="px-6 py-3 bg-white text-black text-lg font-semibold rounded-full border border-gray-300 hover:bg-gray-100 transition">
                About Manilla Pay
              </button>
            </Link>
          </div>

          {/* Center Icon */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -mt-8 md:-mt-10 lg:-mt-12">
            <button className="p-4 bg-transparent hover:scale-105 transition-transform">
              <Image
                src="/icons/aboutusIcon.png"
                alt="About Us Icon"
                width={250}
                height={150}
                className="object-contain w-36 sm:w-44 md:w-56 lg:w-64"
              />
            </button>
          </div>

          {/* Right Empty Space to balance */}
          <div className="hidden md:block" style={{ width: "130px" }}></div>
        </div>

        {/* Main Content */}
        <div className="mt-12 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
          {/* Left Column - Text */}
          <div className="max-w-lg text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-4">
              Redefining How Nigeria Pay
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Nigeria is moving forward - but payments are still stuck in the
              past.
            </p>

            {/* Text Image */}
            <Image
              src="/images/ManillaText.png"
              alt="Text Image"
              width={500}
              height={100}
              className="mb-6 mx-auto lg:mx-0"
            />

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
              <button className="px-6 py-3 bg-gray-100 text-[#001EA9] rounded-full hover:bg-gray-200 transition">
                Click to learn more about usd
              </button>
              <button className="px-6 py-3 bg-[#001EA9] text-white rounded-full hover:bg-[#002FCC] transition">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex justify-center lg:justify-end lg:pr-5">
            <Image
              src="/images/aboutmanillapay1.png"
              alt="Right Side Image"
              width={450}
              height={400}
              className="relative z-10 object-contain"
            />
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="relative">
          <Image
            src="/images/aboutmanillapay2.png"
            alt="Bottom Decoration"
            width={1200}
            height={500}
            className="mx-auto object-contain scale-110 sm:scale-100"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutManillaPay;
