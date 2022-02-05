import { Row, Col } from "antd";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import basicStyle from "@iso/assets/styles/constants";
import IsoWidgetsWrapper from "./WidgetsWrapper";
import StickerWidget from "./Sticker/StickerWidget";
import axios from "../../library/helpers/axios";
import { Line } from "react-chartjs-2";
import IntlMessages from "@iso/components/utility/intlMessages";
import Loader from "@iso/components/utility/loader";

import React, { useState, useEffect } from "react";

const styles = {
  wisgetPageStyle: {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "flex-start",
    overflow: "hidden",
    width: "100%",
  },
};

const STICKER_WIDGET = [
  {
    number: "widget.stickerwidget1.number",
    text: "widget.stickerwidget1.text",
    icon: "ion-email-unread",
    fontColor: "#ffffff",
    bgColor: "#7266BA",
  },
  {
    number: "widget.stickerwidget1.number",
    text: "widget.stickerwidget2.text",
    icon: "ion-android-camera",
    fontColor: "#ffffff",
    bgColor: "#42A5F6",
  },
  {
    number: "widget.stickerwidget1.number",
    text: "widget.stickerwidget3.text",
    icon: "ion-chatbubbles",
    fontColor: "#ffffff",
    bgColor: "#7ED320",
  },
  {
    number: "widget.stickerwidget1.number",
    text: "widget.stickerwidget4.text",
    icon: "ion-android-cart",
    fontColor: "#ffffff",
    bgColor: "#F75D81",
  },
];

export default function () {
  const { rowStyle, colStyle } = basicStyle;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    setLoading(true);
    axios
      .get(`/admin/statistics`, {
        headers: {},
      })
      .then((res) => {
        setData(res.data);

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  const [visible, setVisible] = useState(false);

  const getLang = () => {
    const roles = localStorage.getItem("lang");
    return roles;
  };
  useEffect(() => {
    fetchData();
  }, []);
  const dataChart = {
    labels: data && data?.chartProgramActivity?.map((e) => e.brandName),
    height: 300,
    allowHtml: true,
    cssClassNames: {
      tableCell: "custom-height",
    },

    datasets: [
      {
        label:
          getLang() && getLang() == "ar"
            ? "مخطط نشاط البرامج"
            : "Chart Programs Activity",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(72,166,242,0.6)",
        borderColor: "blueviolet",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(72,166,242,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(72,166,242,1)",
        pointHoverBorderColor: "rgba(72,166,242,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: data && data?.chartProgramActivity?.map((e) => e.subscribers),
      },
    ],
  };

  return (
    <LayoutWrapper>
      <div style={styles.wisgetPageStyle}>
        <div style={{ width: "100%" }}>
          <Row style={rowStyle} gutter={0} justify="start">
            {data ? (
              <>
                <Col lg={6} md={12} sm={12} xs={24} style={colStyle} key={0}>
                  <IsoWidgetsWrapper>
                    {/* Sticker Widget */}
                    <StickerWidget
                      number={data?.customers}
                      text={<IntlMessages id={"customers"} />}
                      icon={STICKER_WIDGET[1].icon}
                      fontColor={STICKER_WIDGET[1].fontColor}
                      bgColor={STICKER_WIDGET[1].bgColor}
                    />
                  </IsoWidgetsWrapper>
                </Col>

                <Col lg={6} md={12} sm={12} xs={24} style={colStyle} key={3}>
                  <IsoWidgetsWrapper>
                    {/* Sticker Widget */}
                    <StickerWidget
                      number={data?.subscribes}
                      text={<IntlMessages id={"subscribes"} />}
                      icon={STICKER_WIDGET[0].icon}
                      fontColor={STICKER_WIDGET[0].fontColor}
                      bgColor={STICKER_WIDGET[0].bgColor}
                    />
                  </IsoWidgetsWrapper>
                </Col>
              </>
            ) : (
              <Loader />
            )}
          </Row>
          <Row justify="center" style={{ backgroundColor: "white" }}>
            {data ? <></> : <Loader />}
          </Row>
        </div>
      </div>
    </LayoutWrapper>
  );
}
