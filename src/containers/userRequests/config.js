import { routes } from "../Dashboard/DashboardRoutes";
import { privateSub } from "../../router";

const pages = {
  index: "userRequests",
  add: "userRequestsNew",
  edit: "userRequestsEdit",
  show: "userRequestsShow",
};
const config = {
  api: {
    index: [{ method: "get", params: {} }, "userRequests"],
    add: [{ method: "post", params: {} }, "userRequests"],
    edit: [{ method: "put", params: {} }, "userRequests/"],
    show: [{ method: "get", params: {} }, "userRequests/"],
    delete: [{ method: "delete", params: {} }, "userRequests/"],
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
  permissionName: "applications",
};
export const status = {
  0: "pending",
  1: "accept",
  2: "reject",
};
export const type = {
  0: "Top Up",
  1: "Early Termination",
  2: "Clearance Letter",
};
console.log(config.routes.indexTitle);
export default config;
