import React, { useContext } from 'react'
import { APIContext } from '../../App'


export default function Detiles() {

let {user} = useContext(APIContext);



    return (

        <div className='all_sign_in'>
            <div className="sun_sign_in">
                <div className='form_all'>
                    <div className='div_h1'>
                        <h1 >change details</h1>
                    </div>
                    
                    <div>
                        <h3>{user.email}</h3>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
