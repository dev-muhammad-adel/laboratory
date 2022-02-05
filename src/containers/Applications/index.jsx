import React, { useState,useEffect } from "react";
import axios from "../../library/helpers/axios";
import { Popconfirm,Button ,Tag} from "antd";
import IndexMain from "../MainIndex/mainIndex";
import { useSelector } from "react-redux";
import { generateCols } from "../MainIndex/generateCol";
import { FaSearch, FaCity, FaGlobe } from "react-icons/fa";
import { GrStatusUnknown } from "react-icons/gr";
import { SearchOutlined } from "@ant-design/icons";
import config,{status} from "./config";
import { toast } from "react-toastify";
import { getPermissions } from "@iso/config/permissions";
import userConfig from "./../clients/config";
import { Link, useHistory } from "react-router-dom";
import { DeleteOutlined, StopOutlined, EyeTwoTone } from "@ant-design/icons";
import  moment from "moment-hijri";
import Assign from './assign'
import Confirm from './confirm'
const Countries = () => {

  const [fetcher, setFetcher] = useState(0);
  const [admins, setAdmins] = useState(null);
  useEffect(()=>{

    const params = {};
    axios
      .get(`admins`, {
        headers: {},
        params,
      })
      .then((res) => {
        setAdmins(res.data.data);
      });


  },[])

  const token = useSelector((state) => state.Auth.idToken);

  const deleteRecord = ({ id }) => {
    toast.promise(
      axios[config.api.delete?.[0]?.method](`${config.api.delete?.[1]}${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      {
        pending: "Pending",
        success: {
          render(res) {
            setFetcher((fetcher) => !fetcher);
            console.log(res.data);
            return `👌 ${res.data.data.message}`;
          },
          // other options
          icon: "🟢",
        },
        error: {
          render(err) {
            return `🤯 ${
              err?.data?.response?.data?.message || "Backend Error Occured"
            }`;
          },
          // other options
          //    icon: "🟢",
        },
      }
    );
  };
  // const actions = [
  //   {
  //     title: "Actions",
  //     dataIndex: "id",
  //     key: "id",
  //     render: (text, record, index) => (
  //       <div style={{ color: "#646D82", cursor: "pointer" }} className="d-flex">
  //       </div>
  //     ),
  //   },
  // ];

  const filters = [
    // {
    //   uniq: "q",
    //   type: "search",
    //   icon: <SearchOutlined />,
    //   placeholder: ["بحث", "Search ..."],
    //   key: "q",
    //   online: {
    //     status: true,
    //     url: "url",
    //     params: "",
    //   },
    //   hide: {
    //     onValue: "new",
    //     hiddenFilters: ["city_id", "fromTO"],
    //   },
    // },

    // {
    //   uniq: "country_id",
    //   type: "select",
    //   icon: <FaGlobe />,
    //   placeholder: ["البلد", "Country"],
    //   key: "country_id",
    //   data: {
    //     isOnline: true,
    //     url: "countries",
    //     params: {},
    //     options: [{ id: null, ["name_en"]: "All" }],
    //     optionName: "name_en",
    //   },
    // },
    // {
    //   uniq: "city_id",
    //   type: "select",
    //   icon: <FaCity />,
    //   placeholder: ["المدينة", "City"],
    //   key: "city_id",
    //   data: {
    //     isOnline: true,
    //     url: "cities",
    //     params: {},
    //     options: [{ id: null, ["name_en"]: "All" }],
    //     optionName: "name_en",
    //   },
    // },
    {
      uniq: "status",
      type: "select",
      icon: <GrStatusUnknown />,
          placeholder: ["status", "status"],
      key: "status",
      data: {
        isOnline: false,
      //  url: "cities",
     //   params: {},
        options: [
          { id: null, ["name_en"]: "All" },
          { id: 0, ["name_en"]: status[0][0] },
          { id: 1, ["name_en"]: status[1][0] },
          { id: 2, ["name_en"]: status[2][0] },
          { id: 3, ["name_en"]: status[3][0] },
          { id: 4, ["name_en"]: status[4][0] },
          { id: 5, ["name_en"]: status[5][0] },
          { id: 6, ["name_en"]: status[6][0] },
          { id: 7, ["name_en"]: status[7][0] },
          { id: 8, ["name_en"]: status[8][0]},
          { id: 9, ["name_en"]: status[9][0] },
          { id: 10, ["name_en"]: status[10][0] },
        ],
        optionName: "name_en",
      },
    },
    // {
    //   uniq: "fromTO",
    //   type: "dateFromTo",
    //   icon: <MdDateRange />,
    //   placeholder: {
    //     ar: ["تاريخ البدء", " تاريخ الانتهاء"],
    //     en: ["start date", "end date"],
    //   },
    //   key: ["from", "to"],
    //   data: {
    //     isOnline: false,
    //   },
    // },
  ];

  // axios[config.api.validate?.[0]?.method](`${config.api.validate?.[1]}${id}/reject`, {

  function confirm(id) {
    toast.promise(
      axios[config.api.validate?.[0]?.method](`/application/${id}/reject`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      {
        pending: "Pending",
        success: {
          render(res) {
            setFetcher((fetcher) => !fetcher);
            console.log(res.data);
            return `👌 ${res.data.data.message}`;
          },
          // other options
          icon: "🟢",
        },
        error: {
          render(err) {
            return `🤯 ${
              err?.data?.response?.data?.message || "Backend Error Occured"
            }`;
          },
          // other options
          //    icon: "🟢",
        },
      }
    );
  }

  return (
    <>
      <IndexMain
        //call index request
        fetcher={fetcher}
        // index url
        indexRequest={config.api.index}
        // Breadcrumb
        Breadcrumb={{
          type: "SET",
          payload: [
            {
              key: config.routes.indexKey,
              to: config.routes.index,
              title: config.routes.indexTitle,
            },
          ],
        }}
        // head table content
        addRowURL={getPermissions(config.permissionName, "create")?config.routes.add:false}
        // head filters table
        filters={filters}
        // columns table content
        editRowURL={getPermissions(config.permissionName, "update")?config.routes.edit:false}
         showRowURL={config.routes.show}
        deleteRow={{ status: getPermissions(config.permissionName, "delete"), deleteRecord }}
        action={(getPermissions(config.permissionName, "delete")||getPermissions(config.permissionName, "update"))||true}

        generalCols={generateCols( getPermissions('application', "assign")?[
          {
            key: "date",

            content: (text, record) =>
            <div style={{display:"flex", flexDirection:"column",gap:5}}>
           <Tag color="blue">{moment(text).format('YYYY-M-D')} G </Tag>
           <Tag color="cyan">{ record.time} </Tag>  

           </div>
          },
          
          
     
          {
            key:'Customer Name',
            content:(text,record)=><div >
                          
              <Link to={`${userConfig.routes.show}${record.user['id']}`}>
              {record.user['name_en']}
              </Link>
              
              </div>
          },
          {
            key:'amount_finance',
           align: 'center',
            content:(text,record)=><div >{text} SAR</div>
          },
          
          {
            key:'installment_amount',
           align: 'center',
            content:(text,record)=><div >{text} SAR</div>
          },
          
          {
            key:'interest_rate',
           align: 'center',
            content:(text,record)=><div >{(text*100).toFixed(2)}%</div>
          }, 
         {
           key:'status',
           content:(text)=><Tag color={status[text][1]}>{status[text][0]}</Tag>,
           align: 'center',
         },
         {
          key:'Documents Check',
        
          content:(text,record)=><div>{record.status==4&&<Confirm setFetcher={setFetcher} data={record} />}</div>
        }, 
        {
          key:'Assign',
        
          content:(text,record)=><div>{<Assign setFetcher={setFetcher} admins={admins&&admins} data={record} />}</div>
        }, 
        ]:
        
        [
          {
            key: "date",

            content: (text, record) =>
            <div style={{display:"flex", flexDirection:"column",gap:5}}>
           <Tag color="blue">{moment(text).format('YYYY-M-D')} G </Tag>
           <Tag color="cyan">{ record.time} </Tag>  

           </div>
          },
          
          
     
          {
            key:'Customer Name',
            content:(text,record)=><div >
                          
              <Link to={`${userConfig.routes.show}${record.user['id']}`}>
              {record.user['name_en']}
              </Link>
              
              </div>
          },
          {
            key:'amount_finance',
           align: 'center',
            content:(text,record)=><div >{text} SAR</div>
          },
          
          {
            key:'installment_amount',
           align: 'center',
            content:(text,record)=><div >{text} SAR</div>
          },
          
          {
            key:'interest_rate',
           align: 'center',
            content:(text,record)=><div >{(text*100).toFixed(2)}%</div>
          }, 
         {
           key:'status',
           content:(text)=><Tag color={status[text][1]}>{status[text][0]}</Tag>,
           align: 'center',
         },
         {
          key:'Documents Check',
        
          content:(text,record)=><div>{record.status==4&&<Confirm setFetcher={setFetcher} data={record} />}</div>
        }, 
       
        ]
        )}
        options={[

          {
            title: "Close",
            dataIndex: "id",
            key: "id",
            render: (text, record, index) => (
              <div style={{ color: "#646D82", cursor: "pointer" }} className="d-flex">
                {record?.status !=10 ? (
                  <Popconfirm
                    placement="top"
                    title="Are you sure to Close This Application?"
                    okText="Close The Application"
                    onConfirm={e=>confirm(record.id)}   
                    cancelText="cancel"
                  >
                    <Button shape="circle" style={{ margin: " 2px" }}>
                      <StopOutlined style={{ color: "red" }} />
                    </Button>
                  </Popconfirm>
                ) : (
                  ""
                )}
              </div>
            ),
          },
        ]}
        // add table props here
      />
    </>
  );
// status ==4 
 // documents: [{file_name: "Group-3793@2x.png", collection_name: "default",…}]
 // employmentInformation: {id: 53, user_id: 2, company_id: 410, total_monthly_salary: 24588, basic_monthly_salary: 70000,…}
 //  user: {id: 2, first_name_en: "FAHAD", first_name_ar: "", second_name_en: "NAIF", second_name_ar: "",…}
// first_due_date: null
//   last_due_date: null
//   sector: null
};
export default Countries;
