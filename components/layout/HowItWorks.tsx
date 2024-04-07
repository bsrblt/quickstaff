import React from "react";
import Link from "next/link";
import Card from "./Card";
import GlassCard from "./GlassCard";
import Stats from "./Stats";
import CheckFaq from "./CheckFaq";

interface HowItWorksProps {
  textbig1: string;
  textbig2: string;
  textbig3: string;
  textsm1: string;
  textsm2: string;
  textsm3: string;
}

const HowItWorks: React.FC<HowItWorksProps> = ({
  textbig1,
  textbig2,
  textbig3,
  textsm1,
  textsm2,
  textsm3,
}) => {
  return (
    <section className="flex flex-col w-full justify-center items-center text-white space-y-8 bg-gradient-to-b from-color1/70">
      <div className="sm:text-xl xl:w-[69%] sm:w-[90%] w-[90%] text-md space-y-8 backdrop-blur-[2px]">
        <Link href="#howitworks">
          <h1 className="backdrop-blur-sm block sm:text-5xl text-2xl font-bold text-center sm:my-10 my-5 cursor-pointer fontpop-3">
            How does this work?
          </h1>
        </Link>
        <div className="grid text-center -mx-1 sm:space-y-8 space-y-4 items-center ">
          <p className="text-md mx-5 px-1 fontpop-2">
            Welcome to a revolutionary and innovative online matchmaking
            platform, connecting highly sought-after and skilled event staff
            including chefs, bartenders, waiters and cleaners and all kinds of
            catering clients!
          </p>
          <p className="text-md mx-5 px-1 fontpop-2">
            For the very first time, both event staff and customers have access
            to a completely transparent and user-friendly temporary placement
            service, void of any hidden agendas or smoke and mirrors.
          </p>
        </div>
      </div>
      <div className="flex flex-col mx- items-center justify-center max-w-[93%] sm:max-w-[85%] gap-5 sm:gap-6 md:gap-4 lg:gap-5 xl:gap-8 md:max-w-[95%] lg:max-w-[80%] xl:max-w-[65%]">
        <div className="flex flex-col sm:flex-row xl:space-x-8 md:space-x-5 sm:space-x-5 sm:space-y-0 space-y-4 justify-center ">
          <Card textBig={textbig1} textSmall={textsm1} />
          <Card textBig={textbig2} textSmall={textsm2} />
          <Card textBig={textbig3} textSmall={textsm3} />
        </div>
        <div className="flex items-center justify-center">
          <GlassCard>
            <Stats />
          </GlassCard>
        </div>
      </div>

      <CheckFaq />
    </section>
  );
};

export default HowItWorks;
