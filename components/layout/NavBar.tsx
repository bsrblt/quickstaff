"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import logotransparent from "../../public/qq4.svg";
import Image from "next/image";
import Links from "./Links";
import Hamburger from "./Hamburger";
import MenuPanel from "./MenuPanel";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenuHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsMenuOpen(true);
  };

  const closeMenuHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 760);
      }
    };

    handleResize();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <header className="flex sticky min-w-full z-30  ">
      <nav
        className={`flex py-2 justify-between bg-white/70 w-screen fixed px-3 backdrop-blur-[10px] overflow-hidden ${
          isMenuOpen ? "" : "shadow-md "
        }`}
      >
        <div id="logo" className="flex items-center">
          <Link href="/" className="cursor-pointer">
            <Image
              className="h-12 w-fit"
              src={logotransparent}
              alt="Store Logo"
            ></Image>
          </Link>
        </div>
        {isMobile ? (
          <Hamburger
            onOpen={openMenuHandler}
            onClose={closeMenuHandler}
            onTouchStart={closeMenuHandler}
          />
        ) : (
          <Links />
        )}
      </nav>
      <div id="navmenu" className="flex items-center justify-end ">
        {isMobile && <MenuPanel isOpen={isMenuOpen} />}
      </div>
    </header>
  );
};

export default NavBar;
