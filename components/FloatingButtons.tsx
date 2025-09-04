"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ChevronUp, MoveUp } from "lucide-react";
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

  return (
    <div className="fixed bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 xl:bottom-12 right-6 z-50 flex items-center gap-2 sm:gap-3 md:gap-4">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`bg-gray-100 hover:bg-gray-200 text-gray-800 p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-3.5 rounded-full transition-all duration-300 flex items-center justify-center ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className=" transition-all duration-300 flex items-center justify-center"
        aria-label="Contact via WhatsApp"
      >
        <Image
          src="/assets/whatsapp.svg"
          alt="WhatsApp"
          width={20}
          height={20}
          className="w-7 h-7 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-13 xl:h-13"
        />
      </button>
    </div>
  );
}
