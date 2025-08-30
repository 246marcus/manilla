"use client";

import React, { useState } from "react";

const CompanyForm: React.FC = () => {
  const [joinWaitlist, setJoinWaitlist] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error">("success");
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    companyName: "",
    companyAddress: "",
    requestContent: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const requestType = joinWaitlist ? "waitlist" : "contact";
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          requestType,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message);
        setMessageType("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          telephone: "",
          companyName: "",
          companyAddress: "",
          requestContent: "",
        });
        setJoinWaitlist(false);
      } else {
        setMessage(data.message || "Something went wrong");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setMessage("Something went wrong. Please try again.");
      setMessageType("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className=" max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4  py-10">
      {/* Contact Form */}
      <div className=" bg-white/60 p-6 md:p-10 rounded-3xl shadow-xl">
        <h2 className="text-center text-xl font-semibold text-gray-900 mb-8">
          Contact Form
        </h2>
        <form onSubmit={handleSubmit} className="bg-white/5 rounded-2xl p-6 md:p-8 shadow space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                placeholder="Enter your first name"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full placeholder:text-xs"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                placeholder="Enter your last name"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full placeholder:text-xs"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Business Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your business email"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full placeholder:text-xs"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Business Telephone
              </label>
              <input
                type="tel"
                value={formData.telephone}
                onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                placeholder="Enter your business telephone"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full placeholder:text-xs"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              placeholder="Enter your company name"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full placeholder:text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Company Address
            </label>
            <input
              type="text"
              value={formData.companyAddress}
              onChange={(e) => setFormData({ ...formData, companyAddress: e.target.value })}
              placeholder="Enter your company address"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full placeholder:text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Request Content
            </label>
            <textarea
              value={formData.requestContent}
              onChange={(e) => setFormData({ ...formData, requestContent: e.target.value })}
              placeholder="How we can help you"
              rows={4}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full placeholder:text-xs"
              required
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setJoinWaitlist(!joinWaitlist)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                joinWaitlist ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  joinWaitlist ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>{" "}
            <label htmlFor="waitlist" className="text-sm text-gray-600">
              Join Waitlist
            </label>
          </div>

          {message && (
            <div className={`p-3 rounded-lg text-sm ${
              messageType === "success" 
                ? "bg-green-100 text-green-800 border border-green-200" 
                : "bg-red-100 text-red-800 border border-red-200"
            }`}>
              {message}
            </div>
          )}

          <p className="text-xs text-gray-500">
            By submitting your email address, you agree to receive occasional
            marketing messages from Manilla, from which you can unsubscribe at
            any time. For more information, please see our privacy policy.
          </p>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Submitting..." : joinWaitlist ? "Join Waitlist" : "Submit Contact"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default CompanyForm;
