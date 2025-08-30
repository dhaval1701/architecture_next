"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  name: string;
  path: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const menuItems: MenuItem[] = [
    { name: "HOME", path: "/" },
    { name: "GALLERY", path: "/gallery" },
    { name: "PROJECTS", path: "/projects" },
    { name: "ABOUT US", path: "/about-us" },
    { name: "CONTACT US", path: "/contact-us" },
  ];

  const isActive = (path: string): boolean => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  // Close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20 2xl:h-24 3xl:h-28 4xl:h-50 absolute left-0 top-0 flex items-center justify-between px-3 sm:px-6 md:px-8 lg:px-24 xl:px-20 2xl:px-24 3xl:px-32 4xl:px-40 z-50 bg-white">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0">
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <Image
            src="/logos/full_logo.svg"
            alt="The 23rd Studio Logo"
            height={72}
            width={110}
            className="h-6 w-auto sm:h-7 md:h-8 lg:h-20 xl:h-26 2xl:h-32 3xl:h-38 4xl:h-48 p-1 sm:p-1.5 md:p-2 lg:p-2.5 xl:p-3 2xl:p-6 3xl:p-5 4xl:p-4 transition-all duration-200"
            priority
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-2 lg:gap-4 xl:gap-6 2xl:gap-8 3xl:gap-10 4xl:gap-12">
        {menuItems.map((item: MenuItem) => (
          <Link
            key={item.name}
            href={item.path}
            className={`
    relative text-gray-800 font-roboto text-xs sm:text-sm md:text-base lg:text-[12px] xl:text-[13px] 2xl:text-[13px] 3xl:text-3xl 4xl:text-4xl uppercase tracking-widest 
    cursor-pointer transition-all duration-300 py-0 px-2 sm:px-3 md:px-4 lg:px-4 xl:px-6 2xl:px-4 3xl:px-10 4xl:px-12
    whitespace-nowrap
    ${
      isActive(item.path)
        ? "border-t-2 3xl:border-t-4 border-b-2 3xl:border-b-4 border-black text-black font-medium"
        : "border-t-2 3xl:border-t-4 border-b-2 3xl:border-b-4 border-transparent hover:border-black hover:text-gray-700"
    }
  `}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden z-50 relative p-2 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md hover:bg-gray-100 transition-colors duration-200"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        type="button"
      >
        <div className="relative w-4 h-4 sm:w-5 sm:h-5">
          {isMenuOpen ? (
            <X size={20} className="text-gray-800 w-full h-full" />
          ) : (
            <Menu size={20} className="text-gray-800 w-full h-full" />
          )}
        </div>
      </button>

      {/* Mobile Navigation Drawer */}
      <div
        className={`
          fixed top-0 right-0 h-full w-full max-w-xs sm:max-w-sm bg-white shadow-2xl 
          transform transition-transform duration-300 ease-in-out md:hidden z-40
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 h-12 sm:h-14">
          <Image
            src="/logos/full_logo.svg"
            alt="The 23rd Studio Logo"
            height={32}
            width={100}
            className="h-4 sm:h-5 w-auto"
          />
          <button
            onClick={closeMenu}
            className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
            aria-label="Close menu"
          >
            <X size={16} className="text-gray-600 sm:w-4 sm:h-4" />
          </button>
        </div>

        {/* Drawer Menu Items */}
        <div className="flex flex-col pt-3 sm:pt-4 px-2">
          {menuItems.map((item: MenuItem) => (
            <Link
              key={item.name}
              href={item.path}
              className={`
                mx-2 mb-1 px-3 sm:px-4 py-2.5 sm:py-3 text-gray-800 font-roboto text-sm sm:text-base 
                uppercase tracking-widest cursor-pointer rounded-lg transition-all duration-200
                hover:bg-gray-100 hover:text-black active:bg-gray-200
                ${
                  isActive(item.path)
                    ? "bg-gray-100 text-black font-medium border-l-4 border-l-black"
                    : ""
                }
              `}
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Optional: Add some space at bottom for better UX */}
        <div className="h-16 sm:h-20" />
      </div>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden transition-opacity duration-300"
          onClick={closeMenu}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              closeMenu();
            }
          }}
          aria-label="Close menu overlay"
        />
      )}
    </header>
  );
};

export default Header;
