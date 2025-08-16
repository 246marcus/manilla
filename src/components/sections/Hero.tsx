"use client";

import React from "react";
import Button from "../ui/Button";
import { ArrowRight, Globe, Shield, Smartphone } from "lucide-react";
import heropicture from "../../../public/images/heropicture.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-30 hero-gradient overflow-hidden bg-[radial-gradient(circle,_#001EA9_0%,_#000C43_100%),url('https://www.transparenttextures.com/patterns/noise.png')] bg-center bg-cover flex flex-col justify-center items-center text-center px-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Redefining How You Pay,
          <br />
          <span className="text-brand">Travel, and Connect.</span>
        </h1>

        <p className="text-lg text-white/80 mb-8">
          Simplify utility bills and travel payments across Africa and North
          America — fast, secure, and affordable with{" "}
          <span className="text-brand font-semibold">Manilla Finance</span>
        </p>

        <div className="relative">
          <Button
            variant="ghost"
            className="rounded-full px-8 py-3 text-lg group relative"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* External Group Icon pointing to button */}
          <div className="absolute -top-0 right-[190px] hidden lg:block">
            <img
              src="/icons/Group.png"
              alt="Group icon pointing to button"
              className="w-25 h-auto"
            />
          </div>
        </div>
      </div>

      {/* Image under text */}
      <div className="relative z-10 mt-12">
        {/* Main image */}
        <img
          src={heropicture.src}
          alt="Professional woman using Manilla Finance app"
          className="w-90 sm:w-100 md:h-90 object-cover rounded-3xl mx-auto "
        />

        {/* Left icon */}
        <img
          src="/icons/Allpayment.png"
          alt="Left decoration"
          className="absolute right-55 sm:right-60 md:right-100 top-1/4 md:top-1/3 -translate-y-1/2 w-auto h-10 md:h-14"
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
          className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-auto h-25"
          style={{ maxWidth: "none" }}
        />

        {/* Icon at the left bottom of image */}
        <img
          src="/icons/ActiveUsers.png"
          alt="Below decoration"
          className="hidden md:block absolute bottom-[-40px] top-[-1/3] right-85 w-auto h-10 md:h-14 "
          style={{ maxWidth: "none" }}
        />

        {/* Icon at the right bottom of image */}
        <img
          src="/icons/downloadManilla.png"
          alt="Below decoration"
          className="absolute bottom-[-18px] left-100 w-auto h-40"
          style={{ maxWidth: "none" }}
        />
      </div>

      {/* Trusted Platform Rolling Effect */}
      <div className="relative z-10 mt-16 w-screen overflow-hidden">
        <div className="flex animate-roll shrink-0">
          {/* First set */}
          <img
            src="/images/TrustedPlatform.png"
            alt="Trusted by top platforms"
            className="w-auto max-w-none h-40 sm:h-30 md:h-35 shrink-0"
          />
          <img
            src="/images/TrustedPlatform.png"
            alt="Trusted by top platforms"
            className="w-auto max-w-none h-40 sm:h-30 md:h-35 shrink-0"
          />
          {/* Second set (duplicate) */}
          <img
            src="/images/TrustedPlatform.png"
            alt="Trusted by top platforms"
            className="w-auto max-w-none h-40 sm:h-30 md:h-35 shrink-0"
          />
          <img
            src="/images/TrustedPlatform.png"
            alt="Trusted by top platforms"
            className="w-auto max-w-none h-40 sm:h-30 md:h-35 shrink-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
