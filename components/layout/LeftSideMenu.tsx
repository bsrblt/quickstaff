"use client";
import React, { useContext } from "react";
import AuthContext from "../Ctx/AuthContext";
import NavItem from "./NavItem";

const LeftSideMenu = () => {
  const authCtx = useContext(AuthContext);

  return (
    <div className="bg-color1/85 p-3 text-gray-200 md:w-64 md:flex-col lg:flex hidden border-r rounded-tr-3xl border-color1">
      <div className="h-full flex-col pt-5 flex overflow-y-auto fixed">
        <div className="flex-col flex px-4 space-y-3">
          <div>
            <p className="px-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">
              Account
            </p>
          </div>
          <nav className="space-y-1 bg-cover bg-top">
            <NavItem href="">Profile</NavItem>
            <NavItem href="/">Security</NavItem>
            <NavItem href="/">Privacy</NavItem>
          </nav>

          <p className="px-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">
            Jobs
          </p>
          <nav className="mt-4 space-y-1  bg-cover bg-top">
            <NavItem href="/">Completed</NavItem>
            <NavItem href="/">Alerts</NavItem>
            <NavItem href="/">
              Messages
              <span className="ml-4 items-center rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-semibold text-indigo-600 inline-flex border border-indigo-300 uppercase">
                New
              </span>
            </NavItem>
            <NavItem href="/">
              Notifications
              <span className="ml-auto items-center rounded-full bg-gray-500 px-2 py-0.5 text-xs font-semibold text-white inline-flex border border-transparent uppercase">
                15
              </span>
            </NavItem>{" "}
          </nav>

          <div>
            <p className="px-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">
              Other
            </p>
            <nav className="mt-4 space-y-1  bg-cover bg-top">
              <NavItem href="/">Support</NavItem>
              <NavItem href="/">Settings</NavItem>
              <NavItem href="" onClick={authCtx?.logout}>
                Logout
              </NavItem>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideMenu;
