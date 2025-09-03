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
    <>
      <header className="w-full h-14 sm:h-14 md:h-16 lg:h-18 xl:h-20 2xl:h-26 3xl:h-28 4xl:h-50 5xl:h-56 absolute left-0 top-0 flex items-center justify-between px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-36 3xl:px-42 4xl:px-48 5xl:px-56 z-50 mt-2 bg-white">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <Image
              src="/logos/full_logo.svg"
              alt="The 23rd Studio Logo"
              height={72}
              width={110}
              className="h-14 w-auto sm:h-7 md:h-16 lg:h-20 xl:h-26 2xl:h-32 3xl:h-38 4xl:h-48 5xl:h-56 py-1 sm:py-1.5 md:py-2 lg:py-2.5 xl:py-3 2xl:py-6 3xl:py-6 4xl:py-6  transition-all duration-200"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4 xl:gap-6 2xl:gap-8 3xl:gap-10 4xl:gap-12 5xl:gap-22">
          {menuItems.map((item: MenuItem) => (
            <Link
              key={item.name}
              href={item.path}
              className={`
                relative font-roboto text-xs sm:text-[10px] md:text-[10px] lg:text-[12px] xl:text-[13px] 2xl:text-[13px] 3xl:text-[18px] 4xl:text-[25px] 5xl:text-[34px] uppercase tracking-widest 
                cursor-pointer transition-all duration-300 py-0 px-2 sm:px-3 md:px-4 lg:px-4 xl:px-6 2xl:px-4 3xl:px-6 4xl:px-6 5xl:px-10
                whitespace-nowrap
                ${
                  isActive(item.path)
                    ? "text-black font-semibold"
                    : "text-gray-500 hover:text-gray-700"
                }
              `}

              // className={`
              //   relative text-gray-800 font-roboto text-xs sm:text-[10px] md:text-[10px] lg:text-[12px] xl:text-[13px] 2xl:text-[13px] 3xl:text-[18px] 4xl:text-[25px] 5xl:text-[34px] uppercase tracking-widest
              //   cursor-pointer transition-all duration-300 py-0 px-2 sm:px-3 md:px-4 lg:px-4 xl:px-6 2xl:px-4 3xl:px-6 4xl:px-6 5xl:px-10
              //   whitespace-nowrap
              //   ${
              //     isActive(item.path)
              //       ? "border-t-2 3xl:border-t-4 border-b-2 3xl:border-b-4 border-black text-black font-medium"
              //       : "border-t-2 3xl:border-t-4 border-b-2 3xl:border-b-4 border-transparent hover:border-black hover:text-gray-700"
              //   }
              // `}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 relative p-2 flex items-center justify-center w-10 h-10 sm:w-10 sm:h-10 rounded-md hover:bg-gray-100 transition-colors duration-200"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          type="button"
        >
          <div className="relative w-8 h-8 sm:w-5 sm:h-5">
            {isMenuOpen ? (
              <X size={20} className="text-gray-800 w-full h-full" />
            ) : (
              <Menu size={20} className="text-gray-800 w-full h-full" />
            )}
          </div>
        </button>
      </header>

      {/* Mobile Navigation Dropdown - Top to Bottom */}
      <div
        className={`
          fixed top-16 sm:top-16 left-0 w-full bg-white shadow-lg border-b border-gray-200
          transform transition-all duration-300 ease-in-out md:hidden z-40
          ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }
        `}
      >
        {/* Menu Items */}
        <div className="flex flex-col py-4 px-6">
          {menuItems.map((item: MenuItem) => (
            <Link
              key={item.name}
              href={item.path}
              className={`
                px-4 py-3 text-gray-800 font-roboto text-sm sm:text-base 
                uppercase tracking-widest cursor-pointer rounded-lg transition-all duration-200
                hover:bg-gray-100 hover:text-black active:bg-gray-200 mb-2
                ${
                  isActive(item.path)
                    ? "bg-gray-100 text-black font-medium"
                    : ""
                }
              `}
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Blurred Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden transition-all duration-300"
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
    </>
  );
};

export default Header;
