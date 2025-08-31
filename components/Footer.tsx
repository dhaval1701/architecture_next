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
      className="text-white px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 3xl:px-32 4xl:px-40
                 pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-16 3xl:pt-24 4xl:pt-32
                 pb-4 sm:pb-6 md:pb-8 lg:pb-4"
      style={{ background: "#333333" }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
        {/* Logo Section */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <Image
            src="/logos/full_logo_white.svg"
            alt="Logo"
            width={180}
            height={200}
            className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto mb-6 lg:mb-10"
          />
        </div>

        {/* Information Links */}
        <div>
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6">
            Information
          </h3>
          <ul className="space-y-1 sm:space-y-2 lg:space-y-3">
            {["Home", "Gallery", "Projects", "About us", "Contacts"].map(
              (item) => (
                <li
                  key={item}
                  className="text-xs sm:text-sm md:text-base lg:text-lg hover:text-gray-300 cursor-pointer transition-colors font-medium"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6">
            Contacts
          </h3>

          <div className="flex items-start mb-3 sm:mb-4">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
            <p className="text-xs sm:text-sm md:text-base font-medium">
              417, THE 23ʳᵈ STUDIO, Shilp Arcad, nr. Hanspura circle road, S. P.
              Ring Road, Ahmedabad, 382330
            </p>
          </div>

          <div className="flex items-start mb-3 sm:mb-4">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
            <div className="text-xs sm:text-sm md:text-base font-medium space-y-1">
              <a href="tel:+917203892651" className="hover:underline">
                720 389 2651
              </a>
              <br />
              <a href="tel:+919054542360" className="hover:underline">
                905 454 2360
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
            <a
              href="mailto:info.23rdstudio@gmail.com"
              className="text-xs sm:text-sm md:text-base font-medium hover:underline break-all"
            >
              info.23rdstudio@gmail.com
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6">
            Social Media
          </h3>
          <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-6">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-gray-300 transition-colors"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
              </a>
            ))}
          </div>
          <Image
            src="/logos/logo_background.svg"
            alt="Logo"
            width={120}
            height={120}
            className="h-10 sm:h-12 md:h-24 lg:h-40 w-auto opacity-70"
          />
        </div>
      </div>

      <div className="text-[#C8C8C8A6] text-center text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg pt-4 sm:pt-6 lg:pt-10">
        © Copyright 2025 by <span className="font-bold">The 23rd Studio</span>.
        All Rights Reserved | Design by{" "}
        <span className="font-bold">Rutik Parmar</span>
      </div>
    </footer>
  );
};

export default Footer;
