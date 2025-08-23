"use client";

import { useState } from "react";
import { Lock } from "lucide-react"; // icon for password field
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg-login.jpg')" }} // ✅ replace with your bg image
    >
      {/* Overlay for black tint */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content wrapper */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 py-10 gap-10">
        {/* Left Side Content */}
        <div className="text-white text-center lg:text-left max-w-lg">
          {/* Logo card-like bg */}
          <div className="bg-white/10 backdrop-blur-md rounded-[80px] px-6 py-5 flex items-center justify-center gap-2 mb-6 w-[373px] h-[116px] mx-auto lg:mx-0">
            <Image
              src="/icons/manilla-logo.svg" // ✅ replace with your logo
              alt="Manilla Finance"
              width={40}
              height={40}
            />
            <h1 className="font-poppins font-semibold text-[40px] leading-none capitalize">
              Manilla Finance
            </h1>
          </div>

          {/* Subtext */}
          <p className="text-lg font-medium mb-6">
            Simplifying finance for individuals, travelers, and the diaspora —
            fast, secure, and flexible.
          </p>

          {/* Illustration / Image */}
          <div className="mb-6">
            <Image
              src="/images/login-illustration.png" // ✅ replace with illustration
              alt="Illustration"
              width={400}
              height={300}
              className="mx-auto lg:mx-0"
            />
          </div>

          {/* Bottom text */}
          <p className="text-sm opacity-80">
            Create, manage, and publish in minutes. — Set up quickly and start
            creating with confidence.
          </p>
        </div>

        {/* Right Side - Login Form */}
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">
          {/* Icon at the top */}
          <div className="flex justify-center mb-6">
            <Image
              src="/icons/manilla-logo.svg" // ✅ or another small icon
              alt="Icon"
              width={50}
              height={50}
            />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Log In To Your Account
          </h2>
          <p className="text-sm text-gray-500 text-center mb-8">
            Please provide your login details to access your account
          </p>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Lock
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                size={18}
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>

          {/* Forgot Password + Submit */}
          <div className="flex items-center justify-between mb-6">
            <Link
              href="#"
              className="text-sm text-blue-600 hover:underline font-medium"
            >
              Forgot password?
            </Link>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
