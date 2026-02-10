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
        className="bg-gray-900 w-full lg:max-w-7xl lg:mx-auto text-white  md:rounded-t-[2rem]   lg:rounded-t-[2rem]  pt-12 pb-4 sm:pt-16"
        style={{
          backgroundImage: `url(${darkbg.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-5xl mx-auto text-center mb-10">
          {/*  desktop */}
          <div className=" inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-5 py-2 rounded-full text-xs font-medium mb-6">
            Partner with Manilla
          </div>

          <h2 className="lg:text-[48px] text-[16px] font-bold mb-4">
            Partner With Us
          </h2>
          <p className="text-[8px] lg:text-[16px] sm:text-base text-gray-300 max-w-2xl mx-auto ">
            Whether you are a business seeking to streamline your payment
            collections or an individual looking for a secure, flexible way to
            pay your utility bills and travel expenses, Manilla Finance is your
            trusted partner.
          </p>
        </div>

        <div className="flex flex-row gap-10">
          <div className="relative bg-[#E2E2E21A] p-8 rounded-tr-2xl rounded-br-2xl flex flex-col justify-center items-center overflow-hidden">
            {/* sunlight glow */}
            <div className="absolute left-0 top-0 h-full w-1/7 bg-gradient-to-l from-[#E2E2E21A] via-[#E2E2E21A] to-transparent blur-2xl opacity-100"></div>

            <div className="relative z-10 flex flex-col items-center ml-[-30] lg:ml-0">
              <div className="flex items-center gap-2">
                <img
                  src="/icons/mediaicon.png"
                  alt=""
                  className="lg:w-[34.36px] lg:h-[34.36px] w-[20px] h-[20px]"
                />
                <p className="text-[#FFFFFF] font-bold text-[12px] lg:text-[20px]">
                  For Businesses:
                </p>
              </div>

              <p className=" text-[8px] lg:text-[14px] font-medium text-white text-center mt-3">
                Integrate our APIs to offer your customers seamless crypto and
                fiat payment options. Enhance your billing systems with
                blockchain-powered transparency and security. Benefit from
                real-time transaction processing and comprehensive invoicing
                solutions designed for efficiency and compliance.
              </p>
            </div>
          </div>

          <div className="bg-[#E2E2E21A] lg:p-3 flex flex-col justify-center items-center left-0 rounded-tl-2xl rounded-bl-2xl p-3">
            <div className="flex g">
              <img
                src="/icons/mediaicon2.png"
                alt=""
                className="lg:w-[34.36px] lg:h-[34.36px] w-[20px] h-[20px]"
              />
              <p className="text-[#FFFFFF] font-bold text-[12px] lg:text-[20px] pb-3">
                For Individuals:
              </p>
            </div>
            <p className=" text-[8px] lg:text-[14px] font-medium text-[white]  text-center ">
              Download our user-friendly app to access a world of payment
              options at your fingertips. Whether you want to pay electricity
              bills, top up data, book flights, or manage your invoices, Manilla
              Finance makes it easy, fast, and safe.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient section */}
      <div
        className="bg-gradient-to-r from-green-50 via-purple-50 to-pink-50 px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:rounded-b-[1rem] md:rounded-b-[2rem]"
        style={{
          backgroundImage: `url(${gradient.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // optional, makes sure it fills the area
        }}
      >
        <div className="max-w-5xl mx-auto text-center md:text-start">
          <h3 className=" text-center text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Get Started Today
          </h3>
          <p
            className={`${inter.className} text-[12px] font-semibold text-[#181635] text-center lg:text-start md:text-center `}
          >
            Contact us to learn more about us or to partner with us
          </p>

          {/* <p
            className={`${inter.className} text-[12px] font-semibold text-[#181635] text-center lg:text-start md:text-start`}
          >
            Manilla is launching soon — Join our Newsletter.
          </p> */}

          <div className="  flex flex-col lg:flex-row lg:justify-between lg:items-center md:items-center">
            {/* Left text */}
            <div>
              <p className="text-xs md:text-sm text-gray-600 max-w-sm my-auto">
                Contact us to learn more about our solutions or to discuss
                partnership opportunities. Experience the future of{" "}
                <br className="hidden lg:block" />
                payments with Manilla Finance — where technology meets trust.
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
                placeholder="Contact Us Today"
                className={`${inter.className}  w-[175px] sm:w-[150px] lg:w-[350px] rounded-full border border-gray-300 py-3 px-3 text-[10px] focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-[#181635] placeholder:text-center`}
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-4 py-3 rounded-full bg-gray-900 text-white text-[10px] font-medium hover:bg-gray-800 transition disabled:opacity-50 whitespace-nowrap  w-[100px] sm:-[100px] lg:w-[150px]"
              >
                {isLoading ? "Joining..." : "Get Started"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaPartners;
