import { routes } from "../Dashboard/DashboardRoutes";
import { privateSub } from "../../router";

const pages = {
  index: "Companies",
  add: "CompaniesNew",
  edit: "CompaniesEdit",
  show: "CompaniesShow",
};
const config = {
  api: {
    index: [{ method: "get", params: {} }, "companies"],
    add: [{ method: "post", params: {} }, "companies"],
    edit: [{ method: "put", params: {} }, "companies/"],
    show: [{ method: "get", params: {} }, "companies/"],
    delete: [{ method: "delete", params: {} }, "companies/"],
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
