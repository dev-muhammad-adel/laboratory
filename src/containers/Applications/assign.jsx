import { Modal, Button, Form, Radio, Input } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import React, { useState ,useEffect} from "react";
import { Card, Select } from "antd";
import axios from "../../library/helpers/axios";
import { toast } from "react-toastify";
import config, { status } from "./config";
import { useSelector } from "react-redux";

const { confirm } = Modal;
const { Meta } = Card;
const { Option } = Select;

const getLang = localStorage.getItem("lang");

export default function Confirm({ data: { admin, id }, admins, setFetcher }) {
  const token = useSelector((state) => state.Auth.idToken);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [type, setType] = useState(1);
  const [form] = Form.useForm();
  useEffect(() => {
   form.setFieldsValue({ adminsIds: admin?.map((e) => e.id) })
     return () => {
      form.resetFields();
     };
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        // axios[config.api.validate?.[0]?.method](`${config.api.validate?.[1]}${id}/reject`, {

        toast.promise(
          axios['post'](
            `${ "application/"}${id}/assignAdmin`,
           values,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          ),
          {
            pending: "Pending",
            success: {
              render(res) {
                setFetcher((fetcher) => !fetcher);

                setIsModalVisible(false);

                return `👌 ${res.data.data.message}`;
              },
              // other options
              icon: "🟢",
            },
            error: {
              render(err) {
                return `🤯 ${
                  err?.data?.response?.data?.message || "Backend Error Occured"
                }`;
              },
              // other options
              //    icon: "🟢",
            },
          }
        );
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={showModal}>Assign</Button>

      <Modal
        title="Assign Application "
        visible={isModalVisible}
        okText="Confirm"
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
        >
          <Form.Item
            name="adminsIds"
            label="Admins"
            rules={[{ required: true, message: "Please select admins!" }]}
          >
            <Select
              showSearch
              mode="multiple"
              optionFilterProp="children"
              size="large"
              allowClear
            >
              {admins?.map((e) => (
                <Option value={e.id}>
                  {getLang == "ar" ? e?.name : e?.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
