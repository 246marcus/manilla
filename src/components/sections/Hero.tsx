"use client";

import React from "react";
import Nav from "../ui/Nav";
import Button from "../ui/Button";
import { ArrowRight, Globe, Shield, Smartphone } from "lucide-react";
import heropicture from "../../../public/images/heropicture.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden bg-[radial-gradient(circle,_#001EA9_0%,_#000C43_100%),url('https://www.transparenttextures.com/patterns/noise.png')] bg-center bg-cover">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Redefining How You Pay,
              <br />
              <span className="text-brand">Travel, and Connect.</span>
            </h1>

            <p className="text-lg text-white/80 mb-8 max-w-lg">
              Simplify utility bills and travel payments across Africa and North
              America — fast, secure, and affordable with{" "}
              <span className="text-brand font-semibold">Manilla Finance</span>
            </p>

            <Button className="rounded-full bg-brand hover:bg-brand/90 text-brand-foreground font-semibold px-8 py-3 text-lg group">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform bg-white" />
            </Button>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-col sm:flex-row items-center lg:items-start gap-6">
              <div className="flex items-center space-x-4">
                {/* <div className="flex -space-x-2">
                  {userAvatars.map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar}
                      alt="User"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                  ))}
                </div> */}
                <div className="text-white">
                  <div className="font-bold text-xl">10.2k+</div>
                  <div className="text-sm text-white/70">
                    Active users globally
                  </div>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <div className="text-white/70 text-sm mb-2">Trusted by</div>
                <div className="text-white font-semibold">Top Platforms</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image with Floating Elements */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main Hero Image */}
            <div className="relative z-10">
              <img
                src={heropicture.src}
                alt="Professional woman using Manilla Finance app"
                className="w-80 h-96 object-cover rounded-3xl"
              />
            </div>

            {/* Floating UI Elements */}
            <div className="absolute top-10 left-0 glass-card rounded-2xl p-4 float-animation">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div className="text-white">
                  <div className="font-semibold text-sm">All Payment</div>
                  <div className="text-xs text-white/70">Simplified</div>
                </div>
              </div>
            </div>

            <div className="absolute top-20 right-0 glass-card rounded-2xl p-4 float-delayed">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div className="text-white">
                  <div className="font-semibold text-sm">Blockchain</div>
                  <div className="text-xs text-white/70">Payment Rail</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 left-10 glass-card rounded-full p-3 float-animation">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center">
                <span className="text-brand-foreground font-bold">B</span>
              </div>
            </div>

            <div className="absolute bottom-10 right-10 glass-card rounded-2xl p-3 float-delayed">
              <div className="text-center text-white">
                <div className="text-brand font-bold">Manilla App</div>
                <div className="text-xs text-white/70 mt-1">
                  Download Manilla Pay App
                </div>
                <div className="flex space-x-2 mt-2">
                  <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                    <Smartphone className="w-3 h-3 text-white" />
                  </div>
                  <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                    <span className="text-white text-xs">A</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Circles */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/10 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/20 rounded-full"></div>
          </div>
        </div>

        {/* Company Logos */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
