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
import config,{weekDays} from "./config";
import { toast } from "react-toastify";
import { TimePicker } from 'antd';
import moment from 'moment';
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
  const [regions, setRegions] = useState(null);

  // const isLoggedIn = useSelector((state) => state.Auth.idToken);

  /////////////////////////////
  const getLang = localStorage.getItem("lang");

  /////////////////////////////////////////////////////////////

  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    validateFields((err, values) => {
      if (values?.working_start) {
        values.working_start = moment(values.working_start).format(
          "HH:mm:ss"
        );
      }
        if (values?.working_end) {
          values.working_end = moment(values.working_end).format(
            "HH:mm:ss"
          );
        }     

   
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
        getCities(res.data.data.country_id)
        getRegions(res.data.data.city_id)

        setCat(res.data.data);
        setLoading(false);

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
  const getRegions = (cityId) => {
    props.form.resetFields("region_id");
    const params = {};
    if (cityId) {
      params.city_id = cityId;
    }
    enstance
      .get(`regions`, {
        headers: {},
        params,
      })
      .then((res) => {
        setRegions(res.data.data);
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
                        label={<IntlMessages id="address_en" />}
                        hasFeedback
                      >
                        {getFieldDecorator("address_en", {
                          initialValue: cat ? cat.address_en : "",
                          rules: [
                            {
                              required: true,
                              message: <IntlMessages id="address_en" />,
                            },
                          ],
                        })(<Input type="text" size="large" />)}
                      </Form.Item>

                      <Form.Item
                        label={<IntlMessages id="address_ar" />}
                        hasFeedback
                      >
                        {getFieldDecorator("address_ar", {
                          initialValue: cat ? cat.address_ar : "",
                          rules: [
                            {
                              required: true,
                              message: <IntlMessages id="address_ar" />,
                            },
                          ],
                        })(<Input type="text" size="large" />)}
                      </Form.Item>


                      <Form.Item
                        label={<IntlMessages id="sidebar.provenances" />}
                        hasFeedback
                      >
                        {getFieldDecorator("country_id", {
                          initialValue: cat ? cat?.country_id : "",
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
                          initialValue: cat ? cat?.city_id : "",
                          rules: [
                            {
                              required: true,
                              message: <IntlMessages id="City" />,
                            },
                          ],
                        })(
                          <Select
                            disabled={cities ? false : true}
                            showSearch
                            optionFilterProp="children"
                            onChange={(e) => getRegions(e)}

                            size="large"
                            allowClear
                          >
                            {cities?.map((city) => (
                              <Option value={city.id}>
                                {getLang == "ar"
                                  ? city?.name_ar
                                  : city?.name_en}
                              </Option>
                            ))}
                          </Select>
                        )}
                      </Form.Item>

                      <Form.Item
                        label={<IntlMessages id="days" />}
                        hasFeedback
                      >
                        {getFieldDecorator("days", {
                          initialValue: cat ? cat?.days :[],
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
                          mode="multiple"
                            optionFilterProp="children"
                            size="large"
                            allowClear
                          >
                            {weekDays.map((country) => (
                              <Option value={country.id}>
                                {getLang == "ar"
                                  ? country?.name
                                  : country?.name}
                              </Option>
                            ))}
                          </Select>
                        )}
                      </Form.Item>

                      <Form.Item label={<IntlMessages id="region_id" />} hasFeedback>
                        {getFieldDecorator("region_id", {
                          initialValue: cat ? cat?.region_id : "",
                          rules: [
                            {
                              required: true,
                              message: <IntlMessages id="region_id" />,
                            },
                          ],
                        })(
                          <Select
                            disabled={regions ? false : true}
                            showSearch
                            optionFilterProp="children"
                            size="large"
                            allowClear
                          >
                            {regions?.map((region) => (
                              <Option value={region.id}>
                                {getLang == "ar"
                                  ? region?.name_ar
                                  : region?.name_en}
                              </Option>
                            ))}
                          </Select>
                        )}
                      </Form.Item>


                      <Form.Item
                        label={<IntlMessages id="latitude" />}
                        hasFeedback
                      >
                        {getFieldDecorator("latitude", {
                          initialValue: cat ? cat.latitude : "",
                          rules: [
                            {
                              required: true,
                              message: <IntlMessages id="latitude" />,
                            },
                            {
                              pattern:"^-?[0-9]{1,3}(?:\.[0-9]{1,10})?$",
                              message: "only numbers",
                            },
                          ],
                        })(<Input type="text" size="large" />)}
                      </Form.Item>
                      <Form.Item
                        label={<IntlMessages id="longitude" />}
                        hasFeedback
                      >
                        {getFieldDecorator("longitude", {
                          initialValue: cat ? cat.longitude : "",
                          rules: [
                            {
                              required: true,
                              message: <IntlMessages id="longitude" />,
                            },
                            {
                            
                              // pattern: "^-?[0-9]*$",
pattern:"^-?[0-9]{1,3}(?:\.[0-9]{1,10})?$",
                              message: "only numbers",
                            },
                          ],
                        })(<Input type="text" size="large" />)}
                      </Form.Item>

                      <Form.Item
                        label={<IntlMessages id="phone" />}
                        hasFeedback
                      >
                        {getFieldDecorator("phone", {
                          initialValue: cat ? cat.phone : "",
                          rules: [
                            {
                              required: true,
                              message: <IntlMessages id="phone" />,
                            },
                          ],
                        })(<Input type="text" size="large" />)}
                      </Form.Item>
                      <Form.Item
                        label={<IntlMessages id="email" />}
                        hasFeedback
                      >
                        {getFieldDecorator("email", {
                          initialValue: cat ? cat.email : "",
                          rules: [
                            {
                              required: true,
                              message: <IntlMessages id="email" />,
                            },
                          ],
                        })(<Input type="text" size="large" />)}
                      </Form.Item>
                      <Form.Item
                        label={<IntlMessages id="working_start" />}
                        hasFeedback
                      >
                        {getFieldDecorator("working_start", {
                         initialValue: cat ? moment(cat.working_start,'HH:mm' ) : "",
                          rules: [
                            {
                              required: true,
                              message: <IntlMessages id="working_start" />,
                            },
                          ],
                        })(<TimePicker  format={'HH:mm'} size="large" style={{width:'100%'}}  />)}
                      </Form.Item>
                      <Form.Item
                        label={<IntlMessages id="working_end" />}
                        hasFeedback
                      >
                        {getFieldDecorator("working_end", {
                          initialValue: cat ? moment(cat.working_end,'HH:mm' ): "",
                          rules: [
                            {
                              required: true,
                              message: <IntlMessages id="working_end" />,
                            },
                          ],
                        })(<TimePicker  format={'HH:mm'} size="large" style={{width:'100%'}}  />)}
                      </Form.Item>
                      {/*            
                      <>
                      <Form.Item label="Upload Image" hasFeedback>
        <Upload {...props2}>
          <Button >Select File</Button>
        </Upload>
        </Form.Item>
      </> */}

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
