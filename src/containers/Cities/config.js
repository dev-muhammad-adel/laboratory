import { routes } from "../Dashboard/DashboardRoutes";
import { privateSub } from "../../router";

const pages = {
  index: "Cities",
  add: "CitiesNew",
  edit: "CitiesEdit",
  show: "CitiesShow",
};
const config = {
  api: {
    index: [{ method: "get", params: {} }, "cities"],
    add: [{ method: "post", params: {} }, "cities"],
    edit: [{ method: "put", params: {} }, "cities/"],
    show: [{ method: "get", params: {} }, "cities/"],
    delete: [{ method: "delete", params: {} }, "cities/"],
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
