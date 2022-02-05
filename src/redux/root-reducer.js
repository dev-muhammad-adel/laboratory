import { combineReducers } from "redux";
import App from "@iso/redux/app/reducer";
import Auth from "@iso/redux/auth/reducer";
import Mails from "@iso/redux/mail/reducer";
import Box from "@iso/redux/box/reducer";
import DynamicChartComponent from "@iso/redux/dynamicEchart/reducer";
import Ecommerce from "@iso/redux/ecommerce/reducer";
import ThemeSwitcher from "@iso/redux/themeSwitcher/reducer";
import Invoices from "@iso/redux/invoice/reducer";
import LanguageSwitcher from "@iso/redux/languageSwitcher/reducer";
import Articles from "@iso/redux/articles/reducers";
import Investors from "@iso/redux/investors/reducers";
import scrumBoard from "@iso/redux/scrumBoard/reducer";
import snackbar from "@iso/redux/snackbar/reducer";
import crumbReducer from "@iso/redux/crumb/reducer";

import modal from "@iso/redux/modal/reducer";
import profile from "@iso/redux/profile/reducer";
import customizationReducer from "@iso/redux/customizationReducer/reducer";

import bright from "@iso/redux/bright/reducer";

export default combineReducers({
  Auth,
  App,
  ThemeSwitcher,
  LanguageSwitcher,
  Mails,
  Box,
  DynamicChartComponent,
  Ecommerce,
  Invoices,
  Articles,
  Investors,
  scrumBoard,
  modal,
  snackbar,
  profile,
  customizationReducer,
  crumbReducer,
  bright,
});
