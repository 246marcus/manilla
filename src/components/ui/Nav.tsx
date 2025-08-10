// components/Nav.tsx
"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { navlinks } from "../../types";
import Button from "../ui/Button";
import ManillaTechologies1 from "../../../public/icons/ManillaTechnologies1.png";
import Rectangle2 from "../../../public/icons/Rectangle2.png";

const Nav: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("home");

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
  };

  return (
    <header className=" absolute top-0 left-0 w-full z-50 ">
      <nav className="flex justify-between items-center px-8 py-4 bg-[#000C43] ">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={ManillaTechologies1.src}
            alt="Manilla Finance Logo"
            width={140}
            height={40}
            className="w-[129px] h-[29px] brightness-0 invert"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex-1 flex justify-center items-center max-lg:hidden">
          <div className="bg-[#001EA9] rounded-full px-8 py-3 mx-8">
            <ul className="flex justify-center items-center gap-8">
              {navlinks.map((link) => (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className="font-medium leading-normal text-sm text-white hover:text-gray-200 transition-colors duration-200 flex items-center gap-2 px-3 py-2"
                  >
                    {link.label}
                    <img src={"chevron.up.png"} alt="chevron"></img>
                  </a>

                  {activeLink === link.href && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white rounded-full"></div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Get Started Button */}
          <div className="text-white hover:text-brand hover:bg-white/10">
            <a href="#">Get Started</a>
          </div>

          {/* Download App Button */}
          <Button
            className="rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            label={""}
            href="https://play.google.com/store/apps/details?id=com.manilla.pay"
            variant="ghost"
          >
            Download App
          </Button>
        </div>
        <div className="lg:hidden">
          <button className="text-white p-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
