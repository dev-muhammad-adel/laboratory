import { routes } from "../Dashboard/DashboardRoutes";
import { privateSub } from "../../router";

const pages = {
  index: "RetentionTimes",
  add: "RetentionTimesNew",
  edit: "RetentionTimesEdit",
  show: "RetentionTimesShow",
};
const config = {
  api: {
    index: [{ method: "get", params: {} }, "RetentionTimes"],
    add: [{ method: "post", params: {} }, "RetentionTimes"],
    edit: [{ method: "put", params: {} }, "RetentionTimes/"],
    show: [{ method: "get", params: {} }, "RetentionTimes/"],
    delete: [{ method: "delete", params: {} }, "RetentionTimes/"],
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
  permissionName: "RetentionTimes",
};
// export const listType = {
//   1: "Advantages",
//   2: "General Conditions",
//   3: "Required Documents",
// };
// export const productType = {
//   1: "Tawrrouq",
//   2: "Ijarah",
//   3: "Morapha",
// };
export default config;
