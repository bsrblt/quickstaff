import React from "react";
import HowItWorks from "@/components/layout/HowItWorks";
import RegisterInput from "@/components/layout/RegisterInput";
import MainTitle from "@/components/layout/MainTitle";
import ParallaxBackground from "@/components/layout/ParallaxBackground";

const cardTexts = {
  textbig1: "quick sign-up",
  textbig2: "wide job range",
  textbig3: "easy payment",
  textsm1:
    "Create your profile, tell us about your business and start searching for jobs immediately.",
  textsm2:
    "Use our work tracker to review the list of available jobs on the dates you're willing to work.",
  textsm3:
    "Select a job, do it, and get paid online the moment your employer confirms. Good deal!",
};

const WelcomePro = () => {
  return (
    <main
      id="parallaxBackground"
      className="flex flex-col min-h-screen items-center justify-center "
    >
      <section
        className="flex flex-col w-full h-screen bg-cover bg-fixed bg-center justify-start items-center"
        // style={{
        //   backgroundImage: "url(/chef1.jpg)",
        // }}
      >
        <ParallaxBackground imgSource="/chef1.jpg" />
        <div
          id="maintitle"
          className="flex h-[50%] sm:my-[4rem] mt-10 mx-2 justify-end items-end"
        >
          <MainTitle
            textBig={
              <h1 className="text-white lg:text-[6rem] xl:text-[rem] md:text-7xl pt-[1rem] sm:text-6xl text-5xl mt-20 font-bold drop-shadow-xl backdrop-blur-[2px] fontpop-2">
                Do it <span className="text-bubblegum/90 fontpop-2 ">your</span>{" "}
                way.
              </h1>
            }
            textSmall={
              <h1 className="text-white lg:text-[2.5rem] md:text-3xl text-xl font-bold  backdrop-blur-[2px] drop-shadow-xl  m-1 md:pb-[4rem] pb-[2.3rem] antialiased fontpop-2">
                Choose your work terms, be your own boss.
              </h1>
            }
          />
        </div>
        <div className="flex my-20 pb-5">
          <RegisterInput buttonText="Next Step" />
        </div>
        <div id="howitworks" className="block h-[4rem]"></div>
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

export default WelcomePro;
