import React, { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";
import MainMovie from "./comps/home/MainMovie";
import Carusela from "./comps/home/Carusela";
import "./movie.css";
import { APIContext } from "./App";
import Footer from "./comps/footer/Footer";
import { useLocation } from "react-router-dom";

export default function Movie(props) {
  let [data, setData] = useState([]);
  const [i, setI] = useState(1);
  const [j, setJ] = useState(0);
  const [zaner,setZaner] = useState(['Family','Crime','Drama']);
  let {setDataApp , user, changeUrl} = useContext(APIContext)
  let {pathname} = useLocation();
  function sendIndex(id) {
    let index = data.findIndex(element => element.id === id);
    // let index1 = data.findIndex(element => element.id === id);
    if(index > -1){
      setJ(index);
    }
  }

  function changeI(num){
    setI(num)
  }

  function changeJ(num) {
    setJ(num);
  }


  async function getData() {
    const { data } = await axios.get("https://api.tvmaze.com/shows");
    setData(data);
    setDataApp(data);
  }

  useEffect(() => {
    getData();
  }, []);
  
  useEffect(()=>{
    
    if(user.zhaner){
      setZaner(user.zhaner)
    }
  },[user.zhaner])

  return (
    <div>
      <div>
        <MainMovie data={data} i={i - 1} j={j} listAr={props.listAr} sendIndex={sendIndex}  changeI={changeI} changeJ={changeJ} />
        {
          zaner.length > 0 && zaner.map((ele ,i) =>  <Carusela key={i} data={data} sendIndex={sendIndex} changeJ={changeJ} category={ele}/>)
          
        }
        {
          console.log(zaner)
        }
        <Footer/>
      </div>
    </div>
  );
}
