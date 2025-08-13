"use client";
import React from "react";

export default function JobOverview() {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-300 mb-4">
        <span className="hover:underline cursor-pointer">Home</span> &gt;{" "}
        <span className="hover:underline cursor-pointer">Career</span> &gt;{" "}
        <span className="text-white">Apply</span>
      </nav>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
        - Growth Hack Specialist
      </h1>

      {/* Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {[
          { label: "Place", value: "New York, NY" },
          { label: "Category", value: "Market" },
          { label: "Job Type", value: "Full Time" },
          { label: "Job Level", value: "Senior" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="border border-dotted border-gray-400 rounded-lg p-4 text-center"
          >
            <p className="text-gray-300 text-sm mb-1">- {item.label}</p>
            <p className="text-white font-semibold">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Intro */}
      <div className="mb-6">
        <h2 className="italic text-white text-lg mb-3">
          ~ Apply As Growth Specialist
        </h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          We are searching for a brilliant and data-driven Senior Growth Hack
          Specialist to join our team. In this fast-paced role, you'll be a key
          player in developing and executing innovative growth hacking
          strategies that propel our company forward.
        </p>
      </div>

      {/* Short Job Requirements */}
      <div className="space-y-2">
        {[
          "Minimum 3+ years of experience in growth hacking or a related field",
          "Proven track record of successfully implementing growth hacking initiatives",
          "Strong analytical skills with marketing analytics platforms",
          "Excellent understanding of marketing funnels, user acquisition, and conversion optimization",
        ].map((req, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <span className="text-blue-400 mt-1">•</span>
            <p className="text-gray-300 text-sm">{req}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
