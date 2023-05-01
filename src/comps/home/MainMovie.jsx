import React, { useState } from 'react'
import './MainMovie.css'

export default function MainMovie(props) {
    
    
const[i,setI] = useState(0)
let img = props?.data?.[i]?.image?.original;


  return (
    <div className='main_all'>
<img src={img} className='img_all'/>

<button onClick={()=>setI(i+1)}>m</button>

{console.log(i)}
    </div>
  )
}
