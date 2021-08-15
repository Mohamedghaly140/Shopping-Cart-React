import React from "react";

const EmptyFallback = ({ children, centerY }) => {
  return (
    <p
      style={{
        fontWeight: "bold",
        textAlign: "center",
        marginTop: centerY ? "auto" : "20px",
        marginBottom: centerY ? "auto" : "20px",
      }}
    >
      {children}
    </p>
  );
};

export default EmptyFallback;
