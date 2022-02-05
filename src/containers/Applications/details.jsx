import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardWraper from "../../components/new/CardWraper";
import PageWraper from "../../components/new/PageWraper";
import Loader from "../../components/new/loader";
import enstance from "../../library/helpers/axios";
import { Descriptions,Row,Col ,Divider,List,Avatar,Tag} from "antd";
import config,{status} from "./config";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import  moment from "moment-hijri";

const { Meta } = Card;

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
                <Row gutter={[16, 16]}>

                    <Col span={12} >
                    <Divider orientation="left">User</Divider>

                    <List
    itemLayout="horizontal"
    dataSource={user?.user&&[user?.user]}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={item?.image}  />}
          title={<Link to={`/admin/clients/${item.id}`}>{item.name_en}</Link>}
          description={
            <>
            <div>{item.email}</div>
            <div>{item.phone}</div>
            </>
          }
        />
      </List.Item>
    )}
  />
                    </Col>


  <Col span={24} >
  <Divider orientation="left">Application Info</Divider>

  <Descriptions bordered>
        
                                    <Descriptions.Item span={2} label={"status".translate()}>
                    {status[user?.status]?.[0]}
                  </Descriptions.Item>
                  <Descriptions.Item span={2} label={"amount_finance".translate()}>
                    {user?.amount_finance} SAR
                  </Descriptions.Item>
                  <Descriptions.Item span={2} label={"apr".translate()}>
                    {(user?.apr*100).toFixed(2)}%
                  </Descriptions.Item>
                  <Descriptions.Item span={2} label={"installment_amount".translate()}>
                    {user?.installment_amount} SAR
                  </Descriptions.Item>
                  <Descriptions.Item span={2} label={"interest_rate".translate()}>
                    {(user?.interest_rate*100).toFixed(2)}%
                  </Descriptions.Item>
                  <Descriptions.Item span={2} label={"tenure".translate()}>
                    {user?.tenure} Months
                  </Descriptions.Item>
                  <Descriptions.Item span={2} label={"sector".translate()}>
                    {user?.sector}
                  </Descriptions.Item>
                  <Descriptions.Item span={2} label={"profit".translate()}>
                    {user?.profit} SAR
                  </Descriptions.Item>
                  <Descriptions.Item span={2} label={"first_due_date".translate()}>
                    <div style={{display:"flex", flexDirection:"column",gap:5}}>
     <div >{ moment(user?.first_due_date).format('iYYYY-iM-iD')} H</div>  
    <div >{moment(user?.first_due_date).format('YYYY-M-D')} G </div>
    </div>
                  </Descriptions.Item>
                  <Descriptions.Item span={2} label={"last_due_date".translate()}>
                    <div style={{display:"flex", flexDirection:"column",gap:5}}>
     <div >{ moment(user?.last_due_date).format('iYYYY-iM-iD')} H</div>  
    <div >{moment(user?.last_due_date).format('YYYY-M-D')} G </div>
    </div>
                  </Descriptions.Item>
                  <Descriptions.Item  label={"created_at".translate()}>
    <div style={{display:"flex", flexDirection:"column",gap:5}}>
     <div >{ moment(user?.created_at).format('iYYYY-iM-iD')} H</div>  
    <div >{moment(user?.created_at).format('YYYY-M-D')} G </div>
    </div>
  </Descriptions.Item>  
                </Descriptions>
  </Col>





 {user?.documents.length>0&&<Col span={24} >
  <Divider orientation="left">Documents Info</Divider>

  {
  user?.documents?.map((e)=> <> 
     <a target="_blank" href={e?.url?e.url:"#"}> 
  <Card
    hoverable
    style={{ width: 200 ,display:"inline-block"}}
    cover={<img alt={e.type.replaceAll("_"," ")}  src="https://s1.eestatic.com/2018/05/02/actualidad/actualidad_304233531_130193551_1024x576.jpg" />}
  >
 
   <Meta title={e.type.replaceAll("_"," ")}  />
  </Card>
  </a>
  </> )
}
  </Col>}



  <Col span={24} >
  <Divider orientation="left">Employment Info</Divider>

  <Descriptions bordered>
          


                   <Descriptions.Item span={2} label={"total_monthly_salary".translate()}>
                    {user?.employmentInformation?.total_monthly_salary} SAR
                  </Descriptions.Item>
                  <Descriptions.Item span={2} label={"basic_monthly_salary".translate()}>
                    {user?.employmentInformation?.basic_monthly_salary} SAR
                  </Descriptions.Item>           
                 
                  <Descriptions.Item span={2} label={"salary_bank".translate()}>
                    {user?.employmentInformation?.salary_bank} 
                  </Descriptions.Item>    
                  <Descriptions.Item span={2} label={"salary".translate()}>
                    {user?.employmentInformation?.salary} SAR
                  </Descriptions.Item>    
                  <Descriptions.Item span={2} label={"rent_amount".translate()}>
                    {user?.employmentInformation?.rent_amount} SAR
                  </Descriptions.Item>    
                  <Descriptions.Item span={2} label={"occupation".translate()}>
                    {user?.employmentInformation?.occupation}
                  </Descriptions.Item>    
                  <Descriptions.Item span={2} label={"mortgage_support_amount".translate()}>
                    {user?.employmentInformation?.mortgage_support_amount} SAR
                  </Descriptions.Item>    
                  <Descriptions.Item span={2} label={"monthly_expenses".translate()}>
                    {user?.employmentInformation?.monthly_expenses} SAR
                  </Descriptions.Item>    
                  <Descriptions.Item span={2} label={"months_in_service".translate()}>
                    {user?.employmentInformation?.months_in_service}
                  </Descriptions.Item>    

                  <Descriptions.Item span={2} label={"IBAN".translate()}>
                    {user?.employmentInformation?.iban}
                  </Descriptions.Item>    
                  <Descriptions.Item span={2} label={"house_type".translate()}>
                    {user?.employmentInformation?.house_type==0?"Rent":"Own"}
                  </Descriptions.Item>   
                  <Descriptions.Item span={2} label={"having_mortgage_support".translate()}>
                    {Boolean(user?.employmentInformation?.having_mortgage_support)+""}
                  </Descriptions.Item>   
                  <Descriptions.Item span={2} label={"employment_category".translate()}>
                    {user?.employmentInformation?.employment_category}
                  </Descriptions.Item>   
                  <Descriptions.Item span={2} label={"created_at".translate()}>

                    <div style={{display:"flex", flexDirection:"column",gap:5}}>
     <div >{ moment(user?.employmentInformation?.created_at).format('iYYYY-iM-iD')} H</div>  
    <div >{moment(user?.employmentInformation?.created_at).format('YYYY-M-D')} G </div>
    </div>
                  </Descriptions.Item>   
        
                </Descriptions>
  </Col>

  <Col span={12} ></Col>


</Row>
              
              )}
            </CardWraper>
          </div>
        </div>
      </PageWraper>
    </div>
  );
};

export default UserDetails;
// documents: []
// employmentInformation: {id: 73, user_id: 2, company_id: 410, total_monthly_salary: 24925, basic_monthly_salary: 70000,…}

// user: {id: 2, first_name_en: "FAHAD", first_name_ar: "", second_name_en: "NAIF", second_name_ar: "",…}