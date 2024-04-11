"use client";
import React, { useContext } from "react";
import HowItWorks from "@/components/layout/HowItWorks";
import MainTitle from "@/components/layout/MainTitle";
import GlassCard from "@/components/layout/GlassCard";
import FileUploadInput from "@/components/layout/FileUploadInput";
import Button from "@/components/layout/Button";
import AuthContext from "@/components/Ctx/AuthContext";
import getInputClasses from "@/components/utils/inputClasses";
import InputField from "@/components/layout/InputField";
import ParallaxBackground from "@/components/layout/ParallaxBackground";

const Careers = () => {
  const authCtx = useContext(AuthContext);
  const inputClasses = getInputClasses(authCtx);

  const cardTexts = {
    textbig1: "enter your email",
    textbig2: "add some details",
    textbig3: "send us your cv",
    textsm1: `Just give us a way to get back to you and kindly remember to mark our mails as "not spam"`,
    textsm2:
      "Include any details in a concise manner so that we have the essential info about your work",
    textsm3:
      "Add your up-to-date cv and we'll keep it in order to return to you should an opportunity comes up.",
  };
  const handleBrowse = (file: File) => console.log("Selected file:", file);

  const message = (
    <div id="message-textarea" className="relative sm:mb-2 mb-2 p-1">
      <label
        htmlFor="message"
        className="sm:leading-7 leading-6 sm:text-sm text-xs text-white fontpop-3"
      >
        Message
      </label>
      <textarea
        id="message"
        name="message"
        minLength={10}
        maxLength={160}
        value={authCtx?.cvMessageInput}
        onChange={authCtx?.cvMessageChange}
        className="w-full bg-gray-100 rounded-lg border border-gray-400 focus:border-color2 focus:ring-1 focus:ring-color2 sm:h-32 h-24 text-base outline-none text-black sm:py-1 sm:px-3 leading-6 transition-colors duration-200 ease-in-out"
      ></textarea>
    </div>
  );
  const emailInput = (
    <div className="flex items-center justify-between gap-4 p-1 mb-1">
      <label className="block text-sm font-medium text-white fontpop-3">
        E-mail
      </label>
      <InputField
        className={inputClasses.mailInputClass}
        type="email"
        id="email"
        value={authCtx?.mailInput}
        onChange={authCtx?.emailChange || (() => {})}
        minLength={8}
        maxLength={50}
        placeholder="your@mail.com"
      />
    </div>
  );
  const positionText = (
    <div className="grid">
      <div className="sm:text-3xl text-md mt-1 py-2 antialiased fontpop-3 p-1">
        No available positions at this time.
      </div>
      <div
        id="blog-content"
        className="md:text-xl sm:text-lg text-sm text-justify leading-tight sm:py-4 mb-2 fontpop-1 antialiased fontpop-3 p-1"
      >
        Why not send us your CV along with a message so that we know where to
        look for in case we need your qualities?
      </div>
    </div>
  );
  const mainTitle = (
    <div
      id="maintitle"
      className="flex sm:my-[1rem] -mt-10 mx-3 justify-end items-end"
    >
      <MainTitle
        textBig={
          <h1 className="text-white lg:text-[6rem] xl:text-[rem] md:text-7xl sm:text-6xl text-5xl font-bold drop-shadow-xl backdrop-blur-[2px] fontpop-4">
            Care to
            <span className="text-bubblegum/90"> join</span> us?
          </h1>
        }
        textSmall={
          <h1 className="text-white lg:text-[2.5rem] md:text-3xl text-xl font-bold  backdrop-blur-[4px] drop-shadow-xl mt-4 md:pb-[3.3rem] pb-[1.3rem] antialiased fontpop-2 tracking-tight pl-1 fontpop-4">
            Check out job positions at
            <span className="text-color2 fontpop-7"> QuickStaff</span>
          </h1>
        }
      />
    </div>
  );
  const submitButton = (
    <div className="p-1">
      <Button type="button" text="Submit" onClick={() => {}} />
    </div>
  );
  const cvForm = (
    <div className="flex flex-col items-center justify-center text-white">
      <div className=" xl:w-[62%] lg:w-[70%] md:w-[98%] max-w-[93%] md:max-w-[95%] lg:max-w-[80%] xl:max-w-[65%] justify-center gap-8 space-x-8 -mt-4">
        <GlassCard>
          <div className="grid sm:p-8 p-2">
            {positionText}
            <div className="grid">
              <div className="flex sm:flex-row flex-col justify-between sm:items-center">
                <FileUploadInput onChange={handleBrowse} isValid={true} />
                {emailInput}
              </div>
              {message}
              {submitButton}
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );

  return (
    <main
      id="parallaxBackground"
      className="flex flex-col h-full items-center justify-center "
    >
      <section
        className="flex flex-col w-full min-h-screen sm:bg-cover bg-no-repeat bg-fixed bg-center justify-start items-center"
        // style={{
        //   backgroundImage: "url()",
        // }}
      >
        <ParallaxBackground imgSource="/office4.jpg" />
        {mainTitle}
        {cvForm}
        <div id="howitworks" className="block h-[4rem]" />
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

export default Careers;
