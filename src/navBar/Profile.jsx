import React, { useState } from 'react'
import './profile.css'
// import {BrowserRouter as Router,Routes ,Route,Link} from 'react-router-dom';


export default function Profile() {
  const [isChecked, setIsChecked] = useState(false);
  const zhaner_arr = [
    'Drama', 'Science-Fiction', 'Thriller',
    'Action', 'Crime',
    'Horror', 'Romance',
    'Adventure', 'Espionage',
    'Music', 'Supernatural', 'Fantasy',
    'Family', 'Anime',
    'History', 'Comedy', 'Mystery',
    'Medical', 'Western', 'Legal',
    'War', 'Sports'
  ]
  return (
    <div className='main_profile'>
      <div className='all_profil'>
        <h1>name of user</h1>
        <p>פרטי המשתמש +אפשרות לשינוי</p>
        <p>אפשרות לשינוי השלוש קטגוריות</p>
        <button className='btn_change'>Change details</button>
      </div>
      <div className='list_catgeris'>
            <label htmlFor="myCheckbox">My Checkbox</label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
      </div>
      <div>
        <a className='back_home' href='http://localhost:3000/'> home </a>
      </div>
    </div>
  )
}