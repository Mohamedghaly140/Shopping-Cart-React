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
        alignItems,
        justifyItems,
        alignContent,
        justifyContent,
        display: "flex",
        flexDirection: direction,
      }}
    >
      {children}
    </div>
  );
};

export default FlexBox;
