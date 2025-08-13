import React from "react";
import Image from "next/image";

const MediaPartner = () => {
  return (
    <section className="bg-white text-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6 flex justify-center">
        <div className="w-full max-w-full">
          <Image
            src="/images/mediaPartners.png"
            alt="Media Partner"
            width={1440} // intrinsic size for good quality
            height={480} // adjust aspect ratio as needed
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default MediaPartner;
