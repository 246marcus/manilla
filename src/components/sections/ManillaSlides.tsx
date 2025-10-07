"use client";
// import React from "react";
// import { Inter } from "next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

// const ManillaSlides = () => {
//   return (
//     <section>
//       <div className="bg-[#D7E3FF59] mt-6 p-4 flex justify-center">
//         <div
//           className="bg-white rounded-2xl p-2 max-w-[345px]"
//           style={{ boxShadow: "0px 4px 12px 0px #00000029" }}
//         >
//           <div className="border-[#281AC9] border-1 p-2 rounded-2xl flex flex-col items-center text-center">
//             <img
//               src="/images/manillapay.png"
//               alt="manilla pay"
//               className="w-[325px] h-[235px] rounded-lg"
//             />

//             <p
//               className={`${inter.className} text-[#181635] font-bold text-[18px] mt-4 self-start`}
//             >
//               Manilla Pay
//             </p>

//             <p
//               className={`${inter.className} text-[#181635] text-[14px] leading-[140%] mt-2 text-left`}
//             >
//               Pay bills, settle travel bills, and settle essential services
//               instantly using stablecoins or debit cards. Manilla Pay bridges
//               crypto with everyday life in Nigeria, ensuring secure, fast, and
//               reliable payments anytime, anywhere.
//             </p>

//             <p
//               className={`${inter.className} text-[14px] text-[#181635] mt-8 font-medium`}
//             >
//               Download Manilla App
//             </p>

//             <div className="flex mt-2 gap-0 justify-center items-center -space-x-3">
//               <img
//                 src="/images/googlestore.png"
//                 alt="Google Play"
//                 className="w-[154px] h-[49px]"
//               />
//               <img
//                 src="/images/appstore.png"
//                 alt="App Store"
//                 className="w-[150px] h-[49px]"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="bg-[#D7E3FF59] mt-6 p-4 flex justify-center">
//         <div
//           className="bg-white rounded-2xl p-2 max-w-[345px]"
//           style={{ boxShadow: "0px 4px 12px 0px #00000029" }}
//         >
//           <div className="border-[#FACA31] border-1 p-2 rounded-2xl flex flex-col items-center text-center">
//             <img
//               src="/images/manillapay2.png"
//               alt="manilla pay"
//               className="w-[325px] h-[235px] rounded-lg"
//             />

//             <p
//               className={`${inter.className} text-[#181635] font-bold text-[18px] mt-4 self-start`}
//             >
//               Manilla Crypto Debit Card
//             </p>

//             <p
//               className={`${inter.className} text-[#181635] text-[14px] leading-[140%] mt-2 text-left`}
//             >
//               Spend crypto like cash across Nigeria and beyond with Manilla’s
//               upcoming debit card. Seamlessly shop, withdraw, and pay on the
//               go—converting digital assets to naira instantly while enjoying
//               global acceptance and convenience.
//             </p>

//             <p
//               className={`${inter.className} text-[14px] text-[#181635] mt-8 font-medium`}
//             >
//               Join the Waitlist – Be first to swipe in crypto.
//             </p>

//             <div className="flex mt-2 gap-3 justify-center items-center -space-x-3 ">
//               <img
//                 src="/icons/Iconproductarrow3.png"
//                 alt="arrow"
//                 className="w-[26px] h-[26px] -space-x-3"
//               />
//               <p
//                 className={`${inter.className} font-semibold text-[14px] text-[#181635] `}
//               >
//                 Click Here to Join
//               </p>
//               <button className="bg-black ml-3 text-white rounded-3xl text-[16px] - w-[120px] h-[40px]">
//                 Join Waitlist
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="bg-[#D7E3FF59] mt-6 p-4 flex justify-center">
//         <div
//           className="bg-white rounded-2xl p-2 max-w-[345px]"
//           style={{ boxShadow: "0px 4px 12px 0px #00000029" }}
//         >
//           <div className="border-[#282828] border-1 p-2 rounded-2xl flex flex-col items-center text-center">
//             <img
//               src="/images/manillapay3.png"
//               alt="manilla pay"
//               className="w-[325px] h-[235px] rounded-lg"
//             />

//             <p
//               className={`${inter.className} text-[#181635] font-bold text-[18px] mt-4 self-start`}
//             >
//               Manilla Token (MNLA)
//             </p>

//             <p
//               className={`${inter.className} text-[#181635] text-[14px] leading-[140%] mt-2 text-left`}
//             >
//               MNLA powers the Manilla ecosystem, rewarding users with cashback,
//               discounts, and loyalty perks. As Nigeria’s bridge to decentralized
//               finance, MNLA fosters community growth while unlocking premium
//               features across payments, travel, and staking solutions.
//             </p>

//             <p
//               className={`${inter.className} text-[14px] text-[#181635] mt-8 font-medium`}
//             >
//               Stake / Learn more About MNLA
//             </p>

//             <div className="flex mt-2 gap-3 justify-center items-center -space-x-3 ">
//               <img
//                 src="/icons/Iconproductarrow3.png"
//                 alt="arrow"
//                 className="w-[26px] h-[26px] -space-x-3"
//               />
//               <p
//                 className={`${inter.className} font-semibold text-[14px] text-[#181635] `}
//               >
//                 Click Here to Join
//               </p>
//               <button className="bg-black ml-3 text-white rounded-3xl text-[16px] - w-[120px] h-[40px]">
//                 MNLA Token
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ManillaSlides;

import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ManillaSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/manillapay.png",
      title: "Manilla Pay",
      description:
        "Pay bills, settle travel bills, and settle essential services instantly using stablecoins or debit cards. Manilla Pay bridges crypto with everyday life in Nigeria, ensuring secure, fast, and reliable payments anytime, anywhere.",
      cta: "Download Manilla App",
      borderColor: "border-[#281AC9]",
      showStores: true,
    },
    {
      image: "/images/manillapay2.png",
      title: "Manilla Crypto Debit Card",
      description:
        "Spend crypto like cash across Nigeria and beyond with Manilla's upcoming debit card. Seamlessly shop, withdraw, and pay on the go—converting digital assets to naira instantly while enjoying global acceptance and convenience.",
      cta: "Join the Waitlist – Be first to swipe in crypto.",
      borderColor: "border-[#FACA31]",
      showStores: false,
      buttonText: "Join Waitlist",
    },
    {
      image: "/images/manillapay3.png",
      title: "Manilla Token (MNLA)",
      description:
        "MNLA powers the Manilla ecosystem, rewarding users with cashback, discounts, and loyalty perks. As Nigeria's bridge to decentralized finance, MNLA fosters community growth while unlocking premium features across payments, travel, and staking solutions.",
      cta: "Stake / Learn more About MNLA",
      borderColor: "border-[#282828]",
      showStores: false,
      buttonText: "MNLA Token",
    },
    {
      image: "/images/manillapay4.png",
      title: "Manilla Vault",
      description:
        "Put your crypto to work by staking on Manilla. Earn attractive yields, secure the ecosystem, and enjoy exclusive platform benefits—making your digital assets grow while supporting financial innovation in Nigeria’s DeFi landscape.",
      cta: "Stake your Tokens for More Yields",
      borderColor: "border-[#2FC302]",
      showStores: false,
      buttonText: "Stake Token",
    },
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="bg-[#D7E3FF59] lg:hidden">
      <div className=" mt-6 mb-7 p-4 flex flex-col items-center">
        {/* Card Display */}
        <div
          className="bg-white rounded-2xl p-2 max-w-[345px] transition-all duration-500"
          style={{ boxShadow: "0px 4px 12px 0px #00000029" }}
        >
          <div
            className={`${slides[currentSlide].borderColor} border-2 p-2 rounded-2xl flex flex-col items-center text-center`}
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-[325px] h-[235px] rounded-lg"
            />

            <p
              className={`${inter.className} text-[#181635] font-bold text-[18px] mt-4 self-start`}
            >
              {slides[currentSlide].title}
            </p>

            <p
              className={`${inter.className} text-[#181635] text-[14px] leading-[140%] mt-2 text-left`}
            >
              {slides[currentSlide].description}
            </p>

            <p
              className={`${inter.className} text-[14px] text-[#181635] mt-8 font-medium`}
            >
              {slides[currentSlide].cta}
            </p>

            {slides[currentSlide].showStores ? (
              <div className="flex mt-2 gap-0 justify-center items-center -space-x-3">
                <img
                  src="/images/googlestore.png"
                  alt="Google Play"
                  className="w-[150px] h-[60px]"
                />
                <img
                  src="/images/appstore.png"
                  alt="App Store"
                  className="w-[150px] h-[60px]"
                />
              </div>
            ) : (
              <div className="flex mt-2 gap-3 justify-center items-center">
                <img
                  src="/icons/Iconproductarrow3.png"
                  alt="arrow"
                  className="w-[26px] h-[26px]"
                />
                <p
                  className={`${inter.className} font-semibold text-[14px] text-[#181635]`}
                >
                  Click Here to Join
                </p>
                <button className="bg-black ml-3 text-white rounded-3xl text-[16px] w-[120px] h-[40px]">
                  {slides[currentSlide].buttonText}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Indicator Dots */}
        <div className="flex gap-2 mt-6 text-[#282828]">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 ${
                currentSlide === index
                  ? "w-8 h-2 bg-black rounded-full"
                  : "w-2 h-2 bg-[#FACA31] rounded-full"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManillaSlides;
