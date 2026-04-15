import { inter } from "@/lib/fonts";
import VerticalImageBar from "../VeritcalImageBar";
import ContactCard from "../ContactCard";
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaYoutube } from "react-icons/fa";

const AboutUsSection = () => {
  return (
    <main className="w-full min-h-screen flex flex-col items-start gap-0 cursor-default pb-10 py-10 pt-0">

      {/* ===================== */}
      {/* Top Image Section */}
      {/* ===================== */}
      <VerticalImageBar
        image="/vib1.jpeg"
        text="About Us"
      />

      {/* ===================== */}
      {/* About Text Content */}
      {/* ===================== */}
      <div className="w-full px-6 md:px-16 lg:px-24 flex flex-col gap-8 mt-10">

        <p className={`${inter.className} text-base md:text-2xl leading-relaxed text-gray-700`}>
          We are dedicated to offering authentic and memorable experiences in the Sundarbans,
          one of the world’s most unique natural ecosystems. With carefully curated tours,
          experienced local guides, and comfortable stays, we ensure every journey is safe,
          immersive, and unforgettable.
        </p>

        <p className={`${inter.className} text-base md:text-2xl leading-relaxed text-gray-700`}>
          Our goal is to connect travelers with the true essence of the Sundarbans,
          its wildlife, culture, and serene beauty — while supporting sustainable tourism
          and local communities.
        </p>

      </div>

      {/* ===================== */}
      {/* Contact Cards Section */}
      {/* ===================== */}
      <div className="w-full px-6 md:px-16 lg:px-24 mt-12">

        <div className="flex flex-col md:flex-row gap-6 items-stretch">

          {/* Email Card */}
          <div className="flex-1">
            <ContactCard
              icon={FaEnvelope}
              title="Email"
              details={["mondalmousumi6054@gmail.com"]}
            />
          </div>

          {/* Phone Card */}
          <div className="flex-1">
            <ContactCard
              icon={FaPhoneAlt}
              title="Phone Number"
              details={["+91 8927791880", "+91 8001809667"]}
            />
          </div>

          {/* Facebook Card (Clickable) */}
          <div className="flex-1">
            <a
              href="https://www.facebook.com/share/1E3B51zRgG/"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <ContactCard
                icon={FaFacebook}
                title="Facebook"
                details={["Visit our Facebook page"]}
              />
            </a>
          </div>

          {/* YouTube Card (Clickable) */}
          <div className="flex-1">
            <a
              href="https://www.youtube.com/@SundarBanTravelOver5789"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <ContactCard
                icon={FaYoutube}
                title="YouTube"
                details={["Visit our YouTube channel"]}
              />
            </a>
          </div>

        </div>
      </div>

    </main>
  );
};

export default AboutUsSection;