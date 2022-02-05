import React, {   useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout } from "antd";
import useWindowSize from "@iso/lib/hooks/useWindowSize";
import appActions from "@iso/redux/app/actions";
// import ThemeSwitcher from "@iso/containers/ThemeSwitcher/ThemeSwitcher";
// import siteConfig from "@iso/config/site.config";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import DashboardRoutes from "./DashboardRoutes";

import { DashboardContainer, DashboardGlobalStyles } from "./Dashboard.styles";

const { Content, Footer } = Layout;
const { toggleAll } = appActions;
// const bgTheme = localStorage.getItem("backgroundColor");
// const fgTheme = localStorage.getItem("forgroundColor");
const styles = {
  layout: { flexDirection: "row", overflowX: "hidden" },
  content: {
    padding: "55px 0 ",
    flexShrink: "0",
    position: "relative",
    boxShadow: "1px 1px 1px 1px black",
    overflowX: "hidden",
  },
  footer: {
    background: "#ffffff",
    textAlign: "center",
    borderTop: "1px solid #ededed",
  },
};

export default function Dashboard() {
  const dispatch = useDispatch();
  const appHeight = useSelector((state) => state.App.height);
  const { width, height } = useWindowSize();
  const bright = useSelector((state) => state.bright.value);
  const [top, setTop] = useState(false);
  const handleScroll = (e) => {
    let { scrollHeight, scrollTop, clientHeight } = e.target;
    if (scrollTop >= 10) {
      setTop(true);
    } else {
      setTop(false);
    }
  };

  React.useEffect(() => {
    dispatch(toggleAll(width, height));
  }, [width, height, dispatch]);
  return (
    <div style={{ filter: `brightness(${bright / 100})`, overflow: "hidden" }}>
      <DashboardContainer>
        <DashboardGlobalStyles />

        <Layout style={{ padding: "8px 0px 0px 8px" }}>
          <Topbar top={top} />

          <Layout style={styles.layout}>
            <Sidebar />
            <Layout
             
              onScroll={handleScroll}
              className="isoContentMainLayout"
              style={{
                height: appHeight + 34,
              }}
            >
              <Content className="isomorphicContent" style={styles.content}>
                <DashboardRoutes />
                {/* <Footer
                  style={{
                    textAlign: "center",
                    color: "black",
                    padding: "18px",
                    background: "white",
                    bottom: "0",
                    width: "calc(100% - 18px)",
                    height: "56px",
                    position: "absolute",
                    margin: "0 10px 8px 8px",
                    borderRadius: "15px",
                  }}
                >
                  {siteConfig.footerText}{" "}
                  <a href="#" target="_blank">
                    {" "}
                    
                  </a>
                </Footer> */}
              </Content>
            </Layout>
          </Layout>

          {/* <ThemeSwitcher /> */}
        </Layout>
      </DashboardContainer>
     
    </div>
  );
}
