const permissions = JSON.parse(localStorage.getItem("profile")).permissions;
export const getPermissions = (route, type) =>
  permissions?.[route]?.[type] ? true : false;
