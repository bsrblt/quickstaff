import React from "react";
import Link from "next/link";
import Image from "next/image";

interface JobItemProps {
  link: string;
  image: any;
  alt: string;
  text: string;
  onClick?: () => void;
}

const JobItem: React.FC<JobItemProps> = ({
  link,
  image,
  alt,
  text,
  onClick,
}) => (
  <Link href={link}>
    <div
      className="flex flex-col justify-between items-center relative space-y-1 lg:space-y-6 cursor-pointer"
      onClick={onClick}
    >
      <Image src={image} alt={alt} width={100} />
      <h2 className="mt-6 text-center font-semibold text-gray-950 sm:text-xl text-lg sm:pb-0 pb-6">
        {text}
      </h2>
    </div>
  </Link>
);

export default JobItem;
