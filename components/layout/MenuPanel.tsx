import React from "react";
import Links from "./Links";

interface MenuPanelProps {
  isOpen: boolean;
}

const MenuPanel: React.FC<MenuPanelProps> = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-[63.3px] px-4 py-2 right-0 rounded-bl-[2rem] mt-[0.2px] border-none transition-transform  bg-white/70 shadow-md duration-300 backdrop-blur-[10px] ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{
        backdropFilter: "20px",
      }}
    >
      <Links />
    </div>
  );
};

export default MenuPanel;
