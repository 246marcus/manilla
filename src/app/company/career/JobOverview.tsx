"use client";
import React from "react";
import careerbg from "../../../../public/images/careerbg.png";
import Link from "next/link";

interface JobOverviewProps {
  title: string;
  apply: string;
  discription: string;
  highlights: string[];
}

const JobOverview: React.FC<JobOverviewProps> = ({
  title,
  apply,
  discription,
  highlights,
}) => {
  return (
    <div
      className="relative  py-10 "
      style={{
        backgroundImage: `url(${careerbg.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Breadcrumb */}
      <div className=" absolute  hidden md:flex left-8 top-4">
        {" "}
        <nav className="text-sm text-gray-300 mb-4 mt-15 px-6 py-1 rounded-full bg-black/50">
          <Link href="/">
            <span className="hover:underline cursor-pointer">Home</span>
          </Link>{" "}
          &gt;
          <Link href="/company/career">
            <span className="hover:underline cursor-pointer">Career</span>
          </Link>{" "}
          &gt;
          <span className="text-white">Apply</span>
        </nav>
      </div>

      {/* Title */}
      <h1 className="text-3xl px-10 md:text-4xl font-semibold text-white my-8 mt-20">
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

      {/* Intro */}
      <div className="px-10 rounded-b-[70px] pt-6 pb-20  shadow-[#445189] bg-[#242f60] ">
        <div className="mb-6">
          <h2 className="italic text-white text-lg mb-3">{" ~  " + apply}</h2>
          <p className="text-gray-300 text-sm leading-relaxed">{discription}</p>
        </div>

        {/* Short Job Requirements */}
        <div className="flex mb-2">
          {" "}
          <p className="px-6 py-1 bg-black/40 rounded-full shadow shadow-white/50 text-white">
            Job requirements
          </p>
        </div>
        <div className="space-y-2">
          {highlights.map((req, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="text-white text-3xl ">•</span>
              <p className="text-gray-300 text-sm mt-3">{req}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default JobOverview;
