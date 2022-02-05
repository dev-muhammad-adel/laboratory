import { routes } from "../Dashboard/DashboardRoutes";
import { privateSub } from "../../router";

const pages = {
  index: "roles",
  add: "rolesNew",
  edit: "rolesEdit",
  show: "rolesShow",
};
const config = {
  api: {
    index: [{ method: "get", params: {} }, "roles"],
    add: [{ method: "post", params: {} }, "roles"],
    edit: [{ method: "put", params: {} }, "roles/"],
    show: [{ method: "get", params: {} }, "roles/"],
    delete: [{ method: "delete", params: {} }, "roles/"],
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
export default config;
