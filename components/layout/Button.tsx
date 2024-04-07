import React from "react";

interface ButtonProps {
  text?: string;
  children?: any;
  type: "button" | "reset" | "submit" | undefined;
  className?: string;
  onClick?: (e: any) => void;
  height?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  text,
  type,
  onClick,
  height = "sm:h-[2.85rem] h-10 ",
}) => {
  return (
    <button
      type={type}
      className={`flex justify-center items-center text-center px-8 landscape:px-5 mt-2 w-full rounded-lg hover:shadow-2xl bg-color1 hover:bg-color2 duration-300 text-white font-bold uppercase antialiased tracking-wider ${height}`}
      onClick={onClick}
    >
      {children}
      <div className="mt-[0.1rem]">{text}</div>
    </button>
  );
};

export default Button;
