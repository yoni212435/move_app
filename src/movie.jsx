import React, { useEffect, useState } from "react";
import axios from "axios";
import MainMovie from "./comps/home/MainMovie";
import Carusela from "./comps/home/Carusela";
import Test from "./comps/home/Test";

export default function Movie() {
  let [data, setData] = useState();


useEffect(()=>{
    getData();
},[])
  async function getData() {
    const { data } = await axios.get("https://api.tvmaze.com/shows");
    setData(data) ;
  }
  
  return <div>
    <MainMovie data={data} />
    <Carusela data={data} />
    <Test data={data}/>
    </div>;
  
}
