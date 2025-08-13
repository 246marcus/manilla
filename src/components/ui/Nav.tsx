"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { navlinks } from "../../types";
import Button from "../ui/Button";
import { ManillaFinance } from "../../../public/icons";

const Nav: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string | null>("/");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && activeLink && !mobileMenuOpen) {
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
  }, [activeLink, mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-[#000C43]">
        <div className="max-w-7xl mx-auto py-4 flex justify-between items-center px-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={ManillaFinance.src}
              alt="Manilla Finance Logo"
              width={160}
              height={50}
              className="w-[160px] h-auto"
            />
          </div>

          {/* Desktop Nav */}
          <div className="flex-1 flex justify-center items-center max-lg:hidden">
            <div
              className="bg-[#001EA9] rounded-full px-8 py-3 mx-8 relative"
              ref={containerRef}
            >
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

              <ul className="flex justify-center items-center gap-8 relative whitespace-nowrap">
                {navlinks.map((link) => (
                  <li key={link.href} className="relative">
                    <div className="flex items-center">
                      <Link
                        href={link.href}
                        className={`font-medium text-lg text-white hover:text-gray-200 flex items-center gap-2 px-3 py-2 ${
                          activeLink === link.href ? "text-white" : ""
                        }`}
                        onClick={() => {
                          setActiveLink(link.href);
                          setMobileMenuOpen(false);
                          setOpenDropdown(null);
                        }}
                      >
                        {link.label}
                      </Link>

                      {link.children && (
                        <button
                          type="button"
                          className="ml-1 text-white focus:outline-none"
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenDropdown(
                              openDropdown === link.href ? null : link.href
                            );
                          }}
                        >
                          <img
                            src="/icons/chevron-up.png"
                            alt=""
                            className={`w-4 h-4 transition-transform duration-300 ${
                              openDropdown === link.href ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Dropdown */}
                    {link.children && openDropdown === link.href && (
                      <ul className="absolute left-0 mt-2 bg-white text-gray-800 rounded-md shadow-lg min-w-[180px] py-2 z-50">
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-6">
            <div className="text-white hover:text-brand hover:bg-white/10 cursor-pointer">
              <a href="#">Get Started</a>
            </div>
            <Button
              className="rounded-full bg-blue-600 text-white hover:bg-blue-700"
              href="#"
            >
              Download App
            </Button>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden">
            <button
              className="text-white p-2"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 18L18 6M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 12H21M3 6H21M3 18H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#001EA9] px-6 pb-6">
            <ul className="flex flex-col gap-4">
              {navlinks.map((link) => (
                <li key={link.href}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      className={`block text-white text-lg font-medium py-2 rounded hover:bg-blue-700 ${
                        activeLink === link.href ? "bg-blue-800" : ""
                      }`}
                      onClick={() => {
                        setActiveLink(link.href);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {link.label}
                    </Link>

                    {link.children && (
                      <button
                        type="button"
                        className="text-white focus:outline-none"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === link.href ? null : link.href
                          )
                        }
                      >
                        <img
                          src="/icons/chevron-up.png"
                          alt=""
                          className={`w-4 h-4 transition-transform duration-300 ${
                            openDropdown === link.href ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile sub-links */}
                  {link.children && openDropdown === link.href && (
                    <ul className="pl-4 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block text-gray-200 py-1 hover:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="pt-4 flex flex-col gap-3">
                <a
                  href="#"
                  className="bg-blue-600 rounded-full text-white text-center py-2 hover:bg-blue-700"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="bg-white text-blue-600 rounded-full text-center py-2 hover:bg-gray-200"
                >
                  Download App
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
