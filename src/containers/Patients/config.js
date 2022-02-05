import { routes } from "../Dashboard/DashboardRoutes";
import { privateSub } from "../../router";

const pages = {
  index: "Patients",
  add: "PatientsNew",
  edit: "PatientsEdit",
  show: "PatientsShow",
};
const config = {
  api: {
    index: [{ method: "get", params: {} }, "patients"],
    add: [{ method: "post", params: {} }, "patients"],
    edit: [{ method: "put", params: {} }, "patients/"],
    show: [{ method: "get", params: {} }, "patients/"],
    delete: [{ method: "delete", params: {} }, "patients/"],
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
export const isActive = {
  1: "active",
  0: "not active",
};
export default config;
