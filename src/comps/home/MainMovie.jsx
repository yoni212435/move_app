import React, { useState, useContext } from "react";
import "./MainMovie.css";
import Nav from "./Nav";
import {AiOutlinePlayCircle, AiOutlineInfoCircle,AiOutlinePlusCircle,} from "react-icons/ai";
import Info from "../info/Info";
import { APIContext } from "../../movie";
// import {BrowserRouter as router, Route,Switch,Link, Router,useNavigate} from 'react-router-dom'
export default function MainMovie(props) {
  
  let img = props?.data?.[props.j]?.image?.original;
  const [over, setOver] = useState(false);
  const [ShowIconAdd, setShowIconAdd] = useState(false);
  // const naviget = useNavigate();
  // const { listAr  } = useContext(APIContext);

  function changeInfo() {
    setOver(!over);
  }

  function changeAdd() {
    setShowIconAdd(!ShowIconAdd);
  }

  function addToMyList() {
    if (!props.listAr.includes(props.data[props.j])) {
      props.listAr.push(props.data[props.j])
    }
    
    console.log(props.listAr);
  }

  return (
    <div className="main_all">
      <Nav />
      <div className="main_watch_info">
         {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src={img} className="img_all" />
        <div className="btn_div_watch">
          <button className="btn_watch">
            <AiOutlinePlayCircle /> WATCH
          </button>
        </div>

        <div className="btn_div_info">
          <button className="btn_info" onClick={changeInfo}>
            <AiOutlineInfoCircle /> INFO
          </button>
        </div>
      </div>
      <div className="info_comp" style={{ display: over ? "block" : "none" }}>
        <Info i={props.i} />
      </div>
      <div className="div_add" onMouseOver={changeAdd} onClick={addToMyList}>
        <AiOutlinePlusCircle className="icon_add" />
        <div
          style={{ display: ShowIconAdd ? "block" : "none" }}
          className="div_masseg_add"
        >
          add movie to MyList
        </div>
      </div>
    </div>
  );
}
