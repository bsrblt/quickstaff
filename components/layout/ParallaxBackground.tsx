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
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3))",
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
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3))",
          } as CSSProperties
        }
      />
    </div>
  );
};

export default ParallaxBackground;
