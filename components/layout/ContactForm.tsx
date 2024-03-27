"use client";
import React, { useContext, ChangeEvent, useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import getInputClasses from "../utils/inputClasses";
import AuthContext from "../Ctx/AuthContext";
import Image from "next/image";
import down1 from "../../public/down1.svg";

interface ContactFormProps {
  onCityChange: (city: string) => void;
  selectedCity: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  onCityChange,
  selectedCity,
}) => {
  const authCtx = useContext(AuthContext);
  const inputClasses = getInputClasses(authCtx);
  const [formVisible, setFormVisible] = useState(false);

  const cityChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    onCityChange(e.target.value);
  };

  const formShown =
    "h-auto visible opacity-100 transform scale-y-100 duration-700";
  const formHidden = "h-0 invisible opacity-0 transform scale-y-0 duration-700";

  const toggleFormHandler = () => setFormVisible((prev) => !prev);

  return (
    <div className="container sm:px-5 sm:py-24 sm:pt-32 sm:mx-auto flex flex-col ">
      <div className="fixed lg:w-1/3 md:w-1/2 rounded-lg sm:p-10 pt-8 p-4 flex flex-col md:ml-auto w-full mt-12 md:mt-0 sm:relative z-5 shadow-2xl backdrop-blur-[8px] bg-white/30">
        <h2
          className="text-color1 sm:text-2xl text-xl px-[1px] sm:mb-1 cursor-pointer"
          onClick={toggleFormHandler}
        >
          Feedback
        </h2>
        <p
          className="leading-snug sm:mb-5 mb-2 py-1 sm:text-lg text-[0.85rem] text-gray-600  cursor-pointer"
          onClick={toggleFormHandler}
        >
          Tell us what's on your mind. We'll get back to you as soon as
          possible.
        </p>
        <button
          type="button"
          className={`flex px-1 items-center justify-center transition-transform duration-300 transform ${
            !formVisible ? "rotate-0" : "rotate-180"
          }`}
          onClick={toggleFormHandler}
        >
          <Image
            src={down1}
            alt="arrow down or up"
            width={36}
            height={36}
            className={`bg-transparent mx-3 -my-2 ${
              !formVisible
                ? " border-b-2 shadow-xl rounded-lg animate-bounce"
                : ""
            }`}
          />
        </button>
        <div
          id="form"
          className={formVisible ? `${formShown}` : `${formHidden} `}
        >
          <div id="city-selector" className="relative sm:mb-4 mb-2">
            <label
              htmlFor="city"
              className="sm:leading-7 leading-6 sm:text-sm text-xs text-gray-600"
            >
              City
            </label>
            <select
              id="city"
              value={selectedCity}
              onChange={cityChangeHandler}
              className="w-full rounded-lg border border-gray-400 focus:border-color2 text-base text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            >
              <option>Istanbul</option>
              <option>London</option>
              <option>Paris</option>
              <option>Madrid</option>
            </select>
          </div>
          <div id="email">
            <InputField
              className={inputClasses.mailInputClass}
              type="email"
              id="email"
              label="Email"
              value={authCtx?.mailInput}
              onChange={authCtx?.emailChange || (() => {})}
              minLength={8}
              maxLength={50}
              placeholder="your@mail.com"
            />
          </div>
          <div id="message-textarea" className="relative sm:mb-4 mb-2">
            <label
              htmlFor="message"
              className="sm:leading-7 leading-6 sm:text-sm text-xs text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              minLength={10}
              maxLength={160}
              value={authCtx?.messageInput}
              onChange={authCtx?.messageChange}
              className="w-full bg-white rounded-lg border border-gray-400 focus:border-color2 focus:ring-1 focus:ring-color2 sm:h-32 h-24 text-base outline-none text-gray-700 sm:py-1 sm:px-3 leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <Button type="button" text="Submit" onClick={() => {}}></Button>
          <p
            id="reminder"
            className="sm:text-sm text-xs text-gray-600 sm:mt-3 mt-1"
          >
            Please remember to mark our mails as "not spam" in order to receive
            our reply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
