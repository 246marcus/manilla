"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import product1 from "../../../public/images/product1.png";
import product2 from "../../../public/images/product2.png";
import product3 from "../../../public/images/product3.png";
import productA from "../../../public/images/ccc1.png";
import productB from "../../../public/images/ccc2.png";
import productC from "../../../public/images/ccc3.png";

type BlackCardSlide = {
  layoutType: 1;
  bgImage: string;
  bottomImage: string;
  leftImage: string;
  blackCard: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    features: {
      icon: string;
      text: string;
    }[];
    extraParagraph: string;
  };
  downloadSection: {
    title: string;
    buttons: {
      img: string;
      link: string;
      alt: string;
    }[];
  };
};

type LeftTagSlide = {
  layoutType: 2;
  bgImage: string;
  bottomImage: string;
  leftTag: {
    text: string;
    transparentCard: {
      title: string;
      paragraph: string;
      features: {
        icon: string;
        text: string;
      }[];
    };
    outsideText: string;
    clickToJoin: {
      icon: string;
      text: string;
    };
    button: {
      text: string;
    };
  };
  rightImage: string;
};

type BlueCardSlide = {
  layoutType: 3;
  bgImage: string;
  bottomImage: string;
  leftImage: string;
  blueCard: {
    title: string;
    paragraph: string;
    features: {
      icon: string;
      text: string;
    }[];
  };
  outsideParagraph: string;
  outsideText: string;
  clickToJoin: {
    icon: string;
    text: string;
  };
  button: {
    text: string;
  };
};

type Slide = BlackCardSlide | LeftTagSlide | BlueCardSlide;

// Define slide content for the top sections
const slideTopContent = [
  {
    // Slide 1 content
    leftSection: {
      title: "Manilla Pay",
      paragraph1:
        "Imagine settling all your household bills in one place, in seconds, without worrying about failed bank transfers or app downtimes.",
      paragraph2:
        "With our smart, intuitive app, you can pay for flights, stays, rides, electricity, internet, airtime, cable subscriptions, and more - all using your digital assets.",
    },
    rightSection: {
      title: "A powerful suite of tools built to simplify your financial life",
      features: [
        {
          icon: "/icons/iconblue.png",
          text: "Manilla Pay",
          isSpecial: true,
        },
        {
          icon: "/icons/iconproduct.png",
          text: "Manilla Crypto Debit Card",
          isSpecial: false,
        },
        {
          icon: "/icons/iconproduct.png",
          text: "Manilla Token (MNLA)",
          isSpecial: false,
        },
      ],
      bottomText:
        "Designed for Nigerian realities, Manilla Pay eliminates queues, delays, and app-switching fatigue. It's secure, scalable, and built for daily life.",
    },
  },
  {
    // Slide 2 content
    leftSection: {
      title: "Manilla Crypto Debit Card",
      paragraph1:
        "You shouldn't have to jump through hoops to use your crypto in the real world. Our upcoming Manilla Crypto Debit Card makes that dream a reality.",
      paragraph2:
        "Shop, pay bills, ride, or dine anywhere Mastercard is accepted - without manually converting your crypto.",
    },
    rightSection: {
      title: "A powerful suite of tools built to simplify your financial life",
      features: [
        {
          icon: "/icons/iconproduct.png",
          text: "Manilla Pay",
          isSpecial: false,
        },
        {
          icon: "/icons/iconyellow.png",
          text: "Manilla Crypto Debit Card",
          isSpecial: true,
        },
        {
          icon: "/icons/iconproduct.png",
          text: "Manilla Token (MNLA)",
          isSpecial: false,
        },
      ],
      bottomText:
        "The bridge between your wallet and the world - Real-time crypto-to-naira conversion, seamless integration, and global utility packed into one sleek card.",
    },
  },
  {
    // Slide 3 content
    leftSection: {
      title: "Manilla Token (MNLA)",
      paragraph1:
        "MNLA is more than a token. It's the heartbeat of the Manilla ecosystem. It gives you utility, rewards, and purchasing power.",
      paragraph2:
        "As you use Manilla Pay, you earn MNLA tokens. Stake them, save them, or spend them across our ecosystem",
    },
    rightSection: {
      title: "A powerful suite of tools built to simplify your financial life",
      features: [
        {
          icon: "/icons/iconproduct.png",
          text: "Manilla Pay",
          isSpecial: false,
        },
        {
          icon: "/icons/iconproduct.png",
          text: "Manilla Crypto Debit Card",
          isSpecial: false,
        },
        {
          icon: "/icons/iconlast.png",
          text: "Manilla Token (MNLA)",
          isSpecial: true,
        },
      ],
      bottomText:
        "From discounted bills to referral rewards and borderless transactions, MNLA is built to increase crypto value in your everyday life.",
    },
  },
];

const Products = () => {
  const slides: Slide[] = [
    // ------------------ SLIDE 1 ------------------
    {
      layoutType: 1,
      bgImage: "/images/bg1.png",
      bottomImage: "/images/bottom1.png",
      leftImage: "/images/leftimg1.png",
      blackCard: {
        title: "Manilla Pay",
        paragraph1:
          "Imagine settling all your household bills in one place, in seconds, without worrying about failed bank transfers or app downtimes.",
        paragraph2: "Secure, scalable, and built for daily life.",
        features: [
          {
            icon: "/icons/iconproduct.png",
            text: "Transactions are processed in real time",
          },
          {
            icon: "/icons/iconproduct.png",
            text: "Activate Auto-Pay to automate recurring payments and eliminate service interruptions.",
          },
          {
            icon: "/icons/iconproduct.png",
            text: "All activity is tracked and accessible through a centralized dashboard, offering complete visibility and control over transactions.",
          },
        ],
        extraParagraph: "Our platform supports payments using",
      },
      downloadSection: {
        title: "Download Manilla App",
        buttons: [
          {
            img: "/images/googlestore.png",
            link: "https://play.google.com/store/apps/details?id=com.manillapay",
            alt: "Get it on Google Play",
          },
          {
            img: "/images/appstore.png",
            link: "https://apps.apple.com/app/manillapay",
            alt: "Download on the App Store",
          },
        ],
      },
    },
    // ------------------ SLIDE 2 ------------------
    {
      layoutType: 2,
      bgImage: "/images/bg2.png",
      bottomImage: "/images/bottom2.png",
      leftTag: {
        text: "Coming Soon",
        transparentCard: {
          title: "Manilla Crypto Debit Card",
          paragraph:
            "Spend Crypto Like Naira – Anywhere — no manual conversion.",
          features: [
            {
              icon: "/icons/iconproduct.png",
              text: "Accepted across POS terminals, e-commerce platforms, and ATMs, enabling both local and international transactions.",
            },
            {
              icon: "/icons/iconproduct.png",
              text: "Features real-time conversion of USDT or ETH to Naira, ensuring seamless spending in local currency.",
            },
            {
              icon: "/icons/iconproduct.png",
              text: "Users can transact globally or domestically with ease, and withdraw cash from any compatible ATM worldwide.",
            },
          ],
        },
        outsideText: "Join the Waitlist – Be first to swipe in crypto.",
        clickToJoin: {
          icon: "/icons/iconablack.png",
          text: "Click Here to Join",
        },
        button: {
          text: "Join Waitlist",
        },
      },
      rightImage: "/images/rightimg2.png",
    },
    // ------------------ SLIDE 3 ------------------
    {
      layoutType: 3,
      bgImage: "/images/bg3.png",
      bottomImage: "/images/bottom3.png",
      leftImage: "/images/leftimg3.png",
      blueCard: {
        title: "Manilla Token (MNLA)",
        paragraph:
          "The Token That Pays You Back",
        features: [
          {
            icon: "/icons/iconproduct.png",
            text: "Get automated discounts instantly when executing utility and service payments.",
          },
          {
            icon: "/icons/iconproduct.png",
            text: " Accumulate earnings consistently from each completed transaction activity.",
          },
          {
            icon: "/icons/iconproduct.png",
            text: " Stake digital assets securely in Manilla Vault to get periodic rewards.",
          },
          {
            icon: "/icons/iconproduct.png",
            text: " Maintain token holdings continuously to unlock exclusive discounted deals.",
          },
        ],
      },
      outsideParagraph: "",
      outsideText: " Stake / Learn more About MNLA ",
      clickToJoin: {
        icon: "/icons/iconablack.png",
        text: "Click Here to Learn",
      },
      button: {
        text: "MNLA Token",
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // autoplay every 5s/ 10s unless paused
  useEffect(() => {
    if (paused) return;

    // detect if mobile (adjust breakpoint to your design, e.g. < 768px)
    const isMobile = window.innerWidth < 768;

    const interval = setInterval(
      () => {
        nextSlide();
      },
      isMobile ? 10000 : 5000
    ); 

    return () => clearInterval(interval);
  }, [currentIndex, paused]);


  const currentSlide = slides[currentIndex];
  const currentTopContent = slideTopContent[currentIndex];

  // RENDER LOGIC FOR DIFFERENT LAYOUT TYPES
  const renderSlideContent = () => {
    switch (currentSlide.layoutType) {
      case 1:
        return (
          <div
            onDoubleClick={() => {}}
            className="relative cursor-pointer mx-auto"
            onMouseEnter={() => setPaused(true)} // stop on hover
            onMouseLeave={() => setPaused(false)} // resume when mouse leaves
            onTouchStart={() => setPaused(true)} // stop on mobile touch
            onTouchEnd={() => setPaused(false)}
          >
            <img
              src={product1.src}
              alt="product image"
              className=" w-full max-w-6xl max-h-[700px] mx-auto hidden sm:block"
            />
            {/*  <img
              src={productA.src}
              alt="product image"
              className=" w-full scale-y-110 max-w-6xl max-h-[300px] mx-auto sm:hidden"
            /> */}

            {/* Black Card*/}
            <div className="sm:hidden min-h-52 bg-black bg-cover bg-opacity-80 text-white px-3 pt-8 rounded-2xl flex-1 flex flex-col justify-between">
              {currentSlide.blackCard && (
                <h1 className="text-3xl text-center  font-semibold mb-4">
                  {currentSlide.blackCard.title}
                </h1>
              )}

              {currentSlide.blackCard && (
                <>
                  <p className="mb-4 text-center text-sm text-gray-400 font-semibold break-words">
                    {currentSlide.blackCard.paragraph2}
                  </p>

                  <div className="flex flex-row flex-wrap gap-4 mb-4 lg:flex-col lg:flex-nowrap">
                    {currentSlide.blackCard.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Image
                          src={f.icon || "/iconproduct.png"}
                          alt={f.text}
                          width={24}
                          height={24}
                        />
                        <span className="text-xs font-semibold tracking-wider leading-5">
                          {f.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <p
                className="text-sm text-center font-medium"
                style={{
                  color: "var(--Secondary, rgba(250, 202, 49, 1))",
                }}
              >
                {currentSlide.blackCard.extraParagraph}
              </p>

              {/* Hardcoded Bottom Section */}
              <div className="mt-2 bg-black/20 border border-black/20 p-1 rounded-full  gap-1 flex items-center justify-center sm:gap-6 ">
                <div className="flex items-center gap-1  px-1 py-3 rounded-full">
                  <Image
                    src="/icons/usdc.png"
                    alt="Feature 1"
                    width={30}
                    height={20}
                    className="w-7 h-7 "
                  />
                  <span className="text-xs ">USDC</span>
                </div>
                <div className="flex items-center gap-1  bg px-3 py-2 rounded-full">
                  <Image
                    src="/icons/usdt.png"
                    alt="Feature 2"
                    width={20}
                    height={20}
                    className="w-7 h-7"
                  />
                  <span className="text-sm lg:text-xs">USDT</span>
                </div>
                <div className="flex items-center gap-1  px-1 py-2 rounded-full">
                  <Image
                    src="/icons/btc.png"
                    alt="Feature 3"
                    width={20}
                    height={20}
                    className=" w-7 h-7"
                  />
                  <span className="text-xs">BTC</span>
                </div>
                <div className="flex items-center gap-1 px-3 py-2 rounded-full">
                  <Image
                    src="/icons/Ethereum.png"
                    alt="Feature 4"
                    width={20}
                    height={20}
                    className="lg:w-7 lg:h-7 w-7 h-7" // 80px x 80px
                  />
                  <span className="text-xs">ETH</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div
            onDoubleClick={() => {}}
            className="relative cursor-pointer mx-auto"
            onMouseEnter={() => setPaused(true)} // stop on hover
            onMouseLeave={() => setPaused(false)} // resume when mouse leaves
            onTouchStart={() => setPaused(true)} // stop on mobile touch
            onTouchEnd={() => setPaused(false)}
          >
            <img
              src={product2.src}
              alt="product image"
              className=" w-full max-w-6xl max-h-[700px] mx-auto hidden sm:block"
            />
            {/*   <img
              src={productB.src}
              alt="product image"
              className=" w-full scale-y-110 max-w-6xl max-h-[300px] mx-auto sm:hidden"
            /> */}

            {/* Yellow Card*/}
            <div className="sm:hidden min-h-52 bg-yellow-500 bg-cover bg-opacity-80 py-8 p-4 rounded-2xl px-5 flex-1 flex flex-col justify-between">
              {currentSlide.leftTag && (
                <h1 className="text-3xl font-semibold text-center mb-4">
                  {currentSlide.leftTag.transparentCard.title}
                </h1>
              )}

              {currentSlide.leftTag.transparentCard && (
                <>
                  <p className="mb-4 text-center  text-black/80 font-semibold text-sm break-words">
                    {currentSlide.leftTag.transparentCard.paragraph}
                  </p>

                  <div className="flex flex-row flex-wrap gap-8 mb-4 lg:flex-col lg:flex-nowrap">
                    {currentSlide.leftTag.transparentCard.features.map(
                      (f, i) => (
                        <div key={i} className="flex items-center gap-1">
                          <Image
                            src={f.icon || "/iconproduct.png"}
                            alt={f.text}
                            width={36}
                            height={30}
                          />
                          <span className="-mt-2 text-xs font-semibold">
                            {f.text}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </>
              )}

              {/* Click to Join */}
              <div className="flex items-center justify-center gap-2 lg:ml-13 cursor-pointer ">
                <Image
                  src={
                    currentSlide.leftTag.clickToJoin.icon || "/iconblack.png"
                  }
                  alt=""
                  width={28}
                  height={18}
                />
                <span className="text-xs lg:text-sm">
                  {currentSlide.leftTag.clickToJoin.text}
                </span>
                <button className="bg-black text-white px-3 py-2 rounded-full text-xs lg:text-sm">
                  {currentSlide.leftTag.button.text}
                </button>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div
            onDoubleClick={() => {}}
            className="relative cursor-pointer mx-auto"
            onMouseEnter={() => setPaused(true)} // stop on hover
            onMouseLeave={() => setPaused(false)} // resume when mouse leaves
            onTouchStart={() => setPaused(true)} // stop on mobile touch
            onTouchEnd={() => setPaused(false)} // resume when touch ends
          >
            <img
              src={product3.src}
              alt="product image"
              className=" w-full max-w-6xl max-h-[700px] mx-auto hidden sm:block"
            />
            {/*  <img
              src={productC.src}
              alt="product image"
              className=" w-full scale-y-110 max-w-6xl max-h-[300px] mx-auto sm:hidden"
            />  */}

            {/* blue Card*/}
            <div className=" sm:hidden  min-h-52 bg-blue-800 bg-cover bg-opacity-80 text-white py-8 p-4 rounded-2xl flex-1 flex flex-col justify-between ">
              {currentSlide.blueCard && (
                <h1 className="text-3xl  text-center font-semibold mb-4">
                  {currentSlide.blueCard.title}
                </h1>
              )}

              {currentSlide.blueCard && (
                <>
                  <p className="mb-4 text-sm font-semibold text-center text-white break-words">
                    {currentSlide.blueCard.paragraph}
                  </p>

                  <div className="flex flex-row flex-wrap gap-6 items-center mb-4 lg:flex-col lg:flex-nowrap">
                    {currentSlide.blueCard.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Image
                          src={f.icon || "/iconproduct.png"}
                          alt={f.text}
                          width={24}
                          height={24}
                          className=""
                        />
                        <span className="text-xs font-semibold">{f.text}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Join Section */}
              <p className="font-bold text-sm text-center">
                {currentSlide.outsideText}
              </p>
              <div className="flex items-center justify-center mt-2 gap-2 cursor-pointer">
                <Image
                  src={currentSlide.clickToJoin.icon || "/iconablack.png"}
                  alt=""
                  width={28}
                  height={24}
                  className="mt-2"
                />
                <span className="font-bold text-xs">
                  {currentSlide.clickToJoin.text}
                </span>
                <button className="bg-black text-xs text-white px-3 py-1 rounded-full">
                  {currentSlide.button.text}
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="relative bg-white text-gray-900 pt-8 pb-20 md:pb-8">
      <div className="max-w-[95%] lg:max-w-[1400px] mx-auto px-6">
        {/* TOP SECTION */}
        <div className="mb-8  lg:mb-14 max-w-full lg:max-w-6xl mx-auto">
          {/* Header with Learn Button and Dropdown Icon */}
          <div className="relative mb-8 flex items-start justify-between">
            {/* Left button */}
            <button className="bg-gray-100 text-black px-6 py-2 rounded-full transition-colors border border-black/20 mb-1 md:translate-y-4 block mx-auto md:mt-10 lg:mx-0 mt-2 text-sm">
              Learn About Our Products
            </button>

            {/* Centered image */}
            <div className="absolute left-1/2 -translate-x-1/2 scale-80 -top-23 sm:-top-30 lg:-5 md:-top-20">
              <Image
                src="/images/product.png"
                alt="Product"
                width={250}
                height={100}
                className="text-gray-600  "
              />
            </div>

            {/* Spacer (keeps layout balanced) */}
            <div></div>
          </div>

          {/* Two Text Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Left Section */}
            <div className="space-y-3 md:mt-7 ">
              <h1 className="text-xl md:2xl text-center lg:text-start font-semibold text-black/80">
                {currentTopContent.leftSection.title}
              </h1>
              <p className="text-gray-700 text-sm text-balance text-center lg:text-start">
                {currentTopContent.leftSection.paragraph1}
              </p>
              <p className="text-black/80 font-semibold  text-center md:text-start">
                {currentTopContent.leftSection.paragraph2}
              </p>
            </div>

            {/* Right Section with Background */}
            <div className=" hidden sm:block relative bg-gradient-to-br from-blue-50 to-purple-50 bg-[url('/images/Rectangle2.png')] bg-cover bg-center bg-no-repeat p-5 rounded-xl">
              <h2 className="text-center lg:text-start font-bold text-gray-900 mb-6">
                {currentTopContent.rightSection.title}
              </h2>

              {/* Horizontal Feature List */}
              <div className="flex items-center justify-center gap-4 mb-6 flex-wrap lg:flex-nowrap max">
                {currentTopContent.rightSection.features.map(
                  (feature, index) => (
                    <div
                      key={index}
                      className={`flex flex-row items-center gap-2 px-3 py-1 rounded-full whitespace-nowrap max-w-md mx-auto ${
                        feature.isSpecial
                          ? "text-black scale-125 font-semibold"
                          : "text-gray-700 text-sm"
                      }`}
                    >
                      <Image
                        src={feature.icon}
                        alt={feature.text}
                        width={16}
                        height={16}
                        className="object-contain "
                      />
                      <span className="text-xs font-medium">
                        {feature.text}
                      </span>
                    </div>
                  )
                )}
              </div>

              {/* Broken Line Separator */}
              <div className="flex items-center justify-center mb-4">
                <Image
                  src="/icons/sectiondivider.png"
                  alt="Section Divider"
                  width={1200}
                  height={50}
                  className="w-full h-auto"
                />
              </div>

              {/* Bottom Text */}
              <p className="text-gray-700 text-center">
                {currentTopContent.rightSection.bottomText}
              </p>
            </div>
          </div>
        </div>

        {/* EXISTING SLIDE CONTENT */}
        {renderSlideContent()}

        {/* INDICATOR */}
        <div className="md:flex justify-center hidden  gap-2 mt-6">
          {slides.map((_, index) => {
            // decide the active color
            const activeColor =
              index === 0
                ? "bg-blue-500"
                : index === 1
                ? "bg-yellow-400"
                : index === 2
                ? "bg-black"
                : "bg-gray-300"; // fallback if more slides

            return (
              <span
                key={index}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? `w-8 h-3 rounded-md ${activeColor}`
                    : "w-3 h-3 rounded-full bg-gray-300"
                }`}
              ></span>
            );
          })}
        </div>

        {/* NAV ARROWS */}
        <div className="flex items-center justify-center   mt-4  absolute bottom-6 md:bottom-35 left-1/2 -translate-x-1/2    gap-4">
          <button
            onClick={prevSlide}
            className="bg-black/80 p-2 rounded-full  shadow-md text-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-black/80 p-2 rounded-full  shadow-md text-white"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
