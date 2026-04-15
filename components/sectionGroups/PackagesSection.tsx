"use client";

import { acPackages, packages } from "@/lib/pacakges";
import VerticalImageBar from "../VeritcalImageBar";
import PackageCarousel from "../PackageCarousel";



export default function PackagesSection() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-start gap-6 py-10 pt-0 ">
      <VerticalImageBar
        image="/vib1.jpeg"
        text="Our Packages"
      />
      <PackageCarousel acItems={acPackages} nonAcItems={packages}/>
    </main>
  );
}