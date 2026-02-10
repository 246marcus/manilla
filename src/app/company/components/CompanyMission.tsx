import React from "react";
import msbg from "../../../../public/images/msbg.png";
import payment from "../../../../public/images/payment.png";
import icon from "../../../../public/icons/dropdownIcon.png";
import { FaQuoteLeft } from "react-icons/fa6";
const CompanyMission: React.FC = () => {
  return (
    <section className="bg-white border-t-2 border-black/20 border-dashed  ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-20 lg:px-8">
        <div className="flex items-center justify-bewteen  mb-6 md:mb-10">
          <div className="flex-1 ">
            <div className="hidden md:inline-flex items-center gap-2 text-xs px-4 py-1 rounded-full border border-gray-200 bg-white hover:shadow-md transition">
              Learn About Our Products
            </div>
          </div>

          <div className="mx-auto flex flex-1 justify-center -translate-y-10">
            <div className="inline-flex items-center gap-3 ">
              <h2
                className=" my-4 py-8 px-20 flex  items-center justify-center scale-75 md:scale-90 "
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
        <div className="flex items-center justify-center gap-3 -translate-y-5 mb-5">
          <div className="text-center  max-w-sm md:max-w-lg">
            <button className="text-xs -translate-y-5 sm:text-sm px-4 py-1 rounded-full bg-white border border-gray-200 shadow-sm">
              Learn About Our Mission & Vision
            </button>
            <p className="text-xl md:text-2xl font-semibold  leading-tight">
              Seamless Payments.
            </p>
            <p className="text-xl md:text-2xl font-semibold leading-tight">
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
              className="md:h-4/5 max-h-150 h-100"
            />
          </div>

          {/* Right area: Mission & Vision cards */}
          <div className="lg:flex-7/12  w-full flex max-w-md md:max-w-2xl lg:max-w-4xl">
            <div className="flex flex-1 gap-4 flex-col md:flex-row">
              {/*  side A */}
              <div className=" flex-1 flex flex-col gap-y-4 mb-10">
                {/* Cards */}
                <div className="flex  flex-1 items-center justify-center gap-4  bg-gray-50 rounded-xl p-3 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-4 justify-center p-2">
                    <FaQuoteLeft size={30} className="text-[#281AC8]" />{" "}
                    <h3 className="text-md w-full font-semibold text-black">
                      Our Mission
                    </h3>
                  </div>
                </div>

                <div className="text-[#F3F3F3]">
                  <div className="flex  flex-1 items-center justify-center gap-4  bg-gray-50 rounded-xl p-3 shadow-sm border border-gray-100">
                    <div className="flex flex-col items-center justify-center text-center md:text-start gap-2 ">
                      <div className="text-sm w-full text-[#181635] text-start text-[14px]">
                        Our mission is to revolutionize bill payments and travel
                        services by integrating blockchain technology with
                        traditional financial infrastructure to create a
                        seamless, secure, and inclusive payment ecosystem.
                        <p className="text-[#181635] font-semibold text-[14px] pt-5 pb-5 flex text-start">
                          We aim to:
                        </p>
                      </div>

                      <div className=" shadow-[0px_0px_4px_4px_#00000010,0px_0px_0px_4px_#FFFFFF] ...  border-3 border-[#FFFFFF] rounded-xl ">
                        <div className="flex gap-2 justify-center items-center border-[#C4C4C4] border-1 rounded-xl p-3">
                          <img
                            src="images/doublecircleicon.png"
                            alt=""
                            className="w-[22px] h-[22px]"
                          />
                          <p className="text-[#181635] text-[13px] font-medium text-left">
                            Enable individuals and businesses to transact
                            effortlessly using cryptocurrency and fiat
                            currencies.
                          </p>
                        </div>
                      </div>
                      <div className=" shadow-[0px_0px_4px_4px_#00000010,0px_0px_0px_4px_#FFFFFF] ...  border-3 border-[#FFFFFF] rounded-xl ">
                        <div className="flex gap-2 justify-center items-center border-[#C4C4C4] border-1 rounded-xl p-3">
                          <img
                            src="images/doublecircleicon.png"
                            alt=""
                            className="w-[22px] h-[22px]"
                          />
                          <p className="text-[#181635] text-[13px] font-medium text-left">
                            Promote financial inclusion by making bill payments
                            accessible to underserved and unbanked populations
                            across Africa and North America.
                          </p>
                        </div>
                      </div>
                      <div className=" shadow-[0px_0px_4px_4px_#00000010,0px_0px_0px_4px_#FFFFFF] ...  border-3 border-[#FFFFFF] rounded-xl ">
                        <div className="flex gap-2 justify-center items-center border-[#C4C4C4] border-1 rounded-xl p-3">
                          <img
                            src="images/doublecircleicon.png"
                            alt=""
                            className="w-[22px] h-[22px]"
                          />
                          <p className="text-[#181635] text-[13px] font-medium text-left">
                            Ensure transparency, security, and accountability in
                            all transactions by leveraging blockchain’s
                            immutable ledger technology.
                          </p>
                        </div>
                      </div>
                      <div className=" shadow-[0px_0px_4px_4px_#00000010,0px_0px_0px_4px_#FFFFFF] ...  border-3 border-[#FFFFFF] rounded-xl ">
                        <div className="flex gap-2 justify-center items-center border-[#C4C4C4] border-1 rounded-xl p-3">
                          <img
                            src="images/doublecircleicon.png"
                            alt=""
                            className="w-[22px] h-[22px]"
                          />
                          <p className="text-[#181635] text-[13px] font-medium text-left">
                            Deliver exceptional customer experience through
                            continuous innovation and reliable service delivery.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* side B */}
              <div className=" flex-1 flex flex-col gap-y-4 mb-10">
                {/* Cards */}
                <div className="flex  flex-1 items-center justify-center gap-4  bg-gray-50 rounded-xl p-3 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-4 justify-center p-2">
                    <FaQuoteLeft size={30} className="text-[#FBB321]" />{" "}
                    <h3 className="text-md w-full font-semibold text-black">
                      Our Vision
                    </h3>
                  </div>
                </div>

                <div className="text-[#F3F3F3]">
                  <div className="flex  flex-1 items-center justify-center gap-4  bg-gray-50 rounded-xl p-3 shadow-sm border border-gray-100">
                    <div className="flex flex-col items-center justify-center text-center md:text-start gap-2 ">
                      <div className="text-sm w-full text-[#181635] text-start text-[14px]">
                        To become the leading global payment platform that
                        redefines how people and businesses pay bills and manage
                        travel expenses—where blockchain technology and everyday
                        finance converge to create a borderless, frictionless
                        financial future.
                        <p className="text-[#181635] font-semibold text-[14px] pt-5 pb-5 flex text-start">
                          We envision a world where:
                        </p>
                      </div>

                      <div className=" shadow-[0px_0px_4px_4px_#00000010,0px_0px_0px_4px_#FFFFFF] ...  border-3 border-[#FFFFFF] rounded-xl ">
                        <div className="flex gap-2 justify-center items-center border-[#C4C4C4] border-1 rounded-xl p-3">
                          <img
                            src="images/visionicon.png"
                            alt=""
                            className="w-[22px] h-[22px]"
                          />
                          <p className="text-[#181635] text-[13px] font-medium text-left">
                            All payments, regardless of geography or currency
                            type, are instantaneous, cost-effective, and fully
                            transparent.
                          </p>
                        </div>
                      </div>
                      <div className=" shadow-[0px_0px_4px_4px_#00000010,0px_0px_0px_4px_#FFFFFF] ...  border-3 border-[#FFFFFF] rounded-xl ">
                        <div className="flex gap-2 justify-center items-center border-[#C4C4C4] border-1 rounded-xl p-3">
                          <img
                            src="images/visionicon.png"
                            alt=""
                            className="w-[22px] h-[22px]"
                          />
                          <p className="text-[#181635] text-[13px] font-medium text-left">
                            Blockchain empowers communities by providing
                            financial tools previously inaccessible or costly to
                            adopt.
                          </p>
                        </div>
                      </div>
                      <div className=" shadow-[0px_0px_4px_4px_#00000010,0px_0px_0px_4px_#FFFFFF] ...  border-3 border-[#FFFFFF] rounded-xl ">
                        <div className="flex gap-2 justify-center items-center border-[#C4C4C4] border-1 rounded-xl p-3">
                          <img
                            src="images/visionicon.png"
                            alt=""
                            className="w-[22px] h-[22px]"
                          />
                          <p className="text-[#181635] text-[13px] font-medium text-left">
                            Businesses of all sizes can integrate our APIs to
                            offer their customers a seamless bill payment
                            experience.
                          </p>
                        </div>
                      </div>
                      <div className=" shadow-[0px_0px_4px_4px_#00000010,0px_0px_0px_4px_#FFFFFF] ...  border-3 border-[#FFFFFF] rounded-xl ">
                        <div className="flex gap-2  justify-center items-center border-[#C4C4C4] border-1 rounded-xl p-3">
                          <img
                            src="images/visionicon.png"
                            alt=""
                            className="w-[22px] h-[22px]"
                          />
                          <p className="text-[#181635] text-[13px] font-medium text-left">
                            Manilla Finance is recognized as a trusted partner
                            for both individuals and enterprises seeking
                            innovation without compromising security.
                          </p>
                        </div>
                      </div>
                    </div>
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
