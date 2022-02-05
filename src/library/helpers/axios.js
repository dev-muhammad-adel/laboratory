import axios from "axios";
const token = localStorage.getItem("BetaLabtoken");
 export const URL = "https://admin.mohamedadel.tech/admin";
const instance = axios.create({
  baseURL: `${URL}`,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});
instance.interceptors.request.use((req) => req);
instance.interceptors.response.use(
  (res) =>  res,
  (err) => {
    if (
      err &&
      err.response &&
      err.response.status == 403 &&
      err.response.config.url != "/login"
    ) {
      window.localStorage.removeItem("BetaLabtoken");
      window.location.replace("/");
    } else if (
      err.response.status == 401 &&
      err.response.config.url != "/login"
    ) {
      // window.localStorage.removeItem("BetaLabtoken");
      // window.location.replace("/");
    }
    // Important: response interceptors **must** return the response.
    // return err;
    else return Promise.reject(err);
  }
);

export default instance;
