import React, { useContext, useEffect, useState } from "react";
import "./profile.css";
import { AiOutlineUser } from "react-icons/ai";
import Detiles from "./Detiles";
import { Link, useLocation } from "react-router-dom";
import AllCategory from "./AllCategory";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { APIContext } from "../../App";


export default function Profile() {
  const {user,changeUrl}  = useContext(APIContext);
  const [over, setOver] = useState(false);
  const [over1, setOver1] = useState(false);
  const [over2, setOver2] = useState(false);
  let {pathname} = useLocation();
  const zhaner_arr = [
    "Drama",
    "Science-Fiction",
    "Thriller",
    "Action",
    "Crime",
    "Horror",
    "Romance",
    "Adventure",
    
    "Supernatural",
    "Fantasy",
    "Family",
    
    
    "Comedy",
    "Mystery",
    "Medical",
    
    "Legal",
    
    
  ];

  // "Western","War","Sports","Music","Espionage","Anime","History",
    

  const [arr_zaner, setArr_zaner] = useState([]);
  const db = getFirestore();


  function updetDbCatgories(){
    if(arr_zaner.length > 0){
      console.log(3);
      updateDoc(doc(db,'users',user.docId),{zhaner:arr_zaner})
    }
  }
 
changeUrl(pathname);
  function changeCatgorys() {
    if (over || over2) {
      setOver1(false);
      setOver2(false);
      setOver(true);
    } else {
      setOver(true);
      setOver1(false);
      setOver2(false);
    }
  }

  function changeDatiles() {
    if (over1 || over2) {
      setOver(false);
      setOver2(false);
      setOver1(true);
    } else {
      setOver1(true);
      setOver(false);
      setOver2(false);
    }
  }

  function cangeAllCatgorys() {
    if (over || over1) {
      setOver(false);
      setOver1(false);
      setOver2(true);
      // console.log(over,over1,over2,'cangeAllCatgorys');
    } else {
      setOver2(true);
      setOver1(false);
      setOver(false);
      // console.log(over,over1,over2,'cangeAllCatgorys','else');
    }
  }

useEffect(()=>{
  updetDbCatgories();
},[arr_zaner.length])
  
  return (
    <div className="main_profile">
      <div className="div_btn_profile">
        <button className="btn_profile" onClick={changeCatgorys}>
          change categoris
        </button>

        <button className="btn_profile" onClick={changeDatiles}>
          my detils
        </button>
        <button className="btn_profile" onClick={cangeAllCatgorys}>
          all categorys
        </button>
      </div>
      <div className="list_catgeris">
        {zhaner_arr.map((el, i) => (
          <div
            key={i}
            className="chak_box"
            style={{ display: over ? "block" : "none" }}
          >
            <label htmlFor="myCheckbox" className="lable_class">
              {el}
            </label>
            <input
              type="checkbox"
              name={el}
              onChange={(e) => {
                if (arr_zaner.length >= 3) {
                  alert("You have up to three choices");
                  e.target.checked = false;
                }

                if (e.target.checked) {
                  setArr_zaner([...arr_zaner, el]);
                } else {
                  let newArrey = arr_zaner.filter((ele) => ele !== el);
                  setArr_zaner(newArrey);
                }
              }}
            />
            
          </div>
        ))}
        <div style={{ display: over1 ? "block" : "none" }}>
          <Detiles />
        </div>

        <div style={{ display: over2 ? "block" : "none" }}>
          <AllCategory />
        </div>
      </div>

      <div>
        <Link className="back_home" to={'/'}>
          home
        </Link>
      </div>
    </div>
  );
}