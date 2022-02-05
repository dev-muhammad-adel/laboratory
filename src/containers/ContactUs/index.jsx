import React, { useState } from "react";
import axios from "../../library/helpers/axios";
import { Tag,Select } from "antd";
import IndexMain from "../MainIndex/mainIndex";
import { useSelector } from "react-redux";
import { generateCols } from "../MainIndex/generateCol";
import { FaSearch,FaArtstation, FaGlobe } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { SearchOutlined } from "@ant-design/icons";
import config ,{statusVal}from "./config";
import { toast } from "react-toastify";
import { getPermissions } from "@iso/config/permissions";
import userConfig from "./../clients/config";
import { Link, useHistory } from "react-router-dom";import  moment from "moment-hijri";

const {Option} = Select

const Countries = () => {
  const [fetcher, setFetcher] = useState(0);

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
    {
      uniq: "contactType",
      type: "select",
      icon: <FaGlobe />,
      placeholder: ["البلد", "Contact Type"],
      key: "country_id",
      data: {
        isOnline: true,
        url: "contactTypes",
        params: {},
        options: [{ id: null, ["title_en"]: "All" }],
        optionName: "title_en",
      },
    },
    {
      icon: <FaArtstation />,

      type: "select",
      placeholder: ["Status", "Status"],
      key: "status",
      data: {
        isOnline: false,
      //  url: "cities",
     //   params: {},
        options: [
          { id: null, ["name_en"]: "All" },
          { id: 1, ["name_en"]: "Open" },
          { id: 3, ["name_en"]: "Closed" },
          { id: 2, ["name_en"]: "Under Process" },
      
      
      
      ],
        optionName: "name_en",
      },
    },
    {
      uniq: "fromTO",
      type: "dateFromTo",
      icon: <MdDateRange />,
      placeholder: {
        ar: ["تاريخ البدء", " تاريخ الانتهاء"],
        en: ["start date", "end date"],
      },
      key: ["from", "to"],
      data: {
        isOnline: false,
      },
    },
  ];
  function changeStatus(id,value) {
    console.log({id},{value})
    const params = {
      status:value
    }
    toast.promise(
      axios['post'](`contactUs/${id}/changeStatus`,params, {
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
        action={false}
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
    //    addRowURL={config.routes.add}
        // head filters table
        filters={filters}
        // columns table content
 //       editRowURL={config.routes.edit}
        // showRowURL={config.routes.show}
        attachExport = {true}
        deleteRow={{ status: getPermissions("contacts", "delete"), deleteRecord }}
        generalCols={generateCols([
        
          {
            key: "date",

            content: (text, record) =>
            <div style={{display:"flex", flexDirection:"column",gap:5}}>
            <Tag color="cyan">{ moment(text).format('iYYYY-iM-iD')} H</Tag>  
           <Tag color="blue">{moment(text).format('YYYY-M-D')} G </Tag>
           </div>
          },
          "time",  
        {
          key:'Customer Name',
          content:(text,record)=><div >
                        
            <Link to={`${userConfig.routes.show}${record.user_id}`}>
            {record.user_name}
            </Link>
            
            </div>
        },


        
        "contactType", "message",
      
      
        {
          key:'status',
          content:(text,record)=><div >{statusVal[text]}</div>
        },
        {
          title:"Action",
         key:'status',
         content:(text,record)=>text!=3&&<><Select
         style={{ width: 130 }}
         value={text}
         onChange={(e)=>changeStatus(record.id,e)}
       >
         <Option value={1}>{statusVal[1]}</Option>
         <Option value={2}>{statusVal[2]}</Option>
         <Option value={3}>{statusVal[3]}</Option>
       </Select></>
       },
      
      
      ])}

        options={[]}
        // add table props here
      />
    </>
  );
};
export default Countries;
