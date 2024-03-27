import React from "react";
import HowItWorks from "@/components/layout/HowItWorks";
import RegisterInput from "@/components/layout/RegisterInput";
import MainTitle from "@/components/layout/MainTitle";

const cardTexts = {
  textbig1: "quick sign-up",
  textbig2: "skillful staff",
  textbig3: "easy payment",
  textsm1:
    "Create your profile, tell us about your business and start searching for staff immediately.",
  textsm2:
    "Use our availability tracker to review the profiles of available staff on the date of your event.",
  textsm3:
    "Pay online to confirm your booking in an instant, and that's it! You're done. Let the pros handle it.",
};
const WelcomeEmployer = () => {
  return (
    <main
      id="parallaxBackground"
      className="flex flex-col min-h-screen items-center justify-center "
    >
      <section
        className="flex flex-col w-full h-screen bg-cover bg-fixed bg-center justify-start items-center"
        style={{
          backgroundImage: "url(/i-9.jpg)",
        }}
      >
        <div className="flex h-[50%] sm:my-[4rem] my-20 mx-2 justify-end items-end ">
          <MainTitle
            textBig={
              <h1 className="lg:text-9xl md:text-8xl sm:text-7xl text-7xl font-bold text-white  drop-shadow-xl sm:mt-10 mt-10 pt-10 backdrop-blur-[2px]    backdrop-brightness-10 fontpop-4">
                Just relax.
              </h1>
            }
            textSmall={
              <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold text-white  drop-shadow-xl sm:mt-1 sm:pt-1 pl-[3px] backdrop-blur-[4px] mb-20 fontpop-4 backdrop-brightness-10 rounded-md">
                We'll take care of everything.
              </h1>
            }
          />
        </div>

        <div className="flex h-[50%] sm:-mt-[0.2rem] drop-shadow-lg">
          <RegisterInput buttonText="Next Step" />
        </div>
        <div id="howitworks" className="block h-11 -mt-20"></div>
      </section>
      <HowItWorks
        textbig1={cardTexts.textbig1}
        textbig2={cardTexts.textbig2}
        textbig3={cardTexts.textbig3}
        textsm1={cardTexts.textsm1}
        textsm2={cardTexts.textsm2}
        textsm3={cardTexts.textsm3}
      />
    </main>
  );
};

export default WelcomeEmployer;
