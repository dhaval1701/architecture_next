"use client";
import { motion } from "framer-motion";

export default function ScrollingText() {
  const textSet = (
    <div
      className="flex items-center mr-8 sm:mr-12 md:mr-16 lg:mr-20 xl:mr-28 2xl:mr-36 3xl:mr-44 4xl:mr-52 font-light sf-compact-fallback"
      style={{ letterSpacing: "1.2em", wordSpacing: "1.8em" }}
    >
      {/* THE */}
      <span className="text-gray-300 font-semibold text-[38px] xs:text-[32px] sm:text-[40px] md:text-[50px] lg:text-[104px] xl:text-[120px] 2xl:text-[160px] 3xl:text-[200px] 4xl:text-[400px]">
        THE
      </span>

      {/* 23rd (wrapped together) */}
      <div className="relative flex items-start ml-1.5 sm:ml-2 md:ml-3 lg:ml-5 xl:ml-6 2xl:ml-8 3xl:ml-10 4xl:ml-14">
        <span className="font-semibold text-red-900 leading-none text-[38px] xs:text-[32px] sm:text-[40px] md:text-[50px] lg:text-[104px] xl:text-[120px] 2xl:text-[160px] 3xl:text-[200px] 4xl:text-[400px]">
          23
        </span>
        <span className="absolute font-semibold text-gray-300 -top-1.5 -right-4 sm:-top-2 sm:-right-5 md:-top-2.5 md:-right-6 lg:-top-3 lg:-right-12 xl:-top-4 xl:-right-16 2xl:-top-5 2xl:-right-20 3xl:-top-6 3xl:-right-26 4xl:-top-8 4xl:-right-32 text-[10px] xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[40px] xl:text-[50px] 2xl:text-[70px] 3xl:text-[90px] 4xl:text-[110px]">
          rd
        </span>
      </div>

      {/* STUDIO */}
      <span className="font-semibold text-gray-300 ml-4 sm:ml-6 md:ml-8 lg:ml-16 xl:ml-20 2xl:ml-28 3xl:ml-36 4xl:ml-44 text-[38px] xs:text-[32px] sm:text-[40px] md:text-[50px] lg:text-[110px] xl:text-[130px] 2xl:text-[170px] 3xl:text-[210px] 4xl:text-[400px]">
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
