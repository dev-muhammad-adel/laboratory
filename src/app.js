import React from "react";
import { Provider } from "react-redux";
import GlobalStyles from "@iso/assets/styles/globalStyle";
import { useSelector } from "react-redux";

import { store } from "./redux/store";
import Boot from "./redux/boot";
import Routes from "./router";

import AppProvider from "./AppProvider";
import IntlMessages from "@iso/components/utility/intlMessages";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

String.prototype.cheakEmpty = function (returned) {
  let selectedString = this;

  if (selectedString) return selectedString;
  else return returned;
};
String.prototype.translate = function (returned) {
  return <IntlMessages id={this} />;
};

const Customize = ({ children }) => {
  const customization = useSelector((state) => state.customizationReducer);

  return (
    <> <GlobalStyles /><Routes /><ToastContainer /> </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppProvider>
        <>
          <Customize />
        </>
      </AppProvider>
    </Provider>
  );
};
if (localStorage.getItem("lang") == "ar") {
  document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
} else {
}

Boot()
  .then(() => App())
  .catch((error) => console.error(error));

export default App;
