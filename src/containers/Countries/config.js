import { routes } from "../Dashboard/DashboardRoutes";
import { privateSub } from "../../router";

const pages = {
  index: "Countries",
  add: "CountriesNew",
  edit: "CountriesEdit",
  show: "CountriesShow",
};
const config = {
  api: {
    index: [{ method: "get", params: {} }, "countries"],
    add: [{ method: "post", params: {} }, "countries"],
    edit: [{ method: "put", params: {} }, "countries/"],
    show: [{ method: "get", params: {} }, "countries/"],
    delete: [{ method: "delete", params: {} }, "countries/"],
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
