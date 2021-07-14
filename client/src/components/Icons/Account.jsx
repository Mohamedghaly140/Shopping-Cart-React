import React from "react";

const Account = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      {...props}
    >
      <path
        style={{ fill: props.color }}
        d="M7118.235,616.049a4.943,4.943,0,1,0-6.4,0,9.015,9.015,0,0,0-5.8,8.411.886.886,0,0,0,.885.886h16.23a.886.886,0,0,0,.885-.886A9.016,9.016,0,0,0,7118.235,616.049Zm-6.374-3.761a3.172,3.172,0,1,1,3.172,3.172A3.176,3.176,0,0,1,7111.861,612.288Zm-4,11.287a7.23,7.23,0,0,1,14.351,0Z"
        transform="translate(-7106.033 -607.346)"
      />
    </svg>
  );
};

export default Account;
