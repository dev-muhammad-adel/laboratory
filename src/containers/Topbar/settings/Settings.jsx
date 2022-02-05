import React, { useState } from "react";
import "antd/dist/antd.css";
import {
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete
} from "antd";
import enstance from "../../../library/helpers/axios";
import { toast } from "react-toastify";
import IntlMessages from "@iso/components/utility/intlMessages";
import Loader from "../../../components/new/loader";
import CustomButton from "../../../components/new/CustomButton/index";

const { Option } = Select;

const Settings = ({data,setInvoke}) => {
  const [isSubmiting, setSubmiting] = useState(false);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values)
        setSubmiting(true);
        toast.promise(
          enstance['post']('settings',
            values,
            {
              headers: {},
            }
          ),
          {
            pending: "Promise is pending",
            success: {
              render({data:{data: { message }}}) {
                setSubmiting(false);
                setInvoke(e=>!e)
                return `👌 ${message}`;
              },
              icon: "🟢",
            },
            error: {
              render({data:{response:{data:{message}}}}) {
                setSubmiting(false);
                return `🤯 ${
                 message || "An Error Occured"
                }`;
              },
              icon: "🟢",
            },


          }
        );





    console.log("Received values of form: ", values);
  };
  return (
    <Form
      form={form}
      style={{width:'90%'}}
      layout="vertical"
      name="register"
      onFinish={onFinish}
      initialValues={data}
      scrollToFirstError
    >
      <Form.Item
        name="max_partner_age"
        label="Max Partner Age"
        dependencies={["min_partner_age"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please Enter Max Partner Age!"
          },
          {
            pattern: "^[0-9]*$",
            message: "only numbers positive",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || +getFieldValue("min_partner_age") < +value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error(
                  "The max partner age should be larger than min partner age!"
                )
              );
            }
          })
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Min Partner Age"
        name="min_partner_age"
        rules={[
          {
            required: true,
            message: "Please Input Your Min Partner Age!"
          },
          {
            pattern: "^[0-9]*$",
            message: "only numbers positive",
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>
{/* /////// */}
<Form.Item
        name="max_patient_age"
        label="Max Patient Age"
        dependencies={["min_patient_age"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please Enter Max Patient Age!"
          },
          {
            pattern: "^[0-9]*$",
            message: "only numbers positive",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || +getFieldValue("min_patient_age") < +value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error(
                  "The max patient age should be larger than min patient age!"
                )
              );
            }
          })
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Min Patient Age"
        name="min_patient_age"
        rules={[
          {
            required: true,
            message: "Please Input Your Min Patient Age!"
          },
          {
            pattern: "^[0-9]*$",
            message: "only numbers positive",
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Min Withdraw"
        name="min_withdraw"
        rules={[
          {
            required: true,
            message: "Please Input Your Min Patient Age!",
          },
          {
            pattern: "^[0-9]*$",
            message: "only numbers positive",
          },
        ]}
        hasFeedback
      >
        <Input  suffix="£"/>
      </Form.Item>
      <Form.Item>
      <div
                        style={{
                          display: "block",
                          marginTop: "1.2rem",
                          textAlign: "center",
                        }}
                      >
                        <CustomButton
                          styles={{ padding: ".7rem 4rem" }}
                          type="submit"
                        >
                          {isSubmiting && <Loader />}
                          <span>
                          <IntlMessages id="global.submit" />
                          </span>
                        </CustomButton>
                       
                      </div>

      </Form.Item>
    </Form>
  );
};

export default Settings 