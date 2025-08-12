import React from "react";
import msbg from "../../../../public/images/msbg.png";
import payment from "../../../../public/images/payment.png";

const CompanyMission: React.FC = () => {
  return (
    <section className="bg-white border-t-2 border-dashed  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-bewteen  mb-6 md:mb-10">
          <div className="flex-1 ">
            <div className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-gray-200 bg-white hover:shadow-md transition">
              Learn About Our Products
            </div>
          </div>

          <div className="mx-auto flex flex-1 justify-center -translate-y-9">
            <div className="inline-flex items-center gap-3 ">
              <h2
                className=" my-4 py-8 px-20 "
                style={{
                  backgroundImage: `url(${msbg.src})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain", // optional, makes sure it fills the area
                }}
              >
                <span className="font-semibold text-nowrap text-sm">
                  Mission & Visions
                </span>
              </h2>
            </div>
          </div>

          <div className="text-right flex-1">
            {/* keep spacing on right for desktop */}
            <div className="hidden sm:block"></div>
          </div>
        </div>

        {/* secondary centered pill under top nav */}
        <div className="flex items-center justify-center gap-3 -translate-y-5 mb-5">
          <div className="text-center  max-w-sm md:max-w-lg">
            <button className="text-xs -translate-y-5 sm:text-sm px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm">
              Learn About Our Mission & Vision
            </button>
            <p className="text-xl md:text-2xl font-semibold text-gray-900 leading-tight">
              Seamless Payments.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-gray-900 leading-tight">
              Real-world Impact.
            </p>

            <p className="mt-4 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto lg:mx-0">
              Manilla simplifies money management, bill payments, and
              cross-border transactions — all in one secure app.
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left area: heading + phone mock */}
          <div className="lg:flex-5/12  max-w-sm md:max-w-lg lg:max-w-4xl">
            <img
              src={payment.src}
              alt="App mock on phone ms-5 md:ms-0"
              className=" md:h-4/5 max-h-130 h-100 "
            />
          </div>

          {/* Right area: Mission & Vision cards */}
          <div className="lg:flex-7/12  w-full flex max-w-md md:max-w-2xl lg:max-w-4xl ">
            <div className="flex flex-1 gap-4 ">
              {/*  side A */}
              <div className=" flex-1 flex flex-col gap-y-4">
                {/* Cards */}
                <div className="flex  flex-1 items-center justify-center gap-4  bg-gray-50 rounded-xl p-3 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-center ">
                    <h3 className="text-sm w-full font-semibold text-gray-800">
                      Our Mission
                    </h3>
                    <span className="text-xs text-center text-gray-500">
                      ""
                    </span>
                  </div>
                </div>

                <div className="flex  flex-1 items-center justify-center gap-4  bg-gray-50 rounded-xl p-3 shadow-sm border border-gray-100">
                  <div className="flex flex-col items-center justify-center text-center md:text-start gap-2 ">
                    <h3 className="text-sm w-full font-semibold text-gray-800">
                      Transact. Effortlessly. Anywhere.
                    </h3>
                    <p className="text-xs"></p>
                  </div>
                </div>

                <div className="flex  flex-1 items-center justify-center gap-4  bg-gray-50 rounded-xl p-3 shadow-sm border border-gray-100">
                  <div className="flex flex-col items-center justify-center text-center md:text-start gap-2 ">
                    <h3 className="text-sm w-full font-semibold text-gray-800">
                      Accessible & Empowering
                    </h3>
                    <p className="text-xs">
                      Making bill payments accessible to unbanked communities
                      across Africa and North America.
                    </p>
                  </div>
                </div>

                <div className="flex  flex-1 items-center justify-center gap-4  bg-gray-50 rounded-xl p-3 shadow-sm border border-gray-100">
                  <div className="flex flex-col items-center justify-center text-center md:text-start gap-2 ">
                    <h3 className="text-sm w-full font-semibold text-gray-800">
                      Accessible & Empowering
                    </h3>
                    <p className="text-xs"></p>
                  </div>
                </div>
                
                <div className="flex  flex-1 items-center justify-center gap-4  bg-gray-50 rounded-xl p-3 shadow-sm border border-gray-100">
                  <div className="flex flex-col items-center justify-center text-center md:text-start gap-2 ">
                    <h3 className="text-sm w-full font-semibold text-gray-800">
                      Accessible & Empowering
                    </h3>
                    <p className="text-xs"></p>
                  </div>
                </div>

              </div>

              {/* side B */}

              <div className=" flex-1 flex flex-col gap-y-4">
                {/* Cards */}
                 <div className="flex  flex-1 items-center justify-center gap-4  bg-gray-50 rounded-xl p-3 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-center ">
                    <h3 className="text-sm w-full font-semibold text-gray-800">
                      Our Vision
                    </h3>
                    <span className="text-xs text-center text-gray-500">
                      ""
                    </span>
                  </div>
                </div>

                <div className="flex  flex-1 items-center justify-center gap-4  bg-gray-50 rounded-xl p-3 shadow-sm border border-gray-100">
                  <div className="flex flex-col items-center justify-center text-center md:text-start gap-2 ">
                    <h3 className="text-sm w-full font-semibold text-gray-800">
                      Bills. Travel. Solved.
                    </h3>
                    <p className="text-xs">
                      To become the leading global platform for seamless bill
                      payments and travel expense management.
                    </p>
                  </div>
                </div>

                <div className="flex  flex-1 items-center justify-center gap-4  bg-gray-50 rounded-xl p-3 shadow-sm border border-gray-100">
                  <div className="flex flex-col items-center justify-center text-center md:text-start gap-2 ">
                    <h3 className="text-sm w-full font-semibold text-gray-800">
                      Empower. Access. Decentralize.
                    </h3>
                    <p className="text-xs"></p>
                  </div>
                </div>

                <div className="flex  flex-1 items-center justify-center gap-4  bg-gray-50 rounded-xl p-3 shadow-sm border border-gray-100">
                  <div className="flex flex-col items-center justify-center text-center md:text-start gap-2 ">
                    <h3 className="text-sm w-full font-semibold text-gray-800">
                      Trusted. Secure. Innovative.
                    </h3>
                    <p className="text-xs"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* small footer spacing */}
        <div className="mt-10"></div>
      </div>
    </section>
  );
};

export default CompanyMission;
