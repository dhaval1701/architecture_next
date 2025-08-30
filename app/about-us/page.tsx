"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Instagram } from "lucide-react";

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
  const pathname = usePathname();

  console.log(pathname, "pathname");

  const isProjectPage = pathname.startsWith("/project/");

  return (
    <div className="">
      {/* Header Section */}
      <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 3xl:mb-32 4xl:mb-40">
        <p className="text-[#BDBDBD] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px] 3xl:text-7xl 4xl:text-9xl font-extralight mb-1 sm:mb-2 lg:mb-3 xl:mb-4 3xl:mb-6 4xl:mb-8 leading-[16px]">
          About
        </p>
        <p className="text-[#333333] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[64px] 3xl:text-8xl 4xl:text-[10rem] font-bold leading-tight">
          Us
        </p>
      </div>

      <div className="grid breakout lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 3xl:gap-32 4xl:gap-40 items-stretch mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 3xl:mb-36 4xl:mb-44">
        {/* Left side - Image */}
        <div className="order-2 lg:order-1 h-full">
          <div className="relative h-full min-h-[500px] lg:min-h-[600px] 2xl:min-h-[750px] 3xl:min-h-[900px] 4xl:min-h-[1200px] w-full overflow-hidden rounded-lg">
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
        <div className="p-5 md:pd-0 order-1 lg:order-2 flex flex-col h-full justify-start lg:ps-6 xl:ps-10 3xl:ps-16 4xl:ps-20 2xl:pr-16 3xl:pr-24 4xl:pr-32">
          {/* Heading */}
          <div className="flex flex-wrap items-baseline gap-3 sm:gap-4 lg:gap-6">
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[64px] 3xl:text-[8rem] 4xl:text-[10rem] font-extralight text-gray-400 tracking-wider">
              About
            </p>
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[64px] 3xl:text-[8rem] 4xl:text-[10rem]  text-blacktracking-tight">
              23
              <sup className="align-super text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl  text-black">
                rd
              </sup>{" "}
              Studio
            </p>
          </div>

          {/* Paragraphs */}
          <div className="mt-6 sm:mt-8 lg:mt-10 xl:mt-12 3xl:mt-16 4xl:mt-20 space-y-4 sm:space-y-6 lg:space-y-8 xl:space-y-10 3xl:space-y-12 4xl:space-y-14 text-sm sm:text-base md:text-lg lg:text-[16px] 3xl:text-4xl 4xl:text-5xl text-black leading-relaxed md:leading-loose">
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
                retail spaces, and cultural projects,
              </strong>
              each crafted with precision and care. We believe architecture is
              more than building—it is about shaping experiences. With a focus
              on clean aesthetics, sustainable practices, and context-driven
              design, we ensure every project tells a unique story while
              enhancing its surroundings. Our design portfolio spans{" "}
            </p>
            <p>
              At 23rd Design Studio, collaboration and research guide our
              process, allowing us to translate ideas into spaces that resonate
              with people and place. Whether designing a contemporary home, a
              dynamic workplace, or a landmark commercial development,{" "}
              <strong>we strive to merge creativity with functionality.</strong>
              Our mission is to deliver designs that elevate lifestyles,
              celebrate minimalism, and contribute to the evolving architectural
              landscape of Gujarat. .
            </p>
          </div>
        </div>
      </div>

      {/* Founder's Vision Section */}
      <div className="my-12 sm:my-16 md:my-20 lg:my-24 xl:my-28 3xl:my-36 4xl:my-44">
        {/* Section Heading */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 3xl:mb-36 4xl:mb-44">
          <p className="text-[#BDBDBD] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px] 3xl:text-7xl 4xl:text-9xl font-extralight mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 3xl:mb-8 leading-none">
            Founder&apos;s{" "}
            <span className="text-[#333333] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[64px] 3xl:text-8xl 4xl:text-[10rem] font-bold leading-tight">
              Vision
            </span>
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 3xl:gap-24 4xl:gap-32">
          {foundersData.map((founder) => (
            <div
              key={founder.id}
              className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 xl:gap-10 3xl:gap-12 4xl:gap-16 h-full"
            >
              {/* Founder Image */}
              <div className="flex-shrink-0">
                <div className="w-full max-w-[300px] h-48 sm:h-56 md:h-64 lg:w-48 lg:h-48 xl:w-60 xl:h-60 2xl:w-[345px] 2xl:h-[345px] 3xl:w-96 3xl:h-96 4xl:w-[32rem] 4xl:h-[32rem] overflow-hidden mx-auto lg:mx-0">
                  <Image
                    src={founder.imageSrc}
                    alt={founder.name}
                    width={512}
                    height={512}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Founder Content */}
              <div className="flex flex-col justify-start h-full space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-4 3xl:space-y-10 4xl:space-y-12 flex-1">
                {/* Quote */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[16px] 3xl:text-5xl 4xl:text-6xl font-semibold text-gray-800 italic">
                  &quot;{founder.quote}&quot;
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[16px] 3xl:text-4xl 4xl:text-5xl text-black font-extralight leading-relaxed md:leading-loose">
                  {founder.description}
                </p>

                {/* Name + Instagram */}
                <div className="flex items-center gap-3 lg:gap-4 xl:gap-6 3xl:gap-8 4xl:gap-10 pt-2 sm:pt-3 lg:pt-4">
                  <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[20px] 3xl:text-6xl 4xl:text-7xl font-bold text-gray-800">
                    {founder.name}
                  </h4>
                  {founder.instagramUrl && (
                    <a
                      href={founder.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:text-pink-600 transition-colors"
                      aria-label={`${founder.name} Instagram profile`}
                    >
                      <Instagram className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-6 3xl:w-12 3xl:h-12 4xl:w-16 4xl:h-16" />
                    </a>
                  )}
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
