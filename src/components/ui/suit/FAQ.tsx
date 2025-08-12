"use client";
import React, { useState } from "react";
import bg from "../../../../public/images/faqbg.png";
//import { FiPlus, FiMinus } from "react-icons/fi";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is MNLA?",
    answer:
      "MNLA is the native and utility token on the Manilla Finance platform. Its utility spans across the various services within the ecosystem and offers discounts on charges and payments.",
  },
  {
    question: "How to buy manilla token",
    answer:
      "You can purchase MNLA tokens on supported exchanges after launch. Follow official announcements for exchange listings.",
  },
  {
    question: "Does Manilla offers cashback rewards?",
    answer:
      "Yes, Manilla offers cashback rewards in MNLA tokens for eligible transactions within the ecosystem.",
  },
  {
    question: "Where to store MNLA tokens",
    answer:
      "MNLA tokens can be stored in compatible wallets like Metamask or Trust Wallet, or in the Manilla app wallet.",
  },
  {
    question: "What are the benefits of holding MNLA tokens?",
    answer:
      "Benefits include discounts on fees, staking rewards, access to exclusive deals, and governance participation.",
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className=" bg-gray-50 flex items-center justify-center p-6 sm:p-10">
      <div
        className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-6 sm:p-10 relative overflow-hidden"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // optional, makes sure it fills the area
        }}
      >
        {/* Background texture effect */}
        <div className="absolute inset-0 pointer-events-none  opacity-20" />

        {/* Header */}
        <div className="relative text-center">
          <span className="inline-block px-4 py-1 bg-black text-yellow-400 text-sm font-medium rounded-full">
            FAQ
          </span>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ list */}
        <div className="relative mt-8 space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden border ${
                activeIndex === index ? "border-indigo-500" : "border-slate-200"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 bg-white text-left"
              >
                <div
                  className={`flex items-center gap-2 ${
                    activeIndex === index ? "text-indigo-600" : "text-slate-800"
                  }`}
                >
                  {activeIndex === index && (
                    <span className="w-2 h-2 bg-indigo-600 rounded-full" />
                  )}
                  <span className="font-medium">{item.question}</span>
                </div>
                {activeIndex === index ? "+" : "-"}
              </button>
              {activeIndex === index && (
                <div className="p-4 border-t border-slate-100 bg-slate-50 text-sm text-slate-700">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
export default FAQ;
