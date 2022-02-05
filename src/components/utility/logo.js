import React from "react";
import { Link } from "react-router-dom";
import siteConfig from "@iso/config/site.config";
import './logo.css'
export default ({ collapsed }) => {
  const [play,setPlay] = React.useState(false)
  React.useEffect(()=>{
let playTime = setInterval(()=>{
  setPlay(e=>!e)
},2000)
return ()=>{
  clearInterval(playTime)
}
  },[])
  return (
    <div className="isoLogoWrapper">
      {collapsed ? (
        <div>
          <h3>
            <Link to="/admin">
              <img
            className={`${play?'jello-horizontal':null}`}

                style={{ width: "40%" }}
                src={require("../../assets/logo/beta/logo-small.png")}
                alt=""
              />
            </Link>
          </h3>
        </div>
      ) : (
        <h3>
          <Link to="/admin">
            <img
            className={`${play?'jello-horizontal':null}`}
            style={{ width: "70%" }}
              src={require("../../assets/logo/beta/logo-large.png")}
              alt=""
            />
          </Link>
        </h3>
      )}
      <div style={{ background: "#ccc", height: "1px", margin: "0 7px" }}></div>
    </div>
  );
};
