import React from "react";
import Rectangle from "../../../public/images/Rectangle1.png";
import gradient from "../../../public/images/gradientStripe.png";

const DevelopmentPartners: React.FC = () => {
  return (
    <section className="bg-white w-full sm:max-w-7xl sm:mx-auto sm:px-4 px-0 mt-6 mb-5 lg:rounded-t-[1rem] md:rounded-t-[1rem] ">
      {/* Top dark section */}
      <div
        className="bg-gray-900 text-white  px-4 py-12 sm:py-16"
        style={{
          backgroundImage: `url(${gradient.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Top pill */}
          <div className="inline-flex items-center gap-2 bg-black text-white px-5 py-4 rounded-full text-xs font-medium mb-6 ">
            <span style={{ color: "var(--Secondary, #FACA31)" }}>
              Why Choose
            </span>
            Manilla App
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">
            Development Partners
          </h2>
          <p className="text-sm sm:text-base text-black max-w-2xl mx-auto">
            Trusted by hundreds of digital businesses across emerging markets
            for Identity Verification, Fraud Detection/Prevention & Background
            Checks; to safely acquire, onboard customers and perform seamless
            transactions across borders with trust & without restrictions, while
            maintaining required regulatory compliance checks.
          </p>
        </div>
      </div>

      {/* Bottom gradient section */}
      <div
        className="bg-gradient-to-r from-green-50 via-purple-50 to-pink-50  relative overflow-hidden lg:rounded-b-[2rem]" // curved edges only at bottom
        style={{
          backgroundImage: `url(${Rectangle.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="hidden md:block relative z-10 mt-0 w-full overflow-hidden">
          <div className="flex flex-nowrap animate-roll  ">
            <img
              src="/images/aaa1.png"
              className=" w-auto  max-w-none scale-60 md:scale-80"
            />
            <img
              src="/images/aaa1.png"
              className=" w-auto  max-w-none scale-60 md:scale-80"
            />
            <img
              src="/images/aaa1.png"
              className="w-auto max-w-none scale-60 md:scale-80"
            />
            <img
              src="/images/aaa1.png"
              className="w-auto max-w-none scale-60 md:scale-80"
            />
          </div>
        </div>
        {/* optional mobile */}
        <div className="relative z-10 mt-0 w-full overflow-hidden md:hidden">
          <div className="flex flex-nowrap animate-roll  ">
            <img
              src="/images/aaa1.png"
              className=" w-auto max-w-none scale-60 md:scale-80 -translate-x-5/12  "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentPartners;
