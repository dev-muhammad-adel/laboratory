import { routes } from "../Dashboard/DashboardRoutes";
import { privateSub } from "../../router";

const pages = {
  index: "Products",
  add: "ProductsNew",
  edit: "ProductsEdit",
  show: "ProductsShow",
};
const config = {
  api: {
    index: [{ method: "get", params: {} }, "product_information"],
    add: [{ method: "post", params: {} }, "product_information"],
    edit: [{ method: "put", params: {} }, "product_information/"],
    show: [{ method: "get", params: {} }, "product_information/"],
    delete: [{ method: "delete", params: {} }, "product_information/"],
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
  permissionName: "productInformation",
};
export const listType = {
  1: "Advantages",
  2: "General Conditions",
  3: "Required Documents",
};
export const productType = {
  1: "Tawrrouq",
  2: "Ijarah",
  3: "Morapha",
};

export default config;
