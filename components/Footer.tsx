// components/Footer.jsx
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface XIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const XIcon: React.FC<XIconProps> = ({ className, ...props }) => (
  <svg className={className} viewBox="0 0 48 48" fill="currentColor" {...props}>
    <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer
      className="text-white px-5 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-36 3xl:px-44 4xl:px-52 5xl:px-60
       pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-16 3xl:pt-20 4xl:pt-24 5xl:pt-28
       pb-4 sm:pb-6 md:pb-8 lg:pb-4 3xl:pb-6 4xl:pb-8 5xl:pb-10"
      style={{ background: "#292929" }}
    >
      <div className="flex flex-col md:flex-row">
        {/* Main Content Grid - Custom column sizes */}
        <div className="md:grid md:grid-cols-[1fr_0.6fr_1fr_1fr] md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 3xl:gap-14 4xl:gap-16 5xl:gap-20 w-full">
          {/* Logo Section - Hidden on mobile, first column on md+ */}
          <div className="mb-6 md:mb-0 md:block">
            <Link href="/">
              <Image
                src="/logos/full_logo_white.svg"
                alt="Logo"
                width={180}
                height={200}
                className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 3xl:h-32 4xl:h-36 5xl:h-40 w-auto"
              />
            </Link>
          </div>

          {/* Mobile: Information + Contacts side by side, MD+: separate columns */}
          <div className="flex gap-0 mb-6 md:contents">
            {/* Information - Smaller second column on md+ */}
            <div className="flex-1">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 3xl:mb-8 4xl:mb-10 5xl:mb-12">
                Site Map
              </h3>
              <ul className="space-y-2.5 sm:space-y-2 lg:space-y-3 xl:space-y-3 3xl:space-y-6 4xl:space-y-8 5xl:space-y-10">
                {["Home", "Gallery", "Projects", "About Us", "Contact Us"].map(
                  (item) => (
                    <li
                      key={item}
                      className="text-xs sm:text-sm md:text-base lg:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl hover:text-gray-300 cursor-pointer transition-colors font-medium"
                    >
                      <Link href={`/${item.toLowerCase().replace(" ", "-")}`}>
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact Info - Larger third column on md+ */}
            <div className="flex-1">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 3xl:mb-8 4xl:mb-10 5xl:mb-12">
                Contacts
              </h3>
              <div className="flex items-start mb-3 sm:mb-4 xl:mb-6 3xl:mb-8 4xl:mb-10 5xl:mb-12">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 3xl:w-6 3xl:h-6 4xl:w-7 4xl:h-7 5xl:w-8 5xl:h-8" />
                <a
                  href="https://www.google.com/maps/dir//Shilp+Arcade+Bilasia+on+Sardar+Patel+Ring+Rd,+Hanspura+Ahmedabad,+Gujarat+382330/@23.0821154,72.6878764,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x395e81343b78736b:0xbd35689132a08eb4!2m2!1d72.6878764!2d23.0821154?entry=ttu&g_ep=EgoyMDI1MDgzMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm md:text-base 3xl:text-lg 4xl:text-xl 5xl:text-2xl font-medium"
                >
                  417, The 23rd Studio Shilp Arcad , nr. Hanspura circle road ,
                  S.P. ring road, Ahmedabad , 382330
                </a>
              </div>
              <div className="flex items-start mb-3 sm:mb-4 xl:mb-6 3xl:mb-8 4xl:mb-10 5xl:mb-12">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 3xl:w-6 3xl:h-6 4xl:w-7 4xl:h-7 5xl:w-8 5xl:h-8" />
                <div className="text-xs sm:text-sm md:text-base 3xl:text-lg 4xl:text-xl 5xl:text-2xl font-medium space-y-1">
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
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 3xl:w-6 3xl:h-6 4xl:w-7 4xl:h-7 5xl:w-8 5xl:h-8" />
                <a
                  href="mailto:info.23rdstudio@gmail.com"
                  className="text-xs sm:text-sm md:text-base 3xl:text-lg 4xl:text-xl 5xl:text-2xl font-medium hover:underline break-all"
                >
                  info.23rdstudio@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Media - Larger fourth column on md+ */}
          <div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 3xl:mb-8 4xl:mb-10 5xl:mb-12">
              Social Media
            </h3>
            <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 3xl:gap-8 4xl:gap-10 5xl:gap-12 mb-6">
              {[Facebook, Instagram, Linkedin, XIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="https://www.instagram.com/the23rd_studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 3xl:w-8 3xl:h-8 4xl:w-9 4xl:h-9 5xl:w-10 5xl:h-10" />
                </a>
              ))}
            </div>
            <Image
              src="/logos/logo_background.svg"
              alt="Logo"
              width={120}
              height={120}
              className="hidden md:block h-10 sm:h-12 md:h-24 lg:h-40 xl:h-52 3xl:h-56 4xl:h-64 5xl:h-72 w-auto opacity-70"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-[#C8C8C8] text-center text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl pt-4 sm:pt-6 lg:pt-10 3xl:pt-12 4xl:pt-16 5xl:pt-20 font-normal">
        © Copyright 2025 by{" "}
        <a
          href="https://www.instagram.com/the23rd_studio/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-mediumn hover:underline"
        >
          The 23rd Studio
        </a>
        . All Rights Reserved |{" "}
        <span className="block sm:inline">
          Design by{" "}
          <a
            href="https://www.instagram.com/r_parmar_7989/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-mediumn hover:underline"
          >
            Rutik Parmar
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
