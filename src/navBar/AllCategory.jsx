import React, { useContext } from 'react'
import { APIContext } from '../movie'
import { useState } from 'react'
import './Allcategory.css'
import { Link } from 'react-router-dom'


export default function AllCategory() {
const zhaner_arr = [
  'Drama', 'Science-Fiction', 'Thriller',
  'Action', 'Crime',
  'Horror', 'Romance',
   'Adventure','Espionage',
  'Music','Supernatural','Fantasy',
  'Family','Anime',
  'History', 'Comedy','Mystery',
  'Medical', 'Western', 'Legal',
 'War', 'Sports'
]
    let data = useContext(APIContext)
const [over, setOver]=useState(false)

function change(){
setOver(!over);
}


  return (
    <div>
      <button className='btn_li_all' onClick={ change}>All Category
     </button>
   <div className='menu_catgeris' style={{display: over? 'flex': 'none' }}>  <ul className='ul_categorys' style={{display: over? 'flex': 'none' }}>
 {
  zhaner_arr.map((ele,i)=> 
    <li key={i} className='li_categorys'><button  className='btn_li_cat'>{ele}</button></li>)
 }
 
</ul>
</div>
    </div>
  )
}





//  Drama', 'Science-Fiction', 'Thriller,
//  'Action', 'Crime',
//  'Horror', 'Romance',
//  'Thriller' , 'Adventure','Espionage',
//  'Music','Supernatural','Fantasy',
// 'Adventure', 'Family','Anime',
//  'History', 'Comedy','Mystery', 'Mystery',
//  'Medical', 'Western', 'Legal',
// 'War', 'Sports', 'Espionage'
