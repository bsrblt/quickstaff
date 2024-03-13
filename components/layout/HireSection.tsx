import React from "react";
import Dater from "@/components/layout/Dater";
import MainTitle from "./MainTitle";
import ConditionalText from "./ConditionalText";

interface HireSectionProps {
  backgroundUrl: string;
  hireWord: string;
}

const HireSection: React.FC<HireSectionProps> = ({
  backgroundUrl,
  hireWord,
}) => {
  return (
    <section
      className="flex flex-col w-full h-screen bg-cover bg-fixed bg-center justify-start items-center fadeIn"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: "cover",
        animation: "fadeIn 0.1s ease-in-out",
      }}
    >
      <div className="sm:mt-10 mx-3">
        <MainTitle
          textBig={
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold drop-shadow-xl  backdrop-blur-[4px] sm:mt-20 fontpop-4 mb-1">
              <span className="text-silver">
                <ConditionalText type="roleaction" />
              </span>{" "}
              <span className="">{hireWord}</span>
            </h1>
          }
          textSmall={
            <h1 className="text-xl md:text-4xl text-silver font-bold drop-shadow-xl px-[1px]  backdrop-blur-[4px] fontpop-3 mt-2">
              Please enter your event dates below:
            </h1>
          }
        />
      </div>
      <Dater />
    </section>
  );
};

export default HireSection;
