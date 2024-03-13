import React from "react";
import "./globals.css";
import HowItWorks from "@/components/layout/HowItWorks";
import StaffSelection from "@/components/layout/StaffSelection";
import LoginSelect from "@/components/layout/LoginSelect";
import MainTitle from "@/components/layout/MainTitle";
import ScrollArrows from "@/components/layout/ScrollArrows";
import ConditionalText from "@/components/layout/ConditionalText";

const cardTexts = {
  textbig1: "quick sign-up",
  textbig2: "skillful staff",
  textbig3: "easy payment",
  textsm1:
    "Create your profile, tell us about your business and start searching for staff immediately.",
  textsm2:
    "Use our availability tracker to review the profiles of available staff on the date of your event.",
  textsm3:
    "Pay online to confirm your booking in an instant, and you're done! Let the pros handle it.",
};

const Home = () => {
  return (
    <main className="">
      <section
        className=" min-w-screen h-full bg-cover bg-fixed bg-center justify-center items-center fadeIn005 overflow-hidden "
        style={{
          backgroundImage: "url(/jj.jpg)",
        }}
      >
        <div className="min-h-screen relative">
          <div className="sticky sm:top-10 flex flex-col h-screen mt-[8rem] items-center">
            <div id="maintitle" className="max-h-[20%] mx-3">
              <MainTitle
                textBig={
                  <div className="lg:text-[6rem] xl:text-[rem] md:text-7xl text-6xl font-bold my-1 pt-[1rem] px-1 drop-shadow-xl ">
                    <h1 className="text-white fontpop-2">
                      let
                      <span className="text-bubblegum/80 backdrop-blur-[2px] fontpop-2">
                        {" "}
                        pros
                      </span>
                    </h1>
                    <h1 className="pb-1 fontpop-2">handle it.</h1>
                  </div>
                }
                textSmall={
                  <h1
                    id="choice"
                    className="lg:text-[2.5rem] md:text-3xl text-xl font-bold  drop-shadow-xl m-1 mb-1 md:pb-[4rem] pb-[2.3rem] fontpop-4 backdrop-blur-[2px] text-white"
                  >
                    <ConditionalText type="welcome" />
                  </h1>
                }
              />
            </div>
            <div
              id="loginselect"
              className="flex min-h-[70%] justify-center items-center mx-3"
            >
              <LoginSelect />
            </div>
          </div>
        </div>
        <StaffSelection />
        <div id="howitworks" className="block h-[3.7rem]"></div>
        <HowItWorks
          textbig1={cardTexts.textbig1}
          textbig2={cardTexts.textbig2}
          textbig3={cardTexts.textbig3}
          textsm1={cardTexts.textsm1}
          textsm2={cardTexts.textsm2}
          textsm3={cardTexts.textsm3}
        />
        <ScrollArrows />
      </section>
    </main>
  );
};
export default Home;
