import React from "react";
import Image from "next/image";

const DevelopmentPartners = () => {
  return (
    <section className="bg-white text-gray-900 py-8 md:py-12 -mt-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* First image - static text */}
        <div className="w-full">
          <Image
            src="/images/Development1.png"
            alt="Development Partners Text"
            width={1400} // Increased width
            height={500}
            className="object-contain w-full h-auto"
          />
        </div>

        {/* Rolling effect image inside black background */}
        <div className="relative z-10 mt-0 w-full bg-black overflow-hidden">
          <div className="flex animate-roll">
            <Image
              src="/images/Development2.png"
              alt="Development Partners Logos"
              width={1000}
              height={200}
              className="w-auto max-w-none h-auto"
            />
            {/* Duplicate for seamless loop */}
            <Image
              src="/images/Development2.png"
              alt="Development Partners Logos"
              width={1200}
              height={200}
              className="w-auto max-w-none h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentPartners;
