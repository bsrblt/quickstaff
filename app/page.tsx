import React, { Suspense, lazy, CSSProperties } from "react";
import "./globals.css";
import HowItWorks from "@/components/layout/HowItWorks";
import StaffSelection from "@/components/layout/StaffSelection";
import MainTitle from "@/components/layout/MainTitle";
import ScrollArrows from "@/components/layout/ScrollArrows";
import Button from "@/components/layout/Button";
import ParallaxBackground from "@/components/layout/ParallaxBackground";
const LoginSelect = lazy(() => import("@/components/layout/LoginSelect"));

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
      <section className="relative max-w-screen h-full bg-center bg-no-repeat justify-center items-center fadeIn005 overflow-hidden ">
        <ParallaxBackground imgSource="/jj.jpg" />
        <div className="min-h-screen relative">
          <div className="sticky sm:top-10 flex flex-col h-screen mt-[6rem] items-center">
            <div id="maintitle" className="max-h-[20%] mx-3">
              <MainTitle
                textBig={
                  <div className="lg:text-[6rem] xl:text-[rem] md:text-7xl text-6xl font-bold my-1 pt-[1rem] px-1 drop-shadow-xl ">
                    <h1 className="text-white fontpop-2">
                      let
                      <span className="text-bubblegum/80 backdrop-blur-[2px] fontpop-4">
                        {" "}
                        pros
                      </span>
                    </h1>
                    <h1 className="pb-1 text-white fontpop-2">handle it.</h1>
                  </div>
                }
                textSmall={
                  <h1
                    id="choice"
                    className="lg:text-[2.5rem] md:text-3xl text-xl font-bold  drop-shadow-xl m-1 mb-1 md:pb-[4rem] pb-[2.3rem] fontpop-4 backdrop-blur-[2px] text-white"
                  >
                    <p>Welcome to our online staff booking system.</p>
                  </h1>
                }
              />
            </div>
            <div
              id="loginselect"
              className="flex min-h-[70%] justify-center items-center mx-3"
            >
              <Suspense
                fallback={
                  <div className="min-w-[17rem] sm:min-w-[21rem] backdrop-blur-[8px] shadow-xl bg-white/30 p-4 my-2 rounded-xl">
                    <h2 className="md:text-3xl drop-shadow-xl text-2xl md:my-2 font-bold text-center text-white fontpop-3">
                      loading
                    </h2>
                    <Button text="" type="button" className="" />
                    <Button text="" type="button" className="" />
                  </div>
                }
              >
                <LoginSelect />
              </Suspense>
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
