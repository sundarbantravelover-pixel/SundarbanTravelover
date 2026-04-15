"use client";

import { useState } from "react";
import { sansitaSwashed, instrumentSans } from "@/lib/fonts";
import { FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { packages, acPackages } from "../lib/pacakges";
import { createWhatsAppLink } from "../lib/waLink"; // 👈 your function

export default function TripForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [guests, setGuests] = useState("");

  const handleSubmit = () => {
    if (!name || !phone || !selectedPackage) {
      alert("Please fill required fields");
      return;
    }

    const message = `Hi, my name is ${name}.
      I am interested in the ${selectedPackage} package.
      Guests: ${guests || "Not specified"}
      Email: ${email || "Not provided"}
      Phone: ${phone}`;

    const whatsappURL = createWhatsAppLink("+91 8927791880", message);

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="w-full flex items-center justify-center px-0 py-10">
      <div className="w-full max-w-lg bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-200">
        {/* Title */}
        <h1
          className={`${sansitaSwashed.className} text-3xl md:text-4xl text-[#3C7C3A] text-center`}
        >
          Plan Your Trip Today!
        </h1>

        {/* Form */}
        <div
          className={`mt-6 flex flex-col text-gray-500 gap-3 ${instrumentSans.className}`}
        >
          {/* Name */}
          <div className="flex items-center gap-3 border border-gray-300 px-4 py-2.5 focus-within:border-[#3C7C3A]">
            <FaUser className="text-gray-400" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full outline-none bg-transparent text-gray-600"
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 border border-gray-300 px-4 py-2.5 focus-within:border-[#3C7C3A]">
            <FaEnvelope className="text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none bg-transparent text-gray-600"
            />
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 border border-gray-300 px-4 py-2.5 focus-within:border-[#3C7C3A]">
            <FaPhoneAlt className="text-gray-400" />
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full outline-none bg-transparent text-gray-600"
            />
          </div>

          {/* Package Section */}
          <h2 className="text-xl font-semibold mt-3 text-gray-600">
            Choose your Package
          </h2>

          {/* Package Dropdown */}
          <select
            value={selectedPackage}
            onChange={(e) => setSelectedPackage(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2.5 outline-none focus:border-[#3C7C3A] text-gray-600"
          >
            <option value="">Select Package</option>

            <optgroup label="Non-AC Packages">
              {packages.map((pkg, i) => (
                <option key={i} value={pkg.title}>
                  {pkg.title} - {pkg.price}
                </option>
              ))}
            </optgroup>

            <optgroup label="AC Packages">
              {acPackages.map((pkg, i) => (
                <option key={i} value={pkg.title}>
                  {pkg.title} - {pkg.price}
                </option>
              ))}
            </optgroup>
          </select>

          {/* Guests */}
          <input
            type="number"
            placeholder="Number of guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2.5 outline-none focus:border-[#3C7C3A] text-gray-600"
          />

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="mt-4 w-full py-3 bg-[#3C7C3A] text-white text-lg rounded-lg hover:bg-[#2D6528] transition"
          >
            Get Package Details
          </button>
        </div>
      </div>
    </section>
  );
}
