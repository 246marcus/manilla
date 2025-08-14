import React from "react";
import darkbg from "../../../public/images/darkstylebg.png";
import gradient from "../../../public/images/gradientStripe.png";

const MediaPartners: React.FC = () => {
  return (
    <section className="bg-white max-w-7xl mx-auto px-4 mt-6">
      {/* Top dark section */}
      {/* Top dark section */}
      <div
        className="bg-gray-900 text-white rounded-t-[2rem] px-4 py-12 sm:py-16"
        style={{
          backgroundImage: `url(${darkbg.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Top pill */}
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-5 py-2 rounded-full text-xs font-medium mb-6">
            Why Choose Manilla App
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Media Partners
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            Whether you&apos;re a business or individual, Manilla Finance offers
            a secure and flexible way to manage payments, bills, and travel —
            all in one trusted platform.
          </p>
        </div>

        {/* Trusted Platform Rolling Effect */}
        <div className="relative z-10 mt-16 w-full overflow-hidden">
          <div className="flex flex-nowrap animate-marquee will-change-transform">
            <img
              src="/images/mediapartner.png"
              alt="Trusted by top platforms"
              className="block h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 w-auto flex-none"
            />
            <img
              src="/images/mediapartner.png"
              alt=""
              aria-hidden="true"
              className="block h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 w-auto flex-none"
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient section */}
      <div
        className="bg-gradient-to-r from-green-50 via-purple-50 to-pink-50 px-4 sm:px-6 lg:px-8 py-10 sm:py-14"
        style={{
          backgroundImage: `url(${gradient.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // optional, makes sure it fills the area
        }}
      >
        <div className="max-w-5xl mx-auto text-center md:text-start">
          <h3 className="text-starttext-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Be First. Be Ready.
          </h3>
          <div className="flex flex-col md:flex-row">
            <p className=" md:flex-2/6 text-xs md:text-sm text-gray-600 max-w-sm my-auto ">
              Manilla is launching soon — Join our Newsletter. Join our
              newsletter to get early access, exclusive updates and a front-row
              seat to the future of cross-border payments
            </p>
            {/* Contact form simulation */}
            <div className=" md:flex-4/6 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Type Email here"
                className="flex-1 rounded-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
              />
              <button className="px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaPartners;
