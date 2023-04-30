import React from 'react'
import './sign.css'

export default function SignUp() {
  return (
    <div className='all_sign_in'>
       
        <div className="sun_sign_in">
        <h1>welcome to movie land </h1>

        <form className='form_all'>

        <div className="name">
        <p className='name'>name:</p>
        <input className='inp_name' type="text" placeholder='name' />
        </div>
        <div className="pass">
        <p className='pass'>password:</p>
        <input className='inp_pass' type="pass" placeholder='password' />
        </div>
        <button className='btn_sign'>sign up</button>
        </form>
        </div>
    </div>
  )
}
