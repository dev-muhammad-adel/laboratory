import React, { useState, useEffect } from "react";
import axios from "../../library/helpers/axios";
import { Popconfirm, Popover, Button, Tooltip } from "antd";
import { useHistory } from "react-router";
import CustomButton from "../../components/new/CustomButton";
import CustomTable from "../../components/new/custom-table";
import { DeleteOutlined, EditOutlined, EyeTwoTone } from "@ant-design/icons";
import { PlusOutlined } from "@ant-design/icons";

// import CustomeSelect from "../../components/new/customSelect";
import CustomInput from "../../components/new/custom-input";
import { Link } from "react-router-dom";
import { Select } from "antd";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import IntlMessages from "@iso/components/utility/intlMessages";
import { Avatar, Table, Breadcrumb, DatePicker } from "antd";
import LayoutContentWrapper from "@iso/components/utility/layoutWrapper";
import Search from "./filters/search";
import useWindowSize from "@iso/lib/hooks/useWindowSize";

const { RangePicker } = DatePicker;
const { Option } = Select;
let defaultObj = {};

// const { Option } = Select;
const Countries = ({
  fetcher,
  indexRequest,
  Breadcrumb,
  addRowURL,
  editRowURL,
  showRowURL,
  deleteRow,
  generalCols,
  options,
  filters,
  action,
  ...others
}) => {
  let number = {
    title: "numbers".translate(),
    dataIndex: "id",
    key: "id",
    width: "60px",

    render: (text, record, index) => {
      return <a href=""> {index + 1 + start} </a>;
    },
  };
  const { width, height } = useWindowSize();

  const actions = [
    {
      title: "Actions",
      dataIndex: "id",
      key: "id",
      render: (text, record, index) => (
        <div style={{ color: "#646D82", cursor: "pointer" }} className="d-flex">
          {editRowURL && (
            <Link to={`${editRowURL}${record.id}`}>
              <Button shape="circle" style={{ margin: " 2px" }}>
                <EditOutlined />
              </Button>
            </Link>
          )}
          {showRowURL && (
            <Link to={`${showRowURL}${text}`}>
              <Button shape="circle" style={{ margin: " 2px" }}>
                <EyeTwoTone />
              </Button>
            </Link>
          )}

          {deleteRow?.status ? (
            <Popconfirm
              placement="top"
              title="You Want to Delete this ?"
              okText="Delete"
              onConfirm={() => deleteRow.deleteRecord(record)}
              cancelText="cancel"
            >
              <Button shape="circle" style={{ margin: " 2px" }}>
                <DeleteOutlined style={{ color: "mediumvioletred" }} />
              </Button>
            </Popconfirm>
          ) : (
            ""
          )}
        </div>
      ),
    },
  ];
  function handleVisibleChange({ uniq }) {
    setShowFilter((e) => ({ ...e, [uniq]: !showFilter[uniq] }));
  }
  // state show and hide each filter
  const [showFilter, setShowFilter] = useState({});
  const [filtersSwap, setFiltersSwap] = useState(filters);

  // filters components
  const SearchComponent = (el) => (
    <>
      <Tooltip
        title={getLang == "ar" ? el?.placeholder[0] : el?.placeholder[1]}
        color={"#02a79f "}
        placement="bottom"
      >
        <Popover
          content={SearchContent(el)}
          trigger="click"
          visible={showFilter[el.uniq]}
          onVisibleChange={() => handleVisibleChange(el)}
          placement="topLeft"
        >
          <Button className="closed-input" shape="circle">
            {el.icon}
          </Button>
        </Popover>
      </Tooltip>
    </>
  );

  const DateComponent = (el) => (
    <>
      <Tooltip
        title={getLang == "ar" ? el?.placeholder[0] : el?.placeholder[1]}
        color={"#02a79f "}
        placement="bottom"
      >
        <Popover
          content={DateContent(el)}
          trigger="click"
          visible={showFilter[el.uniq]}
          onVisibleChange={() => handleVisibleChange(el)}
          placement="topLeft"
        >
          <Button className="closed-input" shape="circle">
            <span role="img" aria-label="plus" class="anticon anticon-plus">
              {el.icon}
            </span>
          </Button>
        </Popover>
      </Tooltip>
    </>
  );

  const SelectComponent = (el, index) => (
    <>
      <Tooltip
        title={getLang == "ar" ? el?.placeholder[0] : el?.placeholder[1]}
        color={"#02a79f "}
        placement="bottom"
      >
        <Popover
          content={SelectContent(el, index)}
          trigger="click"
          visible={showFilter[el.uniq]}
          onVisibleChange={() => handleVisibleChange(el)}
          placement="topLeft"
        >
          <Button className="closed-input" shape="circle">
            <span role="img" aria-label="plus" class="anticon anticon-plus">
              {el.icon}
            </span>
          </Button>
        </Popover>
      </Tooltip>
    </>
  );
  const SearchContent = ({ placeholder, key }) => (
    <Search
      style={{ width: 200 }}
      placeholder={getLang == "ar" ? placeholder[0] : placeholder[1]}
      onChange={(e) => {
        e.target?.value
          ? setFiltersParams((old) => ({
              ...old,
              [key]: e.target.value,
            }))
          : delete filtersParams[key] &&
            setFiltersParams((old) => ({ ...old }));
        setStart(0);
        pagination.current = 1;
      }}
    />
  );

  ////////// *********************** /////////
  const DateContent = ({ placeholder, key }) => (
    <RangePicker
      style={{ width: 200 }}
      placeholder={getLang == "ar" ? placeholder?.ar : placeholder?.en}
      onChange={(e) => {
        if (e) {
          const startData = moment(e[0]).format("YYYY-MM-DD");
          const endDate = moment(e[1]).format("YYYY-MM-DD");

          setFiltersParams((old) => ({
            ...old,
            [key?.[0]]: startData,
            [key?.[1]]: endDate,
          }));
          setStart(0);
          pagination.current = 1;
        } else {
          delete filtersParams[key[0]];
          delete filtersParams[key[1]];
          setFiltersParams((old) => ({ ...old }));

          setStart(0);
          pagination.current = 1;
        }
      }}
    />
  );

  ////////// *********************** /////////
  const SelectContent = ({ placeholder, key, data }, index) => {
    return (
      <Select
        style={{ width: 200 }}
        showSearch
        value={filtersParams[key]}
        onChange={(e) => {
          if (e) {
            setFiltersParams((old) => ({
              ...old,
              [key]: e,
            }));
          } else {
            delete filtersParams[key];
            setFiltersParams((old) => ({ ...old }));
          }

          setStart(0);
          pagination.current = 1;
        }}
        placeholder={getLang == "ar" ? placeholder[0] : placeholder[1]}
        optionFilterProp="children"
      >
        {filtersSwap[index].data?.options?.map((option) => (
          <Option value={option.id}>{option[data?.optionName]}</Option>
        ))}
      </Select>
    );
  };

  const AllFilterComponents = () =>
    filtersReady &&
    filters.map((el, index) => (
      <>
        <>{el.type == "search" && SearchComponent(el)}</>
        <>{el.type == "dateFromTo" && DateComponent(el)}</>
        <>{el.type == "select" && SelectComponent(el, index)}</>
      </>
    ));

  const getOptionsFilter = ({ url, params }, index, filterFinish) => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params,
      })
      .then((res) => {
        filters[index].data.options = [
          ...filters[index].data.options,
          ...res.data.data,
        ];
        setFiltersSwap(filters);
        filterFinish && setFiltersReady(filterFinish);
      })
      .catch((err) => {
        //     history.push("/500");
      });
  };
  const [filtersReady, setFiltersReady] = useState(false);

  useEffect(() => {
    filters &&
      filters.forEach((element, index) => {
        element?.data?.isOnline &&
          getOptionsFilter(
            element.data,
            index,
            index + 1 == filters.length ? true : false
          );
        !element?.data?.isOnline &&
          index + 1 == filters.length &&
          setFiltersReady(true);
      });
  }, [width]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [start, setStart] = useState(0);
  const dispatch = useDispatch();

  const [pagination, setPagination] = useState({});
  const [filtersParams, setFiltersParams] = useState(defaultObj);

  useEffect(() => {
    filters.forEach((e) => {
      defaultObj[e.key] =
        e.data?.defaultSelectValue || e.data?.defaultSelectValue == 0
          ? e.data?.defaultSelectValue
          : null;
    });
  }, []);

  const token = useSelector((state) => state.Auth.idToken);

  const fetchData = (url, { method, params: p }) => {
    const params = {
      skip: start,
      ...p,
      ...filtersParams,
    };

    setLoading(true);
    axios[method](url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params,
    })
      .then((res) => {
        setData(res.data);
        console.log(res.data.data);

        let y = {};
        res.data.data.forEach((data, index) => {
          if (typeof y[data.name.split("_")[1]] != "object") {
            y[data.name.split("_")[1]] = {};
          }
          Object.defineProperty(
            y[data.name.split("_")[1]],
            [data.name.split("_")[0]],
            {
              enumerable: true,
              configurable: true,
              writable: true,
              value: 1,
            }
          );
        });

        console.log(y);

        pagination.pageSize = 10;
        setPagination({ total: res.data.count, pageSize: 10 });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const getLang = localStorage.getItem("lang");

  useEffect(() => {
    fetchData(indexRequest?.[1], indexRequest?.[0]);
  }, [filtersParams, start, fetcher]);

  const pageChange = (pagination) => {
    const pager = { ...pagination };
    pager.current = pagination.current;
    setPagination(pager);
    setStart((pager.current - 1) * 10);
  };
  dispatch(Breadcrumb);

  const [col, setCol] = useState([generalCols[0]]);
  let allCols = [...generalCols, ...options];
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setCol([generalCols[counter]]);
  }, [counter]);

  function nextCol() {
    setCounter((e) =>
      e >= 0 && e < allCols.length - 1 ? e + 1 : allCols.length - 1
    );
  }
  function prevCol() {
    setCounter((e) => (e > 0 ? e - 1 : e));
  }

  return (
    data &&
    pagination && (
      <LayoutContentWrapper>
        {action == false ? (
          <>
            <CustomTable
              //  filters={AllFilterComponents}
              // add={addRowURL && addRowURL}
              title={() => (
                <>
                  <div
                    style={{
                      margin: "10px",
                      display: "flex",
                      //   flexDirection: "row-reverse",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      {addRowURL && (
                        <Tooltip
                          title={getLang == "ar" ? "اضافة" : "Add"}
                          color={"#02a79f "}
                          placement="bottom"
                        >
                          <Button
                            onClick={() => history.push(addRowURL)}
                            shape="circle"
                            type="primary"
                            style={{ margin: " 2px" }}
                          >
                            <PlusOutlined />
                          </Button>
                        </Tooltip>
                      )}
                      {AllFilterComponents()}
                    </div>
                    {/* {width <= 768 ? (
                      <div>
                        <Button
                          shape="circle"
                          // type="primary"
                          style={{ margin: " 2px" }}
                          onClick={prevCol}
                        >
                          <LeftOutlined />
                        </Button>
                        <Button
                          shape="circle"
                          // type="primary"
                          style={{ margin: " 2px" }}
                          onClick={nextCol}
                        >
                          <RightOutlined />
                        </Button>
                      </div>
                    ) : (
                      ""
                    )} */}
                  </div>
                </>
              )}
              footerContent={[data.count, indexRequest?.[1].translate()]}
              pagination={{ ...pagination, position: ["bottomCenter"] }}
              loading={loading}
              showSizeChanger={false}
              columns={
                false //width <= 768
                  ? [number, ...col, ...options]
                  : [number, ...generalCols, ...options]
              }
              onChange={pageChange}
              dataSource={data.data}
              scroll={{ x: 900 }}
            />
          </>
        ) : (
          <>
            <CustomTable
              //filters={AllFilterComponents}
              add={addRowURL}
              title={() => (
                <>
                  <div
                    style={{
                      margin: "10px",
                      display: "flex",
                      //   flexDirection: "row-reverse",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      {addRowURL && (
                        <Tooltip
                          title={getLang == "ar" ? "اضافة" : "Add"}
                          color={"#02a79f "}
                          placement="bottom"
                        >
                          <Button
                            onClick={() => history.push(addRowURL)}
                            shape="circle"
                            type="primary"
                            style={{ margin: " 2px" }}
                          >
                            <PlusOutlined />
                          </Button>
                        </Tooltip>
                      )}
                      {AllFilterComponents()}
                    </div>
                    {/* {width <= 768 ? (
                      <div>
                        <Button
                          shape="circle"
                          // type="primary"
                          style={{ margin: " 2px" }}
                          onClick={prevCol}
                        >
                          <LeftOutlined />
                        </Button>
                        <Button
                          shape="circle"
                          // type="primary"
                          style={{ margin: " 2px" }}
                          onClick={nextCol}
                        >
                          <RightOutlined />
                        </Button>
                      </div>
                    ) : (
                      ""
                    )} */}
                  </div>
                </>
              )}
              footerContent={[data.count, indexRequest?.[1].translate()]}
              pagination={{ ...pagination, position: ["bottomCenter"] }}
              loading={loading}
              showSizeChanger={false}
              columns={
                false // width <= 768
                  ? [number, ...col, ...options, ...actions]
                  : [number, ...generalCols, ...options, ...actions]
              }
              onChange={pageChange}
              dataSource={data.data}
              scroll={{ x: 900 }}
            />
          </>
        )}
      </LayoutContentWrapper>
    )
  );
};
export default Countries;
