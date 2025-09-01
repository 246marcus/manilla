"use client";

import React from "react";
import loginimg from "../../../../../public/images/login1.png";
import loginbg from "../../../../../public/images/loginbg.png";
import icon from "../../../../../public/icons/dropdownIcon.png";

const LoginPage: React.FC = () => {
  return (
    <div className="h-screen flex bg-gray-100 max-w-6xl mx-auto pt-6">
      {/* Left side with dummy image */}
      <div className="hidden md:flex flex-1 items-center justify-center p-6">
        <img
          src={loginimg.src}
          alt="Promo"
          className=" p-6 w-full object-cover"
        />
      </div>

      {/* Right side */}
      <div className="flex flex-col flex-1 items-center justify-center p-6 relative">
        {/* Top-right dummy image */}
        <div className="mx-auto flex flex-1 justify-center -translate-y-9">
          <div className="inline-flex items-center gap-3 ">
            <h2
              className="  py-8 px-20 flex  gap-2 items-center justify-center scale-75 md:scale-90 "
              style={{
                backgroundImage: `url(${loginbg.src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain", // optional, makes sure it fills the area
              }}
            >
              <span className="font-semibold text-nowrap ">Login</span>
              <img src={icon.src} alt="about" className="w-10" />
            </h2>
          </div>
        </div>
        {/* Form box */}
        <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Log In To Your Account
          </h2>
          <p className="text-gray-500 text-center mb-6 text-sm">
            Please provide your login details to access your account
          </p>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/30"
            />
          </div>
          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/30"
              />
              {/* Eye icon placeholder */}
              <span className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer">
                👁
              </span>
            </div>
            <div className="text-right mt-1">
              <a href="#" className="text-sm text-indigo-600 hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>
          {/* Login button */}
          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
