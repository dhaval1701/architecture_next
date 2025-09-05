"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

type MissionItem = {
  number: string | number;
  text: string;
};

type MissionMarqueeProps = {
  missionItems: MissionItem[];
};

const MissionMarquee: React.FC<MissionMarqueeProps> = ({ missionItems }) => {
  const controls = useAnimation();

  useEffect(() => {
    // Start marquee animation when mounted
    controls.start({
      x: ["0%", "-100%"],
      transition: { duration: 60, ease: "linear", repeat: Infinity },
    });
  }, [controls]);

  const startAnimation = () => {
    controls.start({
      x: ["0%", "-100%"],
      transition: { duration: 60, ease: "linear", repeat: Infinity },
    });
  };

  const stopAnimation = () => {
    controls.stop();
  };

  return (
    <section className="overflow-hidden">
      {/* Section Heading */}
      <div className="text-[#BDBDBD] text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-6xl 3xl:text-[86px] 4xl:text-[118px] 5xl:text-[144px] font-light mb-4 sm:mb-6 md:mb-8 lg:mb-10 2xl:mb-[60px] 3xl:mb-20 4xl:mb-22 5xl:mb-26 text-left px-4 sm:px-8 md:px-12 lg:px-15 xl:px-20 2xl:px-36 3xl:px-42 4xl:px-48">
        Mission Statement
      </div>

      {/* Marquee */}
      <div className="whitespace-nowrap w-full">
        <motion.div
          className="flex"
          animate={controls} // ⬅️ Connect controls
          onMouseEnter={stopAnimation}
          onMouseLeave={startAnimation}
        >
          {/* Original row */}
          {missionItems.map((item, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 flex items-start pr-8 sm:pr-12 md:pr-16 xl:pr-28 2xl:pr-32 3xl:pr-40 4xl:pr-48
                   w-70 sm:w-96 md:w-[28rem] lg:w-[35rem] xl:w-[40rem] 2xl:w-[45rem] 3xl:w-[50rem] 4xl:w-[65rem] cursor-pointer"
            >
              <div
                className="text-gray-300 font-black mr-4 sm:mr-6 md:mr-8 xl:mr-12 2xl:mr-14 3xl:mr-16 4xl:mr-20"
                style={{
                  fontSize: "clamp(7rem, 13vw, 20rem)",
                  lineHeight: "0.75",
                  fontWeight: "500",
                }}
              >
                {item.number}
              </div>

              <div
                className="text-[#333333] text-xs sm:text-sm md:text-base xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 
                        leading-5 sm:leading-6 md:leading-6 xl:leading-9 2xl:leading-10 3xl:leading-12 4xl:leading-14 
                        flex-1 whitespace-normal break-words"
              >
                {item.text}
              </div>
            </div>
          ))}
          {/* Duplicate row for seamless loop */}
          {missionItems.map((item, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 flex items-start pr-8 sm:pr-12 md:pr-16 xl:pr-28 2xl:pr-32 3xl:pr-40 4xl:pr-48
                   w-70 sm:w-96 md:w-[28rem] lg:w-[35rem] xl:w-[40rem] 2xl:w-[45rem] 3xl:w-[50rem] 4xl:w-[65rem]"
            >
              {/* Number */}
              <div
                className="text-gray-300 font-black mr-4 sm:mr-6 md:mr-8 xl:mr-12 2xl:mr-14 3xl:mr-16 4xl:mr-20"
                style={{
                  fontSize: "clamp(7rem, 13vw, 20rem)",
                  lineHeight: "0.75",
                  fontWeight: "500",
                }}
              >
                {item.number}
              </div>
              {/* Text */}
              <div
                className="text-[#333333] text-xs sm:text-sm md:text-base xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 
                        leading-5 sm:leading-6 md:leading-6 xl:leading-9 2xl:leading-10 3xl:leading-12 4xl:leading-14 
                        flex-1 whitespace-normal break-words"
              >
                {item.text}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MissionMarquee;
