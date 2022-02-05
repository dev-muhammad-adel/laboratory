import React, { useState } from "react";
import axios from "../../library/helpers/axios";
import { Tag ,Select} from "antd";
import IndexMain from "../MainIndex/mainIndex";
import { useSelector } from "react-redux";
import { generateCols } from "../MainIndex/generateCol";
import { FaSearch, FaUserAlt, FaUserCircle } from "react-icons/fa";
import { GrStatusUnknown } from "react-icons/gr";
import { FiType } from "react-icons/fi";
import { SearchOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import config,{status,type} from "./config";
import userConfig from "./../clients/config";
import { toast } from "react-toastify";
import { getPermissions } from "@iso/config/permissions";
import  moment from "moment-hijri";

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
      uniq: "user_id",
      type: "select",
      icon: <FaUserAlt />,
      placeholder: ["user", "user"],
      key: "user_id",
      data: {
        isOnline: true,
        url: "users",
        params: {},
        options: [{ id: null, ["name_en"]: "All" }],
        optionName: "name_en",
      },
    },
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
          { id: 0, ["name_en"]: status[0] },
          { id: 1, ["name_en"]: status[1] },
          { id: 2, ["name_en"]: status[2] },

        ],
        optionName: "name_en",
      },
    },
    {
      uniq: "type",
      type: "select",
      icon: <FiType />,
          placeholder: ["type", "type"],
      key: "type",
      data: {
        isOnline: false,
      //  url: "cities",
     //   params: {},
        options: [
          { id: null, ["name_en"]: "All" },
          { id: 0, ["name_en"]: type[0] },
          { id: 1, ["name_en"]: type[1] },
          { id: 2, ["name_en"]: type[2] },

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
  function changeStatus(id,value) {
    console.log({id},{value})
    const params = {
      status:value
    }
    toast.promise(
      axios['post'](`userRequests/${id}/changeStatus`,params, {
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
   //      showRowURL={config.routes.show}
        deleteRow={{ status: getPermissions(config.permissionName, "delete"), deleteRecord }}
        action={(getPermissions(config.permissionName, "delete")||getPermissions(config.permissionName, "update"))||false}

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
            key:'name',
            content:(text,{first_name,second_name,grand_father_name,family_name,id})=><div>
            
              <Link to={`${userConfig.routes.show}${id}`}>
              {`${first_name} ${second_name} ${grand_father_name} ${family_name}`}
              </Link>
              </div>
          },
        "email", "phone",
      
         {
          key:'type',
          content:(text)=><div>{type[text]}</div>
        },
        {
          key:'status',
          content:(text)=><div>{status[text]}</div>
        },
         {
           title:"Action",
          key:'status',
          content:(text,record)=>text==0&&<><Select
          style={{ width: 100 }}
          // disabled={!text==0}
          value={text==0?status[text]:''+text}
          onChange={(e)=>changeStatus(record.id,e)}
    
        >
          
          <Option value={'1'}>{status[1]}</Option>
          <Option value={'2'}>{status[2]}</Option>
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
