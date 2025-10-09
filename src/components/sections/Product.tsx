"use client";
import React from "react";
import { Raleway, Inter } from "next/font/google";
import Image from "next/image";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const Product = () => {
  return (
    <section className="px-3 border-l border-r border-gray-200 text-center mt-13 ">
      <div className="lg:flex lg:justify-between lg:gap-15">
        <div className="lg:mt-15 lg:flex lg:flex-col lg: flex-shrink-0 lg:items-start lg:text-left lg:pl-15 ">
          {" "}
          <button className="mb-6 px-6 py-2 text-sm bg-[#000] text-white rounded-full lg:p-5 lg:text-[16px]">
            <span className="text-[#FACA31]  ">Learn About</span> Our Products
          </button>
          <p
            className={`${inter.className} text-[#181635] lg:text-[40px] lg:font-semibold whitespace-nowrap`}
          >
            Manilla Product
          </p>
          <p
            className={`${inter.className} text-[#868686] lg:font-semibold lg:text-[20px] mt-4 mb-6 leading-[1.8]`}
          >
            Manilla offers a suite of innovative
            <br className="hidden lg:block" /> solutions designed to make
            everyday
            <br className="hidden lg:block lg:whitespace-nowrap" /> financial
            transactions seamless and secure.
          </p>
          <img
            src="/icons/Vector4.png"
            alt=""
            className="p-2 lg:mb-7 md:w-full"
          />
          <p
            className={`${inter.className} text-[#868686] lg:font-semibold lg:text-[20px] leading-[1.8]`}
          >
            Each product is built for speed, reliability,
            <br className="hidden lg:block" /> and convenience, empowering users
            <br className="hidden lg:block" /> across Africa and beyond to stay
            <br className="hidden lg:block" /> connected and in control of their
            finances.
          </p>
        </div>

        <div className="flex justify-center items-center lg:hidden md:hidden ">
          <div
            className="relative w-[500px] h-[300px]"
            style={{
              width:
                typeof window !== "undefined" && window.innerWidth <= 320
                  ? "320px"
                  : "300px",
            }}
          >
            <Image
              src="/images/twogirls1.png"
              alt="background"
              width={400}
              height={300}
              className="object-contain rounded-xl w-[600px] h-full mx-auto "
            />
          </div>
        </div>

        <div className="hidden lg:flex lg:flex-1  justify-start mt-2 bg-[#D7E3FF59] overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent lg:p-7 lg:rounded-2xl ">
          <div className="flex gap-2 px-6 py-1 min-w-max">
            {/* First Card */}
            <div className="flex-shrink-0 w-[345px] h-[560px] bg-white rounded-2xl p-2 shadow-[0px_4px_12px_0px_#00000029]">
              <div className="border-[#281AC9] border-1 p-2 rounded-2xl flex flex-col items-center text-center h-full">
                <img
                  src="/images/manillapay.png"
                  alt="manilla pay"
                  className="w-[325px] h-[235px] rounded-lg"
                />

                <p
                  className={`${inter.className} text-[#181635] font-bold text-[18px] mt-4 self-start`}
                >
                  Manilla Pay
                </p>

                <p
                  className={`${inter.className} text-[#181635] text-[14px] leading-[140%] mt-2 text-left`}
                >
                  Pay bills, settle travel bills, and essential services
                  instantly using stablecoins or debit cards. Manilla Pay
                  bridges crypto with everyday life in Nigeria, ensuring secure,
                  fast, and reliable payments anytime, anywhere.
                </p>

                <p
                  className={`${inter.className} text-[14px] text-[#181635] mt-8 font-medium`}
                >
                  Download Manilla App
                </p>

                <div className="flex mt-2 gap-0 justify-center items-center -space-x-3">
                  <img
                    src="/images/googlestore.png"
                    alt="Google Play"
                    className="w-[154px] h-[49px]"
                  />
                  <img
                    src="/images/appstore.png"
                    alt="App Store"
                    className="w-[150px] h-[49px]"
                  />
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div className="flex-shrink-0 w-[345px] h-[560px] bg-white rounded-2xl p-2 shadow-[0px_4px_12px_0px_#00000029]">
              <div className="border-[#FACA31] border-1 p-2 rounded-2xl flex flex-col items-center text-center h-full">
                <img
                  src="/images/manillapay2.png"
                  alt="manilla pay"
                  className="w-[325px] h-[235px] rounded-lg"
                />
                <p
                  className={`${inter.className} text-[#181635] font-bold text-[18px] mt-4 self-start`}
                >
                  Manilla Crypto Debit Card
                </p>
                <p
                  className={`${inter.className} text-[#181635] text-[14px] leading-[140%] mt-2 text-left`}
                >
                  Spend crypto like cash across Nigeria and beyond with
                  Manilla’s debit card. Seamlessly shop, withdraw, and
                  pay—converting digital assets to naira instantly while
                  enjoying global acceptance and convenience.
                </p>
                <p
                  className={`${inter.className} text-[14px] text-[#181635] mt-8 font-medium`}
                >
                  Join the Waitlist – Be first to swipe in crypto.
                </p>
                <div className="flex mt-2 gap-3 justify-center items-center">
                  <img
                    src="/icons/Iconproductarrow3.png"
                    alt="arrow"
                    className="w-[26px] h-[26px]"
                  />
                  <p
                    className={`${inter.className} font-semibold text-[14px] text-[#181635]`}
                  >
                    Click Here to Join
                  </p>
                  <button className="bg-black ml-3 text-white rounded-3xl text-[16px] w-[120px] h-[40px]">
                    Join Waitlist
                  </button>
                </div>
              </div>
            </div>

            {/* Third Card */}
            <div className="flex-shrink-0 w-[345px] h-[560px] bg-white rounded-2xl p-2 shadow-[0px_4px_12px_0px_#00000029]">
              <div className="border-[#282828] border-1 p-2 rounded-2xl flex flex-col items-center text-center h-full">
                <img
                  src="/images/manillapay3.png"
                  alt="manilla token"
                  className="w-[325px] h-[235px] rounded-lg"
                />
                <p
                  className={`${inter.className} text-[#181635] font-bold text-[18px] mt-4 self-start`}
                >
                  Manilla Token (MNLA)
                </p>
                <p
                  className={`${inter.className} text-[#181635] text-[14px] leading-[140%] mt-2 text-left`}
                >
                  MNLA powers the Manilla ecosystem, rewarding users with
                  cashback, discounts, and loyalty perks. It bridges Nigeria to
                  decentralized finance, fostering community growth while
                  unlocking premium features across payments, travel, and
                  staking.
                </p>
                <p
                  className={`${inter.className} text-[14px] text-[#181635] mt-8 font-medium`}
                >
                  Stake / Learn more About MNLA
                </p>
                <div className="flex mt-2 gap-3 justify-center items-center">
                  <img
                    src="/icons/Iconproductarrow3.png"
                    alt="arrow"
                    className="w-[26px] h-[26px]"
                  />
                  <p
                    className={`${inter.className} font-semibold text-[14px] text-[#181635]`}
                  >
                    Click Here to Join
                  </p>
                  <button className="bg-black ml-3 text-white rounded-3xl text-[16px] w-[120px] h-[40px]">
                    MNLA Token
                  </button>
                </div>
              </div>
            </div>

            {/* Fourth Card - Manilla Vault */}
            <div className="flex-shrink-0 w-[345px] h-[560px] bg-white rounded-2xl p-2 shadow-[0px_4px_12px_0px_#00000029]">
              <div className="border-[#2FC302] border-1 p-2 rounded-2xl flex flex-col items-center text-center h-full">
                <img
                  src="/images/manillapay4.png"
                  alt="manilla vault"
                  className="w-[325px] h-[235px] rounded-lg"
                />
                <p
                  className={`${inter.className} text-[#181635] font-bold text-[18px] mt-4 self-start`}
                >
                  Manilla Vault
                </p>
                <p
                  className={`${inter.className} text-[#181635] text-[14px] leading-[140%] mt-2 text-left`}
                >
                  Put your crypto to work by staking on Manilla. Earn attractive
                  yields, secure the ecosystem, and enjoy exclusive platform
                  benefits—making your digital assets grow while supporting
                  financial innovation in Nigeria’s DeFi landscape.
                </p>
                <p
                  className={`${inter.className} text-[14px] text-[#181635] mt-8 font-medium`}
                >
                  Stake your Tokens for More Yields
                </p>
                <div className="flex mt-2 gap-3 justify-center items-center">
                  <img
                    src="/icons/Iconproductarrow3.png"
                    alt="arrow"
                    className="w-[26px] h-[26px]"
                  />
                  <p
                    className={`${inter.className} font-semibold text-[14px] text-[#181635]`}
                  >
                    Click Here to Stake
                  </p>
                  <button className="bg-black ml-3 text-white rounded-3xl text-[16px] w-[120px] h-[40px]">
                    Stake Token
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
