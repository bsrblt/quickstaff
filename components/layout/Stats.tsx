import React from "react";
import Image from "next/image";
import completed from "../../public/completed.svg";
import emp from "../../public/emp.svg";
import city from "../../public/city.svg";
import professional from "../../public/professional.svg";

interface StatProps {
  imageSrc: string;
  statNumber: string;
  statLabel: string;
}

const StatItem: React.FC<StatProps> = ({ imageSrc, statNumber, statLabel }) => {
  return (
    <div className="grid text-center justify-center items-center ">
      <div className="flex mx-auto mb-4 rounded-full bg-color2 gap-8 w-12 h-12">
        <Image src={imageSrc} alt="" className="sm:m-1" />
      </div>
      <p className="xl:text-7xl lg:text-6xl md:text-5xl sm:text-[3.5rem] text-[3rem] mb-2 font-bold text-color1 fontpop-1 antialiased">
        {statNumber}
      </p>
      <p className="flex text-center lg:text-[1.7rem] text-[1.1rem] mb-2 font-bold fontpop-3 antialiased">
        {statLabel}
      </p>
    </div>
  );
};

const Stats: React.FC = () => {
  const statItems = [
    { imageSrc: city, statNumber: "4", statLabel: "Cities" },
    { imageSrc: professional, statNumber: "819", statLabel: "Professionals" },
    { imageSrc: emp, statNumber: "2.3k", statLabel: "Employers" },
    { imageSrc: completed, statNumber: "9k", statLabel: "Jobs" },
  ];

  return (
    <div className="grid mx-6 sm:my-[3rem] my-[6rem] max-w-[93%] rounded-2xl 2xl:gap-14 xl:gap-44 lg:gap-22 gap-20 md:gap-[10rem] sm:my- sm:py-1 sm:px-[5.3rem] px-[2.8rem] grid-cols-2  text-center justify-between items-center text-white md:grid-cols-4 sm:space-x-7 ">
      {statItems.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
    </div>
  );
};

export default Stats;
