"use client";
import React, { useEffect, useState } from "react";
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
    src: "/gallery/image_1.webp",
    alt: "Modern Interior 1",
    size: "wide",
  },
  {
    id: 2,
    src: "/gallery/image_2.webp",
    alt: "Modern Interior 2",
    size: "single",
  },
  {
    id: 3,
    src: "/gallery/image_3.webp",
    alt: "Modern Interior 3",
    size: "single",
  },
  {
    id: 4,
    src: "/gallery/image_4.webp",
    alt: "Modern Interior 4",
    size: "tall",
  },
  {
    id: 5,
    src: "/gallery/image_5.webp",
    alt: "Modern Interior 5",
    size: "single",
  },
  {
    id: 6,
    src: "/gallery/image_6.webp",
    alt: "Modern Interior 6",
    size: "single",
  },
  {
    id: 7,
    src: "/gallery/image_7.webp",
    alt: "Modern Interior 7",
    size: "wide",
  },
  {
    id: 8,
    src: "/gallery/image_8.webp",
    alt: "Modern Interior 8",
    size: "wide",
  },
  {
    id: 9,
    src: "/gallery/image_9.webp",
    alt: "Modern Interior 9",
    size: "single",
  },
  {
    id: 10,
    src: "/gallery/image_10.webp",
    alt: "Modern Interior 10",
    size: "single",
  },
  {
    id: 11,
    src: "/gallery/image_11.webp",
    alt: "Modern Interior 11",
    size: "tall",
  },
  {
    id: 12,
    src: "/gallery/image_12.webp",
    alt: "Modern Interior 12",
    size: "single",
  },
  {
    id: 13,
    src: "/gallery/image_13.webp",
    alt: "Modern Interior 13",
    size: "single",
  },
  {
    id: 14,
    src: "/gallery/image_14.webp",
    alt: "Modern Interior 14",
    size: "wide",
  },
  {
    id: 15,
    src: "/gallery/image_15.webp",
    alt: "Modern Interior 15",
    size: "wide",
  },
  {
    id: 16,
    src: "/gallery/image_16.webp",
    alt: "Modern Interior 16",
    size: "single",
  },
  {
    id: 17,
    src: "/gallery/image_17.webp",
    alt: "Modern Interior 17",
    size: "single",
  },
  {
    id: 18,
    src: "/gallery/image_18.webp",
    alt: "Modern Interior 18",
    size: "tall",
  },
  {
    id: 19,
    src: "/gallery/image_19.webp",
    alt: "Modern Interior 19",
    size: "single",
  },
  {
    id: 20,
    src: "/gallery/image_20.webp",
    alt: "Modern Interior 20",
    size: "single",
  },
  {
    id: 21,
    src: "/gallery/image_21.webp",
    alt: "Modern Interior 21",
    size: "wide",
  },
  {
    id: 22,
    src: "/gallery/image_22.webp",
    alt: "Modern Interior 22",
    size: "wide",
  },
  {
    id: 23,
    src: "/gallery/image_23.webp",
    alt: "Modern Interior 23",
    size: "single",
  },
  {
    id: 24,
    src: "/gallery/image_24.webp",
    alt: "Modern Interior 24",
    size: "single",
  },
  {
    id: 25,
    src: "/gallery/image_25.webp",
    alt: "Modern Interior 25",
    size: "tall",
  },
  {
    id: 26,
    src: "/gallery/image_26.webp",
    alt: "Modern Interior 26",
    size: "single",
  },
  {
    id: 27,
    src: "/gallery/image_27.webp",
    alt: "Modern Interior 27",
    size: "single",
  },
  {
    id: 28,
    src: "/gallery/image_28.webp",
    alt: "Modern Interior 28",
    size: "wide",
  },
];

const imagesPerPage = 7;

// Helper function to arrange images for mobile layout ONLY
const arrangeImagesForMobileLayout = (images: ImageData[]): ImageData[] => {
  const singles = images.filter((img) => img.size === "single");
  const wides = images.filter((img) => img.size === "wide");
  const talls = images.filter((img) => img.size === "tall");

  // Arrange in the specific pattern: single, tall, single, wide, single, single, wide
  const arrangedImages: ImageData[] = [];

  // Position 0: single
  if (singles[0]) arrangedImages[0] = singles[0];
  // Position 1: tall
  if (talls[0]) arrangedImages[1] = talls[0];
  // Position 2: single
  if (singles[1]) arrangedImages[2] = singles[1];
  // Position 3: wide
  if (wides[0]) arrangedImages[3] = wides[0];
  // Position 4: single
  if (singles[2]) arrangedImages[4] = singles[2];
  // Position 5: single
  if (singles[3]) arrangedImages[5] = singles[3];
  // Position 6: wide
  if (wides[1]) arrangedImages[6] = wides[1];

  // Filter out undefined values
  return arrangedImages.filter(Boolean);
};

// Helper function to get mobile-specific classes based on position and actual size
const getMobileLayoutClasses = (
  index: number,
  size: ImageData["size"]
): string => {
  const position = index % 7; // 7-image pattern: 0,1,2,3,4,5,6 then repeats

  switch (position) {
    case 0: // First position - should be single
      return "col-span-1 row-span-1";
    case 1: // Second position - should be tall (covers 2 rows)
      return size === "tall"
        ? "col-span-1 row-span-2"
        : "col-span-1 row-span-1";
    case 2: // Third position - should be single
      return "col-span-1 row-span-1";
    case 3: // Fourth position - should be wide (covers 2 columns)
      return size === "wide"
        ? "col-span-2 row-span-1"
        : "col-span-1 row-span-1";
    case 4: // Fifth position - should be single
      return "col-span-1 row-span-1";
    case 5: // Sixth position - should be single
      return "col-span-1 row-span-1";
    case 6: // Seventh position - should be wide (covers 2 columns)
      return size === "wide"
        ? "col-span-2 row-span-1"
        : "col-span-1 row-span-1";
    default:
      return "col-span-1 row-span-1";
  }
};

// Original grid mapping for desktop (your old layout)
const getDesktopGridClasses = (size: ImageData["size"]): string => {
  switch (size) {
    case "wide": // spans 2 columns
      return "col-span-2 row-span-1";
    case "tall": // spans 2 rows
      return "col-span-1 row-span-2";
    case "large": // spans 2x2
      return "col-span-2 row-span-2";
    case "single":
    default:
      return "col-span-1 row-span-1";
  }
};

// Updated Grid mapping - mobile custom layout + desktop original layout
const getGridClasses = (
  size: ImageData["size"],
  index: number,
  isMobileLayout: boolean
): string => {
  if (isMobileLayout) {
    // Mobile: Use custom layout
    const mobileClasses = getMobileLayoutClasses(index, size);
    const desktopClasses = `md:${getDesktopGridClasses(size)}`;
    return `${mobileClasses} ${desktopClasses}`;
  } else {
    // Desktop: Use original layout
    return getDesktopGridClasses(size);
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
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const totalPages = Math.ceil(defaultImages.length / imagesPerPage);

  // Check if screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const getCurrentPageImages = (): ImageData[] => {
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const pageImages = defaultImages.slice(startIndex, endIndex);

    // Only arrange for mobile layout if it's actually mobile
    return isMobile ? arrangeImagesForMobileLayout(pageImages) : pageImages;
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
      <div className="mt-2 md:mt-0 mb-4 md:mb-6 xl:mb-10 3xl:mb-16 4xl:mb-24">
        <p className="text-[#BDBDBD] text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px] 3xl:text-7xl 4xl:text-9xl font-light mb-1 sm:mb-2 lg:mb-3 xl:mb-4 3xl:mb-6 4xl:mb-8 leading-[16px]">
          Photo
        </p>
        <p className="text-[#333333] text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-[64px] 3xl:text-7xl 4xl:text-9xl font-bold leading-tight">
          Gallery
        </p>
      </div>

      {/* Gallery Grid - Updated with responsive layouts */}
      <div className="mx-auto flex-1 mb-10 w-full 4xl:mb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-2 md:grid-cols-5 gap-4 2xl:gap-6 3xl:gap-8 auto-rows-[200px] md:auto-rows-[220px] lg:auto-rows-[250px] 2xl:auto-rows-[280px] 3xl:auto-rows-[350px] 4xl:auto-rows-[380px]"
            style={{ gridAutoFlow: "row dense" }}
          >
            {currentImages.map((image, index) => (
              <motion.div
                key={`${currentPage}-${image.id}`}
                variants={imageVariants}
                className={`relative overflow-hidden group cursor-pointer bg-gray-200 ${getGridClasses(
                  image.size,
                  index,
                  isMobile
                )}`}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleImageClick(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
                  loading="lazy"
                  // placeholder="blur"
                  // blurDataURL={image.src}
                  quality={100}
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

      {/* Modal for Large Image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[9999] flex flex-col p-4 overflow-y-auto"
            onClick={() => {
              closeModal();
            }}
          >
            {/* Blurred Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-md z-[9998]"
            />

            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              className="self-end z-[10001] mb-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-200 backdrop-blur-sm border border-white/20"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="relative flex-1 flex items-center justify-center min-h-0 z-[10000] cursor-pointer"
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                onClick={(e) => e.stopPropagation()}
                className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl"
                loading="lazy"
                blurDataURL={selectedImage.src}
                placeholder="blur"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
