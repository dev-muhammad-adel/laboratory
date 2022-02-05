import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardWraper from "../../components/new/CardWraper";
import PageWraper from "../../components/new/PageWraper";
import Loader from "../../components/new/loader";
import enstance from "../../library/helpers/axios";
import { Descriptions, Divider, Row, Col,Tag,Image } from "antd";
import config from "./config";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { generateCols } from "../MainIndex/generateCol";
import  moment from "moment-hijri";
import "./style.css"
// import 'moment/locale/ar-sa'  // without this line it didn't work

// import { useSelector } from 'react-redux';

const UserDetails = () => {

  console.log(moment('1436/2/6', 'iYYYY/iM/iD').format('iYYYY/iMMM/iD'))
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
  moment.locale();
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

<Row  gutter={[20, 20]}> 

<Col xs={24} sm={24} md={12} lg={12} xl={12}>
<Divider orientation="left">Client Info</Divider>


<Descriptions >
<Descriptions.Item span={3} label={"Image".translate()}>
<Image width={100} height={100} src={user?.image} /></Descriptions.Item>
<Descriptions.Item span={3} label={"name_en".translate()}>
  {user?.first_name_en} {user?.second_name_en} {user?.grand_father_name_en} {user?.family_name_en} 
</Descriptions.Item>
<Descriptions.Item span={3}  label={"name_ar".translate()}>
  {user?.first_name_ar} {user?.second_name_ar} {user?.grand_father_name_ar} {user?.family_name_ar} 
</Descriptions.Item>
<Descriptions.Item span={3}  label={"is_active".translate()}>
    {user?.is_active?'Active':'Not Active'}
  </Descriptions.Item>     
<Descriptions.Item span={3} label={"national_id".translate()}>
    {user?.national_id}
  </Descriptions.Item>
  <Descriptions.Item span={3}  label={"age".translate()}>
    {new Date().getFullYear() - moment(user?.date_of_birth, 'iYYYY').format('YYYY')}
  </Descriptions.Item>


  <Descriptions.Item  span={3} label={"Date Of Birth"}>
<div style={{display:"flex", flexDirection:"column",gap:5}}>
     <Tag >{ moment(user?.date_of_birth, 'iYYYY/iM/iD').format('iYYYY-iM-iD')} H</Tag>  
    <Tag >{moment(user?.date_of_birth, 'iYYYY/iM/iD').format('YYYY-M-D')} G </Tag>
    </div>
  </Descriptions.Item>

</Descriptions>

        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Divider orientation="left">Contact And Extra Info</Divider>

        <Descriptions >
        <Descriptions.Item  span={3} label={"email".translate()}>
    {user?.email}
  </Descriptions.Item>
  <Descriptions.Item  span={3} label={"phone".translate()}>
    {user?.phone}
  </Descriptions.Item>

  <Descriptions.Item span={3}  label={"National Address".translate()}>
    {user?.nationalAddress}
  </Descriptions.Item>
  <Descriptions.Item  span={3} label={"gender".translate()}>
    {!user?.gender?'Male':'Female'}
  </Descriptions.Item> 

</Descriptions>  
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Divider orientation="left">More Info</Divider>

        <Descriptions >
        <Descriptions.Item  label={"id_expiry_date".translate()}>
    <div style={{display:"flex", flexDirection:"column",gap:5}}>
     <Tag >{ moment(user?.id_expiry_date, 'iYYYY/iM/iD').format('iYYYY-iM-iD')} H</Tag>  
    <Tag >{moment(user?.id_expiry_date, 'iYYYY/iM/iD').format('YYYY-M-D')} G </Tag>
    </div>
  </Descriptions.Item>
  <Descriptions.Item  label={"id_issue_date".translate()}>
    <div style={{display:"flex", flexDirection:"column",gap:5}}>
     <Tag >{ moment(user?.id_issue_date, 'iYYYY/iM/iD').format('iYYYY-iM-iD')} H</Tag>  
    <Tag >{moment(user?.id_issue_date, 'iYYYY/iM/iD').format('YYYY-M-D')} G </Tag>
    </div>
  </Descriptions.Item>
  <Descriptions.Item  label={"id_issue_place_code".translate()}>
    {user?.id_issue_place_code}
  </Descriptions.Item>
  <Descriptions.Item  label={"Issue Place".translate()}>
    {user?.issue_place}
  </Descriptions.Item>
  <Descriptions.Item  label={"id_version_number".translate()}>
    {user?.id_version_number}
  </Descriptions.Item>
  <Descriptions.Item  label={"created_at".translate()}>
    <div style={{display:"flex", flexDirection:"column",gap:5}}>
     <Tag >{ moment(user?.created_at).format('iYYYY-iM-iD')} H</Tag>  
    <Tag >{moment(user?.created_at).format('YYYY-M-D')} G </Tag>
    </div>
  </Descriptions.Item>        

</Descriptions>
        </Col>

    </Row>
              
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
/*

<Descriptions>




</Descriptions>
*/
