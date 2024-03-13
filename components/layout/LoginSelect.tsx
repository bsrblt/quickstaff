"use client";
import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
import Link from "next/link";
import AuthContext from "../Ctx/AuthContext";

interface homePageSelectionProps {
  titleText: string;
  firstLink: string;
  secondLink: string;
  firstButtonText: string;
  secondButtonText: string;
}

const HomePageSelection: React.FC<homePageSelectionProps> = ({
  titleText,
  firstLink,
  secondLink,
  firstButtonText,
  secondButtonText,
}) => (
  <div className="backdrop-blur-[8px] shadow-xl bg-white/30 p-4 my-2 rounded-xl">
    <h2 className="md:text-3xl drop-shadow-xl text-2xl md:my-2 font-bold text-center text-white fontpop-3">
      {titleText}
    </h2>
    <Link href={firstLink}>
      <Button text={firstButtonText} type="button" className="" />
    </Link>
    <Link href={secondLink}>
      <Button text={secondButtonText} type="button" className="" />
    </Link>
  </div>
);

const LoginSelect = () => {
  const authCtx = useContext(AuthContext);
  const [content, setContent] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    if (!(authCtx?.isLoggedInPro || authCtx?.isLoggedInEmp)) {
      setContent(
        <HomePageSelection
          titleText="choose one:"
          firstLink="/pro"
          secondLink="/employer"
          firstButtonText="You are a pro"
          secondButtonText="You need a pro"
        />
      );
    } else if (authCtx?.isLoggedInPro) {
      setContent(
        <HomePageSelection
          titleText="choose destination:"
          firstLink="/#staffselect"
          secondLink="/pro/dashboard"
          firstButtonText="look for jobs"
          secondButtonText="go to dashboard"
        />
      );
    } else if (authCtx?.isLoggedInEmp) {
      setContent(
        <HomePageSelection
          titleText="choose destination:"
          firstLink="/#staffselect"
          secondLink="/employer/dashboard"
          firstButtonText="look for staff"
          secondButtonText="go to dashboard"
        />
      );
    } else {
      setContent(null);
    }
  }, [authCtx?.isLoggedInPro, authCtx?.isLoggedInEmp]);

  return content;
};

export default LoginSelect;
