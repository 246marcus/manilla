// contact.tsx
import React from "react";
import CompanyForm from "./CompanyForm";
import msbg from "../../../../public/images/msbg.png";
import gradient from "../../../../public/images/gradientStripe.png";
import icon from "../../../../public/icons/dropdownIcon.png";
const ContactPage: React.FC = () => {
  return (
    <div className=" flex flex-col items-center bg-gray-50">
      {/* Hero Section */}
      <section
        className="w-full py-12 text-center"
        style={{
          backgroundImage: `url(${gradient.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // optional, makes sure it fills the area
        }}
      >
        <div className="flex items-center justify-bewteen pt-4  md:pt-8 mb-6 md:mb-10">
          <div className="flex-1 ">
            <div className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-gray-200 bg-white hover:shadow-md transition">
              {/* Learn About Our Products */}
            </div>
          </div>

          <div className="mx-auto flex flex-1 justify-center translate-y-2">
            <div className="inline-flex items-center gap-3 ">
              <h2
                className=" py-8 px-20 scale-65 gap-2 flex md:scale-80 justify-center items-center "
                style={{
                  backgroundImage: `url(${msbg.src})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain", // optional, makes sure it fills the area
                }}
              >
                <span className="font-semibold text-nowrap text-sm">
                  Contact Us
                </span>
                <img src={icon.src} alt="about" className="w-10" />
              </h2>
            </div>
          </div>

          <div className="text-right flex-1">
            {/* keep spacing on right for desktop */}
            <div className="hidden sm:block"></div>
          </div>
        </div>

        {/* secondary centered pill under top nav */}
        <div className="flex items-center justify-center gap-3 px-6 -translate-y-2 mb-5">
          <div className="text-center  max-w-sm md:max-w-lg ">
            <p className="text-xl md:text-4xl font-semibold text-gray-900 leading-tight">
              Be First. Be Ready.
            </p>
            <p className="text-sm  mt-4 font-semibold text-gray-900 leading-tight">
              Manilla is launching soon — and you don’t want to miss it.
            </p>
            <div className="text-sm sm:text-xs text-black/70 max-w-2xl mx-auto lg:mx-0">
              Join our waiting list to get early access, exclusive updates, and
              a front-row seat to the future of cross-border payments.
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full  -translate-y-30 mt-8 px-4">
        <CompanyForm />
      </section>
    </div>
  );
};

export default ContactPage;
