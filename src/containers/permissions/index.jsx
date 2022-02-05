import React, { useState } from "react";
import axios from "../../library/helpers/axios";
import { notification, Tag } from "antd";
import IndexMain from "../MainIndex/mainIndex";
import { useSelector } from "react-redux";
import { generateCols } from "../MainIndex/generateCol";
import { FaSearch, FaCity, FaGlobe, FaUsers } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { SearchOutlined } from "@ant-design/icons";
import config from "./config";
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
        addRowURL={getPermissions("permission", "create")?config.routes.add:false}
        // head filters table
        filters={filters}
        // columns table content
        editRowURL={getPermissions("permission", "update")?config.routes.edit:false}
         // showRowURL={config.routes.show}
         deleteRow={{ status: getPermissions("permission", "delete"), deleteRecord }}
         action={(getPermissions("permission", "delete")||getPermissions("permission", "update"))||false}

         generalCols={generateCols([
          {
            key: "name",
            content: (text, record) =><div style={{textTransform:"capitalize"}}>{text.replace('-'," ")}</div>
          },
          // "description",
          // "title_en",
          // "title_ar",
          // "description_en",
          // "description_ar",
          {
            key: "created_at",
            content: (text, record) =>
           <Tag color="blue">{text?text:moment().format("YYYY-MM-DD")} </Tag>
          },
        ])}
        options={[]}
        // add table props here
      />
    </>
  );
};
export default Countries;
