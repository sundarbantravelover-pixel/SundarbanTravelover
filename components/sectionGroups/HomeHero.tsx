"use client";

import Image from "next/image";
import { anton, imprima } from "@/lib/fonts";
import TripForm from "../TripForm";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-scroll";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden mt-20 sm:mt-0">
      
      {/* Background */}
      <Image
        src="/boat.jpeg"
        alt="Boat"
        fill
        priority
        className="object-cover -z-10 brightness-90 saturate-50 blur-[1px]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 -z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-10 py-10">
        
        {/* LEFT HERO */}
        <div className="max-w-2xl text-center md:text-left">
          
          <h1
            className={`${anton.className} text-5xl md:text-7xl lg:text-8xl text-[#17EB04] [text-shadow:0_3px_12px_rgba(0,0,0,0.8)]`}
          >
            The Sundarbans
          </h1>

          <p
            className={`mt-4 text-white text-sm sm:text-base md:text-xl leading-relaxed ${imprima.className}`}
          >
            Step into a living, breathing delta where land and water blend,
            and every turn reveals the raw beauty of nature.
          </p>

          <div className={`mt-6 flex flex-col sm:flex-row gap-4 ${imprima.className}`}>
            
            {/* Explore Packages */}
            <Link
              to="packages"
              smooth={true}
              duration={500}
              offset={-80}
              className="px-8 sm:px-10 py-3 border border-white text-base sm:text-2xl text-white rounded-md hover:bg-white hover:text-black transition cursor-pointer inline-block text-center"
            >
              Explore Packages
            </Link>

            {/* Call Us Today */}
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className="px-8 sm:px-10 py-3 bg-[#17EB04] text-black text-base sm:text-2xl rounded-md hover:bg-[#2D6528] hover:text-white transition flex items-center justify-center gap-3 cursor-pointer"
            >
              <FaPhoneAlt className="text-sm sm:text-lg" />
              Call us today
            </Link>

          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-auto">
          <TripForm />
        </div>

      </div>
    </section>
  );
}