"use client";

import { Package } from "@/types/Package";
import Image from "next/image";

export default function PackageCard({
  image,
  title,
  description,
  price,
}: Package) {
  return (
    <div className="w-full max-w-sm  overflow-hidden border border-gray-200 shadow-md bg-white">
      
      {/* IMAGE */}
      <div className="relative w-full h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col gap-3">
        
        {/* TITLE */}
        <h2 className="text-xl font-semibold text-gray-800">
          {title}
        </h2>

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* PRICE */}
        <div className="flex justify-end mt-4">
          <span className="text-xl font-medium text-[#2D6528]">
            {price}
          </span>
        </div>

      </div>
    </div>
  );
}