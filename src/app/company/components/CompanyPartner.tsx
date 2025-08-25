import React from "react";
import darkbg from "../../../../public/images/darkstylebg.png";
import gradient from "../../../../public/images/gradientStripe.png";
import iconA from "../../../../public/icons/partnerA.png";
import iconB from "../../../../public/icons/partnerB.png";

const CompanyPartner: React.FC = () => {
  return (
    <section className="bg-white max-w-7xl mx-auto px-4">
      {/* Top dark section */}
      <div
        className="bg-gray-900 text-white rounded-t-[2rem] px-4  py-12 sm:py-16"
        style={{
          backgroundImage: `url(${darkbg.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // optional, makes sure it fills the area
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Top pill */}
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-5 py-2 rounded-full text-xs font-medium mb-6">
            Partner with Manilla
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Partner With Us
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            Whether you&apos;re a business or individual, Manilla Finance offers
            a secure and flexible way to manage payments, bills, and travel —
            all in one trusted platform.
          </p>

          {/* Partner options */}
          <div className="mt-10 flex  flex-col md:flex-row gap-3 overflow-clip">
            {/* For Businesses */}
            <div className="bg-white/10 md:flex-1 rounded-tr-2xl rounded-br-2xl -translate-x-8   p-6 flex items-start gap-3 z-10">
              <div>
                <h3 className="text-sm font-semibold mb-1 flex gap-2 items-center justify-center ">
                  <img src={iconA.src} alt="icon" className="w-12" />
                  For Businesses:
                </h3>
                <p className="text-sm text-white/90 ps-4 text-start">
                  Integrate our APIs to offer your customers seamless crypto and
                  fast payment options.
                </p>
              </div>
            </div>

            {/* For Individuals */}
            <div className="bg-white/10  md:flex-1 rounded-tl-2xl rounded-bl-2xl p-6 translate-x-8  flex items-start gap-3">
              <div>
                <h3 className="text-sm font-semibold mb-1 flex gap-2 items-center justify-center">
                  <img src={iconB.src} alt="icon" className="w-12" />
                  For Individuals:
                </h3>
                <p className="text-sm text-white/90 pe-4 text-end">
                 Download our user-friendly app to access a world of payment options at your fingertips. 
                </p>
              </div>
            </div>
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
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
             Get Started Today
          </h3>
          <div className="flex flex-col md:flex-row">
            <p className=" md:flex-2/6 text-xs md:text-sm text-gray-600 max-w-sm my-auto ">
              Contact us to learn more about us or to partner with us.
              Experience the future of payments with Manilla Finance — where
              technology meets trust.
            </p>
            {/* Contact form simulation */}
            <div className=" md:flex-4/6 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Contact Us Today"
                className="flex-1 rounded-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
              />
              <button className="px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition">
              Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyPartner;
