"use client";
import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
import Link from "next/link";
import AuthContext from "../Ctx/AuthContext";

interface HomePageSelectionProps {
  titleText: string;
  link1: string;
  link2: string;
  buttonText1: string;
  buttonText2: string;
}

const HomePageSelection: React.FC<HomePageSelectionProps> = ({
  titleText,
  link1,
  link2,
  buttonText1,
  buttonText2,
}) => (
  <div className="min-w-[17rem] sm:min-w-[21rem] backdrop-blur-[8px] shadow-xl bg-white/30 p-4 my-2 rounded-xl">
    <h2 className="md:text-3xl drop-shadow-xl text-2xl md:my-2 font-bold text-center text-white fontpop-3">
      {titleText}
    </h2>
    <Link href={link1}>
      <Button text={buttonText1} type="button" className="" />
    </Link>
    <Link href={link2}>
      <Button text={buttonText2} type="button" className="" />
    </Link>
  </div>
);

const LoginSelect = () => {
  const authCtx = useContext(AuthContext);
  const [content, setContent] = useState<React.ReactNode | null>(null);

  const setHomePageSelection = (
    titleText: string,
    link1: string,
    link2: string,
    buttonText1: string,
    buttonText2: string
  ) => {
    setContent(
      <HomePageSelection
        titleText={titleText}
        link1={link1}
        link2={link2}
        buttonText1={buttonText1}
        buttonText2={buttonText2}
      />
    );
  };

  useEffect(() => {
    if (!(authCtx?.isLoggedInPro || authCtx?.isLoggedInEmp)) {
      setHomePageSelection(
        "choose one:",
        "/pro",
        "/employer",
        "You are a pro",
        "You need a pro"
      );
    } else if (authCtx?.isLoggedInPro) {
      setHomePageSelection(
        "choose destination:",
        "/#staffselect",
        "/pro/dashboard",
        "look for jobs",
        "go to dashboard"
      );
    } else if (authCtx?.isLoggedInEmp) {
      setHomePageSelection(
        "choose destination:",
        "/#staffselect",
        "/employer/dashboard",
        "look for staff",
        "go to dashboard"
      );
    }
  }, [authCtx?.isLoggedInPro, authCtx?.isLoggedInEmp]);

  return content;
};

export default LoginSelect;
