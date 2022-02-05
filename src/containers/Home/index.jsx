import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";

import axios, { URL } from "../../library/helpers/axios";
// import LoaderWave from "@iso/Mcomponents/extended/Loader/loaderWave";
import LoaderWave from "@iso/components/utility/loader";

export const gridSpacing = 3;
export const drawerWidth = 260;
const Dashboard = () => {
  const dispatch = useDispatch();
const [data , setData ] = React.useState(null)
const [loading , setLoading ] = React.useState(false)



  const fetchData = () => {
      dispatch({
    type: "SET",
    payload: [],
  });
    setLoading(true);
    const params = {
    };
    axios['get']('statistics', {
      params,
    }).then((res) => {
   
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  React.useEffect(()=>{
    fetchData()
  },[])
  return (!loading?
    <div style={{ margin: "20px", marginTop: "50px" }}>

 
    </div>:<LoaderWave />
  );
};

export default Dashboard;











