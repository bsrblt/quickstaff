import React, { useState } from "react";
import fork from "../../public/fork.svg";
import Image from "next/image";

interface HamburgerProps {
  onOpen: (e: React.SyntheticEvent) => void;
  onClose: (e: React.SyntheticEvent) => void;
  onTouchStart: (e: React.SyntheticEvent) => void;
}

const Hamburger: React.FC<HamburgerProps> = ({
  onOpen,
  onClose,
  onTouchStart,
}) => {
  const [isRotated, setIsRotated] = useState(false);

  const handleButtonClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!isRotated) {
      setIsRotated(true);
      onOpen(e);
    } else {
      setIsRotated(false);
      onClose(e);
    }
  };

  const handleBlur = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsRotated(false);
    onClose(e);
  };

  return (
    <button
      className={`relative group flex justify-end items-end duration-500 bottom-[3px] ${
        isRotated ? "rotate-90 rotate" : ""
      }`}
      onClick={handleButtonClick}
      onBlur={handleBlur}
      onTouchStart={onTouchStart}
    >
      <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[41px] h-[41px]">
        <div className="flex flex-col justify-between transform transition-all duration-500 origin-top-right overflow-hidden p-[2px] ">
          <Image src={fork} alt="logo" />
        </div>
      </div>
    </button>
  );
};

export default Hamburger;
