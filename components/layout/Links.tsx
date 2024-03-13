import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import AuthLinks from "./AuthLinks";
import AuthContext from "../Ctx/AuthContext";

const Links = () => {
  const authCtx = useContext(AuthContext);

  const [dashboardLink, setDashboardLink] = useState<string>("");
  const [dashboardLabel, setDashboardLabel] = useState<string>("");
  const [staffLink, setStaffLink] = useState<string>("");
  const [staffLabel, setStaffLabel] = useState<string>("");

  useEffect(() => {
    if (authCtx?.isLoggedInPro) {
      setDashboardLink("/pro/dashboard");
      setDashboardLabel("Dashboard");
      setStaffLink("//#staffselect");
      setStaffLabel("Jobs");
    } else if (authCtx?.isLoggedInEmp) {
      setDashboardLink("/employer/dashboard");
      setDashboardLabel("Dashboard");
      setStaffLink("//#staffselect");
      setStaffLabel("Staff");
    } else {
      setDashboardLink("");
      setDashboardLabel("");
      setStaffLink("//#staffselect");
      setStaffLabel("Staff");
    }
  }, [authCtx?.isLoggedInPro, authCtx?.isLoggedInEmp, authCtx]);

  const linksData = [
    { href: "/", label: "Home" },
    { href: staffLink, label: staffLabel },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
    { href: dashboardLink, label: dashboardLabel },
  ];

  return (
    <div className="flex justify-between items-center text-center sm:pl-2 md:pl-2 lg:pl-4 xl:pl-4 sm:space-x-4 md:space-x-[1.25rem] lg:space-x-8 xl:space-x-10">
      <>
        {linksData.map((link, index) => (
          <Link key={index} href={link.href}>
            <div className=" text-color2 px-[0.35rem] text-[0.85rem] sm:text-[1rem] md:text-md lg:text-lg font-bold opacity-95 hover:text-color1 cursor-pointer transition-colors transition-duration-300 hover:scale-104 hover:opacity-100 fontpop-1 antialiased tracking-tighter sm:tracking-normal">
              {link.label}
            </div>
          </Link>
        ))}
        <AuthLinks />
      </>
    </div>
  );
};

export default Links;
