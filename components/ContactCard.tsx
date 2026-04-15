"use client";

import { IconType } from "react-icons";

type ContactCardProps = {
  icon: IconType;
  title: string;
  details: string[];
};

export default function ContactCard({
  icon: Icon,
  title,
  details,
}: ContactCardProps) {
  return (
    <div className="bg-[#8FA08F] text-center rounded-md shadow-md px-8 py-10 w-full h-full flex flex-col justify-center min-h-[200px]">
      
      {/* Icon */}
      <Icon className="mx-auto text-4xl text-[#2D6528]" />

      {/* Title */}
      <h3 className="mt-4 text-2xl font-semibold text-[#2D6528]">
        {title}
      </h3>

      {/* Details */}
      <div className="mt-3 space-y-1">
        {details.map((detail, i) => (
          <p key={i} className="text-sm text-gray-800">
            {detail}
          </p>
        ))}
      </div>
    </div>
  );
}