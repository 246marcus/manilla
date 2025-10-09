"use client";

import React, { useState } from "react";
import darkbg from "../../../public/images/darkstylebg.png";
import gradient from "../../../public/images/gradientStripe.png";

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

const MediaPartners: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error">(
    "success"
  );

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message);
        setMessageType("success");
        setEmail("");
      } else {
        setMessage(data.message);
        setMessageType("error");
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
      setMessageType("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className=" w-full sm:max-w-7xl sm:mx-auto sm:px-4 px-0 mt-6 mb-5">
      {/* Top dark section */}

      <div
        className="bg-gray-900 w-full lg:max-w-7xl lg:mx-auto text-white lg:rounded-t-[2rem] px-4 pt-12 pb-4 sm:pt-16"
        style={{
          backgroundImage: `url(${darkbg.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/*  desktop */}
          <div className=" inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-5 py-2 rounded-full text-xs font-medium mb-6">
            Manilla in the News
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Media Partners
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            We’re proud to collaborate with leading media platforms that help
            amplify our mission and share our story with the world.
          </p>
        </div>

        {/* Trusted Platform Rolling Effect */}
        <div className="relative z-10 mt-20 w-full overflow-hidden">
          {/* top */}
          <div className="flex animate-roll md:gap-x-4  h-28 md:h-34 ">
            <img
              src="/images/ddd1.png"
              alt="Trusted by top platforms"
              className="w-auto max-w-none   "
            />
            <img
              src="/images/ddd1.png"
              alt="Trusted by top platforms"
              className="w-auto max-w-none -translate-x-18  "
            />
            <img
              src="/images/ddd1.png"
              alt="Trusted by top platforms"
              className="w-auto max-w-none   "
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient section */}
      <div
        className="bg-gradient-to-r from-green-50 via-purple-50 to-pink-50 px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:rounded-b-[1rem]"
        style={{
          backgroundImage: `url(${gradient.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // optional, makes sure it fills the area
        }}
      >
        <div className="max-w-5xl mx-auto text-center md:text-start">
          <h3 className=" text-center text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Be First. Be Ahead.
          </h3>
          <p
            className={`${inter.className} text-[12px] font-semibold text-[#181635] text-center lg:text-start md:text-center `}
          >
            Manilla is launching soon — Join our Newsletter.
          </p>

          {/* <p
            className={`${inter.className} text-[12px] font-semibold text-[#181635] text-center lg:text-start md:text-start`}
          >
            Manilla is launching soon — Join our Newsletter.
          </p> */}

          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center md:items-center">
            {/* Left text */}
            <div>
              <p className="text-xs md:text-sm text-gray-600 max-w-sm my-auto">
                Join our newsletter to get early access, exclusive updates{" "}
                <br className="hidden lg:block" />
                and a front-row seat to the future of cross-border payments
              </p>
            </div>

            {/* Right form */}
            <form
              onSubmit={handleSubscribe}
              className="mt-4 lg:mt-0 flex lg:flex-row  flex-row items-center justify-center gap-4 max-w-2xl mx-auto lg:mx-0"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Join the waiting list for our App"
                className={`${inter.className}  w-[175px] sm:w-[150px] lg:w-[350px] rounded-full border border-gray-300 py-3 px-3 text-[10px] focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-[#181635] placeholder:text-center`}
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-4 py-3 rounded-full bg-gray-900 text-white text-[10px] font-medium hover:bg-gray-800 transition disabled:opacity-50 whitespace-nowrap  w-[100px] sm:-[100px] lg:w-[150px]"
              >
                {isLoading ? "Joining..." : "Join Newsletter"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaPartners;
