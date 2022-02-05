import React, { useState } from "react";
import axios from "../../library/helpers/axios";
import { notification, Tag } from "antd";
import IndexMain from "../MainIndex/mainIndex";
import { useSelector } from "react-redux";
import { generateCols } from "../MainIndex/generateCol";
import { FaSearch, FaCity, FaGlobe, FaUsers } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { SearchOutlined } from "@ant-design/icons";
import config, { isActive } from "./config";
import { toast } from "react-toastify";
import { getPermissions } from "@iso/config/permissions";
import  moment from "moment-hijri";

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
    {
      uniq: "q",
      type: "search",
      icon: <SearchOutlined />,
      placeholder: ["بحث", "Search ..."],
      key: "q",
      online: {
        status: true,
        url: "url",
        params: "",
      },
      hide: {
        onValue: "new",
        hiddenFilters: ["city_id", "fromTO"],
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
   //     addRowURL={getPermissions("users", "create")?config.routes.add:false}
        // head filters table
        filters={filters}
        // columns table content
     //   editRowURL={getPermissions("users", "update")?config.routes.edit:false}
         showRowURL={config.routes.show}
      //   deleteRow={{ status: getPermissions("users", "delete"), deleteRecord }}
         action={(getPermissions("users", "delete")||getPermissions("users", "update"))||true}

         generalCols={generateCols([
          {
            key: "name_en",
            content: (text, {first_name_en,second_name_en}) => <div >{`${first_name_en} ${second_name_en}`}</div>
          },     
          
          {
            key: "name_ar",
            content: (text, {first_name_ar,second_name_ar}) => <div >{`${first_name_ar} ${second_name_ar}`}</div>
          },    
          {
            key: "contacts",
            content: (text, {email,phone}) => <div >
              <div>{email}</div>
              <Tag>{phone}</Tag>
              </div>
          },  
          "national_id",

          {
            key: "created_at",

            content: (text, record) =>
            <div style={{display:"flex", flexDirection:"column",gap:5}}>
            <Tag color="cyan">{ moment(text).format('iYYYY-iM-iD')} H</Tag>  
           <Tag color="blue">{moment(text).format('YYYY-M-D')} G </Tag>
           </div>
          },

          {
            key: "is_active",

            content: (text, record) =>
              !text ? (
                <Tag color="#a82b31">{isActive[text]}</Tag>
              ) : (
                <Tag color="#248624">{isActive[text]}</Tag>
              ),
          },


        ])}
        options={[]}
        // add table props here
      />
    </>
  );
};
export default Countries;



