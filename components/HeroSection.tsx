"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
      title: "Sarpanch House",
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
    <section className="pb-10 lg:pb-20 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32  relative overflow-hidden">
      {/* Auto-moving Background Text - Responsive */}
      <div className="absolute top-10 lg:top-22 left-0 w-full z-0 select-none pointer-events-none overflow-hidden h-[120px] sm:h-[160px] md:h-[200px] lg:h-[240px] flex items-center">
        <motion.div
          className="flex whitespace-nowrap opacity-10"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="flex items-center mr-16 sm:mr-24 md:mr-32 font-light"
              style={{ letterSpacing: "0.1em" }}
            >
              {/* THE */}
              <span className="text-gray-700 font-bold text-[60px] sm:text-[80px] md:text-[100px] lg:text-[180px] xl:text-[220px] 2xl:text-[280px]">
                THE
              </span>

              {/* 23rd (wrapped together) */}
              <div className="relative flex items-start ml-4 sm:ml-6">
                <span className="font-bold text-red-900 leading-none text-[60px] sm:text-[80px] md:text-[100px] lg:text-[180px] xl:text-[220px] 2xl:text-[280px]">
                  23
                </span>
                <span className="absolute -top-3 -right-9 sm:-top-4 sm:-right-12 md:-top-5 md:-right-14 lg:-top-6 lg:-right-18 font-light text-red-900 text-[20px] sm:text-[30px] md:text-[40px] lg:text-[60px] xl:text-[80px] 2xl:text-[100px]">
                  rd
                </span>
              </div>

              {/* STUDIO with space */}
              <span className="font-bold text-gray-700 ml-10 sm:ml-14 md:ml-20 text-[60px] sm:text-[80px] md:text-[100px] lg:text-[180px] xl:text-[220px] 2xl:text-[280px]">
                studio
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Main Content - Mobile: column, Desktop: row */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-end mt-28 sm:mt-32 md:mt-40 lg:mt-48">
        {/* For mobile: Image comes first */}
        {isMobile && (
          <div className="w-full mb-8">
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden">
              <Image
                src={currentProject.image}
                alt={currentProject.title}
                fill
                className="object-cover transition-all duration-500"
                priority
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute bottom-0 left-0 z-10">
                <button className="group flex items-center bg-white backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="text-xs sm:text-sm uppercase tracking-widest text-gray-800 mr-2 sm:mr-3">
                    VIEW PROJECT
                  </span>
                  <Image
                    src="/assets/right_arrow.svg"
                    alt="Next"
                    width={16}
                    height={16}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Left Content - Text */}
        <div className="w-full lg:w-2/5 xl:w-1/3 mb-8 lg:mb-0">
          <div className="flex flex-row justify-between items-end  lg:flex-col lg:justify-start md:items-start h-full">
            {/* Project Title + Details */}
            <div className="lg:mb-0">
              {/* Project Title - Full Text */}
              <div className="text-gray-400 text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-2">
                The
              </div>
              <div className="text-gray-900 text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="block">Sarpanch</span>
                <span className="block">House</span>
              </div>

              {/* Project Details */}
              <div className="space-y-1 sm:space-y-2 mb-6 sm:mb-8">
                <div className="text-gray-500 text-left text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-extralight">
                  {currentProject.location}
                </div>
                <div className="text-gray-500 text-left text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-extralight">
                  <span>{currentProject.area} ft</span>
                  <sup className="text-xs sm:text-sm">2</sup>
                </div>
                <div className="text-gray-500 text-left text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-extralight">
                  {currentProject.timeline}
                </div>
              </div>
            </div>

            {/* Navigation + Counter */}
            <div className="flex flex-col items-end lg:items-start lg:mt-auto">
              {/* Navigation Controls */}
              <div className="flex items-center mb-4 sm:mb-6">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors mr-3 sm:mr-4"
                  aria-label="Previous project"
                >
                  <Image
                    src="/assets/left_arrow.svg"
                    alt="Previous"
                    width={16}
                    height={16}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </button>

                <button
                  onClick={nextSlide}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-50 border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
                  aria-label="Next project"
                >
                  <Image
                    src="/assets/right_arrow.svg"
                    alt="Next"
                    width={16}
                    height={16}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </button>
              </div>

              {/* Slide Counter */}
              <div className="flex items-center">
                <span className="text-gray-500 text-2xl sm:text-3xl font-light min-w-[20px] sm:min-w-[24px] text-right">
                  {String(currentSlide + 1).padStart(2, "0")}
                </span>

                <div className="text-gray-200 text-2xl sm:text-3xl mx-2 sm:mx-4">
                  /
                </div>
                <span className="text-gray-400 text-2xl sm:text-3xl font-light min-w-[20px] sm:min-w-[24px]">
                  {String(projects.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Image (Desktop only) */}
        {!isMobile && (
          <div className="w-full lg:w-3/5 xl:w-2/3 lg:pl-8 xl:pl-12 2xl:pl-16">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] overflow-hidden">
              <Image
                src={currentProject.image}
                alt={currentProject.title}
                fill
                className="object-cover transition-all duration-500"
                priority
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Bottom Left Overlay - View Project Button */}
              <div className="absolute bottom-0 left-0 z-10">
                <button className="group flex items-center bg-white backdrop-blur-sm px-6 py-3 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="text-sm uppercase tracking-widest text-gray-800 mr-3">
                    VIEW PROJECT
                  </span>
                  <Image
                    src="/assets/right_arrow.svg"
                    alt="Next"
                    width={20}
                    height={20}
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
