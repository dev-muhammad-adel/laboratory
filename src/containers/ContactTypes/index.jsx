import React, { useState } from "react";
import axios from "../../library/helpers/axios";
import { notification } from "antd";
import IndexMain from "../MainIndex/mainIndex";
import { useSelector } from "react-redux";
import { generateCols } from "../MainIndex/generateCol";
import { FaSearch, FaCity } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { SearchOutlined } from "@ant-design/icons";
import config from "./config";
import { toast } from "react-toastify";
import { getPermissions } from "@iso/config/permissions";

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
    //   type: "select",
    //   placeholder: ["النوع", "Type"],
    //   icon: <MdDateRange />,
    //   key: "type",
    //   data: {
    //     isOnline: true,
    //       url: "cities",
    //     //   params: {},
    //     options: [
    //       { id: null, ["name_en"]: "All" },
    //     ],
    //     optionName: "name_en",
    //   },
    // },
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
       addRowURL={getPermissions("contactTypes", "create")?config.routes.add:false}
        // head filters table
        filters={filters}
        // columns table content
        editRowURL={getPermissions("contactTypes", "update")?config.routes.edit:false}
        // showRowURL={config.routes.show}
        deleteRow={{ status: getPermissions("contactTypes", "delete"), deleteRecord }}
        action={(getPermissions("contactTypes", "delete")||getPermissions("contactTypes", "update"))||false}
      
        generalCols={generateCols([
          "title_en",
          "title_ar",
        ])}
        options={[]}
        // add table props here
      />
    </>
  );
};
export default Countries;
