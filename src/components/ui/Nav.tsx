// components/Nav.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { navlinks } from "../../types";
import Button from "../ui/Button";
import ManillaTechologies1 from "../../../public/icons/ManillaTechnologies1.png";

const Nav: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string | null>("home");
  const [underlineStyle, setUnderlineStyle] = useState<{
    width: number;
    left: number;
  }>({ width: 0, left: 0 });

  // Ref to the container div (the relative parent of the underline)
  const containerRef = useRef<HTMLDivElement>(null);

  const handleLinkClick = (
    href: string,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    const linkEl = e.currentTarget;

    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const linkRect = linkEl.getBoundingClientRect();

      setActiveLink(href);
      setUnderlineStyle({
        width: linkRect.width,
        left: linkRect.left - containerRect.left,
      });
    }
  };

  // On first render and when activeLink changes, position the underline correctly
  useEffect(() => {
    if (containerRef.current && activeLink) {
      const activeAnchor =
        containerRef.current.querySelector<HTMLAnchorElement>(
          `a[href="${activeLink}"]`
        );
      if (activeAnchor) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const linkRect = activeAnchor.getBoundingClientRect();

        setUnderlineStyle({
          width: linkRect.width,
          left: linkRect.left - containerRect.left,
        });
      }
    }
  }, [activeLink]);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="bg-[#000C43]">
        <div className="max-w-7xl mx-auto py-4 flex justify-between items-center">
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
            <div
              className="bg-[#001EA9] rounded-full px-8 py-3 mx-8 relative"
              ref={containerRef}
            >
              {/* Dynamic underline */}
              {activeLink && (
                <img
                  src="/icons/Rectangle2.png"
                  alt="underline"
                  className="absolute bottom-0 h-[4px] transition-all duration-300"
                  style={{
                    width: `${underlineStyle.width}px`,
                    left: `${underlineStyle.left}px`,
                  }}
                />
              )}

              <ul className="flex justify-center items-center gap-8 relative">
                {navlinks.map((link) => (
                  <li key={link.href} className="relative">
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(link.href, e)}
                      className={`font-medium leading-normal text-lg text-white hover:text-gray-200 transition-colors duration-200 flex items-center gap-2 px-3 py-2 relative ${
                        activeLink === link.href ? "text-white" : ""
                      }`}
                    >
                      {link.label}
                      <img
                        src="/icons/chevron-up.png"
                        alt="dropdown icon"
                        className="w-4 h-4"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-6">
            <div className="text-white hover:text-brand hover:bg-white/10">
              <a href="#">Get Started</a>
            </div>
            <Button
              className="rounded-full bg-blue-600 text-white hover:bg-blue-700"
              href="#"
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
        </div>
      </nav>
    </header>
  );
};

export default Nav;
