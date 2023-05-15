import React from "react";
import "./HomePage.css";
import { IoMdLogOut } from "react-icons/io";
// import {BrowserRouter as router, Route,Switch,Link} from 'react-router-dom'
import DropDownMenu from "../../navBar/DropDownMenu";
import Search from "../../navBar/Search";

export default function Nav() {
  return (
    
    <div className="nav_all">
     
      <div className="nav_btn">
        <div className="drop">
      <DropDownMenu/>
      </div>
        
        <div>{/* <button className='btn_profil'>profil</button> */}</div>
      </div>
      <div className="nav_search">
       <Search/>
      </div>
    </div>
  );
}
