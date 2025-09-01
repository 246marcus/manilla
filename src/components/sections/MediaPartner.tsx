"use client";

import React, { useState } from "react";
import darkbg from "../../../public/images/darkstylebg.png";
import gradient from "../../../public/images/gradientStripe.png";

const MediaPartners: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error">("success");

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
    <section className="bg-white max-w-7xl mx-auto px-4 mt-6">
      {/* Top dark section */}
      {/* Top dark section */}
      <div
        className="bg-gray-900 text-white rounded-t-[2rem] px-4 pt-12 pb-4 sm:pt-16"
        style={{
          backgroundImage: `url(${darkbg.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Top pill */}

          {/*  desktop */}
          <div className=" inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-5 py-2 rounded-full text-xs font-medium mb-6">
            Manilla in the News
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Media Partners
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            Whether you`re a business or individual, Manilla Finance offers a
            secure and flexible way to manage payments, bills, and travel — all
            in one trusted platform.
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
        className="bg-gradient-to-r from-green-50 via-purple-50 to-pink-50 px-4 sm:px-6 lg:px-8 py-10 sm:py-14"
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
         
          <div className="flex flex-col md:flex-row">
            <p className=" md:flex-2/6 text-xs md:text-sm text-gray-600 max-w-sm my-auto ">
              Subscribe to our newsletter for exclusive updates, insider perks,
              and a front-row seat to the future of local & cross-border
              payments.
            </p>
           
            <form onSubmit={handleSubscribe} className=" md:flex-4/6 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Type Email here"
                className="flex-1 rounded-full border mt-3 border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                required
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition disabled:opacity-50"
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
            
            {/* Message display */}
            {message && (
              <div className={`mt-4 text-center text-sm ${
                messageType === "success" ? "text-green-600" : "text-red-600"
              }`}>
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaPartners;
