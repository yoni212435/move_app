import React, { useContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { APIContext } from "../movie";
import './Search.css';

export default function Search() {
const [searchResult,setSearchResult] = useState('');
let {data} = useContext(APIContext)
const [filteredData,setFilteredData] = useState([])
const [over,setOver] = useState(false);
// console.log(data);
function search(e) {
    // console.log(e.target.value);
    let dataF = data?.filter(ele => ele.name.startsWith(e.target.value))
    setFilteredData(dataF)
    console.log(dataF);
    setOver(!over);

}

  return (
    <div>
      
        <AiOutlineSearch />
      
      <input className="inpSearch" name="" type="search" placeholder="Search..." onChange={search}/>
      <p></p>
      <div style={{display: over?'flex':'none'}}>
     {
      filteredData.map(e=>
        <div>
          <img src={e.image.medium} alt="" />
        </div>
        )
     }
      </div>
    </div>
  );
}
