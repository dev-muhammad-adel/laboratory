import React, { useState } from "react";
import CustomInput from "../../../components/new/custom-input";

const Search = ({ placeholder, onChange, ...others }) => {
  return (
    <>
      <CustomInput
        name="numberSearch"
        placeholder={placeholder}
        onChange={onChange}
        {...others}
      ></CustomInput>
    </>
  );
};
export default Search;
