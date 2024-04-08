"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import up1 from "../../public/up1.svg";
import down1 from "../../public/down1.svg";
import { usePathname, useRouter } from "next/navigation";

const ScrollArrows = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [showArrowUp, setShowArrowUp] = useState(false);
  const [showArrowDown, setShowArrowDown] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const currentPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - windowHeight;

    if (pathname === "/blog" || "/news") {
      setShowArrowUp(currentPosition > 0);
      setShowArrowDown(currentPosition < maxScroll);
    } else if (!hasScrolled && currentPosition > 0) {
      setHasScrolled(true);
    }
  };

  const scrollToNextScreen = () => {
    const windowHeight = window.innerHeight;
    const currentPosition = window.scrollY;
    const nextPosition = currentPosition + windowHeight;

    window.scrollTo({
      top: nextPosition,
      behavior: "smooth",
    });
  };

  const scrollToPrevScreen = () => {
    const windowHeight = window.innerHeight;
    const currentPosition = window.scrollY;
    const nextPosition = currentPosition - windowHeight;

    window.scrollTo({
      top: nextPosition,
      behavior: "smooth",
    });
  };

  const arrowClass =
    "flex fixed px-2 z-20 bottom-0 w-[5rem] rounded-2xl justify-center items-center left-1/2 transform -translate-x-1/2 opacity-80 hover:opacity-100 hover:shadow-xl cursor-pointer duration-300 -ml-10";

  const BlogArrows = (
    <div className="space-x-11">
      {showArrowUp && (
        <div
          className={`${arrowClass} ${
            showArrowDown ? "-ml-10 bg-white/40 " : "animate-bounce"
          }`}
          onClick={scrollToPrevScreen}
        >
          <Image src={up1} alt="previous blog title" />
        </div>
      )}
      {showArrowDown && (
        <div
          className={`${arrowClass} ${
            showArrowUp ? "ml-10 bg-white/40 " : "animate-bounce"
          }`}
          onClick={scrollToNextScreen}
        >
          <Image src={down1} alt="next blog title" />
        </div>
      )}
    </div>
  );

  const HomeArrows = (
    <div className="space-x-11">
      {showArrowDown && !hasScrolled && (
        <div
          className={`${arrowClass} ${"motion-safe:animate-bounce"}`}
          onClick={() => router.push("/#staffselect")}
        >
          <Image src={down1} alt="next blog title" />
        </div>
      )}
    </div>
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  return <>{pathname === "/" ? HomeArrows : BlogArrows}</>;
};

export default ScrollArrows;
