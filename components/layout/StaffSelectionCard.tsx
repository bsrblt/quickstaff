import React from "react";
import Image from "next/image";
import Link from "next/link";

interface StaffSelectionProps {
  imageSrc: string;
  altText: string;
  title: string;
  availability: string;
}

const StaffSelectionCard: React.FC<StaffSelectionProps> = ({
  imageSrc,
  altText,
  title,
  availability,
}) => (
  <div className="relative group hover:shadow-color2/50 duration-700 sm:h-48 md:h-48 h-[5.2rem] flex flex-col rounded-xl hover:bg-white/80 sm:hover:bg-color2/70 bg-color2/70 text-white shadow-md ">
    <Link href={`/s?s=${title.toLowerCase()}`}>
      <div className="sm:h-28">
        <div className="sm:grid flex flex-row-reverse items-center sm:justify-center justify-between absolute bg-[#eae4eb] group-hover:bg-opacity-[0.8] md:-top-20 sm:-top-16 -top-2 lg:top-[-10%] left-[5%] sm:group-hover:top-[-40%] sm:group-hover:bg-opacity-[0.6] group-hover:border-color2 sm:group-hover:border-none  transition-all duration-300 sm:w-[90%] w-[90%] sm:h-48 md:h-48 h-[5.2rem] rounded-xl justify-items-center align-middle ">
          <Image
            src={imageSrc}
            className="sm:w-36 sm:h-36 w-20 h-20 object-scale-down sm:mt-6 mt-4  sm:m-auto mb-[15.8px] mr-3"
            alt={altText}
            title={title}
            loading="lazy"
          />
          <div className="flex flex-col sm:items-center items-start gap-2">
            <p className="relative bottom-[2px] text-color2 hover font-semibold  ml-3 sm:m-0 antialiased sm:text-center items-center justify-center tracking-wide">
              {altText}
            </p>
            <p className="sm:invisible sm:h-0 text-sm text-color1/50 font-semibold  ml-3 sm:m-0 antialiased">
              {availability}
            </p>
          </div>
        </div>
      </div>
      <p className="sm:visible invisible sm:p-6 pt-6 w-full lg:mt-0 inline-block text-center items-center justify-center text-xl font-semibold leading-snug antialiased duration-1000 2xl:opacity-0 group-hover:opacity-[1]">
        {availability}
      </p>
    </Link>
  </div>
);
export default StaffSelectionCard;
