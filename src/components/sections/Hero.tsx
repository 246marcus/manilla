"use client";

import React from "react";
import Button from "../ui/Button";
import { ArrowRight, Globe, Shield, Smartphone } from "lucide-react";
import heropicture from "../../../public/images/heropicture.png";

const Hero = () => {
  return (
    <section className="relative lg:pt-30 md:pt-30 pt-25  hero-gradient overflow-hidden bg-[radial-gradient(circle,_#001EA9_0%,_#000C43_100%),url('https://www.transparenttextures.com/patterns/noise.png')] bg-center bg-cover flex flex-col justify-center items-center text-center px-6 ">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto w-full mt-8 ">
        <h1 className="text-xl  md:text-4xl font-bold text-white leading-tight mb-6">
          Redefining How You Pay,
          <br />
          <span className="text-brand">Travel, and Connect.</span>
        </h1>

        <p className="text-sm tracking-wider text-white/80 mb-3 md:mb-8 max-w-md mx-auto">
          Simplifying bills and travel payments across Africa and North America
          — fast, secure, and affordable with{" "}
          <span className="text-brand font-semibold">Manilla Finance</span>
        </p>

        <div className="relative w-full">
          <Button
            variant="ghost"
            className="rounded-full scale-85 md:scale-100  px-6 md:px-8 py-1 md:py-3 text-sm group relative"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* External Group Icon pointing to button */}
          <div className="absolute -top-0 right-[190px] hidden lg:block max-[320px]:right-[10px] ">
            <img
              src="/icons/Group.png"
              alt="Group icon pointing to button"
              className="w-25 h-auto max-[320px]:w-10"
            />
          </div>
        </div>
      </div>

      <div className="relative"></div>

      {/* Image under text */}
      <div className="relative z-10 mt-2 md:mt-12">
        {/* Main image */}
        <img
          src={heropicture.src}
          alt="Professional woman using Manilla Finance app"
          className="w-90 max-[300px]:w-70 scale-85 md:scale-100 sm:w-90 md:h-90 object-cover rounded-3xl mx-auto"
        />

        {/* Left icon */}
        <img
          src="/icons/Allpayment.png"
          alt="Left decoration"
          className="absolute right-54 sm:right-60 md:right-100 top-1/4 md:top-1/3 -translate-y-1/2 w-auto h-10 md:h-14"
          style={{ maxWidth: "none" }}
        />

        {/* Right icon */}
        <img
          src="/icons/Blockchain.png"
          alt="Right decoration"
          className="absolute left-55 sm:left-54 md:left-95 top-[20%] -translate-y-1/2 w-auto h-10 md:h-14"
          style={{ maxWidth: "none" }}
        />

        {/* Icon below hero image */}
        <img
          src="/icons/topPlatforms.png"
          alt="Below decoration"
          className="absolute scale-85 md:scale-100 md:bottom-[-50px] bottom-[-20px] left-1/2 -translate-x-1/2 w-auto h-23"
          style={{ maxWidth: "none" }}
        />

        {/* Icon at the left bottom of image */}
        {/* <img
          src="/icons/ActiveUsers.png"
          alt="Below decoration"
          className="hidden md:block absolute bottom-[-40px] top-[-1/3] right-85 w-auto h-10 md:h-14 "
          style={{ maxWidth: "none" }}
        /> */}

        <img
          src="/icons/ActiveUsers.png"
          alt="Below decoration"
          className="hidden md:block absolute bottom-[-40px] top-[-1/3] right-85 w-auto h-10 md:h-14"
          style={{ maxWidth: "none" }}
        />

        {/* Icon at the right bottom of image */}
        <img
          src="/icons/downloadManilla.png"
          alt="Below decoration"
          className="hidden md:block absolute bottom-[-18px] md:left-85 lg:left-100 w-auto h-40 md:scale-85 lg:scale-95"
          style={{ maxWidth: "none" }}
        />

        <div className="absolute bottom-0 -right-10 md:hidden ">
          {/* Google Play */}
          {/* <a
            href="https://play.google.com/store/apps/details?id=com.manillapay"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <img
              src="/images/googlestore.png"
              alt="Get it on Google Play"
              className="object-contain scale-70 translate-y-6"
            />
          </a> */}

          {/* App Store */}
          {/* <a
            href="https://apps.apple.com/app/manillapay"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <img
              src="/images/appstore.png"
              alt="Download on the App Store"
              className="object-contain scale-70 "
            />
          </a> */}
        </div>

        <img
          src="/images/lastheroicon.png"
          alt="Below decoration"
          className="block md:hidden absolute bottom-[60px] left-[5px] top-40 w-[auto] h-[160] rotate-0"
          style={{ maxWidth: "none" }}
        />
      </div>

      {/* Trusted Platform Rolling Effect */}
      <div className="relative z-10 mt-4  md:mt-16 w-screen overflow-hidden ">
        {/* top */}
        <div className="flex animate-roll h-28 md:h-40 mt-4 ">
          <img
            src="/images/kkk1.png"
            alt="Trusted by top platforms"
            className="w-auto max-w-none  md:scale-100  "
          />
          <img
            src="/images/kkk1.png"
            alt="Trusted by top platforms"
            className="w-auto max-w-none  md:scale-100  "
          />
          <img
            src="/images/kkk1.png"
            alt="Trusted by top platforms"
            className="w-auto max-w-none  md:scale-100  "
          />

          <img
            src="/images/kkk1.png"
            alt="Trusted by top platforms"
            className="w-auto max-w-none  md:scale-100  "
          />
          <img
            src="/images/kkk1.png"
            alt="Trusted by top platforms"
            className="w-auto max-w-none  md:scale-100  "
          />
          <img
            src="/images/kkk1.png"
            alt="Trusted by top platforms"
            className="w-auto max-w-none  md:scale-100  "
          />
        </div>
        {/* bottom */}
        {/* <div className="flex animate-roll md:gap-x-4  scale-80 ">
          
          <img
            src="/images/ddd1.png"
            alt="Trusted by top platforms"
            className="w-auto max-w-none scale-90 md:scale-100   "
          />
          <img
            src="/images/ddd2.png"
            alt="Trusted by top platforms"
            className="w-auto max-w-none scale-90 md:scale-100  "
          />
         
          <img
            src="/images/ddd3.png"
            alt="Trusted by top platforms"
            className="w-auto max-w-none scale-90 md:scale-100  "
          />
          <img
            src="/images/ddd4.png"
            alt="Trusted by top platforms"
            className="w-auto max-w-none scale-90 md:scale-100  "
          />
         
          <img
            src="/images/ddd5.png"
            alt="Trusted by top platforms"
            className="w-auto max-w-none scale-90 md:scale-100  "
          />
          <img
            src="/images/ddd6.png"
            alt="Trusted by top platforms"
            className="w-auto max-w-none scale-90 md:scale-100  "
          />
          <img
            src="/images/ddd1.png"
            alt="Trusted by top platforms"
            className="w-auto max-w-none scale-90 md:scale-100  "
          />
          <img
            src="/images/ddd2.png"
            alt="Trusted by top platforms"
            className="w-auto max-w-none scale-90 md:scale-100  "
          />
         
          <img
            src="/images/ddd3.png"
            alt="Trusted by top platforms"
            className="w-auto max-w-none scale-90 md:scale-100  "
          />
          <img
            src="/images/ddd4.png"
            alt="Trusted by top platforms"
            className="w-auto max-w-none scale-90 md:scale-100  "
          />
         
          <img
            src="/images/ddd5.png"
            alt="Trusted by top platforms"
            className="w-auto max-w-none scale-90 md:scale-100  "
          />
          <img
            src="/images/ddd6.png"
            alt="Trusted by top platforms"
            className="w-auto max-w-none scale-90 md:scale-100  "
          />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
