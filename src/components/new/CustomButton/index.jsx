import React from "react";
import "./custom-button.css";
const CustomButton = ({ handleClick, classes, styles, type, children }) => {
  return (
    <button
      className={`custom-button ${classes} `}
      style={{
        ...styles,
      }}
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
