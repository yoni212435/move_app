import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import MainMovie from "./comps/home/MainMovie";
import Carusela from "./comps/home/Carusela";
import "./movie.css";

export const APIContext = createContext();

export default function Movie(props) {
  let [data, setData] = useState();
  const [i, setI] = useState(1);
  const [j, setJ] = useState(0);
  // const [listAr, setListAr] = useState([])
  // const [listArIndex, setListArIndex] = useState([])

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
  }

  return (
    <APIContext.Provider value={{data}}>
      <div>
        <MainMovie data={data} i={i - 1} j={j} listAr={props.listAr} />
        <Carusela data={data} changI={changI} changeJ={changeJ} />
      </div>
    </APIContext.Provider>
  );
}
