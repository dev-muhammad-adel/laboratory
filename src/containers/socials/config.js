import { routes } from "../Dashboard/DashboardRoutes";
import { privateSub } from "../../router";

const pages = {
  index: "socials",
  add: "socialsNew",
  edit: "socialsEdit",
  show: "socialsShow",
};
const config = {
  api: {
    index: [{ method: "get", params: {} }, "socials"],
    add: [{ method: "post", params: {} }, "socials"],
    edit: [{ method: "put", params: {} }, "socials/"],
    show: [{ method: "get", params: {} }, "socials/"],
    delete: [{ method: "delete", params: {} }, "socials/"],
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
