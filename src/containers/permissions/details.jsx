import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardWraper from "../../components/new/CardWraper";
import PageWraper from "../../components/new/PageWraper";
import Loader from "../../components/new/loader";
import enstance from "../../library/helpers/axios";
import { Descriptions, Divider, Table, Tag } from "antd";
import config from "./config";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { generateCols } from "../MainIndex/generateCol";

// import { useSelector } from 'react-redux';

const UserDetails = () => {
  const [user, setUser] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();

  // const isLoggedIn = useSelector((state) => state.Auth.idToken);

  ////////////////////////////////

  useEffect(() => {
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
    setLoading(true);
    enstance[config.api.show[0].method](`${config.api.show[1]}${params.id}`, {
      headers: {},
    }).then((res) => {
      setLoading(false);
      setUser(res.data.data);
    });
  }, []);



  return (
    <div className="user_details">
      <PageWraper>
        <div>
          <div style={{ marginTop: "1rem" }}>
            <CardWraper>
              {loading ? (
                <div className="text-center">
                  <Loader />
                </div>
              ) : (
                <>
                  <Descriptions>
                    <Descriptions.Item label={"name_en".translate()}>
                      {user?.name_en}
                    </Descriptions.Item>
                    <Descriptions.Item label={"name_ar".translate()}>
                      {user?.name_ar}
                    </Descriptions.Item>
                  

                    {/* 

degrees_documents: []
national_documents: []
syndicate_documents: [] */}
                  </Descriptions>
              
                </>
              )}
            </CardWraper>
          </div>
        </div>
      </PageWraper>
    </div>
  );
};

export default UserDetails;
