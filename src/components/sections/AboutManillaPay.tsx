import React from "react";
import Link from "next/link";

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
              <img
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

            <img
              src="/images/ManillaText.png"
              alt="Text Image"
              width={500}
              height={300}
              className="mb-6 mx-auto lg:mx-0"
            />

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
              <button className="px-6 py-3 bg-gray-100 text-[#001EA9] rounded-full hover:bg-gray-200 transition">
                Click to learn more about us
              </button>
              <button className="px-6 py-3 bg-black text-white rounded-full transition">
                About Us
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex justify-center lg:justify-end lg:pr-5">
            <img
              src="/images/aboutmanillapay1.png"
              alt="Right Side Image"
              width={450}
              height={400}
              className="relative z-10 object-contain"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <section
          className="relative bg-cover bg-center py-8"
          style={{ backgroundImage: "url('/images/aboutmanillapay2.png')" }}
        >
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch t">
            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-4 h-full top-4">
              {/* Top Image */}
              <img src="/images/img1.png" alt="Top" className="rounded-lg" />

              {/* Middle Section */}
              <div className="relative flex items-center justify-center">
                {/* Background image (img2) */}
                <img
                  src="/images/img2.png"
                  alt="Background Left"
                  className="w-1/2 rounded-lg object-cover 
               md:-mr-8 lg:-mr-12 lg:-mt-17 -mt-15" // pulls it closer on larger screens
                />

                {/* Foreground image (img3) */}
                <img
                  src="/images/img3.png"
                  alt="Foreground Right"
                  className="w-[400px] rounded-lg relative z-10 shrink-0 
               md:-ml-8 lg:-ml-12 lg:-mt-17 -mt-7" // pulls it closer on larger screens
                />
              </div>

              {/* Bottom Image */}
              <img
                src="/images/img4.png"
                alt="Bottom"
                className="rounded-lg md:-mt-6 lg:-mt-17 -mt-6" // overlap more on large screens
              />
            </div>

            {/* RIGHT COLUMN */}
            <div className="relative flex flex-col items-center top-4">
              {/* Button above the card */}
              <button className="absolute -top-6 bg-black text-white px-6 py-3 rounded-full ">
                <span className="text-[rgba(250,202,49,1)]">Why Choose</span>{" "}
                Manilla App
              </button>

              {/* Card with bg-image */}
              <div
                className="p-8 rounded-2xl bg-gray-200/100 text-white bg-cover bg-center mt-8 h-full"
                style={{ backgroundImage: "url('/images/card-bg.png')" }}
              >
                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-black">
                  Manilla makes everyday payments faster, easier, and more
                  flexible
                </h1>

                {/* Features List */}
                <ul className="grid gap-4 lg:grid-cols-2">
                  <li className="flex items-center gap-3">
                    <img
                      src="/icons/Iconaboutus.png"
                      alt="Feature"
                      className="w-10 h-10"
                    />
                    <span className="text-black">Pay Utility Bills</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <img
                      src="/icons/Iconaboutus.png"
                      alt="Feature"
                      className="w-10 h-10"
                    />
                    <span className="text-black">Top Up Airtime & Data</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <img
                      src="/icons/Iconaboutus.png"
                      alt="Feature"
                      className="w-10 h-10"
                    />
                    <span className="text-black">Pay Using Crypto</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <img
                      src="/icons/Iconaboutus.png"
                      alt="Feature"
                      className="w-10 h-10"
                    />
                    <span className="text-black">Track Transactions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <img
                      src="/icons/Iconaboutus.png"
                      alt="Feature"
                      className="w-10 h-10"
                    />
                    <span className="text-black">
                      Book Flights & Pay for Travel
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutManillaPay;
