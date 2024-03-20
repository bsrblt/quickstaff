import React from "react";
import HowItWorks from "@/components/layout/HowItWorks";
import MainTitle from "@/components/layout/MainTitle";
import PremiumOptions from "@/components/layout/PremiumOptions";

const cardTexts = {
  textbig1: "choose",
  textbig2: "pay",
  textbig3: "enjoy",
  textsm1: "Decide which is the best membership program for you.",
  textsm2: "Enter your credit card details and validate payment",
  textsm3: "You're ready! Now it's time to enjoy your premium benefits.",
};

const PremiumPage = () => {
  return (
    <main
      id="parallaxBackground"
      className="flex flex-col min-h-screen items-center justify-center"
    >
      <section
        className="flex flex-col w-full min-h-screen bg-cover bg-fixed bg-center justify-start items-center"
        style={{
          backgroundImage: "url(/alevtakil.jpg)",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <MainTitle
            textBig={
              <h1 className="text-white lg:text-[6rem] xl:text-[rem] md:text-7xl pt-[1rem] sm:text-6xl text-5xl mt-0 m-3 font-bold drop-shadow-xl backdrop-blur-[2px] fontpop-3">
                Enjoy the{" "}
                <span className="text-bubblegum/90 fontpop-4 ">privilege.</span>
              </h1>
            }
            textSmall={
              <h1 className=" text-white lg:text-[2.5rem] md:text-3xl text-xl font-bold  backdrop-blur-[2px] drop-shadow-xl  m-3 md:pb-[4rem] pb-[2.3rem] antialiased fontpop-3 mt-6">
                Get premium benefits today!
              </h1>
            }
          />

          <PremiumOptions />
          <div id="howitworks" className="block h-[4rem]"></div>
          <HowItWorks
            textbig1={cardTexts.textbig1}
            textbig2={cardTexts.textbig2}
            textbig3={cardTexts.textbig3}
            textsm1={cardTexts.textsm1}
            textsm2={cardTexts.textsm2}
            textsm3={cardTexts.textsm3}
          />
        </div>
      </section>
    </main>
  );
};

export default PremiumPage;
