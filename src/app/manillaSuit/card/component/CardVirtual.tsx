import React from "react";
import darkbg from "../../../../../public/images/darkstylebg.png";

const CardVirtual: React.FC = () => {
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
            MANILLA Card
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Get a virtual debit card issued instantly
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            Now that you know the amazing features of the Manilla card, You may
            proceed to get one for yourself. The card setup has been simplified.
            There are also no credit checks requirements or any other
            obligations before the card is issued. Everyone can request for
            either the virtual card or plastic card that is shipped to eligible
            locations worldwide.
          </p>

          <div className="flex flex-col md:flex-row mt-6 gap-3">
            <p className=" md:flex-3/6 text-xs md:text-sm text-white md:text-justify max-w-sm my-auto px-4 ">
              Join our waiting list to get early access, exclusive updates, and
              a front-row seat to the future of cross-border payments.
            </p>
            {/* Contact form simulation */}
            <div className=" md:flex-3/6 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Join the waiting list for Manilla Card"
                className="flex-1 rounded-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="px-6 py-3 rounded-full bg-yellow-300 text-black text-sm font-medium hover:bg-gray-800 transition">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardVirtual;
