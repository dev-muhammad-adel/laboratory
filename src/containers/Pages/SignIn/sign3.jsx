import React, { useState } from "react";
// import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
// import {  useLocation } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
// import Input from '@iso/components/uielements/input';
import Button from "@iso/components/uielements/button";
import IntlMessages from "@iso/components/utility/intlMessages";
import authAction from "@iso/redux/auth/actions";
import appAction from "@iso/redux/app/actions";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form } from "@ant-design/compatible";
import "@ant-design/compatible/assets/index.css";
// import { Alert } from 'antd';
// import SignInStyleWrapper from './SignIn.styles';
import profileActions from "../../../redux/profile/actions";
import "./style.css";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, notification } from "antd";
import axios from "../../../library/helpers/axios";
import logo from "../../../assets/images/logo.png";
import animeImage1 from "../../../assets/images/1.png";
import animeImage2 from "../../../assets/images/2.png";
import animeImage3 from "../../../assets/images/3.png";
import animeImage4 from "../../../assets/images/4.png";
import animeImage5 from "../../../assets/images/5.png";
import animeImage6 from "../../../assets/images/6.png";
import animeImage7 from "../../../assets/images/7.png";
import animeImage8 from "../../../assets/images/8.png";
const { login } = authAction;
const { clearMenu } = appAction;
// id='matrix3D'
function SignIn(props) {
  // let history = useHistory();
  // let location = useLocation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const isLoggedIn = useSelector((state) => state.Auth.idToken);

  const [, setRedirectToReferrer] = React.useState(false);
  const [, setIslogged] = React.useState(false);

  // redirectToReferrer
  React.useEffect(() => {
    if (isLoggedIn) {
      setRedirectToReferrer(true);
      console.log("Logged in");
      window.location.href = "/dashboard";
    }
  }, [isLoggedIn]);

  function handleLogin(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        setLoading(true);
        axios
          .post("admin/login", {
            email: values.email,
            password: values.password,
          })
          .then((res) => {
            const token = res.data.token;
            dispatch(profileActions.fetchProfileDataSuccess(res.data.data));
            dispatch(login(token, res.data.data));
            dispatch(clearMenu());
            localStorage.setItem("profile", JSON.stringify(res.data.data));
            //   (res.data.data.role!='Supplier')?(history.push('/dashboard')):(
            window.location.href = "/dashboard";
            //)
            setLoading(false);
          })
          .catch((err) => {
            window.localStorage.removeItem("BetaLabtoken");
            //    dispatch(login());
            notification["error"]({
              message: "Authentication Error",
              description:
                err.response && err.response.data.message
                  ? err.response.data.message
                  : "Your account not correct ",
            });
            setLoading(false);
          });
      }
    });
  }
  // let { from } = location.state || { from: { pathname: '/dashboard' } };

  const { getFieldDecorator } = props.form;
  return (
    !isLoggedIn && (
      <>
        <ul class="circles">
          <li>
            <img src={animeImage2} />
          </li>
          <li>
            <img src={animeImage2} />
          </li>{" "}
          <li>
            <img src={animeImage2} />
          </li>
          <li>
            <img src={animeImage2} />
          </li>{" "}
          <li>
            <img src={animeImage2} />
          </li>
          <li>
            <img src={animeImage2} />
          </li>{" "}
          <li>
            <img src={animeImage2} />
          </li>
        </ul>
        <div class="container" id="container">
          <div class="form-container sign-in-container">
            <Form
              onSubmit={handleLogin}
              layout="horizontal"
              className="login-form"
            >
              <div className="image-container">
                <img src={logo} />
              </div>
              <h1>Sign In</h1>
              {/* <div class="social-container">
                <a href="#" class="social">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="social">
                  <i class="fab fa-google"></i>
                </a>
                <a href="#" class="social">
                  <i class="fab fa-tiktok"></i>
                </a>
              </div> */}
              {/* <span>or use your account</span> */}

              <Form.Item hasFeedback>
                {" "}
                {getFieldDecorator("email", {
                  rules: [
                    { required: true, message: "Please input your email!" },
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                  ],
                })(
                  <Input
                    placeholder="Email"
                    size="large"
                    prefix={
                      <UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="email"
                  />
                )}
              </Form.Item>

              <Form.Item hasFeedback>
                {" "}
                {getFieldDecorator("password", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ],
                })(
                  <Input.Password
                    placeholder="Password"
                    prefix={
                      <LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                )}
              </Form.Item>
              <div style={{ padding: "0px 60px" }}>
                <Button
                  class="ghost"
                  id="signIn"
                  loading={loading}
                  htmlType="submit"
                  block
                >
                  <IntlMessages id="page.signInButton" />
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </>
    )
  );
}

export default Form.create({ name: "login" })(SignIn);
