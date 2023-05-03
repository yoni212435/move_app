import React, { useState } from 'react'
import './MainMovie.css'
import Nav from './Nav';
import Carusela from './Carusela';

export default function MainMovie(props) {


  const [i, setI] = useState(0)
  let img = props?.data?.[i]?.image?.original;


  return (
    <div className='main_all'>
      <div></div>
      <Nav />
      <img src={img} className='img_all' />
      {/* <button onClick={() => setI(i + 1)}>m</button> */}
      <h2 className='float'>Lorem ipsum, dolor <br /> sit amet consectetur adipisicing elit. Assumenda, alias?</h2>
      <br />
      <div className='btn_div'>
        <button className=' btn'>WATCH</button>
        <button className=' btn'>MY LIST</button>
      </div>
     
      {/* {console.log(i)} */}
      {/* <Carusela/> */}
    </div>
  )
}
