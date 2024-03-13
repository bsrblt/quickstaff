"use client";
import Image from "next/image";
import React, { useContext } from "react";
import logo from "../../public/qq4.svg";
import { usePathname } from "next/navigation";
import AuthContext from "../Ctx/AuthContext";
import animateText from "../utils/AnimateText";
import AuthForm from "./AuthForm";
import GlassCard from "./GlassCard";
import ConditionalText from "./ConditionalText";

const LoginFullPage = () => {
  const pathname = usePathname();
  const authCtx = useContext(AuthContext);

  const accountAccessText = authCtx?.isNewMember
    ? `Create your ${
        pathname === "/employer/login" ? "employer" : "professional"
      } account.`
    : authCtx?.forgotPw
    ? "Enter your email to reset password."
    : "Enter your email and password.";

  const greetText = authCtx?.isNewMember ? "Welcome." : "Welcome back.";

  return (
    <div className="bg-gradient-to-b from-white/100 to-white/70  dark:bg-gray-900 w-full">
      <div className="sm:flex">
        <section
          id="welcome"
          className="bg-cover bg-no-repeat w-full  sm:h-screen h-full overflow-hidden"
          style={{ backgroundImage: "url(/chefandwaiters.jpg)" }}
        >
          <div className="flex relative items-center h-full sm:mt-0 sm:landscape:-bottom-1 md:landscape:-bottom-2 lg:landscape:-bottom-20 pt-20 ">
            <div className="h-auto bg-gradient-to-r mt-20 from-white/50 ... fontpop-1">
              {animateText(
                greetText,
                "sm:text-4xl text-[1.5rem] my-4 px-2 font-bold text-color1  drop-shadow-xl"
              )}

              <GlassCard>
                <div className="max-w-lg my-4 mx-1 mt-3 px-2 sm:text-md md:text-lg text-sm text-color2 font-semibold">
                  <ConditionalText type="join" />
                </div>
              </GlassCard>
            </div>
          </div>
        </section>
        <section
          id="loginform"
          className="flex sm:h-full h-[10%] max-w-[100%] sm:mt-[6rem] md:mt-[7rem] items-start "
        >
          <div className=" flex flex-col -mt-20 sm:mt-2 ">
            <div className="text-center sm:w-[21rem] top-0 left-0 right-0 sm:visible invisible  ">
              <Image src={logo} alt="quickstaff logo" className="sm:p-3" />
            </div>
            <div className="flex items-center justify-center text-center fontpop-1">
              {animateText(
                accountAccessText,
                "mb-3 sm:pt-3 text-md text-gray-600 dark:text-gray-300"
              )}
            </div>
            <div className="mb-3 w-[95%] pb-3 pl-4">
              <AuthForm />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginFullPage;
