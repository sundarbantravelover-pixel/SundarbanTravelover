"use client";

import { useMemo, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import PackageCard from "./PackageCard";
import { Package } from "@/types/Package";



type Props = {
  acItems: Package[];
  nonAcItems: Package[];
};

export default function PackageCarousel({ acItems, nonAcItems }: Props) {
  const [isAC, setIsAC] = useState(false);
  const [index, setIndex] = useState(1);

  const data = useMemo(
    () => (isAC ? acItems : nonAcItems),
    [isAC, acItems, nonAcItems]
  );

  const len = data.length;

  const prev = () => setIndex((p) => (p - 1 + len) % len);
  const next = () => setIndex((p) => (p + 1) % len);

  const getLeft = (i: number) => (i - 1 + len) % len;
  const getRight = (i: number) => (i + 1) % len;

  return (
    <div className="w-full flex flex-col items-center gap-5">

      {/* ================= DESKTOP CAROUSEL ================= */}
      <div className="relative w-full max-w-6xl items-center justify-center hidden md:flex">

        <button
          onClick={prev}
          className="absolute left-2 z-10 bg-white shadow-md p-2 rounded-full"
        >
          <FiChevronLeft size={22} />
        </button>

        <div className="flex items-center justify-center gap-6 overflow-hidden py-6">
          {data.map((item, i) => {
            const isCenter = i === index;
            const isLeft = i === getLeft(index);
            const isRight = i === getRight(index);

            if (!(isCenter || isLeft || isRight)) return null;

            return (
              <div
                key={i}
                className={`transition-all duration-300 ${
                  isCenter ? "scale-100  z-10" : "scale-90 opacity-70"
                }`}
              >
                <PackageCard {...item} />
              </div>
            );
          })}
        </div>

        <button
          onClick={next}
          className="absolute right-2 z-10 bg-white shadow-md p-2 rounded-full"
        >
          <FiChevronRight size={22} />
        </button>
      </div>

      {/* ================= MOBILE SCROLL (1 CARD VIEW) ================= */}
      <div className="w-full md:hidden overflow-x-auto flex snap-x snap-mandatory scroll-smooth px-4 gap-4">
        {data.map((item, i) => (
          <div
            key={i}
            className="min-w-full snap-center flex justify-center"
          >
            <PackageCard {...item} />
          </div>
        ))}
      </div>

      {/* DOTS (optional shared UI) */}
      <div className="hidden sm:flex gap-2">
        {data.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition ${
              i === index ? "bg-green-600 w-4" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* TOGGLE */}
      <div className="flex gap-3 mt-2">
        <button
          onClick={() => {
            setIsAC(false);
          }}
          className={`px-5 py-2 border transition ${
            !isAC ? "bg-green-700 text-white" : "bg-white"
          }`}
        >
          Non AC
        </button>

        <button
          onClick={() => {
            setIsAC(true);
          }}
          className={`px-5 py-2 border transition ${
            isAC ? "bg-green-700 text-white" : "bg-white"
          }`}
        >
          AC
        </button>
      </div>
    </div>
  );
}