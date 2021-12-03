import React, { FC, ReactNode } from "react";
import { RoughNotation } from "react-rough-notation";

type prop = {
  color: string;
};
export const RainbowHighlight: FC<prop> = ({ color, children }) => {
  const animationDuration = Math.floor(30);

  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 2]}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};
