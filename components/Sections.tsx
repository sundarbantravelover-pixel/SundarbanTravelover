"use client";

import { Element } from "react-scroll";
import HomeHero from "./sectionGroups/HomeHero";

import GallerySection from "./sectionGroups/GallerySection";
import PackagesPage from "./sectionGroups/PackagesSection";
import MenuSection from "./sectionGroups/MenuSection";
import AboutUsSection from "./sectionGroups/AboutUsSection";

export default function Sections() {
  return (
    <div className="pt-24 flex flex-col gap-24">

      {/* HERO (no gradient) */}
      <Element name="home">
        <section className="h-screen flex items-center justify-center">
          <HomeHero />
        </section>
      </Element>

      {/* REST WITH GRADIENT */}
      <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 flex flex-col gap-24">

        <Element name="packages">
          <section className="flex justify-center">
            <PackagesPage />
          </section>
        </Element>

        <Element name="menu">
          <section className="flex justify-center">
            <MenuSection />
          </section>
        </Element>

        <Element name="gallery">
          <section className="h-screen flex items-center justify-center">
            <GallerySection />
          </section>
        </Element>

        <Element name="about">
          <section className=" flex items-center justify-center">
            <AboutUsSection />
          </section>
        </Element>


      </div>

    </div>
  );
}