"use client";

import React, { useState } from "react";
import MediaGrid from "./MediaGrid";
import { MediaItemType } from "@/types/MediaGridTypes";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

type MediaCarouselProps = {
  slides: MediaItemType[][];
};

export default function MediaCarousel({ slides }: MediaCarouselProps) {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full mx-auto">
      
      {/* Desktop View */}
      <div className="hidden sm:block">
        <MediaGrid items={slides[index]} />

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-[#41813B] text-white py-5 px-1 rounded-r-md hover:bg-black/70 transition"
        >
          <HiChevronLeft size={26} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-[#41813B] text-white py-5 px-1 rounded-l-md hover:bg-black/70 transition"
        >
          <HiChevronRight size={26} />
        </button>
      </div>

      {/* Mobile Scroll View */}
      <div className="flex sm:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="min-w-full snap-center"
          >
            <MediaGrid items={slide} />
          </div>
        ))}
      </div>

    </div>
  );
}