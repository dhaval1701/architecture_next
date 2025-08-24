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
    { name: "ABOUT US", path: "/about" },
    { name: "CONTACT US", path: "/contact" },
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
    <header className="w-full h-16 sm:h-18 md:h-20 lg:h-22 absolute left-0 top-0 flex items-center justify-between px-3 sm:px-4 md:px-8 lg:px-12 xl:px-16 z-50 bg-white">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0">
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <Image
            src="/logos/full_logo.svg"
            alt="The 23rd Studio Logo"
            height={72}
            width={110}
            className="h-6 w-auto sm:h-7 md:h-16 lg:h-20 p-1 sm:p-2 md:p-2 transition-all duration-200"
            priority
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-2 lg:gap-4 xl:gap-6">
        {menuItems.map((item: MenuItem) => (
          <Link
            key={item.name}
            href={item.path}
            className={`
              relative text-gray-800 font-roboto text-xs lg:text-sm uppercase tracking-widest 
              cursor-pointer transition-all duration-300 py-2 px-2 lg:px-3 xl:px-4
              hover:text-gray-600 whitespace-nowrap
              before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 
              before:bg-black before:transform before:scale-x-0 before:transition-transform 
              before:duration-300 hover:before:scale-x-100
              after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
              after:bg-black after:transform after:scale-x-0 after:transition-transform 
              after:duration-300 hover:after:scale-x-100
              ${
                isActive(item.path)
                  ? "before:scale-x-100 after:scale-x-100 text-black font-medium"
                  : ""
              }
            `}
          >
            <span className="relative z-10">{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden z-50 relative p-2 flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 transition-colors duration-200"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        type="button"
      >
        <div className="relative w-5 h-5">
          {isMenuOpen ? (
            <X size={20} className="text-gray-800" />
          ) : (
            <Menu size={20} className="text-gray-800" />
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
        <div className="flex items-center justify-between p-4 border-b border-gray-200 h-16 sm:h-18">
          <Image
            src="/logos/full_logo.svg"
            alt="The 23rd Studio Logo"
            height={32}
            width={100}
            className="h-5 sm:h-6 w-auto"
          />
          <button
            onClick={closeMenu}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
            aria-label="Close menu"
          >
            <X size={18} className="text-gray-600" />
          </button>
        </div>

        {/* Drawer Menu Items */}
        <div className="flex flex-col pt-4 px-2">
          {menuItems.map((item: MenuItem) => (
            <Link
              key={item.name}
              href={item.path}
              className={`
                mx-2 mb-1 px-4 py-3 sm:py-4 text-gray-800 font-roboto text-sm sm:text-base 
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
        <div className="h-20" />
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
