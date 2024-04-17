"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import AuthContext from "../Ctx/AuthContext";
import login from "../../public/login.svg";
import logout from "../../public/logout.svg";
import Image from "next/image";

const AuthLinks: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const authCtx = useContext(AuthContext);

  let linkRoute;
  if (authCtx?.isLoggedInPro || authCtx?.isLoggedInEmp) {
    linkRoute = "/";
  } else if (pathname === "/pro/login" || pathname === "/employer/login") {
    linkRoute = "";
  } else if (
    pathname === "/pro" &&
    (!authCtx?.isLoggedInPro || !authCtx?.isLoggedInEmp)
  ) {
    linkRoute = "/pro/login";
  } else if (
    pathname === "/employer" &&
    (!authCtx?.isLoggedInPro || !authCtx?.isLoggedInEmp)
  ) {
    linkRoute = "/employer/login";
  } else {
    linkRoute = "/#choice";
  }

  const loginImage = (
    <Image
      src={!authCtx?.isLoggedInPro || !authCtx?.isLoggedInEmp ? login : logout}
      alt="login or signup"
      width={24}
      height={24}
    />
  );

  const loginText = (
    <>
      {!authCtx?.isLoggedInPro && !authCtx?.isLoggedInEmp
        ? "login/signup"
        : "logout"}
    </>
  );

  const clickHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (authCtx?.isLoggedInPro || authCtx?.isLoggedInEmp) {
      authCtx?.logout(e);
      router.push("/");
    }
  };

  return (
    <div className="flex items-center space-x-5" onClick={clickHandler}>
      <Link
        href={linkRoute}
        className="flex mb-[0.1rem] mx-1 cursor-pointer transition-colors text-xs sm:text-md items-center text-purple-900 opacity-95 transition-duration-300 hover:scale-104 hover:opacity-100 sm:text-sm md:text-[1rem] lg:text-lg xl:text-lg pr-1 md:px-2 lg:px-3 xl:px-4 sm:space-x-2 md:space-x-4 lg:space-x-6 xl:space-x-8duration-300 font-semibold hover:text-color1 fontpop-1 antialiased"
      >
        {loginText}
        {loginImage}
      </Link>
    </div>
  );
};
export default AuthLinks;
