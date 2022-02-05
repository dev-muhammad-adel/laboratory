import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardWraper from "../../components/new/CardWraper";
import PageWraper from "../../components/new/PageWraper";
import Loader from "../../components/new/loader";
import enstance from "../../library/helpers/axios";
import { Descriptions } from "antd";
import config from "./config";
import { useDispatch } from "react-redux";

// import { useSelector } from 'react-redux';

const UserDetails = () => {
  const [user, setUser] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();

  // const isLoggedIn = useSelector((state) => state.Auth.idToken);

  ////////////////////////////////

  useEffect(() => {
    setLoading(true);
    enstance[config.api.show[0].method](`${config.api.show[1]}${params.id}`, {
      headers: {},
    }).then((res) => {
      setLoading(false);
      setUser(res.data.data);
    });
  }, []);

  dispatch({
    type: "SET",
    payload: [
      {
        key: config.routes.indexKey,
        to: config.routes.index,
        title: config.routes.indexTitle,
      },
      {
        key: config.titles.show,
        to: `${config.routes.show}${params.id}`,
        title: config.titles.show,
      },
    ],
  });

  return (
    <div className="user_details">
      <PageWraper>
        <div>
          <h1 className="page_title"> {user?.name} </h1>
          <div style={{ marginTop: "1rem" }}>
            <CardWraper>
              {loading ? (
                <div className="text-center">
                  <Loader />
                </div>
              ) : (
                <Descriptions>
                  <Descriptions.Item label="Image">
                    {user?.image ? (
                      <img
                        style={{ width: 100, height: 100 }}
                        src={user.image}
                      />
                    ) : (
                      "__"
                    )}
                  </Descriptions.Item>
                  <Descriptions.Item label={"title_en".translate()}>
                    {user?.title_en}
                  </Descriptions.Item>
                  <Descriptions.Item label={"title_en".translate()}>
                    {user?.title_ar}
                  </Descriptions.Item>
                  <Descriptions.Item label={"content_en".translate()}>
                    {user?.content_en}
                  </Descriptions.Item>
                  <Descriptions.Item label={"content_ar".translate()}>
                    {user?.content_ar}
                  </Descriptions.Item>
                </Descriptions>
              )}
            </CardWraper>
          </div>
        </div>
      </PageWraper>
    </div>
  );
};

export default UserDetails;
