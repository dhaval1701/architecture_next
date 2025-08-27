import React from "react";
import Image from "next/image";

// Types
interface FounderData {
  id: string;
  name: string;
  quote: string;
  description: string;
  imageSrc: string;
  instagramUrl: string;
}

// Founder data
const foundersData: FounderData[] = [
  {
    id: "anurag",
    name: "Ar. Anurag Bhuva",
    quote: "Less, yet lasting.",
    description:
      "Architecture is like crafting a canvas of experiences. I love blending bold ideas with subtle details, creating spaces that surprise, delight, and redefine how people live, work, and connect with their surroundings.",
    imageSrc: "/anurag_bhuva.svg",
    instagramUrl: "#",
  },
  {
    id: "het",
    name: "Ar. Het Patel",
    quote: "Architecture with clarity.",
    description:
      "I see design as an adventure where fun meets function. For me, architecture is not about rigid rules it's about shaping spaces with imagination, joy, and a spark of the unexpected.",
    imageSrc: "/het_patel.svg",
    instagramUrl: "#",
  },
];

const AboutUs: React.FC = () => {
  return (
    <div className="">
      {/* Header Section */}
      <div className="mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-extralight text-gray-400 mb-2 tracking-wider">
          About
        </h1>
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800 tracking-tight">
          Us
        </h2>
      </div>

      {/* Main Content Section */}
      <div className="grid breakout lg:grid-cols-2 gap-8 md:gap-12 items-start mb-16 md:mb-20">
        {/* Left side - Image */}
        <div className="order-2 lg:order-1">
          <div className="relative h-72 sm:h-96 md:h-[500px] lg:h-[750px] w-full overflow-hidden">
            <Image
              src="/assets/about_us.svg"
              alt="23rd Design Studio Interior"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="order-1 lg:order-2 space-y-6 lg:ps-10 flex flex-col items-start">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <p className="text-6xl md:text-7xl lg:text-8xl font-extralight text-gray-400 tracking-wider">
              About
            </p>
            <p className="text-6xl md:text-7xl lg:text-8xl font-semibold text-gray-800 tracking-tight">
              23
              <sup className="text-4xl md:text-5xl lg:text-7xl align-super">
                rd
              </sup>{" "}
              Studio
            </p>
          </div>

          <div className="space-y-4 text-base md:text-[16px] text-gray-600 leading-relaxed md:leading-loose">
            <p>
              At 23rd Design Studio, we are a contemporary architectural design
              practice founded by two principal architects with a shared vision
              to create spaces that are functional, minimal, and timeless.
              Rooted in simplicity and clarity, our work blends innovation with
              sensitivity to context, delivering architecture that inspires and
              adapts. We bring a modern yet meaningful approach to every
              project.
            </p>

            <p>
              Our design portfolio spans{" "}
              <strong>
                residential bungalows, commercial buildings, office interiors,
                retail spaces, and cultural projects
              </strong>
              , each crafted with precision and care. We believe architecture is
              more than building – it is about shaping experiences. With a focus
              on clean aesthetics, sustainable practices, and context- driven
              design, we ensure every project tells a unique story while
              enhancing its surroundings.
            </p>

            <p>
              At 23rd Design Studio, collaboration and research guide our
              process, allowing us to translate ideas into spaces that resonate
              with people and place. Whether designing a contemporary home, a
              dynamic workspace, or a landmark commercial development,{" "}
              <strong>we strive to merge creativity with functionality</strong>.
              Our mission is to deliver designs that elevate lifestyles,
              celebrate minimalism, and contribute to the evolving architectural
              landscape of Gujarat.
            </p>
          </div>
        </div>
      </div>

      {/* Founder's Vision Section */}
      <div className="mt-16 md:mt-24">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extralight text-gray-400 mb-2 tracking-wider">
            Founder&apos;s
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
            Vision
          </h3>
        </div>

        {/* Founders Grid - Both in One Row */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {foundersData.map((founder) => (
            <div
              key={founder.id}
              className="flex flex-col md:flex-row items-start gap-6 h-full"
            >
              {/* Founder Image */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 md:w-60 md:h-60 lg:w-82 lg:h-82 overflow-hidden">
                  <Image
                    src={founder.imageSrc}
                    alt={founder.name}
                    width={345}
                    height={345}
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                </div>
              </div>

              {/* Founder Content */}
              <div className="space-y-4 flex-1">
                <p className="text-lg md:text-xl font-semibold text-gray-800 italic">
                  &quot;{founder.quote}&quot;
                </p>

                <p className="text-gray-600 font-extralight leading-relaxed md:leading-loose">
                  {founder.description}
                </p>

                <div className="flex items-center space-x-2 pt-2">
                  <h4 className="text-xl font-bold text-gray-800">
                    {founder.name}
                  </h4>
                  <a
                    href={founder.instagramUrl}
                    className="text-pink-500 hover:text-pink-600 transition-colors"
                    aria-label={`${founder.name} Instagram profile`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
