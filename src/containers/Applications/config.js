import { routes } from "../Dashboard/DashboardRoutes";
import { privateSub } from "../../router";

const pages = {
  index: "Applications",
  add: "ApplicationsNew",
  edit: "ApplicationsEdit",
  show: "ApplicationsShow",
};
const config = {
  api: {
    index: [{ method: "get", params: {} }, "applications"],
    add: [{ method: "post", params: {} }, "applications"],
    edit: [{ method: "put", params: {} }, "applications/"],
    show: [{ method: "get", params: {} }, "applications/"],
    delete: [{ method: "delete", params: {} }, "applications/"],
    validate: [{ method: "post", params: {} }, "validate_applications/"],
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
  0: ["DRAFT", "black"],
  1: ["DECLINED", "red"],
  2: ["CONFIRMED", "green"],
  3: ["PENDING CUSTOMER ACCEPTANCE", "orange"],
  4: ["PENDING DOCUMENTS UPLOAD", "orange"],
  5: ["PENDING DOCUMENTS VALIDATION", "orange"],
  6: ["PENDING DOCUMENTS SIGNATURE", "orange"],
  7: ["PENDING PROMISSORY NOTE SIGNATURE", "orange"],
  8: ["ACTIVE DEAL", "green"],
  9: ["CLOSED", "red"],
  10: ["REJECT", "red"],
};
export default config;
