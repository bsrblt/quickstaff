import Link from "next/link";
import React from "react";

const CheckFaq = () => {
  return (
    <Link
      href="/faq"
      className="flex flex-col w-full sm:h-16 items-center justify-center text-lg text-center bg-gradient-to-t from-color1/80 pb-1"
    >
      <h1 className=" block sm:text-2xl text-md font-bold text-center backdrop-blur-[2px] drop-shadow-lg text-gray-200 sm:-mt-6 sm:mb-0 mb-5 fontpop-3 leading-relaxed">
        Questions? Check our{" "}
        <span className="text-bubblegum/90 backdrop-blur-sm">FAQ</span> section.
      </h1>
    </Link>
  );
};

export default CheckFaq;
