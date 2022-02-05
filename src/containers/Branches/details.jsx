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


                  <Descriptions.Item label={"address_en".translate()}>
                    {user?.address_en}
                  </Descriptions.Item>
                  <Descriptions.Item label={"address_ar".translate()}>
                    {user?.address_ar}
                  </Descriptions.Item>
   
                  <Descriptions.Item label={"email".translate()}>
                    {user?.email}
                  </Descriptions.Item>
                  <Descriptions.Item label={"phone".translate()}>
                    {user?.phone}
                  </Descriptions.Item>

                  <Descriptions.Item label={"latitude".translate()}>
                    {user?.latitude}
                  </Descriptions.Item>
                  <Descriptions.Item label={"longitude".translate()}>
                    {user?.longitude}
                  </Descriptions.Item>
                  <Descriptions.Item label={"country_name".translate()}>
                    {user?.country_name}
                  </Descriptions.Item>
                  <Descriptions.Item label={"city_name".translate()}>
                    {user?.city_name}
                  </Descriptions.Item>
                  <Descriptions.Item label={"region_name".translate()}>
                    {user?.region_name}
                  </Descriptions.Item>
                  <Descriptions.Item label={"working_start".translate()}>
                    {user?.working_start}
                  </Descriptions.Item>
                  <Descriptions.Item label={"working_end".translate()}>
                    {user?.working_end}
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
