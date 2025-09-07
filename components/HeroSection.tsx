"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import ButtonV1 from "./ButtonV1";
// import ScrollingText from "./ScrollingText";
import { projectsData } from "@/data/projects";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import InfiniteDraggableScroll from "./DraggableScrollingText";

interface Project {
  title: string;
  slug: string;
  location: string;
  builtUpArea: string;
  year: string;
  heroImage: string;
  thumbnail: string;
}

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const router = useRouter();

  // Handle navigation to project page
  const handleViewProject = () => {
    router.push(`/projects/${currentProject.slug}`);
  };

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projectsData.length);
    }, 9000); // Change slide every 9 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setIsAutoPlay(false); // Stop auto-play when user interacts
    setCurrentSlide((prev) => (prev + 1) % projectsData.length);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const prevSlide = () => {
    setIsAutoPlay(false); // Stop auto-play when user interacts
    setCurrentSlide(
      (prev) => (prev - 1 + projectsData.length) % projectsData.length
    );
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const currentProject: Project = projectsData[currentSlide];

  // Fade animation variants for images with proper typing
  const fadeVariants: Variants = {
    enter: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    center: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: "easeIn",
      },
    },
  };

  // Text animation variants with proper typing
  const textVariants: Variants = {
    enter: {
      y: 50,
      opacity: 0,
    },
    center: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  return (
    <section className="mb-8 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-32 3xl:mb-42 4xl:mb-48 5xl:mb-56 relative">
      {/* Background Scrolling Text */}
      <div className="breakout absolute -top-10 sm:-top-14 md:-top-16 lg:-top-22 xl:-top-28 2xl:-top-42 3xl:-top-52 4xl:-top-62 5xl:-top-72 left-0 z-0 select-none pointer-events-none overflow-hidden h-[60px] sm:h-[80px] md:h-[100px] lg:h-[160px] xl:h-[200px] 2xl:h-[260px] 3xl:h-[320px] 4xl:h-[380px] 5xl:h-[440px] flex items-center">
        <InfiniteDraggableScroll
          speed={50}
          containerClassName="flex items-center overflow-hidden"
        >
          <div
            className="flex items-center font-light tracking-[0.5em] md:tracking-[1.2em] opacity-40 whitespace-nowrap"
            style={{ wordSpacing: "1.8em", pointerEvents: "auto" }}
          >
            <span className="font-bold uppercase text-gray-300 text-[62px] xs:text-[72px] sm:text-[82px] md:text-[92px] lg:text-[104px] xl:text-[204px] 2xl:text-[204px] 3xl:text-[250px] 4xl:text-[320px] 5xl:text-[380px]">
              THE
            </span>

            <div className="relative flex items-start ml-1.5 sm:ml-2 md:ml-3 lg:ml-5 xl:ml-6 2xl:ml-8 3xl:ml-10 4xl:ml-14">
              <span className="font-bold uppercase leading-none text-red-900 text-[62px] xs:text-[72px] sm:text-[82px] md:text-[92px] lg:text-[104px] xl:text-[204px] 2xl:text-[204px] 3xl:text-[250px] 4xl:text-[320px] 5xl:text-[380px]">
                23
              </span>
              <span className="font-normal absolute text-gray-300 -top-2 -right-5 sm:-top-0 sm:-right-5 md:-top-0 md:-right-6 lg:-top-0 lg:-right-12 xl:-top-2 xl:-right-10 2xl:-top-0 2xl:-right-20 3xl:-top-0 3xl:-right-26 4xl:-top-0 4xl:-right-32 text-[32px]  md:text-[32px] lg:text-[32px] xl:text-[60px] 2xl:text-[70px] 3xl:text-[100px] 4xl:text-[120px] 5xl:[160px] tracking-[0em] md:tracking-wider">
                rd
              </span>
              {/* <span className="font-normal absolute text-gray-300 -top-0 -right-2.5 sm:-top-0 sm:-right-3 md:-top-0 md:-right-4 lg:-top-0 lg:-right-8 xl:-top-0 xl:-right-12 2xl:-top-0 2xl:-right-16 3xl:-top-0 3xl:-right-20 4xl:-top-0 4xl:-right-26 text-[24px] md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[70px] 3xl:text-[100px] 4xl:text-[120px] 5xl:[160px] tracking-[0em]">
                rd
              </span> */}
            </div>

            <span className="font-bold uppercase text-gray-300 ml-8 md:ml-12 lg:ml-16 xl:ml-20 2xl:ml-28 3xl:ml-36 4xl:ml-44 text-[62px] xs:text-[72px] sm:text-[82px] md:text-[92px] lg:text-[104px] xl:text-[204px] 2xl:text-[204px] 3xl:text-[250px] 4xl:text-[320px] 5xl:text-[380px] mr-8 sm:mr-12 md:mr-16 lg:mr-20 xl:mr-28 2xl:mr-36 3xl:mr-44 4xl:mr-52">
              STUDIO
            </span>
          </div>
        </InfiniteDraggableScroll>
      </div>
      {/* <ScrollingText /> */}

      {/* Main Layout */}
      <div className="relative w-full z-10 flex flex-col lg:flex-row justify-between items-start lg:items-stretch mt-10 sm:mt-12 md:mt-12 lg:mt-14 xl:mt-24 2xl:mt-24 3xl:mt-24 4xl:mt-32 5xl:mt-34">
        {/* Mobile Image First */}
        {isMobile && (
          <div className="w-full mb-4 sm:mb-6 md:mb-8">
            <div className="relative w-full h-[400px] xs:h-[240px] sm:h-[280px] md:h-[320px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  variants={fadeVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <Image
                    src={currentProject.heroImage}
                    alt={currentProject.title}
                    fill
                    placeholder="blur"
                    blurDataURL={currentProject.thumbnail}
                    quality={100}
                    className="object-cover"
                    priority
                    sizes="100vw"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-0 left-0 z-10">
                <ButtonV1
                  text="VIEW PROJECT"
                  arrowSrc="/assets/right_arrow.svg"
                  onClick={handleViewProject}
                />
              </div>
            </div>
          </div>
        )}

        {/* Left Text Content */}
        <div className="w-full lg:w-2/5 mb-4 sm:mb-6 md:mb-8 lg:mb-0 lg:pr-4 xl:pr-6 2xl:pr-8 3xl:pr-12 4xl:pr-16 5xl:pr-20 flex flex-col justify-center lg:justify-end">
          <div className="flex flex-row justify-between items-start lg:flex-col lg:justify-end lg:items-start h-full pb-0 lg:pb-8 xl:pb-12 2xl:pb-14 3xl:pb-20 4xl:pb-24 5xl:pb-28">
            {/* Project Title + Details with Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {/* Title */}
                <div className="text-[#BDBDBD] text-left text-3xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-[102px] 5xl:text-[128px] font-light mb-0 leading-tight">
                  {currentProject.title.split(" ")[0]}
                </div>
                <div className="text-[#000] text-left font-bold text-3xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl 3xl:text-7xl 4xl:text-[102px] 5xl:text-[128px]">
                  {currentProject.title
                    .split(" ")
                    .slice(1)
                    .map((word, idx) => (
                      <div key={idx} className="mb-0">
                        {word}
                      </div>
                    ))}
                </div>
                {/* Details */}
                <div className="space-y-0.5 sm:space-y-1 md:space-y-1.5 lg:space-y-2 xl:space-y-2 2xl:space-y-2 3xl:space-y-4 4xl:space-y-5 5xl:space-y-6 mb-3 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-12 3xl:mb-16 4xl:mb-20 5xl:mb-24 mt-1 sm:mt-2 md:mt-3 lg:mt-4 xl:mt-5 2xl:mt-6 3xl:mt-8 4xl:mt-10 5xl:mt-12">
                  <div className="text-[#8d8d8d] text-left text-sm xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] 2xl:text-[26px] 3xl:text-4xl 4xl:text-5xl 5xl:text-7xl font-light">
                    {currentProject.location}
                  </div>
                  <div className="text-[#8d8d8d] text-left text-sm xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] 2xl:text-[26px] 3xl:text-4xl 4xl:text-5xl 5xl:text-7xl font-light">
                    {currentProject.builtUpArea}
                  </div>
                  <div className="text-[#8d8d8d] text-left text-sm xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-[22px] 2xl:text-[26px] 3xl:text-3xl 4xl:text-5xl 5xl:text-7xl font-light">
                    {currentProject.year}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation + Counter */}
            <div className="flex flex-col items-end lg:items-start">
              <div className="flex items-center mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-7 3xl:mb-8 4xl:mb-10 5xl:mb-12">
                <button
                  // disabled={currentSlide === 1}
                  onClick={prevSlide}
                  className="w-8 h-8 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 3xl:w-20 3xl:h-20 4xl:w-24 4xl:h-24 5xl:w-28 5xl:h-28 border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors mr-1.5 sm:mr-2 md:mr-3 lg:mr-4 xl:mr-5 2xl:mr-6 3xl:mr-7 4xl:mr-8 5xl:mr-10"
                  aria-label="Previous project"
                >
                  <Image
                    src="/assets/left_arrow.svg"
                    alt="Previous"
                    width={12}
                    height={12}
                    className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 4xl:w-10 4xl:h-10 5xl:w-12 5xl:h-12"
                  />
                </button>
                <button
                  // disabled={currentSlide === projectsData.length}
                  onClick={nextSlide}
                  className="w-8 h-8 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 3xl:w-20 3xl:h-20 4xl:w-24 4xl:h-24 5xl:w-28 5xl:h-28  border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
                  aria-label="Next project"
                >
                  <Image
                    src="/assets/right_arrow.svg"
                    alt="Next"
                    width={12}
                    height={12}
                    className="w-3 h-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 4xl:w-10 4xl:h-10 5xl:w-12 5xl:h-12"
                  />
                </button>
              </div>

              {/* Animated Counter */}
              <div className="flex items-center" key={currentSlide}>
                <span className="text-gray-500 text-[16px] xs:text-base sm:text-lg md:text-xl lg:text-2xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl font-light min-w-[12px] xs:min-w-[14px] sm:min-w-[16px] md:min-w-[20px] lg:min-w-[24px] text-right">
                  {String(currentSlide + 1).padStart(2, "0")}
                </span>
                <div className="text-gray-200 text-[16px] xs:text-base sm:text-lg md:text-xl lg:text-2xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl mx-1 sm:mx-2 md:mx-3 lg:mx-4 xl:mx-5 2xl:mx-6 3xl:mx-7 4xl:mx-8 5xl:mx-10">
                  /
                </div>
                <span className="text-gray-400 text-[16px] xs:text-base sm:text-lg md:text-xl lg:text-2xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl font-light min-w-[12px] xs:min-w-[14px] sm:min-w-[16px] md:min-w-[20px] lg:min-w-[24px]">
                  {String(projectsData.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Full Image with Fade Animation */}
        {!isMobile && (
          <div className="w-full lg:w-3/5  aspect-square">
            <div className="relative w-full h-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  variants={fadeVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <Image
                    src={currentProject.heroImage}
                    alt={currentProject.title}
                    placeholder="blur"
                    blurDataURL={currentProject.thumbnail}
                    quality={100}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute bottom-0 left-0 z-10">
                <ButtonV1
                  text="VIEW PROJECT"
                  arrowSrc="/assets/right_arrow.svg"
                  onClick={handleViewProject}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
