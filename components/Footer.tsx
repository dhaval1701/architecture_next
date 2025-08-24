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
      className=" text-white pt-10 pb-4 px-4 md:px-16"
      style={{ background: "#333333" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Logo Section */}
        <div>
          <div className="flex items-center mb-6">
            <div className="mr-4">
              <Image
                src="/logos/full_logo_white.svg"
                alt="Logo"
                width={200}
                height={250}
                // className="h-200"
              />
            </div>
          </div>
        </div>

        {/* Information Links */}
        <div>
          <div className="font-roboto-bold text-base font-bold mb-6">
            Information
          </div>
          <ul className="space-y-2">
            {["Home", "Gallery", "Projects", "About us", "Contacts"].map(
              (item) => (
                <li
                  key={item}
                  className="font-roboto-medium text-sm hover:text-gray-300 cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <div className="font-roboto-bold text-base font-bold mb-6">
            Contacts
          </div>
          <div className="mb-4 flex items-start">
            <MapPin size={16} className="mt-1 mr-3 flex-shrink-0" />
            <div className="font-roboto-medium text-sm">
              417, THE 23ʳᵈ STUDIO, Shilp Arcad, nr. Hanspura circle road, S. P.
              Ring Road, Ahmedabad, 382330
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <Phone size={16} className="mr-3 flex-shrink-0" />
            <div className="font-roboto-medium text-sm">720 389 2651</div>
          </div>
          <div className="mb-4 flex items-center">
            <Phone size={16} className="mr-3 flex-shrink-0" />
            <div className="font-roboto-medium text-sm">905 454 2360</div>
          </div>
          <div className="flex items-center">
            <Mail size={16} className="mr-3 flex-shrink-0" />
            <div className="font-roboto-medium text-sm">
              info.23rdstudio@gmail.com
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <div className="font-roboto-bold text-base font-bold mb-6">
            Social Media
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Twitter size={20} />
            </a>
          </div>
          <div className="mt-8">
            <Image
              src="/logos/logo_background.svg"
              alt="Logo"
              width={130}
              height={250}
            />
          </div>
        </div>
      </div>

      <div className="text-center font-sans text-sm border-t border-gray-700 pt-6">
        © Copyright 2025 by <span className="font-bold">The 23rd Studio</span>.
        All Rights Reserved | Design & Developed by{" "}
        <span className="font-bold">Rutik Parmar</span>
      </div>
    </footer>
  );
};

export default Footer;
