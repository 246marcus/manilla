"use client";
import React, { useState } from "react";
import careerbg from "../../../../../public/images/careerbg.png";

interface CarrerFormProps {
  title: string;
}

const CareerForm: React.FC<CarrerFormProps> = ({ title }) => {
  return (
    <section className="">
      <div
        className="relative  py-10 pb-60 rounded-b-[70px]"
        style={{
          backgroundImage: `url(${careerbg.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // optional, makes sure it fills the area
        }}
      >
        {/* Breadcrumb */}
        <div className=" absolute  hidden md:flex left-8 top-4">
          {" "}
          <nav className="text-sm text-gray-300 mb-4 mt-10 px-6 py-1 rounded-full bg-black/50">
            <span className="hover:underline cursor-pointer">Home</span> &gt;
            <span className="hover:underline cursor-pointer">Career</span> &gt;
            <span className="text-white">Apply</span>
            <span className="hover:underline cursor-pointer">Career</span> &gt;
            <span className="text-white ">Send Application</span>
          </nav>
        </div>

        {/* Title */}
        <h1 className="text-3xl px-10 md:text-4xl font-semibold text-white my-8 mt-12">
          - {title}
        </h1>

        {/* Info Cards */}
        <div className="px-10 py-4 bg-[#000c43]">
          <ul className="my-1">
            <li className="text-white list-inside list-disc text-xl  ">
              <span className="text-sm">Information</span>
            </li>
          </ul>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              {
                label: "Place",
                value: "Lagos Island",
                border: "border-yellow-400",
              },
              { label: "Category", value: "Market", border: "border-white/60" },
              {
                label: "Job Type",
                value: "Full Time",
                border: "border-green-400",
              },
              {
                label: "Job Level",
                value: "Senior",
                border: "border-red-400/60",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`border-3 border-dotted bg-black/30   rounded-lg p-4 py-6 text-center md:text-start ${item.border}`}
              >
                <p className="text-gray-300 text-sm mb-3">- {item.label}</p>
                <p className="text-white text-xl font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="max-w-2xl lg:max-w-5xl xl:max-w-7xl rounded-3xl bg-[#010d44] mx-auto px-4 py-10 -translate-y-70 shadow-2xl shadow-blue-950">
        <div className="bg-gradient-to-br from-[#010d44] to-[#0A2A4F] p-6 md:p-10 rounded-3xl shadow-xl">
          <h2 className="text-center text-xl font-semibold text-white mb-8">
            Contact Form
          </h2>

          <form className="space-y-4">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs mb-1 text-white">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="border border-white rounded-lg px-4 py-2 w-full text-white placeholder-white bg-transparent"
                />
              </div>
              <div>
                <label className="block text-xs mb-1 text-white">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="border border-white rounded-lg px-4 py-2 w-full text-white placeholder-white bg-transparent"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs mb-1 text-white">
                  Business Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="border border-white rounded-lg px-4 py-2 w-full text-white placeholder-white bg-transparent"
                />
              </div>
              <div>
                <label className="block text-xs mb-1 text-white">
                  Business Telephone
                </label>
                <input
                  type="tel"
                  placeholder="Enter your business telephone"
                  className="border border-white rounded-lg px-4 py-2 w-full text-white placeholder-white bg-transparent"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs mb-1 text-white">
                  Years of Experience
                </label>
                <input
                  type="number"
                  placeholder="Enter your years of experience"
                  className="border border-white rounded-lg px-4 py-2 w-full text-white placeholder-white bg-transparent"
                />
              </div>
              <div>
                <label className="block text-xs mb-1 text-white">Country</label>
                <input
                  type="text"
                  placeholder="Enter your country name"
                  className="border border-white rounded-lg px-4 py-2 w-full text-white placeholder-white bg-transparent"
                />
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs mb-1 text-white">City</label>
                <input
                  type="text"
                  placeholder="Enter your city name"
                  className="border border-white rounded-lg px-4 py-2 w-full text-white placeholder-white bg-transparent"
                />
              </div>
              <div>
                <label className="block text-xs mb-1 text-white">
                  Post Code
                </label>
                <input
                  type="text"
                  placeholder="Enter your post code"
                  className="border border-white rounded-lg px-4 py-2 w-full text-white placeholder-white bg-transparent"
                />
              </div>
            </div>

            {/* Copy Letter */}
            <div>
              <label className="block text-xs mb-1 text-white">
                Copy Letter
              </label>
              <textarea
                placeholder="Type or paste your cover letter here"
                rows={4}
                className="border border-white rounded-lg px-4 py-2 w-full text-white placeholder-white bg-transparent"
              />
            </div>

            {/* Portfolio Link */}
            <div>
              <label className="block text-xs mb-1 text-white">
                Portfolio Link
              </label>
              <input
                type="url"
                placeholder="Type or paste your portfolio link here"
                className="border border-white rounded-lg px-4 py-2 w-full text-white placeholder-white bg-transparent"
              />
            </div>

            {/* CV Upload */}
            <div>
              <label className="block text-xs mb-1 text-white">CV Upload</label>
              <input
                type="file"
                className="block w-full text-xs text-white file:mr-4 file:py-2 file:px-4 
                file:rounded-full file:border file:border-white file:text-xs file:font-semibold 
                file:bg-transparent file:text-white hover:file:bg-white hover:file:text-black"
              />
            </div>

            {/* Footer Note */}
            <p className="text-[10px] text-yellow-400">
              By submitting your email address, you agree to receive occasional
              marketing messages from Manilla, from which you can unsubscribe at
              any time. For more information please see our privacy policy.
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-full font-medium hover:opacity-90 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default CareerForm;
