import { Popover } from "antd";
import { useSelector } from "react-redux";
import TopbarDropdownWrapper from "./TopbarDropdown.styles";
import Setting from "./settings/Settings";
import { RiSettings5Fill } from "react-icons/ri";
import axios, { URL } from "../../library/helpers/axios";
import React, { useState, useEffect } from "react";

export default function TopbarNotification() {
  const [visible, setVisiblity] = useState(false);
  const [invoke, setInvoke] = useState(false);
  const customizedTheme = useSelector(
    (state) => state.ThemeSwitcher.topbarTheme
  );

  function handleVisibleChange() {
    setVisiblity((visible) => !visible);
  }
  const [data, setData] = useState(null);
  let x = useEffect(() => {
    axios["get"]("settings", {
      headers: {},
    })
      .then((res) => {
        let finalObject = {};
        res.data.data.forEach((element) => {
          finalObject[element.key] = element.value;
        });
        setData(finalObject);
        console.log(finalObject);
      })
      .catch((err) => {});
  }, [invoke]);

  const content = (
    <TopbarDropdownWrapper className="topbarNotification">
      <div style={{ padding: "20px 10px 10px" }} className="isoDropdownHeader">
        <Setting setInvoke={setInvoke} data={data} />
      </div>
    </TopbarDropdownWrapper>
  );
  return (
    <Popover
      content={content}
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
      placement="bottomLeft"
    >
      <div className="isoIconWrapper">
        <RiSettings5Fill
          style={{ fontSize: "25px", color: "rgb(58 166 211)" }}
          className="anticon anticon-dashboard"
        />
        {/* <span>{demoNotifications.length}</span> */}
      </div>
    </Popover>
  );
}
