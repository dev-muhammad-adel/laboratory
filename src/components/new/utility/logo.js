import React from "react";
import { Link } from "react-router-dom";
import siteConfig from "@iso/config/site.config";

export default ({ collapsed, logo }) => {
  return (
    <div className="isoLogoWrapper">
      {collapsed ? (
        <div>
          <h3>
            <Link to="/dashboard">
              <img
                style={{ width: "100%", height: "3rem", padding: "5px" }}
                src={require("../../../assets/logo/logo.png")}
                alt=""
              />
              {/* <img style={{ width: "40%" }} src={logo} alt="" /> */}
            </Link>
          </h3>
        </div>
      ) : (
        <h3>
          <Link to="/dashboard">
            <img
              style={{ width: "90%", height: "3rem", padding: "0 19px" }}
              src={require("../../../assets/logo/logo4.png")}
              alt=""
            />
          </Link>
        </h3>
      )}
    </div>
  );
};
