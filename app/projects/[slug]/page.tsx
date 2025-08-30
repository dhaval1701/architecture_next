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
      <div className="bg-white mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-10 3xl:mb-24 4xl:mb-32 ">
        <div className="mx-auto">
          <div className="mb-6 sm:mb-8 lg:mb-10 xl:mb-12 3xl:mb-16 4xl:mb-20">
            <p className="text-[#BDBDBD] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px] 3xl:text-7xl 4xl:text-9xl font-extralight mb-1 sm:mb-2 lg:mb-3 xl:mb-4 3xl:mb-6 4xl:mb-8 leading-[16px]">
              Project
            </p>
            <p className="text-[#333333] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[64px] 3xl:text-8xl 4xl:text-[10rem] font-bold leading-tight">
              {project.title}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-10 3xl:mb-24 4xl:mb-32 ">
        <div className="mx-auto">
          {/* First Row: Left Content (30%) + Right Image (70%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-16 3xl:gap-24 4xl:gap-32 py-4 lg:py-6 3xl:py-32 4xl:py-40 items-stretch">
            {/* Left Column */}
            <div className="lg:col-span-4 h-[435px] flex items-start">
              <div className="space-y-2 sm:space-y-3 lg:space-y-4 xl:space-y-3 3xl:space-y-6 4xl:space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 lg:gap-3 xl:gap-4 3xl:gap-6 4xl:gap-8">
                  <h3 className="font-medium text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-xl 3xl:text-4xl 4xl:text-5xl">
                    Location:
                  </h3>
                  <p className="text-gray-600 font-light text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-xl 3xl:text-4xl 4xl:text-5xl">
                    {project.location}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 lg:gap-3 xl:gap-4 3xl:gap-6 4xl:gap-8">
                  <h3 className="font-medium text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-xl 3xl:text-4xl 4xl:text-5xl">
                    Plot Area:
                  </h3>
                  <p className="text-gray-600 font-light text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-xl 3xl:text-4xl 4xl:text-5xl">
                    {project.plotArea}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 lg:gap-3 xl:gap-4 3xl:gap-6 4xl:gap-8">
                  <h3 className="font-medium text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-xl 3xl:text-4xl 4xl:text-5xl">
                    Built up area:
                  </h3>
                  <p className="text-gray-600 font-light text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-xl 3xl:text-4xl 4xl:text-5xl">
                    {project.builtUpArea}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 lg:gap-3 xl:gap-4 3xl:gap-6 4xl:gap-8">
                  <h3 className="font-medium text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-xl 3xl:text-4xl 4xl:text-5xl">
                    Client:
                  </h3>
                  <p className="text-gray-600 font-light text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-xl 3xl:text-4xl 4xl:text-5xl">
                    {project.client}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 lg:gap-3 xl:gap-4 3xl:gap-6 4xl:gap-8">
                  <h3 className="font-medium text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-xl 3xl:text-4xl 4xl:text-5xl">
                    Year:
                  </h3>
                  <p className="text-gray-600 font-light text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-xl 3xl:text-4xl 4xl:text-5xl">
                    {project.year}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:col-span-8">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-16 3xl:gap-24 4xl:gap-32 py-4 lg:py-6 3xl:py-32 4xl:py-40 items-stretch">
            {/* Left Column - Image */}
            <div className="order-2 lg:order-1 h-[480px]">
              <div className="w-full h-full overflow-hidden">
                <Image
                  src={project.images[1]?.url || project.heroImage}
                  alt={project.images[1]?.alt || project.title}
                  width={800}
                  height={480}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Right Column - Description */}
            <div className="order-1 lg:order-2 h-[480px] flex items-start">
              <div className="text-black font-extralight space-y-4 sm:space-y-6 lg:space-y-8 xl:space-y-10 leading-relaxed md:leading-loose text-sm sm:text-base md:text-lg lg:text-xl xl:text-[16px] 3xl:text-4xl 4xl:text-5xl">
                {project.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Large Image Slider Section - Full Width */}
      <div className="bg-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 3xl:py-32 4xl:py-40 relative">
        <div className="space-y-6 sm:space-y-8 lg:space-y-10 xl:space-y-12 3xl:space-y-16 4xl:space-y-20">
          {/* Main Large Image Display - Full Width */}
          <div className="relative w-full">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] 2xl:h-[600px] 3xl:h-[900px] 4xl:h-[1200px] w-full">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={currentImage.url}
                  alt={currentImage.alt}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-0 -translate-x-full top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 flex items-center justify-center transition-all duration-200 hover:scale-110 text-black hover:text-gray-600 z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft
                      className="w-6 h-6 lg:w-8 lg:h-18"
                      strokeWidth={1}
                    />
                  </button>

                  <button
                    onClick={handleNextImage}
                    className="absolute right-0 translate-x-full top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 flex items-center justify-center transition-all duration-200 hover:scale-110 text-black hover:text-gray-600 z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight
                      className="w-6 h-6 lg:w-8 lg:h-18"
                      strokeWidth={1}
                    />
                  </button>
                </>
              )}

              {/* Image Counter */}
              {project.images.length > 1 && (
                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm sm:text-base lg:text-lg backdrop-blur-sm z-10">
                  {currentImageIndex + 1} / {project.images.length}
                </div>
              )}
            </div>
          </div>

          {/* Thumbnail Gallery */}
          {project.images.length > 1 && (
            <div className="px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24">
              <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide justify-center">
                {project.images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      index === currentImageIndex
                        ? "border-gray-800 shadow-lg scale-105"
                        : "border-gray-200 hover:border-gray-400 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
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
