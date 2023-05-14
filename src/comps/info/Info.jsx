import React, { useContext } from "react";
import "./info.css"
import { APIContext } from "../../movie";


export default function Info({i}) {
  // let i;
  let data = useContext(APIContext)
  // console.log(data);
//  console.log(data);
  return (
    <div className="all_info" >
      <div>
  {
  data && <img  src={data[i]?.image?.medium} alt="main img" width='250px'  />
  }
  </div>
  <div className="list_info">
  {
  data && <p>name: {data[i]?.name}</p>
  }
  {
  data && <p>language: {data[i]?.language}</p>
  }
  {
  data && <p>premiered: {data[i]?.premiered}</p>
  }
  {
  data && <p>rating: {data[i]?.rating.average}</p>
  }
  {
  data && <p>name company: {data[i]?.network.name}</p>
  }
  {
  data && <div dangerouslySetInnerHTML={{__html: data[i]?.summary}}></div>
  }  
  </div>
     </div>
   
  );
}
