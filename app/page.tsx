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

import { useRouter } from "next/navigation";

import InfiniteDraggableScroll from "@/components/DraggableScrollingText";

type Project = {
  id: string;
  title: string;
  slug: string;
  heroImage: string;
  thumbnail: string;
};
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

export const Home = () => {
  const router = useRouter();
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const handleProjectClick = (
    e: React.MouseEvent,
    projectId: number,
    slug: string
  ) => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouch) {
      if (activeProject !== projectId) {
        // First tap → show overlay
        e.preventDefault();
        setActiveProject(projectId);
      } else {
        // Second tap → allow navigation
        setActiveProject(null);
      }
    }
  };

  const missionContent = (
    <div className="flex whitespace-nowrap" style={{ pointerEvents: "auto" }}>
      {missionItems.map((item, index) => (
        <div
          key={`mission-${index}`}
          className="flex-shrink-0 flex items-start pr-8 sm:pr-12 md:pr-16 xl:pr-28 2xl:pr-32 3xl:pr-40 4xl:pr-48
                   w-70 sm:w-96 md:w-[25rem] lg:w-[25rem] xl:w-[40rem] 2xl:w-[45rem] 3xl:w-[50rem] 4xl:w-[65rem] cursor-pointer"
        >
          <div
            className="text-gray-300 font-black mr-4 sm:mr-6 md:mr-8 xl:mr-12 2xl:mr-14 3xl:mr-16 4xl:mr-20 flex-shrink-0"
            style={{
              fontSize: "clamp(7rem, 13vw, 20rem)",
              lineHeight: "0.75",
              fontWeight: "500",
            }}
          >
            {item.number}
          </div>
          <div className="text-[#333333] text-xs sm:text-sm md:text-base xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl leading-5 sm:leading-6 md:leading-6 xl:leading-9 2xl:leading-10 3xl:leading-12 4xl:leading-14 flex-1 whitespace-normal break-words">
            {item.text}
          </div>
        </div>
      ))}
    </div>
  );

  type Project = (typeof projectsData)[number]; // infer each project's type

  return (
    <div className="bg-white relative">
      <HeroSection />

      <div
        className="
    w-[100vw] ml-[calc(50%-50vw)]
    md:!w-full md:!ml-0
    relative z-10 bg-cover bg-center
    bg-[url('/assets/home_background_phone.png')]
    md:bg-[url('/assets/home_background_1.png')]
    mb-10 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-30 3xl:mb-40 4xl:mb-44 5xl:mb-50
  "
      >
        <div className="px-2 sm:px-8 lg:px-10 xl:px-13 2xl:px-18 3xl:px-26 4xl:px-32 5xl:px-36">
          <div className="px-4 md:px-0 flex flex-col lg:flex-row items-start gap-0 lg:gap-12 xl:gap-16 2xl:gap-16 3xl:gap-24 4xl:gap-28 5xl:gap-32">
            {/* Image Section - Left (55%) */}
            <div className="w-full lg:w-[58%] flex justify-center lg:justify-start ">
              <div className="relative aspect-square lg:max-h-[600px] 3xl:max-h-[820px] 4xl:max-h-[940px] 5xl:max-h-[1480px] w-full">
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
            <div className="w-full lg:w-[42%] flex flex-col justify-start text-left py-4 sm:py-6 md:py-8 lg:py-16 xl:py-22 2xl:py-22 3xl:py-30 4xl:py-34 5xl:py-44">
              {/* Title */}
              <h1 className="text-[#BDBDBD] font-light mb-4 sm:mb-6 md:mb-8 lg:mb-5 xl:mb-[30px] 2xl:mb-[30px] 3xl:mb-15 4xl:mb-20 5xl:mb-25 text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-6xl 3xl:text-[86px] 4xl:text-[118px] 5xl:text-[144px] leading-[32px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px] xl:leading-[48px] 2xl:leading-[56px] 3xl:leading-[60px] 4xl:leading-[72px] 5xl:leading-[80px]">
                Architects
              </h1>

              {/* Description */}
              <p className="text-[#333333] font-light text-sm sm:text-base md:text-lg lg:text-[16px] xl:text-[18px] 2xl:text-[18px] 3xl:text-[24px] 4xl:text-[32px] 5xl:text-[44px] max-w-[55ch] leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[20px] xl:leading-[26px] 2xl:leading-[28px] 3xl:leading-[38px] 4xl:leading-[44px] 5xl:leading-[84px]">
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

      <div className="breakout mb-10 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-30 3xl:mb-40 4xl:mb-44 5xl:mb-50">
        <section className="overflow-hidden">
          {/* Section Heading */}
          <div className="text-[#BDBDBD] text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-6xl 3xl:text-[86px] 4xl:text-[118px] 5xl:text-[144px] font-light mb-4 sm:mb-6 md:mb-8 lg:mb-10 2xl:mb-[60px] 3xl:mb-20 4xl:mb-22 5xl:mb-26 text-left px-6 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-36 3xl:px-48 4xl:px-56 5xl:px-80">
            Mission Statement
          </div>

          <InfiniteDraggableScroll
            speed={50}
            containerClassName="bg-white flex items-center overflow-hidden"
            pauseOnHover={false}
          >
            {missionContent}
          </InfiniteDraggableScroll>
        </section>
      </div>

      {/* CTA Section */}
      <section className="breakout relative mb-10 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-30 3xl:mb-40 4xl:mb-44 5xl:mb-50">
        {/* Base gradient */}
        <div
          className="
    absolute inset-0
    bg-[url('/assets/request_section_phone.png')] bg-cover bg-center
    md:bg-[linear-gradient(91.38deg,#333333_56.24%,#7F3434_100%)]
  "
        ></div>

        {/* Logo background pattern */}
        <div className="hidden md:block absolute inset-0">
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
          <div className="flex flex-col lg:flex-row items-center justify-between text-left py-7 sm:py-9 md:py-12 xl:py-20 2xl:py-18 3xl:py-32 4xl:py-40">
            <div className="text-white text-lg sm:text-xl md:text-[26px] xl:text-[28px] 2xl:text-[32px] 3xl:text-6xl 4xl:text-7xl mb-4 lg:mb-0">
              Ready to transform your space?
            </div>

            <ButtonV1
              text="Let's Connect"
              theme="light"
              className="mr-5"
              onClick={() => {
                router.push(`/contact-us`);
              }}
            />
          </div>
        </div>
      </section>

      <section className="mb-10 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-30 3xl:mb-40 4xl:mb-44 5xl:mb-50">
        {/* Section Title */}
        <div className="text-[#BDBDBD] text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-6xl 3xl:text-[86px] 4xl:text-[118px] 5xl:text-[144px] font-light mb-4 sm:mb-6 md:mb-8 lg:mb-10 2xl:mb-[60px] 3xl:mb-20 4xl:mb-22 5xl:mb-26 text-left">
          Our Projects
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
          {projectsData
            .slice(0, 4)
            .reduce<Project[][]>((rows, project, index) => {
              if (index % 2 === 0) rows.push([project]);
              else rows[rows.length - 1].push(project);
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

                  const isActive = activeProject === project.id;

                  return (
                    <div
                      key={project.id}
                      className={`relative w-full ${basisClass} h-48 sm:h-56 md:h-44 xl:h-64 3xl:h-[22rem] 4xl:h-[32rem] overflow-hidden group`}
                    >
                      {/* Image */}
                      <Image
                        src={project.heroImage}
                        alt={project.title}
                        placeholder="blur"
                        blurDataURL={project.thumbnail}
                        loading="lazy"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Overlay */}
                      <Link
                        href={`/projects/${project.slug}`}
                        tabIndex={0}
                        onClick={(e) =>
                          handleProjectClick(e, project.id, project.slug)
                        }
                        className={`
                      absolute inset-0 bg-transparent 
                      transition-colors flex items-center justify-start cursor-pointer
                      ${
                        isActive
                          ? "bg-black/60 group-focus-within:bg-black/60"
                          : "group-hover:bg-black/60 group-focus-within:bg-black/60"
                      }
                    `}
                      >
                        <div
                          className={`
                        transition-all duration-500 ease-out 
                        text-left max-w-[70%] pl-6 sm:pl-8 md:pl-12 lg:pl-16
                        ${
                          isActive
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0"
                        }
                      `}
                        >
                          <div className="text-white uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl 5xl:text-9xl font-bold mb-4">
                            {project.title}
                          </div>
                          <div className="flex items-center text-white text-xs sm:text-sm md:text-base lg:text-[12px] 3xl:text-[16px] uppercase tracking-widest">
                            View More
                            <MoveRight
                              strokeWidth={0.85}
                              className="pl-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-9 2xl:h-9 3xl:w-10 3xl:h-10 4xl:w-12 4xl:h-12"
                            />
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            ))}
        </div>

        {/* Button */}
        <div className="flex justify-start lg:justify-end mt-6 sm:mt-8 md:mt-12">
          <Link href={"/projects"}>
            <ButtonV1 text="View All" theme="dark" />
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="">
        <div className="text-[#BDBDBD] text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-6xl 3xl:text-[86px] 4xl:text-[118px] 5xl:text-[10rem] font-light mb-4 sm:mb-6 md:mb-8 lg:mb-10 2xl:mb-[60px] 3xl:mb-20 4xl:mb-22 5xl:mb-26 text-left">
          Contact Us
        </div>

        <ContactForm />
      </section>
    </div>
  );
};

export default Home;
