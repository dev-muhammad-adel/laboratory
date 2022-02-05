import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Breadcrumb } from "antd";
import appActions from "@iso/redux/app/actions";
import TopbarNotification from "./TopbarNotification";
import TopbarUser from "./TopbarUser";
import TopbarWrapper from "./Topbar.styles";
import Logo from "@iso/components/utility/logo";
import IntlMessages from "@iso/components/utility/intlMessages";
import { HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./style.css";
import { privateSub } from "../../router";

const { Header } = Layout;
const { toggleCollapsed } = appActions;

export default function Topbar({ top }) {
  const [selectedItem, setSelectedItem] = React.useState("");
  const customizedTheme = useSelector(
    (state) => state.ThemeSwitcher.topbarTheme
  );
  const crumbs = useSelector((state) => state.crumbReducer);

  const { collapsed, openDrawer } = useSelector((state) => state.App);
  const dispatch = useDispatch();
  const handleToggle = React.useCallback(
    () => dispatch(toggleCollapsed()),
    [dispatch]
  );
  const isCollapsed = collapsed && !openDrawer;
  const styling = {
    background: top
      ? "#ffffff00"
      : customizedTheme?.backgroundColor || "#ffffff9c",
    boxShadow: top ? "rgb(170 170 170 / 36%) 0px 0px 10px 1px":"",

    // transition: "none !important",
  };
  return (
    <TopbarWrapper
      notCollapsed={{
        marginLeft: 247,
        marginRight: 8,
      }}
      collapsed={{
        marginLeft: 90,
        marginRight: 8,
      }}
    >
      <Header
        style={styling}
        className={
          isCollapsed ? "isomorphicTopbar collapsed" : "isomorphicTopbar "
        }
      >
        <div className="isoLeft">
     

          <button
            className={
              isCollapsed ? "triggerBtn menuCollapsed " : "triggerBtn menuOpen "
            }
            style={{
              color: customizedTheme.textColor,
              margin: "0 0 0 12px ",
            }}
            onClick={handleToggle}
          />
          <div
            style={{ margin: "0 10px" }}
            className="actions breadcrumb-container"
          >
            <Breadcrumb
              style={{
                alignSelf: "center",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
              separator="/"
            >
              <Breadcrumb.Item href="">
                <Link to={privateSub}>
                  <HomeOutlined />
                </Link>
              </Breadcrumb.Item>
              {crumbs?.crumbs?.map((e) => (
                <Breadcrumb.Item key={e.key}>
                  <Link to={e.to}>
                    <IntlMessages id={e.title} />
                  </Link>
                </Breadcrumb.Item>
              ))}
            </Breadcrumb>
          </div>
        </div>

        <ul className="isoRight">
          {/* <li className="isoSearch">
            <TopbarSearch />
          </li>
*/}
          {/* <li
            onClick={() => setSelectedItem("notification")}
            className={selectedItem ? "isoNotify active" : "isoNotify"}
          >
            <TopbarNotification />
          </li> */}

          {/* <li onClick={() => setSelectedItem('message')} className="isoMsg">
            <TopbarMessage />
          </li> */}
          {/* <li onClick={() => setSelectedItem("addToCart")} className="isoCart">
            <TopbarAddtoCart />
          </li> */}
          <li onClick={() => setSelectedItem("user")} className="isoUser">
            <TopbarUser />
          </li>
        </ul>
      </Header>
    </TopbarWrapper>
  );
}
