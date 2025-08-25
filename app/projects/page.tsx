"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category?: string;
  location?: string;
  area?: string;
  year?: string;
}

const Projects: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const projects: Project[] = [
    {
      id: 1,
      title: "The Sarpanch House",
      description:
        "Modern architectural design with contemporary elements and sustainable features.",
      imageUrl: "/assets/sarpanch_house_300.svg",
      category: "Residential",
      location: "Gandhinagar",
      area: "5000 ft²",
      year: "2025 - 2027",
    },
    {
      id: 2,
      title: "SK Farm",
      description:
        "Luxury farmhouse design blending traditional and modern aesthetics.",
      imageUrl: "/assets/sk_farm.svg",
      category: "Farm House",
      location: "Ahmedabad",
      area: "8000 ft²",
      year: "2024 - 2026",
    },
    {
      id: 3,
      title: "THE PATEL MANSION",
      description:
        "Elegant mansion with sophisticated design and premium finishes.",
      imageUrl: "/assets/patel_mansion.svg",
      category: "Mansion",
      location: "Surat",
      area: "12000 ft²",
      year: "2023 - 2025",
    },
    {
      id: 4,
      title: "SARAN GROUP",
      description:
        "Commercial project with innovative design and functional spaces.",
      imageUrl: "/assets/saran_group.svg",
      category: "Commercial",
      location: "Mumbai",
      area: "25000 ft²",
      year: "2024 - 2026",
    },
    {
      id: 5,
      title: "THE PATEL MANSION",
      description:
        "Contemporary residential design with modern amenities and style.",
      imageUrl: "/assets/patel_mansion.svg",
      category: "Residential",
      location: "Pune",
      area: "10000 ft²",
      year: "2025 - 2027",
    },
  ];

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-8 md:px-14 pt-16 md:pt-28 flex flex-col justify-between">
      <div className="max-w-7xl mb-8">
        <h1 className="text-5xl font-light text-gray-400 mb-1">Our</h1>
        <h2 className="text-5xl font-bold text-gray-800">Projects</h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-8 mb-12">
        {currentProjects.map((project) => (
          <div
            key={project.id}
            className="group relative w-full h-96 overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:-translate-y-2"
          >
            {/* Image Container */}
            <div className="relative w-full h-full">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Bottom Left Title Overlay (Default State) */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-8 pb-6 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-white text-xl font-medium uppercase tracking-wide m-0">
                  {project.title}
                </h3>
              </div>

              {/* Hover Overlay - Full Background */}
              <div className="absolute inset-0 bg-black/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {/* Bottom Section Container */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end p-8">
                  {/* Left Side - Project Details */}
                  <div className="text-white max-w-2xl">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 uppercase tracking-wide text-white">
                      {project.title}
                    </h3>

                    {/* Project Meta Information */}
                    <div className="space-y-1 mb-3 text-sm opacity-90">
                      {project.location && (
                        <p className="text-gray-200">{project.location}</p>
                      )}
                      {project.area && (
                        <p className="text-gray-200">{project.area}</p>
                      )}
                      {project.year && (
                        <p className="text-gray-200">{project.year}</p>
                      )}
                    </div>
                  </div>

                  {/* Right Side - View More Button */}
                  <div className="flex items-end">
                    <button className="bg-transparent  text-white px-6 py-2 text-sm uppercase tracking-wide transition-all duration-300 whitespace-nowrap flex items-center gap-2">
                      View More
                      <span className="text-lg">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="max-w-7xl mx-auto w-full flex items-end lg:items-start lg:mt-auto mb-6 sm:mb-14">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Slide Counter */}
            <div className="flex items-center mr-4 sm:mr-6">
              <span className="text-gray-500 text-xl sm:text-2xl md:text-3xl font-light min-w-[20px] sm:min-w-[24px] text-right">
                {currentPage}
              </span>
              <div className="text-gray-200 text-xl sm:text-2xl md:text-3xl mx-2 sm:mx-4">
                /
              </div>
              <span className="text-gray-400 text-xl sm:text-2xl md:text-3xl font-light min-w-[20px] sm:min-w-[24px]">
                {totalPages}
              </span>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center">
              <motion.button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`w-10 h-10 sm:w-12 sm:h-12 border border-gray-300 flex items-center justify-center cursor-pointer transition-colors mr-3 sm:mr-4 ${
                  currentPage === 1
                    ? "opacity-50 cursor-not-allowed bg-gray-100"
                    : "hover:bg-gray-50"
                }`}
                whileHover={currentPage !== 1 ? { scale: 1.05 } : {}}
                whileTap={currentPage !== 1 ? { scale: 0.95 } : {}}
                aria-label="Previous page"
              >
                <Image
                  src="/assets/left_arrow.svg"
                  alt="Previous"
                  width={16}
                  height={16}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </motion.button>

              <motion.button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`w-10 h-10 sm:w-12 sm:h-12 border border-gray-300 flex items-center justify-center cursor-pointer transition-colors ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed bg-gray-100"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
                whileHover={currentPage !== totalPages ? { scale: 1.05 } : {}}
                whileTap={currentPage !== totalPages ? { scale: 0.95 } : {}}
                aria-label="Next page"
              >
                <Image
                  src="/assets/right_arrow.svg"
                  alt="Next"
                  width={16}
                  height={16}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Projects;
