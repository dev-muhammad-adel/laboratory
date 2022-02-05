import { all } from "redux-saga/effects";
import authSagas from "@iso/redux/auth/saga";
import invoicesSagas from "@iso/redux/invoice/saga";
import mailSagas from "@iso/redux/mail/saga";
import ecommerceSaga from "@iso/redux/ecommerce/saga";
import articles from "@iso/redux/articles/sagas";
import investors from "@iso/redux/investors/sagas";
import scrumBoardSaga from "@iso/redux/scrumBoard/saga";
import profileSaga from "@iso/redux/profile/saga";

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    mailSagas(),
    ecommerceSaga(),
    invoicesSagas(),
    articles(),
    investors(),
    scrumBoardSaga(),
    profileSaga(),
  ]);
}
