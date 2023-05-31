import React, { useContext, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { APIContext } from "../../App";
import './Search.css';

export default function Search(props) {
const [searchResult,setSearchResult] = useState('');
let {dataApp} = useContext(APIContext)
const [filteredData,setFilteredData] = useState([])
const [over,setOver] = useState(false);

// console.log(data);
function search(e) {
  const x = e.target.value
    let dataF = x ? dataApp?.filter((ele) => ele.name.startsWith(x[0].toUpperCase() +x.slice(1).toLowerCase())) : null
    setFilteredData(dataF)
    setOver(true);

}

console.log();


  return (
    <div className="main_search">
        <AiOutlineSearch />
      <input className="inpSearch" name="" type="search" placeholder="Search..." onChange={search}/>
      
      <div style={{display: over?'flex':'none'}} className="div_search">
     {
      filteredData?.map((el,i)=>
        <div className="div_name" key={i}>
          <div className="name_search" onClick={()=>props?.changeJ(
            dataApp.findIndex(x => x.id === el.id)
          )}>{el.name}</div>
          {/* <img src={e.image.medium} alt="" className="img_search"/> */}
        </div>
        )
     }
      </div>
    </div>
  );
}
