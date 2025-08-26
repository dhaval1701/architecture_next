"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import { MoveRight } from "lucide-react";

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

      {/* Architects Section */}
      <section className="bg-gray-100 px-4 md:px-16 mb-12 md:my-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-70">
          <Image
            src="/logos/logo_background.svg"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </div>

        {/* Flexbox Layout */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image Section - 2/3 width on md+ screens */}
          <div className="flex-shrink-0 w-full md:w-2/4">
            <div className="relative aspect-square md:aspect-[3/3] w-full">
              <Image
                src="/assets/owner_group.svg"
                alt="Architects"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Content Section - Takes remaining space (1/3 on md+) */}
          <div className="flex-1 lg:min-w-0 w-full md:w-2/4">
            <div className="text-gray-500 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight mb-6 md:mb-8">
              Architects
            </div>
            <div className="text-gray-800 text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed font-extralight">
              Two architects walked into a studio… and never looked back.
              That&apos;s how
              <span className="font-bold"> 23rd Design Studio </span>
              began as a canvas for ideas too big to stay in sketchbooks. Here,
              lines and curves speak louder than words, coffee fuels the
              midnight brainstorms, and curiosity leads us down paths where
              design meets emotion. We don&apos;t just create spaces; we craft
              experiences that inspire, connect, and endure.
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="md:py-20  ">
        <div className="text-gray-500 text-3xl md:text-6xl font-light mb-8 md:mb-16 overflow-hidden">
          Mission Statement
        </div>

        <motion.div
          className="breakout flex"
          animate={{
            x: ["0%", "-180%"],
          }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {missionItems.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-screen md:w-[500px] pr-4 md:pr-16 flex items-start"
            >
              <div
                className="text-gray-300 font-black mr-4 md:mr-8"
                style={{
                  fontSize: "12rem",
                  lineHeight: "0.75",
                  fontWeight: "500",
                }}
              >
                {item.number}
              </div>
              <div className="text-gray-800 text-base md:text-xl leading-7 md:leading-9 flex-1">
                {item.text}
              </div>
            </div>
          ))}

          {/* Duplicate for seamless looping */}
          {missionItems.map((item, index) => (
            <div
              key={`copy-${index}`}
              className="flex-shrink-0 w-screen md:w-[500px] pr-4 md:pr-16 flex items-start"
            >
              <div
                className="text-gray-300 font-black mr-4 md:mr-8"
                style={{
                  fontSize: "12rem",
                  lineHeight: "0.75",
                  fontWeight: "500",
                }}
              >
                {item.number}
              </div>
              <div className="text-gray-800 text-base md:text-xl leading-7 md:leading-9 flex-1">
                {item.text}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="breakout relative my-12 md:my-20">
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(91.38deg, #333333 56.24%, #7F3434 100%)",
          }}
        ></div>

        {/* Logo background pattern - more visible on right */}
        <div className="absolute inset-0">
          <div className="absolute left-[80%] right-0 inset-y-0 opacity-70">
            <Image
              src="/logos/logo_background.svg"
              alt="Background pattern"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto px-4 md:px-16 relative z-10 h-full">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left py-8 md:py-18">
            <div className="text-white text-xl md:text-3xl mb-4 md:mb-0">
              Ready to transform your space?
            </div>
            <div className="bg-white w-40 md:w-50 h-10 md:h-12 relative cursor-pointer group">
              <div className="absolute inset-0 flex items-center justify-center md:justify-between px-4 md:px-6">
                <span className="text-gray-800 text-xs uppercase tracking-widest">
                  Lets Connect
                </span>
                <MoveRight
                  strokeWidth={0.75}
                  color="#000000"
                  className="hidden md:block"
                />
              </div>
              <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 md:py-20 px-4 md:px-16">
        <div className="text-gray-500 text-4xl md:text-6xl font-light mb-8 md:mb-16">
          Our Projects
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative h-64 overflow-hidden group"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 md:p-8">
                <div className="mb-4 md:mb-6">
                  <div className="text-white uppercase text-3xl md:text-6xl font-bold mb-2 md:mb-4">
                    {project.title}
                  </div>
                  <div className="flex items-center text-white text-xs uppercase tracking-widest ">
                    View More
                    <MoveRight strokeWidth={0.85} className="pl-2" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center md:justify-end mt-8 md:mt-16">
          <div className="bg-gray-800 w-full md:w-50 h-12 md:h-14 relative cursor-pointer group">
            <div className="absolute inset-0 flex items-center justify-center md:justify-between px-4 md:px-8 bg-primary-bg">
              <span className="text-white text-xs uppercase tracking-widest">
                All Projects
              </span>
              <MoveRight strokeWidth={0.85} className="hidden md:block" />
            </div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 px-4 md:px-16">
        <div className="text-gray-500 text-4xl md:text-6xl font-light mb-8 md:mb-16">
          Contact Us
        </div>

        <ContactForm layout="form-map" />
      </section>
    </div>
  );
};

export default Home;
