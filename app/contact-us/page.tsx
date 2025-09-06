import ButtonV1 from "@/components/ButtonV1";
import ContactForm, { ContactMap } from "@/components/ContactForm";
import React from "react";

const ContactUs = () => {
  return (
    <div className="space-y-12">
      <div className="mt-2 md:mt-0 mb-4 md:mb-6 xl:mb-10 3xl:mb-16 4xl:mb-24">
        <p className="text-[#BDBDBD] text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px] 3xl:text-7xl 4xl:text-9xl font-light mb-1 sm:mb-2 lg:mb-3 xl:mb-4 3xl:mb-6 4xl:mb-8 leading-[16px]">
          Contact
        </p>
        <p className="text-[#333333] text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-[64px] 3xl:text-7xl 4xl:text-9xl font-bold leading-tight">
          Us
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
        {/* Left Side - Image with Gradient Blur */}
        <div className="relative overflow-hidden min-h-96 lg:min-h-[450px] xl:min-h-[580px] 2xl:min-h-[640px]">
          {/* Background Image with Grayscale */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
            style={{
              backgroundImage: `url('/contact_us/hero_1.webp')`,
            }}
          ></div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full p-5 lg:p-6 xl:p-12 flex items-start">
            <div className="space-y-5 lg:space-y-5 xl:space-y-6 3xl:space-y-8 text-white max-w-xs sm:max-w-sm lg:max-w-md">
              {/* Studio Title */}
              <div>
                <a
                  href="https://www.google.com/maps/dir//Shilp+Arcade+Bilasia+on+Sardar+Patel+Ring+Rd,+Hanspura+Ahmedabad,+Gujarat+382330/@23.0821154,72.6878764,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x395e81343b78736b:0xbd35689132a08eb4!2m2!1d72.6878764!2d23.0821154?entry=ttu&g_ep=EgoyMDI1MDgzMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className="text-base lg:text-lg xl:text-2xl font-medium mb-0 md:mb-2">
                    417, The 23<sup className="text-xs lg:text-sm">rd</sup>{" "}
                    Studio
                  </h2>
                  <p className="text-xs lg:text-sm xl:text-base leading-relaxed opacity-90">
                    Shilp Arcad , nr. Hanspura circle road , S.p Ring Road,
                    <br />
                    Ahmedabad , 382330
                  </p>
                </a>
              </div>

              {/* Contact Numbers */}
              <div className="space-y-1">
                <a
                  href="tel:+917203892651"
                  className="block text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  3xl:text-3xl 4xl:text-4xl xl:text-xl font-medium hover:text-blue-200 transition-colors"
                >
                  +91 720 389 2651
                </a>
                <a
                  href="tel:+919054542360"
                  className="block text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  3xl:text-3xl 4xl:text-4xl xl:text-xl font-medium hover:text-blue-200 transition-colors"
                >
                  +91 905 454 2360
                </a>
              </div>

              {/* Email */}
              <div>
                <a
                  href="mailto:info.23rdstudio@gmail.com"
                  className="text-sm lg:text-sm xl:text-base hover:text-blue-200 transition-colors"
                >
                  info.23rdstudio@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="relative min-h-96 lg:min-h-[450px] xl:min-h-[580px] 2xl:min-h-[640px] overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/contact_us/hero_2.webp')`,
            }}
          ></div>

          {/* Form Content */}
          <div className="relative z-10 h-full flex flex-col justify-center p-5 lg:p-6 xl:p-12">
            <div className="max-w-sm sm:max-w-md xl:max-w-lg mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-6xl 3xl:text-[86px] 4xl:text-[118px] 5xl:text-[144px] font-light text-[#BDBDBD] mb-4 sm:mb-6 md:mb-8 lg:mb-5 2xl:mb-[30px] 3xl:mb-10 4xl:mb-11 5xl:mb-13 leading-tight">
                Get in Touch
              </h1>

              <form className="space-y-3 lg:space-y-4 xl:space-y-3">
                {/* Your Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Name*"
                    className="w-full px-3 lg:px-4 py-2 lg:py-2.5 border border-gray-300 bg-white/90 text-gray-700 placeholder-gray-500 focus:border-gray-500 focus:outline-none transition-colors rounded-none text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  3xl:text-3xl 4xl:text-4xl"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number*"
                    className="w-full px-3 lg:px-4 py-2 lg:py-2.5 border border-gray-300 bg-white/90 text-gray-700 placeholder-gray-500 focus:border-gray-500 focus:outline-none transition-colors rounded-none text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  3xl:text-3xl 4xl:text-4xl"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="E-mail*"
                    className="w-full px-3 lg:px-4 py-2 lg:py-2.5 border border-gray-300 bg-white/90 text-gray-700 placeholder-gray-500 focus:border-gray-500 focus:outline-none transition-colors rounded-none text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  3xl:text-3xl 4xl:text-4xl"
                    required
                  />
                </div>

                {/* Interested In */}
                <div>
                  <div className="mb-2 lg:mb-3 3xl:mb-6 4xl:mb-8">
                    <select
                      id="interest"
                      name="interest"
                      // value={formData.interest}
                      // onChange={handleChange}
                      className={`w-full px-3 lg:px-4 py-2 lg:py-2.5 border border-gray-300 bg-white/90 text-gray-700 placeholder-gray-500 focus:border-gray-500 focus:outline-none resize-none transition-colors rounded-none text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  3xl:text-3xl 4xl:text-4xl appearance-none ${
                        true ? "text-gray-400 tracking-wider" : "text-gray-800"
                      }"`}
                      style={{ backgroundColor: "#fff" }}
                    >
                      <option value="" disabled hidden>
                        Interested In
                      </option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="renovation">Renovation</option>
                      <option value="consultation">Consultation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    rows={3}
                    placeholder="Message"
                    className="w-full px-3 lg:px-4 py-2 lg:py-2.5 border border-gray-300 bg-white/90 text-gray-700 placeholder-gray-500 focus:border-gray-500 focus:outline-none resize-none transition-colors rounded-none text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  3xl:text-3xl 4xl:text-4xl"
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
      <div className="">
        <ContactMap />
      </div>
    </div>
  );
};

export default ContactUs;
