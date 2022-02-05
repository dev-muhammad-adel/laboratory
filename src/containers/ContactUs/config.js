import { routes } from "../Dashboard/DashboardRoutes";
import { privateSub } from "../../router";

const pages = {
  index: "ContactUs",
  add: "ContactUsNew",
  edit: "ContactUsEdit",
  show: "ContactUsShow",
};
const config = {
  api: {
    index: [{ method: "get", params: {} }, "contactUs"],
    add: [{ method: "post", params: {} }, "contactUs"],
    edit: [{ method: "put", params: {} }, "contactUs/"],
    show: [{ method: "get", params: {} }, "contactUs/"],
    delete: [{ method: "delete", params: {} }, "contactUs/"],
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
    add: "Create",
    edit: "global.edit",
    show: "Details",
  },
};
export const statusVal = {
  1: "Open",
  3: "Closed",
  2: "Under Process",
};
export default config;
