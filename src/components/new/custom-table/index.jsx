import React from "react";
import { Table, Button, Tooltip } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";

import "./custom-table.css";
import Loader from "../loader";
const getLang = () => {
  const roles = localStorage.getItem("lang");
  return roles;
};
const CustomTable = ({
  styles,
  columns,
  dataSource,
  loading,
  pagination,
  footerContent,
  ...otherProps
}) => {
  const history = useHistory();

  return (
    <Table
      style={{ width: "100%" }}
      // size="small"
      //   bordered
      footer={() => (
        <div style={{ display: "flex" }}>
          {`${footerContent?.[0] ? footerContent[0] : 0} `}
          {footerContent[1]}
        </div>
      )}
      dataSource={dataSource}
      columns={columns}
      
      pagination={pagination}
      loading={{ indicator: <Loader />, spinning: loading }}
      {...otherProps}
    />
  );
};

export default CustomTable;
