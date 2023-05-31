import React, { useContext } from "react";
import "./info.css"
// import { APIContext } from "../../movie";


export default function Info({j,data}) {
  // let i;
  // let {data} = useContext(APIContext)
  // console.log(data);
//  console.log(data);
  return (
    <div className="all_info" >
      <div>
  {
  data && <img  src={data[j]?.image?.medium} alt="main img" width='250px'  />
  }
  </div>
  <div className="list_info">
  {
  data && <p>name: {data[j]?.name}</p>
  }
  {
  data && <p>language: {data[j]?.language}</p>
  }
  {
  data && <p>premiered: {data[j]?.premiered}</p>
  }
  {
  data && <p>rating: {data[j]?.rating.average}</p>
  }
  {
  data && <p>name company: {data[j]?.network.name}</p>
  }
  {
  data && <div dangerouslySetInnerHTML={{__html: data[j]?.summary}}></div>
  }  
  </div>
     </div>
   
  );
}
