"use client";
import React, { useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
      <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-24 4xl:px-32">
        <div className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 3xl:text-4xl 4xl:text-5xl">
          Loading project...
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center flex-col px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-24 4xl:px-32">
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
    <div className="px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-24 4xl:px-32">
      {/* Header */}
      <div className="bg-white mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 3xl:mb-24 4xl:mb-32">
        <div className="mx-auto">
          <div className="mb-6 sm:mb-8 lg:mb-10 xl:mb-12 3xl:mb-16 4xl:mb-20">
            <p className="text-gray-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-9xl font-light mb-1 sm:mb-2 lg:mb-3 xl:mb-4 3xl:mb-6 4xl:mb-8">
              Project
            </p>
            <h1 className="text-gray-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-[10rem] font-bold leading-tight">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 3xl:mb-24 4xl:mb-32">
        <div className="mx-auto">
          {/* First Row: Left Content + Right Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 3xl:gap-24 4xl:gap-32 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 3xl:py-32 4xl:py-40">
            {/* Left Column - Project Details */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 xl:space-y-10 3xl:space-y-12 4xl:space-y-16">
              <div className="space-y-2 sm:space-y-3 lg:space-y-4 xl:space-y-5 3xl:space-y-6 4xl:space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 lg:gap-3 xl:gap-4 3xl:gap-6 4xl:gap-8">
                  <h3 className="font-medium text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl">
                    Location:
                  </h3>
                  <p className="text-gray-600 font-light text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl">
                    {project.location}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 lg:gap-3 xl:gap-4 3xl:gap-6 4xl:gap-8">
                  <h3 className="font-medium text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl">
                    Plot Area:
                  </h3>
                  <p className="text-gray-600 font-light text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl">
                    {project.plotArea}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 lg:gap-3 xl:gap-4 3xl:gap-6 4xl:gap-8">
                  <h3 className="font-medium text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl">
                    Built up area:
                  </h3>
                  <p className="text-gray-600 font-light text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl">
                    {project.builtUpArea}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 lg:gap-3 xl:gap-4 3xl:gap-6 4xl:gap-8">
                  <h3 className="font-medium text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl">
                    Client:
                  </h3>
                  <p className="text-gray-600 font-light text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl">
                    {project.client}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 lg:gap-3 xl:gap-4 3xl:gap-6 4xl:gap-8">
                  <h3 className="font-medium text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl">
                    Year:
                  </h3>
                  <p className="text-gray-600 font-light text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl">
                    {project.year}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - First Image */}
            <div className="lg:pl-4 xl:pl-8 3xl:pl-12 4xl:pl-16">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={project.images[0]?.url || project.imageUrl}
                  alt={project.images[0]?.alt || project.title}
                  height={800}
                  width={800}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Second Row: Left Image + Right Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 3xl:gap-24 4xl:gap-32 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 3xl:py-32 4xl:py-40">
            {/* Left Column - Second Image */}
            <div className="lg:pr-4 xl:pr-8 3xl:pr-12 4xl:pr-16 order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={project.images[1]?.url || project.imageUrl}
                  alt={project.images[1]?.alt || project.title}
                  height={800}
                  width={800}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Right Column - Description */}
            <div className="flex flex-col justify-start space-y-4 sm:space-y-6 lg:space-y-8 xl:space-y-10 3xl:space-y-12 4xl:space-y-16 order-1 lg:order-2">
              <div>
                <div className="space-y-3 sm:space-y-4 lg:space-y-6 xl:space-y-8 3xl:space-y-10 4xl:space-y-12 text-gray-600 leading-relaxed md:leading-loose lg:leading-loose xl:leading-loose 3xl:leading-loose 4xl:leading-loose text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl">
                  <p>
                    Featuring a built façade with red oval fire and stark
                    concrete forms, the design offers a strong architectural
                    presence and clear character. The landscaped entrance
                    enhances the home&apos;s appeal, offering a sustainable and
                    welcoming design.
                  </p>

                  <p>
                    More than a private home, it stands as a landmark of
                    leadership, transparency, and progressive village
                    development in Gandhinagar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Large Image Slider Section */}
      <div className="bg-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 3xl:py-32 4xl:py-40">
        <div className="mx-auto">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 xl:space-y-12 3xl:space-y-16 4xl:space-y-20">
            {/* Main Large Image Display */}
            <div className="relative">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] 3xl:h-[900px] 4xl:h-[1200px] overflow-hidden rounded-lg">
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
                      className="absolute left-3 sm:left-4 md:left-6 lg:left-8 xl:left-10 3xl:left-12 4xl:left-16 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 3xl:w-20 3xl:h-20 4xl:w-24 4xl:h-24 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg backdrop-blur-sm"
                      aria-label="Previous image"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-gray-700 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 3xl:w-10 3xl:h-10 4xl:w-12 4xl:h-12"
                      >
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                    </button>

                    <button
                      onClick={handleNextImage}
                      className="absolute right-3 sm:right-4 md:right-6 lg:right-8 xl:right-10 3xl:right-12 4xl:right-16 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 3xl:w-20 3xl:h-20 4xl:w-24 4xl:h-24 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg backdrop-blur-sm"
                      aria-label="Next image"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-gray-700 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 3xl:w-10 3xl:h-10 4xl:w-12 4xl:h-12"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  </>
                )}

                {/* Image Counter */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 xl:bottom-10 3xl:bottom-12 4xl:bottom-16 right-3 sm:right-4 md:right-6 lg:right-8 xl:right-10 3xl:right-12 4xl:right-16 bg-black/60 text-white px-3 py-1 sm:px-4 sm:py-2 lg:px-5 lg:py-2 xl:px-6 xl:py-3 3xl:px-8 3xl:py-4 4xl:px-10 4xl:py-5 rounded-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 3xl:text-2xl 4xl:text-3xl backdrop-blur-sm">
                    {currentImageIndex + 1} / {project.images.length}
                  </div>
                )}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {project.images.length > 1 && (
              <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 3xl:gap-8 4xl:gap-10 overflow-x-auto pb-4 scrollbar-hide">
                <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 3xl:gap-8 4xl:gap-10 mx-auto">
                  {project.images.map((image, index) => (
                    <button
                      key={image.id}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 2xl:w-36 2xl:h-36 3xl:w-40 3xl:h-40 4xl:w-48 4xl:h-48 rounded-lg overflow-hidden border-2 sm:border-3 transition-all duration-300 ${
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
    </div>
  );
}
