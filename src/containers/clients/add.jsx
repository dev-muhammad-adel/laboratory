import React, { useState, useEffect } from "react";
import "@ant-design/compatible/assets/index.css";
import { Select, Row, Input, Col, Form,Image,Upload } from "antd";
import { useHistory, useParams } from "react-router-dom";
import CardWraper from "../../components/new/CardWraper";
import PageWraper from "../../components/new/PageWraper";
import CustomButton from "../../components/new/CustomButton";
import Loader from "../../components/new/loader";
import enstance from "../../library/helpers/axios";
import { useDispatch } from "react-redux";
import IntlMessages from "@iso/components/utility/intlMessages";
import { InboxOutlined } from "@ant-design/icons";
import config from "./config";
import { toast } from "react-toastify";
const { Option } = Select;
const { Dragger } = Upload;

const NewCountry = (props) => {
  const [isSubmiting, setSubmiting] = useState(false);
  const history = useHistory();
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(false);
  const [permissions, setPermissions] = useState(false);
  const [uplodedList, setUplodedList] = useState([]);
  
  const params = useParams();
  const dispatch = useDispatch();

  const getLang = localStorage.getItem("lang");
  useEffect(() => {
    if (params.id) {
      setLoading(true);
      enstance[config?.api?.show?.[0]?.method](
        `${config?.api?.show?.[1]}${params.id}`,
        {
          headers: {},
        }
      ).then((res) => {
        setCat(res.data.data);
        setLoading(false);

      });
    }
  }, []);

  dispatch({
    type: "SET",
    payload: [
      {
        key: config.routes.indexKey,
        to: config.routes.index,
        title: config.routes.indexTitle,
      },
      {
        key: params.id ? config.titles.edit : config.titles.add,
        to: params.id ? `${config.routes.edit}${params.id}` : config.routes.add,
        title: params.id ? config.titles.edit : config.titles.add,
      },
    ],
  });
  const [form] = Form.useForm();

  const onFinish = (values) => {
    if(params&&!values.password_confirmation){
      delete values.password_confirmation
    }
    if(params&&!values.password){
      delete values.password
    }
    console.log("Received values of form: ", values);
    setSubmiting(true);

    const formData = new FormData();
    if(params){
    formData.append("_method", "PUT");
    }
    if (uplodedList[0]) {
      formData.append("image", uplodedList[0]);
    }
    values.permissions.map(e=>formData.append('permissions[]',e))
delete values.permissions
    for (let key in values) {
      formData.append(key, values[key]);
    }



    toast.promise(
      enstance[
        cat ? config?.api?.add?.[0]?.method : config?.api?.add?.[0]?.method
      ](
        cat ? `${config?.api?.edit?.[1]}${params?.id}` : config?.api?.add?.[1],
        formData,
        {
          headers: {},
        }
      ),
      {
        pending: "Pending",
        success: {
          render(res) {
            setSubmiting(false);
            history.push(config.routes.index);
            return `👌 ${res.data.data.message}`;
          },
          // other options
          icon: "🟢",
        },
        error: {
          render(err) {
            setSubmiting(false);
            return `🤯 ${
              err?.data?.response?.data?.message || "Backend Error Occured"
            }`;
          },
          // other options
          //    icon: "🟢",
        },
      }
    );
  };
  useEffect(() => {
    enstance
      .get(`permissions`, {
        headers: {},
      })
      .then((res) => {
        setPermissions(res.data.data);
      });
  }, []);

  return (
    <PageWraper>
      <div className="new_user_container">
        <Row>
          <Col span={24} style={{ marginTop: "1rem" }}>
            <CardWraper>
              {loading ? (
                <Loader />
              ) : (
                <Row>
                  <Col span={24}>
               <Form
                      form={form}
                      layout="vertical"
                      name="register"
                      onFinish={onFinish}
                      initialValues={params ?{...cat,permissions:cat?.permissions?.map(e=>e.id)}: { is_active: 1 }  }
                      scrollToFirstError
                      autoComplete={false}
                    >
                      <Form.Item
                        name="name"
                        label="name"
                        tooltip="What do you want others to call you?"
                        rules={[
                          {
                            required: !params,
                            message: "Please input your name!",
                            whitespace: true,
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                          {
                            type: "email",
                            message: "The input is not valid E-mail!",
                          },
                          {
                            required: !params,
                            message: "Please input your E-mail!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name="is_active"
                        label={"is_active".translate()}
                        rules={[
                          {
                            required: !params,
                            message: "Please select a status!",
                          },
                        ]}
                      >
                        <Select placeholder="select status">
                          <Option value={1}>Active</Option>
                          <Option value={0}>Not Active</Option>
                        </Select>
                      </Form.Item>
                      <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                          {
                            required: !params,
                            message: "Please input your password!",
                          },
                        ]}
                        hasFeedback
                      >
                        <Input.Password   />
                      </Form.Item>

                      <Form.Item
                        name="password_confirmation"
                        label="Confirm Password"
                        dependencies={["password"]}
                        hasFeedback
                        rules={[
                          {
                            required: !params,
                            message: "Please confirm your password!",
                          },
                          ({ getFieldValue }) => ({
                            validator(_, value) {
                              if (
                                !value ||
                                getFieldValue("password") === value
                              ) {
                                return Promise.resolve();
                              }

                              return Promise.reject(
                                new Error(
                                  "The two passwords that you entered do not match!"
                                )
                              );
                            },
                          }),
                        ]}
                      >
                        <Input.Password />
                      </Form.Item>
                      <Form.Item
                        name="permissions"
                        label={"permissions".translate()}
                        rules={[
                          {
                            required: !params,
                            message: "Please select a permission!",
                          },
                        ]}
                      >
                        <Select mode="multiple" placeholder="select a permission">
                          {permissions&&permissions?.map(({ id, name }) => (
                            <Option value={id}>{name}</Option>
                          ))}
                        </Select>
                      </Form.Item>




                      <Dragger
                        beforeUpload={(file) => {
                          setUplodedList([file]);
                          return false;
                        }}
                        fileList={uplodedList}
                        multiple={false}
                        listType="picture-card"
                        // onPreview={handlePreview}
                        progress={{
                          strokeColor: {
                            "0%": "#108ee9",
                            "100%": "#87d068",
                          },
                          strokeWidth: 4,
                          format: (percent) =>
                            `${parseFloat(percent.toFixed(1))}%`,
                        }}
                        onRemove={(e) => {
                          setUplodedList([]);
                        }}
                        // onRemove={(e) => {
                        //   console.log(e);

                        //   enstance
                        //     .post(
                        //       "/deleteMedia",
                        //       {
                        //         model: "User",
                        //         modelID: e.uid,
                        //       },
                        //       {
                        //         headers: {
                        //           // Authorization: `Bearer ${token}`,
                        //         },
                        //       }
                        //     )
                        //     .then((res) => {
                        //       message.success(
                        //         getLang() && getLang() == "ar"
                        //           ? "تم المسح بنجاح"
                        //           : "Deleted successfully"
                        //       );
                        //       setFileListEn([]);
                        //     })
                        //     .catch((err) => {
                        //       if (
                        //         err.response &&
                        //         err.response.data &&
                        //         err.response.data.message
                        //       ) {
                        //         const text = err.response.data.message;
                        //         message.error(text);
                        //       }
                        //     });
                        // }}
                        style={{
                          display: "inline-flex",
                          marginBottom: "10px",
                          opacity: uplodedList.length >= 1 ? "50%" : "100%",
                          pointerEvents:
                            uplodedList.length >= 1 ? "none" : "auto",
                        }}
                      >
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined style={{ color: "#1b5b7e" }} />
                        </p>
                        <p className="ant-upload-text">
                          <IntlMessages id="upload_image" />
                        </p>
                        <p className="ant-upload-hint"></p>
                      </Dragger>

                      {cat?.image && (
                        <div
                          style={{
                            width: "fit-content",
                            border: "1px solid #c4c1c1",
                            padding: "10px",
                            alignItems: "center",
                            display: "flex",
                          }}
                        >
                          <Image width={100} height={100} src={cat?.image} />
                        </div>
                      )}


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
                              {" "}
                              {params.id ? (
                                <IntlMessages id="global.submit" />
                              ) : (
                                <IntlMessages id="global.submit" />
                              )}{" "}
                            </span>
                          </CustomButton>
                          <CustomButton
                            type="button"
                            handleClick={() => {
                              history.push(config.routes.index);
                            }}
                            styles={cancleButton}
                          >
                            <IntlMessages id="global.cancel" />
                          </CustomButton>
                        </div>
                      </Form.Item>
                    </Form>
                  </Col>
                </Row>
              )}
            </CardWraper>
          </Col>
        </Row>
      </div>
    </PageWraper>
  );
};

const inputStyle = {
  width: "100%",
  border: "1px solid #02a79f ",
  borderRadius: "0.4rem",
};

const cancleButton = {
  background: "white",
  color: "#02a79f ",
  padding: ".7rem 3rem",
  border: "1px solid #02a79f ",
  marginLeft: "1rem",
};

export default NewCountry;
