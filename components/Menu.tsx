"use client";

import { MenuDay } from "@/types/Menuday";
import Image from "next/image";
import { imprima } from "@/lib/fonts";

type MenuProps = {
  data: MenuDay[];
};

export default function Menu({ data }: MenuProps) {
  const bgColors = ["bg-[#2f6b2f]", "bg-[#3f7a3f]"];

  return (
    <div className="w-full flex flex-col gap-0">
      {data.map((item, index) => (
        <div
          key={index}
          className={`${bgColors[index % 2]} text-white flex flex-col md:flex-row items-center gap-6 p-6 py-10 `}
        >
          {/* IMAGE */}
          <div className="w-full md:w-55 shrink-0">
            <div className="border-2 p-0">
              <Image
                src={item.image}
                alt={item.day}
                width={220}
                height={150}
                className="object-cover w-full h-35"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold uppercase tracking-wider">
              {item.day}
            </h2>

            <p
              className={`text-sm md:text-xl text-white/90 mt-2 leading-relaxed ${imprima.className}`}
            >
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}