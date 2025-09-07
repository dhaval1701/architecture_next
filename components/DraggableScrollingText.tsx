import {
  useState,
  useRef,
  useEffect,
  MouseEvent,
  TouchEvent,
  ReactNode,
  CSSProperties,
  JSX,
} from "react";

interface InfiniteScrollProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  containerClassName?: string;
  pauseOnHover?: boolean;
}

export default function InfiniteDraggableScroll({
  children,
  speed = 50,
  className = "",
  containerClassName = "min-h-screen flex items-center overflow-hidden",
  pauseOnHover = false,
}: InfiniteScrollProps): JSX.Element {
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState(0);
  const [lastMouseX, setLastMouseX] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);

  const [contentWidth, setContentWidth] = useState(0);

  // Measure content width on mount and resize
  useEffect(() => {
    const measureContentWidth = (): void => {
      if (contentRef.current) {
        const width = contentRef.current.getBoundingClientRect().width;
        setContentWidth(width);
      }
    };

    const timer = setTimeout(measureContentWidth, 100);
    window.addEventListener("resize", measureContentWidth);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", measureContentWidth);
    };
  }, [children]);

  // Auto-scroll animation
  useEffect(() => {
    const shouldAnimate =
      !isDragging && contentWidth > 0 && (!pauseOnHover || !isHovered);

    if (shouldAnimate) {
      let lastTime = 0;

      const animate = (currentTime: number): void => {
        if (lastTime === 0) lastTime = currentTime;
        const deltaTime = currentTime - lastTime;
        lastTime = currentTime;

        setPosition((prev) => {
          const newPos = prev - (speed * deltaTime) / 1000;
          return newPos <= -contentWidth ? 0 : newPos;
        });

        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging, contentWidth, speed, pauseOnHover, isHovered]);

  // Normalize position for seamless loop
  const normalizePosition = (pos: number): number => {
    if (contentWidth === 0) return pos;
    while (pos <= -contentWidth) pos += contentWidth;
    while (pos > 0) pos -= contentWidth;
    return pos;
  };

  // Mouse handlers
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>): void => {
    setIsDragging(true);
    setLastMouseX(e.clientX);
    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>): void => {
    if (isDragging) {
      const deltaX = e.clientX - lastMouseX;
      setPosition((prev) => normalizePosition(prev + deltaX));
      setLastMouseX(e.clientX);
    }
  };

  const handleMouseUp = (): void => {
    setIsDragging(false);
  };

  const handleMouseEnter = (): void => {
    if (pauseOnHover) setIsHovered(true);
  };

  const handleMouseLeave = (): void => {
    if (pauseOnHover) setIsHovered(false);
    setIsDragging(false);
  };

  // Touch handlers
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>): void => {
    setIsDragging(true);
    setLastMouseX(e.touches[0].clientX);
    e.preventDefault();
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>): void => {
    if (isDragging) {
      const deltaX = e.touches[0].clientX - lastMouseX;
      setPosition((prev) => normalizePosition(prev + deltaX));
      setLastMouseX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = (): void => {
    setIsDragging(false);
  };

  const transformStyle: CSSProperties = {
    transform: `translateX(${position}px)`,
    willChange: "transform",
  };

  return (
    <div className={containerClassName}>
      <div
        ref={containerRef}
        className={`w-full cursor-grab active:cursor-grabbing select-none ${className}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={transformStyle}
      >
        <div className="flex">
          {/* Render exactly 2 copies for perfect infinite loop */}
          <div ref={contentRef}>{children}</div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Example Usage ---------------- */

export function TextScrollExample(): JSX.Element {
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

  const textContent = (
    <div
      className="flex items-center font-light tracking-[0.6em] md:tracking-[1.2em] opacity-40 whitespace-nowrap"
      style={{ wordSpacing: "1.8em" }}
    >
      <span className="font-bold uppercase text-gray-300 text-[62px] xs:text-[72px] sm:text-[82px] md:text-[92px] lg:text-[104px] xl:text-[120px] 2xl:text-[204px] 3xl:text-[250px] 4xl:text-[320px] 5xl:text-[380px]">
        THE
      </span>
      <div className="relative flex items-start ml-1.5 sm:ml-2 md:ml-3 lg:ml-5 xl:ml-6 2xl:ml-8 3xl:ml-10 4xl:ml-14">
        <span className="font-bold uppercase leading-none text-red-900 text-[62px] xs:text-[72px] sm:text-[82px] md:text-[92px] lg:text-[104px] xl:text-[120px] 2xl:text-[204px] 3xl:text-[250px] 4xl:text-[320px] 5xl:text-[380px]">
          23
        </span>
        <span className="font-normal absolute text-gray-300 -top-0 -right-7 sm:-top-0 sm:-right-5 md:-top-0 md:-right-6 lg:-top-0 lg:-right-12 xl:-top-0 xl:-right-16 2xl:-top-0 2xl:-right-20 3xl:-top-0 3xl:-right-26 4xl:-top-0 4xl:-right-32 text-[16px] xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[40px] xl:text-[50px] 2xl:text-[70px] 3xl:text-[100px] 4xl:text-[120px] 5xl:[160px]">
          rd
        </span>
      </div>
      <span className="font-bold uppercase text-gray-300 ml-4 sm:ml-6 md:ml-8 lg:ml-16 xl:ml-20 2xl:ml-28 3xl:ml-36 4xl:ml-44 text-[62px] xs:text-[72px] sm:text-[82px] md:text-[92px] lg:text-[104px] xl:text-[120px] 2xl:text-[204px] 3xl:text-[250px] 4xl:text-[320px] 5xl:text-[380px] mr-8 sm:mr-12 md:mr-16 lg:mr-20 xl:mr-28 2xl:mr-36 3xl:mr-44 4xl:mr-52">
        STUDIO
      </span>
    </div>
  );

  const missionContent = (
    <div className="flex whitespace-nowrap" style={{ pointerEvents: "auto" }}>
      {missionItems.map((item, index) => (
        <div
          key={`mission-${index}`}
          className="flex-shrink-0 flex items-start pr-8 sm:pr-12 md:pr-16 xl:pr-28 2xl:pr-32 3xl:pr-40 4xl:pr-48
                   w-70 sm:w-96 md:w-[28rem] lg:w-[35rem] xl:w-[40rem] 2xl:w-[45rem] 3xl:w-[50rem] 4xl:w-[65rem] cursor-pointer"
        >
          <div
            className="text-gray-300 font-black mr-4 sm:mr-6 md:mr-8 xl:mr-12 2xl:mr-14 3xl:mr-16 4xl:mr-20 flex-shrink-0"
            style={{
              fontSize: "clamp(7rem, 13vw, 20rem)",
              lineHeight: "0.75",
              fontWeight: 500,
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

  return (
    <div className="space-y-8">
      <InfiniteDraggableScroll
        speed={50}
        containerClassName="bg-black min-h-[50vh] flex items-center overflow-hidden"
      >
        {textContent}
      </InfiniteDraggableScroll>

      <InfiniteDraggableScroll
        speed={30}
        containerClassName="bg-white min-h-[50vh] flex items-center overflow-hidden py-16"
        pauseOnHover
      >
        {missionContent}
      </InfiniteDraggableScroll>
    </div>
  );
}
