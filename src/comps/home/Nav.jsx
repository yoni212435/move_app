import React from 'react'
import './HomePage.css'

export default function Nav() {
    return (
        <div className='nav_all'>
            <div className='nav_btn' >
                <button className='btn_log'>log out</button>
                <p className='p_name'>profil</p>
            </div>
            <div>
                <label htmlFor="" >Search</label>
                <input  className='inpSearch'  type="text" placeholder='Search...' />
            </div>
        </div>
    )
}
