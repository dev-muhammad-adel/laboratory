import React, { useState } from "react";
// import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
// import {  useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
// import Input from '@iso/components/uielements/input';
import { Button } from "antd";
import IntlMessages from "@iso/components/utility/intlMessages";
import authAction from "@iso/redux/auth/actions";
import appAction from "@iso/redux/app/actions";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form } from "@ant-design/compatible";
import "@ant-design/compatible/assets/index.css";
import profileActions from "../../../redux/profile/actions";
import "./style.css";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, notification } from "antd";
import axios from "../../../library/helpers/axios";
import logo from "../../../assets/images/logo.png";

/* react-icons */
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
      window.location.href = "/admin";
    }
  }, [isLoggedIn]);

  function handleLogin(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        setLoading(true);
        axios
          .post("/login", {
            email: values.email,
            password: values.password,
          })
          .then((res) => {
            const token = res.data.token;

            let permissions = {};
            res.data.data.permissions.forEach((data, index) => {
              if (typeof permissions[data.name.split("-")[0]] != "object") {
                permissions[data.name.split("-")[0]] = {};
              }
              Object.defineProperty(
                permissions[data.name.split("-")[0]],
                [data.name.split("-")[1]],
                {
                  enumerable: true,
                  configurable: true,
                  writable: true,
                  value: 1,
                }
              );
            });
            res.data.data.permissions = permissions;

            dispatch(profileActions.fetchProfileDataSuccess(res.data.data));

            dispatch(login(token, res.data.data));

            dispatch(clearMenu());
            // localStorage.setItem("profile", JSON.stringify(res.data.data));
            //   (res.data.data.role!='Supplier')?(history.push('/dashboard')):(
            window.location.href = "/admin";
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
 
    
    

<div class="login-container">
  <div class="login-form">
    <div class="login-form-inner">
 
      <h1>Login</h1>
   

      <div class="sign-in-seperator">
        <span> Welcome To Beta Lab Panel </span>
      </div>
      <Form
                onSubmit={handleLogin}
                layout="horizontal"
                className="login-form"
              >
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
                      style={{ width: 260 }}
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
                      style={{ width: 260 }}
                      placeholder="Password"
                      size="large"
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
                    style={{ maxWidth: "150px" }}
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
  <div class="onboarding">
    <div class="swiper-container">
      <div class="swiper-wrapper">
  

        <div class="swiper-slide color-1">
          <div class="slide-image">
            <img src={require("./../../../assets/logo/beta/logo-view.png")} loading="lazy" alt="" />
          </div>
          {/* <div class="slide-content">
            <h2>Turn your ideas into reality.</h2>
            <p>Consistent quality and eperience across all platform and devices</p>
          </div> */}
        </div>
      </div>
    </div>
  </div>
</div>
      </>
    )
  );
}

export default Form.create({ name: "login" })(SignIn);
