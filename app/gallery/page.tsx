"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { Expand } from "lucide-react";

interface ImageData {
  id: number;
  src: string;
  alt: string;
  size: "single" | "wide" | "tall" | "large";
}

const defaultImages: ImageData[] = [
  {
    id: 1,
    src: "/assets/sarpanch_house_300.svg",
    alt: "Modern Interior 1",
    size: "wide",
  },
  {
    id: 2,
    src: "/assets/sk_farm.svg",
    alt: "Modern Interior 2",
    size: "single",
  },
  {
    id: 3,
    src: "/assets/saran_group.svg",
    alt: "Modern Interior 3",
    size: "single",
  },
  {
    id: 4,
    src: "/assets/patel_mansion.svg",
    alt: "Modern Interior 4",
    size: "tall",
  },
  {
    id: 5,
    src: "/assets/sarpanch_house_300.svg",
    alt: "Modern Interior 5",
    size: "single",
  },
  {
    id: 6,
    src: "/assets/sk_farm.svg",
    alt: "Modern Interior 6",
    size: "single",
  },
  {
    id: 7,
    src: "/assets/saran_group.svg",
    alt: "Modern Interior 7",
    size: "wide",
  },
  {
    id: 8,
    src: "/assets/patel_mansion.svg",
    alt: "Modern Interior 8",
    size: "tall",
  },
];

const imagesPerPage = 7;

// Grid mapping for 5-column layout
const getGridClasses = (size: ImageData["size"]): string => {
  switch (size) {
    case "wide": // spans 2 columns
      return "col-span-1 row-span-1 md:col-span-2 md:row-span-1";
    case "tall": // spans 2 rows
      return "col-span-1 row-span-1 md:col-span-1 md:row-span-2";
    case "large": // spans 2x2
      return "col-span-1 row-span-1 md:col-span-2 md:row-span-2";
    case "single":
    default:
      return "col-span-1 row-span-1";
  }
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.07, staggerDirection: -1 },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: { opacity: 0, y: -40, scale: 0.8, transition: { duration: 0.4 } },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2 },
  },
};

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const Gallery: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const totalPages = Math.ceil(defaultImages.length / imagesPerPage);

  const getCurrentPageImages = (): ImageData[] => {
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    return defaultImages.slice(startIndex, endIndex);
  };

  const currentImages = getCurrentPageImages();

  const handlePageChange = (page: number): void => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const handleImageClick = (image: ImageData): void => {
    setSelectedImage(image);
  };

  const closeModal = (): void => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col justify-between">
      {/* Header - Only increase text size for 4xl */}
      <div className="mb-6 sm:mb-8 w-full 3xl:mb-12 4xl:mb-16">
        <h1 className="text-2xl sm:text-4xl md:text-5xl 3xl:text-6xl 4xl:text-8xl font-light text-gray-400 mb-1 break-words 4xl:mb-3">
          Photo
        </h1>
        <h2 className="text-2xl sm:text-4xl md:text-5xl 3xl:text-6xl 4xl:text-8xl font-bold text-gray-800 break-words">
          Gallery
        </h2>
      </div>

      {/* Gallery Grid - Updated with 2xl row heights */}
      <div className="mx-auto flex-1 mb-10 w-full 4xl:mb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 2xl:gap-6 3xl:gap-8 auto-rows-[200px] md:auto-rows-[220px] lg:auto-rows-[250px] 2xl:auto-rows-[280px] 3xl:auto-rows-[320px] 4xl:auto-rows-[380px]"
            style={{ gridAutoFlow: "row dense" }}
          >
            {currentImages.map((image) => (
              <motion.div
                key={`${currentPage}-${image.id}`}
                variants={imageVariants}
                className={`relative overflow-hidden group cursor-pointer bg-gray-200 ${getGridClasses(
                  image.size
                )}`}
                whileHover={{ scale: 1.03, zIndex: 10 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleImageClick(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-100"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1536px) 50vw, (min-width: 1537px) 25vw"
                />

                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src="/expand_icon.svg"
                    alt="Expand"
                    width={28}
                    height={28}
                    className="drop-shadow-lg"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Custom Pagination Design - Increase sizes for 4xl */}
      <div className="mx-auto w-full flex items-end lg:items-start lg:mt-auto my-6 sm:mt-18 3xl:mt-20 4xl:mt-24">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {/* Slide Counter */}
          <div className="flex items-center mr-4 sm:mr-6 4xl:mr-8">
            <span className="text-gray-500 text-xl sm:text-2xl md:text-3xl 3xl:text-4xl 4xl:text-5xl font-light min-w-[20px] sm:min-w-[24px] 3xl:min-w-[30px] 4xl:min-w-[40px] text-right">
              {currentPage}
            </span>
            <div className="text-gray-200 text-xl sm:text-2xl md:text-3xl 3xl:text-4xl 4xl:text-5xl mx-2 sm:mx-4 3xl:mx-5 4xl:mx-6">
              /
            </div>
            <span className="text-gray-400 text-xl sm:text-2xl md:text-3xl 3xl:text-4xl 4xl:text-5xl font-light min-w-[20px] sm:min-w-[24px] 3xl:min-w-[30px] 4xl:min-w-[40px]">
              {totalPages}
            </span>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center">
            <motion.button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`w-10 h-10 sm:w-12 sm:h-12 3xl:w-16 3xl:h-16 4xl:w-20 4xl:h-20 border border-gray-300 flex items-center justify-center cursor-pointer transition-colors mr-3 sm:mr-4 4xl:mr-6 ${
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
                className="w-4 h-4 sm:w-5 sm:h-5 3xl:w-6 3xl:h-6 4xl:w-8 4xl:h-8"
              />
            </motion.button>
            <motion.button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 sm:w-12 sm:h-12 3xl:w-16 3xl:h-16 4xl:w-20 4xl:h-20 border border-gray-300 flex items-center justify-center cursor-pointer transition-colors ${
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
                className="w-4 h-4 sm:w-5 sm:h-5 3xl:w-6 3xl:h-6 4xl:w-8 4xl:h-8"
              />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Modal for Large Image - Increase modal size for 4xl */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 3xl:p-8 4xl:p-12"
            onClick={closeModal}
          >
            {/* Blurred Background */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />

            {/* Close Button - Outside image, top right */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 3xl:top-8 3xl:right-8 4xl:top-12 4xl:right-12 z-20 p-3 3xl:p-4 4xl:p-6 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-200 backdrop-blur-sm border border-white/20"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6 3xl:w-8 3xl:h-8 4xl:w-10 4xl:h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Content */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative max-w-4xl 3xl:max-w-6xl 4xl:max-w-[100rem] max-h-[90vh] rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Large Image */}
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1920}
                height={1440}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
