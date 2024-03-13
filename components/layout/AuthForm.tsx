"use client";
import React, { useContext, useEffect } from "react";
import AuthContext from "../Ctx/AuthContext";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Button from "./Button";
import InputField from "./InputField";
import getInputClasses from "../utils/inputClasses";

const AuthForm = () => {
  const authCtx = useContext(AuthContext);
  const router = useRouter();
  const pathname = usePathname();
  const inputClasses = getInputClasses(authCtx);

  const memberText = (
    <p className="sm:my-6 mb-4 text-center text-sm italic text-gray-600">
      {authCtx?.isNewMember ? "Already a member? " : "Not a member? "}
      <span
        onClick={
          authCtx?.isNewMember
            ? authCtx?.existingUserHandler
            : authCtx?.newUserHandler
        }
        className="text-color1 cursor-pointer focus:outline-none focus:text-color2 hover:text-color2"
      >
        {authCtx?.isNewMember ? "Login." : "Sign up."}
      </span>
    </p>
  );

  const firstNameInput = (
    <InputField
      className={inputClasses.firstNameInputClass}
      type="text"
      id="firstname"
      label="First Name"
      value={authCtx?.firstNameInput}
      onChange={authCtx?.firstNameChange || (() => {})}
      minLength={3}
      maxLength={20}
      placeholder="your firstname"
    />
  );
  const lastNameInput = (
    <InputField
      className={inputClasses.lastNameInputClass}
      type="text"
      id="lastname"
      label="Last Name"
      value={authCtx?.lastNameInput}
      onChange={authCtx?.lastNameChange || (() => {})}
      minLength={3}
      maxLength={20}
      placeholder="your lastname"
    />
  );
  const emailInput = (
    <InputField
      className={inputClasses.mailInputClass}
      type="email"
      id="email"
      label="Email Address"
      value={authCtx?.mailInput}
      onChange={authCtx?.emailChange || (() => {})}
      minLength={8}
      maxLength={50}
      placeholder="your@mail.com"
    />
  );
  const pwInput = (
    <InputField
      className={inputClasses.pwInputClass}
      type="password"
      id="password"
      label="Password"
      value={authCtx?.pwInput}
      onChange={authCtx?.pwChange || (() => {})}
      minLength={6}
      maxLength={18}
      placeholder="your password"
    />
  );

  const pwForgotHideOrShowAnim =
    authCtx?.isNewMember || authCtx?.forgotPw ? (
      <motion.div
        style={{ overflow: "hidden" }}
        initial={{ height: "auto" }}
        animate={{ height: 0 }}
        transition={{ duration: 1 }}
        exit={{ height: 0 }}
      >
        <span
          onClick={authCtx?.forgotPwHandler}
          className="text-sm cursor-pointer text-color1/60 focus:text-color2 hover:text-color2"
        >
          {null}
        </span>
      </motion.div>
    ) : !authCtx?.isNewMember ? (
      <motion.div
        style={{ overflow: "hidden" }}
        initial={{ height: 0 }}
        animate={{ height: "auto" }}
        transition={{ duration: 1 }}
        exit={{ height: "auto" }}
      >
        <span
          onClick={(e: React.MouseEvent<HTMLFormElement>) =>
            authCtx?.forgotPwHandler(e)
          }
          className="text-sm cursor-pointer text-color1/60 focus:text-color2 hover:text-color2"
        >
          Forgot password?
        </span>
      </motion.div>
    ) : null;

  const firstNameHideOrShowAnim = !authCtx?.isNewMember ? (
    <motion.div
      style={{ overflow: "hidden" }}
      initial={{ height: "auto" }}
      animate={{ height: 0 }}
      transition={{ duration: 1 }}
      exit={{ height: 0 }}
    >
      {firstNameInput}
    </motion.div>
  ) : (
    <motion.div
      style={{ overflow: "hidden" }}
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      transition={{ duration: 1 }}
      exit={{ height: "auto" }}
    >
      {firstNameInput}
    </motion.div>
  );

  const lastNameHideOrShowAnim = !authCtx?.isNewMember ? (
    <motion.div
      style={{ overflow: "hidden" }}
      initial={{ height: "auto" }}
      animate={{ height: 0 }}
      transition={{ duration: 1 }}
      exit={{ height: 0 }}
    >
      {lastNameInput}
    </motion.div>
  ) : (
    <motion.div
      style={{ overflow: "hidden" }}
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      transition={{ duration: 1 }}
      exit={{ height: "auto" }}
    >
      {lastNameInput}
    </motion.div>
  );

  const pwHideOrShowAnim = authCtx?.forgotPw ? (
    <motion.div
      style={{ overflow: "hidden" }}
      initial={{ height: "auto" }}
      animate={{ height: 0 }}
      transition={{ duration: 1 }}
      exit={{ height: 0 }}
    >
      {pwInput}
    </motion.div>
  ) : (
    <motion.div
      style={{ overflow: "hidden" }}
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      transition={{ duration: 1 }}
      exit={{ height: "auto" }}
    >
      {pwInput}
    </motion.div>
  );

  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log("Form submitted");

    const formInputs = {
      firstName: authCtx?.firstNameInput,
      lastName: authCtx?.lastNameInput,
      email: authCtx?.mailInput,
      password: authCtx?.pwInput,
    };
    console.log(formInputs);

    let dashboardRoute = "";

    switch (pathname) {
      case "/pro/login":
        if (authCtx?.validSignupAuth) {
          dashboardRoute = "/pro/dashboard";
          authCtx?.proSignup(e);
        } else if (authCtx?.validLoginAuth) {
          dashboardRoute = "/pro/dashboard";
          authCtx?.proLogin(e);
        }
        break;

      case "/employer/login":
        if (authCtx?.validSignupAuth) {
          dashboardRoute = "/employer/dashboard";
          authCtx?.empSignup(e);
        } else if (authCtx?.validLoginAuth) {
          dashboardRoute = "/employer/dashboard";
          authCtx?.empLogin(e);
        }
        break;

      default:
        break;
    }

    if (dashboardRoute) {
      authCtx?.clearInputs();
      router.push(dashboardRoute);
    }
  };

  const formButton = (
    <div className="mt-4 w-auto">
      <Button
        text={
          authCtx?.isNewMember
            ? "Sign Up"
            : authCtx?.forgotPw
            ? "Submit"
            : "Login"
        }
        type="submit"
        className=""
        onClick={submitHandler}
      ></Button>
    </div>
  );

  useEffect(() => {
    if (authCtx?.isLoggedInPro || authCtx?.isLoggedInEmp) {
      authCtx?.clearInputs();
    }
  }, [authCtx?.isLoggedInPro, authCtx?.isLoggedInEmp]);

  return (
    <form className="">
      {memberText}
      <div className="flex flex-col flex-wrap space-y-5 ">
        {firstNameHideOrShowAnim}
        {lastNameHideOrShowAnim}
        {emailInput}
        {pwHideOrShowAnim}
        {pwForgotHideOrShowAnim}
      </div>
      {formButton}
    </form>
  );
};

export default AuthForm;
