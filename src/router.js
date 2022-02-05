import React, { lazy, Suspense } from "react";
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { useSelector } from "react-redux";
import enstance from "./library/helpers/axios";

import ErrorBoundary from "./ErrorBoundary";
import { PUBLIC_ROUTE } from "./route.constants";
import LoaderWave from "@iso/components/utility/loader";
// import Loader from "@iso/Mcomponents/extended/Loader/Loader";
// import Loader from "@iso/Mcomponents/extended/Loader/Loader2";
// import LoaderWave from "@iso/Mcomponents/extended/Loader/loaderWave";
import { toast } from "react-toastify";

const Dashboard = lazy(() => import("./containers/Dashboard/Dashboard"));

const publicRoutes = [
  {
    path: PUBLIC_ROUTE.LANDING,
    exact: true,
    component: lazy(() => import("@iso/containers/Pages/SignIn/SignIn")),
  },
  {
    path: PUBLIC_ROUTE.PAGE_404,
    component: lazy(() => import("@iso/containers/Pages/404/404")),
  },
  {
    path: PUBLIC_ROUTE.PAGE_500,
    component: lazy(() => import("@iso/containers/Pages/500/500")),
  },
  {
    path: PUBLIC_ROUTE.SIGN_IN,
    component: lazy(() => import("@iso/containers/Pages/SignIn/SignIn")),
  },
  // {
  //   path: PUBLIC_ROUTE.SIGN_UP,
  //   component: lazy(() => import("@iso/containers/Pages/SignUp/SignUp")),
  // },
  // {
  //   path: PUBLIC_ROUTE.FORGET_PASSWORD,
  //   component: lazy(() =>
  //     import("@iso/containers/Pages/ForgotPassword/ForgotPassword")
  //   ),
  // },
  // {
  //   path: PUBLIC_ROUTE.RESET_PASSWORD,
  //   component: lazy(() =>
  //     import("@iso/containers/Pages/ResetPassword/ResetPassword")
  //   ),
  // },
  // {
  //   path: PUBLIC_ROUTE.AUTH0_CALLBACK,
  //   component: lazy(() =>
  //     import("@iso/containers/Authentication/Auth0/Auth0Callback")
  //   ),
  // },
];
function PrivateRoute({ children, ...rest }) {
  const isLoggedIn = useSelector((state) => state.Auth.idToken);
  const profile = useSelector((state) => state);


  React.useEffect(() => {
    if (isLoggedIn) {
      enstance["get"](`profile`)
        .then((res) => {
          let permissions = {};
          res.data.data.permissions.forEach((data, index) => {
            if (typeof permissions[data.name.split("-")[0]] != "object") {
              permissions[data.name.split("-")[0]] = {};
            }
            Object.defineProperty(
              permissions[data.name.split("-")[0]],
              [data.name.split("-")[1]],
              {
                enumerable: true,
                configurable: true,
                writable: true,
                value: 1,
              }
            );
          });
          res.data.data.permissions = permissions;
          localStorage.setItem("profile", JSON.stringify(res.data.data));
        })
        .catch((err) => {});
    }
  }, []);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
const privateSub = "/admin";
export { privateSub };
export default function Routes() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoaderWave />}>
        <Router>
          <Switch>
            {publicRoutes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact}>
                <route.component />
              </Route>
            ))}

            <PrivateRoute path={privateSub}>
              <Dashboard />
            </PrivateRoute>
          </Switch>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}
