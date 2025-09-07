import React from "react";
import Image from "next/image";

interface ButtonV1Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "light" | "dark";
  text?: string;
  arrowSrc?: string;
}

const ButtonV1: React.FC<ButtonV1Props> = ({
  theme = "light",
  text = "VIEW PROJECT",
  arrowSrc = "/assets/right_arrow.svg",
  className = "",
  ...rest
}) => {
  // Theme-based styles
  const themeStyles = {
    light: {
      background: "bg-white",
      text: "text-gray-800",
    },
    dark: {
      background: "bg-[#333333]",
      text: "text-white",
    },
  };

  const currentTheme = themeStyles[theme];

  return (
    <button
      className={`
        group flex items-center backdrop-blur-sm
        px-4 md:px-6 lg:px-8 xl:px-8 2xl:px-8 3xl:px-10 4xl:px-12 5xl:px-16
        py-3 md:py-3 lg:py-4 xl:py-4 2xl:py-3.5 3xl:py-6 4xl:py-6 5xl:py-6
        ${currentTheme.background}
        transition-all duration-300 cursor-pointer
        ${className}
      `}
      {...rest}
    >
      <span
        className={`
        text-[8px] md:text-[10px] lg:text-[10px] 
        xl:text-[10px] 2xl:text-[12px] 3xl:text-[16px] 4xl:text-[18px] 5xl:text-[28px]
        uppercase tracking-[2px] lg:tracking-[4px] font-medium
        mr-1.5 sm:mr-2 md:mr-3 lg:mr-4 xl:mr-5 2xl:mr-6 3xl:mr-7 4xl:mr-8
        ${currentTheme.text}
      `}
      >
        {text}
      </span>

      <Image
        src={arrowSrc}
        alt="Next"
        width={16}
        height={16}
        className={`
          w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 
          lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 3xl:w-9 3xl:h-9 4xl:w-10 4xl:h-10
          transition-transform duration-300 ease-in-out
          group-hover:translate-x-1 sm:group-hover:translate-x-1.5 md:group-hover:translate-x-2
          ${theme === "dark" ? "filter invert" : ""}
        `}
      />
    </button>
  );
};

export default ButtonV1;
