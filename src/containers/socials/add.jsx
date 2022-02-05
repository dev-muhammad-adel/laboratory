import React, { useState, useEffect } from "react";
import "@ant-design/compatible/assets/index.css";
import { Select, Row, Input, Col, Form } from "antd";
import { useHistory, useParams } from "react-router-dom";
import CardWraper from "../../components/new/CardWraper";
import PageWraper from "../../components/new/PageWraper";
import CustomButton from "../../components/new/CustomButton";
import Loader from "../../components/new/loader";
import enstance from "../../library/helpers/axios";
import { useDispatch } from "react-redux";
import IntlMessages from "@iso/components/utility/intlMessages";
import config from "./config";
import { toast } from "react-toastify";
const { Option } = Select;

const NewCountry = (props) => {
  const [isSubmiting, setSubmiting] = useState(false);
  const history = useHistory();
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(false);
  const [roles, setRoles] = useState([]);

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
  useEffect(() => {
    enstance
      .get(`roles`, {
        headers: {},
      })
      .then((res) => {
        setRoles(res.data.data);
      });
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
    console.log("Received values of form: ", values);
    setSubmiting(true);
    toast.promise(
      enstance[
        cat ? config?.api?.edit?.[0]?.method : config?.api?.add?.[0]?.method
      ](
        cat ? `${config?.api?.edit?.[1]}${params?.id}` : config?.api?.add?.[1],
        values,
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
                  { <Form
                      form={form}
                      layout="vertical"
                      name="register"
                      onFinish={onFinish}
                      initialValues={cat ? { ...cat} : {  }}







                      scrollToFirstError
                    >

                      <Form.Item
                        name="value"
                        label={"value".translate()}
                        rules={[
                          {
                            required: true,
                            message: "Please input your value!",
                            whitespace: true,
                          },
                        ]}
                      >
                        <Input />
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
                    </Form>}
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
