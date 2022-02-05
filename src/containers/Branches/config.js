import { routes } from "../Dashboard/DashboardRoutes";
import { privateSub } from "../../router";

const pages = {
  index: "Branches",
  add: "BranchesNew",
  edit: "BranchesEdit",
  show: "BranchesShow",
};
const config = {
  api: {
    index: [{ method: "get", params: {} }, "branches"],
    add: [{ method: "post", params: {} }, "branches"],
    edit: [{ method: "put", params: {} }, "branches/"],
    show: [{ method: "get", params: {} }, "branches/"],
    delete: [{ method: "delete", params: {} }, "branches/"],
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
export const weekDays = [
  {
    id: 1,
    name: "Sat",
  },
  {
    id: 2,
    name: "Sun",
  },
  {
    id: 3,
    name: "Mon",
  },
  {
    id: 4,
    name: "Tues",
  },
  {
    id: 5,
    name: "Wed",
  },
  {
    id: 6,
    name: "Thur",
  },
  {
    id: 7,
    name: "Fri",
  },
];
export const weekDaysView = {
  1: "Sat",
  2: "Sun",
  3: "Mon",
  4: "Tues",
  5: "Wed",
  6: "Thur",
  7: "Fri",
};

export default config;
