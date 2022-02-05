import React from "react";
import "antd/dist/antd.css";
import "./bright.css";
import { Slider } from "antd";
import { FrownOutlined, SmileOutlined } from "@ant-design/icons";
import { BsBrightnessLow, BsBrightnessLowFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";

export default function IconSlider(props) {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.bright.value);

  const handleChange = (value) => {
    dispatch({
      type: "change",
      payload: value,
    });
  };

  const { max, min } = props;
  const mid = ((max - min) / 2).toFixed(5);
  const preColorCls = value >= mid ? "" : "icon-wrapper-active";
  const nextColorCls = value >= mid ? "icon-wrapper-active" : "";
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "10px" }}>
      <div style={{ margin: "5px" }}>
        <BsBrightnessLow className={preColorCls} />
      </div>
      <div style={{ width: "100%" }}>
        <Slider {...props} onChange={handleChange} value={value} />
      </div>
      <div style={{ margin: "5px" }}>
        <BsBrightnessLowFill className={nextColorCls} />
      </div>
    </div>
  );
}
