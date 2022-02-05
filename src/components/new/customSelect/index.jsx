import React from "react";
import { Select } from "antd";
import _ from "lodash";
import "./custom-select.css";
const { Option } = Select;

export default function CustomeSelect({
  size = "large",
  handleChange,
  options,
  onChange,
  defaultValue,
  placeholder,
  styles,
  mode,
  value,
  disabled,
  ...otherprops
}) {
  return (
    <Select
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={value}
      size={size}
      mode={mode}
      {...otherprops}
      disabled={disabled}
      filterOption={(inputValue, option) =>
        option.props.children
          .toString()
          .toLowerCase()
          .includes(inputValue.toLowerCase())
      }
      showSearch
      local={{ emptyText: "لا يوجد بيانات" }}
      className="custom-select-container"
      style={{ color: "#E6EAF0", ...styles }}
      onChange={handleChange ? handleChange : onChange}
    >
      {_.map(options, (option) => (
        <Option
          key={option.value}
          value={option.value ? option.value : option.id}
        >
          {option.name}
        </Option>
      ))}
    </Select>
  );
}
