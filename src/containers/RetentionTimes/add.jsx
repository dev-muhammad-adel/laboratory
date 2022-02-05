import React, { useState, useEffect } from "react";
import { Form } from "@ant-design/compatible";
import "@ant-design/compatible/assets/index.css";
import { Select, Row, Input, Col, notification } from "antd";
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
  const { getFieldDecorator, resetFields, validateFields } = props.form;
  const params = useParams();
  const dispatch = useDispatch();
  const [cities, setCities] = useState(null);
  const [countries, setCountries] = useState(null);

  // const isLoggedIn = useSelector((state) => state.Auth.idToken);

  /////////////////////////////
  const getLang = localStorage.getItem("lang");

  /////////////////////////////////////////////////////////////

  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    validateFields((err, values) => {
      delete values.country_id;
      const formData = new FormData();
      if (fileList[0]) {
        formData.append("image", fileList[0]);
      }

      for (var key in values) {
        formData.append(key, values[key]);
      }
      setUploading(true);
      if (!err) {
       

 setSubmiting(true);
 toast.promise(
  enstance[
          cat ? config?.api?.edit?.[0]?.method : config?.api?.add?.[0]?.method
        ](
          cat
            ? `${config?.api?.edit?.[1]}${params?.id}`
            : config?.api?.add?.[1],
          values,
          {
            headers: {},
          }
        )
,
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




      }
    });
  };

  useEffect(() => {
    if (params.id) {
      setLoading(true);
      enstance[config?.api?.show?.[0]?.method](
        `${config?.api?.show?.[1]}${params.id}`,
        {
          headers: {},
        }
      ).then((res) => {
        setLoading(false);
        setCat(res.data.data);
      });
    }
  }, []);

  const props2 = {
    onRemove: (file) => {
      this.setState((state) => {
        const index = state.fileList.indexOf(file);
        const newFileList = state.fileList.slice();
        newFileList.splice(index, 1);
        return {
          fileList: newFileList,
        };
      });
    },

    beforeUpload: (file) => {
      console.log(file);
      setFileList([file]);

      return false;
    },
    fileList,
  };
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
  useEffect(()=>{

    const params = {};
    enstance
      .get(`cities`, {
        headers: {},
        params,
      })
      .then((res) => {
        setCities(res.data.data);
      });


  },[])


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
                      onSubmit={handleSubmit}
                      layout="vertical"
                      className="login-form"
                    >
                      <Form.Item
                        label={<IntlMessages id="value" />}
                        hasFeedback
                      >
                        {getFieldDecorator("value", {
                          initialValue: cat ? cat.value : "",
                          rules: [
                            {
                              required: true,
                              message: <IntlMessages id="value" />,
                            },
                          ],
                        })(<Input type="text" size="large" suffix={"Days"}  />)}
                      </Form.Item>

              

                 

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
  border: "1px solid #1b5b7e",
  borderRadius: "0.4rem",
};

const cancleButton = {
  background: "white",
  color: "#1b5b7e",
  padding: ".7rem 3rem",
  border: "1px solid #1b5b7e",
  marginLeft: "1rem",
};

export default Form.create({ name: "new-country" })(NewCountry);
