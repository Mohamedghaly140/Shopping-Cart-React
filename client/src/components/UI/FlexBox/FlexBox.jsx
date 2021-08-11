import React from "react";

const FlexBox = ({
  children,
  direction,
  className,
  alignItems,
  justifyItems,
  alignContent,
  justifyContent,
}) => {
  return (
    <div
      className={className}
      style={{
        flexDirection: direction,
        alignItems,
        justifyContent,
        justifyItems,
        alignContent,
      }}
    >
      {children}
    </div>
  );
};

export default FlexBox;
