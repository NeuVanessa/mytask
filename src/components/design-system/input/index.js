import React from "react";
import "./styles.css";

const Input = ({ placeholder, onChange, value, type }) => {
  return (
    <>
      <div className="inputForm">
        <input
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          type={type}
        />{" "}
        <br />
      </div>
    </>
  );
};

export default Input;
