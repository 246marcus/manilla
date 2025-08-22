import React from "react";

const CareerForm: React.FC = ({}) => {
  return (
    <section className="max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto px-4 py-10 -translate-y-30 xl:-translate-y-36">
      <div className="bg-gradient-to-br from-[#000c43] to-[#0A2A4F] p-6 md:p-10 rounded-3xl xl:rounded-4xl shadow-black shadow-xl">
        <h2 className="text-center text-xl font-semibold text-white mb-8">
          Contact Form
        </h2>

        <form className="space-y-4">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1 text-white">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="border border-white rounded-lg px-4 py-2 md:py-3 xl:py-4 w-full text-white placeholder-white bg-transparent"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-white">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="border border-white rounded-lg px-4 py-2 md:py-3 xl:py-4 w-full text-white placeholder-white bg-transparent"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1 text-white">
                Business Email
              </label>
              <input
                type="email"
                placeholder="Enter your business email"
                className="border border-white rounded-lg px-4 py-2 md:py-3 xl:py-4 w-full text-white placeholder-white bg-transparent"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-white">
                Business Telephone
              </label>
              <input
                type="tel"
                placeholder="Enter your business telephone"
                className="border border-white rounded-lg px-4 py-2 md:py-3 xl:py-4 w-full text-white placeholder-white bg-transparent"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1 text-white">
                Years of Experience
              </label>
              <input
                type="number"
                placeholder="Enter your years of experience"
                className="border border-white rounded-lg px-4 py-2 md:py-3 xl:py-4 w-full text-white placeholder-white bg-transparent"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-white">Country</label>
              <input
                type="text"
                placeholder="Enter your country name"
                className="border border-white rounded-lg px-4 py-2 md:py-3 xl:py-4 w-full text-white placeholder-white bg-transparent"
              />
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1 text-white">City</label>
              <input
                type="text"
                placeholder="Enter your city name"
                className="border border-white rounded-lg px-4 py-2 md:py-3 xl:py-4 w-full text-white placeholder-white bg-transparent"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-white">Post Code</label>
              <input
                type="text"
                placeholder="Enter your post code"
                className="border border-white rounded-lg px-4 py-2 md:py-3 xl:py-4 w-full text-white placeholder-white bg-transparent"
              />
            </div>
          </div>

          {/* Copy Letter */}
          <div>
            <label className="block text-sm mb-1 text-white">Copy Letter</label>
            <textarea
              placeholder="Type or paste your cover letter here"
              rows={4}
              className="border border-white rounded-lg px-4 py-2 md:py-3 xl:py-4 w-full text-white placeholder-white bg-transparent"
            />
          </div>

          {/* Portfolio Link */}
          <div>
            <label className="block text-sm mb-1 text-white">
              Portfolio Link
            </label>
            <input
              type="url"
              placeholder="Type or paste your portfolio link here"
              className="border border-white rounded-lg px-4 py-2 md:py-3 xl:py-4 w-full text-white placeholder-white bg-transparent"
            />
          </div>

          {/* CV Upload */}
          <div>
            <label className="block text-sm mb-1 text-white">CV Upload</label>
            <input
              type="file"
              className="block w-full text-sm text-white file:mr-4 file:py-2 md:py-3 xl:py-4 file:px-4 
                file:rounded-full file:border file:border-white file:text-sm file:font-semibold 
                file:bg-transparent file:text-white hover:file:bg-white hover:file:text-black"
            />
          </div>

          {/* Footer Note */}
          <p className="text-[10px] text-yellow-400">
            By submitting your email address, you agree to receive occasional
            marketing messages from Manilla, from which you can unsubscribe at
            any time. For more information please see our privacy policy.
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default CareerForm;
