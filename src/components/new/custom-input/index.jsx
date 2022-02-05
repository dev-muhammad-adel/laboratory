import React from "react";
import "./custom-input.css";

const CustomInput = ({
  children,
  onChange,
  styles,
  value,
  name,
  type,
  placeholder,
  divStyels,
  ...props
}) => {
  return (
    <>
      {children}
      <input
        className="custom-input"
        style={{ ...styles }}
        name={name}
        {...props}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

export const CustomInput2 = ({
  children,
  onChange,
  styles,
  value,
  name,
  type,
  placehplder,
  divStyels,
  ...props
}) => {
  return (
    <div style={{ position: "relative", ...divStyels }}>
      {children}
      <input
        className="custom-input2"
        style={{ ...styles }}
        name={name}
        {...props}
        type={type}
        value={value}
        placeholder={placehplder}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;
