import React from "react";
import vbg from "../../../../public/images/vbg.png";
import innovation from "../../../../public/images/innovation.png";
import security from "../../../../public/images/security.png";
import customer from "../../../../public/images/customer.png";
import inclusion from "../../../../public/images/inclusion.png";
import integrity from "../../../../public/images/integrity.png";
import cardPng from "../../../../public/images/valueiii.png";
import icon from "../../../../public/icons/dropdownIcon.png";

import ValueCard from "./ValueCard";

const CompanyValue: React.FC = () => {
  return (
    <section className="bg-white py-12 relative sm:py-16 lg:py-20 border-t-2  border-black/20 border-dashed">
      <div className="absolute bg-cyan-300 p-20 lg:p-30 top-10 md:left-15 left-0.5 blur-[120px]"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top controls */}
        <div className="flex items-center justify-bewteen  md:mb-10 -translate-y-15 sm-translate-y-17 lg:-translate-y-20 ">
          <div className="text-right flex-1">
            {/* keep spacing on right for desktop */}
            <div className="hidden sm:block"></div>
          </div>

          <div className="mx-auto flex flex-1 justify-center  -translate-y-9">
            <div className="inline-flex items-center gap-3 ">
              <h2
                className=" my-4 py-8 px-20 flex items-center justify-center scale-75 md:scale-90  "
                style={{
                  backgroundImage: `url(${vbg.src})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain", // optional, makes sure it fills the area
                }}
              >
                <span className="font-semibold text-nowrap text-sm">
                  Our Values
                </span>
                <img src={icon.src} alt="about" className="w-10" />
              </h2>
            </div>
          </div>
          <div className="flex-1 flex justify-end">
            <div className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-gray-200 bg-white hover:shadow-md transition">
              Our Values
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <div className="flex justify-center items-center -translate-y-25 ">
          <div className="text-center max-w-70 md:max-w-xl rounded-lg border border-gray-200 shadow-sm px-6 py-1 md:py-3">
            <div className="inline-flex items-center ">
              <span className="text-xs sm:text-sm font-medium text-gray-700">
                Our Value Statements
              </span>
            </div>
            <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
              All centered around delivering real value to the people we serve.
            </p>
          </div>
        </div>

        {/*   top row */}
        <div className="flex flex-col gap-6 -translate-y-10">
          <div className="flex flex-col justify-center items-center md:flex-row max-w-4xl gap-4 mx-auto ">
            {/* Card: Innovation */}
            <ValueCard
              image={innovation.src}
              title="Innovation"
              description="We continuously push the boundaries of technology, exploring new
             ways to enhance user experiences and create solutions to digital
             financial services."
            />
            {/* Card: Blue highlight (center) */}
            {/* <div className=" md:flex-7/12 w-full max-w-md md:max-w-4xl bg-blue-700 text-white rounded-2xl p-12 shadow-md flex flex-col text-center items-center justify-center">
              <div className="inline-flex items-center gap-2 bg-black bg-opacity-30 px-3 py-1 rounded-full  mb-4">
                <span className="text-xs font-medium">Our Values</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">What Drives Us</h3>
              <p className="text-sm opacity-90 max-w-70">
                At Manilla Finance, our values shape every decision, product,
                and experience.
              </p>
            </div> */}
            <img
              src={cardPng.src}
              alt=""
              className="md:flex-7/12 w-7/7 h-45 sm:h-50 md:max-w-sm lg:max-w-lg lg:h-auto"
            />
          </div>

          <div className="flex flex-col justify-center px-12 md:px-0 items-center lg:flex-row  max-w-4xl gap-4 mx-auto  mt-10">
            {/* Card: Security */}

            <ValueCard
              image={security.src}
              title="Security"
              xprop="min-h-65 pb-16 gap-3"
              description=" We employ rigorous security protocols and leverage industry best
                practices to safeguard your transactions."
            />
            <ValueCard
              image={integrity.src}
              title="  Integrity"
              xprop="min-h-65 pb-16 gap-3"
              description=" We operate with the highest standards, fostering trust through
                transparency, ethical practices, and long-term alignment."
            />
            <ValueCard
              image={inclusion.src}
              title="Inclusion"
              xprop="min-h-65 pb-16 gap-3"
              description="   We believe in empowering diverse voices to shape innovation,
                ensuring equal access and opportunity for all."
            />
            <ValueCard
              image={customer.src}
              title="Customer-Centricity"
              xprop="min-h-65 pb-14 gap-3"
              description="  Our customers are at the core of all we do, and we are dedicated
                to creating tailored experiences that exceed their expectations."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyValue;
