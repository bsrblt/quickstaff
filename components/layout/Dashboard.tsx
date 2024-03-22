"use client";
import React, { useContext } from "react";
import AuthContext from "../Ctx/AuthContext";
import Redirecting from "./Redirecting";
import DashboardContent from "./DashboardContent";

const Dashboard = () => {
  const authCtx = useContext(AuthContext);

  const content = (
    <section
      className=" min-w-screen h-full bg-cover bg-fixed bg-center justify-center items-center fadeIn005 overflow-hidden "
      style={{
        backgroundImage: "url(/btts.png)",
      }}
    >
      <div className="flex-col flex justify-center items-center bg-color2/70 fadeIn005">
        <div className="lg:mt-16 mt-10 duration-300">
          <DashboardContent />
        </div>
      </div>
    </section>
  );

  if (!authCtx?.isLoggedInPro && !authCtx?.isLoggedInEmp) {
    console.log("User not recognized. Redirecting.");
    return <Redirecting />;
  }
  return <div>{content}</div>;
};
export default Dashboard;
