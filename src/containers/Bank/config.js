import { routes } from "../Dashboard/DashboardRoutes";
import { privateSub } from "../../router";

const pages = {
  index: "Bank",
  add: "BankNew",
  edit: "BankEdit",
  show: "BankShow",
};
const config = {
  api: {
    index: [{ method: "get", params: {} }, "banks"],
    add: [{ method: "post", params: {} }, "banks"],
    edit: [{ method: "put", params: {} }, "banks/"],
    show: [{ method: "get", params: {} }, "banks/"],
    delete: [{ method: "delete", params: {} }, "banks/"],
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
