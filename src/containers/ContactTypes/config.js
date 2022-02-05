import { routes } from "../Dashboard/DashboardRoutes";
import { privateSub } from "../../router";

const pages = {
  index: "ContactTypes",
  add: "ContactTypesNew",
  edit: "ContactTypesEdit",
  show: "ContactTypesShow",
};
const config = {
  api: {
    index: [{ method: "get", params: {} }, "contactTypes"],
    add: [{ method: "post", params: {} }, "contactTypes"],
    edit: [{ method: "put", params: {} }, "contactTypes/"],
    show: [{ method: "get", params: {} }, "contactTypes/"],
    delete: [{ method: "delete", params: {} }, "contactTypes/"],
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
    add: "create",
    edit: "global.edit",
    show: "Details",
  },
};
export default config;
