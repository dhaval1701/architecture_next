import ButtonV1 from "@/components/ButtonV1";
import ContactForm, { ContactMap } from "@/components/ContactForm";
import React from "react";

const ContactUs = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="bg-white mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-10 3xl:mb-24 4xl:mb-32 ">
        <div className="mx-auto">
          <div className="mb-6 sm:mb-8 lg:mb-10 xl:mb-12 3xl:mb-16 4xl:mb-20">
            <p className="text-[#BDBDBD] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px] 3xl:text-7xl 4xl:text-9xl font-extralight mb-1 sm:mb-2 lg:mb-3 xl:mb-4 3xl:mb-6 4xl:mb-8 leading-[16px]">
              Contact
            </p>
            <p className="text-[#333333] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[64px] 3xl:text-8xl 4xl:text-[10rem] font-bold leading-tight">
              Us
            </p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
        {/* Left Side - Image with Gradient Blur */}
        <div className="relative overflow-hidden h-96 lg:h-[500px] xl:h-[580px] 2xl:h-[640px]">
          {/* Background Image with Grayscale */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
            style={{
              backgroundImage: `url('/assets/contact_us_1.svg')`,
            }}
          ></div>

          {/* Gradient Blur Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent backdrop-blur-[2px]"></div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full p-6 lg:p-8 xl:p-12 flex items-start">
            <div className="space-y-4 lg:space-y-6 text-white max-w-sm lg:max-w-md">
              {/* Studio Title */}
              <div>
                <h2 className="text-lg lg:text-xl xl:text-2xl font-medium mb-2">
                  417, The 23<sup className="text-xs lg:text-sm">rd</sup> Studio
                </h2>
                <p className="text-xs lg:text-sm xl:text-base leading-relaxed opacity-90">
                  Shilp Arcad , nr. Hanspura circle road , S.p Ring Road,
                  <br />
                  Ahmedabad , 382330
                </p>
              </div>

              {/* Contact Numbers */}
              <div className="space-y-1">
                <a
                  href="tel:+917203892651"
                  className="block text-base lg:text-lg xl:text-xl font-medium hover:text-blue-200 transition-colors"
                >
                  +91 720 389 2651
                </a>
                <a
                  href="tel:+919054542360"
                  className="block text-base lg:text-lg xl:text-xl font-medium hover:text-blue-200 transition-colors"
                >
                  +91 905 454 2360
                </a>
              </div>

              {/* Email */}
              <div>
                <a
                  href="mailto:info.23rdstudio@gmail.com"
                  className="text-xs lg:text-sm xl:text-base hover:text-blue-200 transition-colors"
                >
                  info.23rdstudio@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="relative h-96 lg:h-[500px] xl:h-[580px] 2xl:h-[640px] overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{
              backgroundImage: `url('/assets/home_background_2.svg')`,
            }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gray-100/45"></div>

          {/* Form Content */}
          <div className="relative z-10 h-full flex flex-col justify-center p-6 lg:p-8 xl:p-12">
            <div className="max-w-sm lg:max-w-md xl:max-w-lg mx-auto w-full">
              <h1 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-light text-gray-800 mb-6 lg:mb-8 xl:mb-10 leading-tight">
                Get in Touch
              </h1>

              <form className="space-y-3 lg:space-y-4 xl:space-y-5">
                {/* Your Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 bg-white/90 text-gray-700 placeholder-gray-500 focus:border-gray-500 focus:outline-none transition-colors rounded-none text-sm lg:text-base"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number*"
                    className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 bg-white/90 text-gray-700 placeholder-gray-500 focus:border-gray-500 focus:outline-none transition-colors rounded-none text-sm lg:text-base"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="E-mail*"
                    className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 bg-white/90 text-gray-700 placeholder-gray-500 focus:border-gray-500 focus:outline-none transition-colors rounded-none text-sm lg:text-base"
                    required
                  />
                </div>

                {/* Interested In */}
                <div>
                  <input
                    type="text"
                    placeholder="Interested In"
                    className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 bg-white/90 text-gray-700 placeholder-gray-500 focus:border-gray-500 focus:outline-none transition-colors rounded-none text-sm lg:text-base"
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    rows={3}
                    placeholder="Message"
                    className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 bg-white/90 text-gray-700 placeholder-gray-500 focus:border-gray-500 focus:outline-none resize-none transition-colors rounded-none text-sm lg:text-base"
                  ></textarea>
                </div>

                {/* Submit */}
                <div className="pt-2 lg:pt-4">
                  <ButtonV1 theme="dark" text="CONTACT US" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-10 3xl:mb-24 4xl:mb-32">
        <ContactMap />
      </div>
    </div>
  );
};

export default ContactUs;
