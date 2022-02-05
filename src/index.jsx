import React from "react";
import { Table, Button } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import Loader from "@iso/Mcomponents/extended/Loader/Loader2";

// import "./custom-table.css";
// 3aa6d3 from "../loader";
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
  add,
  count,
  ...otherProps
}) => {
  const history = useHistory();

  return (
    <Table
      size="small"
      title={() => (
        <Button
          onClick={() => history.push(add)}
          shape="circle"
          type="primary"
          style={{ margin: " 2px" }}
        >
          <PlusOutlined />
        </Button>
      )}
      footer={() => (
        <div style={{ display: "flex" }}>
          {" "}
          {`${count?.[0] ? count[0] : 0} ${
            getLang() && getLang() == "ar"
              ? count?.[1]
                ? count[1]
                : ""
              : count?.[2]
              ? count[2]
              : ""
          }`}
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
