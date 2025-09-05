"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import Image from "next/image";

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 40%
  useEffect(() => {
    const toggleVisibility = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.pageYOffset / scrollHeight) * 100;

      if (scrolled > 40) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // WhatsApp redirect
  const openWhatsApp = () => {
    window.open("https://wa.me/7203892651", "_blank");
  };

  // Instagram redirect
  const openInstagram = () => {
    window.open("https://www.instagram.com/the23rd_studio/", "_blank");
  };

  return (
    <div className="fixed bottom-6 md:bottom-8 lg:bottom-10 xl:bottom-12 2xl:bottom-14 3xl:bottom-16 4xl:bottom-18 right-2 3xl:right-8 z-50 flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className={`transition-all duration-500 ease-in-out transform flex items-center justify-center group ${
          isVisible ? "translate-y-0" : "translate-y-12"
        }`}
        aria-label="Contact via WhatsApp"
      >
        <Image
          src="/assets/whatsapp.svg"
          alt="WhatsApp"
          width={20}
          height={20}
          className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11 2xl:w-12 2xl:h-12 3xl:w-13 3xl:h-13 4xl:w-14 4xl:h-14 transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-110"
        />
      </button>

      {/* Instagram Button */}
      <button
        onClick={openInstagram}
        className={`transition-all duration-500 ease-in-out transform flex items-center justify-center group ${
          isVisible ? "translate-y-0" : "translate-y-12"
        }`}
        aria-label="Follow on Instagram"
      >
        <Image
          src="/assets/instagram.svg"
          alt="Instagram"
          width={20}
          height={20}
          className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11 2xl:w-12 2xl:h-12 3xl:w-13 3xl:h-13 4xl:w-14 4xl:h-14 transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-110"
        />
      </button>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`bg-gray-100 hover:bg-gray-200 text-gray-800 p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-3.5 rounded-full transition-all duration-500 ease-in-out transform flex items-center justify-center ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-95 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
      </button>
    </div>
  );
}
