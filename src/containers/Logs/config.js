import { routes } from "../Dashboard/DashboardRoutes";
import { privateSub } from "../../router";

const pages = {
  index: "Logs",
  add: "LogsNew",
  edit: "LogsEdit",
  show: "LogsShow",
};
const config = {
  api: {
    index: [{ method: "get", params: {} }, "logs"],
    add: [{ method: "post", params: {} }, "logs"],
    edit: [{ method: "put", params: {} }, "logs/"],
    show: [{ method: "get", params: {} }, "logs/"],
    delete: [{ method: "delete", params: {} }, "logs/"],
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
