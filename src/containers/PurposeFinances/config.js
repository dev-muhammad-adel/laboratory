import { routes } from "../Dashboard/DashboardRoutes";
import { privateSub } from "../../router";

const pages = {
  index: "PurposeFinances",
  add: "PurposeFinancesNew",
  edit: "PurposeFinancesEdit",
  show: "PurposeFinancesShow",
};
const config = {
  api: {
    index: [{ method: "get", params: {} }, "purposeFinances"],
    add: [{ method: "post", params: {} }, "purposeFinances"],
    edit: [{ method: "put", params: {} }, "purposeFinances/"],
    show: [{ method: "get", params: {} }, "purposeFinances/"],
    delete: [{ method: "delete", params: {} }, "purposeFinances/"],
  },
  routes: {
    index: `${privateSub}/${routes[pages.index]?.path}`,
    indexTitle: pages.index.replace(/([a-z])([A-Z])/g, "$1 $2"),
    indexKey: "home",
    add: `${privateSub}/${routes[pages.add]?.path}`,
    edit: `${privateSub}/${routes[pages.edit]?.path.slice(
      0,
      routes[pages.edit].path.length - 3
    )}`,
    show: `${privateSub}/${routes[pages.show]?.path.slice(
      0,
      routes[pages.show]?.path.length - 3
    )}`,
  },
  titles: {
    add: "provenance.create",
    edit: "global.edit",
    show: "Details",
  },
};
export default config;
