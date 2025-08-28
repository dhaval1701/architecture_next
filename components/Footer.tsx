// components/Footer.jsx
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="text-white pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-16 2xl:pt-20 3xl:pt-24 4xl:pt-32 pb-2 sm:pb-3 md:pb-4 lg:pb-5 xl:pb-6 2xl:pb-8 3xl:pb-10 4xl:pb-12 px-3 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-24 3xl:px-32 4xl:px-40"
      style={{ background: "#333333" }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 3xl:gap-24 4xl:gap-32 mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-24 3xl:mb-32 4xl:mb-40">
        {/* Logo Section */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-10 3xl:mb-12 4xl:mb-16">
            <div className="mr-3 sm:mr-4 md:mr-5 lg:mr-6 xl:mr-8 2xl:mr-10 3xl:mr-12 4xl:mr-16">
              <Image
                src="/logos/full_logo_white.svg"
                alt="Logo"
                width={200}
                height={250}
                className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 2xl:h-40 3xl:h-48 4xl:h-56 w-auto"
              />
            </div>
          </div>
        </div>

        {/* Information Links */}
        <div>
          <div className="font-roboto-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-10 3xl:mb-12 4xl:mb-16">
            Information
          </div>
          <ul className="space-y-1 sm:space-y-1.5 md:space-y-2 lg:space-y-2.5 xl:space-y-3 2xl:space-y-4 3xl:space-y-5 4xl:space-y-6">
            {["Home", "Gallery", "Projects", "About us", "Contacts"].map(
              (item) => (
                <li
                  key={item}
                  className="font-roboto-medium text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl hover:text-gray-300 cursor-pointer transition-colors duration-200"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <div className="font-roboto-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-10 3xl:mb-12 4xl:mb-16">
            Contacts
          </div>
          <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-8 3xl:mb-10 4xl:mb-12 flex items-start">
            <MapPin
              size={16}
              className="mt-1 mr-2 sm:mr-3 md:mr-4 lg:mr-5 xl:mr-6 2xl:mr-7 3xl:mr-8 4xl:mr-10 flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 3xl:w-10 3xl:h-10 4xl:w-12 4xl:h-12"
            />
            <div className="font-roboto-medium text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl">
              417, THE 23ʳᵈ STUDIO, Shilp Arcad, nr. Hanspura circle road, S. P.
              Ring Road, Ahmedabad, 382330
            </div>
          </div>
          <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-8 3xl:mb-10 4xl:mb-12 flex items-center">
            <Phone
              size={16}
              className="mr-2 sm:mr-3 md:mr-4 lg:mr-5 xl:mr-6 2xl:mr-7 3xl:mr-8 4xl:mr-10 flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 3xl:w-10 3xl:h-10 4xl:w-12 4xl:h-12"
            />
            <div className="font-roboto-medium text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl">
              720 389 2651
            </div>
          </div>
          <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-8 3xl:mb-10 4xl:mb-12 flex items-center">
            <Phone
              size={16}
              className="mr-2 sm:mr-3 md:mr-4 lg:mr-5 xl:mr-6 2xl:mr-7 3xl:mr-8 4xl:mr-10 flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 3xl:w-10 3xl:h-10 4xl:w-12 4xl:h-12"
            />
            <div className="font-roboto-medium text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl">
              905 454 2360
            </div>
          </div>
          <div className="flex items-center">
            <Mail
              size={16}
              className="mr-2 sm:mr-3 md:mr-4 lg:mr-5 xl:mr-6 2xl:mr-7 3xl:mr-8 4xl:mr-10 flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 3xl:w-10 3xl:h-10 4xl:w-12 4xl:h-12"
            />
            <div className="font-roboto-medium text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl break-all">
              info.23rdstudio@gmail.com
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <div className="font-roboto-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-10 3xl:mb-12 4xl:mb-16">
            Social Media
          </div>
          <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8 3xl:gap-10 4xl:gap-12 mb-6 sm:mb-7 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-16 3xl:mb-20 4xl:mb-24">
            <a
              href="#"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 4xl:w-16 4xl:h-16" />
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 4xl:w-16 4xl:h-16" />
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 4xl:w-16 4xl:h-16" />
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 4xl:w-16 4xl:h-16" />
            </a>
          </div>
          <div className="mt-6 sm:mt-7 md:mt-8 lg:mt-10 xl:mt-12 2xl:mt-16 3xl:mt-20 4xl:mt-24">
            <Image
              src="/logos/logo_background.svg"
              alt="Logo"
              width={130}
              height={250}
              className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-36 3xl:h-44 4xl:h-52 w-auto opacity-70"
            />
          </div>
        </div>
      </div>

      <div className="text-center font-sans text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl border-t border-gray-700 pt-4 sm:pt-5 md:pt-6 lg:pt-7 xl:pt-8 2xl:pt-10 3xl:pt-12 4xl:pt-16">
        © Copyright 2025 by <span className="font-bold">The 23rd Studio</span>.
        All Rights Reserved | Design & Developed by{" "}
        <span className="font-bold">Rutik Parmar</span>
      </div>
    </footer>
  );
};

export default Footer;
