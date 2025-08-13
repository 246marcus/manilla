import React from "react";
import darkbg from "../../../../../public/images/darkstylebg.png";
import gradient from "../../../../../public/images/gradientStripe.png";
const Disclaimer: React.FC = () => {
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
            Important Info
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Disclaimer</h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            The information provided on the Manilla Finance website does not
            constitute investment advice, financial advice and trading advice.
            The Manilla Finance team does not recommend that any cryptocurrency
            should be bought, sold, or held by you, or state that the MNLA token
            is more than a simple utility token.
          </p>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mt-2">
            Do your own due diligence. By purchasing the MNLA token, you agree
            that you are not purchasing a security or investment and you agree
            to hold the team harmless and not liable for any losses or taxes you
            may incur. You also agree that the team is presenting the token `"as
            is`" and is not legally required to provide any support or services.
            You should have no expectation of any form from the MNLA token and
            its development team. Always make sure that you are in compliance
            with your local laws and regulations before you make any purchase.
          </p>

          {/* Partner options */}
          <div className="mt-10 flex  flex-col md:flex-row gap-1 overflow-clip"></div>
        </div>
      </div>

      {/* Bottom gradient section */}
      <div
        className=" px-4 sm:px-6 lg:px-8 py-10 sm:py-14"
        style={{
          backgroundImage: `url(${gradient.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // optional, makes sure it fills the area
        }}
      >
        <div className="max-w-5xl mx-auto text-center md:text-start">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Be First. Be Ready.
          </h3>
          <div className="flex flex-col md:flex-row">
            <p className=" md:flex-2/6 text-xs md:text-sm text-gray-600 max-w-sm my-auto ">
              Manilla is launching soon — and you don’t want to miss it. Join
              our waiting list to get early access, exclusive updates, and a
              front-row seat to the future of cross-border payments.
            </p>
            {/* Contact form simulation */}
            <div className=" md:flex-4/6 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Join the waiting list for our App"
                className="flex-1 rounded-full border bg-white mt-1 border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
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

export default Disclaimer;
