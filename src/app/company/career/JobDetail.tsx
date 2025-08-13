"use client";
import React from "react";

export default function JobDetails() {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-10 border-t border-gray-500 border-dotted">
      {/* Sections */}
      {[
        {
          title: "Job Description",
          content: [
            "As a Legal Advisor, you'll be a partner to our business teams, offering expert advice on a wide range of legal matters. You'll draft and review contracts, manage regulatory compliance, and mitigate legal risks.",
          ],
        },
        {
          title: "Job Responsibilities",
          content: [
            "Provide comprehensive legal advice to various business units.",
            "Draft, review, and negotiate a variety of legal agreements.",
            "Conduct legal research and stay updated on relevant laws.",
            "Identify and mitigate potential legal risks with ventures.",
            "Ensure compliance with all applicable laws.",
            "Maintain strong understanding of Nigerian tech regulations.",
            "Collaborate with stakeholders to ensure informed decisions.",
          ],
        },
        {
          title: "Job Requirements",
          content: [
            "Bachelor’s Degree in Law (LL.B, BL) & license to practice in Nigeria.",
            "Minimum 4+ years experience as Legal Advisor or similar role.",
            "Ability to provide clear, concise legal advice.",
            "Understanding of Nigerian corporate law & IP rights.",
            "Strong drafting & negotiation skills.",
            "Excellent communication & interpersonal skills.",
            "Experience in Nigerian tech sector preferred.",
          ],
        },
        {
          title: "Working At Manila",
          content: [
            "Working at Manila means joining a forward-thinking, inclusive blockchain company where your ideas matter. Your contributions help shape a secure, accessible financial future for everyone.",
          ],
        },
      ].map((section, idx) => (
        <div key={idx} className="mb-8">
          <h3 className="text-white font-semibold text-lg mb-4">
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

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <button className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition">
          Contact Us
        </button>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Apply Now
        </button>
      </div>
    </div>
  );
}
