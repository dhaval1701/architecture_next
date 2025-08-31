"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import { MoveRight } from "lucide-react";
import ButtonV1 from "@/components/ButtonV1";
import { projectsData } from "@/data/projects";

export const Home = () => {
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

  type Project = (typeof projectsData)[number]; // infer each project's type

  return (
    <div className="bg-white relative">
      <HeroSection />

      <div
        className="relative z-10 bg-cover bg-center mb-4 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-32 3xl:mb-42 4xl:mb-48"
        style={{ backgroundImage: "url('/assets/home_background_1.svg')" }} // 👈 your background here
      >
        <div className="px-6 sm:px-8 lg:px-10 xl:px-13 2xl:px-16 3xl:px-26 4xl:px-32">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 xl:gap-16 2xl:gap-10 3xl:gap-24">
            {/* Image Section - Left (55%) */}
            <div className="w-full lg:w-[57%] flex justify-center lg:justify-start">
              <div className="relative aspect-square lg:max-h-[600px] 3xl:max-h-[770px] w-full">
                <Image
                  src="/assets/owner_group.svg"
                  alt="Architects"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Content Section - Right (45%) */}
            <div className="w-full lg:w-[43%] flex flex-col justify-start text-left p-4 sm:p-6 md:p-8 lg:p-6 xl:p-12">
              {/* Title */}
              <h1 className="text-[#909090] font-extralight leading-tight mb-4 sm:mb-6 lg:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[74px] 3xl:text-[80px] 4xl:text-[100px]">
                Architects
              </h1>

              {/* Description */}
              <p className="text-[#333333] font-extralight leading-[28px] text-sm sm:text-base md:text-lg lg:text-[16px] xl:text-[16px] 2xl:text-[18px] 3xl:text-3xl 4xl:text-4xl max-w-[55ch] mx-auto lg:mx-0">
                Two architects walked into a studio… and never looked back.
                That&apos;s how{" "}
                <span className="font-bold">23rd Design Studio</span> began as a
                canvas for ideas too big to stay in sketchbooks. Here, lines and
                curves speak louder than words, coffee fuels the midnight
                brainstorms, and curiosity leads us down paths where design
                meets emotion. We don&apos;t just create spaces; we craft
                experiences that inspire, connect, and endure.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="breakout mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-32 3xl:mb-42 4xl:mb-48">
        {/* Mission Statement Section */}
        <section className="overflow-hidden">
          {/* Section Heading */}
          <div className="text-[#BDBDBD] text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-6xl 3xl:text-9xl 4xl:text-[10rem] font-extralight mb-2 sm:mb-6 md:mb-8 lg:mb-8 xl:mb-12 2xl:mb-16 3xl:mb-32 4xl:mb-40 text-left px-4 sm:px-8 md:px-12 lg:px-15 xl:px-20 2xl:px-36 3xl:px-42 4xl:px-48">
            Mission Statement
          </div>

          {/* Marquee */}
          <div className="overflow-hidden whitespace-nowrap w-full">
            <motion.div
              className="flex "
              animate={{ x: ["0%", "-100%"] }}
              transition={{ duration: 60, ease: "linear", repeat: Infinity }}
            >
              {/* Original row */}
              {missionItems.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-start pr-8 sm:pr-12 md:pr-16 xl:pr-28 2xl:pr-32 3xl:pr-40 4xl:pr-48"
                  style={{ width: "clamp(300px, 40vw, 700px)" }} // adaptive card width
                >
                  {/* Number */}
                  <div
                    className="text-gray-300 font-black mr-4 sm:mr-6 md:mr-8 xl:mr-12 2xl:mr-14 3xl:mr-16 4xl:mr-20"
                    style={{
                      fontSize: "clamp(6rem, 13vw, 20rem)",
                      lineHeight: "0.75",
                      fontWeight: "500",
                    }}
                  >
                    {item.number}
                  </div>
                  {/* Text */}
                  <div
                    className="text-[#333333] text-xs sm:text-sm md:text-base xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 
                leading-5 sm:leading-6 md:leading-6  xl:leading-9 2xl:leading-10 3xl:leading-12 4xl:leading-14 
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
      <section className="breakout relative mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-32 3xl:mb-42 4xl:mb-48">
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
              src="/assets/logo_345.svg"
              alt="Background pattern"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto px-4 sm:px-8 md:px-12 lg:px-15 xl:px-20 2xl:px-36 3xl:px-42 4xl:px-48 relative z-10 h-full">
          <div className="flex flex-col lg:flex-row items-center justify-between text-left py-6 sm:py-8 md:py-12 xl:py-20 2xl:py-18 3xl:py-32 4xl:py-40">
            <div className="text-white text-lg sm:text-xl md:text-[26px] xl:text-[28px] 2xl:text-[32px] 3xl:text-6xl 4xl:text-7xl mb-4 lg:mb-0">
              Ready to transform your space?
            </div>

            <ButtonV1
              text="Let's Connect"
              theme="light"
              className="mr-5"
              onClick={() => {
                // window.location.href = "/contact";
              }}
            />
          </div>
        </div>
      </section>

      <section className="mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-32 3xl:mb-42 4xl:mb-48">
        {/* Section Title */}
        <div className="text-[#BDBDBD] text-2xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-6xl 3xl:text-9xl 4xl:text-[10rem] font-extralight mb-2 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-12 2xl:mb-16 3xl:mb-32 4xl:mb-40 text-left">
          Our Projects
        </div>

        {/* Loop projects in pairs */}

        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
          {projectsData
            .slice(0, 4) // ✅ Only first 4 projects
            .reduce<Project[][]>((rows, project, index) => {
              if (index % 2 === 0) {
                rows.push([project]); // start a new row
              } else {
                rows[rows.length - 1].push(project); // push into last row
              }
              return rows;
            }, [])
            .map((pair, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8"
              >
                {pair.map((project, i) => {
                  const isEvenRow = rowIndex % 2 === 0;
                  const isFirst = i === 0;

                  const basisClass = isEvenRow
                    ? isFirst
                      ? "lg:basis-[52%]"
                      : "lg:basis-[48%]"
                    : isFirst
                    ? "lg:basis-[48%]"
                    : "lg:basis-[52%]";

                  return (
                    <div
                      key={project.id}
                      className={`relative w-full ${basisClass} h-48 sm:h-56 md:h-44 xl:h-64 3xl:h-[22rem] 4xl:h-[28rem] overflow-hidden group`}
                    >
                      <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-transparent group-hover:bg-black/60 transition-colors flex items-center justify-start">
                        <div
                          className="
                    opacity-0 translate-y-10 
                    group-hover:opacity-100 group-hover:translate-y-0 
                    transition-all duration-500 ease-out 
                    text-left max-w-[70%] pl-6 sm:pl-8 md:pl-12 lg:pl-16
                  "
                        >
                          <div className="text-white uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl 3xl:text-8xl 4xl:text-9xl font-bold mb-4">
                            {project.title}
                          </div>
                          <Link href={`/projects/${project.slug}`}>
                            <div className="flex items-center text-white text-xs sm:text-sm md:text-base lg:text-[12px] 3xl:text-[16px] uppercase tracking-widest">
                              View More
                              <MoveRight
                                strokeWidth={0.85}
                                className="pl-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-9 2xl:h-9 3xl:w-10 3xl:h-10 4xl:w-12 4xl:h-12"
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
        </div>

        {/* Button */}
        <div className="flex justify-start lg:justify-end mt-6 sm:mt-8 md:mt-12">
          <ButtonV1 text="All Projects" theme="dark" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="">
        <div className="text-[#BDBDBD] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-6xl 3xl:text-9xl 4xl:text-[10rem] font-extralight mb-2  md:mb-3 3xl:mb-24 4xl:mb-32 text-left">
          Contact Us
        </div>

        <ContactForm layout="form-map" />
      </section>
    </div>
  );
};

export default Home;
