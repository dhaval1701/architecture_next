"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ButtonV1 from "./ButtonV1";
import ScrollingText from "./ScrollingText";

interface Project {
  id: number;
  title: string;
  location: string;
  area: string;
  timeline: string;
  image: string;
}

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  // Mock data for multiple projects
  const projects: Project[] = [
    {
      id: 1,
      title: "The Vertic House",
      location: "Gandhinagar",
      area: "5000",
      timeline: "2025 - 2027",
      image: "/assets/sarpanch_house_full.svg",
    },
    {
      id: 2,
      title: "Modern Villa",
      location: "Ahmedabad",
      area: "7500",
      timeline: "2024 - 2026",
      image: "/assets/modern_villa.svg",
    },
    // Add more projects as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentSlide];

  return (
    <section className="pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-32 3xl:pb-40 4xl:pb-48 relative ">
      {/* Auto-moving Background Text - Fully Responsive */}
      <div className="breakout absolute -top-18 sm:-top-8 md:top-10 lg:-top-22 xl:-top-20 2xl:-top-34 3xl:-top-36 4xl:-top-46 left-0 z-0 select-none pointer-events-none overflow-hidden h-[60px] sm:h-[80px] md:h-[100px] lg:h-[160px] xl:h-[200px] 2xl:h-[260px] 3xl:h-[320px] 4xl:h-[380px] flex items-center">
        <ScrollingText />
      </div>

      {/* Main Content - Mobile: column, Desktop: row */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-stretch mt-2 sm:mt-20 md:mt-24 lg:mt-14 xl:mt-32 2xl:mt-24 3xl:mt-44 4xl:mt-84">
        {/* For mobile: Image comes first */}
        {isMobile && (
          <div className="w-full mb-4 sm:mb-6 md:mb-8">
            <div className="relative w-full h-[400px] xs:h-[240px] sm:h-[280px] md:h-[320px] overflow-hidden">
              <Image
                src={currentProject.image}
                alt={currentProject.title}
                fill
                className="object-cover transition-all duration-500"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-0 left-0 z-10">
                <button className="group flex items-center bg-white backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="text-xs sm:text-sm uppercase tracking-widest text-gray-800 mr-1.5 sm:mr-2 md:mr-3 font-medium">
                    VIEW PROJECT
                  </span>
                  <Image
                    src="/assets/right_arrow.svg"
                    alt="Next"
                    width={12}
                    height={12}
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5"
                  />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Left Content - Text */}
        <div className="w-full lg:w-2/5 xl:w-1/3 2xl:w-2/5 3xl:w-1/3 4xl:w-2/5 mb-4 sm:mb-6 md:mb-8 lg:mb-0 lg:pr-4 xl:pr-6 2xl:pr-8 3xl:pr-12 4xl:pr-16 flex flex-col justify-center lg:justify-end">
          <div className="flex flex-row justify-between items-end lg:flex-col lg:justify-end lg:items-start h-full pb-0 lg:pb-8 xl:pb-12 2xl:pb-16 3xl:pb-20 4xl:pb-24">
            {/* Project Title + Details */}
            <div className="lg:mb-8 xl:mb-12 2xl:mb-16 3xl:mb-20 4xl:mb-24">
              {/* Project Title - Full Text */}
              <div className="text-gray-300 text-left text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-[138px] font-extralight mb-0 leading-tight">
                The
              </div>
              <div className="text-gray-900 text-left font-bold leading-[0.85] text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-[138px]">
                <div className="mb-0">Vertic</div>
                <div className="mb-0">House</div>
              </div>

              {/* Project Details */}
              <div className="space-y-0.5 sm:space-y-1 md:space-y-1.5 lg:space-y-2 xl:space-y-2 2xl:space-y-2 3xl:space-y-4 4xl:space-y-5 mb-3 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-12 3xl:mb-16 4xl:mb-20 mt-1 sm:mt-2 md:mt-3 lg:mt-4 xl:mt-5 2xl:mt-6 3xl:mt-8 4xl:mt-10">
                <div className="text-[#BDBDBD] text-left text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-7xl font-extralight">
                  {currentProject.location}
                </div>
                <div className="text-[#BDBDBD] text-left text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-7xl font-extralight">
                  <span>{currentProject.area} ft</span>
                  <sup className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
                    2
                  </sup>
                </div>
                <div className="text-[#BDBDBD] text-left text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-5xl font-extralight">
                  {currentProject.timeline}
                </div>
              </div>
            </div>

            {/* Navigation + Counter */}
            <div className="flex flex-col items-end lg:items-start">
              {/* Navigation Controls */}
              <div className="flex items-center mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-7 3xl:mb-8 4xl:mb-10">
                <button
                  onClick={prevSlide}
                  className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 3xl:w-20 3xl:h-20 4xl:w-24 4xl:h-24 border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors mr-1.5 sm:mr-2 md:mr-3 lg:mr-4 xl:mr-5 2xl:mr-6 3xl:mr-7 4xl:mr-8"
                  aria-label="Previous project"
                >
                  <Image
                    src="/assets/left_arrow.svg"
                    alt="Previous"
                    width={12}
                    height={12}
                    className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 4xl:w-10 4xl:h-10"
                  />
                </button>

                <button
                  onClick={nextSlide}
                  className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 3xl:w-20 3xl:h-20 4xl:w-24 4xl:h-24 bg-gray-50 border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
                  aria-label="Next project"
                >
                  <Image
                    src="/assets/right_arrow.svg"
                    alt="Next"
                    width={12}
                    height={12}
                    className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 4xl:w-10 4xl:h-10"
                  />
                </button>
              </div>

              {/* Slide Counter */}
              <div className="flex items-center">
                <span className="text-gray-500 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl font-light min-w-[12px] xs:min-w-[14px] sm:min-w-[16px] md:min-w-[20px] lg:min-w-[24px] text-right">
                  {String(currentSlide + 1).padStart(2, "0")}
                </span>

                <div className="text-gray-200 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl mx-1 sm:mx-2 md:mx-3 lg:mx-4 xl:mx-5 2xl:mx-6 3xl:mx-7 4xl:mx-8">
                  /
                </div>
                <span className="text-gray-400 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl font-light min-w-[12px] xs:min-w-[14px] sm:min-w-[16px] md:min-w-[20px] lg:min-w-[24px]">
                  {String(projects.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Full Width/Height Image (Desktop only) */}
        {!isMobile && (
          <div className="w-full lg:w-3/5 xl:w-2/3 2xl:w-3/5 3xl:w-2/3 4xl:w-3/5 h-[80px] md:h-[350px] lg:h-[600px] xl:h-[500px] 2xl:h-[800px] 3xl:h-[700px] 4xl:h-[1720px]">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={currentProject.image}
                alt={currentProject.title}
                fill
                className="object-cover transition-all duration-500"
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />

              {/* Light Overlay for better contrast */}
              <div className="absolute inset-0 bg-black/10"></div>

              {/* Bottom Left Overlay - View Project Button */}
              <div className="absolute bottom-0 left-0 z-10">
                <button className="group flex items-center bg-white backdrop-blur-sm px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-10 3xl:px-14 4xl:px-16 py-1.5 sm:py-2 md:py-3 lg:py-4 xl:py-5 2xl:py-5 3xl:py-7 4xl:py-8 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="text-[6px] xs:text-[6px] sm:text-[6px] md:[8px] lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-3xl 4xl:text-4xl uppercase tracking-widest text-gray-800 mr-1.5 sm:mr-2 md:mr-3 lg:mr-4 xl:mr-5 2xl:mr-6 3xl:mr-7 4xl:mr-8 font-medium">
                    VIEW PROJECT
                  </span>
                  <Image
                    src="/assets/right_arrow.svg"
                    alt="Next"
                    width={16}
                    height={16}
                    className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 3xl:w-9 3xl:h-9 4xl:w-10 4xl:h-10"
                  />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
