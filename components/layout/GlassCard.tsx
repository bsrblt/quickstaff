import React from "react";

const GlassCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="duration-300  bg-gradient-to-b from-color1/10 to-white/10 dark:from-blue-800 dark:to-color2 grid backdrop-blur-[12px] shadow-xl bg-white/20 rounded-xl sm:mx-0">
      {/* <div className="flex bg-transparent dark:bg-gray-900 "> */}
      {children}
      {/* </div> */}
    </div>
  );
};

export default GlassCard;
