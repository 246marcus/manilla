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
    <section className="px-3 border-l border-r border-gray-200 text-center hidden sm:block md:block">
      <div className="lg:hidden">
        <button className="bg-black text-white"> </button>
        <button className="mb-6 px-6 py-2 text-sm bg-[#000] text-white rounded-full transition">
          <span className="text-[#FACA31]  ">Learn About</span> Our Products
        </button>

        <p className="text-[#181635]">Manilla Product</p>

        <p className="text-[#868686]">
          Manilla offers a suite of innovative solutions designed to make
          everyday financial transactions seamless and secure.
        </p>

        <img src="/icons/Vector4.png" alt="" className="p-4 lg:hidden" />
        <p>
          Each product is built for speed, reliability, and convenience,
          empowering users across Africa and beyond to stay connected and in
          control of their finances.
        </p>

        <div className=" flex justify-center items-center lg:hidden md:hidden ">
          <div
            className="relative w-[348px] h-[300px]"
            style={{
              width:
                typeof window !== "undefined" && window.innerWidth <= 320
                  ? "320px"
                  : "300px",
            }}
          >
            <Image
              src="/images/backgroundpic.png"
              alt="background"
              width={350}
              height={300}
              className="object-cover object-right rounded-xl w-full h-full"
            />

            {/* Black overlay at bottom with 47% opacity */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/40 bg-opacity-47 rounded-b-xl py-4 px-6">
              <div
                className={`${inter.className} font-semibold leading-[100%] text-[#FACA31] text-center `}
              >
                <p
                  className={`${inter.className} font-semibold text-[10px] leading-[100%] `}
                >
                  Our platform supports payments using
                </p>
                <div className="flex gap-3 justify-center items-center mt-2">
                  <li
                    className="w-[70px] h-[28px]  opacity-100 border rounded-full flex items-center justify-center gap-1 p-4 "
                    style={{ boxShadow: "0px 0px 0px 0.7px #A7FB21" }}
                  >
                    <img src="/icons/USDTICON.png" alt="usdt" />
                    <p className="text-white text-[8px]">USDT</p>
                  </li>
                  <li
                    className="w-[70px] h-[28px]  opacity-100 border rounded-full flex items-center justify-center gap-1 p-4"
                    style={{ boxShadow: "0px 0px 0px 0.7px #A7FB21" }}
                  >
                    <img src="/icons/USDCICON.png" alt="" className="" />
                    <p className="text-white text-[8px]">USDC</p>
                  </li>
                  <li
                    className="w-[70px] h-[28px]  opacity-100 border rounded-full flex items-center justify-center gap-1 p-4"
                    style={{ boxShadow: "0px 0px 0px 0.7px #A7FB21" }}
                  >
                    <img src="/icons/USD1ICON.png" alt="" />
                    <p className="text-white text-[8px]">USD1</p>
                  </li>
                  <li
                    className="w-[70px] h-[28px]  opacity-100 border rounded-full flex items-center justify-center gap-1 p-4"
                    style={{ boxShadow: "0px 0px 0px 0.7px #A7FB21" }}
                  >
                    <img src="/icons/BTCICON.png" alt="" />
                    <p className="text-white text-[8px]">BTC</p>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="md:hidden">
          <button
            className={`${inter.className} mb-6  text-[16px] bg-[#282828] text-white rounded-full transition w-[239px] h-[60px]`}
          >
            <span className="text-[#FACA31]  ">Learn About</span> Our Products
          </button>

          <p
            className={` ${inter.className} text-[40px] font-semibold text-[#181635]`}
          >
            Manilla Products
          </p>

          <p
            className={`${inter.className} text-[20px] font-semibold text-[#868686] `}
          >
            Manilla offers a suite of innovative solutions designed to make
            everyday financial transactions seamless and secure.
          </p>
          <p
            className={`${inter.className} font-medium text-[18px] text-[#868686]`}
          >
            Each product is built for speed, reliability, and convenience,
            empowering users across Africa and beyond to stay connected and in
            control of their finances.
          </p>
        </div>

        <div className="bg-[#D7E3FF59] flex justify-center mt-5 md:hidden">
          <div className=" mt-6 p-4 flex justify-center">
            <div
              className="bg-white rounded-2xl p-2 max-w-[345px]"
              style={{ boxShadow: "0px 4px 12px 0px #00000029" }}
            >
              <div className="border-[#281AC9] border-1 p-2 rounded-2xl flex flex-col items-center text-center">
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
                  Pay bills, settle travel bills, and settle essential services
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
          </div>

          <div className="mt-6 p-4 flex justify-center">
            <div
              className="bg-white rounded-2xl p-2 max-w-[345px]"
              style={{ boxShadow: "0px 4px 12px 0px #00000029" }}
            >
              <div className="border-[#FACA31] border-1 p-2 rounded-2xl flex flex-col items-center text-center">
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
                  Manilla’s upcoming debit card. Seamlessly shop, withdraw, and
                  pay on the go—converting digital assets to naira instantly
                  while enjoying global acceptance and convenience.
                </p>

                <p
                  className={`${inter.className} text-[14px] text-[#181635] mt-8 font-medium`}
                >
                  Join the Waitlist – Be first to swipe in crypto.
                </p>

                <div className="flex mt-2 gap-3 justify-center items-center -space-x-3 ">
                  <img
                    src="/icons/Iconproductarrow3.png"
                    alt="arrow"
                    className="w-[26px] h-[26px] -space-x-3"
                  />
                  <p
                    className={`${inter.className} font-semibold text-[14px] text-[#181635] `}
                  >
                    Click Here to Join
                  </p>
                  <button className="bg-black ml-3 text-white rounded-3xl text-[16px] - w-[120px] h-[40px]">
                    Join Waitlist
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-6 p-4 flex ">
            <div
              className="bg-white rounded-2xl p-2 max-w-[345px]"
              style={{ boxShadow: "0px 4px 12px 0px #00000029" }}
            >
              <div className="border-[#282828] border-1 p-2 rounded-2xl flex flex-col items-center text-center">
                <img
                  src="/images/manillapay3.png"
                  alt="manilla pay"
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
                  cashback, discounts, and loyalty perks. As Nigeria’s bridge to
                  decentralized finance, MNLA fosters community growth while
                  unlocking premium features across payments, travel, and
                  staking solutions.
                </p>

                <p
                  className={`${inter.className} text-[14px] text-[#181635] mt-8 font-medium`}
                >
                  Stake / Learn more About MNLA
                </p>

                <div className="flex mt-2 gap-3 justify-center items-center -space-x-3 ">
                  <img
                    src="/icons/Iconproductarrow3.png"
                    alt="arrow"
                    className="w-[26px] h-[26px] -space-x-3"
                  />
                  <p
                    className={`${inter.className} font-semibold text-[14px] text-[#181635] `}
                  >
                    Click Here to Join
                  </p>
                  <button className="bg-black ml-3 text-white rounded-3xl text-[16px] - w-[120px] h-[40px]">
                    MNLA Token
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
