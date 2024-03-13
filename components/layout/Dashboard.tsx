"use client";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../Ctx/AuthContext";
import Redirecting from "./Redirecting";
import Personal from "./Personal";

const Dashboard = () => {
  const authCtx = useContext(AuthContext);
  const [content, setContent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    if (authCtx?.isLoggedInPro || authCtx?.isLoggedInEmp) {
      setContent(
        <section
          className=" min-w-screen h-full bg-cover bg-fixed bg-center justify-center items-center fadeIn005 overflow-hidden "
          style={{
            backgroundImage: "url(/btts.png)",
          }}
        >
          <div className="flex-col flex justify-center items-center bg-color2/70 fadeIn005">
            <div className="lg:mt-16 mt-10 ">
              <Personal />
            </div>
          </div>
        </section>
      );
      return;
    } else if (!authCtx?.isLoggedInPro && !authCtx?.isLoggedInEmp) {
      setContent(<Redirecting />);
    }
  }, [authCtx?.isLoggedInPro, authCtx?.isLoggedInEmp, authCtx]);

  return <div>{content}</div>;
};

export default Dashboard;
