"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

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
        "With our smart, intuitive app, you can pay for electricity, water, internet, airtime, cable subscriptions, and more - all using your crypto wallet or debit card.",
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
          icon: "/icons/iconablackproduct.png",
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
          "As you use Manilla Pay, you earn MNLA tokens. Stake them, save them, or spend them across our ecosystem.",
        features: [
          { icon: "/icons/iconproduct.png", text: "Manilla Pay" },
          { icon: "/icons/iconproduct.png", text: "Manilla Crypto Debit Card" },
          { icon: "/icons/iconproduct.png", text: "Manilla Token (MNLA)" },
          { icon: "/icons/iconproduct.png", text: "Another Feature" },
        ],
      },
      outsideParagraph: "",
      outsideText: " Stake / Learn more About MNLA ",
      clickToJoin: {
        icon: "/icons/iconablack",

        text: "Click Here to Learn",
      },
      button: {
        text: "MNLA Token",
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = slides[currentIndex];
  const currentTopContent = slideTopContent[currentIndex];

  // RENDER LOGIC FOR DIFFERENT LAYOUT TYPES
  const renderSlideContent = () => {
    switch (currentSlide.layoutType) {
      case 1:
        return (
          <div className="relative">
            {/* Background */}
            <div
              className="relative bg-cover bg-center rounded-xl overflow-hidden"
              style={{ backgroundImage: `url(${currentSlide.bgImage})` }}
            >
              <div className="flex flex-col md:flex-row gap-8 p-6 md:p-12">
                {/* Left Image */}
                <Image
                  src={currentSlide.leftImage || "/fallback-image.png"}
                  alt="Left Graphic"
                  width={400}
                  height={400}
                  className="object-contain"
                />

                {/* Right Side: Black Card + Download */}
                <div className="flex flex-col flex-1 gap-6">
                  {/* Black Card */}
                  <div className="bg-black bg-opacity-80 text-white p-6 rounded-2xl flex-1 flex flex-col justify-between">
                    {currentSlide.blackCard && (
                      <h1 className="text-3xl font-bold mb-4">
                        {currentSlide.blackCard.title}
                      </h1>
                    )}

                    {currentSlide.blackCard && (
                      <>
                        <p className="mb-4 text-gray-400">
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
                              <span className="te">{f.text}</span>
                            </div>
                          ))}
                        </div>
                      </>
                    )}

                    <p
                      className="text-lg font-medium"
                      style={{
                        color: "var(--Secondary, rgba(250, 202, 49, 1))",
                      }}
                    >
                      {currentSlide.blackCard.extraParagraph}
                    </p>

                    {/* Hardcoded Bottom Section */}
                    <div className="mt-6 bg-black/20 border border-black/20 p-3 rounded-full grid grid-cols-2 gap-3 sm:flex sm:items-center sm:gap-6">
                      <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-full">
                        <Image
                          src="/icons/usdc.png"
                          alt="Feature 1"
                          width={30}
                          height={20}
                        />
                        <span>USDC</span>
                      </div>
                      <div className="flex items-center gap-2 bg-gray-800  px-3 py-2 rounded-full">
                        <Image
                          src="/icons/usdt.png"
                          alt="Feature 2"
                          width={30}
                          height={20}
                        />
                        <span>USDT</span>
                      </div>
                      <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-full">
                        <Image
                          src="/icons/btc.png"
                          alt="Feature 3"
                          width={30}
                          height={20}
                        />
                        <span>BTC</span>
                      </div>
                      <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-full">
                        <Image
                          src="/icons/Ethereum.png"
                          alt="Feature 4"
                          width={30}
                          height={20}
                        />
                        <span>ETH</span>
                      </div>
                    </div>
                  </div>

                  {/* Download Buttons (now tied to the card column) */}
                  <div className="p-6">
                    <h3 className="text-gray-200 mb-0">
                      {currentSlide.downloadSection.title}
                    </h3>
                    <div className="flex gap-4">
                      {currentSlide.downloadSection.buttons.map((btn, i) => (
                        <a
                          key={i}
                          href={btn.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={btn.img}
                            alt={btn.alt}
                            width={180}
                            height={50}
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Image */}
            <Image
              src={currentSlide.bottomImage}
              alt="Bottom Graphic"
              width={1200}
              height={200}
              className="mt-[-11px] sm:w-full mx-auto relative z-10 lg:w-full lg:-translate-y-8"
            />
          </div>
        );

      case 2:
        return (
          <div
            className="relative bg-cover bg-amber-400 bg-center rounded-xl overflow-hidden"
            style={{ backgroundImage: `url(${currentSlide.bgImage})` }}
          >
            <div className="flex flex-col md:flex-row p-6 gap-6">
              {/* Left */}
              <div className="flex-1 space-y-4">
                <span className="block w-full text-center bg-black/60 text-white px-3 py-3 rounded-l-full rounded-r-full">
                  {currentSlide.leftTag.text}
                </span>
                <div className="bg-black/40 bg-opacity-80 text-white p-6 rounded-lg">
                  <h1 className="text-2xl font-bold mb-4">
                    {currentSlide.leftTag.transparentCard.title}
                  </h1>
                  <p className="mb-4">
                    {currentSlide.leftTag.transparentCard.paragraph}
                  </p>
                  {currentSlide.leftTag.transparentCard.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 mb-2">
                      <Image
                        src={f.icon || "/iconproduct.png"}
                        alt={f.text}
                        width={30}
                        height={24}
                      />
                      <span>{f.text}</span>
                    </div>
                  ))}
                </div>
                <p>{currentSlide.leftTag.outsideText}</p>
                <div className="flex items-center gap-2 cursor-pointer">
                  <Image
                    src={
                      currentSlide.leftTag.clickToJoin.icon || "/iconblack.png"
                    }
                    alt=""
                    width={28}
                    height={24}
                  />
                  <span>{currentSlide.leftTag.clickToJoin.text}</span>
                  <button className="bg-black text-white px-4 py-2 rounded-full">
                    {currentSlide.leftTag.button.text}
                  </button>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex-1 flex justify-center items-center mt-2">
                <Image
                  src={currentSlide.rightImage || "/falling-image.png"}
                  alt="Right Graphic"
                  width={600}
                  height={400}
                  className="w-[700px] sm:w-[700px] translate-x-[-40px] sm:translate-x-0 translate-y-6"
                />
              </div>
            </div>
            <Image
              src={currentSlide.bottomImage}
              alt="Bottom Graphic"
              width={1200}
              height={200}
              className="mt-[-10px] mx-auto relative z-10 lg:w-full"
            />
          </div>
        );

      case 3:
        return (
          <div
            className="relative bg-cover bg-center rounded-xl overflow-hidden"
            style={{ backgroundImage: `url(${currentSlide.bgImage})` }}
          >
            <div className="flex flex-col md:flex-row p-6 gap-6">
              {/* Left Image */}
              <Image
                src={currentSlide.leftImage || "/fallback-image.png"}
                alt="Left Graphic"
                width={400}
                height={400}
              />

              {/* Blue Card */}
              <div className="flex-1 space-y-4">
                <div className="bg-[#281AC8] text-white p-6 rounded-lg">
                  <h1 className="text-2xl font-bold mb-4">
                    {currentSlide.blueCard.title}
                  </h1>
                  <p className="mb-4">{currentSlide.blueCard.paragraph}</p>
                  {currentSlide.blueCard.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 mb-2">
                      <Image
                        src={f.icon || "/iconblack.png"}
                        alt={f.text}
                        width={24}
                        height={24}
                      />
                      <span>{f.text}</span>
                    </div>
                  ))}
                </div>

                {/* Join Section */}
                <p>{currentSlide.outsideText}</p>
                <div className="flex items-center gap-2 cursor-pointer">
                  <Image
                    src={currentSlide.clickToJoin.icon || "/iconblack.png"}
                    alt=""
                    width={28}
                    height={24}
                  />
                  <span>{currentSlide.clickToJoin.text}</span>
                  <button className="bg-black text-white px-4 py-2 rounded-full">
                    {currentSlide.button.text}
                  </button>
                </div>
              </div>
            </div>
            <p className="p-6">{currentSlide.outsideParagraph}</p>
            <Image
              src={currentSlide.bottomImage}
              alt="Bottom Graphic"
              width={1200}
              height={200}
              className="mt-[-50px] mx-auto relative z-10 lg:w-full"
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="relative bg-white text-gray-900 pt-8 pb-16">
      <div className="max-w-[95%] lg:max-w-[1400px] mx-auto px-6">
        {/* TOP SECTION */}
        <div className="mb-8">
          {/* Header with Learn Button and Dropdown Icon */}
          <div className="relative mb-8 flex items-start justify-between">
            {/* Left button */}
            <button className="bg-gray-100 text-black px-6 py-2 rounded-full transition-colors border border-black/20 mb-5 block mx-auto lg:mx-0 mt-9">
              Learn About Our Products
            </button>

            {/* Centered image */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-23">
              <Image
                src="/images/product.png"
                alt="Product"
                width={250}
                height={100}
                className="text-gray-600"
              />
            </div>

            {/* Spacer (keeps layout balanced) */}
            <div></div>
          </div>

          {/* Two Text Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Left Section */}
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-gray-900">
                {currentTopContent.leftSection.title}
              </h1>
              <p className="text-gray-700 text-lg">
                {currentTopContent.leftSection.paragraph1}
              </p>
              <p className="text-gray-900 font-semibold text-lg">
                {currentTopContent.leftSection.paragraph2}
              </p>
            </div>

            {/* Right Section with Background */}
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 bg-[url('/images/Rectangle2.png')] bg-cover bg-center bg-no-repeat p-6 rounded-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                {currentTopContent.rightSection.title}
              </h2>

              {/* Horizontal Feature List */}
              <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
                {currentTopContent.rightSection.features.map(
                  (feature, index) => (
                    <div
                      key={index}
                      className={`flex flex-row items-center gap-2 px-4 py-2 rounded-full ${
                        feature.isSpecial
                          ? "text-black scale-140 font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      <Image
                        src={feature.icon}
                        alt={feature.text}
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                      <span className="text-sm font-medium">
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
                  width={1200} // adjust or remove if you prefer responsive
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
        <div className="flex justify-center gap-2 mt-6">
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
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={prevSlide}
            className="bg-white/80 p-2 rounded-full hover:bg-white shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/80 p-2 rounded-full hover:bg-white shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
