import React from "react";

interface CardProps {
  textBig?: string | React.ReactNode;
  textSmall?: string | React.ReactNode;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ textBig, textSmall, children }) => {
  return (
    <div className="max-w-[25rem] rounded-xl  antialiased duration-300 text-center sm:py-5 py-3 sm:px-5 px-2 dark:bg-gray-900 hover:fontpop-1 backdrop-blur-[20px] shadow-xl bg-white/30  ">
      {children}
      <p className="sm:py-2 py-1 h-1/3 text-white text-center mb-3 md:text-[1.5rem] sm:text-[1.3rem] text-[1.1rem] fontpop-3 font-bold dark:text-gray-300s leading-6 antialiased">
        {textBig}
      </p>
      <p className="h-2/3 text-white fontpop-4 dark:text-gray-300 lg:leading-7 xl:leading-6 sm:leading-[1.15rem] leading-[1.23rem] sm:text-[1rem] md:text-[1.15rem] pb-5 antialiased">
        {textSmall}
      </p>
    </div>
  );
};

export default Card;
