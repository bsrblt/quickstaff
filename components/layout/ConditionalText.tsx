"use client";
import { useState, useContext, useEffect } from "react";
import AuthContext from "../Ctx/AuthContext";
import { usePathname } from "next/navigation";

interface ConditionalTextProps {
  type: "welcome" | "staff" | "join" | "greet" | "roleaction" | "account";
}

const ConditionalText: React.FC<ConditionalTextProps> = ({ type }) => {
  const authCtx = useContext(AuthContext);
  const pathname = usePathname();

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let text = "";

    if (type === "welcome") {
      text =
        authCtx?.isLoggedInPro || authCtx?.isLoggedInEmp
          ? "Welcome to our online staff booking system."
          : "Sign up to our online staff booking system.";
    } else if (type === "staff") {
      text = authCtx?.isLoggedInPro
        ? "Choose your role:"
        : authCtx?.isLoggedInEmp
        ? "Get assisted by the best:"
        : "Get assisted by the best:";
    } else if (type === "roleaction") {
      text = authCtx?.isLoggedInPro
        ? "find jobs as a "
        : authCtx?.isLoggedInEmp
        ? "hire a"
        : "hire a";
    } else if (type === "greet") {
      text = authCtx?.isNewMember ? "Welcome." : "Welcome back.";
    } else if (type === "account") {
      text = authCtx?.isNewMember
        ? `Create your ${
            pathname === "/employer/login" ? "employer" : "professional"
          } account.`
        : authCtx?.forgotPw
        ? "Enter your email to reset password."
        : "Enter your email and password.";
    } else if (type === "join") {
      text =
        pathname === "/employer/login"
          ? "Come on in and find the right staff for your events. Hire, review and get the job done according to your preferences. This is where you design your events online."
          : "Come on in and take your rightful place in our professionals team. Manage your profile, service terms and settings. This is where you design your career online.";
    }

    setDisplayText(text);
  }, [authCtx?.isLoggedInPro, authCtx?.isLoggedInEmp, type, authCtx]);

  return <p className="transition-all duration-700">{displayText}</p>;
};

export default ConditionalText;
