"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX, FiChevronUp } from "react-icons/fi";
import { instrumentSans } from "@/lib/fonts";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [hovered, setHovered] = useState(false);

  const navItems = [
    { name: "home", to: "home" },
    { name: "packages", to: "packages" },
    { name: "menu", to: "menu" },
    { name: "gallery", to: "gallery" },
    { name: "about", to: "about" }
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`fixed top-0 left-0 w-full z-50 h-24 bg-white shadow-md transition-transform duration-300 ${instrumentSans.className} ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-5 h-full flex items-center justify-between relative">

          {showNav && (
            <button
              onClick={() => setShowNav(false)}
              className={`hidden md:flex absolute left-0 top-24 bg-white/30 border border-gray-300 shadow-md px-3 py-1 items-center gap-2 text-[#2D6528] transition-all duration-200
                ${
                  hovered
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }
              `}
            >
              <FiChevronUp size={18} />
              Hide
            </button>
          )}

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Logo"
              width={75}
              height={75}
              priority
            />
            <div className="text-[#2D6528] text-3xl leading-tight">
              <h1 className="uppercase tracking-widest">SUNDARBAN</h1>
              <p className="uppercase tracking-widest">TRAVELOVER</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-xl">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-96}
                spy={true}
                activeClass="text-[#2D6528]"
                className="cursor-pointer text-black hover:text-[#2D6528] transition"
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white px-6 pb-4 border-t">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-96}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-black"
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>
        )}
      </nav>

      {/* SHOW BUTTON (when navbar hidden) */}
      {!showNav && (
        <button
          onClick={() => setShowNav(true)}
          className="fixed top-0 left-6 z-50 bg-white/30 border border-gray-300/50 shadow-md px-3 py-1 flex items-center gap-2 text-[#2D6528]"
        >
          <FiChevronUp size={18} />
          Show
        </button>
      )}
    </>
  );
}