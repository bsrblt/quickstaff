import React from "react";

interface ButtonProps {
  text?: string;
  children?: any;
  type: "button" | "reset" | "submit" | undefined;
  className?: string;
  onClick?: (e: any) => void;
}

const Button: React.FC<ButtonProps> = ({ children, text, type, onClick }) => {
  return (
    <button
      type={type}
      className="px-8 landscape:px-5 mt-2 w-full rounded-lg hover:shadow-2xl bg-color1 hover:bg-color2 duration-300 text-white font-bold p-3 uppercase antialiased tracking-wider
    "
      onClick={onClick}
    >
      {children}
      {text}
    </button>
  );
};

export default Button;
