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
  const { getFieldDecorator, resetFields, validateFields } = props.form;
  const params = useParams();
  const [loading, setLoading] = useState(params.id?true:false);
  const dispatch = useDispatch();
  const [cities, setCities] = useState(null);
  const [countries, setCountries] = useState(null);
  useEffect(() => {
    if (params.id) {
      setLoading(true);
      enstance[config?.api?.show?.[0]?.method](
        `${config?.api?.show?.[1]}${params.id}`,
        {
          headers: {},
        }
      ).then((res) => {
        getCities(res.data.data.nation.id)
        setCat(res.data.data);
        setLoading(false);
      });
    }
  }, []);

  // const isLoggedIn = useSelector((state) => state.Auth.idToken);

  /////////////////////////////
  const getLang = localStorage.getItem("lang");

  /////////////////////////////////////////////////////////////

  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    validateFields((err, values) => {
      const formData = new FormData();
 
 
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
    enstance
      .get(`countries`, {
        headers: {},
      })
      .then((res) => {
        setCountries(res.data.data);
      });
   
  }, []);




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
  },[])
  const getCities = (country_id) => {
    props.form.resetFields("city_id");
    const params = {};
    if (country_id) {
      params.country_id = country_id;
    }
    enstance
      .get(`cities`, {
        headers: {},
        params,
      })
      .then((res) => {
        setCities(res.data.data);
      });
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
                    <Form
                      onSubmit={handleSubmit}
                      layout="vertical"
                      className="login-form"
                    >
                      <Form.Item
                        label={<IntlMessages id="table.title.NameEn" />}
                        hasFeedback
                      >
                        {getFieldDecorator("name_en", {
                          initialValue: cat ? cat.name_en : "",
                          rules: [
                            {
                              required: true,
                              message: <IntlMessages id="table.title.NameEn" />,
                            },
                          ],
                        })(<Input type="text" size="large" />)}
                      </Form.Item>

                      <Form.Item
                        label={<IntlMessages id="table.title.NameAr" />}
                        hasFeedback
                      >
                        {getFieldDecorator("name_ar", {
                          initialValue: cat ? cat.name_ar : "",
                          rules: [
                            {
                              required: true,
                              message: <IntlMessages id="table.title.NameAr" />,
                            },
                          ],
                        })(<Input type="text" size="large" />)}
                      </Form.Item>

                      <Form.Item
                        label={<IntlMessages id="sidebar.provenances" />}
                        hasFeedback
                      >
                        {getFieldDecorator("country_id", {
                          initialValue: cat ? cat?.nation?.id : "",
                          rules: [
                            {
                              required: true,
                              message: (
                                <IntlMessages id="sidebar.provenances" />
                              ),
                            },
                          ],
                        })(
                          <Select
                          showSearch
                          onChange={(e) => getCities(e)}
                          optionFilterProp="children"
                          size="large"
                          allowClear
                        >
                          {countries?.map((country) => (
                            <Option value={country.id}>
                              {getLang == "ar"
                                ? country?.name_ar
                                : country?.name_en}
                            </Option>
                          ))}
                        </Select>
                        )}
                      </Form.Item>

                      <Form.Item label={<IntlMessages id="City" />} hasFeedback>
                        {getFieldDecorator("city_id", {
                          initialValue: cat ? cat?.city.id : "",
                          rules: [
                            {
                              required: true,
                              message: <IntlMessages id="City" />,
                            },
                          ],
                        })(
                          <Select
                            showSearch
                            optionFilterProp="children"
                            size="large"
                            allowClear
                          >
                            {cities?.map((city) => (
                              <Option value={city.id }>
                                {getLang == "ar"
                                  ? city?.name_ar
                                  : city?.name_en}
                              </Option>
                            ))}
                          </Select>
                        )}
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
