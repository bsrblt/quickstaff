import React, { useState, useEffect } from "react";
import Image from "next/image";

interface DashboardCardProps {
  imageSrc: any;
  altText: string;
  title: string;
  onClick: () => void;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  imageSrc,
  altText,
  title,
  onClick,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 540);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageWidth = isSmallScreen ? 105 : 175;

  return (
    <div
      className="col-span-full md:col-span-2 overflow-hidden flex relative p-8 rounded-xl bg-white dark:bg-gray-900 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex sm:flex-col size-fit m-auto relative items-center md:h-auto sm:h-[12rem] h-[4rem]  duration-300">
        <Image src={imageSrc} alt={altText} width={imageWidth} />
        <h2 className="sm:mt-4 mt-3 text-center font-semibold sm:text-2xl text-xl">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default DashboardCard;
