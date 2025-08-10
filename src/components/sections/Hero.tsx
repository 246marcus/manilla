"use client";

import React from "react";
import Nav from "../ui/Nav";
import Button from "../ui/Button";
import { ArrowRight, Globe, Shield, Smartphone } from "lucide-react";
import heropicture from "../../../public/images/heropicture.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden bg-[radial-gradient(circle,_#001EA9_0%,_#000C43_100%),url('https://www.transparenttextures.com/patterns/noise.png')] bg-center bg-cover flex flex-col justify-center items-center text-center px-6">
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
          <Button className="rounded-full bg-brand hover:bg-brand/90 text-brand-foreground font-semibold px-8 py-3 text-lg group relative">
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* External Group Icon pointing to button */}
          <div className="absolute  -top-0 right-[190px]">
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
          className="w-100 h-96 object-cover rounded-3xl mx-auto"
        />

        {/* Left icon */}
        <img
          src="/icons/Allpayment.png"
          alt="Left decoration"
          className="absolute right-100 top-1/3 -translate-y-1/2 w-auto h-14"
          style={{ maxWidth: "none" }}
        />

        {/* Right icon */}
        <img
          src="/icons/Blockchain.png"
          alt="Right decoration"
          className="absolute left-95 top-[20%] -translate-y-1/2 w-auto h-14"
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
          className="absolute bottom-[-70px] left-[-30px] w-auto h-14"
          style={{ maxWidth: "none" }}
        />

        {/* Icon at the right bottom of image */}
        <img
          src="/icons/downloadManilla.png"
          alt="Below decoration"
          className="absolute bottom-[-70px] right-[-30px] w-auto h-14"
          style={{ maxWidth: "none" }}
        />
      </div>
    </section>
  );
};

export default Hero;
