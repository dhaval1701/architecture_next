import React from "react";
import { MoveRight } from "lucide-react";

// Props interface
interface ButtonProps {
  text: string;
  variant?: "light" | "dark";
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const ButtonV1: React.FC<ButtonProps> = ({
  text,
  variant = "light",
  onClick,
  className = "",
  icon,
  ...props
}) => {
  // Base styles with better responsive design
  const base = `
    relative flex items-center justify-center gap-2 cursor-pointer 
    transition-all duration-200 group focus:outline-none
    px-6 sm:px-8 md:px-10 lg:px-4
    h-12 sm:h-14 md:h-16 lg:h-12 xl:h-20
    min-w-[100px] 4xl:min-w-[320px]
    whitespace-nowrap
  `;

  const variants = {
    light: `
      bg-white border-2 border-blue-500 hover:bg-blue-50 
      focus:ring-2 focus:ring-blue-300 text-gray-800
    `,
    dark: `
      bg-gray-800 border-0 hover:bg-gray-900 
      focus:ring-2 focus:ring-gray-500 text-white
    `,
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      onClick={onClick}
      type="button"
    >
      {/* Text with responsive sizing and proper spacing */}
      <span
        className={`
        uppercase tracking-[0.15em] font-light flex-1 text-center
        text-[8px] 4xl:text-lg
      `}
      >
        {text}
      </span>

      {/* Icon with responsive sizing */}
      <div className="flex-shrink-0">
        {icon ?? (
          <MoveRight
            strokeWidth={0.85}
            color={variant === "dark" ? "#fff" : "#000"}
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-4    lg:h-7"
          />
        )}
      </div>

      {/* Hover Overlay */}
      <span
        className={`
          absolute inset-0 transition-opacity opacity-0 group-hover:opacity-10 
          ${variant === "light" ? "bg-gray-800" : "bg-white"}
        `}
        aria-hidden="true"
      />
    </button>
  );
};

export default ButtonV1;
