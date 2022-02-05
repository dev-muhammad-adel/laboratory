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
import { DatePicker } from 'antd';
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
  const [areas, setAreas] = useState(null);
  const [doctors, setDoctors] = useState(null);

  const getLang = localStorage.getItem("lang");

  const handleSubmit = (e) => {
    e.preventDefault();
    validateFields((err, values) => {
        values.date_of_birth = moment(values.date_of_birth).format("YYYY-MM-DD");

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
    if (params.id) {
      setLoading(true);
      enstance[config?.api?.show?.[0]?.method](
        `${config?.api?.show?.[1]}${params.id}`,
        {
          headers: {},
        }
      ).then((res) => {
        getCities(res.data.data.country_id)
        getAreas(res.data.data.city_id)

        setCat(res.data.data);
        setLoading(false);

      });
    }
  }, []);

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
  const getAreas = (cityId) => {
    props.form.resetFields("area_id");
    const params = {};
    if (cityId) {
      params.city_id = cityId;
    }
    enstance
      .get(`areas`, {
        headers: {},
        params,
      })
      .then((res) => {
        setAreas(res.data.data);
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
      enstance
      .get(`doctors`, {
        headers: {},
      })
      .then((res) => {
        setDoctors(res.data.data);
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
                        label={<IntlMessages id="name" />}
                        hasFeedback
                      >
                        {getFieldDecorator("name", {
                          initialValue: cat ? cat.name : "",
                          rules: [
                            {
                              required: true,
                              message: <IntlMessages id="name" />,
                            },
                          ],
                        })(<Input type="text" size="large" />)}
                      </Form.Item>
                      <Form.Item
                        label={<IntlMessages id="gender" />}
                        hasFeedback
                      >
                        {getFieldDecorator("gender", {
                          initialValue: cat ? cat?.gender :'',
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
                            optionFilterProp="children"
                            size="large"
                            allowClear
                          >
                              <Option value={1}> Male </Option>
                              <Option value={2}> Female </Option>
                          </Select>
                        )}
                      </Form.Item>
                      <Form.Item
                        label={<IntlMessages id="national" />}
                        hasFeedback
                      >
                        {getFieldDecorator("national_id", {
                          initialValue: cat ? cat.national_id : "",
                          rules: [
                            {
                              required: true,
                              message: <IntlMessages id="national" />,
                            },
                          ],
                        })(<Input type="text" size="large" />)}
                      </Form.Item>
                      

                      <Form.Item
                        label={<IntlMessages id="date_of_birth" />}
                        hasFeedback
                      >
                        {getFieldDecorator("date_of_birth", {
                          initialValue: cat ? moment(cat.date_of_birth,'YYYY-MM-DD' ): "",
                          rules: [
                            {
                              required: true,
                              message: <IntlMessages id="date_of_birth" />,
                            },
                          ],
                        })(<DatePicker  format={'YYYY-MM-DD'} size="large" style={{width:'100%'}}  />)}
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
                          
                          ],
                        })(<Input type="text" size="large" />)}
                      </Form.Item>

                      <Form.Item
                        label={<IntlMessages id="Doctor" />}
                        hasFeedback
                      >
                        {getFieldDecorator("doctor_id", {
                          initialValue: cat ? cat?.doctor_id : "",
                          rules: [
                          
                          ],
                        })(
                          <Select
                            showSearch
                            optionFilterProp="children"
                            size="large"
                            allowClear
                          >
                            {doctors?.map((doctor) => (
                              <Option value={doctor.id}>
                                {getLang == "ar"
                                  ? doctor?.name
                                  : doctor?.name}
                              </Option>
                            ))}
                          </Select>
                        )}
                      </Form.Item>

                      <Form.Item
                        label={<IntlMessages id="sidebar.provenances" />}
                        hasFeedback
                      >
                        {getFieldDecorator("country_id", {
                          initialValue: cat ? cat?.country_id : "",
                          rules: [
                         
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
                          
                          ],
                        })(
                          <Select
                            disabled={cities ? false : true}
                            showSearch
                            optionFilterProp="children"
                            onChange={(e) => getAreas(e)}

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

                      <Form.Item label={<IntlMessages id="area_id" />} hasFeedback>
                        {getFieldDecorator("area_id", {
                          initialValue: cat ? cat?.area_id : "",
                          rules: [
                         
                          ],
                        })(
                          <Select
                            disabled={areas ? false : true}
                            showSearch
                            optionFilterProp="children"
                            size="large"
                            allowClear
                          >
                            {areas?.map((area) => (
                              <Option value={area.id}>
                                {getLang == "ar"
                                  ? area?.name_ar
                                  : area?.name_en}
                              </Option>
                            ))}
                          </Select>
                        )}
                      </Form.Item>


              
                      <Form.Item
                        label={<IntlMessages id="notes" />}
                        hasFeedback
                      >
                        {getFieldDecorator("notes", {
                          initialValue: cat ? cat.notes : "",
                          rules: [
                         
                          ],
                        })(<Input.TextArea type="text" size="large" />)}
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
