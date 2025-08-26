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
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-500 text-lg">Loading project...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center flex-col">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Project Not Found
        </h1>
        <Link href="/projects" className="text-blue-600 hover:text-blue-800">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  const currentImage = project.images[currentImageIndex];

  return (
    <div>
      {/* Header */}
      <div className="bg-white mb-10">
        <div className="mx-auto">
          <div className="mb-8">
            <p className="text-gray-400 text-2xl md:text-5xl font-light mb-2">
              Project
            </p>
            <h1 className="text-gray-800 text-3xl md:text-5xl font-bold">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mb-10">
        <div className="mx-auto ">
          {/* First Row: Left Content + Right Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16">
            {/* Left Column - Project Details */}
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-gray-800">Location:</h3>
                  <p className="text-gray-600 font-light">{project.location}</p>
                </div>

                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-gray-800">Plot Area:</h3>
                  <p className="text-gray-600 font-light">{project.plotArea}</p>
                </div>

                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-gray-800">Built up area:</h3>
                  <p className="text-gray-600 font-light">
                    {project.builtUpArea}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-gray-800">Client:</h3>
                  <p className="text-gray-600 font-light">{project.client}</p>
                </div>

                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-gray-800">Year:</h3>
                  <p className="text-gray-600 font-light">{project.year}</p>
                </div>
              </div>
            </div>

            {/* Right Column - First Image */}
            <div className="lg:pl-8">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={project.images[0]?.url || project.imageUrl}
                  alt={project.images[0]?.alt || project.title}
                  height={500}
                  width={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Second Row: Left Image + Right Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16">
            {/* Left Column - Second Image */}
            <div className="lg:pr-8">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={project.images[1]?.url || project.imageUrl}
                  alt={project.images[1]?.alt || project.title}
                  height={500}
                  width={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Description */}
            <div className="flex flex-col justify-start space-y-6">
              <div>
                {/* <p className="text-sm text-gray-600 font-medium mb-4 cursor-pointer">
                  {project.longDescription || project.description}
                </p> */}

                <div className="space-y-4 text-gray-600 leading-relaxed">
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
      <div className="bg-white py-16">
        <div className="mx-auto">
          <div className="space-y-8">
            {/* Main Large Image Display */}
            <div className="relative">
              <div className="relative h-[500px] md:h-[700px] overflow-hidden rounded-lg ">
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
                      className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg backdrop-blur-sm"
                      aria-label="Previous image"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-gray-700"
                      >
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                    </button>

                    <button
                      onClick={handleNextImage}
                      className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg backdrop-blur-sm"
                      aria-label="Next image"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-gray-700"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  </>
                )}

                {/* Image Counter */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-6 right-6 bg-black/60 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                    {currentImageIndex + 1} / {project.images.length}
                  </div>
                )}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {project.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                <div className="flex gap-4 mx-auto">
                  {project.images.map((image, index) => (
                    <button
                      key={image.id}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-lg overflow-hidden border-3 transition-all duration-300 ${
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
