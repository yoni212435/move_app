import React, { useState } from "react";
import "./MainMovie.css";
import Nav from "./Nav";
import Carusela from "./Carusela";
import { AiOutlinePlayCircle, AiOutlineInfoCircle } from "react-icons/ai";
import Info from "../info/Info";
import { IoMdLogOut } from "react-icons/io";
// import {BrowserRouter as router, Route,Switch,Link, Router} from 'react-router-dom'

export default function MainMovie(props) {
  let img = props?.data?.[props.j]?.image?.original;
  // let img1 = props.data;
  // let summary = props?.data?.[props.i]?.summary;
  const [over, setOver] = useState(false);

  let list_ar = [];
  // list_ar.push(7)
  // console.log(list_ar);
  function changeInfo() {
    setOver(!over);
  }

  return (
    <div className="main_all">
      <Nav />
      <div className="main_watch_info">
        <img src={img} className="img_all" />
        <div className="btn_div_watch">
          <button
            className="btn_watch"
            onClick={() => {
              list_ar.push(props.j);
            }}
          >
            <AiOutlinePlayCircle /> WATCH
          </button>
        </div>

        <div className="btn_div_info">
          <button className="btn_info" onClick={changeInfo}>
            <AiOutlineInfoCircle /> INFO
          </button>
        </div>
      <button className="btn_log">
          <IoMdLogOut className="logo_logout" /> LOG OUT
        </button>
      </div>
      <div className="info_comp" style={{ display: over ? "block" : "none" }}>
        <Info i={props.i} />
      </div>
      {/* <Carusela  changI={changI} /> */}
    </div>
  );
}
