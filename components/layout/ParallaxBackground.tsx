import React, { CSSProperties } from "react";

interface ParallaxBackgroundProps {
  imgSource: string;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  imgSource,
}) => {
  return (
    <div
      style={
        {
          zIndex: "-50",
          width: "100%",
          height: "100lvh",
          top: 0,
          left: 0,
          position: "fixed",
        } as CSSProperties
      }
    >
      <img
        src={imgSource}
        style={
          {
            objectFit: "cover",
            backgroundColor: "black",
            position: "absolute",
            inset: 0,
            margin: "auto",
            minHeight: "100%",
            minWidth: "100%",
            height: "auto",
          } as CSSProperties
        }
      />
    </div>
  );
};

export default ParallaxBackground;
