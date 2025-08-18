"use client";
import Link from "next/link";
import React from "react";

type JobSection = {
  title: string;
  content: string[];
};

type JobDetailsProps = {
  jobArray: JobSection[];
};

export default function JobDetails({ jobArray }: JobDetailsProps) {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-10 border-t border-gray-500 border-dotted bg-[#010d44] mt-[-40] ">
      {jobArray.map((section, idx) => (
        <div key={idx} className="mb-8">
          <h3 className="text-white font-semibold text-lg mb-4 ">
            - {section.title}
          </h3>
          <ul className="space-y-2">
            {section.content.map((line, i) => (
              <li key={i} className="flex items-start gap-2">
                {section.title !== "Working At Manila" && (
                  <span className="text-blue-400 mt-1">•</span>
                )}
                <p className="text-gray-300 text-sm leading-relaxed">{line}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <div className="flex gap-4">
          <Link href="/company/contact">
            <button className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-blue-900 transition">
              Contact Us
            </button>
          </Link>

          <Link href="">
            <button className="px-6 py-3 bg-white text-blue-950 rounded-full hover:bg-blue-950 hover:text-white transition">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
