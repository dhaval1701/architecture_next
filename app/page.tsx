"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import { MoveRight } from "lucide-react";
import ButtonV1 from "@/components/ButtonV1";

export const Home = () => {
  const projects = [
    {
      id: 1,
      title: "THE PATEL MANSION",
      image: "/assets/patel_mansion.svg",
      link: "/projects/patel-mansion",
    },
    {
      id: 2,
      title: "Sarpanch House",
      image: "/assets/sarpanch_house_300.svg",
      link: "/projects/sarpanch-house",
    },
    {
      id: 3,
      title: "SK Farm",
      image: "/assets/sk_farm.svg",
      link: "/projects/project-three",
    },
    {
      id: 4,
      title: "Saran Group",
      image: "/assets/saran_group.svg",
      link: "/projects/project-four",
    },
  ];

  const missionItems = [
    {
      number: "1",
      text: "Design spaces that inspire, connect, and endure blending creativity with functionality in every project we take on.",
    },
    {
      number: "2",
      text: "To transform ideas into built environments that tell stories, spark emotions, and stand the test of time.",
    },
    {
      number: "3",
      text: "Deliver architecture that balances beauty, purpose, and sustainability creating spaces people truly belong in.",
    },
    {
      number: "4",
      text: "Deliver architecture that balances beauty, purpose, and sustainability creating spaces people truly belong in.",
    },
    {
      number: "5",
      text: "Deliver architecture that balances beauty, purpose, and sustainability creating spaces people truly belong in.",
    },
  ];

  return (
    <div className="bg-white relative">
      <HeroSection />

      <section className="bg-[#F6F6F6] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-90">
          <Image
            src="/assets/home_background_1.svg"
            alt="Background pattern"
            fill
            className="object-contain"
          />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-16 3xl:px-26 4xl:px-32 py-6 lg:py-12">
            <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 3xl:gap-24">
              {/* Image Section - Left (60%) */}
              <div className="w-full lg:w-3/5 flex justify-center lg:justify-start">
                <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px] 3xl:max-w-[1000px] 4xl:max-w-[1100px]">
                  <Image
                    src="/assets/owner_group.svg"
                    alt="Architects"
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Content Section - Right (40%) */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center text-center lg:text-left">
                {/* Title */}
                <h1 className="text-[#909090] font-extralight leading-tight mb-4 sm:mb-6 lg:mb-8 xl:mb-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[92px] 3xl:text-[80px] 4xl:text-[100px]">
                  Architects
                </h1>

                {/* Description */}
                <p className="text-[#333333] font-extralight leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-[24px] 3xl:text-3xl 4xl:text-4xl max-w-[55ch] mx-auto lg:mx-0">
                  Two architects walked into a studio… and never looked back.
                  That&apos;s how{" "}
                  <span className="font-bold">23rd Design Studio</span> began as
                  a canvas for ideas too big to stay in sketchbooks. Here, lines
                  and curves speak louder than words, coffee fuels the midnight
                  brainstorms, and curiosity leads us down paths where design
                  meets emotion. We don&apos;t just create spaces; we craft
                  experiences that inspire, connect, and endure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="breakout">
        {/* Mission Statement Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-32 3xl:py-40 4xl:py-48 overflow-hidden">
          {/* Section Heading */}
          <div className="text-[#BDBDBD] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-6xl 3xl:text-9xl 4xl:text-[10rem] font-extralight mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-24 3xl:mb-32 4xl:mb-40 text-center lg:text-left px-3 sm:px-6 md:px-8 lg:px-24 xl:px-20 2xl:px-28 3xl:px-32 4xl:px-40">
            Mission Statement
          </div>

          {/* Marquee */}
          <div className="overflow-hidden whitespace-nowrap w-full">
            <motion.div
              className="flex opacity-40"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ duration: 60, ease: "linear", repeat: Infinity }}
            >
              {/* Original row */}
              {missionItems.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-start pr-8 sm:pr-12 md:pr-16 lg:pr-20 xl:pr-28 2xl:pr-32 3xl:pr-40 4xl:pr-48"
                  style={{ width: "clamp(300px, 40vw, 700px)" }} // adaptive card width
                >
                  {/* Number */}
                  <div
                    className="text-gray-300 font-black mr-4 sm:mr-6 md:mr-8 lg:mr-10 xl:mr-12 2xl:mr-14 3xl:mr-16 4xl:mr-20"
                    style={{
                      fontSize: "clamp(6rem, 12vw, 20rem)",
                      lineHeight: "0.75",
                      fontWeight: "500",
                    }}
                  >
                    {item.number}
                  </div>
                  {/* Text */}
                  <div
                    className="text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 
                leading-5 sm:leading-6 md:leading-7 lg:leading-8 xl:leading-9 2xl:leading-10 3xl:leading-12 4xl:leading-14 
                flex-1 whitespace-normal break-words"
                  >
                    {item.text}
                  </div>
                </div>
              ))}

              {/* Duplicate row for seamless loop */}
              {missionItems.map((item, index) => (
                <div
                  key={`copy-${index}`}
                  className="flex-shrink-0 flex items-start pr-8 sm:pr-12 md:pr-16 lg:pr-20 xl:pr-28 2xl:pr-32 3xl:pr-40 4xl:pr-48"
                  style={{ width: "clamp(300px, 40vw, 700px)" }}
                >
                  <div
                    className="text-gray-300 font-black mr-4 sm:mr-6 md:mr-8 lg:mr-10 xl:mr-12 2xl:mr-14 3xl:mr-16 4xl:mr-20"
                    style={{
                      fontSize: "clamp(6rem, 12vw, 20rem)",
                      lineHeight: "0.75",
                      fontWeight: "500",
                    }}
                  >
                    {item.number}
                  </div>
                  <div className="text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl leading-5 sm:leading-6 md:leading-7 lg:leading-8 xl:leading-9 2xl:leading-10 3xl:leading-12 4xl:leading-14 flex-1">
                    {item.text}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="breakout relative my-8 sm:my-12 md:my-16 lg:my-20 xl:my-24 2xl:my-32 3xl:my-40 4xl:my-48">
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(91.38deg, #333333 56.24%, #7F3434 100%)",
          }}
        ></div>

        {/* Logo background pattern */}
        <div className="absolute inset-0">
          <div className="absolute left-[60%] sm:left-[70%] md:left-[80%] right-0 inset-y-0 opacity-70">
            <Image
              src="/logos/logo_background.svg"
              alt="Background pattern"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-28 3xl:px-64 4xl:px-80 relative z-10 h-full">
          <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-20 3xl:py-32 4xl:py-40">
            <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[32px] 3xl:text-6xl 4xl:text-7xl mb-4 lg:mb-0">
              Ready to transform your space?
            </div>

            <ButtonV1
              text="Let's Connect"
              theme="light"
              onClick={() => {
                // window.location.href = "/contact";
              }}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-2 xl:py-24 2xl:py-12 3xl:py-40 4xl:py-48 ">
        <div className="text-[#BDBDBD] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-6xl 3xl:text-9xl 4xl:text-[10rem] font-extralight mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-24 3xl:mb-32 4xl:mb-40 text-center lg:text-left">
          Our Projects
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 3xl:gap-20 4xl:gap-24 mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 2xl:mb-32 3xl:mb-40 4xl:mb-48">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 2xl:h-66 3xl:h-[28rem] 4xl:h-[34rem] overflow-hidden group"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-12 3xl:p-20 4xl:p-24">
                <div className="mb-2 sm:mb-4 md:mb-6 lg:mb-2 max-w-[70%]">
                  <div className="text-white uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl 3xl:text-8xl 4xl:text-9xl font-bold mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 2xl:mb-2 3xl:mb-8 4xl:mb-10">
                    {project.title}
                  </div>
                  <div className="flex items-center text-white text-xs sm:text-sm md:text-base lg:text-[12px] 3xl:text-[16px] uppercase tracking-widest">
                    View More
                    <MoveRight
                      strokeWidth={0.85}
                      className="pl-1 sm:pl-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-9 2xl:h-9 3xl:w-10 3xl:h-10 4xl:w-12 4xl:h-12"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center lg:justify-end mt-6 sm:mt-8 md:mt-12">
          <ButtonV1
            text="All Projects"
            theme="dark"
            onClick={() => {
              // window.location.href = "/contact";
            }}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-32 3xl:py-40 4xl:py-48 ">
        <div className="text-[#BDBDBD] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-6xl 3xl:text-9xl 4xl:text-[10rem] font-extralight mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-24 3xl:mb-32 4xl:mb-40 text-center lg:text-left">
          Contact Us
        </div>

        <ContactForm layout="form-map" />
      </section>
    </div>
  );
};

export default Home;
