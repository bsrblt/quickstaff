import React from "react";
import Image from "next/image";

interface ManagementItemProps {
  image: any;
  alt: string;
  text: string;
  onClick?: (e: React.MouseEvent) => void;
}

const ManagementItem: React.FC<ManagementItemProps> = ({
  image,
  alt,
  text,
  onClick,
}) => (
  <div
    className="flex flex-col justify-between items-center relative space-y-1 lg:space-y-6 cursor-pointer"
    onClick={onClick}
  >
    <Image src={image} alt={alt} width={100} />
    <h2 className="mt-6 text-center font-semibold text-gray-950 text-xl sm:pb-0 pb-6">
      {text}
    </h2>
  </div>
);

export default ManagementItem;
