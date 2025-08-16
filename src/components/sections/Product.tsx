"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type BlackCardSlide = {
  layoutType: 1; // literal, not number
  bgImage: string;
  bottomImage: string;
  leftImage: string;
  blackCard: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    features: { icon: string; text: string }[];
    extraParagraph: string;
  };
  downloadSection: {
    title: string;
    buttons: { img: string; link: string; alt: string }[];
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
      features: { icon: string; text: string }[];
    };
    outsideText: string;
    clickToJoin: { icon: string; text: string };
    button: { text: string };
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
    features: { icon: string; text: string }[];
  };
  outsideParagraph: string;
  outsideText: string;
  clickToJoin: { icon: string; text: string };
  button: { text: string };
};

type Slide = BlackCardSlide | LeftTagSlide | BlueCardSlide;

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
        paragraph2:
          "With our smart, intuitive app, you can pay for electricity, water, internet, airtime, cable subscriptions, and more - all using your crypto wallet or debit card.",
        features: [
          { icon: "/icons/iconpoint.png", text: "Manilla Pay" },
          { icon: "/icons/iconpoint.png", text: "Manilla Crypto Debit Card" },
          { icon: "/icons/iconpoint.png", text: "Manilla Token (MNLA)" },
        ],
        extraParagraph:
          "Designed for Nigerian realities, Manilla Pay eliminates queues, delays, and app-switching fatigue. Its secure, scalable, and built for daily life.",
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
              icon: "/icons/iconpoint.png",
              text: "Accepted across POS terminals, e-commerce platforms, and ATMs, enabling both local and international transactions.",
            },
            {
              icon: "/icons/iconpoint.png",
              text: "Features real-time conversion of USDT or ETH to Naira, ensuring seamless spending in local currency.",
            },
            {
              icon: "/icons/iconpoint.png",
              text: "Users can transact globally or domestically with ease, and withdraw cash from any compatible ATM worldwide.",
            },
          ],
        },
        outsideText: "Join the Waitlist – Be first to swipe in crypto.",
        clickToJoin: {
          icon: "/icons/iconblack.png",
          text: "Click Here to Join",
        },
        button: { text: "Join Waitlist" },
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
          { icon: "/icons/iconpoint.png", text: "Manilla Pay" },
          { icon: "/icons/iconpoint.png", text: "Manilla Crypto Debit Card" },
          {
            icon: "/icons/iconpoint.png",
            text: "Manilla Token (MNLA)",
          },
          { icon: "/icons/iconpoint.png", text: "Another Feature" },
        ],
      },
      outsideParagraph: "",
      outsideText: " Stake / Learn more About MNLA ",
      clickToJoin: {
        icon: "/icons/iconblack.png",
        text: "Click Here to Learn",
      },
      button: { text: "MNLA Token" },
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
                {/* Black Card */}
                <div className="bg-black bg-opacity-80 text-white p-6 rounded-lg flex-1">
                  {currentSlide.blackCard && (
                    <h1 className="text-2xl font-bold mb-4">
                      {currentSlide.blackCard.title}
                    </h1>
                  )}

                  {currentSlide.blackCard && (
                    <>
                      <p className="mb-4">
                        {currentSlide.blackCard.paragraph2}
                      </p>

                      <div className="flex items-center gap-4 mb-4 flex-wrap">
                        {currentSlide.blackCard.features.map((f, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Image
                              src={f.icon || "/fallback-icon.png"}
                              alt={f.text}
                              width={24}
                              height={24}
                            />
                            <span>{f.text}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  <p>{currentSlide.blackCard.extraParagraph}</p>
                </div>
              </div>
              {/* Download Buttons */}
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
                      <Image src={f.icon} alt={f.text} width={30} height={24} />
                      <span>{f.text}</span>
                    </div>
                  ))}
                </div>

                <p>{currentSlide.leftTag.outsideText}</p>

                <div className="flex items-center gap-2 cursor-pointer">
                  <Image
                    src={currentSlide.leftTag.clickToJoin.icon}
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
                      <Image src={f.icon} alt={f.text} width={24} height={24} />
                      <span>{f.text}</span>
                    </div>
                  ))}
                </div>

                {/* Join Section */}
                <p>{currentSlide.outsideText}</p>
                <div className="flex items-center gap-2 cursor-pointer">
                  <Image
                    src={currentSlide.clickToJoin.icon}
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
        {renderSlideContent()}

        {/* INDICATOR */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 h-3 rounded-md bg-blue-500"
                  : "w-3 h-3 rounded-full bg-gray-300"
              }`}
            ></span>
          ))}
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
