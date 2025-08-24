"use client";

import { ChevronDown } from "lucide-react";

interface ScrollDownButtonProps {
  scrollAmount?: number; // pixels to scroll, defaults to viewport height
  buttonText?: string; // text to display on the button
  isSimple?: boolean; // whether to use simple chevron or styled button
}

export default function ScrollDownButton({
  scrollAmount,
  buttonText = "Scroll Down",
  isSimple = true,
}: ScrollDownButtonProps) {
  const handleScrollDown = () => {
    window.scrollBy({
      top: scrollAmount || window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div onClick={handleScrollDown} aria-label="Scroll down">
      {isSimple ? (
        <div className="animate-bounce mt-6 cursor-pointer">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      ) : (
        <button className="bg-white text-black font-medium px-10 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-lg flex items-center gap-2">
          {buttonText}
          <ChevronDown className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
