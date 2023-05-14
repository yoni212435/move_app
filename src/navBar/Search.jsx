import React, { useContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { APIContext } from "../movie";

export default function Search() {
const [searchResult,setSearchResult] = useState('');
let data = useContext(APIContext)
const [filteredData,setFilteredData] = useState([])
// console.log(data);
function search(e) {
    // console.log(e.target.value);
    let dataF = data?.filter(ele => ele.name.startsWith(e.target.value))
    setFilteredData(dataF)
    console.log(dataF);
}

  return (
    <div>
      
        <AiOutlineSearch />
      
      <input className="inpSearch" name="" type="search" placeholder="Search..." onChange={search}/>
      <p></p>
    </div>
  );
}
