import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import MainMovie from "./comps/home/MainMovie";
import Carusela from "./comps/home/Carusela";
// import Test from "./comps/home/Test";
// import Info from "./comps/info/Info";
// import DropDownMenu from "./navBar/DropDownMenu";
import "./movie.css";
// import {BrowserRouter as Router, Route,Routes,Link} from 'react-router-dom'

export const APIContext = createContext();

export default function Movie() {
  let [data, setData] = useState();
  const [i, setI] = useState(1);
  const [j, setJ] = useState(0);
  // const j = 0;

  function changI(num) {
    setI(num);
  }

  function changeJ(num) {
    setJ(num);
  }

  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const { data } = await axios.get("https://api.tvmaze.com/shows");
    setData(data);
    // console.log(data[0]?.id+'ppp');
  }

  return (
    <APIContext.Provider value={data}>
      <div>
        <MainMovie data={data} i={i - 1} j={j} />
        {/* <h1>kkkkkk</h1> */}
        <Carusela data={data} changI={changI} changeJ={changeJ} />
        {/* <Test data={data}/> */}
        {/* <Info data={data} i={i}/> */}
        {/* <DropDownMenu/> */}
      </div>
    </APIContext.Provider>
  );
}
