"use client";
import { motion } from "framer-motion";

export default function ScrollingText() {
  const textSet = (
    <div
      className="flex items-center mr-8 sm:mr-12 md:mr-16 lg:mr-20 xl:mr-28 2xl:mr-36 3xl:mr-44 4xl:mr-52 font-light sf-compact-fallback tracking-[0.6em] md:tracking-normal-[1.2em] "
      style={{ wordSpacing: "1.8em" }}
    >
      {/* THE */}
      <span className="font-century-gothic uppercase text-gray-300 font-semibold text-[62px] xs:text-[72px] sm:text-[82px] md:text-[92px] lg:text-[104px] xl:text-[120px] 2xl:text-[204px] 3xl:text-[250px] 4xl:text-[320px] 5xl:text-[380px]">
        THE
      </span>

      {/* 23rd (wrapped together) */}
      <div className="relative flex items-start ml-1.5 sm:ml-2 md:ml-3 lg:ml-5 xl:ml-6 2xl:ml-8 3xl:ml-10 4xl:ml-14">
        <span className="font-century-gothic uppercase font-semibold text-red-900 leading-none text-[62px] xs:text-[72px] sm:text-[82px] md:text-[92px] lg:text-[104px] xl:text-[120px] 2xl:text-[204px] 3xl:text-[250px] 4xl:text-[320px] 5xl:text-[380px]">
          23
        </span>
        <span className="font-century-gothic absolute font-normal text-gray-300 -top-0 -right-7 sm:-top-0 sm:-right-5 md:-top-0 md:-right-6 lg:-top-0 lg:-right-12 xl:-top-0 xl:-right-16 2xl:-top-0 2xl:-right-20 3xl:-top-0 3xl:-right-26 4xl:-top-0 4xl:-right-32 text-[16px] xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[40px] xl:text-[50px] 2xl:text-[70px] 3xl:text-[100px] 4xl:text-[120px] 5xl:[160px]">
          rd
        </span>
      </div>

      {/* STUDIO */}
      <span className="font-century-gothic uppercase font-semibold text-gray-300 ml-4 sm:ml-6 md:ml-8 lg:ml-16 xl:ml-20 2xl:ml-28 3xl:ml-36 4xl:ml-44 text-[62px] xs:text-[72px] sm:text-[82px] md:text-[92px] lg:text-[104px] xl:text-[120px] 2xl:text-[204px] 3xl:text-[250px] 4xl:text-[320px] 5xl:text-[380px]">
        studio
      </span>
    </div>
  );

  return (
    <div className="overflow-hidden whitespace-nowrap w-full">
      <motion.div
        className="flex opacity-40"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
      >
        {/* Duplicate text to avoid jump */}
        {textSet}
        {textSet}
      </motion.div>
    </div>
  );
}
