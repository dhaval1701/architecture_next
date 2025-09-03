"use client";
import React, { useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { getProjectBySlug, Project } from "@/data/projects";

export default function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [project, setProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug && typeof slug === "string") {
      const foundProject = getProjectBySlug(slug);
      setProject(foundProject || null);
      setLoading(false);
    }
  }, [slug]);

  const handlePrevImage = () => {
    if (project) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (project) {
      setCurrentImageIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center ">
        <div className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 3xl:text-4xl 4xl:text-5xl">
          Loading project...
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center flex-col ">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl 4xl:text-8xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 xl:mb-10 3xl:mb-12 4xl:mb-16">
          Project Not Found
        </h1>
        <Link
          href="/projects"
          className="text-blue-600 hover:text-blue-800 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 3xl:text-3xl 4xl:text-4xl transition-colors"
        >
          ← Back to Projects
        </Link>
      </div>
    );
  }

  const currentImage = project.images[currentImageIndex];

  return (
    <div className="relative">
      {/* Header */}

      <div className="mt-2 md:mt-0 mb-4 md:mb-6 xl:mb-10 3xl:mb-16 4xl:mb-24">
        <p className="text-[#BDBDBD] text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px] 3xl:text-7xl 4xl:text-9xl font-light mb-1 sm:mb-2 lg:mb-3 xl:mb-4 3xl:mb-6 4xl:mb-8 leading-[16px]">
          Project
        </p>
        <p className="text-[#333333] text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-[64px] 3xl:text-7xl 4xl:text-9xl font-bold leading-tight">
          {project.title}
        </p>
      </div>

      {/* Main Content */}
      <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-10 3xl:mb-24 4xl:mb-32 ">
        <div className="mx-auto">
          {/* First Row: Left Content (30%) + Right Image (70%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-16 3xl:gap-24 4xl:gap-32  items-stretch">
            {/* Left Column */}
            <div className=" order-2 lg:order-1 lg:col-span-4 h-[250px] lg:h-auto flex items-start mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10 3xl:mt-16 4xl:mt-20">
              <div className="space-y-3 sm:space-y-3 lg:space-y-4 xl:space-y-3 3xl:space-y-6 4xl:space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 lg:gap-3 xl:gap-4 3xl:gap-6 4xl:gap-8">
                  <h3 className="font-medium text-[#000] text-sm sm:text-base md:text-lg  xl:text-2xl 2xl:text-xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl">
                    Location:
                  </h3>
                  <p className="text-[#000] font-light text-sm sm:text-base md:text-lg xl:text-2xl 2xl:text-xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl">
                    {project.location}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 lg:gap-3 xl:gap-4 3xl:gap-6 4xl:gap-8">
                  <h3 className="font-medium text-[#000] text-sm sm:text-base md:text-lg  xl:text-2xl 2xl:text-xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl">
                    Plot Area:
                  </h3>
                  <p className="text-[#000] font-light text-sm sm:text-base md:text-lg xl:text-2xl 2xl:text-xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl">
                    {project.plotArea}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 lg:gap-3 xl:gap-4 3xl:gap-6 4xl:gap-8">
                  <h3 className="font-medium text-[#000] text-sm sm:text-base md:text-lg  xl:text-2xl 2xl:text-xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl">
                    Built up area:
                  </h3>
                  <p className="text-[#000] font-light text-sm sm:text-base md:text-lg  xl:text-2xl 2xl:text-xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl">
                    {project.builtUpArea}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 lg:gap-3 xl:gap-4 3xl:gap-6 4xl:gap-8">
                  <h3 className="font-medium text-[#000] text-sm sm:text-base md:text-lg xl:text-2xl 2xl:text-xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl">
                    Client:
                  </h3>
                  <p className="text-[#000] font-light text-sm sm:text-base md:text-lg  xl:text-2xl 2xl:text-xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl">
                    {project.client}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 lg:gap-3 xl:gap-4 3xl:gap-6 4xl:gap-8">
                  <h3 className="font-medium text-[#000] text-sm sm:text-base md:text-lg  xl:text-2xl 2xl:text-xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl">
                    Year:
                  </h3>
                  <p className="text-[#000] font-light text-sm sm:text-base md:text-lg  xl:text-2xl 2xl:text-xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl">
                    {project.year}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 lg:order-2 lg:col-span-8">
              <Image
                src={project.images[0]?.url || project.heroImage}
                alt={project.images[0]?.alt || project.title}
                width={800}
                height={450}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Second Row: Left Image (50%) + Right Content (50%) */}
          <div className="flex flex-col lg:flex-row items-stretch py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 2xl:py-20 3xl:py-28 4xl:py-36 5xl:py-44 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 3xl:gap-24 4xl:gap-32 5xl:gap-40">
            {/* Left Column - Image */}
            <div className="w-full lg:w-1/2 aspect-square">
              <div className="w-full h-full overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={project.images[1]?.url || project.heroImage}
                  alt={project.images[1]?.alt || project.title}
                  width={1200}
                  height={1200} // keep square ratio
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Right Column - Description */}
            <div className="w-full lg:w-1/2 flex items-start mt-0 md:mt-10">
              <div
                className="
        text-black space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8
        leading-relaxed tracking-normal
        text-sm sm:text-base md:text-[16px] xl:text-[18px] 3xl:text-[28px] 4xl:text-[36px] 5xl:text-[52px]
        font-light
      "
              >
                {project.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Large Image Slider Section - Full Width */}
      <div className="bg-white relative">
        <div className="space-y-6 sm:space-y-8 lg:space-y-10 xl:space-y-12 3xl:space-y-16 4xl:space-y-20">
          {/* Main Large Image Display - Full Width */}
          <div className="relative w-full">
            <div className="relative aspect-[4/2] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  className="w-full h-full relative"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={currentImage.url}
                    alt={currentImage.alt}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows - Hidden on mobile */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="hidden sm:flex absolute left-0 -translate-x-full top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 items-center justify-center transition-all duration-200 hover:scale-110 text-black hover:text-gray-600 z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft
                      className="w-6 h-6 lg:w-8 lg:h-8"
                      strokeWidth={1}
                    />
                  </button>

                  <button
                    onClick={handleNextImage}
                    className="hidden sm:flex absolute right-0 translate-x-full top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 flex items-center justify-center transition-all duration-200 hover:scale-110 text-black hover:text-gray-600 z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight
                      className="w-6 h-6 lg:w-8 lg:h-8"
                      strokeWidth={1}
                    />
                  </button>
                </>
              )}

              {/* Image Counter */}
              {project.images.length > 1 && (
                <div className="hidden md:block absolute bottom-4 right-4 bg-black/40 text-white px-4 py-2 rounded-full text-sm sm:text-base lg:text-lg backdrop-blur-sm z-10">
                  {currentImageIndex + 1} / {project.images.length}
                </div>
              )}
            </div>
          </div>

          {/* Thumbnail Gallery - Smaller thumbnails */}
          {project.images.length > 1 && (
            <div className="">
              <div className="flex gap-2 overflow-hidden justify-start">
                {project.images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-12 sm:w-16 h-12 sm:h-16 lg:w-20 lg:h-20 xl:w-22 xl:h-22 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      index === currentImageIndex
                        ? "border-gray-800 shadow-lg scale-105"
                        : "border-gray-200 hover:border-gray-400 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
