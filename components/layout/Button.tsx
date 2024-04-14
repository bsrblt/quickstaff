import React from "react";

interface ButtonProps {
  text?: string;
  children?: React.ReactNode;
  type: "button" | "reset" | "submit" | undefined;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  height?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  text,
  type,
  onClick,
  height = "sm:h-[2.85rem] h-10",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`flex justify-center items-center text-center px-8 landscape:px-5 mt-2 w-full rounded-lg hover:shadow-2xl ${
        disabled
          ? "bg-color2 text-white cursor-not-allowed"
          : "bg-color1 hover:bg-color2 text-white"
      } duration-300 font-bold uppercase antialiased tracking-wider ${height}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      <div className="mt-[0.1rem]">{text}</div>
    </button>
  );
};

export default Button;
