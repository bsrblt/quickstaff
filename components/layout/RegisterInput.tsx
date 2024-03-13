"use client";
import Link from "next/link";
import React, { useContext } from "react";
import AuthContext from "../Ctx/AuthContext";
import getInputClasses from "../utils/inputClasses";
import { usePathname } from "next/navigation";

const RegisterInput = () => {
  const authCtx = useContext(AuthContext);
  const pathname = usePathname();
  const inputClasses = getInputClasses(authCtx);

  return (
    <div>
      <input
        type="email"
        name="email"
        id="id"
        minLength={8}
        maxLength={40}
        placeholder="your@mail.com"
        value={authCtx?.mailInput}
        onChange={authCtx?.emailChange}
        className={inputClasses.registerInputClass}
      />
      <Link
        href={
          pathname === "/pro"
            ? "/pro/login"
            : pathname === "/employer"
            ? "/employer/login"
            : "/"
        }
      >
        <button className="px-8 w-full rounded-b-lg bg-color1 hover:bg-color2 duration-300 text-white-600 font-bold p-4 uppercase">
          Next step
        </button>
      </Link>
    </div>
  );
};

export default RegisterInput;
