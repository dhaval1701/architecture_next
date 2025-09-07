import Marquee from "react-fast-marquee";

export default function InfiniteScrollText() {
  return (
    <Marquee speed={50} gradient={true} pauseOnHover={true} direction="left">
      Your scrolling text goes here • Another item • And another one •
    </Marquee>
  );
}
