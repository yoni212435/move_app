import React, { useEffect, useState } from "react";
import axios from "axios";
import MainMovie from "./comps/home/MainMovie";

export default function Movie() {
  let [data, setData] = useState();
//   let arr = [9];

useEffect(()=>{
    getData();
},[])
  async function getData() {
    const { data } = await axios.get("https://api.tvmaze.com/shows");
    // console.log(data);
    setData(data) ;
    // console.log(data);
    // console.log(arr[0]);
  }
  
  return <div><MainMovie data={data} /></div>;
}
