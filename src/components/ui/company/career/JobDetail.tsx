"use client";
import React from "react";


interface JobSection {
  title: string;
  content: string[];
}

interface JobDetailsProps {
  jobArray: JobSection[];
}

const JobDetails: React.FC<JobDetailsProps> = ({ jobArray }) => {
  return (
    <div className=" py-20  bg-[#010d44] max-w-6xl mx-auto  -translate-y-24 rounded-lg shadow-gray-800 shadow-2xl ">
      {/* Sections */}
      {jobArray.map((section, idx) => (
        <div
          key={idx}
          className="mb-8 px-6  py-4 flex flex-col md:flex-row gap-4 border-b-2 border-b-white/50 border-dashed "
        >
          <h3 className="text-white font-semibold text-lg md:mb-4 flex-2/10">
            - {section.title}
          </h3>
          <ul className="space-y-2 flex-8/10 pb-4 ">
            {section.content.map((line, i) => (
              <li key={i} className="flex items-start gap-2">
                {section.title !== "Working At Manila" && (
                  <span className="text-blue-500 text-3xl">•</span>
                )}
                <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                  {line}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
        <button className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
          Contact Us
        </button>
        <button className="px-6 py-2 bg-white  text-black rounded-full hover:bg-transparent hover:text-white hover:border-white hover:border transition">
          Apply Now
        </button>
      </div>
    </div>
  );
};
export default JobDetails;
