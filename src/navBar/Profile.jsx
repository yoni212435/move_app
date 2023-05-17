import React, { useState } from "react";
import "./profile.css";
// import {BrowserRouter as Router,Routes ,Route,Link} from 'react-router-dom';
import { AiOutlineUser } from "react-icons/ai";
export default function Profile() {
  const [isChecked, setIsChecked] = useState(false);
  const zhaner_arr = [
    "Drama",
    "Science-Fiction",
    "Thriller",
    "Action",
    "Crime",
    "Horror",
    "Romance",
    "Adventure",
    "Espionage",
    "Music",
    "Supernatural",
    "Fantasy",
    "Family",
    "Anime",
    "History",
    "Comedy",
    "Mystery",
    "Medical",
    "Western",
    "Legal",
    "War",
    "Sports",
  ];
  return (
    <div className="main_profile">
      <div className="all_profil">
       
        <button className="profile_icon"><AiOutlineUser/></button>
       
      </div>
      <div className="list_catgeris">
        {zhaner_arr.map((e, i) => (
          <div key={i} className="chak_box">
            <label htmlFor="myCheckbox" className="lable_class">{e}</label>
            <input
              type="checkbox"
              // checked={isChecked}
              // onChange={(e) => setIsChecked(e.target.checked)}
            />
          </div>
        ))}
      </div>
      <div>
        <a className="back_home" href="http://localhost:3000/">
          
          home
        </a>
      </div>
    </div>
  );
}
