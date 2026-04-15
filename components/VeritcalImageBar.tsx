"use client";

import Image from "next/image";
import { anton } from "@/lib/fonts";

type VerticalImageBarProps = {
  image: string;
  text: string;
};

export default function VerticalImageBar({
  image,
  text,
}: VerticalImageBarProps) {
  return (
   <div className="relative w-full h-40 md:h-45  overflow-hidden group shadow-md">
      
      {/* Background Image */}
      <Image
        src={image}
        alt={text}
        fill
        className="object-cover blur-[1px] saturate-50 scale-110 transition duration-300 group-hover:scale-115"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Text */}
      <div className="absolute inset-0 px-5 flex items-center ">
        <h2
          className={`${anton.className} text-[#17EB04] text-5xl md:text-7xl tracking-wide text-center px-4 [text-shadow:0_3px_12px_rgba(0,0,0,0.8)]`}
        >
          {text}
        </h2>
      </div>
    </div>
  );
}