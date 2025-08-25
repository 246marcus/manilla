import React from "react";
import Link from "next/link";

const AboutManillaPay = () => {
  return (
    <section className="relative bg-white text-gray-900 pt-8 pb-16 ">
      <div className="max-w-7xl mx-auto px-6 ">
        <div className="">
          {/* Top Row */}

          <div className="relative flex items-center mb-8 w-full">
            {/* Left Button */}
            <div className="hidden md:block lg:mt-10 lg:translate-y-8">
              <Link href="/company">
                <button className="px-6 py-3 bg-white text-black text-base font-semibold rounded-full border border-gray-300 hover:bg-gray-100 transition">
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
          <div className="mt-12 lg:my-0 flex flex-col lg:flex-row items-center lg:justify-between  gap-12">
            {/* Left Column - Text */}
            <div className="max-w-lg text-center lg:text-left px-3 lg:px-0 text-black/80 lg:flex-1 ">
              <h2 className=" text-2xl md:text-4xl font-bold mb-4">
                Redefining How Nigeria Pay
              </h2>
              <p className=" md:text-lg text-gray-600 mb-6">
                Nigeria is moving forward - but payments are still stuck in the
                past.
              </p>

              <p className="text-sm p-2 py-3 rounded-md bg-black/10 text-black/70">
                From bank queues and failed transfers to delayed utility credits
                and cross-border headaches, the system isn’t built for speed or
                convenience. That’s why we created Manilla Pay: to merge the
                reliability of traditional infrastructure with the flexibility
                and freedom of crypto.
              </p>

              {/* Buttons */}
              <div className="flex gap-4 flex-wrap justify-center lg:justify-start items-center">
                <Link
                  href="/company"
                  className="px-6 py-3 cursor-pointer mb-2 mt-4 bg-gray-100 text-[#001EA9] rounded-full hover:bg-gray-200 transition"
                >
                  Click to learn more about us
                </Link>

                <Link href="/company">
                  <button className="px-6 py-2 md:mt-2 bg-black/90 hover:bg-black/80 text-white rounded-full cursor-pointer transition">
                    About Us
                  </button>
                </Link>
              </div>
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
        <section
          className="relative bg-black/10 bg-cover  rounded-2xl bg-center py-8  mb-12"
          style={{ backgroundImage: "url('/images/aboutmanillapay2.png')" }}
        >
          <div
            className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-1 items-stretch bg-no-repeat"
            style={{ backgroundImage: "url('/images/cryptowallet.png')" }}
          >
            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-0 md:justify-center  items-center top-1">
              {/* Top Image */}
              <img
                src="/images/img1.png"
                alt="Top"
                className=" h-30 w-70 lg:ml-20 scale-110 md:scale-105 "
              />

              {/* Middle Section */}

              <a
                href="https://vault.manilla.finance"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/img3.png"
                  alt="Foreground Right"
                  className="h-30 w-70 lg:ml-40 md:ml scale-110 md:scale-105 cursor-pointer"
                />
              </a>
              <Link href="/manillaSuit/card">
                <img
                  src="/images/img4.png"
                  alt="Bottom"
                  className="h-30 w-70 lg:ml-20 scale-110 md:scale-105 cursor-pointer"
                />
              </Link>
            </div>

            {/* RIGHT COLUMN */}
            <div className="relative flex flex-col items-center my-8 md:my-2 top-4">
              {/* Button above the card */}
              <button className="absolute -top-6 bg-black text-white px-6 my-3 py-2 rounded-full text-sm md:text-base ">
                <span className="text-[rgba(250,202,49,1)]">Why Choose</span>{" "}
                Manilla App
              </button>

              {/* Card with bg-image */}
              <div
                className="p-4 md:p-8 rounded-2xl bg-gray-200/100 text-white bg-cover bg-center mt-12 "
                style={{ backgroundImage: "url('/images/card-bg.png')" }}
              >
                <h1 className=" text-balance md:text-xl text-center font-bold mb-6 text-black/80">
                  Manilla makes everyday payments faster, easier, and more
                  flexible
                </h1>

                {/* Features List */}
                <ul className="grid gap-1 lg:grid-cols-2 ">
                  <li className="flex items-center gap-1 text-sm">
                    <img
                      src="/icons/Iconaboutus.png"
                      alt="Feature"
                      className="w-10 h-10"
                    />
                    <span className="text-black">Pay Utility Bills</span>
                  </li>
                  <li className="flex items-center gap-1 text-sm">
                    <img
                      src="/icons/Iconaboutus.png"
                      alt="Feature"
                      className="w-10 h-10"
                    />
                    <span className="text-black">Merchant Payment</span>
                  </li>
                  <li className="flex items-center gap-1 text-sm">
                    <img
                      src="/icons/Iconaboutus.png"
                      alt="Feature"
                      className="w-10 h-10"
                    />
                    <span className="text-black">Digital Assets Swap</span>
                  </li>
                  <li className="flex items-center gap-1 text-sm">
                    <img
                      src="/icons/Iconaboutus.png"
                      alt="Feature"
                      className="w-10 h-10"
                    />
                    <span className="text-black ">
                      Book Flights & Pay for Travel
                    </span>
                  </li>
                  <li className="flex items-center gap-1 text-sm">
                    <img
                      src="/icons/Iconaboutus.png"
                      alt="Feature"
                      className="w-10 h-10"
                    />
                    <span className="text-black">Airport Transfers</span>
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
