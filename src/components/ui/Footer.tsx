"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FooterLinks, socialMedia, QRcode } from "../../types/index";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {/* 1. Logo + Text */}
        <div className="flex flex-col items-start">
          <Image
            src="/icons/ManillaTechnologies1.png"
            alt="Manilla Logo"
            width={140}
            height={50}
            className="mb-4 object-contain"
          />
          <p className="text-gray-700 max-w-xs">
            Manilla Pay is redefining payments for Nigeria. Seamless, fast, and
            secure transactions at your fingertips.
          </p>
        </div>

        {/* 2 & 3. Footer Links */}
        {FooterLinks.map(({ title, links }) => (
          <div key={title} className="flex flex-col">
            <h3 className="mb-6 font-semibold text-lg">{title}</h3>
            <ul className="space-y-3">
              {links.map(({ name, link }) => (
                <li key={name}>
                  <Link
                    href={link}
                    className="text-gray-700 hover:text-black transition"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* 4 & 5. Follow Us + QR Code Section */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-6 col-span-1 sm:col-span-2 md:col-span-2">
          {/* Follow Us */}
          <div className="flex flex-col flex-1">
            <h3 className="mb-6 font-semibold text-lg">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              {socialMedia.map(({ src, alt }, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full "
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </a>
              ))}
            </div>

            {/* Download App Buttons */}
            <div className="flex flex-col items-start">
              <h3 className="text-gray-700 mb-3">Download Manilla App</h3>
              <div className="flex -space-x-3">
                {/* Google Play */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.manillapay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/googlestore.png"
                    alt="Get it on Google Play"
                    width={180}
                    height={50}
                    className="object-contain"
                  />
                </a>

                {/* App Store */}
                <a
                  href="https://apps.apple.com/app/manillapay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/appstore.png"
                    alt="Download on the App Store"
                    width={180}
                    height={50}
                    className="object-contain"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="flex flex-col items-center sm:items-start flex-1 mt-6 sm:mt-0">
            <h3 className="mb-6 font-semibold text-lg">Download Manilla App</h3>
            {QRcode.map(({ src, alt }, idx) => (
              <div key={idx} className="mt-2">
                <Image src={src} alt={alt} width={120} height={120} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-300 mt-8 pt-6">
        <p className="text-center text-gray-600 text-sm">
          © {new Date().getFullYear()}, All Rights Reserved by Manilla
        </p>
      </div>
    </footer>
  );
};

export default Footer;
