import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "../../library/helpers/axios";
import "antd/dist/antd.css";
import {
  Button,
  Modal,
  DatePicker,
  notification,
  Form,
  Input,
  Radio,
} from "antd";

const getLang = () => {
  const roles = localStorage.getItem("lang");
  return roles;
};
export default function CollectionCreateForm({
  visible,
  onCreate,
  onCancel,
  userData: { subject_id, status, userRole },
}) {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title= {status?'Renew':'Active'}

      okText= { status?'Renew':'Active'}

      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            values.dateOfContract = values.dateOfContract.format("YYYY-MM-DD");

            let endPoint = status
              ? `/admin/renewContract/${subject_id}`
              : `/admin/changeStatus/${subject_id}?type=${userRole}`;
            axios
              .post(endPoint, values, {
                // headers: {
                //   Authorization: `Bearer ${token}`,
                // },
              })
              .then((res) => {
                notification.success({
                  message:
                    res.data.message
                });
                onCreate(values);
              })
              .catch((err) => {
                notification.error({
                  message: err?.responsive?.data?.message || "An Error Occured",
                });
              });

            form.resetFields();
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
       // initialValues={{}}
      >
        <Form.Item
          name="dateOfContract"
          label="Date Of Contract"
          rules={[
            {
              type: "object",

              required: true,
              message: "Please input your date of contract!",
            },
          ]}
        >
            <DatePicker />
        </Form.Item>
      </Form>
    </Modal>
  );
}
