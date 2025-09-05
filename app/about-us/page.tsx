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
    instagramUrl: "https://www.instagram.com/anuraagbhuva/",
  },
  {
    id: "het",
    name: "Ar. Het Patel",
    quote: "Architecture with clarity.",
    description:
      "I see design as an adventure where fun meets function. For me, architecture is not about rigid rules it's about shaping spaces with imagination, joy, and a spark of the unexpected.",
    imageSrc: "/het_patel.svg",
    instagramUrl: "https://www.instagram.com/het01_/",
  },
];

const AboutUs: React.FC = () => {
  const pathname = usePathname();

  console.log(pathname, "pathname");

  const isProjectPage = pathname.startsWith("/project/");

  return (
    <div className="">
      {/* Header Section */}
      <div className="mt-2 md:mt-0 mb-4 md:mb-6 xl:mb-10 3xl:mb-16 4xl:mb-24">
        <p className="text-[#BDBDBD] text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px] 3xl:text-7xl 4xl:text-9xl font-light mb-1 sm:mb-2 lg:mb-3 xl:mb-4 3xl:mb-6 4xl:mb-8 leading-[16px]">
          About
        </p>
        <p className="text-[#333333] text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-[64px] 3xl:text-7xl 4xl:text-9xl font-bold leading-tight">
          Us
        </p>
      </div>

      <div className="grid breakout lg:grid-cols-2 gap-6 lg:gap-2 3xl:gap-4 4xl:gap-6 5xl:gap-8 items-stretch mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 3xl:mb-36 4xl:mb-44 5xl:mb-52">
        {/* Left side - Image */}
        <div className="order-1 lg:order-1 h-full">
          <div className="relative h-full aspect-square w-full overflow-hidden">
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
        <div className="p-5 md:pd-0 order-2 lg:order-2 flex flex-col h-full justify-start 2xl:pr-34 3xl:pr-24 4xl:pr-32 5xl:pr-40">
          {/* Heading */}
          <div className="flex flex-wrap items-baseline gap-3 sm:gap-4 lg:gap-6 3xl:gap-8 4xl:gap-10 5xl:gap-12 mb-4 sm:mb-6 md:mb-8 lg:mb-10 3xl:mb-20 4xl:mb-22 5xl:mb-26">
            <p className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-6xl 3xl:text-[86px] 4xl:text-[118px] 5xl:text-[10rem] font-light text-[#BDBDBD] tracking-wider">
              About
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-6xl 3xl:text-[86px] 4xl:text-[118px] 5xl:text-[10rem] font-light text-black tracking-tight">
              23
              <sup className="align-super text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl 5xl:text-7xl text-black font-light">
                rd
              </sup>{" "}
              Studio
            </p>
          </div>

          {/* Paragraphs */}
          <div className="space-y-2 lg:space-y-4 xl:space-y-4 3xl:space-y-8 4xl:space-y-12 5xl:space-y-14 text-sm sm:text-base md:text-lg lg:text-[16px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[24px] 4xl:text-[32px] 5xl:text-[50px] text-black font-light leading-[20px] md:leading-[26px] 3xl:leading-[36px] 4xl:leading-[44px] 5xl:leading-[56px]">
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
              enhancing its surroundings.
            </p>
            <p>
              At 23rd Design Studio, collaboration and research guide our
              process, allowing us to translate ideas into spaces that resonate
              with people and place. Whether designing a contemporary home, a
              dynamic workplace, or a landmark commercial development,{" "}
              <strong>we strive to merge creativity with functionality.</strong>
              Our mission is to deliver designs that elevate lifestyles,
              celebrate minimalism, and contribute to the evolving architectural
              landscape of Gujarat.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        {/* Section Heading */}
        <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-12 xl:mb-14 3xl:mb-22 4xl:mb-32 5xl:mb-40">
          <p className="text-[#BDBDBD] text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-6xl 3xl:text-[86px] 4xl:text-[118px] 5xl:text-[10rem] font-light mb-4 sm:mb-6 md:mb-8 lg:mb-10 3xl:mb-20 4xl:mb-22 5xl:mb-26 leading-none">
            Founder&apos;s{" "}
            <span className="text-[#333333] text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-6xl 3xl:text-[86px] 4xl:text-[118px] 5xl:text-[10rem] font-light leading-tight">
              Vision
            </span>
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-6 lg:gap-6 xl:gap-12 3xl:gap-24 4xl:gap-32 5xl:gap-40 mt-6 sm:mt-8 lg:mt-10 xl:mt-12 3xl:mt-16 4xl:mt-20 5xl:mt-24">
          {foundersData.map((founder, index) => (
            <div
              key={founder.id}
              className="flex flex-col lg:flex-row items-stretch gap-4 xl:gap-6 3xl:gap-8 4xl:gap-12 5xl:gap-16 h-full"
            >
              {/* Founder Image (50%) */}
              <div className="lg:basis-1/2 flex-shrink-0">
                <div className="w-full aspect-auto overflow-hidden">
                  {/* 🔑 keeps a rectangular shape */}
                  <Image
                    src={founder.imageSrc}
                    alt={founder.name}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Founder Content (50%) */}
              <div className="lg:basis-1/2 flex flex-col justify-start h-full space-y-2 xl:space-y-8 3xl:space-y-10 4xl:space-y-12 5xl:space-y-14">
                {/* Quote */}
                <p className="text-base sm:text-lg md:text-[16px] xl:text-3xl 2xl:text-[20px] 3xl:text-[28px] 4xl:text-[36px] 5xl:text-[48px] font-medium text-gray-800 leading-[25px] 3xl:leading-[3rem] 4xl:leading-[3.5rem] 5xl:leading-[4rem]">
                  &quot;{founder.quote}&quot;
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[24px] 4xl:text-4xl 5xl:text-5xl text-black font-light leading-relaxed md:leading-[26px] 3xl:leading-[32px] 4xl:leading-[42px] 5xl:leading-[54px]">
                  {founder.description}
                </p>

                {/* Name + Instagram */}
                <div className="flex justify-start md:justify-between items-center gap-4 lg:gap-4 xl:gap-6 3xl:gap-8 4xl:gap-10 5xl:gap-12 pt-2 xl:pt-4 3xl:pt-6 4xl:pt-8 5xl:pt-10">
                  <h4 className="text-[16px] sm:text-[16px] md:text-[14px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[32px] 4xl:text-[38px] 5xl:text-[48px] font-medium text-[#7F3434]">
                    {founder.name}
                  </h4>
                  {founder.instagramUrl && (
                    <a
                      href={founder.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#7F3434] hover:text-[#7F3434] transition-colors"
                      aria-label={`${founder.name} Instagram profile`}
                    >
                      <Instagram className="w-5 h-5 sm:w-6 sm:h-6 md:w-5 md:h-5 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 3xl:w-8 3xl:h-8 4xl:w-12 4xl:h-12 5xl:w-16 5xl:h-16" />
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
