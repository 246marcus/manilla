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
    <section className="px-3 border-l border-r border-gray-200 text-center">
      <button className="bg-black text-white"> </button>
      <button className="mb-6 px-6 py-2 text-sm bg-[#000] text-white rounded-full transition">
        <span className="text-[#FACA31]  ">Learn About</span> Our Products
      </button>

      <p className="text-[#181635]">Manilla Products</p>

      <p className="text-[#868686]">
        Manilla offers a suite of innovative solutions designed to make everyday
        financial transactions seamless and secure.
      </p>

      <img src="/icons/Vector4.png" alt="" className="p-4" />
      <p>
        Each product is built for speed, reliability, and convenience,
        empowering users across Africa and beyond to stay connected and in
        control of their finances.
      </p>

      <div className=" flex justify-center items-center lg:hidden">
        <div
          className="relative w-[348px] h-[300px]"
          style={{ width: window.innerWidth <= 320 ? "320px" : "300px" }}
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
    </section>
  );
};

export default Product;
